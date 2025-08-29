(ns views.course-iteration.registration-view
  (:require
    [hiccup.form :as hform]
    [hiccup2.core :as h]
    [ring.util.anti-forgery :refer [anti-forgery-field]]))


(defn- semester-diplay
  [semester]
  (case semester
    :semester/summer "Summer"
    :semester/winter "Winter"))


(defn- is-user-registered
  [user-id course-iteration]
  (some #(= (:user/id %) user-id) (:course-iteration/registrations course-iteration)))


(defn registration-get
  "Returns an html form, used to register for iterations of a course.
   Iterations the user has already registered for are greyed out"
  [post-destination user-id all-course-iterations]
  (h/html
    [:div
     [:ul {:class "list-group"}
      (for [c all-course-iterations]
        [:li {:class "list-group-item d-flex align-items-center justify-content-between"}
         [:div {:class "row"}
          [:span {:class "fs-4"} (-> c :course-iteration/course :course/name)]
          [:span {:class "fs-6 text-secondary"}
           (-> c :course-iteration/semester semester-diplay)
           " "
           (-> c :course-iteration/year str)]]
         (hform/form-to
           [:post post-destination]
           (h/raw (anti-forgery-field))
           (hform/hidden-field "course-iteration-id" (-> c :course-iteration/id))
           (if (not (is-user-registered user-id c))
             (hform/submit-button {:class "btn btn-primary"} "Register")
             (hform/submit-button {:class "btn btn-primary disabled"} "Registered")))])]]))
