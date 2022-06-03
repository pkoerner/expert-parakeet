(ns cljs.core
  (:require
    [reagent.dom :as rd]))

(defn Hello []
  [:h1 "Hello World"])

(defn Root []
  [:div
   [Hello]])

(rd/render [Root]
           (. js/document (getElementById "app")))