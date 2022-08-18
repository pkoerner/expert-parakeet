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
                   :on-success      [:test/angekommen]
                   :with-credentials true}}))


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
  :versuch/senden
  (fn [_ [_ test-id]]
    ;; TODO: should use an interceptor that injects subscriptoins for user-id
    ;; and antworten
    (let [user-id @(rf/subscribe [:user-id])
          antworten @(rf/subscribe [:antworten])]
      {:http-xhrio  {:method          :post
                     :uri             (str vars/base-url "/test/" test-id "/versuche?user-id=" user-id)
                     :params          antworten
                     :format          (ajax/transit-request-format)
                     :response-format (ajax/transit-response-format)
                     :with-credentials true
                     :on-success      [:versuch/erfolgreich-gesendet]}
      :push-state  {:name :router/test
                     :path-params {:id test-id}}})))


(rf/reg-event-db
  :versuch/erfolgreich-gesendet
  (fn [db _]
    (assoc-in db [:test :gesendet] true)))


(rf/reg-event-fx
  :versuche/laden
  (fn [{:keys [db]} [_ test-id]]
    {:db          (assoc db :laedt true)
     :http-xhrio  {:method          :get
                   :uri             (str vars/base-url "/test/" test-id "/versuche")
                   ;; TODO: use interceptor
                   :params          {:user-id (get-in db [:user :id])}
                   :timeout         8000
                   :response-format (ajax/transit-response-format)
                   :with-credentials true
                   :on-success      [:versuche/angekommen]}}))


(rf/reg-event-db
  :versuche/angekommen
  (fn [db [_ antworten]]
    (-> db
        (assoc :laedt false)
        (assoc :versuche antworten))))


(rf/reg-event-db
  :versuche/entfernen
  (fn [db _]
    (dissoc db :antworten)))


(rf/reg-event-fx
  :versuch/laden
  (fn [{:keys [db]} [_ versuch-id]]
    {:db          (assoc db :laedt true)
     :http-xhrio  {:method          :get
                   :uri             (str vars/base-url "/versuch/" versuch-id)
                   ;; TODO: use interceptor
                   :params          {:user-id (get-in db [:user :id])}
                   :timeout         8000
                   :response-format (ajax/transit-response-format)
                   :with-credentials true
                   :on-success      [:versuch/angekommen]}}))


(rf/reg-event-db
  :versuch/angekommen
  (fn [db [_ antworten]]
    (-> db
        (assoc :laedt false)
        (assoc :versuche antworten))))


(rf/reg-event-db
  :versuch/entfernen
  (fn [db _]
    (dissoc db :antworten)))

