(ns clustermap.core
  (:require-macros [hiccups.core :as hiccups]
                   [cljs.core.async.macros :refer [go]])
  (:require
   [clojure.string :as str]
   [clojure.spec :as sp]
   [om.core :as om :include-macros true]
   [devtools.core :as devtools]
   [domina.events :as events]
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
   [clustermap.boundarylines :as bl]
   [clustermap.util :as util :refer [inspect]]
   [clustermap.component-specs :as component-specs]
   [clustermap.bvca-table :as bvca-table]
   [cljs.core.async :as async :refer [chan <! put! sliding-buffer >!]]
   [schema.core :as s :refer-macros [defschema]]))

(def RELEASE "@define {string}" "")
(def RAVEN_DSN "@define {string}" "")

;; assume we are in dev-mode if there is repl support
(def ^:private dev-mode (some-> js/window .-config .-repl))
(when ^boolean js/goog.DEBUG
  (devtools/install! :all))
(when-not ^boolean js/goog.DEBUG
  (inspect (-> (js/Raven.config ^string clustermap.core/RAVEN_DSN
                                #js {:release ^string clustermap.core/RELEASE})
               .install)))

;; the IApp object
(def ^:private app-instance (atom nil))

(defn get-app-state-atom
  []
  (-> app-instance
      deref
      clustermap.app/get-state))

(defn reset-zoom! []
  (swap! (get-app-state-atom) ;; zoom out first (hack)
         assoc-in
         [:map :controls :bounds]
         (get-in @(get-app-state-atom) [:map :controls :initial-bounds])))


(defn fit-bounds
  "Get current map markers and fit to bounds"
  []
  (let [app-state (get-app-state-atom)
        map-controls (get-in @app-state [:map :controls])
        leaflet-map  (:map map-controls)
        markers (-> map-controls :markers deref)
        marker-array (into-array (map :leaflet-marker (vals markers)))]
    (when (seq markers)
      (.fitBounds leaflet-map (.. (js/L.featureGroup marker-array)  getBounds)))))

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
      (if-let [bl (when ch (<! ch))]
        (let [bl-filter (when boundaryline-id (boundaryline-filter boundaryline-id))
              bl-name (when boundaryline-id (aget bl "compact_name"))

              updated-filters (filters/update-filter-component (get-in @app-state [:dynamic-filter-spec])
                                                               :boundaryline
                                                               bl-filter
                                                               bl-name
                                                               boundaryline-id)
              leaflet-map (get-in @app-state [:map :controls :map])
              bounds (map/geojson-point-bounds (first (aget (aget bl "envelope") "coordinates")))]
          (.log js/console (util/pp updated-filters))
          (.fitBounds leaflet-map bounds #js {:animate true})
          (swap! app-state
                 assoc-in
                 [:dynamic-filter-spec]
                 updated-filters))))))

