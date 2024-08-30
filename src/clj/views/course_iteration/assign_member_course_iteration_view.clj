(ns views.course-iteration.assign-member-course-iteration-view 
  (:require [hiccup.form :as hform]
            [hiccup2.core :as h]
            [ring.util.anti-forgery :refer [anti-forgery-field]]))

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
"Return a list view of the users, where the admin can choose which user to change their membership status "
  [course-id user-list] 
  (h/html 
   [:div 
    [:p "Choose which user you want to change their membership status:"]
    [:ul (for [user user-list]
           [:li [:a {:href (format "/assign-member-course/%s/%s" course-id (:user/id user))} 
                 (str (:user/github-id user))]])]]))


(defn show-user-roles-for-course-iteration-view
  "Shows html where it says which role the user currently has for a course and and a form
   containing a selection of roles the user can be changed to."
  [course-id user-id membership-role]
  (let [dict {:role/none "No Member"
              :role/corrector "Corrector"
              :role/student "Student"
              :role/lecturer "Lecturer"}]
    (h/html [:div
             [:h5 (format "Membership status of %s for course %s" user-id course-id)]
             [:p (format "Currently the user is a %s" (membership-role dict))]
             (hform/form-to
              {:enctype "multipart/form-data"}
              [:post (format "/assign-member-course/%s/%s" course-id user-id)]
              [:select#role {:name "role"}
               (hform/select-options [["No Membership" ":role/none"]
                                      ["Corrector" ":role/corrector"]
                                      ["Lecturer" ":role/lecturer"]
                                      ["Student" ":role/student"]])]
              [:br]
              [:input {:type "submit" :value "Update"}]
              (h/raw (anti-forgery-field)))])))
