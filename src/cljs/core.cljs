(ns core
  (:require
    [events]
    [sub]
    [views :refer [Root]]
    [day8.re-frame.http-fx]
    [re-frame.core :refer [dispatch-sync]]
    [reagent.dom :refer [render]]))


(defn init
  []
  (dispatch-sync [:init-db])
  (render [Root]
             (. js/document (getElementById "app"))))

