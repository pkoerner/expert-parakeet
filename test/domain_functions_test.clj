(ns domain-functions-test
  {:clj-kondo/config '{:linters {:unresolved-symbol {:exclude (test-fach-for-studierenden-uebersicht)}}}}
  (:require
    [clojure.test.check.clojure-test :refer [defspec]]
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
