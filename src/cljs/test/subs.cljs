(ns test.subs
  (:require
    [re-frame.core :as rf]))


(rf/reg-sub
  :versuche
  (fn [db _] (:versuche db)))

(rf/reg-sub
  :test-id
  (fn [db _] (get-in db [:test :test/id])))

(rf/reg-sub
  :fragen
  (fn [db _] (get-in db [:test :test/fragen])))

(rf/reg-sub
  :antworten
  (fn [db _] (map (fn [[frage-id antwort]]
                    {:antwort/frage-id frage-id :antwort/antwort antwort}) 
                  (:antworten db))))

