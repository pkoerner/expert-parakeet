(ns db.schema
  (:require
    [domain.spec]
    [provisdom.spectomic.core :as spectomic]))


(def frage-schema
  (spectomic/datomic-schema
    [[:frage/id {:db/unique :db.unique/identity
                 :db/index true}]
     :question/type ; optimize using :db.type/ref to enum type with :db/ident (https://docs.datomic.com/on-prem/best-practices.html#idents-for-enumerated-types)
     :question/question-statement
     :question/points
     :question/evaluation-criteria
     :question/possible-solutions
     :question/single-choice-solution
     :question/multiple-choice-solution]))


;; manche Felder bleiben leer (abhaengig vom Fragentyp)


(def antwort-schema
  (spectomic/datomic-schema
    [[:antwort/id {:db/unique :db.unique/identity
                   :db/index true}]
     :antwort/user
     :antwort/frage
     :antwort/antwort
     :antwort/punkte]))


(def korrektur-schema
  (spectomic/datomic-schema
    [:korrektur/korrektor
     :korrektur/antwort
     :korrektur/korrektur-text]))


(def test-schema
  (spectomic/datomic-schema
    [[:test/id {:db/unique :db.unique/identity
                :db/index true}]
     :test/name
     :test/start
     :test/ende
     :test/fragen
     :test/bestehensgrenze]))


(def user-schema
  (spectomic/datomic-schema
    [[:user/id {:db/unique :db.unique/identity
                :db/index true}]
     :user/kurse]))


(def fach-schema
  (spectomic/datomic-schema
    [[:fach/id {:db/unique :db.unique/identity
                :db/index true}]
     :fach/fachtitel]))


(def kurs-schema
  (spectomic/datomic-schema
    [[:kurs/id {:db/unique :db.unique/identity
                :db/index true}]
     :kurs/fach
     :kurs/jahr
     :kurs/semester
     :kurs/tests]))


(def schema
  (concat frage-schema antwort-schema korrektur-schema test-schema user-schema fach-schema kurs-schema))
