(ns db-test
  {:clj-kondo/config '{:linters {:unresolved-symbol {:exclude (test-frage-by-id test-kurs-by-user-id test-tests-by-kurs-id)}}}}
  (:require
    [clojure.test :as t]
    [clojure.test.check.clojure-test :refer [defspec]]
    [clojure.test.check.generators :as gen]
    [clojure.test.check.properties :as prop]
    [db :as db]))


(def frage-gen-prev (gen/hash-map :frage/id gen/nat :frage/frage-text gen/string-alphanumeric :frage/typ (gen/elements [:attribut :free-text :multiple-choice :single-choice]) :frage/punkte gen/nat))

(def frage-gen (gen/list-distinct-by #(get % :frage/id) frage-gen-prev {:min-elements 10}))

(def test-gen-prev (gen/hash-map :test/id gen/nat :test/name (gen/not-empty gen/string-alphanumeric) :test/fragen (gen/elements ['()])))

(def test-gen (gen/list-distinct-by #(get % :test/id) test-gen-prev {:min-elements 10}))

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
      (db/restart)
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
        {fach :kurs/fach jahr :kurs/jahr semester :kurs/semester} (first (vec (filter #(= kurs-id (:kurs/id %)) kurse)))
        pulled-kurs (first (db/kurs-by-user-id id))
        {pulled-fach :kurs/fach pulled-jahr :kurs/jahr pulled-semester :kurs/semester} pulled-kurs]
    (and (= fach pulled-fach)
         (= jahr pulled-jahr)
         (= semester pulled-semester))))


(t/deftest t
  (db/restart)
  (db/load-dummy-data [{:kurs/id 1
                        :kurs/fach 1
                        :kurs/jahr 2000
                        :kurs/semester "WiSe"
                        :kurs/tests []}])
  (db/load-dummy-data [{:user/id 2
                        :user/kurse [[:kurs/id 1]]}])
  (check-if-right-kurs-for-user-id {:user/id 2 :user/kurse [[:kurs/id 1]]}
                                   [{:kurs/id 1 :kurs/fach 1 :kurs/jahr 2000 :kurs/semester "WiSe" :kurs/tests [[:test/id 1]]}]))


;; Does not work for more than one run, because db keeps old entries and ids stop being unique
(defspec test-kurs-by-user-id 1
  (prop/for-all
    [users user-gen
     kurse kurs-gen]
    (db/restart)
    (let [u-pre (vec users)
          k (vec kurse)
          u (put-one-kurs-id-into-users u-pre k)
          chosen-u (rand-nth (vec u))]
      (db/load-dummy-data k)
      (db/load-dummy-data u)
      (check-if-right-kurs-for-user-id chosen-u k))))


(defn tests-for-kurs
  [tests]
  (let [tf (random-sample (rand) tests)]
    (mapv #(conj [:test/id] (:test/id %)) tf)))


(defn put-tests-into-kurse
  [kurse tests]
  (mapv
    #(assoc % :kurs/tests (tests-for-kurs tests))
    kurse))


(defn check-if-right-tests-for-kurs-id
  [kurs tests]
  (let [{id :kurs/id tests-kurs :kurs/tests} kurs
        test-ids (map second tests-kurs)
        tests-with-correct-ids (vec (filter #(contains? (into #{} test-ids) (:test/id %)) tests))
        test-namen-in-set (sort (map #(:test/name %) tests-with-correct-ids))
        pulled-tests (db/tests-by-kurs-id id)
        pulled-test-namen-in-set (sort (map #(:test/name %) pulled-tests))]
    (= test-namen-in-set pulled-test-namen-in-set)))


(defspec test-tests-by-kurs-id 1
  (prop/for-all
    [kurse kurs-gen
     tests test-gen]
    (db/restart)
    (let [k-pre (vec kurse)
          t (vec tests)
          k (put-tests-into-kurse k-pre t)
          chosen-k (rand-nth (vec k))]
      (db/load-dummy-data t)
      (db/load-dummy-data k)
      (check-if-right-tests-for-kurs-id chosen-k t))))
