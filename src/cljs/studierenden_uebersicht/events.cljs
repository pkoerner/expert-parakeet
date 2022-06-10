(ns studierenden-uebersicht.events
  (:require
    [ajax.core :as ajax]
    [re-frame.core :as rf]
    [vars]))


(rf/reg-event-db
  :studierenden-uebersicht/laden
  (fn [db _]
    (assoc db :studierenden-uebersicht true)))


(rf/reg-event-db
  :studierenden-uebersicht/verstecken
  (fn [db _]
    (assoc db :studierenden-uebersicht false)))


(rf/reg-event-fx
  :studierenden-uebersicht/hole-daten
  (fn [{:keys [db]} [_ user-id]]
    {:db          (assoc db :laedt true)
     :http-xhrio  {:method          :get
                   :uri             (str vars/base-url "/studierenden-uebersicht/user/" user-id)
                   :timeout         8000
                   :response-format (ajax/transit-response-format)
                   :on-success      [:studierenden-uebersicht/speichere-daten]}}))


(rf/reg-event-db
  :studierenden-uebersicht/speichere-daten
  (fn [db [_ daten]]
    (-> db
        (assoc :laedt false)
        (assoc :daten daten))))
