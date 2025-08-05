(ns views.question.questions-overview-view
  (:require [hiccup2.core :as h]
            [util.hiccup-extensions :refer [optional-error-display]]))

(defn questions-overview
  [questions course-map]
  (h/html
    [:div.container
     [:h1 "Questions"]
     [:table.table.table-striped
      [:thead
       [:tr
        [:th "ID"]
        [:th "Statement"]
        [:th "Course"]
        [:th "Action"]]]
      [:tbody
       (for [q questions]
         (let [course-id (-> q :question/course :course/id)
               course-name (get course-map course-id "Unknown Course")]
           [:tr
            [:td (:question/id q)]
            [:td (:question/statement q)]
            [:td course-name]
            [:td
             [:a.btn.btn-sm.btn-outline-primary 
               {:href (str "/question/" (:question/id q))} 
               "show"]]]))]]]))