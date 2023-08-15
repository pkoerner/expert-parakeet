(ns views.question-set.question-set-view
  (:require
    [db]
    [hiccup2.core :as h]))


(def question-set-errors
  "Possible errors that can occur when trying
   to access a question-set."
  #{:not-assigned-to-question-set})


(defn question-set-form
  [question-set]
  (h/html
    [:div
     [:h1 (:question-set/name question-set)]
     [:table
      [:tr
       [:th "Question"]
       [:th "Points"]]
      (for [question (:question-set/questions question-set)]
        [:tr
         [:td
          [:a {:href (str "/question/" (:question/id question))}
           (:question/question-statement question)]]
         [:td (:question/points question)]])]]))


(defn no-assignement-form
  [permission-error]
  (when (contains? permission-error :not-assigned-to-question-set)
    (h/html
      [:p (str "ERROR: Sie haben keinen Zugriff auf diesen Test!")])))
