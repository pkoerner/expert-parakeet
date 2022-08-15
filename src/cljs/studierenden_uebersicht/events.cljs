(ns studierenden-uebersicht.events
  (:require
    [ajax.core :as ajax]
    [re-frame.core :as rf]
    [vars]))


(rf/reg-event-fx
  :kurse/laden
  (fn [{:keys [db]} _]
    {:db          (assoc db :laedt true)
     :http-xhrio  {:method          :get
                   :uri             (str vars/base-url "/user/" (get-in db [:user :id]) "/kurse")
                   :timeout         8000
                   :response-format (ajax/transit-response-format)
                   :on-success      [:kurse/angekommen]}}))


(rf/reg-event-db
  :kurse/angekommen
  (fn [db [_ daten]]
    (-> db
        (dissoc :laedt)
        (assoc :kurse daten))))


(rf/reg-event-db
  :kurse/entfernen
  (fn [db _]
    (dissoc db :kurse)))
