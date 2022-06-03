(ns cljshello
  (:require
    ; [reagent.core :as reagent :refer [atom]]
    [reagent.dom :as rd]
    ; [re-frame.core :as rf]
    ))

(defn Hello []
  [:h1 "Hello World !"])

(defn Root []
  [:div
   [Hello]])

(rd/render [Root]
           (. js/document (getElementById "app")))

(defn ^:export prt []
  (println "Hello"))