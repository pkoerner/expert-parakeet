(ns services.course-iteration-service.course-iteration-service
  (:require
    [clojure.spec.alpha :as s]
    [clojure.spec.test.alpha :as stest]
    [clojure.string :as string]
    [db]
    [services.course-iteration-service.p-course-iteration-service :refer [PCourseIterationService]]
    [views.course-iteration.create-course-iteration-view :as view]))


;; todo replace all direct db calls and inject repositories
(deftype CourseIterationService
  [])


(s/fdef create-course-iteration-impl
        :args (s/cat :self #(satisfies? PCourseIterationService %)
                     :course-id :course/id
                     :year :course-iteration/year
                     :semester :course-iteration/semester
                     :question-set-ids (s/coll-of :question-set/id))
        :ret (s/keys :req [:course-iteration/id
                           :course/id
                           :course-iteration/year
                           :course-iteration/semester
                           (s/coll-of :question-set/id)]))


(defn- create-course-iteration-impl
  [_ course-id year semester question-set-ids]
  (db/add-course-iteration-with-question-sets! course-id year semester question-set-ids))


(def ^:private validation-functions-with-error-msg
  {:course-iteration/course [[#(s/valid? :course/id %) "Der ausgewählte Kurs war inkorrekt!"]]
   :course-iteration/year [[#(s/valid? :course-iteration/year %) "Das ausgewählte Jahr war inkorrekt!"]]
   :course-iteration/semester [[#(s/valid? :course-iteration/semester %) "Das ausgewählte Semester war inkorrekt!"]]
   :course-iteration/question-sets [[#(s/valid? (s/coll-of :question-set/id) %) "Das ausgewählte question-set war nicht korrekt!"]]})


(s/fdef validate-course-iteration-impl
        :args (s/cat :self #(= PCourseIterationService (type %))
                     :course-id :course/id
                     :year :course-iteration/year
                     :question-set-ids (s/coll-of :question-set/id))
        :ret (s/map-of view/create-course-iteration-error-keys
                       string?))


(defn- validate-course-iteration-impl
  [_ course-id year semester question-set-ids]
  (reduce (fn [error-map [val error-key]]
            (let [error-to-display (reduce (fn [error-str [validation-fun error-msg]]
                                             (if (validation-fun val)
                                               error-str
                                               (string/join "\n" (filter seq [error-str error-msg]))))
                                           ""
                                           (validation-functions-with-error-msg error-key))]
              (if (seq error-to-display)
                (assoc error-map error-key error-to-display)
                error-map)))
          {}
          [[course-id :course-iteration/course]
           [year :course-iteration/year]
           [semester :course-iteration/semester]
           [question-set-ids :course-iteration/question-sets]]))


(extend CourseIterationService
  PCourseIterationService
  {:create-course-iteration create-course-iteration-impl
   :validate-course-iteration validate-course-iteration-impl})

