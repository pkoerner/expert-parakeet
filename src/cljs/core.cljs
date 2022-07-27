(ns core
  (:require
    [day8.re-frame.http-fx]
    [events]
    [re-frame.core :refer [dispatch-sync]]
    [reagent.dom :refer [render]]
    [sub]
    [views :refer [Root]]))


(defn init
  []
  (dispatch-sync [:init-db])
  (render [Root]
          (. js/document (getElementById "app"))))

