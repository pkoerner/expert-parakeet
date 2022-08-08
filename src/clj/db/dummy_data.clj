(ns db.dummy-data)


(def dummy-data
  [{:frage/id 1
    :frage/typ :frage.typ/text
    :frage/frage-text "Wie geht es dir heute?"
    :frage/loesungskriterien "Student schreibt Worte (7P)"
    :frage/punkte 7}
   {:frage/id 3
    :frage/typ :frage.typ/text
    :frage/frage-text "Fühlen sie sich prüfungsbereit?"
    :frage/loesungskriterien "Lösungskriterien"
    :frage/punkte 1}
   {:frage/id 4
    :frage/typ :frage.typ/single-choice
    :frage/frage-text "Was ist die Hauptstadt von Italien?"
    :frage/choices #{"Wien" "Venedig" "Rom" "Pizza"}
    :frage/single-choice-loesung "Rom"
    :frage/punkte 1}
   {:frage/id 5
    :frage/typ :frage.typ/multiple-choice
    :frage/frage-text "Was ist gut?"
    :frage/choices #{"Lasagne" "Eis" "Schnecken" "Pasta"}
    :frage/multiple-choice-loesung #{"Lasagne" "Eis" "Pasta"}
    :frage/punkte 1}
   {:test/id 1
    :test/name "Test 1"
    :test/fragen [[:frage/id 1] [:frage/id 3] [:frage/id 4] [:frage/id 5]]}
   {:test/id 2
    :test/name "Test 2"
    :test/fragen [[:frage/id 1]]}
   {:fach/id 0
    :fach/fachtitel "Fach 1"
    :fach/tests []}
   {:fach/id 1
    :fach/fachtitel "Fach 2"
    :fach/tests []}
   {:kurs/id 1
    :kurs/fach [:fach/id 0]
    :kurs/jahr 2000
    :kurs/semester "WiSe"
    :kurs/tests [[:test/id 1]]}
   {:kurs/id 2
    :kurs/fach [:fach/id 1]
    :kurs/jahr 2001
    :kurs/semester "SoSe"
    :kurs/tests [[:test/id 1] [:test/id 2]]}
   {:user/id 0
    :user/kurse [[:kurs/id 1] [:kurs/id 2]]}
   {:antwort/id 1
    :antwort/frage [:frage/id 1]
    :antwort/user [:user/id 0]
    :antwort/antwort-text "Antwort"
    :antwort/punkte 4}
   {:antwort/id 2
    :antwort/frage [:frage/id 3]
    :antwort/user [:user/id 0]
    :antwort/antwort-text "Antwort"
    :antwort/punkte 1}])
