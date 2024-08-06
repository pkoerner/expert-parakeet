(ns views.question.question-view
  (:require
    [hiccup.form :as form]
    [hiccup2.core :as h]
    [ring.util.anti-forgery :refer [anti-forgery-field]]))


(def question-errors
  #{:not-assigned-to-question})


(defn dispatch-question-type
  [question]
  (case (:question/type question)
    :question.type/free-text
    (form/text-area {:class "form-control"} "free-text")

    :question.type/single-choice
    [:fieldset
     (for [possible-solution (:question/possible-solutions question)]
       [:div {:class "form-check"}
        (form/radio-button {:class "form-check-input" :required "true"}
                           "selected-solutions"
                           false
                           (possible-solution :solution/id))
        (form/label {:class "form-check-label"}
                    (str "selected-solutions-" (possible-solution :solution/id))
                    (possible-solution :solution/statement))])]

    :question.type/multiple-choice
    [:fieldset
     (for [possible-solution (:question/possible-solutions question)]
       [:div {:type "form-check"}
        (form/check-box {:class "form-check-input"}
                        "selected-solutions"
                        false
                        (possible-solution :solution/id))
        (form/label {:class "form-check-label"}
                    (str "selected-solutions-" (possible-solution :solution/id))
                    (possible-solution :solution/statement))])]))


(defn question-form
  [question post-destination]
  (h/html
    (form/form-to
      [:post post-destination]
      [:p (:question/statement question)]
      (dispatch-question-type question)
      (h/raw (anti-forgery-field))
      (form/submit-button {:class "btn btn-primary"} "Submit"))))


(defn no-question-assignment
  [permission-error]
  (when (contains? permission-error :not-assigned-to-question)
    [:p "ERROR: You are not assigned to this question!"]))
