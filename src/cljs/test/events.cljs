(ns test.events
  (:require
    [ajax.core :as ajax]
    [re-frame.core :as rf]
    [vars]))


(rf/reg-event-fx
  :test/laden
  (fn [{:keys [db]} [_ test-id]]
    {:db          (assoc db :laedt true)
     :http-xhrio  {:method          :get
                   :uri             (str vars/base-url "/test/" test-id)
                   :timeout         8000
                   :response-format (ajax/transit-response-format)
                   :on-success      [:test/angekommen]}}))


(rf/reg-event-db
  :test/angekommen
  (fn [db [_ test]]
    (-> db
        (assoc :laedt false)
        (assoc :test test))))


(rf/reg-event-db
  :test/entfernen
  (fn [db _]
    (dissoc db :test)))


(rf/reg-event-db
  :frage/beantworten
  (fn [db [_ frage-id antwort-text]]
    (assoc-in db [:antworten frage-id] antwort-text)))


(rf/reg-event-fx
  :antworten/senden
  (fn [{:keys [db]} _]
    (let [test-id (get-in db [:test :test/id])
          antworten (:antworten db)]
      {:http-xhrio  {:method          :post
                     :uri             (str vars/base-url "/test/" test-id "/antworten")
                     :params          antworten
                     :format          (ajax/transit-request-format)
                     :response-format (ajax/transit-response-format)
                     :on-success      [:antworten/erfolgreich-gesendet]}})))


(rf/reg-event-db
  :antworten/erfolgreich-gesendet
  (fn [db _]
    (assoc db :gesendet true)))

