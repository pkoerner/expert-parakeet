(ns util.cljs-compile
  (:require [cljs.build.api :as cljs]))

(defn compile-cljs []
  (cljs/build "src/cljs"                  ; CLJS source path
              {:output-dir "resources/public/cljs"    ; Output directory
               :asset-path "cljs/out"                    ; Asset path
               :optimizations :none               ; Optimization level
               :target :browser                        ; Target environment
               }))

(compile-cljs)