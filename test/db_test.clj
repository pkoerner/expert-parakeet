(ns db-test
  (:require
   [clojure.spec.alpha :as s]
   [clojure.test :as t :refer [deftest testing]]
   [clojure.test.check.generators :as gen]
   [db]))


;; (deftest test-db-config
;;   ())

(deftest question-tests
  (let [test-db db/create-database]
    (testing "get-all-question-ids of the dummy dataset"
      (let [res (db/get-all-question-ids test-db)
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
      (t/is (thrown-with-msg?
             clojure.lang.ExceptionInfo
             #"Nothing found for entity id [:question-set/id \W 42 \W]"
             (db/get-question-by-id test-db "42"))))
    (testing "add-question! with valid question as input and check wether it contains in the db"
      (let [input-question {:question/type :question.type/single-choice
                            :question/question-statement "What is the answer to everything"
                            :question/possible-solutions ["21" "42"]
                            :question/single-choice-solution "42"
                            :question/points 1
                            :question/categories ["Cat1"]}
            _ (db/add-question! test-db input-question)
            question-ids (map #(:question/id %) (db/get-all-question-ids test-db))
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
        (t/is (thrown? clojure.lang.ArityException (db/add-question! test-db input-question)))))
    ;; does not work depending on the input. Example: input categories: "234", "easa", "123", output in question-list: "123", "234", "easa"
    ;; (testing "add-question! with generated questions"
    ;;   (let [input-question (first (map #(select-keys % [:question/type
    ;;                                                     :question/question-statement
    ;;                                                     :question/evaluation-criteria
    ;;                                                     :question/points
    ;;                                                     :question/categories])
    ;;                                    (gen/sample (gen/not-empty (s/gen :question/question)) 1)))
    ;;         _ (db/add-question! test-db input-question)
    ;;         question-ids (map #(:question/id %) (db/get-all-question-ids test-db))
    ;;         question-list (map #(select-keys (db/get-question-by-id test-db %) [:question/type
    ;;                                                                             :question/points
    ;;                                                                             :question/question-statement
    ;;                                                                             :question/categories
    ;;                                                                             :question/evaluation-criteria])
    ;;                            question-ids)]
    ;;     (t/is (some #(= % input-question) (vec question-list)))))
    ))


(deftest course-iteration-test
  (let [test-db db/create-database]
    (testing "get-all-course-iterations of dummy data"
      (let [res (db/get-all-course-iterations test-db)
            reference-ids ["1", "2"]
            res-ids (sort (map #(:course-iteration/id %) res))]
        (t/is (= reference-ids res-ids))))
    (testing "get-course-iterations-of-course programming 1"
      (let [course-id "1"
            res (db/get-course-iterations-of-course test-db course-id)
            reference-ids ["2"]
            res-ids (sort (map #(:course-iteration/id %) res))]
        (t/is (= reference-ids res-ids))))
    (testing "get-course-iterations-of-course specialization functional programming clojure"
      (let [course-id "0"
            res (db/get-course-iterations-of-course test-db course-id)
            reference-ids ["1"]
            res-ids (sort (map #(:course-iteration/id %) res))]
        (t/is (= reference-ids res-ids))))
    (testing "get-course-iterations-of-course with invalid course-id"
      (let [course-id "lol"]
        (t/is (thrown-with-msg?
               clojure.lang.ExceptionInfo
               #"Nothing found for entity id [:course/id \W lol \W ]"
               (db/get-course-iteration-by-id test-db course-id)))))
    (testing "get-course-iteration-by-id with id = 1"
      (let [course-iteration-id "1"
            res (db/get-course-iteration-by-id test-db course-iteration-id)]
        (and (t/is (= (:course-iteration/id res) "1"))
             (t/is (= (:course-iteration/semester res) "WiSe"))
             (t/is (= (:course-iteration/year res) 2022)))))
    (testing "get-course-iteration-by-id with id = 2"
      (let [course-iteration-id "2"
            res (db/get-course-iteration-by-id test-db course-iteration-id)]
        (and (t/is (= (:course-iteration/id res) "2"))
             (t/is (= (:course-iteration/semester res) "SoSe"))
             (t/is (= (:course-iteration/year res) 2020)))))
    (testing "get-course-iteration-by-id with invalid id = 42"
      (t/is (thrown-with-msg?
             clojure.lang.ExceptionInfo
             #"Nothing found for entity id [:course-iteration/id \W 42\W ]"
             (db/get-course-iteration-by-id test-db "42"))))
    (testing "add-course-iteration-with-question-sets! with valid course-iteration as input and check wether it contains in the db"
      (let [course-id "0"
            course-iteration-year 1999
            course-iteration-semester "SoSe"
            course-iteration-question-sets [3 1]
            _ (db/add-course-iteration-with-question-sets!
               test-db
               course-id
               course-iteration-year
               course-iteration-semester
               course-iteration-question-sets)
            course-iterations (map #(select-keys % [:course-iteration/semester
                                                    :course-iteration/year])
                                   (db/get-course-iterations-of-course test-db course-id))]
        (t/is (some #(= % {:course-iteration/semester "SoSe" :course-iteration/year 1999}) course-iterations))))
    (testing "add-course-iteration-with-question-sets! with invalid question-set as input"
      (let [course-id "1"
            course-iteration-year 1999
            course-iteration-semester "SoSe"
            course-iteration-question-sets ["lol"]]
        (t/is (thrown-with-msg?
               clojure.lang.ExceptionInfo
               #"Nothing found for entity id [:question-set/id \W lol \W]"
               (db/add-course-iteration-with-question-sets!
                test-db
                course-id
                course-iteration-year
                course-iteration-semester
                course-iteration-question-sets)))))
    (testing "add-course-iteration-with-question-sets! with invalid course-id as input"
      (let [course-id "5"
            course-iteration-year 1999
            course-iteration-semester "SoSe"
            course-iteration-question-sets [3]]
        (t/is (thrown-with-msg?
               clojure.lang.ExceptionInfo
               #"Nothing found for entity id [:question-set/id \W lol \W]"
               (db/add-course-iteration-with-question-sets!
                test-db
                course-id
                course-iteration-year
                course-iteration-semester
                course-iteration-question-sets)))))
    ;;no test for add-course-iteration! because it only uses add-course-iteration-with-question-sets! with an empty set
    (testing "get-course-iterations-of-student with valid student-id"
      (let [user-id "0"
            res (db/get-course-iterations-of-student test-db user-id)
            course-iteration-ids (map #(:course-iteration/id %) res)
            course-iterations-content (map #(vals %) res)]
        (and (t/is (= course-iteration-ids '("1" "2")))
             (t/is (= course-iterations-content  '(("1"
                                                    2022
                                                    "WiSe"
                                                    #:course{:course-name "Specialization Functional Programming: Clojure"}
                                                    [#:question-set{:id "1",
                                                                    :name "Test 01: Generative Testing",
                                                                    :questions [#:question{:id "1", :points 3}
                                                                                #:question{:id "3", :points 2}
                                                                                #:question{:id "4", :points 1}
                                                                                #:question{:id "5", :points 1}]}
                                                     #:question-set{:id "3",
                                                                    :name "Test 00: Alien",
                                                                    :questions [#:question{:id "7", :points 1}
                                                                                #:question{:id "8", :points 1}]}])
                                                   ("2"
                                                    2020
                                                    "SoSe"
                                                    #:course{:course-name "Programming 1"}
                                                    [#:question-set{:id "2",
                                                                    :name "Week 1:",
                                                                    :questions [#:question{:id "2", :points 3}
                                                                                #:question{:id "6", :points 1}]}])))))))
    (testing "get-course-iterations-of-student with invalid student-id"
      (t/is (thrown-with-msg?
             clojure.lang.ExceptionInfo
             #"Nothing found for entity id [:course-iteration/id \W 42\W ]"
             (db/get-course-iteration-by-id test-db "42"))))))
