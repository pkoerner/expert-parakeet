(ns views.student-overview
  (:require [hiccup2.core :as h]))

;; Layout-idea:
;; Course-iteration 1: (e.g. fkt-prog-SOM-22)
;;   Questions-sets to do:
;;     - question-set-3 | (deadline) | "click here to begin"
;;     - question-set-4 | (deadline) | "click here to begin"
;;   Submitted question-sets:
;;     - question-set-1 | 8/10 Points | passed/failed-checkbox | "see correction"
;;     - question-set-2 | 2/10 Points | passed/failed-checkbox | "see correction"
;;
;; ("" means a hyperlink-button)
(defn question-sets-for-courses
  "Creates a list of the course-iterations of the student.
   Each of the course-iterations contains two list:
   1) question-sets to do
   2) submitted question-sets"
  [courses-with-question-sets]
  [:ul 
   [:li [:h2 "Courses:"]]
   (doseq [[name tests] courses-with-question-sets]
     (let [[submitted to-do] (group-by is-submitted? tests)]
       [:li 
        [:h3 name] 
        [:table
         [:tbody
          [:tr [:th {:colspan "3"} "Question-sets to do:"]]
          (for [question-set to-do]
            [:tr
             [:td (:question-set/name question-set)]
             [:td (:question-set/end question-set)]
             [:td [:button {:onclick "/"} "begin"]]])]]
        [:table
         [:tbody
          [:tr [:th {:colspan "4"} "Submitted question-sets"]]
          (for [question-set submitted]
            [:tr
             [:td (:question-set/name question-set)]
             [:td "points"]
             [:td "passed/failed-checkbox"]
             [:td [:button {:onclick "/"} "see correction"]]])]]]))])

(defn overview
  [user-id courses-with-question-sets]
  [:div
   [:h1 "Overview"]
   (question-sets-for-courses courses-with-question-sets)
   ]
  )