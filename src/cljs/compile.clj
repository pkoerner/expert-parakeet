(ns compile
  (:require
   [cljs.build.api :as cljs]))

(defn compile-cljs
  "Compiles all of our cljs files into a single js file containing all dependencies.
   This is the entry point for the build-cljs alias in deps.edn.
   
   To run the alias simply execute `clj -X:build-cljs`."
  [& _]
  (cljs/build "src/cljs/expert_parakeet"                  ; CLJS source path
              {:output-dir "resources/public/cljs"    ; Output directory
               :asset-path "cljs/out"                    ; Asset path
               :optimizations :none               ; Optimization level
               :target :browser                        ; Target environment
               :output-to "resources/public/cljs/main.js"}))
