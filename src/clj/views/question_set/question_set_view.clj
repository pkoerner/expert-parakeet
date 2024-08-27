(ns views.question-set.question-set-view
  (:require
    [hiccup2.core :as h]
    [util.strings :refer [shorten]]))


(def question-set-errors
  "Possible errors that can occur when trying
   to access a question-set."
  #{:not-assigned-to-question-set})


(defn question-set-form
  [question-set]
  (h/html
    [:div
     [:h1 (:question-set/name question-set)]
     [:table {:class "table"}
      [:thead
       [:tr
        [:th {:scope "col"} "Question"]
        [:th {:scope "col"} "Points"]]]
      [:tbody
       (for [question (:question-set/questions question-set)]
         [:tr
          [:td
           [:a {:href (str "/question/" (:question/id question))} (shorten (:question/statement question) 150)]]
          [:td (str "?" " / " (:question/max-points question))]])]]])) ; TODO: how many points did this user score?


(defn no-assignement-form
  [permission-error]
  (when (contains? permission-error :not-assigned-to-question-set)
    (h/html
      [:p (str "ERROR: You do not have access to this question set")])))
