(ns views.student-overview.student-overview
  (:require
   [hiccup2.core :as h]
   [clojure.spec.alpha :as s]
   [clojure.string :as string]))


(def no-course-iterations
  "Simple paragraph to display when the student has no course iterations"
  [:p "du scheinst keinen Kursen zugeordnet zu sein."])

(def no-question-sets
  "Simple paragraph to display when the student has no question sets for the course-iteration"
  [:p "noch keine Frageboegen fuer diesen Kurs verfuegbar."])

;; Layout-idea:
;; Course-iteration 1: (e.g. fkt-prog-SOM-22)
;;     question-set-1 | points | passed/failed-check | deadline | "inspect question set"
;;     question-set-2 | points | passed/failed-check | deadline | "inspect question set"
;; ("" means button)

(s/fdef display-course-iteration
  :args (s/cat :course-iteration :course-iteration)
  :ret #(instance? hiccup.util.RawString %))

(defn display-course-iteration
  "Creates a list of the course-iterations of the student.
   Each of the course-iterations contains a list of the question-sets
   unlocked for the student"
  [course-iteration]
  [:p
   [:h3 (str (:course/course-name
              (:course-iteration/course course-iteration)) " "
             (:course-iteration/year course-iteration) " "
             (:course-iteration/semester course-iteration))]
   [:ul
    (for [question-set (:course-iteration/question-sets course-iteration)]
      [:li [:table
            [:tbody
             [:tr
              [:td (str (:question-set/name question-set))]
              [:td (str (:question-set/achieved-points question-set)
                        "/"
                        (str (:question-set/max-points question-set))
                        " Points")]
              [:td (if (or (nil? (:question-set/achieved-points question-set))
                           (>= (:question-set/achieved-points question-set) (:question-set/passing-score question-set)))
                     "failed"
                     "passed")]
              [:td (str "deadline: " (:question-set/end question-set))]
              [:td [:a {:href "/question-set:id"} [:button "deatils"]]]]]]])]])


(s/fdef create-student-overview
  :args (s/cat :course-iterations (s/coll-of :course-iteration))
  :ret (s/and #(string/includes? % "Courses")
              #(instance? hiccup.util.RawString %)))

(defn create-student-overview
  [course-iterations]
  (h/html
   [:div
    [:h1 "Overview"]
    [:h2 "Courses:"]
    [:ul
     (for [c course-iterations]
       [:li (display-course-iteration c)])]]))




