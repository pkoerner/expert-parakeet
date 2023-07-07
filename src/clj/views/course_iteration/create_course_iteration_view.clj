(ns views.course-iteration.create-course-iteration-view
  (:require [db]
            [hiccup.form :as hform]
            [hiccup2.core :as h]
            [ring.util.anti-forgery :refer [anti-forgery-field]]
            [clojure.spec.alpha :as s]))

(def no-courses [:p "Es muss erst ein Fach erstellt werden bevor ein Kurs erstellt werden kann!"])

(defn course-iteration-form
  [courses question-sets post-destination]
  (letfn [(course-to-option
            [course]
            [(:course/course-name course) (:course/id course)])]
    (h/html
     (hform/form-to
      {:enctype "multipart/form-data"}
      [:post post-destination]

      [:div
       [:label {:for "courses"} "Fach auswahl:"] [:br]
       [:select#courses {:name "course-id"}
        (hform/select-options (mapv course-to-option courses))]]

      [:div
       [:label {:for "year"} "Jahr"] [:br]
       [:input#year {:name "year"
                     :type "number"
                     :min "1900"
                     :max "2099"
                     :step "1"
                     :value "2024"}]]

      [:div
       [:label {:for "semester"} "Semester"] [:br]
       [:select#semester {:name "semester"}
        (hform/select-options [["Sommer" "SoSe"]
                               ["Winter" "WiSe"]])]]

      [:div
       [:label {:for "question-sets"} "Tests"] [:br]
       [:ul
        (for [question-set question-sets]
          [:li [:input {:name "question-set-ids"
                        :type "checkbox"
                        :value (:question-set/id question-set)}
                (:question-set/name question-set)]])]]


      (h/raw (anti-forgery-field))
      (hform/submit-button "submit")))))

(defn create-course-iteration-get
  [post-destination]
  (let [courses (db/get-all-courses)
        question-sets (db/get-all-question-sets)]
    (if (nil? courses)
      no-courses
      (course-iteration-form courses question-sets post-destination))))
