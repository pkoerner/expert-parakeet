(ns domain.spec
  (:require
   [clojure.spec.alpha :as s]))


(s/def :question/id string?)
(s/def :question/type #{:question.type/free-text :question.type/single-choice :question.type/multiple-choice})
(s/def :question/question-statement string?)
(s/def :question/points int?)


(s/def :question/evaluation-criteria string?)


(s/def :question/question
  (s/and
   (s/keys :req [:question/id :question/type :question/question-statement :question/points
                 :question/evaluation-criteria])
   #(= (:question/type %) :question.type/free-text)))


(s/def :question/possible-solutions (s/coll-of string?))

(s/def :question/single-choice-solution string?)


(s/def :question/single-choice-question
  (s/and
   (s/keys :req [:question/id :question/type :question/question-statement :question/points
                 :question/possible-solutions :question/single-choice-solution])
   #(= (:question/type %) :question.type/single-choice)))


(s/def :question/multiple-choice-solution (s/coll-of string?))


(s/def :question/multiple-choice-question
  (s/and
   (s/keys :req [:question/id :question/type :question/question-statement :question/points
                 :question/possible-solutions :question/multiple-choice-solution])
   #(= (:question/type %) :question.type/multiple-choice)))


(s/def ::question
  (s/or :free-text :question/question ; text -> free-text
        :single-choice :question/single-choice-question
        :multiple-choice :question/multiple-choice-question))


(s/def :user/id string?)
(s/def :user/kurse (s/coll-of ::kurs))


(s/def ::user
  (s/keys :req [:user/id :user/kurse]))


(s/def :antwort/id string?)
(s/def :antwort/user ::user)
(s/def :antwort/frage ::question)


(s/def :antwort/antwort
  (s/and (s/coll-of string?)))


(s/def :antwort/punkte pos-int?)


(s/def ::antwort
  (s/keys :req [:antwort/user :antwort/antwort :antwort/frage]))


(s/def :korrektur/korrektor ::user)
(s/def :korrektur/antwort ::antwort)
(s/def :korrektur/korrektur-text string?)


(s/def ::korrektur
  (s/keys :req [:korrektur/korrektor :korrektur/antwort :korrektur/korrektur-text]))


(s/def :test/id string?)
(s/def :test/name string?)
(s/def :test/fragen (s/coll-of ::question))


(s/def ::test
  (s/keys :req [:test/id :test/name
                :test/start :test/ende
                :test/fragen :test/bestehensgrenze]))


(s/def :fach/id string?)
(s/def :fach/fachtitel string?)


(s/def ::fach
  (s/keys :req [:fach/id :fach/fachtitel]))


(s/def :kurs/id string?)
(s/def :kurs/fach ::fach)
(s/def :kurs/jahr pos-int?)
(s/def :kurs/semester string?)
(s/def :kurs/tests (s/coll-of ::test))


(s/def ::kurs
  (s/keys :req [:kurs/id :kurs/fach
                :kurs/jahr :kurs/semester
                :kurs/tests]))
