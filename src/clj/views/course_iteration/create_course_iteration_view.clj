(ns views.course-iteration.create-course-iteration-view
  (:require
    [clojure.spec.alpha :as s]
    [hiccup.form :as hform]
    [hiccup2.core :as h]
    [ring.util.anti-forgery :refer [anti-forgery-field]]
    [util.forms :refer [as-coll]]
    [util.hiccup-extensions :refer [optional-error-display]]))


(s/fdef no-courses
        :args (s/cat)
        :ret #(instance? hiccup.util.RawString %))


(defn no-courses
  "Simple paragaraph to display when there are no courses in the database."
  []
  [:p "There needs to be a module present, to be able to create a course."])


(s/fdef course-iteration-form
        :args (s/cat :courses (s/coll-of (s/keys :req [:course/id :course/name]) :distinct true)
                     :question-sets (s/coll-of (s/keys :req [:question-set/id :question-set/name]) :distinct true)
                     :post-destination :general/non-blank-string
                     :kwargs (s/cat :errors (s/? #{:errors})
                                    :error-map (s/? (s/map-of keyword? string?))
                                    :course-iteration-data (s/? #{:course-iteration-data})
                                    :course-iteration-data-map (s/? map?)))
        :ret #(instance? hiccup.util.RawString %))


(defn course-iteration-form
  "Returns an html-form for the creation of a course-iteration.
   The form data is sent to the provided `post-destination`.
   
   Fields of the response are: [course, year, semester, question-sets].
   
   It can display error values if they are provided in a map behind the optional `:errors` param and pre-populate the form with the optional `:course-iteration-data` param"
  [courses question-sets post-destination & {:keys [errors course-iteration-data] :or {errors {} course-iteration-data {}}}]
  (letfn [(course-to-option
            [course]
            [(:course/name course) (:course/id course)])]
    (h/html
      (hform/form-to
        [:post post-destination]

        [:div
         (hform/label {:class "form-label"} "course" "Course")
         (optional-error-display :course errors)
         (hform/drop-down {:class "form-select" :required true} "course" (mapv course-to-option courses) (get course-iteration-data :course))]

        [:div
         (hform/label {:class "form-label"} "year" "Year")
         (optional-error-display :year errors)
         [:input {:id "year"
                  :class "form-control"
                  :name "year"
                  :type "number"
                  :min "2000"
                  :max "2100"
                  :step "1"
                  :required true
                  :value (get course-iteration-data :year "2024")}]]

        [:div
         (hform/label {:class "form-label"} "semester" "Semester")
         (optional-error-display :semester errors)
         (hform/drop-down {:class "form-select" :required true} "semester" [["Summer" "summer"] ["Winter" "winter"]] (get course-iteration-data :semester))]

        [:fieldset
         [:legend {:class "form-label"} "Question sets"]
         (optional-error-display :question-sets errors)
         (let
           [selected-question-sets (set (as-coll (get course-iteration-data :question-sets)))]
           [:div {:class "list-group"}
            (map-indexed (fn [idx question-set]
                           (let [input-id (str "question-set-input-" idx)
                                 value (get question-set :question-set/id)
                                 text (get question-set :question-set/name)]
                             [:div {:class "list-group-item p-2 d-flex align-items-center"}
                              [:div {:class "form-check"}
                               [:input {:class "form-check-input me-2"
                                        :id input-id
                                        :type "checkbox"
                                        :name "question-sets"
                                        :value value
                                        :checked (contains? selected-question-sets value)}]
                               [:label {:class "form-check-label" :for input-id} text]]]))
                         question-sets)])]

        (h/raw (anti-forgery-field))
        (hform/submit-button {:class "btn btn-primary"} "Submit")))))


(s/fdef submit-success-view
        :args (s/cat :course-iteration (s/keys :req [:course-iteration/year
                                                     :course-iteration/semester]))
        :ret #(instance? hiccup.util.RawString %))


(defn submit-success-view
  "Returns a div with a success message displaying the `semester` and the `year` of the created course-iteration."
  [{:course-iteration/keys [semester year]}]
  (h/html
    [:div
     [:p "The course iteration for the " semester
      " in the year " year
      " was successfully created!\n"]]))
