(ns views.correction-queue.correction-queue-view
  (:require
   [hiccup2.core :as h]
   [hiccup.form :as hform]
   [ring.util.anti-forgery :refer [anti-forgery-field]]))

(defn create-correction-queue-view [post-destination answer]
  (let [question-statement (:question/statement (:answer/question answer))
        answer-statement (:answer/answer answer)
        max-points (:question/max-points (:answer/question answer))]
    (h/html
     [:div
      [:h1 "Correction Queue"]
      [:p (str "Question: " question-statement)]
      [:p (str "Answer: " answer-statement)]
      [:p "Evaluation criteria: <Insert Grading Criteria>"]
      (hform/form-to
       [:post post-destination]
       [:div
        (hform/label {:class "form-label"} "feedback" "Feedback")
        (hform/text-field {:class "form-control" :required false} "feedback")]
       [:div
        (hform/label {:class "form-label"} "points" (format "Points (max: %s)" max-points))
        [:input {:id "max-points"
                 :class "form-control"
                 :name "max-points"
                 :type "number"
                 :min "0"
                 :max (str max-points)
                 :step "1"
                 :required true
                 :value 0}]]
       (h/raw (anti-forgery-field))
       [:div {:class "button-group"}
        [:button {:type "submit" :name "action" :value "save" :class "btn btn-primary"} "Save"]
        [:button {:type "submit" :name "action" :value "next" :class "btn btn-secondary"} "Next"]
        [:button {:type "submit" :name "action" :value "save-next" :class "btn btn-danger"} "Save & Next"]])
      [:p "Question-Statistics: <all-answers> / <corrected-answers> / <corrected-by-you>"]])))