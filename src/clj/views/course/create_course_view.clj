(ns views.course.create-course-view
  (:require
    [clojure.spec.alpha :as s]
    [clojure.string :as string]
    [hiccup.form :as hform]
    [hiccup2.core :as h]
    [ring.util.anti-forgery :refer [anti-forgery-field]]
    [util.hiccup-extensions :refer [optional-error-display]]))


(s/fdef course-form
        :args (s/cat :post-destination :general/non-blank-string
                     :kwargs (s/cat :errors (s/? #{:errors})
                                    :error-map (s/? (s/map-of keyword? string?))
                                    :course-data (s/? #{:course-data})
                                    :course-data-map (s/? map?)))
        :ret #(instance? hiccup.util.RawString %))


(defn create-course-form
  "Returns a html-form for course creation.
   Field of the response is: [name].
   It can display errors provided in a map behind the optional `:errors` parameter
   and pre-populate the form with the data in the optional `:course-data` parameter."
  [post-destination & {:keys [errors course-data] :or {errors {} course-data {}}}]
  (h/html
    (hform/form-to
      [:post post-destination]

      [:div
       (hform/label {:class "form-label"} "name" "Course name")
       (optional-error-display :course/course-error errors)
       (optional-error-display :course/course-already-existed errors)
       (hform/text-field {:class "form-control" :required true} "name" (get course-data :name))]

      (h/raw (anti-forgery-field))
      (hform/submit-button {:class "btn btn-primary"} "Submit"))))


(s/fdef submit-success-view
        :args (s/cat :course :course/name)
        :ret (s/and #(string/includes? % "success")
                    #(instance? hiccup.util.RawString %)))


(defn submit-success-view
  [{:course/keys [name]}]
  (h/html
    [:div
     [:p "The course " name " was successfully created!"]]))
