(ns sub
  (:require
    [re-frame.core :as rf]))


(rf/reg-sub
  :fragen
  (fn [db _] (get-in db [:test :test/fragen])))


(rf/reg-sub
  :laedt
  (fn [db _] (:laedt db)))


(rf/reg-sub
  :antworten/gesendet
  (fn [db _] (:gesendet db)))


