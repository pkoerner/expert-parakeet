(ns services.course-service.course-service
  (:require
    [clojure.spec.alpha :as s]
    [clojure.string :as str]
    [db]
    [services.course-service.p-course-service :refer [PCourseService]]
    [util.forms :refer [validate-form-data]]))


;; todo replace all direct db calls and inject repositories
(deftype CourseService
  [db])


(s/fdef get-all-courses
        :args (s/cat :self #(satisfies? PCourseService %))
        :ret (s/coll-of (s/keys :req [:course/id :course/name])))


(defn get-all-courses
  [this]
  (db/get-all-courses (.db this)))


(s/fdef create-course-impl
        :args (s/cat :self #(satisfies? PCourseService %)
                     :course (s/keys :req [:course/name]))
        :ret :course/course)


(defn- create-course-impl
  [this course]
  (db/add-course! (.db this) course))


(s/fdef validate-course-impl
        :args (s/cat :self #(= PCourseService (type %))
                     :course-form-data map?)
        :ret (s/or :success (s/keys :req [:course/name])
                   :error (s/and map?
                                 #(contains? % :errors))))


(def ^:private course-validators
  "List of validator/parsing functions for courses.
   Each element is a tuple containing the form data key and
   a function which takes the currently parsed course result and the value that is saved in the form data (may be nil).
   The validator function either returns an error of the form `{:error \"message\"}` or course fields that get merged with the current result.
   We are using a vector and not a map to preserve the iteration order!"
  [[:name (fn [this _ value]
            (let [parsed-value (-> value (str) (str/trim))]
              (cond
                (not (s/valid? :course/name parsed-value)) {:error "The course name must be a non-empty string"}
                (let [courses (db/get-all-courses (.db this))
                      courses-with-same-name (filter (fn [course] (= parsed-value (course :course/name))) courses)]
                  (seq courses-with-same-name)) {:error "The given course name already exists"}
                :else {:course/name parsed-value})))]])


(extend CourseService
  PCourseService
  {:get-all-courses get-all-courses
   :create-course create-course-impl
   :validate-course (partial validate-form-data course-validators)})
