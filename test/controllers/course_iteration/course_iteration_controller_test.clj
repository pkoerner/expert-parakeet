(ns controllers.course-iteration.course-iteration-controller-test
  (:require [clojure.test :as t :refer [deftest testing]]
            [controllers.course-iteration.course-iteration-controller :as con :refer [submit-create-course-iteration-mockable]]
            [test-extensions :refer [test-with-check]]
            [clojure.spec.alpha :as s]
            [clojure.string :as string]))

(def ^:private opts {:clojure.spec.test.check/opts {:num-tests 200}})

(deftest test-create-course-iteration-get
  (testing "Autogenerated tests that create-course-iteration-get contains the post-destination."
    (test-with-check `con/create-course-iteration-get opts)))


(deftest test-submit-create-course-iteration-mockable
  (testing "Test that the db-add-function get's called with the correct values with different parameters."
    (let [test-request {:__anti-forgery-token ""
                        :multipart-params {"course-id" "123"
                                           "year" "2023"
                                           "semester" "WiSe"
                                           "question-set-ids" ["1"]}}
          db-add-fun-stub (fn [course-id year semester question-set-ids]
                            (t/is (s/valid? :course/id course-id))
                            (t/is (s/valid? :course-iteration/year year))
                            (t/is (s/valid? :course-iteration/semester semester))
                            (t/is (s/valid? (s/coll-of :question-set/id) question-set-ids)))]
      (doseq [course-id ["1" "50009"]
              year ["2023" "2024"]
              semester ["WiSe" "SoSe"]
              question-set-ids [[] ["1" "2" "3"]]]
        (submit-create-course-iteration-mockable
         (-> test-request
             (assoc-in [:multipart-params "course-id"] course-id)
             (assoc-in [:multipart-params "year"] year)
             (assoc-in [:multipart-params "semester"] semester)
             (assoc-in [:multipart-params "question-set-ids"] question-set-ids))
         db-add-fun-stub))))

  (testing "Test that the db-add-function is not called when the parameters are invalid. 
            And that the correct error message is displayed."
    (let [test-request {:__anti-forgery-token ""
                        :multipart-params {"course-id" "123"
                                           "year" "2023"
                                           "semester" "WiSe"
                                           "question-set-ids" ["1"]}}
          db-add-fun-stub (fn [_course-id _year _semester _question-set-ids]
                            (t/is false "The function to create a course-itration was called but shouldn't be!"))
          wrong-course-id ""
          wrong-year "-2023"
          wrong-semester "Sommer"
          wrong-question-set-ids [""]]

      (t/are [request expected-error]
             (string/includes? (submit-create-course-iteration-mockable request db-add-fun-stub)
                               expected-error)
        (assoc-in test-request [:multipart-params "course-id"] wrong-course-id)
        "Der ausgewählte Kurs war inkorrekt!"

        (assoc-in test-request [:multipart-params "year"] wrong-year)
        "Das ausgewählte Jahr war inkorrekt!"

        (assoc-in test-request [:multipart-params "semester"] wrong-semester)
        "Das ausgewählte Semester war inkorrekt!"

        (assoc-in test-request [:multipart-params "question-set-ids"] wrong-question-set-ids)
        "Das ausgewählte question-set-war nicht korrekt!"))))

(t/run-test test-submit-create-course-iteration-mockable)

