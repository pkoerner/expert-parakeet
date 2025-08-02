(ns views.correction-queue.assignments-view
  (:require
   [hiccup2.core :as h]
   [util.ring-extensions :refer [html-response]]
   [hiccup.form :as hform]
   [ring.util.anti-forgery :refer [anti-forgery-field]]
   [ring.util.response :as response]))
  
  (defn- answer-correction-view [post-destination answers]
    (h/html
     [:div
      [:h1 "Assignments"]
      (for [answer answers
            :let
            [question-statement (:question/statement (:answer/question answer))
             answer-statement (:answer/answer answer)
             max-points (:question/max-points (:answer/question answer))
             evaluation-criteria (:question/evaluation-criteria (:answer/question answer))
             pd (str post-destination "/" (:answer/id answer))]]
        [:div
        [:p (str "Question: " question-statement)]
        [:p (str "Answer: " answer-statement)]
        [:p "Evaluation criteria: " evaluation-criteria]
        (hform/form-to
         [:post pd]
         [:div
          (hform/label {:class "form-label"} "feedback" "Feedback")
          (hform/text-field {:class "form-control" :required false} "feedback")]
         [:div
          (hform/label {:class "form-label"} "points" (format "Points (max: %s)" max-points))
          [:input {:id "points"
                   :class "form-control"
                   :name "points"
                   :type "number"
                   :min "0"
                   :max (str max-points)
                   :step "1"
                   :required true
                   :value 0}]]
         (h/raw (anti-forgery-field))
         [:div {:class "button-group"}
          [:button {:type "submit" :name "action" :value "submit" :class "btn btn-primary"} "Submit correction"]])
        [:p "Question-Statistics: <all-answers> / <corrected-answers> / <corrected-by-you>"]
        [:hr]])]))
  
  (defn create-correction-queue-view [post-destination answers]
    (if (or (nil? answers) (empty? answers))
      (response/redirect "/correction-queue")
      (html-response (answer-correction-view post-destination answers))))