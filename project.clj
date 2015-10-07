(defproject clustermap-bvca-cljs "0.1.0-SNAPSHOT"
  :description "FIXME: write this!"
  :url "http://example.com/FIXME"

  :dependencies [[org.clojure/clojure "1.7.0"]
                 [org.clojure/clojurescript "1.7.122" :scope "provided"]
                 [org.clojure/core.async "0.1.346.0-17112a-alpha" :scope "provided"]
                 [domina "1.0.3"]
                 [jayq "2.5.2"]
                 [org.omcljs/om "0.9.0"]
                 [prismatic/om-tools "0.3.10" :exclusions [org.clojure/clojure]]
                 [sablono "0.3.1"]
                 [hiccups "0.3.0"]
                 [secretary "1.2.3"]
                 [com.andrewmcveigh/cljs-time "0.3.13"]

                 [clustermap-components "0.1.0-SNAPSHOT"]
                 ]

;;  :exclusions [org.clojure/google-closure-library
;;               org.clojure/google-closure-library-third-party
;;               goog-jar]

  :jvm-opts ["-Xmx1g"
             "-server"
             "-XX:MaxPermSize=128m"
             "-XX:+CMSClassUnloadingEnabled"
             "-XX:+UseConcMarkSweepGC"]

  :source-paths ["src"]

  :plugins [[lein-cljsbuild "1.1.0"]
            [lein-figwheel "0.4.0"]]

  :profiles {:dev {:dependencies [[weasel "0.5.0"]
                                  [figwheel "0.4.0"]]}}
  :figwheel {:css-dirs ["public/css"]}

  :cljsbuild {
              :builds {:none
                       {:source-paths ["src"
                                       "checkouts/clustermap-components/src"]
                        :figwheel {:on-jsload "clustermap.core/init"}
                        :compiler {
                                   ;; resources/public path necessary for figwheel, so frigged
                                   ;; with softlink from resources/public to cljs-out/none
                                   :output-to  "resources/public/clustermap.js"
                                   :source-map true
                                   :output-dir "resources/public/cljs"
                                   :main "clustermap.core"
                                   :optimizations :none
                                   :pretty-print true}}

                       :whitespace
                       {:source-paths ["src"]
                        :compiler {
                                   :output-to  "cljs-out/whitespace/clustermap.js"
                                   :source-map "cljs-out/whitespace/clustermap.js.map"
                                   :output-dir "cljs-out/whitespace/cljs"
                                   :optimizations :whitespace
                                   :pretty-print true
                                   :output-wrapper false}}

                       :simple
                       {:source-paths ["src"]
                        :compiler {
                                   :output-to  "cljs-out/simple/clustermap.js"
                                   :source-map "cljs-out/simple/clustermap.js.map"
                                   :output-dir "cljs-out/simple/cljs"
                                   :optimizations :simple
                                   :pretty-print true
                                   :output-wrapper false}}

                       :advanced
                       {:source-paths ["src"]
                        :compiler {
                                   :output-to  "cljs-out/advanced/clustermap.js"
                                   :source-map "cljs-out/advanced/clustermap.js.map"
                                   :output-dir "cljs-out/advanced/cljs"
                                   :optimizations :advanced
                                   :output-wrapper false
                                   :externs ["resources/externs/jquery-1.9.js"
                                             "resources/externs/jquery.tooltip.externs.js"
                                             "resources/externs/leaflet.ext.js"
                                             "resources/externs/rtree.ext.js"
                                             "resources/externs/highcharts.ext.js"
                                             "resources/externs/ui-bootstrap.js"]}}}})
