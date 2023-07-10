(ns util.spec-functions-test
  (:require [clojure.spec.alpha :as s]
            [clojure.test :refer [deftest testing]]
            [clojure.test :as t]
            [util.spec-functions :refer [map-spec]]
            [domain.spec]))


(deftest test-map-spec-works-for-a-map
  (let [test-spec (map-spec {"course-id" :course/id
                             "year" (s/and string? #(s/valid? :course-iteration/year (read-string %)))
                             "semester" :course-iteration/semester
                             "question-set-ids" (s/coll-of :question-set/id)})
        valid-map {"course-id" "123"
                   "year" "2023"
                   "semester" "WiSe"
                   "question-set-ids" ["1"]}]
    (testing "Testing that the provided spec for a map reports `true` with valid data."
      (t/is (s/valid? test-spec valid-map)))

    (testing "Testing that the provided spec for a map reports `false` when key is missing."
      (t/is (not (s/valid? test-spec (dissoc valid-map "year")))))

    (testing "Testing that the provided spec for a map reports `false` when a value does not adhere to the spec."
      (t/is (not (s/valid? test-spec (assoc valid-map "course-id" nil)))))

    (testing "Testing that the provided spec for a map reports `false` when an additional key is present."
      (t/is (not (s/valid? test-spec (assoc valid-map "not-speced-key" "test")))))))
