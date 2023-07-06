(ns views.student-overview
  (:require [hiccup2.core :as h]))

;; Layout-idea:
;; Course-iteration 1: (e.g. fkt-prog-SOM-22)
;;   Questions-sets:
;;     question-set-1 | points | deadline | passed/failed-check | "inspect question set"
;;     question-set-2 | points | deadline | passed/failed-check | "inspect question set"
;; ("" means button)
(defn display-course-iteration
  "Creates a list of the course-iterations of the student.
   Each of the course-iterations contains a list of the question-sets
   unlocked for the student"
  [course-iteration]
  [:p
   [:h3 (str (:course/course-name
             (:course-iteration/course course-iteration)) " "
            (:course-iteration/year course-iteration) " "
            (:course-iteration/semester course-iteration))]
  [:ul
   (for [question-set (:course-iteration/question-sets course-iteration)]
     [:li [:table
           [:tbody
            [:tr
             [:td (str (:question-set/name question-set))]
             [:td (str (:question-set/achieved-points question-set)
                       "/"
                       (str (:question-set/max-points question-set))
                       " Points")]
             [:td (if (>= (:question-set/achieved-points question-set) (:question-set/passing-score question-set))
                    "passed"
                    "failed")]
             [:td (str "deadline: " (:question-set/end question-set))] 
             [:td [:a {:href "/question-set:id"} [:button "deatils"]]]]]]])]])



(defn overview
  [course-iterations]
  [:div
   [:h1 "Overview"]
   [:h2 "Courses:"]
   [:ul
    (for [c course-iterations]
      [:li (display-course-iteration c)])]])



(def my-test-data
  '(#:course-iteration{:id "",
                       :course
                       #:course{:id "",
                                :course-name "fkt-prog",
                                :question-sets
                                []},
                       :year 2022,
                       :semester "SOM",
                       :question-sets
                       [#:question-set{:id "6789",
                                       :name "moini",
                                       :start #inst "1969-12-31T23:59:59.999-00:00",
                                       :end #inst "1969-12-31T23:59:59.999-00:00",
                                       :questions
                                       [#:question{:id "J",
                                                   :type :question.type/multiple-choice,
                                                   :question-statement "",
                                                   :points -1,
                                                   :possible-solutions
                                                   ["0" "" "U" "" "X" "i" "" "" "V" "G" "" "7" "7" ""],
                                                   :multiple-choice-solution
                                                   ["" "" "Q" "" "k" "" "W" "S" "" "" "" "" "1" "B" ""]}
                                        #:question{:id "",
                                                   :type :question.type/single-choice,
                                                   :question-statement "",
                                                   :points 0,
                                                   :possible-solutions
                                                   ["" "" "" "" "" "" "" "" "" "" "" "" "" "" "" "" "" ""],
                                                   :single-choice-solution ""}
                                        #:question{:id "XHH",
                                                   :type :question.type/single-choice,
                                                   :question-statement "r9",
                                                   :points -1,
                                                   :possible-solutions
                                                   ["vOt1"
                                                    "ew5T"
                                                    "J"
                                                    "T"
                                                    "2P"
                                                    "KC"
                                                    "Q"
                                                    "t"
                                                    ""
                                                    ""
                                                    "czT"
                                                    "1w"
                                                    "Qr1"
                                                    "7d"
                                                    "E"
                                                    "3"],
                                                   :single-choice-solution "M04k"}
                                        #:question{:id "",
                                                   :type :question.type/single-choice,
                                                   :question-statement "rIs",
                                                   :points 1,
                                                   :possible-solutions ["Ti" "3" "P4" "7eN" "r4"],
                                                   :single-choice-solution "6N"}
                                        #:question{:id "",
                                                   :type :question.type/free-text,
                                                   :question-statement "",
                                                   :points -1,
                                                   :evaluation-criteria ""}
                                        #:question{:id "n1",
                                                   :type :question.type/single-choice,
                                                   :question-statement "3o",
                                                   :points 0,
                                                   :possible-solutions [],
                                                   :single-choice-solution "8"}
                                        #:question{:id "",
                                                   :type :question.type/multiple-choice,
                                                   :question-statement "",
                                                   :points -1,
                                                   :possible-solutions ["" ""],
                                                   :multiple-choice-solution
                                                   ["" "" "" "" "" "" "" "" "" "" "" "" "" "" "" "" "" ""]}
                                        #:question{:id "e",
                                                   :type :question.type/multiple-choice,
                                                   :question-statement "t5",
                                                   :points -1,
                                                   :possible-solutions
                                                   ["9" "" "J" "u" "" "6" "mM" "ww" "SI" "y" "M6" "Oo" "" "" "" "3"],
                                                   :multiple-choice-solution
                                                   ["Na" "v" "FO" "" "" "v" "R" "" "p" "AE" "8" "" "5A"]}],
                                       :passing-score 5
                                       :achieved-points 3
                                       :max-points 10}]}))

(overview my-test-data)

(str (h/html (overview my-test-data)))
