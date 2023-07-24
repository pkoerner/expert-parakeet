(ns views.question
  (:require
    [hiccup.form :as form]
    [hiccup2.core :as h]
    [ring.util.anti-forgery :refer [anti-forgery-field]]
    [ring.util.response :as response]))


(def question-errors
  {:not-assigned-to-question "You are not assigned to this question!"})


;; I dont know how this exactly works.
;; This function and the subsequent usage
;; in the dispatch-question-type is
;; sourced from: https://github.com/yokolet/hiccup-samples
;; TODO: add answer-id to the lablaed radio
(defn labeled-radio
  [label]
  [:label (form/radio-button {:ng-model "question.answer"} "answer" false label)
   (str label "    ")])


(defn dispatch-question-type
  [question]
  (cond
    (= (:question/type question)
       :question.type/free-text)
    (form/text-area {:type "free-text"} "answer")
    (= (:question/type question)
       :question.type/single-choice)
    [:div {:class "form-group"} (reduce conj
                                        [:div {:class "btn-group" :type "single-choice"}]
                                        (for [possible-solution (:question/possible-solutions question)]
                                          [:div
                                           [:p possible-solution]
                                           (labeled-radio possible-solution)]))]
    (= (:question/type question)
       :question.type/multiple-choice)
    (for [possible-solution (:question/possible-solutions question)]
      [:div {:type "multiple-choice"}
       [:p possible-solution]
       (form/check-box possible-solution)])))


(defn question-form
  [question put-destination]
  (h/html
    (form/form-to
      [:put put-destination]
      [:div [:p
             {:id (:question/id question)}
             (:question/question-statement question)]
       (dispatch-question-type question)]
      (h/raw (anti-forgery-field))
      (form/submit-button "submit"))))


(defn no-question-assignment
  [permission-error]
  [:p (str "ERROR " (:not-assigned-to-question permission-error))])


(defn submit-success-view
  [response]
  (h/html
    [:div
     [:p "Die Frage wurde erfolgreich eingereicht!"]
     [:p response]]))
