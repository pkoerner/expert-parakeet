(ns studierenden-uebersicht.sub
  (:require
    [re-frame.core :as rf]))


(rf/reg-sub
  :studierenden-uebersicht/aktiv
  (fn [db _] (:studierenden-uebersicht db)))


(rf/reg-sub
  :kurse
  (fn [db _] (:kurse db)))


(rf/reg-sub
  :fach-from-kurs
  (fn [db [_ kurs-id]] (get db [:fach-by-kurs kurs-id])))


(rf/reg-sub
  :tests-from-kurs
  (fn [db [_ kurs-id]] (get db [:tests-by-kurs kurs-id])))


(rf/reg-sub
  :fragen-from-test
  (fn [db [_ test-id]] (get db [:fragen-by-test test-id])))


(rf/reg-sub
  :antwort-from-user-frage
  (fn [db [_ user-id frage-id]] (get db [:antwort-by-user-frage user-id frage-id])))
