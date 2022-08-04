(ns db.dummy-data)


(def dummy-data
  [{:frage/id 1
    :frage/frage-text "Wie geht es dir heute?"
    :frage/typ :frage.typ/text
    :frage/loesung "Lösung"
    :frage/punkte 7}
   {:frage/id 3
    :frage/frage-text "Fühlen sie sich prüfungsbereit?"
    :frage/typ :frage.typ/bool
    :frage/loesung "Lösung"
    :frage/punkte 1}
   {:test/id 1
    :test/name "Test 1"
    :test/fragen [[:frage/id 1] [:frage/id 3]]}
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
