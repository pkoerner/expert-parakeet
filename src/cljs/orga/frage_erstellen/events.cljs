(ns orga.frage-erstellen.events
  (:require
    [re-frame.core :as rf]))


(rf/reg-event-db
  :frage-erstellen/init
  (fn [db _]
    (assoc db :frage {:frage/typ :frage.typ/single-choice})))


(rf/reg-event-db
  :frage-erstellen/entfernen
  (fn [db _]
    (dissoc db :frage)))


(rf/reg-event-db
  :frage-erstellen/update
  (fn [db [_ key value]]
    (assoc-in db [:frage key] value)))


(rf/reg-event-db
  :frage-erstellen/add-choice
  (fn [db [_ choice]]
    (update-in db [:frage :frage/choices] conj choice)))


