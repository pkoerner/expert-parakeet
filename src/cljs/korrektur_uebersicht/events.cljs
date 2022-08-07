(ns korrektur-uebersicht.events
  (:require
    [ajax.core :as ajax]
    [re-frame.core :as rf]
    [vars]))


(rf/reg-event-fx
  :korrektur-uebersicht/hole-daten
  (fn [{:keys [db]} _]
    {:db          (assoc db :laedt true)
     :http-xhrio  {:method          :get
                   :uri             (str vars/base-url "/korrektur/" (get-in db [:korrektor :id]))
                   :timeout         8000
                   :response-format (ajax/transit-response-format)
                   :on-success      [:korrektur-uebersicht/speichere-daten]}}))


(rf/reg-event-db
  :korrektur-uebersicht/speichere-daten
  (fn [db [_ daten]]
    (-> db
        (assoc :laedt false)
        (assoc :antworten daten))))


(rf/reg-event-db
  :korrektur-uebersicht/entfernen
  (fn [db _]
    (dissoc db :antworten)))
