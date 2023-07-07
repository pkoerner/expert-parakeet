(ns views.course-iteration.create-course-iteration-view
  (:require [db]
            [hiccup.form :as hform]
            [hiccup2.core :as h]
            [ring.util.anti-forgery :refer [anti-forgery-field]]
            [clojure.spec.alpha :as s]))

(def no-courses [:p "Es muss erst ein Fach erstellt werden bevor ein Kurs erstellt werden kann!"])

(s/fdef course-iteration-form
  :args (s/cat :courses (s/coll-of (s/keys :req [:course/id :course/course-name]))
               :question-set (s/coll-of (s/keys :req [:question-set/id :question-set/name]))
               :post-destination string?))

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


(defn- validate-course-iteration
  [course-id year semester question-set-ids]
  (let [error-map {:course/id "Der ausgewählte Kurs war inkorrekt!"
                   :course-iteration/year "Das ausgewählte Jahr war inkorrekt!"
                   :course-iteration/semester "Das ausgewählte Semester war inkorrekt!"
                   :question-set/id "Das ausgewählte question-set-war nicht korrekt!"}]

    (reduce (fn [error-col [spec val]]
              (if (s/valid? spec val)
                error-col
                (conj error-col (error-map spec))))
            []
            [[:course/id course-id]
             [:course-iteration/year year]
             [:course-iteration/semester semester]
             [(s/coll-of :question-set/id) question-set-ids]])))

(defn- error-view
  [errors]
  (h/html
   [:div
    [:p "Es gab folgende Fehler in der Eingabe:"]
    [:br]
    [:ul (for [error errors]
           [:li error])]]
   [:div
    [:p "Bitte gebe diesmal Korrekte Werete an!"]]))

(defn- add-to-db-and-get-succsess-msg
  [course-id year semester question-set-ids db-add-fun]
  (let [db-result (db-add-fun
                   course-id year semester question-set-ids)]
    [:div
     [:p "Der Kurs für das " (:course-iteration/semester db-result)
      " im Jahr " (:course-iteration/year db-result)
      " wurde Erfolgreich für das Fach erstellt!\n"]]))

(defn submit-create-course-iteration-mockable
  [request db-add-fun]
  (let [form-data (-> request (:multipart-params) (dissoc :__anti-forgery-token))
        course-id (form-data "course-id")
        year (read-string (form-data "year"))
        semester (form-data "semester")
        question-set-ids (let [ids-or-id (form-data "question-set-ids")]
                           (cond (coll? ids-or-id) ids-or-id
                                 (nil? ids-or-id) []
                                 :else [ids-or-id]))
        validation-errors (validate-course-iteration course-id year semester question-set-ids)]

    (if (empty? validation-errors)
      (add-to-db-and-get-succsess-msg course-id year semester question-set-ids db-add-fun)
      (error-view validation-errors))))

(defn submit-create-course-iteration!
  [request]
  (submit-create-course-iteration-mockable
   request
   db/add-course-iteration-with-question-sets!))
