(ns domain
  (:require
    [db]))


(defn test-max-punkte
  [test]
  (apply + (map :frage/punkte (:test/fragen test))))


;; TODO: wir müssen noch entscheiden ob der beste oder
;; der letzte Versuch gewertet wird.
(defn test-erreichte-punkte
  [antworten]
  ;; nimmt nur die bestbewertete Antwort
  (->> antworten
       (group-by #(get-in % [:antwort/frage :frage/id]))
       (map (fn [[_ antworten]]
              (apply max (map :antwort/punkte antworten))))
       (apply +)))


(defn test-punkte
  [test->antwort test]
  (-> test
      (assoc :test/max-punkte (test-max-punkte test))
      (assoc :test/erreichte-punkte (test-erreichte-punkte
                                      (test->antwort (:test/id test))))
      (select-keys [:test/id :test/name :test/max-punkte :test/erreichte-punkte])))


(defn kurse-mit-gesamt-punkten
  [kurse test->antwort]
  (map (fn [kurs]
         (update kurs :kurs/tests (partial map (partial test-punkte test->antwort))))
       kurse))

