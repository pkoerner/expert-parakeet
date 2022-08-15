(ns orga.frage-erstellen.sub
  (:require
    [re-frame.core :as rf]))


(rf/reg-sub
  :frage-erstellen/frage
  (fn [db _] (:frage db)))


(rf/reg-sub
  :frage-erstellen/typ
  (fn [db _] (get-in db [:frage :frage/typ])))


(rf/reg-sub
  :frage-erstellen/choices
  (fn [db _] (get-in db [:frage :frage/choices])))


(rf/reg-sub
  :frage-erstellen/single-choice-loesung
  (fn [db _] (get-in db [:frage :frage/single-choice-loesung])))


(rf/reg-sub
  :frage-erstellen/multiple-choice-loesung
  (fn [db _] (get-in db [:frage :frage/multiple-choice-loesung])))


(rf/reg-sub
  :frage-erstellen/loesungskriterien
  (fn [db _] (get-in db [:frage :frage/loesungskriterien])))
