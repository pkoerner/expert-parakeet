(ns views.student-overview.student-overview
  (:require
    [hiccup2.core :as h]))


;; Layout-idea:
;; Course-iteration 1: (e.g. fkt-prog-SOM-22)
;;     question-set-1 | points | passed/failed-check | deadline | "inspect question set"
;;     question-set-2 | points | passed/failed-check | deadline | "inspect question set"
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
              [:td (if (or (nil? (:question-set/achieved-points question-set)) 
                           (>= (:question-set/achieved-points question-set) (:question-set/passing-score question-set)))
                     "failed"
                     "passed")]
              [:td (str "deadline: " (:question-set/end question-set))]
              [:td [:a {:href "/question-set:id"} [:button "deatils"]]]]]]])]])


(defn create-student-overview
  [course-iterations]
  (h/html
   [:div
   [:h1 "Overview"]
   [:h2 "Courses:"]
   [:ul
    (for [c course-iterations]
      [:li (display-course-iteration c)])]]))




