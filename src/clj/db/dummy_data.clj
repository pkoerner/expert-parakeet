(ns db.dummy-data)


(def questions
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


(def question-sets
  [{:question-set/id "1"
    :question-set/name "Test 1"
    :question-set/questions [[:question/id "1"] [:question/id "3"] [:question/id "4"] [:question/id "5"]]}
   {:question-set/id "2"
    :question-set/name "Test 2"
    :question-set/questions [[:question/id "1"] [:question/id "6"]]}])


(def courses
  [{:course/id "0"
    :course/course-name "Fach 1"
    :course/question-sets []}
   {:course/id "1"
    :course/course-name "Fach 2"
    :course/question-sets []}])


(def course-iterations
  [{:course-iteration/id "1"
    :course-iteration/course [:course/id "0"]
    :course-iteration/year 2000
    :course-iteration/semester "WiSe"
    :course-iteration/question-sets [[:question-set/id "1"]]}
   {:course-iteration/id "2"
    :course-iteration/course [:course/id "1"]
    :course-iteration/year 2001
    :course-iteration/semester "SoSe"
    :course-iteration/question-sets [[:question-set/id "1"] [:question-set/id "2"]]}])


(def users
  [{:user/id "0"
    :user/course-iterations [[:course-iteration/id "1"] [:course-iteration/id "2"]]}
   {:user/id "1"
    :user/course-iterations [[:course-iteration/id "1"] [:course-iteration/id "2"]]}
   {:user/id "2"
    :user/course-iterations [[:course-iteration/id "1"]]}
   {:user/id "3"
    :user/course-iterations [[:course-iteration/id "2"]]}])


(def answers
  [{:answer/id "1"
    :answer/question [:question/id "1"]
    :answer/user [:user/id "0"]
    :answer/answer ["Antwort"]
    :answer/points 4}
   {:answer/id "2"
    :answer/question [:question/id "3"]
    :answer/user [:user/id "3"]
    :answer/answer ["Antwort"]
    :answer/points 1}
   {:answer/id "3"
    :answer/question [:question/id "1"]
    :answer/user [:user/id "2"]
    :answer/answer ["Korrigierte Antwort"]
    :answer/points 5}
   {:answer/id "4"
    :answer/question [:question/id "2"]
    :answer/user [:user/id "0"]
    :answer/answer ["Bool Antwort"]
    :answer/points 1}
   {:answer/id "5"
    :answer/question [:question/id "3"]
    :answer/user [:user/id "0"]
    :answer/answer ["Antwort"]
    :answer/points 0}
   {:answer/id "6"
    :answer/question [:question/id "3"]
    :answer/user [:user/id "2"]
    :answer/answer ["Antwort"]
    :answer/points 0}
   {:answer/id "7"
    :answer/question [:question/id "3"]
    :answer/user [:user/id "3"]
    :answer/answer ["Korrigierte Antwort"]
    :answer/points 0}
   {:answer/id "8"
    :answer/question [:question/id "2"]
    :answer/user [:user/id "0"]
    :answer/answer ["Bool Antwort"]
    :answer/points 0}])


(def corrections
  [{:correction/answer [:answer/id "3"]
    :correction/corrector [:user/id "1"]
    :correction/feedback "Superb!"}
   {:correction/answer [:answer/id "7"]
    :correction/corrector [:user/id "1"]
    :correction/feedback "Superb!"}])


(def dummy-data
  (concat
    questions
    question-sets
    courses
    course-iterations
    users
    answers
    corrections))
