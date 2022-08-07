(ns korrektur-uebersicht.sub
  (:require
    [re-frame.core :as rf]))


(rf/reg-sub
  :antworten/erhalten
  (fn [db _] (:antworten db)))


(rf/reg-sub
  :korrektor
  (fn [db _] (get-in db [:korrektor :name])))
