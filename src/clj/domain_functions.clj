(ns domain-functions
  (:require
    [db :as db]))


(defn add-antworten-into-fragen
  [uid fragen]
  (mapv #(assoc % :antworten (into [] (db/antworten-by-frage-user-id (:frage/id (:frage %)) uid))) fragen))


(defn add-antworten-into-tests
  [uid tests]
  (mapv #(update % :fragen (partial add-antworten-into-fragen uid)) tests))


(defn get-fragen-in-maps-for-test-id
  [test-id]
  (mapv #(assoc {} :frage (dissoc % :frage/loesung)) (db/fragen-by-test-id test-id)))


(defn add-fragen-into-tests
  [tests]
  (mapv #(assoc % :fragen (get-fragen-in-maps-for-test-id (:test/id (:test %)))) tests))


(defn studierenden-uebersicht-map
  [user-id]
  ;; receive map in the form of
  ;; [{:kurs ___, :fach ___, :tests [{:test ___, :fragen [{:frage ___, :antworten [___]} ...]} ...]} ...]
  (let [kurse (into [] (db/kurs-by-user-id user-id))
        kurse-map (map #(assoc {} :kurs %) kurse)
        k-fach-map (map #(assoc % :fach (first (db/fach-by-kurs-id (:kurs/id (:kurs %))))) kurse-map)
        k-f-tests-map (map #(assoc % :tests (into [] (db/tests-by-kurs-id (:kurs/id (:kurs %))))) k-fach-map)
        k-f-t-fragen-map (map #(update % :tests add-fragen-into-tests) k-f-tests-map)
        k-f-t-f-antworten-map (map #(update % :tests (partial add-antworten-into-tests user-id)) k-f-t-fragen-map)]
    k-f-t-f-antworten-map))
