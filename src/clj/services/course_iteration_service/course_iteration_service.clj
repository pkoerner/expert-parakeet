(ns services.course-iteration-service.course-iteration-service
  (:require
    [clojure.edn :as edn]
    [clojure.spec.alpha :as s]
    [db]
    [domain]
    [services.course-iteration-service.p-course-iteration-service :refer [PCourseIterationService]]
    [util.forms :refer [as-coll validate-form-data]]))


;; todo replace all direct db calls and inject repositories
(deftype CourseIterationService
  [db])


;; TODO: the spec for the course-iteration argument is incorrect, must not include :course-iteration/id
(s/fdef create-course-iteration-impl
        :args (s/cat :self #(satisfies? PCourseIterationService %)
                     :course-iteration :course-iteration/course-iteration)
        :ret :course-iteration/course-iteration)


(defn- create-course-iteration-impl
  [this course-iteration]
  (db/add-course-iteration! (.db this) course-iteration))


(def ^:private course-iteration-validators
  "List of validator/parsing functions for course iterations.
   Each element is a tuple containing the form data key and
   a function which takes the currently parsed course iteration result and the value that is saved in the form data (may be nil).
   The validator function either returns an error of the form `{:error \"message\"}` or course iteration fields that get merged with the current result.
   We are using a vector and not a map to preserve the iteration order!"
  [[:course (fn [_ _ value]
              (let [parsed-value (-> value
                                     (str)
                                     ((fn [id] {:course/id id})))]
                (if (s/valid? (s/keys :req [:course/id]) parsed-value)
                  {:course-iteration/course parsed-value}
                  {:error "The given course was invalid"})))]
   [:year (fn [_ _ value]
            (let [parsed-value (-> value (str) (edn/read-string))]
              (if (s/valid? :course-iteration/year parsed-value)
                {:course-iteration/year parsed-value}
                {:error "The course iteration year must be positive integer"})))]
   [:semester (fn [_ _ value]
                (let [parsed-value (keyword "semester" (if (keyword? value)
                                                         (name value)
                                                         (str value)))]
                  (if (s/valid? :course-iteration/semester parsed-value)
                    {:course-iteration/semester parsed-value}
                    {:error "The given course iteration semester was invalid"})))]
   [:question-sets (fn [_ _ value]
                     (let [parsed-values (->> value
                                              (as-coll)
                                              (map str)
                                              (mapv (fn [id] {:question-set/id id})))]
                       (if (s/valid? (s/coll-of (s/keys :req [:question-set/id])) parsed-values)
                         {:course-iteration/question-sets parsed-values}
                         {:error "The given course iteration question sets were invalid"})))]])


(s/fdef get-all-question-sets
        :args (s/cat :self #(satisfies? PCourseIterationService %)
                     :user-gihub-id :user/github-id)
        :ret (s/coll-of (s/keys :req [:question-set/id])))


(defn- get-all-course-iterations-for-user
  [this user-github-id]
  (let [user-id (:user/id (db/get-user-by-github-id (.db this) user-github-id))]
    (domain/course-iterations-with-total-points
      (db/get-course-iterations-of-student (.db this) user-id)
      (partial db/get-graded-answers-of-question-set (.db this) user-id))))


(extend CourseIterationService
  PCourseIterationService
  {:create-course-iteration create-course-iteration-impl
   :validate-course-iteration (partial validate-form-data course-iteration-validators)
   :get-all-course-iterations-for-user get-all-course-iterations-for-user})
