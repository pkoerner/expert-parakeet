(ns db
  (:require
    [clojure.spec.alpha :as s]
    [datahike.api :as d]
    [provisdom.spectomic.core :as spectomic]))


(s/def :frage/id pos-int?)
(s/def :frage/typ #{:frage.typ/text})
(s/def :frage/frage-text string?)
(s/def :frage/loesung string?)
(s/def :frage/punkte int?)


(s/def ::frage
  (s/keys :req [:frage/id :frage/typ :frage/frage-text
                :frage/loesung :frage/punkte]))


(s/explain ::frage {:frage/id 2 :frage/typ :frage.typ/text
                    :frage/frage-text "foo" :frage/loesung "bar" :frage/punkte 3})


(s/def :user/id pos-int?)

(s/def :antwort/id pos-int?)
(s/def :antwort/user :user/id)
(s/def :antwort/frage ::frage)
(s/def :antwort/antwort-text string?)


(s/def ::antwort
  (s/keys :req [:antwort/id :antwort/user
                :antwort/antwort-text :antwort/frage]))


(s/def :test/id pos-int?)
(s/def :test/fragen (s/coll-of ::frage))


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


(def schema
  (concat frage-schema antwort-schema test-schema))


;; use file db
#_#_(def cfg
    {:store {:backend :file
             :path "/tmp/expert-db"}
     :initial-tx schema})

  (if (d/database-exists? cfg)
    (println "Found existing DB at:" (get-in cfg [:store :path]))
    (d/create-database cfg))


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


(if (d/database-exists? cfg)
  (println "Found existing DB at:" (get-in cfg [:store :path]))
  (d/create-database cfg))


(def conn (d/connect cfg))

(d/transact conn dummy-data)


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


(comment 
  (ffirst (d/q '[:find (count ?e)
                 :where 
                 [?e :frage/id]] @conn)))


(comment 
  (d/pull @conn [:test/fragen] [:test/id 1])
  (d/pull @conn [:test/id {:test/fragen [:frage/frage-text]}] [:test/id 1])
  (d/pull @conn [:frage/frage-text] [:frage/id 1])
  )
