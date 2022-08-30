(ns domain)


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
        antworten-ohne-user-id (map #(dissoc % :user/id) antworten-ohne-duplicates)
        korrigiert-ids (into #{} (map :antwort/id antworten-mit-korrekturen))
        antworten-ohne-korrekturen (remove #(contains? korrigiert-ids (:antwort/id %)) antworten-ohne-user-id)]
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


(defn get-antwort-with-given-id
  [id antworten]
  (first (filter #(= id (:antwort/id %)) antworten)))


(defn antworten-korrigiert
  [korrektur-map antworten]
  (let [korrekturen-with-antwort-id (flatten (map #(unpack-map-in-map :korrektur/antwort %) korrektur-map))
        antworten-mit-korrekturen (map #(merge % (get-antwort-with-given-id (:antwort/id %) antworten)) korrekturen-with-antwort-id)
        antworten-ohne-studi (map #(dissoc % :user/id) antworten-mit-korrekturen)
        antwort-ids-for-this-korrektor (into #{} (map :antwort/id antworten))]
    (filter #(contains? antwort-ids-for-this-korrektor (:antwort/id %)) antworten-ohne-studi)))


(defn korrekturen-into-antwort
  [korrekturen-von-antwort antwort]
  (let [korrekturen (korrekturen-von-antwort (:antwort/id antwort))
        korrekturen-sorted (reverse (sort-by :korrektur/timestamp korrekturen))]
    (if (first korrekturen-sorted)
      (merge antwort (first korrekturen-sorted))
      antwort)))


(defn antworten-fuer-korrektur-ansicht
  [[antwort-map]]
  (let [antwort-unpacked-frage-nested (update (merge antwort-map (:antwort/frage antwort-map)) :antwort/antwort first)
        antwort-unpacked (select-keys antwort-unpacked-frage-nested [:user/id :frage/frage-text :frage/punkte :frage/loesung
                                                                     :antwort/antwort :antwort/punkte :antwort/id])]
    antwort-unpacked))


(defn check-incoming-korrektur
  [korrektur passende-antwort]
  (if-not (first passende-antwort)
    (assoc korrektur :error :keine-passende-antwort)
    (let [frage-punkte (get-in (first passende-antwort) [:antwort/frage :frage/punkte])]
      (cond
        (not frage-punkte)
        (assoc korrektur :error :keine-passende-antwort)
        (or (not (:korrektur/korrektur-text korrektur)) (empty? (:korrektur/korrektur-text korrektur)))
        (assoc korrektur :error :korrektur-text-missing)
        (or (not (:korrektur/punkte korrektur)) (empty? (:korrektur/punkte korrektur)))
        (assoc korrektur :error :korrektur-punkte-missing)
        (not (nat-int? (read-string (:korrektur/punkte korrektur))))
        (assoc korrektur :error :punkte-invalid)
        (> (read-string (:korrektur/punkte korrektur)) frage-punkte)
        (assoc korrektur :error :punkte-zu-viel)
        :else (update korrektur :korrektur/punkte read-string)))))


(defn add-korrektur-if-no-error
  [add-korrektur-fct ant-id korrektur]
  (if (:error korrektur)
    korrektur
    (add-korrektur-fct ant-id korrektur)))
