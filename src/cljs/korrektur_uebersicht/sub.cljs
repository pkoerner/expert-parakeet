(ns korrektur-uebersicht.sub
  (:require
    [re-frame.core :as rf]))


(rf/reg-sub
  :antworten-unkorrigiert/erhalten
  (fn [db _] (:antworten-unkorrigiert db)))


(rf/reg-sub
  :antworten-korrigiert/erhalten
  (fn [db _] (:antworten-korrigiert db)))


(rf/reg-sub
  :korrektor
  (fn [db _] (get-in db [:korrektor :name])))
