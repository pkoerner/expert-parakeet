(ns korrektur.events
  (:require
    [ajax.core :as ajax]
    [re-frame.core :as rf]
    [vars]))


(rf/reg-event-fx
  :korrektur/laden
  (fn [{:keys [db]} [_ antwort-id]]
    {:db          (assoc db :loading true)
     :http-xhrio  {:method          :get
                   :uri             (str vars/base-url "/antwort-fuer-korrektur/" antwort-id)
                   :timeout         8000
                   :response-format (ajax/transit-response-format)
                   :on-success      [:korrektur/angekommen]}}))


(rf/reg-event-db
  :korrektur/angekommen
  (fn [db [_ test]]
    (-> db
        (assoc :loading false)
        (assoc :korrektur test))))


(rf/reg-event-db
  :korrektur/entfernen
  (fn [db _]
    (dissoc db :korrektur)))


(rf/reg-event-db
  :korrektur/schreiben
  (fn [db [_ korrektur-text]]
    (assoc-in db [:korrektur :korrektur/korrektur-text] korrektur-text)))


(rf/reg-event-db
  :korrektur/punkte
  (fn [db [_ korrektur-punkte]]
    (assoc-in db [:korrektur :korrektur/punkte] korrektur-punkte)))


(rf/reg-event-fx
  :korrektur/senden
  (fn [{:keys [db]} _]
    (let [antwort-id (get-in db [:korrektur :antwort/id])
          korrektur (select-keys (:korrektur db) [:antwort/id :korrektur/korrektur-text :korrektur/punkte])]
      {:http-xhrio  {:method          :post
                     :uri             (str vars/base-url "/korrektur-fuer-antwort/" antwort-id)
                     :params          korrektur
                     :format          (ajax/transit-request-format)
                     :response-format (ajax/transit-response-format)
                     :on-success      [:korrektur/erfolgreich-gesendet]}})))


(rf/reg-event-db
  :korrektur/erfolgreich-gesendet
  (fn [db _]
    (assoc-in db [:korrektur :gesendet] true)))
