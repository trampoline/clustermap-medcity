(ns clustermap.core
  (:require-macros [hiccups.core :as hiccups]
                   [cljs.core.async.macros :refer [go]])
  (:require
   [clojure.string :as str]
   [devtools.core :as devtools]
   [om.core :as om :include-macros true]
   [jayq.core :refer [$]]
   [clustermap.api :as api]
   [clustermap.app :as app]
   [clustermap.filters :as filters]
   [clustermap.formats.time :as time]
   [clustermap.formats.number :as num :refer [div! *! -! +!]]
   [clustermap.formats.money :as money]
   [clustermap.components.map :as map]
   [clustermap.components.filter :as filter]
   [clustermap.components.search :as search]
   [clustermap.components.select-chooser :as select-chooser]
   [clustermap.components.checkbox-boolean :as checkbox-boolean]
   [clustermap.components.color-scale :as color-scale]
   [clustermap.components.map-report :as map-report]
   [clustermap.components.table :as table]
   [clustermap.components.ranges-table :as ranges-table]
   [clustermap.components.ranges-chart :as ranges-chart]
   [clustermap.components.timeline-chart :as timeline-chart]
   [clustermap.components.tag-histogram :as tag-histogram]
   [clustermap.components.geo-sponsors :as geo-sponsors]
   [clustermap.components.filter-component-description :as filter-component-description]
   [clustermap.components.filter-description :as filter-description]
   [clustermap.components.text :as text]
   [clustermap.components.company-info :as company-info]
   [clustermap.components.nav-button :as nav-button]
   [clustermap.components.action-button :as action-button]
   [clustermap.components.action-link :as action-link]
   [clustermap.components.chart-helpers :as chart-helpers]
   [clustermap.boundarylines :as bl]
   [clustermap.util :as util :refer [inspect]]
   [cljs.core.async :refer [chan <! put! sliding-buffer >!]]
   [schema.core :as s :refer-macros [defschema]]))

(def RELEASE "@define {string}" "")
(def RAVEN_DSN "@define {string}" "")

;; assume we are in dev-mode if there is repl support
(def ^:private dev-mode (some-> js/window .-config .-repl))
(when ^boolean js/goog.DEBUG
  (inspect "debug")
  (devtools/install! :all))
