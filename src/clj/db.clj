(ns db
  (:require
    [datahike.api :as d]
    [db.dummy-data :as dummy-data]
    [db.schema :refer [schema]]
    [nano-id.core :refer [nano-id]]))


(def id-len 10)

(defn now [] (java.util.Date.))

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


(defn versuche-von-test
  [user-id test-id]
  (d/q '[:find (pull ?v [:versuch/id
                         {:versuch/test [:test/id]}
                         :versuch/abgabe-zeit
                         {:versuch/antworten [:antwort/frage-id :antwort/antwort :antwort/punkte]}])
         :in $ ?u ?t
         :where 
         [?v :versuch/user ?u]
         [?v :versuch/test ?t]] 
       @conn [:user/id user-id] [:test/id test-id]))


(defn add-versuch
  [user-id test-id antworten]
  (let [id (generate-id :versuch/id)
        tx-result (d/transact conn
                              [{:versuch/id id
                                :versuch/test [:test/id test-id]
                                :versuch/abgabe-zeit (now)
                                :versuch/user [:user/id user-id]
                                :versuch/antworten antworten}])
        db-after (:db-after tx-result)]
    (d/pull db-after [:versuch/id 
                      {:versuch/test [:test/id]}
                      :versuch/abgabe-zeit
                      {:versuch/antworten [:antwort/frage-id
                                           :antwort/antwort]}]
            [:versuch/id id])))


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
          [:test/id {:test/fragen [:frage/id :frage/frage-text :frage/punkte :frage/typ :frage/choices]}]
          [:test/id id]))


(defn all-tests
  []
  (mapv first (d/q '[:find ?id
                     :where [_ :test/id ?id]]
                   @conn)))

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
