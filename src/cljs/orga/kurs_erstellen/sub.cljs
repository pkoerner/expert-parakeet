(ns orga.kurs-erstellen.sub
  (:require
    [re-frame.core :as rf]))


(rf/reg-sub
  :kurs-erstellen/faecher
  (fn [db _] (get-in db [:kurs-erstellen :faecher])))


(rf/reg-sub
  :kurs-erstellen/angekommen
  (fn [db _] (get-in db [:kurs-erstellen :angekommen])))


(rf/reg-sub
  :kurs-erstellen/failure
  (fn [db _] (get-in db [:kurs-erstellen :failure])))


(rf/reg-sub
  :kurs-erstellen/gesendet
  (fn [db _] (get-in db [:kurs-erstellen :gesendet])))