(when-not ^boolean js/goog.DEBUG
  (inspect (-> (js/Raven.config ^string clustermap.core/RAVEN_DSN
                                #js {:release ^string clustermap.core/RELEASE})
               .install)))

(if ^boolean js/goog.DEBUG (devtools/install!))

;; the IApp object
(def ^:private app-instance (atom nil))

(defn get-app-state-atom
  []
  (-> app-instance
      deref
      clustermap.app/get-state))

(def max-lag-months 22)

;; tests that latest and previous accounts are not too old
(def current-filter {:nested {:path "?accounts"
                              :filter {:bool {:must [{:term {"rank" 1}}
                                                     {:range {"accounts_date" {:gte (time/format-date (time/months-ago max-lag-months))}}}]}}}})

;; scaleup query : is this a scaleup considering accounts of rank n
;; (1 = latest, 2 = previous, 3 = 2 years prior etc)
(defn scaleup-rank-filter
  [n]
  {:bool {:must [{:nested {:path "?accounts"
                           :filter {:bool {:must [{:term {"rank" n}}
                                                  {:range {"accounts_date" {:gte (time/format-date (time/months-ago (+ max-lag-months (* 12 (dec n)))))}}}
                                                  {:range {"turnover_delta_norm" {:gte 0.2}}}]}}}}
                 {:nested {:path "?accounts"
                           :filter {:bool {:must [{:term {"rank" (inc n)}}
                                                  {:range {"accounts_date" {:gte (time/format-date (time/months-ago (+ max-lag-months (* 12 n))))}}}
                                                  {:range {"turnover_delta_norm" {:gte 0.2}}}
                                                  {:range {"employee_count" {:gte 10}}}
                                                  {:range {"turnover" {:gte 1000000}}}]}}}}]}})
;; is this currently a scale-up
(def scaleup-filter
  (scaleup-rank-filter 1))

;; was this a scaleup a year previously
(def previous-scaleup-filter
  (scaleup-rank-filter 2))

(defn boundaryline-filter
  [boundaryline-id]
  (when boundaryline-id
    {:nested {:path "?boundarylines"
              :filter {:term {"boundaryline_id" boundaryline-id}}}}))

(defn make-boundaryline-selection
  [boundaryline-id]
  (let [app-state (app/get-state @app-instance)
        ch (when boundaryline-id
             (bl/get-or-fetch-boundaryline app-state :boundarylines boundaryline-id))]
    (go
      (let [bl (when ch (<! ch))]
        (.log js/console bl)
        (let [bl-filter (when boundaryline-id (boundaryline-filter boundaryline-id))
              bl-name (when boundaryline-id (aget bl "compact_name"))

              updated-filters (filters/update-filter-component (get-in @app-state [:dynamic-filter-spec])
                                                               :boundaryline
                                                               bl-filter
                                                               bl-name
                                                               boundaryline-id)]
          (.log js/console (clj->js updated-filters))

          (swap! app-state
                 assoc-in
                 [:dynamic-filter-spec]
                 updated-filters))))))

(defn make-company-selection
  [natural-id]
  (let [state-atom (get-app-state-atom)
        components (get-in @state-atom [:selection-filter-spec :components])
        components (assoc-in components [:natural-id] {:term {"?natural_id" natural-id}})
        base-filters (get-in @state-atom [:selection-filter-spec :base-filters])
        composed (filters/compose-filters components base-filters)]
    (swap! state-atom update-in [:selection-filter-spec] merge {:components components :composed composed})))

(defn company-link-render-fn
  [name record]
  [:a {:href "#"
       :target "_blank"
       :onClick (fn [e]
                  (.preventDefault e)
                  (make-company-selection (:?natural_id record))
                  (app/navigate @app-instance "company"))}
   name])

(defn remove-boro
  "Remove annoying boro text"
  [text]
  (-> text str (str/replace  " London Boro" "")))

(defn sign-icon
  [n]
  (cond
    (> n 0) [:i.icon-positive]
    (< n 0)  [:i.icon-negative]
    :else nil))


(def initial-state
  {:boundarylines {
                   :collections {
                                 "uk_boroughs" {:index nil
                                                :rtree nil
                                                :boundarylines {}}
                                 ;; "uk_wards" {:index nil
                                 ;;             :rtree nil
                                 ;;             :boundarylines {}}
                                 "uk_regions" {:index nil
                                               :rtree nil
                                               :boundarylines {}}}
                   :boundarylines {}}

   :dynamic-filter-spec {:id :coll

                         :open true

                         ;; dynamic components
                         :components {}

                         ;; {:boundaryline nil,
                         ;;              :sector {:bool
                         ;;                       {:should
                         ;;                        [{:nested
                         ;;                          {:path "?tags",
                         ;;                           :filter {:bool
                         ;;                                    {:must [{:term {"type" "broad_12_sectors"}}
                         ;;                                            {:term {"tag" "knowledge_intensive_professional_services"}}]}}}}]}}}

                         ;; dynamic component descriptions
                         :component-descrs {} ;;{:sector "Sector: Knowledge Intensive Professional Services"}

                         ;; dynamic component url descriptions
                         :url-components {} ;;{:sector "knowledge_intensive_professional_services"}

                         ;; filters to compose with components
                         :base-filters {:all nil}

                         ;; horrible to be setting a default filter like this TODO
                         ;; make filter spec simple (in terms of filter-component/keys),
                         ;; and convert to ES filters later
                         :composed {}
                         ;; {:all
                         ;;            {:bool
                         ;;             {:must
                         ;;              [{:bool
                         ;;                {:should
                         ;;                 [{:nested
                         ;;                   {:path "?tags",
                         ;;                    :filter
                         ;;                    {:bool
                         ;;                     {:must [{:term {"type" "broad_12_sectors"}}
                         ;;                             {:term {"tag" "knowledge_intensive_professional_services"}}]}}}}]}}]}}}

                         ;; specifications for dynamic components
                         :component-specs [
                                           ;; {:id :uk_region
                                           ;;  :type :tag-checkboxes
                                           ;;  :label "Region"
                                           ;;  :sorted false
                                           ;;  :visible true
                                           ;;  :controls true
                                           ;;  :tag-type "uk_regions"
                                           ;;  :tags [{:value "osbl_european_region_region__eastern_euro_region" :label "Eastern"}
                                           ;;         {:value "osbl_european_region_region__london_euro_region" :label "London"}
                                           ;;         {:value "osbl_european_region_region__south_east_euro_region" :label "South East"}]}




                                           {:id :sector
                                            :type :tag-checkboxes
                                            :label "Broad Sectors"
                                            :sorted false
                                            :visible true
                                            :controls true
                                            :tag-type "nontoxic_sector"
                                            :tags [{:value "digi_tech" :label "Digital Technologies"}
                                                   {:value "lifesci_health" :label "Life Sciences & Healthcare"}
                                                   {:value "pub_broad" :label "Publishing & Broadcasting"}
                                                   {:value "other_scitechmanf" :label "Other scientific/technological manufacture"}
                                                   {:value "other_scitech_serv" :label "Other scientific/technological services"}]}

                                           {:id :narrow-sector
                                            :type :tag-checkboxes
                                            :label "Narrow Sectors"
                                            :sorted true
                                            :visible false
                                            :controls true
                                            :tag-type "l4_nontoxic_sector"
                                            :tags [{:value "comp_elec_manf" :label "Computer & Electronic manufacture"}
                                                   {:value "dig_comp_serv" :label "Digital & Computer services"}
                                                   {:value "med_opt_equip_manf" :label "Medical & optical equipment manufacture"}
                                                   {:value "pharm_manf" :label "Pharmaceutical manufacture"}
                                                   {:value "biotech_randd" :label "Biotechnology research and development"}
                                                   {:value "healthcare_serv" :label "Healthcare services including veterinary"}
                                                   {:value "comm_equip_manf" :label "Communication Equipment manufacture"}
                                                   {:value "pub_mktg_graph_des" :label "Publishing, Marketing & Graphic Design"}
                                                   {:value "aud_vis_broad" :label "Audio-visual broadcasting"}
                                                   {:value "telecomm_serv" :label "Telecommunication services"}
                                                   {:value "manf_rep_air_space" :label "Manufacture and repair of air and spacecraft"}
                                                   {:value "def_tech" :label "Defence technologies"}
                                                   {:value "auto_manf" :label "Automotive manufacture"}
                                                   {:value "chem_manf" :label "Chemical Product manufacturing"}
                                                   {:value "elec_mach_manf" :label "Electrical Machinery manufacture"}
                                                   {:value "non_elec_mach_manf" :label "Non-electrical machinery manufacture"}
                                                   {:value "precision_eng" :label "Precision engineering"}
                                                   {:value "aero_transp" :label "Aerospace transport"}
                                                   {:value "arch_eng_surv" :label "Architecture, engineering & quantity surveying"}
                                                   {:value "higher_ed" :label "Higher education"}
                                                   {:value "humanitities_randd" :label "Scientific research & development"}
                                                   ]}

                                           {:id :highgrowth
                                            :type :checkboxes
                                            :label "Scaleups"
                                            :visible false
                                            :options [{:value "latest" :label "Show only high growth businesses" :filter scaleup-filter}
                                                      ]}

                                           {:id :boroughs
                                            :type :tag-checkboxes
                                            :label "Boroughs"
                                            :sorted true
                                            :visible false
                                            :controls true
                                            :tag-type "uk_boroughs"
                                            :tags [{:value "osbl_district_borough_unitary_region__camden_london_boro" :label "Camden"}
                                                   {:value "osbl_district_borough_unitary_region__greenwich_london_boro" :label "Greenwich"}
                                                   {:value "osbl_district_borough_unitary_region__hackney_london_boro" :label "Hackney"}
                                                   {:value "osbl_district_borough_unitary_region__hammersmith_and_fulham_london_boro" :label "Hammersmith and Fulham"}
                                                   {:value "osbl_district_borough_unitary_region__islington_london_boro" :label "Islington"}
                                                   {:value "osbl_district_borough_unitary_region__kensington_and_chelsea_london_boro" :label "Kensington and Chelsea"}
                                                   {:value "osbl_district_borough_unitary_region__lambeth_london_boro" :label "Lambeth"}
                                                   {:value "osbl_district_borough_unitary_region__lewisham_london_boro" :label "Lewisham"}
                                                   {:value "osbl_district_borough_unitary_region__southwark_london_boro" :label "Southwark"}
                                                   {:value "osbl_district_borough_unitary_region__tower_hamlets_london_boro" :label "Tower Hamlets"}
                                                   {:value "osbl_district_borough_unitary_region__wandsworth_london_boro" :label "Wandsworth"}
                                                   {:value "osbl_district_borough_unitary_region__city_of_westminster_london_boro" :label "Westminster"}
                                                   {:value "osbl_district_borough_unitary_region__city_and_county_of_the_city_of_london" :label "City and County of the City of London"}
                                                   {:value "osbl_district_borough_unitary_region__barking_and_dagenham_london_boro" :label "Barking and Dagenham"}
                                                   {:value "osbl_district_borough_unitary_region__barnet_london_boro" :label "Barnet"}
                                                   {:value "osbl_district_borough_unitary_region__bexley_london_boro" :label "Bexley"}
                                                   {:value "osbl_district_borough_unitary_region__brent_london_boro" :label "Brent"}
                                                   {:value "osbl_district_borough_unitary_region__bromley_london_boro" :label "Bromley"}
                                                   {:value "osbl_district_borough_unitary_region__croydon_london_boro" :label "Croydon"}
                                                   {:value "osbl_district_borough_unitary_region__ealing_london_boro" :label "Ealing"}
                                                   {:value "osbl_district_borough_unitary_region__enfield_london_boro" :label "Enfield"}
                                                   {:value "osbl_district_borough_unitary_region__haringey_london_boro" :label "Haringey"}
                                                   {:value "osbl_district_borough_unitary_region__harrow_london_boro" :label "Harrow"}
                                                   {:value "osbl_district_borough_unitary_region__havering_london_boro" :label "Havering"}
                                                   {:value "osbl_district_borough_unitary_region__hillingdon_london_boro" :label "Hillingdon"}
                                                   {:value "osbl_district_borough_unitary_region__hounslow_london_boro" :label "Hounslow"}
                                                   {:value "osbl_district_borough_unitary_region__kingston_upon_thames_london_boro" :label "Kingston upon Thames"}
                                                   {:value "osbl_district_borough_unitary_region__merton_london_boro" :label "Merton"}
                                                   {:value "osbl_district_borough_unitary_region__newham_london_boro" :label "Newham"}
                                                   {:value "osbl_district_borough_unitary_region__redbridge_london_boro" :label "Redbridge"}
                                                   {:value "osbl_district_borough_unitary_region__richmond_upon_thames_london_boro" :label "Richmond upon Thames"}
                                                   {:value "osbl_district_borough_unitary_region__sutton_london_boro" :label "Sutton"}
                                                   {:value "osbl_district_borough_unitary_region__waltham_forest_london_boro" :label "Waltham Forest"}
                                                   ]}

                                           ]

                         ;; base-filters AND combined with dynamic components
                         }

   :dynamic-filter-description-components [:boundaryline :sector :narrow-sector :highgrowth :segments :boroughs]

   :selection-filter-spec {:id :selection-filter
                           :components {:natural_id nil}
                           :base-filters {:all nil}
                           :composed {}}

   :about-modal {:content (constantly "Methodology")
                 :action (fn [& _] (-> ($ "#page-about") .modal))}

   :company-search {:controls {:search-fn api/company-search
                               :render-fn (fn [r] [[:div (:name r)]])
                               :col-headers nil ;; ["Name"]
                               :click-fn (fn [r]
                                           (make-company-selection (:natural_id r))
                                           (app/navigate @app-instance "company"))
                               }
                    :query nil
                    :results nil}

   :company-name {:path [:name]}

   :company-info {:controls {:index "companies"
                             :index-type "company"
                             :sort-spec nil
                             :size 1
                             :title-field :name
                             :fields [{:key :formation_date
                                       :label "Formation date"
                                       :render-fn #(time/format-date %)}
                                      {:key :web_url
                                       :label "Web"
                                       :render-fn (fn [w] [:a {:href w :target "_blank"} w])}
                                      {:key :funding_rounds
                                       :label "Funding"
                                       :render-fn (fn [frs] (for [fr (sort-by :raised_date frs)]
                                                              [:div
                                                               [:div
                                                                (time/format-date (:raised_date fr))
                                                                " : "
                                                                (num/mixed (:raised_amount_usd fr) {:curr "£"})]
                                                               [:div (str/join ", " (for [inv (:investments fr)] (:investor_name inv)))]]))
                                       }
                                      {:key :directorships
                                       :label "Directors"
                                       :render-fn (fn [ds] (for [d ds] [:div (:name d)]))}]}
                  :record nil}

   :map {:type :geoport
         :datasource "companies"
         ;; :boundaryline-collections [[0 "nuts_0"] [4 "nuts_1"] [6 "nuts_2"] [7 "nuts_3"] [8 "uk_boroughs"] [10 "uk_wards"]]
         ;; :boundaryline-collections [[0 "nuts_2"] [8 "nuts_3"] [9 "uk_boroughs"] [11 "uk_wards"]]
         ;; :boundaryline-collections [[0 "nuts_2"] [8 "nuts_3"] [9 "nutsish_4"] [11 "nutsish_5"]]
         ;; :boundaryline-collections [[0 "uk_boroughs"] [10 "uk_wards"]]
         ;; :boundaryline-collections [[0 "uk_regions"] [9 "uk_boroughs"] [11 "uk_wards"]]
         :boundaryline-collections [[0 "uk_regions"] [9 "uk_boroughs"]]
         :controls {:initial-bounds [[51.16126063523994, -1.226348876953125], [51.84511093992763, 1.001129150390625]]

                    :map-options {:zoomControl true
                                  :dragging true
                                  :touchZoom true
                                  :scrollWheelZoom false
                                  :doubleClickZoom true
                                  :boxZoom true}

                    :location {:cluster false
                               :location-attr "!location"
                               :attrs ["?natural_id" "!name" "!location" "!latest_employee_count" "!latest_turnover" "!total_funding"]
                               :sort-spec [{"!latest_turnover" "desc"}{"!latest_employment" "desc"}]
                               :marker-opts {:display-turnover true
                                             :display-employee-count false
                                             :display-principal-name false}

                               :marker-render-fn (fn [location-sites location-spec]
                                                   (let [display-turnover (get-in location-spec [:marker-opts :display-turnover])
                                                         display-employee-count (get-in location-spec [:marker-opts :display-employee-count])
                                                         display-principal-name (get-in location-spec [:marker-opts :display-principal-name])]
                                                     (hiccups/html
                                                      [:div
                                                       (when (> (count location-sites) 1)
                                                         [:div [:p (num/compact (count location-sites))]])
                                                       [:div.marker-info
                                                        (when display-principal-name
                                                          [:div.name
                                                           [:p
                                                            (-> location-sites first :name)]])
                                                        (when display-turnover
                                                          [:div.minichart
                                                           [:div.minibar.metric-1
                                                            {:style (str "width: "
                                                                         (num/table-percent-scale
                                                                          [0 1000000 10000000]
                                                                          (->> location-sites (map :latest_turnover) (reduce +)))
                                                                         "%")}]])
                                                        (when display-employee-count
                                                          [:div.minichart
                                                           [:div.minibar.metric-2
                                                            {:style (str "width: "
                                                                         (num/table-percent-scale
                                                                          [0 5 100]
                                                                          (->> location-sites (map :latest_employee_count) (reduce +)))
                                                                         "%")}]])]])))
                               :item-render-fn (fn [i]
                                                 [:div.item
                                                  [:div.name (get i :name)]
                                                  [:div.metrics
                                                   [:div.metric.metric-1
                                                    [:span.name "Tur"] [:span.value (num/compact (:latest_turnover i))]]
                                                   [:div.metric.metric-2
                                                    [:span.name "Emp"] [:span.value (num/compact (:latest_employee_count i))]]]])
                               :item-click-fn (fn [r e]
                                                (make-company-selection (:natural_id r))
                                                (app/navigate @app-instance "company")
                                                (.log js/console (clj->js ["CLICK" r e])))}

                    :zoom nil
                    :bounds nil
                    :show-points true
                    :boundaryline-collection nil
                    :boundaryline-agg {:type :stats
                                       :index "companies"
                                       :index-type "company"
                                       :key "boundaryline_id"
                                       :variable "!latest_employee_count"
                                       ;; :scale-attr "population"
                                       }
                    :colorchooser {:scheme [:Reds :6]
                                   :scale :auto
                                   :variable :boundaryline_id_doc_count}

                    :boundaryline-fill-opacity 0.4

                    :geohash-aggs {:query {:index-name "companies"
                                           :index-type "company"
                                           :geo-point-field "!location"}
                                   :show-at-zoom-fn (fn [z] (>= z 9))
                                   :precision-fn (fn [z] (- (/ z 2) 0.0))
                                   :colorchooser-factory-fn (fn [geohash-aggs]
                                                              (let [chooser-fn (num/table-chooser-fn
                                                                                [0.7 0.9]
                                                                                (map :geohash-grid_doc_count geohash-aggs))]
                                                                (fn [geohash-agg]
                                                                  (chooser-fn (:geohash-grid_doc_count geohash-agg)))))
                                   :icon-render-fn (fn [geohash-agg]
                                                     [:p (num/compact (:geohash-grid_doc_count geohash-agg))])
                                   :geohash-agg-data nil}

                    :geotag-aggs {:query {:index-name "companies"
                                          :index-type "company"
                                          :nested-path "?tags"
                                          :nested-attr "tag"
                                          :nested-filter {:term {:type "uk_regions"}}
                                          :stats-attr "?count"}
                                  :tag-type "uk_regions"
                                  :show-at-zoom-fn (fn [z] (< z 9))
                                  :colorchooser-factory-fn (fn [geotag-aggs]
                                                             (let [chooser-fn (num/table-chooser-fn
                                                                               [0.7 0.9]
                                                                               (map :nested_attr_doc_count geotag-aggs))]
                                                               (fn [geotag-agg]
                                                                 (chooser-fn (:nested_attr_doc_count geotag-agg)))))

                                  :icon-render-fn (fn [tag stats]
                                                    [:p (num/compact (:nested_attr_doc_count stats))])
                                  :click-fn (fn [geotag geotag-agg e]
                                              ;; (.log js/console (clj->js [(:description geotag) geotag geotag-agg e]))

                                              (let [boundaryline-id (:tag geotag)
                                                    ch (bl/get-or-fetch-boundaryline (get-app-state-atom) :boundarylines boundaryline-id)]
                                                (go
                                                  (let [bl (<! ch)
                                                        envelope (aget bl "envelope")
                                                        bounds (js->clj (map/postgis-envelope->latlngbounds envelope))]
                                                    (when bounds
                                                      (swap! (app/get-state @app-instance) assoc-in [:map :controls :bounds] bounds)

                                                      (make-boundaryline-selection boundaryline-id))))))

                                  :geotag-data nil
                                  :geotag-agg-data nil}

                    }
         :data nil}

   :headline-stats {:controls {:title nil
                               :fill-report-button []
                               :summary-stats {:index "companies"
                                               :index-type "company"
                                               :variables [{:key :?counter
                                                            :metric :viewfilter_doc_count
                                                            :label "Companies"
                                                            :render-fn (fn [v] (num/mixed v))}
                                                           {:key :!latest_turnover
                                                            :metric :sum
                                                            :label (fn [] [:p "Latest turnover\u00A0"])
                                                            :render-fn (fn [v] (num/mixed v {:curr "£"}))}
                                                           {:key :!latest_turnover_delta
                                                            :belongs-to :!latest_turnover
                                                            :metric :sum
                                                            :label "Turnover change"
                                                            :value-fn (fn [btv v] (* 100 (/ v btv)))
                                                            :render-fn (fn [v] [:div.stat-change
                                                                                (sign-icon v)
                                                                                (num/mixed v)
                                                                                "% year on year"])}
                                                           {:key :!latest_employee_count
                                                            :metric :sum
                                                            :label (fn [] [:p "Latest employees\u00A0" [:small ""]])
                                                            :render-fn (fn [v] (num/mixed v))}
                                                           {:key :!latest_employee_count_delta
                                                            :belongs-to :!latest_employee_count
                                                            :metric :sum
                                                            :label "Employment change"
                                                            :value-fn (fn [btv v] (* 100 (/ v btv)))
                                                            :render-fn (fn [v] [:div.stat-change
                                                                                (sign-icon v)
                                                                                (num/mixed v)
                                                                                "% year on year"])}
                                                           ]}}
                    :summary-stats nil
                    }

   :table  {:type :table
            :controls {:index "companies"
                       :index-type "company"
                       :sort-spec {:!latest_turnover {:order "desc"}}
                       :from 0
                       :size 50
                       :columns [
                                 {:key :!name :sortable false :label "Name" :render-fn company-link-render-fn}
                                 {:key :!formation_date :sortable true :label "Formation date" :render-fn #(time/format-date %)}
                                 ;; {:key :!latest_accounts_date :label "Filing date" :render-fn #(time/format-date %)}
                                 {:key :!latest_turnover
                                  :sortable true
                                  :label (fn [] [:div "Latest turnover\u0020" [:small "(UK-wide)"]])
                                  :right-align true
                                  :render-fn #(num/mixed % {:curr "£"})}
                                 {:key :!latest_turnover_delta
                                  :sortable true
                                  :label (fn [] [:div "Turnover change\u0020" [:small "(year on year)"]])
                                  :right-align true
                                  :render-fn (fn [v r]
                                               (when v
                                                 [:span
                                                  (num/mixed v {:curr "£"})
                                                  (sign-icon v)]))}
                                 {:key :!latest_employee_count
                                  :sortable true
                                  :label (fn [] [:div "Latest employees\u0020" [:small "(UK-wide)"]])
                                  :right-align true
                                  :render-fn #(num/mixed %)}
                                 {:key :!latest_employee_count_delta
                                  :sortable true
                                  :label (fn [] [:div "Employees change\u0020" [:small "(year on year)"]])
                                  :right-align true
                                  :render-fn (fn [v r]
                                               (when v
                                                 [:span
                                                  (num/mixed v)
                                                  (sign-icon v)]))}

                                 ]}
            :table-data nil}

   :trends-timeline {:query {:index-name "company-accounts"
                             :index-type "accounts"
                             :time-variable "?accounts_date"
                             :metrics {:variable :!turnover :title "Turnover by reported year (£)" :metric :sum}
                             :interval "year"
                             :before "2013-01-01"}
                     :point-formatter (chart-helpers/mk-tooltip-point-formatter {})
                     :color "#b71300"
                     :timeline-data nil}

   :company-turnover-timeline {:query {:index-name "company-accounts"
                                       :index-type "accounts"
                                       :time-variable "?accounts_date"
                                       :metrics {:variable :!turnover :title "Turnover (UK-wide, grouped by reported year) (£)"}
                                       :interval "year"}
                               :color "#b71300"
                               :timeline-data nil}

   :company-employment-timeline {:query {:index-name "company-accounts"
                                         :index-type "accounts"
                                         :time-variable "?accounts_date"
                                         :metrics {:variable :!employee_count :title "Employees by reported year"}
                                         :interval "year"}
                                 :color "#b71300"
                                 :timeline-data nil}

   :geo-sponsors {:controls {:max-count 1}
                  :data nil}

   :sector-histogram {:query {:index-name "companies"
                              :index-type "company"
                              :nested-path "?tags"
                              :nested-attr "tag"
                              :nested-filter {:term {:type "nontoxic_sector"}}
                              :stats-attr "!latest_turnover"}
                      :metrics [{:metric :sum :type "pie"
                                 :title "Latest turnover (£)"
                                 :label-formatter (fn [] (this-as this (num/mixed (.-value this))))}]
                      :bar-width 20
                      :chart-height 300
                      :point-formatter (chart-helpers/mk-tooltip-point-formatter {})
                      :bar-color "#b71300"
                      :chart-type "pie"
                      :tag-type "nontoxic_sector"
                      :tag-data nil
                      :tag-agg-data nil}

   :borough-histogram {:query {:index-name "companies"
                               :index-type "company"
                               :nested-path "?tags"
                               :nested-attr "tag"
                               :nested-filter {:term {:type "uk_boroughs"}}
                               :stats-attr "!latest_turnover"}
                       :metrics [{:metric :sum
                                  :title "Latest turnover (£)"

                                  :label-formatter (fn [] (this-as this (num/mixed (.-value this))))}]
                       :bar-width 10
                       :chart-height 750
                       :bar-color "#b71300"
                       :xlabel-formatter (fn [] (this-as this (some-> this .-value remove-boro)))
                       :point-formatter (chart-helpers/mk-tooltip-point-formatter {:key-fmt remove-boro})
                       :chart-type "bar"
                       :tag-type "uk_boroughs"
                       :tag-data nil
                       :tag-agg-data nil}

   :revenue-bands {:query {:index-name "companies"
                           :index-type "company"

                           :row-path [:accounts :row]
                           :row-aggs {:accounts
                                      {:nested {:path "?accounts"}

                                       :aggs
                                       {:row {:range {:field "rank"
                                                      :ranges [{:key "latest" :from 1 :to 2}]}}}} }

                           :col-path [:col]
                           :col-aggs {:col
                                      {:range {:field "turnover"
                                               :ranges [{:key "lt50k" :from 0       :to 50000 }
                                                        {:key "50k"   :from 50000   :to 100000 }
                                                        {:key "100k"  :from 100000  :to 250000 }
                                                        {:key "250k"  :from 250000  :to 500000}
                                                        {:key "500k"  :from 500000  :to 1000000}
                                                        {:key "1m"    :from 1000000 :to 5000000}
                                                        {:key "5m"    :from 5000000 }] }}
                                      :no-col-data {:missing {:field "turnover"}}}

                           :metric-path [:companies :metric]
                           :metric-aggs {:companies
                                         {:reverse_nested {}
                                          :aggs
                                          {:metric {:value_count {:field "?natural_id"}}}}}
                           }
                   :view {:rows [{:key "latest" :label "Companies in size band"}]
                          :cols [{:key "lt50k"  :label "Less than £50k"}
                                 {:key "50k"  :label "£50k - £100k"}
                                 {:key "100k" :label "£100k - £250k"}
                                 {:key "250k"   :label "£250k - £500k"}
                                 {:key "500k"  :label "£500k - £1m"}
                                 {:key "1m"  :label "£1m - £5m"}
                                 {:key "5m" :label "More than £5m"}]
                          :color "#b71300"
                          :render-fn (fn [v] (num/fnum v))}
                   :table-data nil}

   :employment-bands {:query {:index-name "companies"
                              :index-type "company"

                              :row-path [:accounts :row]
                              :row-aggs {:accounts
                                         {:nested {:path "?accounts"}

                                          :aggs
                                          {:row {:range {:field "rank"
                                                         :ranges [{:key "latest" :from 1 :to 2}]}}}} }

                              :col-path [:col]
                              :col-aggs {:col
                                         {:range {:field "employee_count"
                                                  :ranges [{:key "l"    :from 1    :to 5 }
                                                           {:key "5"    :from 5    :to 10 }
                                                           {:key "10"   :from 10   :to 20 }
                                                           {:key "20"   :from 20   :to 50 }
                                                           {:key "50"   :from 50   :to 100 }
                                                           {:key "100"  :from 100  :to 250 }
                                                           {:key "250"  :from 250  :to 500 }
                                                           {:key "500"  :from 500  :to 2500 }
                                                           {:key "2500" :from 2500 }] }}
                                         :no-col-data {:missing {:field "employee_count"}}}

                              :metric-path [:companies :metric]
                              :metric-aggs {:companies
                                            {:reverse_nested {}
                                             :aggs
                                             {:metric {:value_count {:field "?natural_id"}}}}}
                              }
                      :view {:rows [{:key "latest" :label "Companies in size band"}]
                             :cols [{:key "l"    :label "1-4"}
                                    {:key "5"    :label "5-9"}
                                    {:key "10"   :label "10-19"}
                                    {:key "20"   :label "20-49"}
                                    {:key "50"   :label "50-99"}
                                    {:key "100"  :label "100-249"}
                                    {:key "250"  :label "250-499"}
                                    {:key "500"  :label "500-2499"}
                                    {:key "2500" :label "2500 or more"}]
                             :color "#b71300"
                             :render-fn (fn [v] (num/fnum v))}
                      :table-data nil}

   :view :trends

   :company-close {:text "Close"
                   :target-view "main"
                   :class "btn btn-primary"}

   :reset-map-view {:text "Reset view"
                    :action (fn [e]
                              (swap! (get-app-state-atom)
                                     assoc-in
                                     [:map :controls :bounds]
                                     (get-in @(get-app-state-atom) [:map :controls :initial-bounds])))
                    :class "btn btn-default"}

   :reset-all {:content (constantly [:h1.logo "Tech Map London"])
               :action (fn [e]
                         (js/console.log "reset all")
                         (.preventDefault e)

                         (reset! (get-app-state-atom)
                                 (-> @(get-app-state-atom)
                                     (assoc-in [:map :controls :bounds]
                                               (get-in @(get-app-state-atom) [:map :controls :initial-bounds]))
                                     (assoc-in [:dynamic-filter-spec]
                                               (filters/reset-filter (get-in @(get-app-state-atom) [:dynamic-filter-spec]))))))}
   })


(def components
  [
   {:name :filter
    :f filter/filter-component
    :target "filter-component"
    :paths {:filter-spec [:dynamic-filter-spec]}}

   {:name :company-search
    :f search/search-component
    :target "company-search-component"
    :paths {:search [:company-search]}}

   {:name :filter-description
    :f filter-description/filter-description-component
    :target "filter-description-component"
    :paths {:components [:dynamic-filter-description-components]
            :filter-spec [:dynamic-filter-spec]}}

   {:name :headline-stats
    :f map-report/map-report-component
    :target "headline-stats-component"
    :paths {:map-report [:headline-stats]
            :filter [:dynamic-filter-spec :composed :all]}}

   {:name :map
    :f map/map-component
    :target "map-component"
    :paths {:map-state [:map]
            :filter [:dynamic-filter-spec :composed :all]}}

   {:name :color-scale
    :f color-scale/color-scale-component
    :target "color-scale-component"
    :path [:map :controls]}

   {:name :about-modal
    :f action-link/action-link-component
    :target "about"
    :paths {:action-link [:about-modal]}}

   {:name :company-close
    :f nav-button/nav-button-component
    :target "company-close"
    :paths {:nav-button [:company-close]}}

   {:name :reset-map-view
    :f action-button/action-button-component
    :target "reset-map-view-button-component"
    :paths {:action-button [:reset-map-view]}}

   {:name :reset-all
    :f action-link/action-link-component
    :target "reset-all-component"
    :paths {:action-link [:reset-all]}}

   {:name :display-minichart-turnover
    :f (partial checkbox-boolean/checkbox-boolean-component :display-turnover)
    :target "display-minichart-turnover-component"
    :path [:map :controls :location :marker-opts]}

   {:name :display-minichart-employee-count
    :f (partial checkbox-boolean/checkbox-boolean-component :display-employee-count)
    :target "display-minichart-employee-count-component"
    :path [:map :controls :location :marker-opts]}

   {:name :display-principal-name
    :f (partial checkbox-boolean/checkbox-boolean-component :display-principal-name)
    :target "display-principal-name-component"
    :path [:map :controls :location :marker-opts]}

   ;; {:name :region-investment-histogram
   ;;  :f tag-histogram/tag-histogram
   ;;  :target "city-barchart-component"
   ;;  :paths {:tag-histogram [:city-barchart]
   ;;          :filter-spec [:dynamic-filter-spec :composed :all]}}

   {:name :sector-histogram-var-select
    :f (partial
        select-chooser/select-chooser-component
        "Variable"
        [{:value "!latest_turnover" :label "Latest turnover (£)"}
         {:value "!latest_employee_count" :label "Latest employees"}
         {:value "?counter" :label "Number of companies"}]
        (fn
          ([cursor] (get-in cursor [:query :stats-attr]))
          ([cursor record]
           (om/update! cursor [:query :stats-attr] (:value record))
           (om/update! cursor [:metrics 0 :title] (:label record)))))
    :target "sector-histogram-var-select-component"
    :path [:sector-histogram]}

   {:name :sector-histogram
    :f tag-histogram/tag-histogram
    :target "sector-histogram-component"
    :paths {:tag-histogram [:sector-histogram]
            :filter-spec [:dynamic-filter-spec :composed :all]}}

   {:name :borough-histogram-var-select
    :f (partial
        select-chooser/select-chooser-component
        "Variable"
        [{:value "!latest_turnover" :label "Latest turnover (£)"}
         {:value "!latest_employee_count" :label "Latest employees"}
         {:value "?counter" :label "Number of companies"}]
        (fn
          ([cursor] (get-in cursor [:query :stats-attr]))
          ([cursor record]
           (om/update! cursor [:query :stats-attr] (:value record))
           (om/update! cursor [:metrics 0 :title] (:label record)))))
    :target "borough-histogram-var-select-component"
    :path [:borough-histogram]}

   {:name :borough-histogram
    :f tag-histogram/tag-histogram
    :target "borough-histogram-component"
    :paths {:tag-histogram [:borough-histogram]
            :filter-spec [:dynamic-filter-spec :composed :all]}}

   {:name :table
    :f table/table-component
    :target "table-component"
    :paths {:table-state [:table]
            :filter-spec [:dynamic-filter-spec :composed :all]}}

   {:name :trends-timeline
    :f timeline-chart/timeline-chart
    :target "trends-timeline-component"
    :paths {:timeline-chart [:trends-timeline]
            :filter-spec [:dynamic-filter-spec :composed :all]}}

   {:name :trends-timeline-var-select
    :f (partial
        select-chooser/select-chooser-component
        "Variable"
        [{:value :!turnover :label "Turnover by reported year (£)"}
         {:value :!employee_count :label "Employees by reported year"}]
        (fn
          ([cursor] (get-in cursor [:query :metrics :variable]))
          ([cursor record]
           (om/update! cursor [:query :metrics :variable] (:value record))
           (om/update! cursor [:query :metrics :title] (:label record))
           )))
    :target "trends-timeline-var-select-component"
    :path [:trends-timeline]}

   ;; {:name :employment-timeline
   ;;  :f timeline-chart/timeline-chart
   ;;  :target "employment-timeline"
   ;;  :paths {:timeline-chart [:employment-timeline]
   ;;          :filter-spec [:dynamic-filter-spec :composed :all]}}

   ;; {:name :formation-timeline
   ;;  :f timeline-chart/timeline-chart
   ;;  :target "formation-timeline"
   ;;  :paths {:timeline-chart [:formation-timeline]
   ;;          :filter-spec [:dynamic-filter-spec :composed :all]}}

   ;; {:name :geo-sponsors
   ;;  :f geo-sponsors/geo-sponsors-component
   ;;  :target "geo-sponsors"
   ;;  :paths {:bounds [:map :controls :bounds]
   ;;          :geo-sponsors [:geo-sponsors]}}

   ;; {:name :revenue-bands-var-select
   ;;  :f (partial select-chooser/select-chooser-component "Variable" :field [[:turnover "Turnover (£)"][:employee_count "Employment"]])
   ;;  :target "revenue-bands-var-select-component"
   ;;  :path [:revenue-bands-table :controls :col-aggs :col :range]}

   {:name :revenue-bands-chart
    :f ranges-chart/ranges-chart-component
    :target "revenue-bands-chart-component"
    :paths {:table-state [:revenue-bands]
            :filter-spec [:dynamic-filter-spec :composed :all]}}

   {:name :employment-bands-chart
    :f ranges-chart/ranges-chart-component
    :target "employment-bands-chart-component"
    :paths {:table-state [:employment-bands]
            :filter-spec [:dynamic-filter-spec :composed :all]}}

   ;; {:name :company-turnover-timeline
   ;;  :f timeline-chart/timeline-chart
   ;;  :target "company-turnover-timeline"
   ;;  :paths {:timeline-chart [:company-turnover-timeline]
   ;;          :filter-spec [:selection-filter-spec :composed :all]}}

   ;; {:name :company-employment-timeline
   ;;  :f timeline-chart/timeline-chart
   ;;  :target "company-employment-timeline"
   ;;  :paths {:timeline-chart [:company-employment-timeline]
   ;;          :filter-spec [:selection-filter-spec :composed :all]}}

   {:name :company-name
    :f text/text-component
    :target "company-name-component"
    :paths {:source [:company-info :record]
            :controls [:company-name]}}

   {:name :company-info
    :f company-info/company-info-component
    :target "company-info-component"
    :paths {:metadata [:company-info]
            :turnover-timeline [:company-turnover-timeline]
            :employment-timeline [:company-employment-timeline]
            :filter-spec [:selection-filter-spec :composed :all]}}

   ]
  )

;;;;;;;;;;;;;;;;;;;;;;;; load and index boundarylines

(def bl-collections ["uk_counties"])

(defn load-boundaryline-collection-indexes
  [state]
  (doseq [blcoll bl-collections]
    (bl/fetch-boundaryline-collection-index state :boundarylines blcoll)))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn create-app-service
  []
  (let [event-handlers (atom nil)]
    (reify

      app/IAppService

      (init [this app]
        (load-boundaryline-collection-indexes (app/get-state app))
        {:fetch-boundarylines-fn (partial bl/get-or-fetch-best-boundarylines (app/get-state app) :boundarylines)
         :get-cached-boundaryline-fn (partial bl/get-cached-boundaryline (app/get-state app) :boundarylines)
         :point-in-boundarylines-fn (partial bl/point-in-boundarylines (app/get-state app) :boundarylines :uk_boroughs)
         :path-marker-click-fn make-boundaryline-selection})

      (destroy [this app]
        (.log js/console "DESTROY APP!"))

      (handle-event [this app type val]
        )

      (dev-mode? [this] dev-mode))))

(defn init
  []
  (app/start-or-restart-app app-instance initial-state components (create-app-service)))

(cond

  ;; dev mode : configure repl and figwheel code-reloading
  ;; js/config.repl
  ;; (do
  ;;   (ws-repl/connect "ws://localhost:9001" :verbose true)
  ;;   (fw/watch-and-reload
  ;;    :websocket-url "ws://localhost:3449/figwheel-ws"
  ;;    :jsload-callback (fn []
  ;;                       (init)
  ;;                       (.log js/console "restarted")))
  ;;   (init))

  ;; production : just run the app
  true
  (do (js/console.debug "first init") (init)))
