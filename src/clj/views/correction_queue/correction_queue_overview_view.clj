(ns views.correction-queue.correction-queue-overview-view
  (:require
   [hiccup2.core :as h]))

(defn create-correction-queue-overview-view [post-destination question-sets]
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
           [:tr
            [:td
             (:question/statement question)]
            [:td {:style "text-align: right;"} [:a {:href (str post-destination "/unassigned/" (:question/id question))} "Open Queue"]]
            [:td {:style "text-align: right;"} [:a {:href (str post-destination "/assigned/" (:question/id question))} "My Assignments"]]])]]])]))