(ns orga.test-erstellen.sub
  (:require
    [re-frame.core :as rf]))


(rf/reg-sub
  :test-erstellen/faecher
  (fn [db _] (get-in db [:test-erstellen :faecher])))


(rf/reg-sub
  :test-erstellen/kurse
  (fn [db _] (get-in db [:test-erstellen :kurse])))


(rf/reg-sub
  :test-erstellen/grenze
  (fn [db _] (get-in db [:test-erstellen :grenze])))


(rf/reg-sub
  :test-erstellen/max-punkte
  (fn [db _] (reduce + (map :frage/punkte (get-in db [:test-erstellen :fragen])))))


(rf/reg-sub
  :test-erstellen/laedt-faecher
  (fn [db _] (get-in db [:test-erstellen :laedt-faecher])))


(rf/reg-sub
  :test-erstellen/laedt-kurse
  (fn [db _] (get-in db [:test-erstellen :laedt-kurse])))


(rf/reg-sub
  :test-erstellen/fach-id
  (fn [db _] (get-in db [:test-erstellen :fach-id])))


(rf/reg-sub
  :test-erstellen/kurs-id
  (fn [db _] (get-in db [:test-erstellen :kurs-id])))


(rf/reg-sub
  :test-erstellen/name
  (fn [db _] (get-in db [:test-erstellen :test-name])))


(rf/reg-sub
  :test-erstellen/gesendet
  (fn [db _] (get-in db [:test-erstellen :gesendet])))


(rf/reg-sub
  :test-erstellen/angekommen
  (fn [db _] (get-in db [:test-erstellen :angekommen])))


(rf/reg-sub
  :test-erstellen/fragen-importieren?
  (fn [db _] (get-in db [:test-erstellen :fragen-importieren?])))


(rf/reg-sub
  :test-erstellen/fragen
  (fn [db _] (get-in db [:test-erstellen :fragen])))


(rf/reg-sub
  :test-erstellen/frage-erstellen?
  (fn [db _] (get-in db [:test-erstellen :frage-erstellen?])))


(rf/reg-sub
  :test-erstellen/has-zeit
  (fn [db _]
    (and (get-in db [:test-erstellen :start-datum])
         (get-in db [:test-erstellen :start-zeit])
         (get-in db [:test-erstellen :end-datum])
         (get-in db [:test-erstellen :end-zeit]))))
