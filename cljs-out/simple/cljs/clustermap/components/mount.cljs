(ns clustermap.components.mount
  (:require [om.core :as om :include-macros true]))

(defn- make-sequential
  [v]
  (cond
   (nil? v) nil
   (sequential? v) v
   true [v]))

(defn- extract-paths*
  [path paths cursor]
  (cond

   (and path paths) (throw (ex-info (print-str "can't give both :path and :paths : "
                                               {:path path :paths paths})
                                    {:path path :paths paths}))

   path (when-let [sp (not-empty (make-sequential path))]
          (get-in cursor sp))

   (nil? paths) cursor

   (sequential? paths) (for [path paths]
                         (when-let [sp (not-empty (make-sequential path))]
                           (get-in cursor (make-sequential path))))

   (map? paths) (into {} (for [[key path] paths]
                           (when-let [sp (not-empty (make-sequential path))]
                             [key (get-in cursor sp)])))

   true (throw (ex-info (print-str "what are those paths ? :" paths) {:paths paths}))))

(defn- extract-paths
  [cname path paths cursor]
  (let [x (extract-paths* path paths cursor)]
    (cond
     x x
     true (do (.log js/console (clj->js ["WARNING: nil cursor" cname path paths]))
              nil))))

(defn mount
  "mount a component, with some decoration
   - target : may be an element-id (keyword or string) or an element
   - path | paths : extract a single path or multiple paths from the root cursor
                    to bind in the component"
  [cname f value & {:keys [target path paths] :as options}]
  (let [target (if (or (string? target) (keyword? target))
                 (.getElementById js/document (name target))
                 target)
        cursor-fn (partial extract-paths cname path paths)
        options (-> options
                    (dissoc :path :paths)
                    (assoc :target target)
                    (assoc :fn cursor-fn))]
    (if target
      (om/root f value options)

      (.log js/console (str "component: <" cname "> can't mount : can't find target: <" target ">")))))

(defn unmount
  [target]
  (let [target (if (or (string? target) (keyword? target))
                 (.getElementById js/document (name target))
                 target)]
    (if target
      (om/detach-root target)
      (.log js/console (str "component: <" "> can't unmount : can't find target: <" target ">")))))
