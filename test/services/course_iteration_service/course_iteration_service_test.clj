(ns services.course-iteration-service.course-iteration-service-test
  (:require
    [clojure.test :as t :refer [deftest testing]]
    [db :refer [Database-Protocol]]
    [services.course-iteration-service.course-iteration-service :refer [->CourseIterationService]]
    [services.course-iteration-service.p-course-iteration-service :refer [create-course-iteration-registration]]))


(deftest test-create-course-iteration-registration
  (testing "CourseIterationService implementation calls database query"
    (let [was-called (atom false)
          user-id-param "1"
          course-iteration-id-param "1"
          db-stub (reify Database-Protocol
                    (add-course-iteration-registration!
                      [_this course-iteration-id user-id]
                      (swap! was-called (constantly true))
                      (t/is (= user-id user-id-param))
                      (t/is (= course-iteration-id course-iteration-id-param))
                      {}))
          course-iteration-service (->CourseIterationService db-stub)]
      (create-course-iteration-registration course-iteration-service
                                            course-iteration-id-param
                                            user-id-param)
      (t/is @was-called))))
