(ns views.answer.answer-view
  (:require
    [hiccup2.core :as h]))


(defn submit-success-view
  [response]
  (h/html
    [:div
     [:p "The question was successfully submited!"]
     [:p response]]))
