(ns db
  (:require
    [datahike.api :as d]
    [db.dummy-data :as dummy-data]
    [db.schema :refer [schema]]
    [nano-id.core :refer [nano-id]]))


(def id-len 10)


;; use mem db

(def cfg
  {:store {:backend :mem
           :id "expert-db"}
   :initial-tx schema})


;; use file db


#_(def cfg
      {:store {:backend :file
               :path "/tmp/expert-db"}
       :initial-tx schema})


(defn create-conn
  []
  (if (d/database-exists? cfg)
    (println "Found existing DB at:" (get-in cfg [:store :path]))
    (d/create-database cfg))

  (d/connect cfg))


(def conn (create-conn))


(do (d/transact conn dummy-data/dummy-data) nil)


;; provide the db attr of the id you want to check for collisions
(defn generate-id
  [attr]
  (loop [id (nano-id id-len)]
    (if (seq (d/q '[:find ?e
                    :in $ ?attr ?id
                    :where [?e ?attr ?id]]
                  @conn attr id))
      (recur (nano-id id-len))
      id)))


(defn kurse-von-studierendem
  [user-id]
  (mapv first
        (d/q '[:find (pull ?k [:kurs/id
                               {:kurs/fach [:fach/fachtitel]}
                               :kurs/jahr
                               :kurs/semester
                               {:kurs/tests [:test/id :test/name
                                             {:test/fragen [:frage/id
                                                            :frage/punkte]}]}])
               :in $ ?u
               :where
               [?u :user/kurse ?k]]
             @conn [:user/id user-id])))


(defn bewertete-antworten-von-test
  [user-id test-id]
  (mapv first
        (d/q '[:find (pull ?a [:antwort/punkte
                               {:antwort/frage [:frage/id :frage/typ]}])
               :in $ ?u ?t
               :where
               [?a :antwort/user ?u]
               [?a :antwort/frage ?f]
               [?t :test/fragen ?f]
               [?a :antwort/punkte]]
             @conn [:user/id user-id] [:test/id test-id])))


(defn fragen-fuer-user
  [korrektorin-id]
  (mapv first
        (d/q '[:find (pull ?kurs [:kurs/semester
                                  :kurs/jahr
                                  {:kurs/fach [:fach/fachtitel]}
                                  {:kurs/tests [:test/id :test/name
                                                {:test/fragen [:frage/id :frage/typ]}]}])
               :in $ ?korr
               :where
               [?korr :user/kurse ?kurs]]
             @conn [:user/id korrektorin-id])))


(defn antworten-von-frage
  [frage-id]
  (map
    #(zipmap [:antwort/id :user/id :antwort/timestamp] %)
    (d/q '[:find ?antwort-id ?user-id ?timestamp
           :in $ ?frage-id
           :where
           [?frage :frage/id ?frage-id]
           [?antwort :antwort/frage ?frage]
           [?antwort :antwort/id ?antwort-id ?tx]
           [?tx :db/txInstant ?timestamp]
           [?antwort :antwort/user ?user]
           [?user :user/id ?user-id]]
         @conn frage-id)))


(defn alle-antworten-mit-korrekturen
  []
  (mapv first
        (d/q '[:find (pull ?antwort [:antwort/id])
               :in $
               :where
               [?korrektur :korrektur/antwort ?antwort]]
             @conn)))


(defn korrekturen-von-korrektorin-korrigiert
  [korrektorin-id]
  (mapv first
        (d/q '[:find (pull ?k [{:korrektur/antwort [:antwort/id]}])
               :in $ ?korr
               :where
               [?k :korrektur/korrektor ?korr]]
             @conn [:user/id korrektorin-id])))


(defn test-by-id
  [id]
  (d/pull @conn
          [:test/id :test/name :test/start :test/ende :test/bestehensgrenze
           {:test/fragen [:frage/id :frage/frage-text :frage/punkte :frage/typ :frage/choices]}]
          [:test/id id]))


(defn all-tests
  []
  (mapv first (d/q '[:find ?id
                     :where [_ :test/id ?id]]
                   @conn)))


