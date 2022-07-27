(ns events
  (:require 
    [ajax.core :as ajax ]
    [re-frame.core :as rf]))

(def <sub (comp deref rf/subscribe))

(def >evt rf/dispatch)

;; Maybe use: https://github.com/day8/re-frame-async-flow-fx
;; or         https://github.com/tolitius/mount
(rf/reg-event-fx
  :init-db
  (fn [{:keys [db]} _]
    {:db          (assoc db :loading true)
     :http-xhrio  {:method          :get
                   :uri             "/api/test/1"
                   :timeout         8000
                   :response-format (ajax/transit-response-format)
                   :on-success      [:update-test]}}
    ))


(rf/reg-event-db
  :update-test
  (fn [db [_ test]]
    (-> db 
        (assoc :loading false)
        (assoc :test test))))


(rf/reg-event-db
  :http-no-on-failure
  (fn [db fail]
    (-> db 
        (assoc :loading false)
        (assoc :error fail))))

(rf/reg-event-db
  :frage-beantworten
  (fn [db [_ frage-id antwort-text]]
    (assoc-in db [:antworten frage-id] antwort-text)))

(rf/reg-event-fx
  :antworten-abschicken
  (fn [{:keys [db]} _]
    (let [test-id (get-in db [:test :test/id])
          antworten (:antworten db)] 
      {:http-xhrio  {:method          :post
                     :uri             (str "/api/test/" test-id "/antwort")
                     :params          antworten
                     :format          (ajax/transit-request-format)
                     :response-format (ajax/transit-response-format)
                     :on-success      [:antworten-erfolgreich]}})))

(rf/reg-event-db
  :antworten-erfolgreich
  (fn [db _]
    (assoc db :abgesendet true)))

