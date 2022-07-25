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
     :antwort/antwort-text
     :antwort/punkte]))


(def test-schema
  (spectomic/datomic-schema
    [[:test/id {:db/unique :db.unique/identity
                :db/index true}]
     :test/name
     :test/fragen]))


(def user-schema
  (spectomic/datomic-schema
    [[:user/id {:db/unique :db.unique/identity
                :db/index true}]
     :user/kurse]))


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
  (concat frage-schema antwort-schema test-schema user-schema fach-schema kurs-schema))


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
    :test/name "Test 1"
    :test/fragen [[:frage/id 1] [:frage/id 3]]}
   {:antwort/id 1
    :antwort/frage [:frage/id 1]
    :antwort/user 2
    :antwort/antwort-text "Antwort"
    :antwort/punkte 4}
   {:fach/id 0
    :fach/fachtitel "Fach 1"
    :fach/tests []}
   {:kurs/id 1
    :kurs/fach [:fach/id 0]
    :kurs/jahr 2000
    :kurs/semester "WiSe"
    :kurs/tests [[:test/id 1]]}])


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


;; Für Tests
(defn restart
  []
  (d/transact conn {:tx-data [[:db.history.purge/before (java.util.Date.)]]})
  ;; (d/delete-database cfg)
  ;; (create-conn)
  )


(load-dummy-data dummy-data)


(defn test-by-id
  [id]
  (d/pull @conn
          [:test/id {:test/fragen [:frage/frage-text :frage/punkte :frage/typ]}]
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
          [:frage/frage-text :frage/punkte :frage/typ]
          [:frage/id id]))


(defn add-antwort
  [_id _antwort]
  ;; Todo
  nil)


(defn add-antwort-three-args
  [frage-id user-id antworttext]
  (d/transact conn
              [{:antwort/id -1
                :antwort/frage frage-id
                :antwort/user user-id
                :antwort/antwort-text antworttext}]))


(defn all-antwort
  []
  (str (d/q '[:find (pull ?e [:antwort/id :antwort/user :antwort/frage :antwort/antwort-text])
              :where [?e :antwort/id]]
            @db/conn)))


(defn kurs-by-user-id-query
  [id]
  (d/q '[:find ?f ?j ?s
         :in $ ?id
         :where
         [?u :user/id ?id]
         [?u :user/kurse ?k]
         [?k :kurs/fach ?fi]
         [?fi :fach/id ?f]
         [?k :kurs/jahr ?j]
         [?k :kurs/semester ?s]]
       @conn id))


(defn kurs-by-user-id
  [id]
  (map
    #(zipmap [:kurs/fach :kurs/jahr :kurs/semester] %)
    (kurs-by-user-id-query id)))


(defn test-by-kurs-id-query
  [id]
  (d/q '[:find ?i ?n
         :in $ ?id
         :where
         [?k :kurs/id ?id]
         [?k :kurs/tests ?t]
         [?t :test/id ?i]
         [?t :test/name ?n]]
       @conn id))


(defn tests-by-kurs-id
  [id]
  (map
    #(zipmap [:test/id :test/name] %)
    (test-by-kurs-id-query id)))


(defn antworten-by-frage-user-id
  [_frage-id _user-id]
  nil)


(comment 
  (ffirst (d/q '[:find (count ?e)
                 :where 
                 [?e :frage/id]] @conn)))


(comment 
  (d/pull @conn [:test/fragen] [:test/id 1])
  (d/pull @conn [:test/id {:test/fragen [:frage/frage-text]}] [:test/id 1])
  (d/pull @conn [:frage/frage-text] [:frage/id 1])
  )
