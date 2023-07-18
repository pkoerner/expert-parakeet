(ns views.question
  (:require 
   [hiccup.form :as form]))

(def question-errors
  {:not-assigned-to-question "You are not assigned to this question!"})


;; I dont know how this exactly works.
;; This function and the subsequent usage
;; in the dispatch-question-type is
;; sourced from: https://github.com/yokolet/hiccup-samples
;; TODO: add answer-id to the lablaed radio
(defn labeled-radio
  [label]
  [:label (form/radio-button {:ng-model "question.answer"} "question.answer" false label)
   (str label "    ")])

(defn dispatch-question-type
  [question]
  (cond
    (= (:question/type question)
       :question.type/free-text)
    (form/text-area "answer")
    (= (:question/type question)
       :question.type/single-choice)
    [:div {:class "form-group"} (reduce conj
                                        [:div {:class "btn-group"}]
                                        (for [possible-solution (:question/possible-solutions question)]
                                          [:div
                                           [:p possible-solution]
                                           (labeled-radio possible-solution)]))]
    (= (:question/type question)
       :question.type/multiple-choice)
    (for [possible-solution (:question/possible-solutions question)]
      [:div
       [:p possible-solution]
       (form/check-box possible-solution)])))

(defn question-form
  [question]
  (form/form-to [:put (str "/answer/" (:question/id question) "/" (rand-int 30))]
                [:div [:p
                         {:id (:question/id question)}
                         (:question/question-statement question)]
                  (dispatch-question-type question)]
                (form/submit-button "submit")))

(defn no-question-assignment 
  [permission-error]
  [:p (str "ERROR " (:not-assigned-to-question permission-error))])