(defn company-link-render-fn
  [name record]
  [:a {:href "#"
       :target "_blank"
       :onClick (fn [e]
                  (.preventDefault e)
                  (swap! (get-app-state-atom)
                         (partial bvca-table/make-company-selection (:?natural_id record)))
                  #_(app/navigate @app-instance "company-sites"))}
   name])

(sp/def ::investor_company_uid string?)
(sp/def ::?investor_company_uid ::investor_company_uid )
(sp/def ::investment-record (sp/keys :req-un [(or ::investor_company_uid ::?investor_company_uid)
                                              ::?boundaryline_id]))
(sp/def ::constituency-link-record (sp/keys :req-un [::?boundaryline_id]))
(sp/def ::investor-link-record (sp/keys :req-un [(or ::investor_company_uid ::?investor_company_uid)]))

(defn investor-link-render-fn
  [name record]
  (util/assert-spec ::investor-link-record record)
  [:a {:href "#"
       :target "_blank"
       :onClick (fn [e]
                  (.preventDefault e)
                  (inspect "clicked investor" record)
                  (swap! (get-app-state-atom)
                         (partial bvca-table/make-investor-selection (or (:investor_company_uid record)
                                                                         (:?investor_company_uid record))))
                  (inspect "maked investor")
                  #_(app/navigate @app-instance "company-sites"))}
   name])

(defn investor-links-render-fn [links _]
  (-> (map #(investor-link-render-fn (:name %) %) links)
      (interleave (repeat ", "))
      drop-last))

(defn constituency-link-render-fn
  [name record]
  (util/assert-spec ::constituency-link-record record)
  [:a {:href "#"
       :target "_blank"
       :onClick (fn [e]
                  (.preventDefault e)
                  (inspect "clicked constituency" record)
                  ;; (util/assert-spec string? (:investor_company_uid record))
                  (swap! (get-app-state-atom) update :dynamic-filter-spec filters/reset-filter)
                  (make-boundaryline-selection (:?boundaryline_id record))
                  (swap! (get-app-state-atom)
                         (partial bvca-table/make-constituency-selection (:?boundaryline_id record)))

                  ;; (inspect (make-boundaryline-selection (:?boundaryline_id record)))
                  #_(app/navigate @app-instance "company-sites"))}
   name])

(defn handle-constituency [e]
  (get-app-state-atom)
  (inspect e (:boundaryline_id e))
  (swap! (get-app-state-atom) update :dynamic-filter-spec filters/reset-filter)
  (make-boundaryline-selection (:boundaryline_id e))
  (swap! (get-app-state-atom)
         (partial bvca-table/make-constituency-selection (:boundaryline_id e))))

(defn handle-constituency-event
  "Call make-company-selection when app-instance is not nil. If it is
  nil then wait 5 seconds and try again. Using an atom watch doesn't
  work because the company id gets overridden if set too early"
  [e]
  (if @app-instance
    (handle-constituency e)
    (do
      (js/setTimeout (fn [] (when @app-instance
                              (handle-constituency e)))
                     5000))))

(events/listen! :clustermap-bvca-constituency handle-constituency-event)

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
                                 "uk_wards" {:index nil
                                             :rtree nil
                                             :boundarylines {}}
                                 "uk_regions" {:index nil
                                               :rtree nil
                                               :boundarylines {}}
                                 "osni_pc" {:index nil
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
                         :component-specs component-specs/component-specs

                         ;; base-filters AND combined with dynamic components
                         }

   :dynamic-filter-description-components [:boundaryline :uk_region :sector :latest-turnover :employee-count]

   :selection-filter-spec {:id :selection-filter
                           :components {:natural_id nil}
                           :base-filters {:all nil}
                           :composed {}}

   :company-search {:controls {:search-fn #(if-not (str/blank? %)
                                             (api/multi-search % {:search-fields ["postcode"]})
                                             (api/multi-search))
                               :render-fn (fn [r]
                                            (case (:search-type r)
                                              "company" [[:div (:name r)] [:div "Company"]]
                                              "constituency" [[:div (:boundaryline_compact_name r)] [:div "Constituency"]]
                                              "investor" [[:div (:investor_company_name r)] [:div "Investor"]]))
                               :col-headers ["Name" "Type"]
                               :click-fn (fn [r]
                                           (case (:search-type r) ;; TODO: fitbounds on company and invetstor
                                             "company" (do
                                                         (reset-zoom!)
                                                         (swap! (get-app-state-atom)
                                                                (partial bvca-table/make-company-selection (:natural_id r)))
                                                         (go
                                                           (<! (async/timeout 1000))
                                                           (fit-bounds)))
                                             "constituency" (do
                                                              (swap! (get-app-state-atom)
                                                                     update :dynamic-filter-spec filters/reset-filter)
                                                              (make-boundaryline-selection (:boundaryline_id r))
                                                              (swap! (get-app-state-atom)
                                                                     (partial bvca-table/make-constituency-selection (:boundaryline_id r))))
                                             "investor" (do (reset-zoom!)
                                                            (swap! (get-app-state-atom)
                                                                   (partial bvca-table/make-investor-selection (or (:investor_company_uid r)
                                                                                                                   (:?investor_company_uid r))))
                                                            (go
                                                              (<! (async/timeout 1000))
                                                              (fit-bounds))))
                                           #_(app/navigate @app-instance "company"))
                               }
                    :placeholder "Search"
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
         :boundaryline-collections [[0 "nuts_1"][9 "uk_constituencies"] #_[11 "uk_wards"]]
         :controls {:initial-bounds  [[58.7 5.3] [49.29 -11.29]]
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
                               :marker-opts {:display-turnover false
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
                                                (swap! (get-app-state-atom)
                                                       (partial bvca-table/make-company-selection (:?natural_id r)))
                                                ;; (app/navigate @app-instance "company")
                                                (.log js/console (clj->js ["CLICK" r e])))}

                    :zoom nil
                    :bounds nil
                    :show-points true
                    ::map/points-max-count 1200
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
                                          :nested-filter {:term {:type "nuts_1"}}
                                          :stats-attr "?count"}
                                  :tag-type "nuts_1"
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

                                                      ;;TODO is this used?
                                                      (swap! (get-app-state-atom)
                                                             update :dynamic-filter-spec filters/reset-filter)
                                                      (make-boundaryline-selection boundaryline-id)
                                                      (swap! (get-app-state-atom)
                                                             (partial bvca-table/make-constituency-selection boundaryline-id)))))))

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
                                                            :label (fn [] [:p "Total latest turnover\u00A0" [:small "(UK-wide)"]])
                                                            :render-fn (fn [v] (num/mixed v {:curr "£"}))}

                                                           {:key :!latest_employee_count
                                                            :metric :sum
                                                            :label (fn [] [:p "Total latest employees\u00A0" [:small "(UK-wide)"]])
                                                            :render-fn (fn [v] (num/mixed v))}
                                                           ]}}
                    :summary-stats nil
                    }

   :table  {:type :multi-table
            :current-table :companies-table
            :default-table :companies-table
            :tables {:companies-table {:controls {:index "companies"
                                                  :index-type "company"
                                                  :title "All investor-backed companies"
                                                  :sort-spec {:!latest_turnover {:order "desc"}}
                                                  :from 0
                                                  :size 50
                                                  :columns [


                                                            {:key :!name :sortable false :label "Investor-backed company" :render-fn company-link-render-fn}
                                                            {:key :?investor_companies :sortable false :label "Investor"
                                                             :render-fn investor-links-render-fn}
                                                            {:key :?tags :sortable false :label "Constituency"
                                                             :render-fn (fn [tags rec]
                                                                          (when-let [r (-> (filter #(= "uk_constituencies" (:type %)) tags)
                                                                                           first)]
                                                                            (constituency-link-render-fn (:description r)
                                                                                                         {:?boundaryline_id (:tag r)}))) }
                                                            {:key :!latest_turnover
                                                             :sortable true
                                                             :label (fn [] [:div "Latest turnover\u0020" [:small "(UK-wide)"]])
                                                             :right-align true
                                                             :render-fn #(num/mixed % {:curr "£"})}

                                                            {:key :!latest_employee_count
                                                             :sortable true
                                                             :label (fn [] [:div "Latest employees\u0020" [:small "(UK-wide)"]])
                                                             :right-align true
                                                             :render-fn #(num/mixed %)}]}
                                       :table-data nil}

                     :sites-table {:type :table
                                   :controls {:index "company-sites"
                                              :index-type "company_site"
                                              :title "Investor-backed company"
                                              :sort-spec {:!latest_turnover {:order "desc"}}
                                              :from 0
                                              :size 50
                                              :columns [{:key :!name :sortable false :label "Investor-backed company"}
                                                        {:key :?postcode :sortable false :label "Postcode" }

                                                        {:key :?investor_companies :sortable false
                                                         :label "Investor"
                                                         :render-fn investor-links-render-fn}
                                                        {:key :?boundaryline_compact_name
                                                         :sortable false :label "Constituency"
                                                         }

                                                        {:key :!latest_turnover
                                                         :sortable true
                                                         :label (fn [] [:div "Latest turnover\u0020" [:small "(UK-wide)"]])
                                                         :right-align true
                                                         :render-fn #(num/mixed % {:curr "£"})}
                                                        {:key :!latest_employee_count
                                                         :sortable true
                                                         :label (fn [] [:div "Latest employees\u0020" [:small "(UK-wide)"]])
                                                         :right-align true
                                                         :render-fn #(num/mixed %)}]}
                                   :table-data nil}

                     :investors-table {:type :table
                                       :controls {:index "investments"
                                                  :index-type "investment"
                                                  :title "Investor"
                                                  :sort-spec {:!company_name {:order "desc"}}
                                                  :fields [:?investment_uid :!company_name :?company_site_postcode
                                                           :?investor_company_name :?company_no :?natural_id
                                                           :!latest_turnover :!latest_employee_count
                                                           :?boundaryline_compact_name :?boundaryline_id
                                                           :?company_site_purpose]
                                                  :from 0
                                                  :size 50
                                                  :columns [
                                                            {:key :!company_name :sortable false :label "Investor-backed company" :render-fn company-link-render-fn}
                                                            {:key :?investor_company_name :sortable false :label "Investor"}
                                                            {:key :?company_site_purpose
                                                             :sortable true
                                                             :render-fn (fn [n rec]
                                                                          (case n
                                                                            "hq" "Company Headquarters"
                                                                            "branch" "Branch"
                                                                            ""))
                                                             :label "Site Type"}
                                                            {:key :?boundaryline_compact_name
                                                             :sortable false
                                                             :label "Constituency"
                                                             :render-fn constituency-link-render-fn}
                                                            {:key :!latest_turnover
                                                             :sortable true
                                                             :label (fn [] [:div "Latest turnover\u0020" [:small "(UK-wide)"]])
                                                             :right-align true
                                                             :render-fn #(num/mixed % {:curr "£"})}
                                                            {:key :!latest_employee_count
                                                             :sortable true
                                                             :label (fn [] [:div "Latest employees\u0020" [:small "(UK-wide)"]])
                                                             :right-align true
                                                             :render-fn #(num/mixed %)}]}
                                       :table-data nil}

                     :constituencies-table {:type :table
                                            :controls {:index "investments"
                                                       :index-type "investment"
                                                       :title "Constituency"
                                                       :sort-spec {:!company_name {:order "desc"}}
                                                       :data-munge-fn bvca-table/group-investor-branches
                                                       :fields [:?investment_uid :!company_name :?company_site_postcode
                                                                :?company_site_purpose
                                                                :?investor_company_name :?investor_company_uid
                                                                :?company_no :?natural_id :!latest_turnover :!latest_employee_count
                                                                :?company_investment_count

                                                                :?boundaryline_compact_name]
                                                       :from 0
                                                       :size 50
                                                       :columns [
                                                                 {:key :!company_name :sortable true
                                                                  :label "Investor-backed company"
                                                                  :render-fn company-link-render-fn}
                                                                 {:key :?investor_company_name
                                                                  :sortable false
                                                                  :render-fn (fn [n rec]
                                                                               (investor-links-render-fn2 (:investors rec) rec))
                                                                  :label "Investor"}
                                                                 {:key :?company_site_purpose
                                                                  :sortable false
                                                                  :render-fn (fn [n rec]
                                                                               (case n
                                                                                 "hq" "Company Headquarters"
                                                                                 "branch" "Branch"
                                                                                 ""))
                                                                  :label "Site Type"}
                                                                 {:key :?company_site_postcode
                                                                  :sortable false
                                                                  :label "Postcode"
                                                                  }
                                                                 {:key :?boundaryline_compact_name
                                                                  :sortable false
                                                                  :label "Constituency"
                                                                  }
                                                                 {:key :!latest_turnover
                                                                  :sortable true
                                                                  :label (fn [] [:div "Latest turnover\u0020" [:small ""]])
                                                                  :right-align true
                                                                  :render-fn #(num/mixed % {:curr "£" :default "No data" :zero-is-nil? true})}
                                                                 {:key :!latest_employee_count
                                                                  :sortable true
                                                                  :label (fn [] [:div "Latest employees\u0020" [:small ""]])
                                                                  :right-align true
                                                                  :render-fn #(num/mixed % {:default "No data" :zero-is-nil? true})}]}
                                            :table-data nil}}}

   :geo-sponsors {:controls {:max-count 1}
                  :data nil}


   :view :trends

   :company-close {:text "Close"
                   :target-view "main"
                   :class "btn btn-primary"}

   :reset-map-view {:text "Reset view"
                    :action (fn [e] (reset-zoom!))
                    :class "btn btn-default"}

   :reset-all {:content (constantly [:h1.logo ""])
               :action (fn [app owner]
                         (js/console.log "reset all")

                         (reset! (get-app-state-atom)
                                 (-> @(get-app-state-atom)
                                     (assoc-in [:map :controls :bounds]
                                               (get-in @(get-app-state-atom) [:map :controls :initial-bounds]))
                                     (assoc-in [:dynamic-filter-spec]
                                               (filters/reset-filter (get-in @(get-app-state-atom) [:dynamic-filter-spec]))))))}
   })


(def components

  [{:name :filter
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

   {:name :table
    :f table/multi-table-component
    :target "table-component"
    :paths {:table-state [:table]
            :filter-spec [:dynamic-filter-spec :composed :all]}}
   #_
   {:name :company-name
    :f text/text-component
    :target "company-name-component"
    :paths {:source [:company-info :record]
            :controls [:company-name]}}
   ])

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
         :path-marker-click-fn (fn [bid]
                                 ;;TODO: refactor unify this as it is repeated
                                 (when bid
                                   (swap! (get-app-state-atom)
                                          update :dynamic-filter-spec filters/reset-filter)
                                   (make-boundaryline-selection bid)
                                   (swap! (get-app-state-atom)
                                          (partial bvca-table/make-constituency-selection bid))))
         :table-chan (chan)
         :stats-chan (chan)})

      (destroy [this app]
        (.log js/console "DESTROY APP!"))

      (handle-event [this app type val]
        )

      (dev-mode? [this] dev-mode))))

(defn init
  []
  (app/start-or-restart-app app-instance initial-state components (create-app-service)))

(cond
  true
  (do (js/console.debug "first init") (init)))
