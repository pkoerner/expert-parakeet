(ns db-test
  {:clj-kondo/config '{:linters {:unresolved-symbol {:exclude (test-frage-by-id test-kurs-by-user-id)}}}}
  (:require
    [clojure.test.check.clojure-test :refer [defspec]]
    [clojure.test.check.generators :as gen]
    [clojure.test.check.properties :as prop]
    [db :as db]))


(def frage-gen-prev (gen/hash-map :frage/id gen/nat :frage/frage-text gen/string-alphanumeric :frage/typ (gen/elements [:attribut :free-text :multiple-choice :single-choice]) :frage/punkte gen/nat))

(def frage-gen (gen/list-distinct-by #(get % :frage/id) frage-gen-prev {:min-elements 10}))

(def user-gen-prev (gen/hash-map :user/id gen/nat :user/kurse (gen/elements ['()])))

(def user-gen (gen/list-distinct-by #(get % :user/id) user-gen-prev {:min-elements 10}))

(def kurs-gen-prev (gen/hash-map :kurs/id gen/nat :kurs/fach gen/nat :kurs/jahr (gen/large-integer* {:min 2000 :max 2050}) :kurs/semester (gen/elements ["SoSe" "WiSe"]) :kurs/tests (gen/elements ['()])))

(def kurs-gen (gen/list-distinct-by #(get % :kurs/id) kurs-gen-prev {:min-elements 10}))


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


(defn put-one-kurs-id-into-users
  [users kurse]
  (mapv
    #(assoc % :user/kurse (conj [] [:kurs/id (:kurs/id (rand-nth kurse))]))
    users))


(defn check-if-right-kurs-for-user-id
  [user kurse]
  (let [{id :user/id kurs-user :user/kurse} user
        kurs-id (second (first kurs-user))
        {fach :kurs/fach jahr :kurs/jahr semester :kurs/semester tests :kurs/tests} (first (vec (filter #(= kurs-id (:kurs/id %)) kurse)))
        pulled-kurs (db/kurs-by-user-id id)
        {pulled-fach :kurs/fach pulled-jahr :kurs/jahr pulled-semester :kurs/semester pulled-tests :kurs/tests} pulled-kurs]
    (and (= fach pulled-fach)
         (= jahr pulled-jahr)
         (= semester pulled-semester)
         (= tests pulled-tests))))


(defspec test-kurs-by-user-id 10
  (prop/for-all
    [users user-gen
     kurse kurs-gen]
    (let [u-pre (vec users)
          k (vec kurse)
          u (put-one-kurs-id-into-users u-pre k)
          chosen-u (rand-nth (vec u))]
      (db/load-dummy-data k)
      (db/load-dummy-data u)
      (check-if-right-kurs-for-user-id chosen-u k))))
