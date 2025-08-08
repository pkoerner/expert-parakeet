(ns views.question.question-view
  (:require
    [hiccup.form :as form]
    [hiccup2.core :as h]
    [ring.util.anti-forgery :refer [anti-forgery-field]]))


(def question-errors
  #{:not-assigned-to-question})


(defn- render-choice
  [input-fn possible-solution-id possible-solution-statement required?]
  [:div {:class "form-check"}
   (input-fn {:class "form-check-input", :required required?}
             "selected-solutions"
             false
             possible-solution-id)
   (form/label {:class "form-check-label"}
               possible-solution-id
               possible-solution-statement)])


(defn- render-choices
  [possible-solutions radio?]
  (let [input-fn (if radio? form/radio-button form/check-box)]
    [:fieldset
     (map
       #(render-choice
          input-fn
          (:solution/id %)
          (:solution/statement %)
          radio?)
       possible-solutions)]))


(defn dispatch-question-type
  [question]
  (case (:question/type question)
    :question.type/free-text (form/text-area {:class "form-control"} "free-text")
    :question.type/single-choice (render-choices (:question/possible-solutions question) true)
    :question.type/multiple-choice (render-choices (:question/possible-solutions question) false)))


(defn question-form
  [question post-destination]
  (h/html
    (form/form-to
      [:post post-destination]
      ;; (when-let [course-id (:question/course question)]
      ;;  (form/hidden-field "course-id" course-id))
      [:p (:question/statement question)]
      (dispatch-question-type question)
      (h/raw (anti-forgery-field))
      (form/submit-button {:class "btn btn-primary"} "Submit"))))


(defn no-question-assignment
  [permission-error]
  (when (contains? permission-error :not-assigned-to-question)
    [:p "ERROR: You are not assigned to this question!"]))
