(ns domain-functions-test
  {:clj-kondo/config '{:linters {:unresolved-symbol
                                 {:exclude (test-fach-for-studierenden-uebersicht test-calc-points test-tests-for-studierenden-uebersicht)}}}}
  (:require
    [clojure.test.check.clojure-test :refer [defspec]]
    [clojure.test.check.generators :as gen]
    [clojure.test.check.properties :as prop]
    [db-test :refer [fach-gen]]
    [domain-functions :as df]))


(defspec test-fach-for-studierenden-uebersicht 10
  (prop/for-all
    [faecher fach-gen]
    (let [fach (first faecher)
          {id :fach/id titel :fach/fachtitel} fach
          fct (fn [_id] [fach])
          fach-got (df/fach-for-studierenden-uebersicht nil fct)
          {id-got :fach/id titel-got :fach/fachtitel} fach-got]
      (and (= #{:fach/id :fach/fachtitel} (into #{} (keys fach-got)))
           (= id id-got)
           (= titel titel-got)))))


(defspec test-calc-points 10
  (prop/for-all
    [max-punkte (gen/not-empty (gen/list gen/nat))
     erreichte-punkte (gen/list gen/nat)]
    (let [fragen (map #(assoc {:frage/id 0 :frage/typ :free-text :frage/frage-text "Text" :frage/loesung "Loesung"} :frage/punkte %) max-punkte)
          antworten (map #(assoc {:antwort/id 0 :antwort/user [:user/id 0] :antwort/frage [:frage/id 0] :antwort/antwort-text "Text"} :antwort/punkte %) erreichte-punkte)
          fragen-fct (fn [_id] fragen)
          antworten-fct (fn [_fid _uid] antworten)
          summed-max-punkte (apply + max-punkte)
          summed-erreichte-punkte (* (count max-punkte) (apply max 0 erreichte-punkte))
          [_ total-points _ reached-points] (df/calc-points nil nil fragen-fct antworten-fct)]
      (and (= summed-max-punkte total-points)
           (= summed-erreichte-punkte reached-points)))))


(defspec test-tests-for-studierenden-uebersicht 10
  (prop/for-all
    [max-punkte (gen/not-empty (gen/list gen/nat))
     erreichte-punkte (gen/list gen/nat)
     test-ids (gen/not-empty (gen/list gen/nat))]
    (let [fragen (map #(assoc {:frage/id 0 :frage/typ :free-text :frage/frage-text "Text" :frage/loesung "Loesung"} :frage/punkte %) max-punkte)
          antworten (map #(assoc {:antwort/id 0 :antwort/user [:user/id 0] :antwort/frage [:frage/id 0] :antwort/antwort-text "Text"} :antwort/punkte %) erreichte-punkte)
          fragen-fct (fn [_id] fragen)
          antworten-fct (fn [_fid _uid] antworten)
          summed-max-punkte (apply + max-punkte)
          summed-erreichte-punkte (* (count max-punkte) (apply max 0 erreichte-punkte))
          tests (map #(assoc {:test/name "name" :test/fragen []} :test/id %) test-ids)
          tests-fct (fn [_id] tests)
          result (df/tests-for-studierenden-uebersicht nil nil tests-fct fragen-fct antworten-fct)]
      (and (= #{:test/id :test/name :test/max-punkte :test/erreichte-punkte} (into #{} (keys (first result))))
           (= (sort test-ids) (sort (map :test/id result)))
           (= summed-max-punkte (:test/max-punkte (first result)))
           (= summed-erreichte-punkte (:test/erreichte-punkte (first result)))))))
