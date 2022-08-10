(ns orga.frage-erstellen.sub
  (:require
    [re-frame.core :as rf]))


(rf/reg-sub
  :frage/typ
  (fn [db _] (get-in db [:frage :frage/frage-typ])))


(rf/reg-sub
  :frage/choices
  (fn [db _] (get-in db [:frage :frage/choices])))


(rf/reg-sub
  :frage/single-choice-loesing
  (fn [db _] (get-in db [:frage :frage/single-choice-loesing])))

