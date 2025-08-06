(ns views.correction-queue.correction-queue-overview-view
  (:require
   [hiccup2.core :as h]))

(defn create-correction-queue-overview-view [post-destination question-sets answer-count]
  (h/html
   [:div
    [:h1 "Correction Queue - Overview"]
    (for [question-set question-sets]
      [:div
       [:h2 (:question-set/name question-set)]
       [:table {:class "table"}
        [:thead
         [:tr
          [:th {:style "text-align: left;"} "Question Statement"]
          [:th {:style "text-align: right; width: 150px;"} " "]
          [:th {:style "text-align: right; width: 150px;"} " "]]]
        [:tbody
         (for [question (:question-set/questions question-set)]
           (let [question-id (question :question/id)
                 question-answer-stats (answer-count question-id)
                 question-unassigned-answer-count (second question-answer-stats)
                 question-assigned-answer-count (first question-answer-stats)]
             (if (not= 0 (+ question-unassigned-answer-count question-assigned-answer-count)) ; skip question if no queue can be opened
               [:tr
                [:td
                 (:question/statement question)]
                [:td {:style "text-align: left;"} (when (> question-unassigned-answer-count 0) [:a {:href (str post-destination "/unassigned/" (:question/id question))} (str "Start Correcting (" question-unassigned-answer-count ")")])]
                [:td {:style "text-align: right;"} (when (> question-assigned-answer-count 0) [:a {:href (str post-destination "/assigned/" (:question/id question))} (str "My Assignments (" question-assigned-answer-count ")")])]])))]]])]))