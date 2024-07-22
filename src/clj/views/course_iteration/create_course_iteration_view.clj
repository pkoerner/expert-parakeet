(ns views.course-iteration.create-course-iteration-view
  (:require
    [clojure.spec.alpha :as s]
    [clojure.string :as string]
    [hiccup.form :as hform]
    [hiccup2.core :as h]
    [ring.util.anti-forgery :refer [anti-forgery-field]]
    [util.hiccup-extensions :refer [optional-error-display]]))


(def create-course-iteration-error-keys
  "Possible keys for which errors can be displayed in the `course-iteration-form`."
  #{:course-iteration/course :course-iteration/year :course-iteration/semester :course-iteration/question-sets})


(def no-courses
  "Simple paragaraph to display when there are no courses in the database."
  [:p "There needs to be a module present, to be able to create a course."])


(s/fdef course-iteration-form
        :args (s/cat :courses (s/coll-of (s/keys :req [:course/id :course/course-name]) :distinct true)
                     :question-sets (s/coll-of (s/keys :req [:question-set/id :question-set/name]) :distinct true)
                     :post-destination :general/non-blank-string
                     :kwargs (s/? (s/or :empty empty?
                                        :map (s/map-of create-course-iteration-error-keys
                                                       string?))))
        :ret #(instance? hiccup.util.RawString %)
        :fn (fn [spec-map]
              (let [{{:keys [courses question-sets post-destination]} :args
                     ret :ret} spec-map]
                (s/and (every? #(string/includes? (str ret) (:course/course-name %)) courses)
                       (every? #(string/includes? (str ret) (:question-set/name %)) question-sets)
                       #(string/includes? ret post-destination)))))


(defn course-iteration-form
  "Returns an html-form for the creation of a course-iteration.
   The form data is sent to the provided `post-destination`.
   
   Fields of the response are: [courses, year, semester, question-sets].
   
   It can display error values if they are provided in a map behind the optional `:errors` param
   (see specs)."
  [courses question-sets post-destination & {:keys [errors] :or {errors {}}}]
  (letfn [(course-to-option
            [course]
            [(:course/course-name course) (:course/id course)])]
    (h/html
      (hform/form-to
        {:enctype "multipart/form-data"}
        [:post post-destination]

        [:div
         (optional-error-display :course-iteration/course errors)
         [:label {:for "courses"} "Course choices"] [:br]
         [:select#courses {:name "course-id"}
          (hform/select-options (mapv course-to-option courses))]]

        [:div
         (optional-error-display :course-iteration/year errors)
         [:label {:for "year"} "Jahr"] [:br]
         [:input#year {:name "year"
                       :type "number"
                       :min "1900"
                       :max "2099"
                       :step "1"
                       :value "2024"}]]

        [:div
         (optional-error-display :course-iteration/semester errors)
         [:label {:for "semester"} "Semester"] [:br]
         [:select#semester {:name "semester"}
          (hform/select-options [["Summer" "SuSe"]
                                 ["Winter" "WiSe"]])]]

        [:div
         (optional-error-display :course-iteration/question-sets errors)
         [:label {:for "question-sets"} "Tests"] [:br]
         [:ul
          (for [question-set question-sets]
            [:li [:input {:name "question-set-ids"
                          :type "checkbox"
                          :value (:question-set/id question-set)}
                  (:question-set/name question-set)]])]]


        (h/raw (anti-forgery-field))
        (hform/submit-button "submit")))))


(s/fdef submit-success-view
        ;; todo rewrite this to not test the html
        :args (s/cat :semester :course-iteration/semester
                     :year :course-iteration/semester)
        :ret (s/and #(string/includes? % "successfully")
                    #(instance? hiccup.util.RawString %)))


(defn submit-success-view
  "Returns a div with a success messag displaying the `semester` and the `year` of the created course-iteration."
  [semester year]
  (h/html
    [:div
     [:p "The course for the " semester
      " in the year " year
      " was successfully created!\n"]]))
