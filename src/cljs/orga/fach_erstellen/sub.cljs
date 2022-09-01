(ns orga.fach-erstellen.sub
  (:require
    [re-frame.core :as rf]))


(rf/reg-sub
  :fach-erstellen/angekommen
  (fn [db _] (get-in db [:fach-erstellen :angekommen])))


(rf/reg-sub
  :fach-erstellen/failure
  (fn [db _] (get-in db [:fach-erstellen :failure])))


(rf/reg-sub
  :fach-erstellen/gesendet
  (fn [db _] (get-in db [:fach-erstellen :gesendet])))


