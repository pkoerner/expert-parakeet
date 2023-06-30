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
  (fn [db [_ frage-id antwort]]
    (assoc-in db [:antworten frage-id] antwort)))


(rf/reg-event-db
  :frage/multiple-choice-beantworten
  (fn [db [_ frage-id in-answer? choice-text]]
    (if (not (get-in db [:antworten frage-id]))
      (assoc-in db [:antworten frage-id] #{choice-text})  ; init antwort as set, in-answer? must be true if antwort is not initialised
      (if in-answer?
        (update-in db [:antworten frage-id] conj choice-text)
        (update-in db [:antworten frage-id] disj choice-text)))))


(rf/reg-event-fx
  :antworten/senden
  (fn [{:keys [db]} _]
    ;; TODO: should use an interceptor that injects subscriptoins for user-id
    ;; and antworten
    (let [user-id @(rf/subscribe [:user-id])
          antworten (:antworten db)]
      {:http-xhrio  {:method          :post
                     :uri             (str vars/base-url "/user/" user-id "antworten")
                     :params          antworten
                     :format          (ajax/transit-request-format)
                     :response-format (ajax/transit-response-format)
                     :on-success      [:antworten/erfolgreich-gesendet]}})))


(rf/reg-event-db
  :antworten/erfolgreich-gesendet
  (fn [db _]
    (assoc db :gesendet true)))

