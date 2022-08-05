(ns db
  (:require
    [datahike.api :as d]
    [db.dummy-data :refer [dummy-data]]
    [db.schema :refer [schema]]))


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


(defn load-dummy-data
  [data]
  (d/transact conn data))


(do
  (load-dummy-data dummy-data)
  nil)


;; Für Tests

(defn restart
  []
  (d/transact conn {:tx-data [[:db.history.purge/before (java.util.Date.)]]})
  ;; (d/delete-database cfg)
  ;; (create-conn)
  )


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


(defn antworten-von-test
  [user-id test-id]
  (mapv first
        (d/q '[:find (pull ?a [:antwort/punkte
                               {:antwort/frage [:frage/id :frage/typ]}])
               :in $ ?u ?t
               :where
               [?a :antwort/user ?u]
               [?a :antwort/frage ?f]
               [?t :test/fragen ?f]]
             @conn [:user/id user-id] [:test/id test-id])))


(defn test-by-id
  [id]
  (d/pull @conn
          [:test/id {:test/fragen [:frage/id :frage/frage-text :frage/punkte :frage/typ]}]
          [:test/id id]))


(defn all-tests
  []
  (mapv first (d/q '[:find ?id
                     :where [_ :test/id ?id]]
                   @conn)))


(defn all-fragen
  []
  (mapv first (d/q '[:find (pull ?e [:frage/id])
                     :where [?e :frage/id]]
                   @db/conn)))


(defn frage-by-id
  [id]
  (d/pull @db/conn
          [:frage/id :frage/frage-text :frage/punkte :frage/typ]
          [:frage/id id]))


(defn add-antworten
  [user-id frage-id antwort]
  (d/transact conn
              [{:db/id -1
                :antwort/frage frage-id
                :antwort/user user-id
                :antwort/antwort-text antwort}]))


(defn all-antwort
  []
  (d/q '[:find (pull ?e [:antwort/id :antwort/user :antwort/frage :antwort/antwort-text])
         :where [?e :antwort/id]]
       @db/conn))


(comment 
  (ffirst (d/q '[:find (count ?e)
                 :where 
                 [?e :frage/id]] @conn)))


(comment 
  (d/pull @conn [:test/fragen] [:test/id 1])
  (d/pull @conn [:test/id {:test/fragen [:frage/frage-text]}] [:test/id 1])
  (d/pull @conn [:frage/frage-text] [:frage/id 1])
  )
