(ns db-test
  (:require
    [clojure.spec.alpha :as s]
    [clojure.test :as t :refer [deftest testing]]
    [db]))


;; (deftest test-db-config
;;   ())

(deftest question-tests
  (let [test-db db/create-database]
    (testing "get-all-questions of the dummy dataset"
      (let [res (db/get-all-questions test-db)
            reference-ids ["1" "2" "3" "4" "5" "6" "7" "8"]
            res-ids (sort (map #(:question/id %) res))]
        (t/is (= reference-ids res-ids))))
    (testing "get-all-question-categories of the dummy data"
      (let [res (sort (db/get-all-question-categories test-db))
            reference-categories (sort ["Cat2" "Cat1" "Cat3"])]
        (t/is (= res reference-categories))))
    (testing "get-question-by-id with id = 5"
      (let [res (db/get-question-by-id test-db "5")]
        (and (t/is (= (:question/id res) "5"))
             (t/is (s/valid? :question/multiple-choice-question res)))))
    (testing "get-question-by-id with invalid id = 42"
      (t/is (thrown-with-msg? clojure.lang.ExceptionInfo #"Nothing found for entity id" (db/get-question-by-id test-db "42"))))
    (testing "add-question! with valid question as input and check wether it contains in the db"
      (let [input-question {:question/type :question.type/single-choice
                            :question/question-statement "What is the answer to everything"
                            :question/possible-solutions ["21" "42"]
                            :question/single-choice-solution "42"
                            :question/points 1
                            :question/categories ["Cat1"]}
            _ (db/add-question! test-db input-question)
            question-ids (map #(:question/id %) (db/get-all-questions test-db))
            question-list (map #(select-keys (db/get-question-by-id test-db %) [:question/type
                                                                                :question/question-statement
                                                                                :question/possible-solutions
                                                                                :question/single-choice-solution
                                                                                :question/points
                                                                                :question/categories])
                               question-ids)]
        (t/is (some #(= % input-question) (vec question-list)))))
    (testing "add-question! with invalid question as input"
      (let [input-question {:question/question-statement "What is the answer to everything"
                            :question/possible-solutions ["21" "42"]
                            :question/single-choice-solution "42"
                            :question/points 1
                            :question/categories ["Cat1"]}]
        (t/is (thrown? clojure.lang.ArityException (db/add-question! test-db input-question)))))))


((deftest course-iteration-test
   (let [test-db (db/create-database)]
     (testing "get-all-course-iterations"))))
