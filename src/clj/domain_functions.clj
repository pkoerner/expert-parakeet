(ns domain-functions)


(defn fragen-from-test-without-loesungen
  [test-id fragen-by-test-id]
  (mapv #(dissoc % :frage/loesung) (fragen-by-test-id test-id)))


(defn studierenden-uebersicht-map
  [user-id kurse-by-user-id fach-by-kurs-id tests-by-kurs-id antworten-by-frage-user-id fragen-by-test-id]
  ;; receive map in the form of
  ;; [:kurse kurse, [:fach-by-kurs kurs-id] fach, [:test-by-kurs kurs-id] test, [:fragen-by-test test-id] fragen, [:antwort-by-frage frage-id] antwort]
  (let [kurse (into [] (kurse-by-user-id user-id))
        faecher-by-kurs (reduce #(conj %1 [:fach-by-kurs (:kurs/id %2)] (first (fach-by-kurs-id (:kurs/id %2)))) [] kurse)
        tests-by-kurs (reduce #(conj %1 [:tests-by-kurs (:kurs/id %2)] (into [] (tests-by-kurs-id (:kurs/id %2)))) []  kurse)
        test-ids (distinct (mapv :test/id (flatten (vals (apply assoc {} tests-by-kurs)))))
        fragen-by-tests (reduce #(conj %1 [:fragen-by-test %2] (fragen-from-test-without-loesungen %2 fragen-by-test-id)) [] test-ids)
        frage-ids (distinct (mapv :frage/id (flatten (vals (apply assoc {} fragen-by-tests)))))
        antwort-by-frage (reduce #(conj %1 [:antworten-by-frage %2] (into [] (antworten-by-frage-user-id %2 user-id))) [] frage-ids)]
    (apply assoc {:kurse kurse} (concat faecher-by-kurs tests-by-kurs fragen-by-tests antwort-by-frage))))
