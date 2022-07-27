(ns db
  (:require
    [datahike.api :as d]
    [domain]
    [provisdom.spectomic.core :as spectomic]))


(def frage-schema
  (spectomic/datomic-schema
    [[:frage/id {:db/unique :db.unique/identity
                 :db/index true}]
     :frage/typ ; optimize using :db.type/ref to enum type with :db/ident (https://docs.datomic.com/on-prem/best-practices.html#idents-for-enumerated-types)
     :frage/frage-text
     :frage/loesung
     :frage/punkte]))


(def antwort-schema
  (spectomic/datomic-schema
    [[:antwort/id {:db/unique :db.unique/identity
                   :db/index true}]
     :antwort/user
     :antwort/frage
     :antwort/antwort-text]))


(def test-schema
  (spectomic/datomic-schema
    [[:test/id {:db/unique :db.unique/identity
                :db/index true}]
     :test/fragen]))


(def fach-schema
  (spectomic/datomic-schema
    [[:fach/id {:db/unique :db.unique/identity
                :db/index true}]
     :fach/fachtitel
     :fach/tests]))


(def kurs-schema
  (spectomic/datomic-schema
    [[:kurs/id {:db/unique :db.unique/identity
                :db/index true}]
     :kurs/fach
     :kurs/jahr
     :kurs/semester
     :kurs/tests]))


(def schema
  (concat frage-schema antwort-schema test-schema fach-schema kurs-schema))


(def dummy-data
  [{:frage/id 1
    :frage/frage-text "Wie geht es dir heute?"
    :frage/typ :frage.typ/text
    :frage/punkte 7}
   {:frage/id 3
    :frage/frage-text "Fühlen sie sich prüfungsbereit?"
    :frage/typ :frage.typ/bool
    :frage/punkte 0}
   {:test/id 1
    :test/fragen [[:frage/id 1] [:frage/id 3]]}])


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
  []
  (d/transact conn dummy-data))


(load-dummy-data)


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
  [_id antworten]
  ;; Todo
  antworten)


(comment 
  (ffirst (d/q '[:find (count ?e)
                 :where 
                 [?e :frage/id]] @conn)))


(comment 
  (d/pull @conn [:test/fragen] [:test/id 1])
  (d/pull @conn [:test/id {:test/fragen [:frage/frage-text]}] [:test/id 1])
  (d/pull @conn [:frage/frage-text] [:frage/id 1])
  )
