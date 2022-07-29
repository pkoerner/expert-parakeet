(ns domain-functions)


(defn fach-for-studierenden-uebersicht
  [kurs-id fach-by-kurs-id]
  (select-keys (first (fach-by-kurs-id kurs-id)) [:fach/id :fach/fachtitel]))


(defn calc-points
  [test-id user-id fragen-by-test-id antworten-by-frage-user-id]
  (let [fragen (fragen-by-test-id test-id)
        total-points (reduce #(+ %1 (:frage/punkte %2)) 0 fragen)
        antworten (mapv #(antworten-by-frage-user-id (:frage/id %) user-id) fragen)
        reached-points (reduce #(+ %1 (apply max 0 (map :antwort/punkte %2))) 0 antworten)]
    [:test/max-punkte total-points :test/erreichte-punkte reached-points]))


(defn tests-for-studierenden-uebersicht
  [kurs-id user-id tests-by-kurs-id fragen-by-test-id antworten-by-frage-user-id]
  (let [tests (mapv #(select-keys % [:test/id :test/name]) (tests-by-kurs-id kurs-id))
        tests-points (mapv #(apply assoc % (calc-points (:test/id %) user-id fragen-by-test-id antworten-by-frage-user-id)) tests)]
    tests-points))


(defn studierenden-uebersicht-map
  [user-id kurse-by-user-id fach-by-kurs-id tests-by-kurs-id antworten-by-frage-user-id fragen-by-test-id]
  ;; receive map in the form of
  ;; [:kurse kurse, [:fach-by-kurs kurs-id] fach, [:test-by-kurs kurs-id] test]
  ;; kurse includes id, jahr and semester
  ;; fach includes id and fachtitel
  ;; test include id, name, max-punkte and erreichte-punkte
  (let [kurse (map #(select-keys % [:kurs/id :kurs/jahr :kurs/semester]) (into [] (kurse-by-user-id user-id)))
        faecher-by-kurs (reduce #(conj %1 [:fach-by-kurs (:kurs/id %2)] (fach-for-studierenden-uebersicht (:kurs/id %2) fach-by-kurs-id)) [] kurse)
        tests-by-kurs (reduce #(conj %1 [:tests-by-kurs (:kurs/id %2)] (tests-for-studierenden-uebersicht (:kurs/id %2) user-id tests-by-kurs-id fragen-by-test-id antworten-by-frage-user-id)) []  kurse)]
    (apply assoc {:kurse kurse} (concat faecher-by-kurs tests-by-kurs))))
