(ns views.correction.new-correction-view
  (:require
    [hiccup.form :as hform]
    [hiccup2.core :as h]
    [ring.util.anti-forgery :refer [anti-forgery-field]]
    [util.hiccup-extensions :refer [optional-error-display]]))


(defn new-correction-form
  "Creates a form, where a new correction can be entered. Shows the corresponding question, evaluation criteria and answer."
  [answer question post-destination  & {:keys [errors] :or {errors {}}}]
  (h/html
    (hform/form-to
      {:enctype "multipart/form-data"}
      [:post post-destination]

      [:div
       [:input#answer-id {:name "answer-id" :type "hidden" :value (:answer/id answer)}]]
      [:div
       [:label {:for "question"} "Frage:"] [:br]
       [:p#question {:name "question"} (:question/question-statement question)]]
      [:div
       [:label {:for "evaluation-criteria"} "Evaluationskriterien:"] [:br]
       [:p#evaluation-criteria {:name "evaluation-criteria"} (:question/evaluation-criteria question)]]
      [:div
       [:label {:for "answer"} "Antwort:"] [:br]
       [:p#answer {:name "answer"} (map str (:answer/answer answer))]]
      [:div
       (optional-error-display :correction/points errors)
       [:label {:for "points"} "Punkte:"] [:br]
       [:input#points {:name "points" :type "number" :value 0}]]
      [:div
       (optional-error-display :correction/feedback errors)
       [:label {:for "feedback"} "Feedback:"] [:br]
       [:textarea#feedback {:name "feedback"}]]
      (h/raw (anti-forgery-field))
      (hform/submit-button "submit"))))
