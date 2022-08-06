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


;; changes a map that has a coll in it (as var) to a coll of maps
;; all maps have the keys and vals of the outer map and the keys and vals of one inner map
(defn unpack-map-in-map
  [key-of-coll input-map]
  (let [map-without-coll (dissoc input-map key-of-coll)]
    (map
      #(merge map-without-coll %)
      (key-of-coll input-map))))


(defn freitext-fragen
  [kurse-mit-inneren-tests]
  (let [tests-mit-inneren-fragen (flatten (map (partial unpack-map-in-map :kurs/tests) kurse-mit-inneren-tests))
        fragen-mit-innerem-fach (flatten (map (partial unpack-map-in-map :test/fragen) tests-mit-inneren-fragen))
        fragen (map #(dissoc (assoc % :fach/fachtitel (:fach/fachtitel (:kurs/fach %))) :kurs/fach) fragen-mit-innerem-fach)
        nur-freitext-fragen (filter #(= :frage.typ/text (:frage/typ %)) fragen)]
    nur-freitext-fragen))


(defn sortierte-antworten-von-freitext-fragen
  [fct-antworten-von-frage freitext-fragen]
  (let [freitext-fragen-mit-inneren-antworten (map #(assoc % :frage/antworten (fct-antworten-von-frage (:frage/id %))) freitext-fragen)
        antworten (flatten (map (partial unpack-map-in-map :frage/antworten) freitext-fragen-mit-inneren-antworten))]
    (sort-by :antwort/timestamp antworten)))


(defn remove-antworten-with-identical-user-frage-test-id
  [antworten]
  (let [antworten-vec (vec antworten)]
    (loop [a []
           i 0
           prev-ids #{}]
      (if (= i (count antworten))
        a
        (let [current-ids {:user/id (:user/id (get antworten-vec i)), :frage/id (:frage/id (get antworten-vec i)),
                           :test/id (:test/id (get antworten-vec i)), :kurs/id (:kurs/id (get antworten-vec i))}]
          (if (contains? prev-ids current-ids)
            (recur a (inc i) prev-ids)
            (recur (conj a (get antworten-vec i)) (inc i) (conj prev-ids current-ids))))))))


(defn antworten-unkorrigiert-und-nur-eine-pro-user-frage-test-id
  [antworten-mit-korrekturen antworten]
  (let [antworten-ohne-duplicates (reverse (remove-antworten-with-identical-user-frage-test-id (reverse antworten)))
        korrigiert-ids (into #{} (map :antwort/id antworten-mit-korrekturen))
        antworten-ohne-korrekturen (remove #(contains? korrigiert-ids (:antwort/id %)) antworten-ohne-duplicates)]
    antworten-ohne-korrekturen))


(defn timestamp-to-datum-and-uhrzeit
  [antwort-map]
  (map
    #(let [date (:antwort/timestamp %)]
       (dissoc
         (assoc % :antwort/datum (.format (java.text.SimpleDateFormat. "dd.MM.yyyy") date)
                :antwort/uhrzeit (.format (java.text.SimpleDateFormat. "HH:mm") date))
         :antwort/timestamp))
    antwort-map))
