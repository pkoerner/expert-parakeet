(ns domain.spec
  (:require
    [clojure.spec.alpha :as s]))


(s/def :frage/id pos-int?)
(s/def :frage/typ #{:frage.typ/text :frage.typ/single-choice :frage.typ/multiple-choice})
(s/def :frage/frage-text string?)
(s/def :frage/punkte int?)


(s/def :frage/loesungskriterien string?)


(s/def :frage/text
  (s/and
    (s/keys :req [:frage/id :frage/typ :frage/frage-text :frage/punkte
                  :frage/loesungskriterien])
    #(= (:frage/typ %) :frage.typ/text)))


(s/def :frage/choices (s/coll-of string?))

(s/def :frage/single-choice-loesung string?)


(s/def :frage/single-choice
  (s/and
    (s/keys :req [:frage/id :frage/typ :frage/frage-text :frage/punkte
                  :frage/choices :frage/single-choice-loesung])
    #(= (:frage/typ %) :frage.typ/single-choice)))


(s/def :frage/multiple-choice-loesung (s/coll-of string?))


(s/def :frage/multiple-choice
  (s/and
    (s/keys :req [:frage/id :frage/typ :frage/frage-text :frage/punkte
                  :frage/choices :frage/multiple-choice-loesung])
    #(= (:frage/typ %) :frage.typ/multiple-choice)))


(s/def ::frage
  (s/or :text :frage/text
        :single-choice :frage/single-choice
        :multiple-choice :frage/multiple-choice))


(s/explain ::frage {:frage/id 2 :frage/typ :frage.typ/text
                    :frage/frage-text "foo" :frage/loesungskriterien "bar" :frage/punkte 3})


(s/def :user/id pos-int?)
(s/def :user/kurse (s/coll-of ::kurs))


(s/def ::user
  (s/keys :req [:user/id :user/kurse]))


(s/def :antwort/id pos-int?)
(s/def :antwort/user ::user)
(s/def :antwort/frage ::frage)
(s/def :antwort/antwort-text string?)
(s/def :antwort/punkte pos-int?)


(s/def ::antwort
  (s/keys :req [:antwort/id :antwort/user
                :antwort/antwort-text :antwort/frage
                :antwort/punkte]))


(s/def :korrektur/id pos-int?)
(s/def :korrektur/korrektor ::user)
(s/def :korrektur/antwort ::antwort)
(s/def :korrektur/korrektur-text string?)


(s/def ::korrektur
  (s/keys :req [:korrektur/id :korrektur/korrektor
                :korrektur/antwort :korrektur/korrektur-text]))


(s/def :test/id pos-int?)
(s/def :test/name string?)
(s/def :test/fragen (s/coll-of ::frage))


(s/def ::test
  (s/keys :req [:test/id :test/name :test/fragen]))


(s/def :fach/id pos-int?)
(s/def :fach/fachtitel string?)
(s/def :fach/tests (s/coll-of ::test))


(s/def ::fach
  (s/keys :req [:fach/id :fach/fachtitel
                :fach/tests]))


(s/def :kurs/id pos-int?)
(s/def :kurs/fach ::fach)
(s/def :kurs/jahr pos-int?)
(s/def :kurs/semester string?)
(s/def :kurs/tests (s/coll-of ::test))


(s/def ::kurs
  (s/keys :req [:kurs/id :kurs/fach
                :kurs/jahr :kurs/semester
                :kurs/tests]))