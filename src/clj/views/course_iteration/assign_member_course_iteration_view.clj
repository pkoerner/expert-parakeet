(ns views.course-iteration.assign-member-course-iteration-view 
  (:require [hiccup2.core :as h]))

(defn list-course-iteration-view
  "Returns a rendered view of a list of course-iterations linking to" 
  [course-iterations]
  (h/html 
   [:div
    [:p "Which course should members be added?"]
    [:ul (for [ci course-iterations]
           [:li [:a {:href (format "/assign-member-course/%s" (:course-iteration/id ci))}
                (format "%s" (:course-iteration/id ci))]])]]))

(defn create-user-list-view
  "TODO: documenatkion" 
  [course-id user-list] 
  (h/html 
   [:div 
    [:p "Choose which user you want to change their membership status:"]
    [:ul (for [user user-list]
           [:li [:a {:href (format "/assign-member-course/%s/%s" course-id (:user/id user))} 
                 (str (:user/github-id user))]])]]))
