(ns sub
  (:require [re-frame.core :as rf]))

(rf/reg-sub
  :fragen
  (fn [db _] (get-in db [:test :test/fragen])))


(rf/reg-sub
  :loading
  (fn [db _] (:loading db)))

(rf/reg-sub
  :abgesendet
  (fn [db _] (:abgesendet db)))



