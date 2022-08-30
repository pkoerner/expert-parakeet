(ns events
  (:require
    [re-frame.core :as rf]))


(def <sub (comp deref rf/subscribe))

(def >evt rf/dispatch)


(rf/reg-event-db
  :init-db
  (fn [db _]
    (assoc db
           :user {:id "0" :name "Test_User"}
           :korrektor {:id "1" :name "Test_Korrektor"})))


;; Default event for HTTP Failure
(rf/reg-event-fx
  :http-no-on-failure
  (fn [cofx [_ fail]]
    {:db (-> (:db cofx)
             (assoc :laedt false)
             (assoc :error fail))
     :start-oauth2-github true}))


;; Start the OAuth2 flow
(rf/reg-fx
  :start-oauth2-github
  (fn [_] (set! (.-location js/window) "http://localhost:8082/api/oauth2/github")))
