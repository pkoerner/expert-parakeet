(ns db-test
  {:clj-kondo/config '{:linters {:unresolved-symbol
                                 {:exclude (test-frage-by-id test-kurs-by-user-id test-tests-by-kurs-id test-antworten-by-frage-user-id test-fach-by-kurs-id)}}}}
  (:require
    [clojure.test :as t]
    [clojure.test.check.clojure-test :refer [defspec]]
    [clojure.test.check.generators :as gen]
    [clojure.test.check.properties :as prop]
    [db :as db]))


(def frage-gen-prev (gen/hash-map :frage/id gen/nat :frage/frage-text gen/string-alphanumeric :frage/typ (gen/elements [:attribut :free-text :multiple-choice :single-choice]) :frage/punkte gen/nat))

(def frage-gen (gen/list-distinct-by #(get % :frage/id) frage-gen-prev {:min-elements 10 :max-tries 50}))

(def test-gen-prev (gen/hash-map :test/id gen/nat :test/name (gen/not-empty gen/string-alphanumeric) :test/fragen (gen/elements ['()])))

(def test-gen (gen/list-distinct-by #(get % :test/id) test-gen-prev {:min-elements 10 :max-tries 50}))

(def user-gen-prev (gen/hash-map :user/id gen/nat :user/kurse (gen/elements ['()])))

(def user-gen (gen/list-distinct-by #(get % :user/id) user-gen-prev {:min-elements 10 :max-tries 50}))

(def antwort-gen-prev (gen/hash-map :antwort/id gen/nat :antwort/user (gen/elements [nil]) :antwort/frage (gen/elements [nil]) :antwort/antwort-text (gen/not-empty gen/string-alphanumeric) :antwort/punkte gen/nat))

(def antwort-gen (gen/list-distinct-by #(get % :antwort/id) antwort-gen-prev {:min-elements 10 :max-tries 50}))

(def fach-gen-prev (gen/hash-map :fach/id gen/nat :fach/fachtitel (gen/not-empty gen/string-alphanumeric) :fach/tests (gen/elements ['()])))

(def fach-gen (gen/list-distinct-by #(get % :fach/id) fach-gen-prev {:min-elements 10 :max-tries 50}))

(def kurs-gen-prev (gen/hash-map :kurs/id gen/nat :kurs/fach (gen/elements [nil]) :kurs/jahr (gen/large-integer* {:min 2000 :max 2050}) :kurs/semester (gen/elements ["SoSe" "WiSe"]) :kurs/tests (gen/elements ['()])))

(def kurs-gen (gen/list-distinct-by #(get % :kurs/id) kurs-gen-prev {:min-elements 10 :max-tries 50}))


(defn check-if-right-frage-is-found
  [fragen]
  (let [frage (rand-nth fragen)
        {id :frage/id text :frage/frage-text punkte :frage/punkte typ :frage/typ} frage
        pulled-frage (db/frage-by-id id)
        {pulled-text :frage/frage-text pulled-punkte :frage/punkte pulled-typ :frage/typ} pulled-frage]
    (and (= text pulled-text)
         (= punkte pulled-punkte)
         (= typ pulled-typ))))


(defspec test-frage-by-id 2
  (prop/for-all
    [fragen frage-gen]
    (let [f (vec fragen)]
      (db/restart)
      (db/load-dummy-data f)
      (check-if-right-frage-is-found f))))


(defn put-fach-into-kurse
  [fach kurse]
  (mapv
    #(assoc % :kurs/fach [:fach/id (:fach/id fach)])
    kurse))


(defn put-faecher-into-kurse
  [faecher kurse]
  (mapv
    #(assoc % :kurs/fach [:fach/id (:fach/id (rand-nth faecher))])
    kurse))


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
    (and (= (second fach) pulled-fach)
         (= jahr pulled-jahr)
         (= semester pulled-semester))))


(t/deftest t
  (db/restart)
  (db/load-dummy-data [{:fach/id 0
                        :fach/fachtitel "Fach 1"
                        :fach/tests []}])
  (db/load-dummy-data [{:kurs/id 1
                        :kurs/fach [:fach/id 0]
                        :kurs/jahr 2000
                        :kurs/semester "WiSe"
                        :kurs/tests []}])
  (db/load-dummy-data [{:user/id 2
                        :user/kurse [[:kurs/id 1]]}])
  (check-if-right-kurs-for-user-id {:user/id 2 :user/kurse [[:kurs/id 1]]}
                                   [{:kurs/id 1 :kurs/fach [:fach/id 0] :kurs/jahr 2000 :kurs/semester "WiSe" :kurs/tests [[:test/id 1]]}]))


;; Does not work for more than one run, because db keeps old entries and ids stop being unique
(defspec test-kurs-by-user-id 1
  (prop/for-all
    [faecher fach-gen
     users user-gen
     kurse kurs-gen]
    (db/restart)
    (let [f (rand-nth (vec faecher))
          u-pre (vec users)
          k (put-fach-into-kurse f (vec kurse))
          u (put-one-kurs-id-into-users u-pre k)
          chosen-u (rand-nth (vec u))]
      (db/load-dummy-data faecher)
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
        test-namen-sorted (sort (map #(:test/name %) tests-with-correct-ids))
        pulled-tests (db/tests-by-kurs-id id)
        pulled-test-namen-sorted (sort (map #(:test/name %) pulled-tests))]
    (= test-namen-sorted pulled-test-namen-sorted)))


(t/deftest test-test-for-kurs-id
  (db/restart)
  (db/load-dummy-data [{:fach/id 0
                        :fach/fachtitel "Fach 1"
                        :fach/tests []}])
  (db/load-dummy-data [{:test/id 2
                        :test/name "Test 2"
                        :test/fragen []}
                       {:test/id 3
                        :test/name "Test 3"
                        :test/fragen []}])
  (db/load-dummy-data [{:kurs/id 1
                        :kurs/fach [:fach/id 0]
                        :kurs/jahr 2000
                        :kurs/semester "WiSe"
                        :kurs/tests [[:test/id 2] [:test/id 3]]}])
  (check-if-right-tests-for-kurs-id {:kurs/id 1 :kurs/fach [:fach/id 0] :kurs/jahr 2000 :kurs/semester "WiSe" :kurs/tests [[:test/id 2] [:test/id 3]]}
                                    [{:test/id 2 :test/name "Test 2" :test/fragen []}
                                     {:test/id 3 :test/name "Test 3" :test/fragen []}]))


;; Does not work for more than one run, because db keeps old entries and ids stop being unique
(defspec test-tests-by-kurs-id 1
  (prop/for-all
    [faecher fach-gen
     kurse kurs-gen
     tests test-gen]
    (db/restart)
    (let [f (rand-nth (vec faecher))
          k-pre (put-fach-into-kurse f (vec kurse))
          t (vec tests)
          k (put-tests-into-kurse k-pre t)
          chosen-k (rand-nth (vec k))]
      (db/load-dummy-data faecher)
      (db/load-dummy-data t)
      (db/load-dummy-data k)
      (check-if-right-tests-for-kurs-id chosen-k t))))


(defn put-one-frage-into-antwort
  [fragen antworten]
  (mapv
    #(assoc % :antwort/frage [:frage/id (:frage/id (rand-nth fragen))])
    antworten))


(defn put-one-user-into-antwort
  [users antworten]
  (mapv
    #(assoc % :antwort/user [:user/id (:user/id (rand-nth users))])
    antworten))


(defn check-if-right-antworten-for-frage-user-id
  [frage user antworten]
  (let [{f-id :frage/id} frage
        {u-id :user/id} user
        correct-antworten (vec (filter #(= u-id (second (:antwort/user %))) (filter #(= f-id (second (:antwort/frage %))) antworten)))
        correct-antworten-properties (mapv #(into [] (select-keys % [:antwort/id :antwort/antwort-text :antwort/punkte])) correct-antworten)
        pulled-antworten (db/antworten-by-frage-user-id f-id u-id)
        pulled-antworten-properties (mapv #(into [] (select-keys % [:antwort/id :antwort/antwort-text :antwort/punkte])) pulled-antworten)]
    (= (sort correct-antworten-properties) (sort pulled-antworten-properties))))


(defspec test-antworten-by-frage-user-id 1
  (prop/for-all
    [fragen frage-gen
     users user-gen
     antworten antwort-gen]
    (db/restart)
    (let [;; Take 2 to make it more likely that an antwort exists that has the chosen combination of frage and user
          f (take 2 (vec fragen))
          u (take 2 (vec users))
          a (put-one-user-into-antwort u (put-one-frage-into-antwort f (vec antworten)))
          chosen-f (rand-nth f)
          chosen-u (rand-nth u)]
      (db/load-dummy-data f)
      (db/load-dummy-data u)
      (db/load-dummy-data a)
      (check-if-right-antworten-for-frage-user-id chosen-f chosen-u a))))


(defn check-if-right-fach-for-kurs-id
  [kurs faecher]
  (let [{id :kurs/id fach-from-kurs :kurs/fach} kurs
        fach-id (second fach-from-kurs)
        {fach-id :fach/id fachtitel :fach/fachtitel fach-tests :fach/tests} (first (vec (filter #(= fach-id (:fach/id %)) faecher)))
        pulled-fach (first (db/fach-by-kurs-id id))
        {pulled-fach-id :fach/id pulled-fachtitel :fach/fachtitel pulled-fach-tests :fach/tests} pulled-fach]
    (and (= fach-id pulled-fach-id)
         (= fachtitel pulled-fachtitel)
         (= fach-tests pulled-fach-tests))))


(defspec test-fach-by-kurs-id 1
  (prop/for-all
    [faecher fach-gen
     kurse kurs-gen]
    (db/restart)
    (let [f (vec faecher)
          k (put-faecher-into-kurse f (vec kurse))
          chosen-k (rand-nth (vec k))]
      (db/load-dummy-data faecher)
      (db/load-dummy-data k)
      (check-if-right-fach-for-kurs-id chosen-k f))))
