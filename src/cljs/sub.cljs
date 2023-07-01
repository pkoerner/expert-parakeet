(ns sub
  (:require
    [re-frame.core :as rf]))


(rf/reg-sub
  :fragen
  (fn [db _] (get-in db [:test :question-set/questions])))


(rf/reg-sub
  :user
  (fn [db _] (get-in db [:user :name])))


(rf/reg-sub
  :user-id
  (fn [db _] (get-in db [:user :id])))


(rf/reg-sub
  :laedt
  (fn [db _] (:laedt db)))


(rf/reg-sub
  :antworten/gesendet
  (fn [db _] (:gesendet db)))
