(ns domain
  (:require
    [clojure.spec.alpha :as s]))


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


(s/def ::test
  (s/keys :req [:test/id :test/fragen]))


(s/def :fach/id pos-int?)
(s/def :fach/fachtitel string?)
(s/def :fach/tests (s/coll-of ::test))

(s/def :kurs/id pos-int?)
(s/def :kurs/fach :fach/id)
(s/def :kurs/jahr pos-int?)
(s/def :kurs/semester string?)
(s/def :kurs/tests (s/coll-of ::test))
