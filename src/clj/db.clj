(ns db
  (:require
    [clojure.spec.alpha :as s]
    [datahike.api :as d]
    [provisdom.spectomic.core :as spectomic]))


(s/def :frage/id pos-int?)
(s/def :frage/typ keyword?)
(s/def :frage/frage-text string?)
(s/def :frage/loesung string?)
(s/def :frage/punkte int?)


(s/def ::frage
  (s/keys :req [:frage/id :frage/typ :frage/frage-text
                :frage/loesung :frage/punkte]))


(s/def :antwort/id pos-int?)
(s/def :antwort/user keyword?)
(s/def :antwort/frage ::frage)
(s/def :antwort/antwort-text string?)


(s/def ::antwort
  (s/keys :req [:antwort/id :antwort/user
                :antwort/antwort-text :antwort/frage]))


(s/def :test/id pos-int?)
(s/def :test/fragen (s/coll-of ::frage))


(def frage-schema
  (spectomic/datomic-schema
    [:frage/id
     :frage/typ
     :frage/frage-text
     :frage/loesung
     :frage/punkte]))


(def antwort-schema
  (spectomic/datomic-schema
    [:antwort/id
     :antwort/user
     :antwort/frage
     :antwort/antwort-text]))


(def test-schema
  (spectomic/datomic-schema
    [:test/id
     :test/fragen]))


(def schema
  (concat frage-schema antwort-schema test-schema))


(s/exercise ::antwort)


(def dummy-data
  [{:frage/id  "272453", :github "123459"}
   {:mat-nr  "000000", :github "312592"}
   {:mat-nr  "101010", :github "193991"}])


(def cfg
  {:store {:backend :file
           :path "/tmp/expert-db"}
   :initial-tx (concat schema)})


(if (d/database-exists? cfg)
  (println "Found existing DB at:" (get-in cfg [:store :path]))
  (d/create-database cfg))


(def conn (d/connect cfg))


(defn get-by-mat-rn
  [mat-nr]
  (d/q '[:find ?mat-nr ?github
         :in $ ?mat-nr
         :where
         [?e :mat-nr ?mat-nr]
         [?e :github ?github]]
       @conn mat-nr))
