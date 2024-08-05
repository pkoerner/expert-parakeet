(ns util.spec-functions-test
  (:require
    [clojure.edn]
    [clojure.spec.alpha :as s]
    [clojure.test :as t :refer [deftest testing]]
    [domain.spec]
    [util.spec-functions :refer [map-spec]]))


(deftest test-map-spec-works-for-a-map
  (let [test-spec (map-spec {"course-id" :course/id
                             "year" (s/and string? #(s/valid? :course-iteration/year (clojure.edn/read-string %)))
                             "semester" :course-iteration/semester
                             "question-set-ids" (s/coll-of :question-set/id)})
        valid-map {"course-id" "123"
                   "year" "2023"
                   "semester" :semester/winter
                   "question-set-ids" ["1"]}]
    (testing "Testing that the provided spec for a map reports `true` with valid data."
      (t/is (s/valid? test-spec valid-map)))

    (testing "Testing that the provided spec for a map reports `false` when key is missing."
      (t/is (not (s/valid? test-spec (dissoc valid-map "year")))))

    (testing "Testing that the provided spec for a map reports `false` when a value does not adhere to the spec."
      (t/is (not (s/valid? test-spec (assoc valid-map "course-id" nil)))))

    (testing "Testing that the provided spec for a map reports `false` when an additional key is present."
      (t/is (not (s/valid? test-spec (assoc valid-map "not-speced-key" "test")))))

    (let [test-spec-with-opt (map-spec {"req-key" string?} :opt {"opt-key" string?})
          test-spec-only-opt (map-spec {} :opt {"opt-key" string?})]
      (testing "Testing map-spec with optional keys. Keys are accepted."
        (t/is (s/valid? test-spec-with-opt {"req-key" "valid-val" "opt-key" "valid-val"})))

      (testing "Testing map-spec with optional keys. Optional keys are tested."
        (t/is (not (s/valid? test-spec-with-opt {"req-key" "valid-val" "opt-key" :invalid-val}))))

      (testing "Testing map-spec with optional keys. Optional keys are not required."
        (t/is (s/valid? test-spec-with-opt {"req-key" "valid-val"})))

      (testing "Testing map-spec with optional keys. Not speced keys are not accepted."
        (t/is (not (s/valid? test-spec-with-opt {"req-key" "valid-val"
                                                 "unexpected-key" "unexpected-val"}))))

      (testing "Testing map-spec with only optional keys. Optional key is accepted."
        (t/is (s/valid? test-spec-only-opt {"opt-key" "valid-val"}))))))
