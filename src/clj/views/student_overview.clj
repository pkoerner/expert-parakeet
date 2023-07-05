(ns views.student-overview
  (:require [hiccup2.core :as h]))

;; Layout-idea:
;; Course-iteration 1: (e.g. fkt-prog-SOM-22)
;;   Questions-sets to do:
;;     - question-set-3 | (deadline) | "click here to begin"
;;     - question-set-4 | (deadline) | "click here to begin"
;;   Corrected question-sets:
;;     - question-set-1 | 8/10 Points | passed/failed-checkbox | "see correction"
;;     - question-set-2 | 2/10 Points | passed/failed-checkbox | "see correction"
;;
;; ("" means a hyperlink-button)
(defn body-for-overview
  "Creates a list of the course-iterations of the student.
   Each of the course-iterations contains two list:
   1) question-sets to do
   2) corrected question-sets"
  [courses-with-question-sets]
  [:ul 
   [:li [:h3 "Courses:"]]
   (doseq [[name tests] courses-with-question-sets]
     (let [[corrected uncorrected] (group-by is-corrected? tests)]
       [:li 
        [:h4 name] 
        [:table
         [:tbody
          [:tr [:th {:colspan "3"} "Question-sets to do:"]]
          (for [question-set uncorrected]
            [:tr
             [:td (:question-set/name question-set)]
             [:td (:question-set/end question-set)]
             [:td [:button {:onclick "/"} "begin"]]])]]
        [:table
         [:tbody
          [:tr [:th {:colspan "4"} "Corrected question-sets"]]
          (for [question-set corrected]
            [:tr
             [:td (:question-set/name question-set)]
             [:td "points"]
             [:td "passed/failed-checkbox"]
             [:td [:button {:onclick "/"} "see correction"]]])]]]))])