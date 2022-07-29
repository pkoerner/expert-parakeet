(ns domain-functions)


(defn fach-for-studierenden-uebersicht
  [kurs-id fach-by-kurs-id]
  (select-keys (first (fach-by-kurs-id kurs-id)) [:fach/id :fach/fachtitel]))


(defn tests-for-studierenden-uebersicht
  [kurs-id tests-by-kurs-id]
  (mapv #(select-keys % [:test/id :test/name]) (into [] (tests-by-kurs-id kurs-id))))


(defn fragen-for-studierenden-uebersicht
  [test-id fragen-by-test-id]
  (mapv #(select-keys % [:frage/id :frage/punkte]) (fragen-by-test-id test-id)))


(defn antworten-for-studierenden-uebersicht
  [frage-id user-id antworten-by-frage-user-id]
  (mapv #(select-keys % [:antwort/id :antwort/punkte]) (antworten-by-frage-user-id frage-id user-id)))


(defn studierenden-uebersicht-map
  [user-id kurse-by-user-id fach-by-kurs-id tests-by-kurs-id antworten-by-frage-user-id fragen-by-test-id]
  ;; receive map in the form of
  ;; [:kurse kurse, [:fach-by-kurs kurs-id] fach, [:test-by-kurs kurs-id] test, [:fragen-by-test test-id] fragen, [:antwort-by-frage frage-id] antwort]
  ;; kurse includes id, jahr and semester
  ;; fach includes id and fachtitel
  ;; test include id and name
  ;; antwort include id and punkte
  ;; frage include id and punkte
  (let [kurse (map #(select-keys % [:kurs/id :kurs/jahr :kurs/semester]) (into [] (kurse-by-user-id user-id)))
        faecher-by-kurs (reduce #(conj %1 [:fach-by-kurs (:kurs/id %2)] (fach-for-studierenden-uebersicht (:kurs/id %2) fach-by-kurs-id)) [] kurse)
        tests-by-kurs (reduce #(conj %1 [:tests-by-kurs (:kurs/id %2)] (tests-for-studierenden-uebersicht (:kurs/id %2) tests-by-kurs-id)) []  kurse)
        test-ids (distinct (mapv :test/id (flatten (vals (apply assoc {} tests-by-kurs)))))
        fragen-by-tests (reduce #(conj %1 [:fragen-by-test %2] (fragen-for-studierenden-uebersicht %2 fragen-by-test-id)) [] test-ids)
        frage-ids (distinct (mapv :frage/id (flatten (vals (apply assoc {} fragen-by-tests)))))
        antwort-by-frage (reduce #(conj %1 [:antworten-by-frage %2] (antworten-for-studierenden-uebersicht %2 user-id antworten-by-frage-user-id)) [] frage-ids)]
    (apply assoc {:kurse kurse} (concat faecher-by-kurs tests-by-kurs fragen-by-tests antwort-by-frage))))
