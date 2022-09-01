(ns orga.fach-erstellen.events
  (:require
    [ajax.core :as ajax]
    [re-frame.core :as rf]
    [vars]))


(rf/reg-event-db
  :fach-erstellen/init
  (fn [db _]
    (assoc-in db [:fach-erstellen :fach-name] "")))


(rf/reg-event-db
  :fach-erstellen/entfernen
  (fn [db _]
    (dissoc db :fach-erstellen)))


(rf/reg-event-db
  :fach-erstellen/update
  (fn [db [_ key value]]
    (assoc-in db [:fach-erstellen key] value)))


(rf/reg-event-fx
  :fach-erstellen/erstellen
  (fn [{:keys [db]}]
    {:db         (assoc-in db [:fach-erstellen :gesendet] true)
     :http-xhrio {:method          :post
                  :uri             (str vars/base-url "/fach")
                  :params          {:fach-name (get-in db [:fach-erstellen :fach-name])}
                  :format          (ajax/transit-request-format)
                  :response-format (ajax/transit-response-format)
                  :on-success      [:fach-erstellen/update :angekommen true]
                  :on-failure      [:fach-erstellen/update :failure]}}))

