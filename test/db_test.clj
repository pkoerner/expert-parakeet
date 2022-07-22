(ns db-test
  {:clj-kondo/config '{:linters {:unresolved-symbol {:exclude (test-frage-by-id)}}}}
  (:require
    [clojure.test.check.clojure-test :refer [defspec]]
    [clojure.test.check.generators :as gen]
    [clojure.test.check.properties :as prop]
    [db :as db]))


(def frage-gen-prev (gen/hash-map :frage/id gen/nat :frage/frage-text gen/string-alphanumeric :frage/typ (gen/elements [:attribut :free-text :multiple-choice :single-choice]) :frage/punkte gen/nat))

(def frage-gen (gen/list-distinct-by #(get % :frage/id) frage-gen-prev {:min-elements 10}))


(defn check-if-right-frage-is-found
  [fragen]
  (let [frage (rand-nth fragen)
        {id :frage/id text :frage/frage-text punkte :frage/punkte typ :frage/typ} frage
        pulled-frage (db/frage-by-id id)
        {pulled-text :frage/frage-text pulled-punkte :frage/punkte pulled-typ :frage/typ} pulled-frage]
    (and (= text pulled-text)
         (= punkte pulled-punkte)
         (= typ pulled-typ))))


(defspec test-frage-by-id 10
  (prop/for-all
    [fragen frage-gen]
    (let [f (vec fragen)]
      (db/load-dummy-data f)
      (check-if-right-frage-is-found f))))