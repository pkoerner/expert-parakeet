(ns views.course-iteration.create-course-iteration-view
  (:require [clojure.spec.alpha :as s]
            [clojure.string :as string]
            [hiccup.form :as hform]
            [hiccup2.core :as h]
            [ring.util.anti-forgery :refer [anti-forgery-field]]))

(def no-courses [:p "Es muss erst ein Fach erstellt werden bevor ein Kurs erstellt werden kann!"])

(s/fdef course-iteration-form
  :args (s/cat :courses (s/coll-of (s/keys :req [:course/id :course/course-name]) :distinct true)
               :question-sets (s/coll-of (s/keys :req [:question-set/id :question-set/name]) :distinct true)
               :post-destination :specs/non-blank-string)
  :ret #(instance? hiccup.util.RawString %)
  :fn (fn [spec-map]
        (let [{{:keys [courses question-sets post-destination]} :args
               ret :ret} spec-map]
          (s/and (every? #(string/includes? (str ret) (:course/course-name %)) courses)
                 (every? #(string/includes? (str ret) (:question-set/name %)) question-sets)
                 #(string/includes? ret post-destination)))))

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


(s/fdef submit-error-view
  :args (s/cat :errors (s/coll-of string? :distinct true :min-count 1))
  :ret (s/and #(string/includes? % "Fehler")
              #(instance? hiccup.util.RawString %))
  :fn (fn [spec-map]
        (let [{{:keys [errors]} :args
               ret :ret} spec-map]
          (every? #(string/includes? ret %) errors))))

(defn submit-error-view
  [errors]
  (h/html
   [:div
    [:p "Es gab folgende Fehler in der Eingabe:"]
    [:br]
    [:ul (for [error errors]
           [:li error])]]
   [:div
    [:p "Bitte gebe diesmal Korrekte Werete an!"]]))


(s/fdef submit-success-view
  :args (s/cat :semester :course-iteration/semester
               :year :course-iteration/semester)
  :ret (s/and #(string/includes? % "Erfolg")
              #(instance? hiccup.util.RawString %)))

(defn submit-success-view
  [semester year]
  (h/html
   [:div
    [:p "Der Kurs für das " semester
     " im Jahr " year
     " wurde Erfolgreich für das Fach erstellt!\n"]]))


