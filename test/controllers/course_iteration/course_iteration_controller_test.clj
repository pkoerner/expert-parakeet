(ns controllers.course-iteration.course-iteration-controller-test
  (:require
    [clojure.spec.alpha :as s]
    [clojure.string :as string]
    [clojure.test :as t :refer [deftest testing]]
    [controllers.course-iteration.course-iteration-controller :refer
     [create-course-iteration-get submit-create-course-iteration!]]
    [db :refer [Database-Protocol]]
    [services.course-iteration-service.course-iteration-service :as cis :refer [->CourseIterationService]]
    [services.course-iteration-service.p-course-iteration-service :refer [PCourseIterationService
                                                                          validate-course-iteration]]
    [util.forms :refer [as-coll]]))


(deftest test-create-course-iteration-get
  (testing "When there are no courses, an error message is displayed."
    (let [res (create-course-iteration-get {}
                                           "post-destination"
                                           (fn [] [])
                                           (fn [] []))]
      (t/is (not (string/includes? res "form"))))))


(defn- stub-course-iteration-service
  [& {:keys [validate-course-iteration create-course-iteration]
      :or {validate-course-iteration (fn [& _] {})
           create-course-iteration (fn [& _] {})}}]
  (reify PCourseIterationService
    (validate-course-iteration
      [_self course-iteration-form-data]
      (validate-course-iteration course-iteration-form-data))

    (create-course-iteration
      [_self course-iteration]
      (create-course-iteration course-iteration))))


(deftest test-submit-create-course-iteration!
  (let [db-stub (reify Database-Protocol)]
    (testing "Test that the db-add-function get's called with the correct values with different parameters."
      (let [test-request {:__anti-forgery-token ""
                          :params {:course "123"
                                   :year "2023"
                                   :semester "winter"
                                   :question-sets ["1"]}}
            course-iteration-object {:course-iteration/semester :semester/winter
                                     :course-iteration/year 2023
                                     :course-iteration/course {:course/name "course"}}
            db-add-fun-stub (fn [{:course-iteration/keys [course year semester question-sets]}]
                              (t/is (s/valid? (s/keys :req [:course/id]) course))
                              (t/is (s/valid? :course-iteration/year year))
                              (t/is (s/valid? :course-iteration/semester semester))
                              (t/is (s/valid? (s/coll-of (s/keys :req [:question-set/id])) (as-coll question-sets)))
                              course-iteration-object)
            course-iteration-service (stub-course-iteration-service
                                       :validate-course-iteration (partial validate-course-iteration (->CourseIterationService db-stub))
                                       :create-course-iteration db-add-fun-stub)
            post-destination "S"]
        (doseq [course ["1" "50009"]
                year ["2023" "2024"]
                semester ["winter" "summer"]
                question-sets [[] ["1" "2" "3"]]]
          (submit-create-course-iteration!
            (-> test-request
                (assoc-in [:params :course] course)
                (assoc-in [:params :year] year)
                (assoc-in [:params :semester] semester)
                (assoc-in [:params :question-sets] question-sets))
            post-destination
            (fn [] [])
            (fn [] [])
            course-iteration-service))))

    (testing "Test that the db-add-function is not called when the parameters are invalid. 
            And that the correct error message is returned in the form."
      (let [test-request {:__anti-forgery-token ""
                          :params {:course "123"
                                   :year "2023"
                                   :semester "winter"
                                   :question-sets ["1"]}}
            db-add-fun-stub (fn [_course-iteration]
                              (t/is false "The function to create a course-iteration was called but shouldn't be!"))

            course-iteration-service (stub-course-iteration-service
                                       :validate-course-iteration (partial validate-course-iteration (->CourseIterationService db-stub))
                                       :create-course-iteration db-add-fun-stub)
            post-destination "S"
            wrong-course ""
            wrong-year "-2023"
            wrong-semester "Sommer"
            wrong-question-sets [""]]

        (t/are [request expected-error]
               (let [res (str (submit-create-course-iteration! request post-destination (fn [] []) (fn [] []) course-iteration-service))]
                 (string/includes? res expected-error))

          (assoc-in test-request [:params :course] wrong-course)
          "The given course was invalid"

          (assoc-in test-request [:params :year] wrong-year)
          "The course iteration year must be positive integer"

          (assoc-in test-request [:params :semester] wrong-semester)
          "The given course iteration semester was invalid"

          (assoc-in test-request [:params :question-sets] wrong-question-sets)
          "The given course iteration question sets were invalid")))))
