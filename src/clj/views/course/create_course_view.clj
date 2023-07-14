(ns views.course.create-course-view
  (:require
    [hiccup.form :as hform]
    [hiccup2.core :as h]
    [ring.util.anti-forgery :refer [anti-forgery-field]]))


(def create-course-errors
  "Possible errors to display in the course-form."
  {:course-error "Der ausgewählte Name war inkorrekt!"
   :course-already-existed "Der angegebene Fachname wird bereits verwendet!"})


(defn course-form
  "Returns a html-form for course creation.
   Field of the response is: [course].
   It can display errors provided in a map behind the optional `:errors` parameter."
  [post-destination & {:keys [errors] :or {errors {}}}]
  (h/html
    (hform/form-to
      {:enctype "multipart/form-data"}
      [:post post-destination]

      [:div
       (when (errors :course-error)
         [:div [:span {:style "color: red;"} (errors :course-error)]])
       (when (errors :course-already-existed)
         [:div [:span {:style "color: red;"} (errors :course-already-existed)]])
       [:label {:for "course"} "Fachname:"] [:br]
       [:input#course {:name "course"
                       :type "text"
                       :value "Neues Fach"}]]

      (h/raw (anti-forgery-field))
      (hform/submit-button "submit"))))


(defn submit-success-view
  [course]
  (h/html
    [:div
     [:p "Das Fach " course " wurde erfolgreich erstellt.!\n"]]))
