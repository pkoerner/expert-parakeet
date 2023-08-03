(ns views.answer.answer-view
  (:require
   [hiccup2.core :as h]))

(defn submit-success-view
  [response]
  (h/html
   [:div
    [:p "Die Frage wurde erfolgreich eingereicht!"]
    [:p response]]))