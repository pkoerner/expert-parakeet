(ns views.course-iteration.create-course-iteration-view
  (:require
    [clojure.spec.alpha :as s]
    [clojure.string :as string]
    [hiccup.form :as hform]
    [hiccup2.core :as h]
    [ring.util.anti-forgery :refer [anti-forgery-field]]))


(def create-course-iteration-errors
  {:course-error "Der ausgewählte Kurs war inkorrekt!"
   :year-error "Das ausgewählte Jahr war inkorrekt!"
   :semester-error "Das ausgewählte Semester war inkorrekt!"
   :question-set-error "Das ausgewählte question-set-war nicht korrekt!"})


(def no-courses [:p "Es muss erst ein Fach erstellt werden bevor ein Kurs erstellt werden kann!"])


(defn- optional-error
  [key dict]
  (let [course-error (dict key)]
    (when course-error [:div [:span {:style "color: red;"} course-error]])))


(def ^:private create-course-iteration-errors-spec
  (into {} (map (fn [[key _]] [key string?]) create-course-iteration-errors)))


(s/fdef course-iteration-form
        :args (s/cat :courses (s/coll-of (s/keys :req [:course/id :course/course-name]) :distinct true)
                     :question-sets (s/coll-of (s/keys :req [:question-set/id :question-set/name]) :distinct true)
                     :post-destination :general/non-blank-string
                     :kwargs (s/? (s/map-of (set (keys create-course-iteration-errors-spec))
                                            string?)))
        :ret #(instance? hiccup.util.RawString %)
        :fn (fn [spec-map]
              (let [{{:keys [courses question-sets post-destination]} :args
                     ret :ret} spec-map]
                (s/and (every? #(string/includes? (str ret) (:course/course-name %)) courses)
                       (every? #(string/includes? (str ret) (:question-set/name %)) question-sets)
                       #(string/includes? ret post-destination)))))


(defn course-iteration-form
  "Returns a html-form for the creation of a course-iteration.
   The request is sent to the provided `post-destination`.
   
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
         (optional-error :course-error errors)
         [:label {:for "courses"} "Fach auswahl:"] [:br]
         [:select#courses {:name "course-id"}
          (hform/select-options (mapv course-to-option courses))]]

        [:div
         (optional-error :year-error errors)
         [:label {:for "year"} "Jahr"] [:br]
         [:input#year {:name "year"
                       :type "number"
                       :min "1900"
                       :max "2099"
                       :step "1"
                       :value "2024"}]]

        [:div
         (optional-error :semester-error errors)
         [:label {:for "semester"} "Semester"] [:br]
         [:select#semester {:name "semester"}
          (hform/select-options [["Sommer" "SoSe"]
                                 ["Winter" "WiSe"]])]]

        [:div
         (optional-error :question-set-error errors)
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
        :args (s/cat :semester :course-iteration/semester
                     :year :course-iteration/semester)
        :ret (s/and #(string/includes? % "erfolg")
                    #(instance? hiccup.util.RawString %)))


(defn submit-success-view
  "Returns a div with a success messag displaying the `semester` and the `year` of the created course-iteration."
  [semester year]
  (h/html
    [:div
     [:p "Der Kurs für das " semester
      " im Jahr " year
      " wurde erfolgreich für das Fach erstellt!\n"]]))


