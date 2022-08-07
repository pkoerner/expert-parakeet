(ns events
  (:require
    [re-frame.core :as rf]))


(def <sub (comp deref rf/subscribe))

(def >evt rf/dispatch)


(rf/reg-event-db
  :init-db
  (fn [db _]
    (assoc db
           :user {:id 0 :name "Test_User"}
           :korrektor {:id 1 :name "Test_Korrektor"})))


;; Default event for HTTP Failure
(rf/reg-event-db
  :http-no-on-failure
  (fn [db fail]
    (-> db
        (assoc :laedt false)
        (assoc :error fail))))

