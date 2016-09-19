(ns clustermap.bvca-table
  (:require [om.core :as om]
            [clojure.spec :as s]
            [clojure.spec.test :as st]
            [clustermap.filters :as filters]
            [clustermap.util :refer-macros [inspect]]
            [clustermap.formats.time :as time]
            [clustermap.formats.number :as num :refer [div! *! -! +!]]
            [clustermap.formats.money :as money]))

(s/fdef make-company-selection
  :args (s/cat :id string? :state map?)
  :ret map?
  ;;:fn #(= (-> % :args :state keys) (-> % :ret keys))
  )
(defn make-company-selection
  "Make selction to filter for just one company and its sites"
  [natural-id state]
  (inspect state)
  (let [state (update state :dynamic-filter-spec filters/reset-filter)

        components (get-in state [:selection-filter-spec :components])
        ;; below seems to have no effect
        ;; components (assoc-in components [:natural-id] {:term {"?natural_id" natural-id}})

        base-filters     (get-in state [:selection-filter-spec :base-filters])
        composed         (filters/compose-filters components base-filters)
        dyn-components   (get-in state [:dynamic-filter-spec :components])
        dyn-components   (assoc-in dyn-components [:whatever-natural-id] {:term {"?natural_id" natural-id}})
        dyn-base-filters (get-in state [:selection-filter-spec :base-filters])
        dyn-composed     (filters/compose-filters dyn-components dyn-base-filters)]

    (inspect (-> state
                 (assoc-in [:table :current-table] :sites-table)
                 ;; below seems to have no effect
                 ;; (assoc-in [:table :tables :sites-table :controls :natural-id] natural-id)
                 #_(update-in [:selection-filter-spec]
                              merge {:components components :composed composed})
                 (assoc-in [:headline-stats :controls :current-mode] :company)
                 (update-in [:dynamic-filter-spec]
                            merge {:components dyn-components :composed dyn-composed})))))

(s/fdef make-investor-selection
  :args (s/cat :id number? :state map?)
  :ret map?
  ;;:fn #(= (-> % :args :state keys) (-> % :ret keys))
  )

(defn make-investor-selection
  [investor-id state]
  (let [state (update state :dynamic-filter-spec filters/reset-filter)

        ;; this works but kills map
        dyn-components   (get-in state [:dynamic-filter-spec :components])
        dyn-components   (assoc-in dyn-components [:whatever-natural-id] {:term {"?investor_company_uid" investor-id}})
        dyn-base-filters (get-in state [:selection-filter-spec :base-filters])
        dyn-composed     (filters/compose-filters dyn-components dyn-base-filters)
        ]
    (inspect (-> state :table :tables :investors-table))
    (-> state
        (assoc-in [:table :current-table] :investors-table)
        (assoc-in [:headline-stats :controls :current-mode] :investor)

        (update-in [:dynamic-filter-spec]
                   merge {:components dyn-components :composed dyn-composed}))))


(defn make-constituency-selection
  [investor-id state]
  (let [;;state (update state :dynamic-filter-spec filters/reset-filter)

        dyn-components   (get-in state [:dynamic-filter-spec :components])
        dyn-components   (assoc-in dyn-components [:whatever-natural-id] {:term {"?boundaryline_id" investor-id}})
        dyn-base-filters (get-in state [:selection-filter-spec :base-filters])
        dyn-composed     (filters/compose-filters dyn-components dyn-base-filters)
        ]
    (inspect (-> state :table :tables :investors-table))
    (-> state
        (assoc-in [:table :current-table] :constituencies-table)
        (assoc-in [:headline-stats :controls :current-mode] :constituency)
        (update-in [:dynamic-filter-spec]
                   merge {:components dyn-components :composed dyn-composed}))))

(defn report-check [res]
  ;; (println (type res))
  (when (:failure res)
    (js/console.warn res))
  res)

(defn do-tests []
  [(mapv report-check (st/check `make-company-selection {:clojure.test.check/opts {:num-tests 10}}))
   (mapv report-check (st/check `make-investor-selection {:clojure.test.check/opts {:num-tests 10}}))])

;; (doall (do-tests))

(s/fdef myadd
  :args (s/cat :a number? :b number?)
  :ret number?)

(defn myadd [a b]
  (+ a b))

(defn test-myadd []
  (println "hi")
  (inspect (st/check `myadd {:clojure.test.check/opts {:num-tests 2}})))
