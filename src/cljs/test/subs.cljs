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
  :antworten-map
  (fn [db _] (:antworten db)))

(defn tuple->antwort
   [[frage-id antwort]]
    {:antwort/frage-id frage-id :antwort/antwort antwort})

(rf/reg-sub
  :antworten

  :<- [:antworten-map]

  (fn [antworten _]
         (map tuple->antwort antworten)))

(rf/reg-sub
  :fragen-mit-antworten

  :<- [:fragen]
  :<- [:antworten-map]

  (fn [[fragen antworten]]
    (map (fn [f] (assoc f :antwort/antwort (get antworten (:frage/id f)))) fragen)))

