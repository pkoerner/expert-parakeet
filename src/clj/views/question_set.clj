(ns views.question-set
  (:require
    [services.question-set-service :as serv]
    [db]))


(defn question-set-form
  [question-set-id]
  [:h1 (serv/extract-question-set-name question-set-id)]
  [:table
   [:tr
    [:th "Question"]
    [:th "Points"]]
   (for [question (serv/extract-question-from-question-set question-set-id)]
     [:tr
      [:td
       [:a {:href (str "/question/" (serv/extract-question-id-from-question question))}
        (serv/extract-question-statement-from-question question)]]
      [:td (serv/extract-question-points-from-question question)]])])