(defn all-faecher
  []
  (mapv first (d/q '[:find (pull ?e [:fach/id :fach/fachtitel])
                     :where [?e :fach/id]]
                   @db/conn)))


(defn kurse-for-fach
  [fach-id]
  (mapv first (d/q '[:find (pull ?e [:kurs/id :kurs/semester :kurs/jahr
                                     {:kurs/tests [:test/id
                                                   :test/name
                                                   {:test/fragen [:frage/id :frage/frage-text
                                                                  :frage/punkte :frage/typ :frage/choices
                                                                  :frage/loesungskriterien
                                                                  :frage/single-choice-loesung
                                                                  :frage/multiple-choice-loesung]}]}])
                     :in $ ?fach-id
                     :where
                     [?f :fach/id ?fach-id]
                     [?e :kurs/fach ?f]
                     [?e :kurs/id]]
                   @db/conn fach-id)))


(defn all-fragen
  []
  (mapv first (d/q '[:find (pull ?e [:frage/id])
                     :where [?e :frage/id]]
                   @db/conn)))


(defn add-fach
  [fach-name]
  (let [id (generate-id :fach/id)
        tx-result (d/transact conn
                              [{:db/id -1
                                :fach/id id
                                :fach/fachtitel fach-name}])
        db-after (:db-after tx-result)]
    (d/pull db-after [:fach/id :fach/fachtitel]
            [:fach/id id])))


(defn all-kurse
  []
  (mapv first (d/q '[:find (pull ?e [:kurs/id {:kurs/fach [:fach/id :fach/fachtitel]} :kurs/jahr
                                     :kurs/semester :kurs/jahr {:kurs/tests [:test/id]}])
                     :where [?e :kurs/id]]
                   @db/conn)))


(defn kurs-by-id
  [id]
  (d/pull @conn
          [:kurs/id {:kurs/fach [:fach/id :fach/fachtitel]}
           :kurs/jahr :kurs/semester
           {:kurs/tests [:test/id :test/name]}]
          [:kurs/id id]))


(defn add-kurs
  [fach-id jahr semester]
  (let [id (generate-id :kurs/id)
        tx-result (d/transact conn
                              [{:db/id     -1
                                :kurs/id   id
                                :kurs/fach [:fach/id fach-id]
                                :kurs/jahr jahr
                                :kurs/semester semester
                                :kurs/tests []}])
        db-after (:db-after tx-result)]
    (d/pull db-after [:kurs/id :kurs/fach :kurs/jahr :kurs/semester :kurs/tests]
            [:kurs/id id])))


(defn frage-by-id
  [id]
  (d/pull @db/conn
          [:frage/id :frage/frage-text :frage/punkte :frage/typ]
          [:frage/id id]))


(defn add-frage
  [frage]
  (let [id (generate-id :frage/id)
        typ (:frage/typ frage)
        trans-map (apply assoc {:db/id        -1
                                :frage/id     id
                                :frage/typ    typ
                                :frage/punkte (:frage/punkte frage)
                                :frage/frage-text (:frage/frage-text frage)}
                         (cond (= typ :frage.typ/text)
                               [:frage/loesungskriterien (:frage/loesungskriterien frage)]
                               (= typ :frage.typ/single-choice)
                               [:frage/choices (:frage/choices frage)
                                :frage/single-choice-loesung (:frage/single-choice-loesung frage)]
                               (= typ :frage.typ/multiple-choice)
                               [:frage/choices (:frage/choices frage)
                                :frage/multiple-choice-loesung (:frage/multiple-choice-loesung frage)]))
        tx-result (d/transact conn [trans-map])
        db-after (:db-after tx-result)]
    (d/pull db-after  [:frage/id :frage/frage-text :frage/punkte :frage/typ :frage/choices
                       :frage/loesungskriterien :frage/single-choice-loesung
                       :frage/multiple-choice-loesung]
            [:frage/id id])))


