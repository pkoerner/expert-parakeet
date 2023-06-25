(ns db.dummy-data
  (:require
    [util.time :as time]))


(def fragen
  [{:question/id "1"
    :question/type :question.type/free-text
    :question/question-statement "Wie geht es dir heute?"
    :question/evaluation-criteria "Student schreibt Worte (7P)"
    :question/points 7}
   {:question/id "2"
    :question/type :question.type/free-text
    :question/question-statement "Fühlen sie sich prüfungsbereit?"
    :question/evaluation-criteria "Lösungskriterien"
    :question/points 1}
   {:question/id "3"
    :question/type :question.type/free-text
    :question/question-statement "Nächste Frage gefällig?"
    :question/evaluation-criteria "Studi muss freudig Ja sagen."
    :question/points 5}
   {:question/id "4"
    :question/type :question.type/single-choice
    :question/question-statement "Was ist die Hauptstadt von Italien?"
    :question/possible-solutions #{"Wien" "Venedig" "Rom" "Pizza"}
    :question/single-choice-solution "Rom"
    :question/points 1}
   {:question/id "5"
    :question/type :question.type/multiple-choice
    :question/question-statement "Was ist gut?"
    :question/possible-solutions #{"Lasagne" "Eis" "Schnecken" "Pasta"}
    :question/multiple-choice-solution #{"Lasagne" "Eis" "Pasta"}
    :question/points 1}
   {:question/id "6"
    :question/question-statement "Nächste Frage gefällig?"
    :question/type :question.type/free-text
    :question/evaluation-criteria "Lösung"
    :question/points 1}])


(def tests
  [{:test/id "1"
    :test/name "Test 1"
    :test/fragen [[:question/id "1"] [:question/id "3"] [:question/id "4"] [:question/id "5"]]}
   {:test/id "2"
    :test/name "Test 2"
    :test/fragen [[:question/id "1"] [:question/id "6"]]}])


(def faecher
  [{:fach/id "0"
    :fach/fachtitel "ProPra I"}
   {:fach/id "1"
    :fach/fachtitel "Fach 2"}])


(def kurse
  [{:kurs/id "1"
    :kurs/fach [:fach/id "0"]
    :kurs/jahr 2000
    :kurs/semester "WiSe"
    :kurs/tests [[:test/id "1"]]}
   {:kurs/id "2"
    :kurs/fach [:fach/id "1"]
    :kurs/jahr 2001
    :kurs/semester "SoSe"
    :kurs/tests [[:test/id "1"] [:test/id "2"]]}])


(def user
  [{:user/id "0"
    :user/kurse [[:kurs/id "1"] [:kurs/id "2"]]}
   {:user/id "1"
    :user/kurse [[:kurs/id "1"] [:kurs/id "2"]]}
   {:user/id "2"
    :user/kurse [[:kurs/id "1"]]}
   {:user/id "3"
    :user/kurse [[:kurs/id "2"]]}])


(def antworten
  [{:antwort/id "1"
    :antwort/frage [:question/id "1"]
    :antwort/user [:user/id "0"]
    :antwort/antwort ["Antwort"]
    :antwort/punkte 4}
   {:antwort/id "2"
    :antwort/frage [:question/id "3"]
    :antwort/user [:user/id "3"]
    :antwort/antwort ["Antwort"]
    :antwort/punkte 1}
   {:antwort/id "3"
    :antwort/frage [:question/id "1"]
    :antwort/user [:user/id "2"]
    :antwort/antwort ["Korrigierte Antwort"]
    :antwort/punkte 5}
   {:antwort/id "4"
    :antwort/frage [:question/id "2"]
    :antwort/user [:user/id "0"]
    :antwort/antwort ["Bool Antwort"]
    :antwort/punkte 1}
   {:antwort/id "5"
    :antwort/frage [:question/id "3"]
    :antwort/user [:user/id "0"]
    :antwort/antwort ["Antwort"]
    :antwort/punkte 0}
   {:antwort/id "6"
    :antwort/frage [:question/id "3"]
    :antwort/user [:user/id "2"]
    :antwort/antwort ["Antwort"]
    :antwort/punkte 0}
   {:antwort/id "7"
    :antwort/frage [:question/id "3"]
    :antwort/user [:user/id "3"]
    :antwort/antwort ["Korrigierte Antwort"]
    :antwort/punkte 0}
   {:antwort/id "8"
    :antwort/frage [:question/id "2"]
    :antwort/user [:user/id "0"]
    :antwort/antwort ["Bool Antwort"]
    :antwort/punkte 0}])


(def korrekturen
  [{:korrektur/antwort [:antwort/id "3"]
    :korrektur/korrektor [:user/id "1"]
    :korrektur/korrektur-text "Superb!"}
   {:korrektur/antwort [:antwort/id "7"]
    :korrektur/korrektor [:user/id "1"]
    :korrektur/korrektur-text "Superb!"}])


(def dummy-data
  (concat
    fragen
    tests
    faecher
    kurse
    user
    antworten
    korrekturen))
