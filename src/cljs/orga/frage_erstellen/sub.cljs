(ns orga.frage-erstellen.sub
  (:require
    [re-frame.core :as rf]))


(rf/reg-sub
  :frage-erstellen/frage
  (fn [db _] (:frage db)))


(rf/reg-sub
  :frage-erstellen/typ
  (fn [db _] (get-in db [:frage :question/type])))


(rf/reg-sub
  :frage-erstellen/choices
  (fn [db _] (get-in db [:frage :question/possible-solutions])))


(rf/reg-sub
  :frage-erstellen/single-choice-loesung
  (fn [db _] (get-in db [:frage :question/single-choice-solution])))


(rf/reg-sub
  :frage-erstellen/multiple-choice-loesung
  (fn [db _] (get-in db [:frage :question/multiple-choice-solution])))


(rf/reg-sub
  :frage-erstellen/loesungskriterien
  (fn [db _] (get-in db [:frage :question/evaluation-criteria])))