(defn add-test
  [test-name kurs-id bestehensgrenze fragen start ende]
  (let [id (generate-id :test/id)
        fragen-ids (doall (map (fn [frage]
                                 (if (:frage/id frage)
                                   (:frage/id frage)
                                   (:frage/id (add-frage frage)))) ; frage war noch nicht in db
                               fragen))
        tx-result-test (d/transact conn
                                   [{:db/id                 -1
                                     :test/id               id
                                     :test/name             test-name
                                     :test/start            start
                                     :test/ende             ende
                                     :test/bestehensgrenze bestehensgrenze
                                     :test/fragen (mapv (fn [f-id] [:frage/id f-id]) fragen-ids)}])
        kurs (kurs-by-id kurs-id)
        _tx-result-kurs (d/transact conn [{:db/id         -1
                                           :kurs/id       (:kurs/id kurs)
                                           :kurs/semester (:kurs/semester kurs)
                                           :kurs/jahr     (:kurs/jahr kurs)
                                           :kurs/tests    (conj (:kurs/tests kurs) [:test/id id])}])
        db-after (:db-after tx-result-test)]
    (d/pull db-after [:test/id :test/name] [:test/id id])))


(defn user-add-antwort
  [user-id frage-id antwort]
  (let [id (generate-id :antwort/id)
        tx-result (d/transact conn
                              [{:db/id -1
                                :antwort/id id
                                :antwort/frage [:frage/id frage-id]
                                :antwort/user [:user/id user-id]
                                :antwort/antwort antwort}])
        db-after (:db-after tx-result)]
    (d/pull db-after [:antwort/id {:antwort/frage [:frage/id]}] [:antwort/id id])))


(defn user-add-antworten
  [user-id antworten]
  (mapv
    (fn [[frage-id antwort]]
      (db/user-add-antwort user-id frage-id antwort))
    antworten))


(defn all-antwort
  []
  (d/q '[:find (pull ?e [:antwort/id :antwort/user :antwort/frage :antwort/antwort])
         :where [?e :antwort/id]]
       @db/conn))


(defn antworten-fuer-korrektur
  [antwort-id]
  (mapv first
        (d/q '[:find (pull ?antwort [:antwort/id
                                     :antwort/punkte
                                     :antwort/antwort
                                     {:antwort/frage [:frage/frage-text :frage/punkte :frage/loesungskriterien]}])
               :in $ ?antwort
               :where
               [?antwort :antwort/frage ?frage]
               [?frage :frage/typ ?typ]
               [(= ?typ :frage.typ/text)]]
             @conn [:antwort/id antwort-id])))


(defn korrekturen-von-antwort
  [antwort-id]
  (map
    #(zipmap [:korrektur/korrektur-text :korrektur/timestamp] %)
    (d/q '[:find ?korr-text ?timestamp
           :in $ ?antwort-id
           :where
           [?antwort :antwort/id ?antwort-id]
           [?korrektur :korrektur/antwort ?antwort ?tx]
           [?tx :db/txInstant ?timestamp]
           [?korrektur :korrektur/korrektur-text ?korr-text]]
         @conn antwort-id)))


(defn korrektor-add-korrektur
  [ant-id {text :korrektur/korrektur-text punkte :korrektur/punkte korr-id :korrektor/id}]
  (let [tx-result (d/transact conn
                              [{:db/id -1
                                :korrektur/korrektur-text text
                                :korrektur/korrektor [:user/id korr-id]
                                :korrektur/antwort [:antwort/id ant-id]}
                               {:antwort/id ant-id
                                :antwort/punkte punkte}])
        db-after (:db-after tx-result)
        ids (:tempids tx-result)]
    (d/pull db-after [:korrektur/korrektur-text {:korrektur/antwort [:antwort/punkte]}] (get ids -1))))


(comment 
  (set! *print-length* 5)

  (ffirst (d/q '[:find (count ?e)
                 :where 
                 [?e :frage/id]] @conn)))


(comment 
  (d/pull @conn [:test/fragen] [:test/id 1])
  (d/pull @conn [:test/id {:test/fragen [:frage/frage-text]}] [:test/id 1])
  (d/pull @conn [:frage/frage-text] [:frage/id 1])
  )
