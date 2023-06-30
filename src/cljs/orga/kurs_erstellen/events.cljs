(ns orga.kurs-erstellen.events
  (:require
    [ajax.core :as ajax]
    [re-frame.core :as rf]
    [vars]))


(rf/reg-event-db
  :kurs-erstellen/init
  (fn [db _]
    (rf/dispatch [:kurs-erstellen/lade-faecher])
    db))


(rf/reg-event-db
  :kurs-erstellen/entfernen
  (fn [db _]
    (dissoc db :kurs-erstellen)))


(rf/reg-event-db
  :kurs-erstellen/update
  (fn [db [_ key value]]
    (assoc-in db [:kurs-erstellen key] value)))


(rf/reg-event-fx
  :kurs-erstellen/lade-faecher
  (fn [_ _]
    {:http-xhrio  {:method          :get
                   :uri             (str vars/base-url "/fach")
                   :timeout         8000
                   :response-format (ajax/transit-response-format)
                   :on-success      [:kurs-erstellen/update :faecher]
                   :on-failure      [:kurs-erstellen/update :failure]}}))


(rf/reg-event-fx
  :kurs-erstellen/erstellen
  (fn [{:keys [db]}]
    {:db         (assoc-in db [:kurs-erstellen :gesendet] true)
     :http-xhrio {:method          :post
                  :uri             (str vars/base-url "/kurs")
                  :params          {:fach-id (get-in db [:kurs-erstellen :fach-id])
                                    :jahr (get-in db [:kurs-erstellen :jahr])
                                    :semester (get-in db [:kurs-erstellen :semester])}
                  :format          (ajax/transit-request-format)
                  :response-format (ajax/transit-response-format)
                  :on-success      [:kurs-erstellen/update :angekommen true]
                  :on-failure      [:kurs-erstellen/update :failure]}}))

