(ns db-test
  (:require
    [clojure.spec.alpha :as s]
    [clojure.string :as string]
    [clojure.test :as t :refer [deftest testing]]
    [clojure.test.check.generators :as gen]
    [datahike.api :as d]
    [db]
    [db.dummy-data :as dummy-data]
    [db.schema :refer [db-schema]]))


(def generator-sample-size 10)


(defn -create-test-db
  [id]
  (let [_ (d/create-database {:store {:backend :mem
                                      :id id}
                              :initial-tx db-schema})
        test-db-conn (d/connect {:store {:backend :mem
                                         :id id}
                                 :initial-tx db-schema})
        _ (d/transact test-db-conn dummy-data/dummy-data)
        test-db (db/->Database test-db-conn)]
    test-db))


(deftest question-tests
  (let [test-db (-create-test-db "question-test-db")]
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
             (t/is (s/valid? :question/multiple-choice-question (select-keys res [:question/id
                                                                                  :question/type
                                                                                  :question/statement
                                                                                  :question/max-points
                                                                                  :question/possible-solutions
                                                                                  :question/multiple-choice-solution
                                                                                  :question/categories]))))))
    (testing "get-question-by-id with invalid id = 42"
      (t/is (thrown-with-msg?
              clojure.lang.ExceptionInfo
              #"Nothing found for entity id [:question-set/id \W 42 \W]"
              (db/get-question-by-id test-db "42"))))
    (testing "add-question! with valid single-choice question as input and check wether it contains in the db"
      (let [input-question {:question/type :question.type/single-choice
                            :question/statement "What is the answer to everything"
                            :question/possible-solutions ["21" "42"]
                            :question/single-choice-solution "42"
                            :question/max-points 1
                            :question/categories ["Cat1"]}
            _ (db/add-question! test-db input-question)
            question-ids (map #(:question/id %) (db/get-all-question-ids test-db))
            question-list (map #(select-keys (db/get-question-by-id test-db %) [:question/type
                                                                                :question/statement
                                                                                :question/possible-solutions
                                                                                :question/single-choice-solution
                                                                                :question/max-points
                                                                                :question/categories])
                               question-ids)]
        (t/is (some #(= % input-question) (vec question-list)))))
    (testing "add-question! with valid multiple-choice question as input and check wether it contains in the db"
      (let [input-question {:question/type :question.type/multiple-choice
                            :question/statement "What is the answer to everything and what is the best movie ever?"
                            :question/possible-solutions ["21" "42" "Alien"]
                            :question/multiple-choice-solution ["42" "Alien"]
                            :question/max-points 1
                            :question/categories ["Cat2"]}
            _ (db/add-question! test-db input-question)
            question-ids (map #(:question/id %) (db/get-all-question-ids test-db))
            question-list (map #(select-keys (db/get-question-by-id test-db %) [:question/type
                                                                                :question/statement
                                                                                :question/possible-solutions
                                                                                :question/multiple-choice-solution
                                                                                :question/max-points
                                                                                :question/categories])
                               question-ids)]
        (t/is (some #(= % input-question) (vec question-list)))))
    (testing "add-question! with valid free-text-choice question as input and check wether it contains in the db"
      (let [input-question {:question/type :question.type/free-text
                            :question/statement "What does rickrolling mean?"
                            :question/evaluation-criteria "Never gonna give you up"
                            :question/max-points 2
                            :question/categories ["Cat2" "Cat3"]}
            _ (db/add-question! test-db input-question)
            question-ids (map #(:question/id %) (db/get-all-question-ids test-db))
            question-list (map #(select-keys (db/get-question-by-id test-db %) [:question/type
                                                                                :question/statement
                                                                                :question/evaluation-criteria
                                                                                :question/max-points
                                                                                :question/categories])
                               question-ids)]
        (t/is (some #(= % input-question) (vec question-list)))))
    (testing "add-question! with invalid question as input"
      (let [input-question {:question/statement "What is the answer to everything"
                            :question/possible-solutions ["21" "42"]
                            :question/single-choice-solution "42"
                            :question/max-points 1
                            :question/categories ["Cat1"]}]
        (t/is (thrown? clojure.lang.ArityException (db/add-question! test-db input-question)))))
    (testing "add-question! with already existing free-text-choice question as input and check wether it contains in the db"
      (let [input-question {:question/type :question.type/free-text
                            :question/statement "What are some advantages and disadvantages of example-based and generative testing?"
                            :question/evaluation-criteria "The following aspects are explained: Oracle, performance, test-coverage"
                            :question/max-points 2
                            :question/categories #{"Cat1" "Cat3"}}]
        (t/is (thrown-with-msg?
                java.lang.AssertionError
                #"There is a similar question already in the data base. Please check the existing question and wether you need to create a new one."
                (db/add-question! test-db input-question)))))

    ;; in the following you see an idea of testing add-question! with sampled question - this does not work because the generator implemented like this can create duplicates and the add-question! denies duplicate wuestions. Idea for fixing: create each parameter seperate in a sample and the question then by hand.

    ;; (testing "add-question! with generated single choice questions"
    ;;   (let [generated-questions (distinct (gen/sample (gen/not-empty (s/gen :question/single-choice-question)) generator-sample-size))]
    ;;     (t/is (every? (fn [act]
    ;;                     (let [input-question act
    ;;                           _ (db/add-question! test-db input-question)
    ;;                           question-ids (map #(:question/id %) (db/get-all-question-ids test-db))
    ;;                           question-list (map #(db/get-question-by-id test-db %) question-ids)]
    ;;                       (some #(and (= (:question/type input-question) (:question/type %))
    ;;                                   (= (:question/max-points input-question) (:question/max-points %))
    ;;                                   (= (:question/statement input-question) (:question/statement %))
    ;;                                   (= (sort (distinct (:question/categories input-question))) (sort (:question/categories %)))
    ;;                                   (= (sort (distinct (:question/possible-solutions input-question))) (sort (:question/possible-solutions %)))
    ;;                                   (= (:question/single-choice-solution input-question) (:question/single-choice-solution %)))
    ;;                             question-list)))
    ;;                   generated-questions))))
    ;; (testing "add-question! with generated multiple choice questions"
    ;;   (let [generated-questions (distinct (gen/sample (gen/not-empty (s/gen :question/multiple-choice-question)) generator-sample-size))]
    ;;     (t/is (every? (fn [act]
    ;;                     (let [input-question act
    ;;                           _ (db/add-question! test-db input-question)
    ;;                           question-ids (map #(:question/id %) (db/get-all-question-ids test-db))
    ;;                           question-list (map #(db/get-question-by-id test-db %) question-ids)]
    ;;                       (some #(and (= (:question/type input-question) (:question/type %))
    ;;                                   (= (:question/max-points input-question) (:question/max-points %))
    ;;                                   (= (:question/statement input-question) (:question/statement %))
    ;;                                   (= (sort (distinct (:question/categories input-question))) (sort (:question/categories %)))
    ;;                                   (= (sort (distinct (:question/possible-solutions input-question))) (sort (:question/possible-solutions %)))
    ;;                                   (= (sort (distinct (:question/multiple-choice-solution input-question))) (:question/multiple-choice-solution %)))
    ;;                             question-list)))
    ;;                   generated-questions))))
    ;; (testing "add-question! with generated free text questions"
    ;;   (let [generated-questions (distinct (gen/sample (gen/not-empty (s/gen :question/question)) generator-sample-size))]
    ;;     (t/is (every? (fn [act]
    ;;                     (let [input-question act
    ;;                           _ (db/add-question! test-db input-question)
    ;;                           question-ids (map #(:question/id %) (db/get-all-question-ids test-db))
    ;;                           question-list (map #(db/get-question-by-id test-db %) question-ids)]
    ;;                       (some #(and (= (:question/type input-question) (:question/type %))
    ;;                                   (= (:question/max-points input-question) (:question/max-points %))
    ;;                                   (= (:question/statement input-question) (:question/statement %))
    ;;                                   (= (sort (distinct (:question/categories input-question))) (sort (:question/categories %)))
    ;;                                   (= (:question/evaluation-criteria input-question) (:question/evaluation-criteria %)))
    ;;                             question-list)))
    ;;                   generated-questions))))
    ))


(deftest course-iteration-test
  (let [test-db (-create-test-db "course-iteration-test-db")]
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
    ;; no test for add-course-iteration! because it only uses add-course-iteration-with-question-sets! with an empty set
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


(deftest question-set-tests
  (let [test-db (-create-test-db "question-set-test-db")]
    (testing "get-all-question-sets"
      (let [reference-ids ["1", "2", "3"]
            res (db/get-all-question-sets test-db)
            res-ids (sort (map #(:question-set/id %) res))]
        (t/is (= reference-ids res-ids))))
    (testing "get-question-set-by-id for id = 1"
      (let [res (db/get-question-set-by-id test-db "1")]
        (and (t/is (= (:question-set/id res) "1"))
             (t/is (= (:question-set/name res) "Test 01: Generative Testing")))))
    (testing "get-question-set-by-id for invalid id = 42"
      (t/is (thrown-with-msg?
              clojure.lang.ExceptionInfo
              #"Nothing found for entity id [:question-set/id \W 42 \W]"
              (db/get-question-set-by-id test-db "42"))))
    (testing "add-question-set! with valid question-set as input and check wether it contains in the db"
      (let [question-set-name "The Truth"
            course-iteration-id "1"
            passing-score 1
            questions [{:question/id "6"
                        :question/statement "What type of programming lanuage is java?"
                        :question/type :question.type/single-choice
                        :question/possible-solutions #{"object oriented" "functional" "logic"}
                        :question/single-choice-solution "object oriented"
                        :question/max-points 1
                        :question/categories #{"Cat2"}}
                       {:question/id "2"
                        :question/type :question.type/free-text
                        :question/statement "What is the JVM?"
                        :question/evaluation-criteria "Something like this (from Wikipedia): https://en.wikipedia.org/wiki/Java_virtual_machine"
                        :question/max-points 3
                        :question/categories #{"Cat1" "Cat2"}}]
            question-set {:question-set/name question-set-name
                          :question-set/passing-score passing-score}
            _ (db/add-question-set!
                test-db
                question-set-name
                course-iteration-id
                passing-score
                questions)
            question-set-list (map #(select-keys % [:question-set/name
                                                    :question-set/passing-score])
                                   (db/get-all-question-sets test-db))]
        (t/is (some #(= % question-set) (vec question-set-list)))))
    (testing "add-question-set! with invalid couse-iteration as input and check wether it contains in the db"
      (let [question-set-name "The Truth"
            course-iteration-id "lol"
            passing-score 1
            questions [{:question/id "6"
                        :question/statement "What type of programming lanuage is clojure?"
                        :question/type :question.type/single-choice
                        :question/possible-solutions #{"object oriented" "functional" "logic"}
                        :question/single-choice-solution "functional"
                        :question/max-points 1
                        :question/categories #{"Cat2"}}
                       {:question/id "2"
                        :question/type :question.type/free-text
                        :question/statement "What is the JVM?"
                        :question/evaluation-criteria "Something like this (from Wikipedia): https://en.wikipedia.org/wiki/Java_virtual_machine"
                        :question/max-points 3
                        :question/categories #{"Cat1"}}]]
        (t/is (thrown-with-msg?
                clojure.lang.ExceptionInfo
                #"Nothing found for entity id [:course-iteration/id \W lol \W]"
                (db/add-question-set!
                  test-db
                  question-set-name
                  course-iteration-id
                  passing-score
                  questions)))))
    (testing "add-question-set! with invalid question-set-name as input and check wether it contains in the db"
      (let [question-set-name 3
            course-iteration-id "1"
            passing-score 1
            questions [{:question/id "6"
                        :question/statement "What type of programming lanuage is java?"
                        :question/type :question.type/single-choice
                        :question/possible-solutions #{"object oriented" "functional" "logic"}
                        :question/single-choice-solution "object oriented"
                        :question/max-points 1
                        :question/categories #{"Cat2"}}
                       {:question/id "2"
                        :question/type :question.type/free-text
                        :question/statement "What is the JVM?"
                        :question/evaluation-criteria "Something like this (from Wikipedia): https://en.wikipedia.org/wiki/Java_virtual_machine"
                        :question/max-points 3
                        :question/categories #{"Cat1" "Cat2"}}]]
        (t/is (thrown-with-msg?
                clojure.lang.ExceptionInfo
                #"Bad entity value 3"
                (db/add-question-set!
                  test-db
                  question-set-name
                  course-iteration-id
                  passing-score
                  questions)))))
    (testing "add-question-set! with valid question-set, but the question is also new"
      (let [input-question {:question/type :question.type/single-choice
                            :question/statement "What is the answer to everything"
                            :question/possible-solutions ["21" "42"]
                            :question/single-choice-solution "42"
                            :question/max-points 1
                            :question/categories ["Cat1"]}
            question-set-name "The Truth 2"
            course-iteration-id "1"
            passing-score 1
            questions [input-question]
            question-set {:question-set/name question-set-name
                          :question-set/passing-score passing-score}
            _ (db/add-question-set!
                test-db
                question-set-name
                course-iteration-id
                passing-score
                questions)
            question-set-list (map #(select-keys % [:question-set/name
                                                    :question-set/passing-score])
                                   (db/get-all-question-sets test-db))]
        (t/is (some #(= % question-set) (vec question-set-list)))))
    (testing "add-question-set! with semi generated question-set"
      (dotimes [_ 10]
        (let [question-set-name (gen/generate (s/gen :question-set/name))
              course-iteration-id "1" ; must be existing iteration for success
              passing-score (gen/generate (s/gen :question-set/passing-score))
              questions []
              question-set {:question-set/name question-set-name
                            :question-set/questions questions
                            :question-set/passing-score passing-score}
              _ (db/add-question-set!
                  test-db
                  question-set-name
                  course-iteration-id
                  passing-score
                  questions)
              question-set-list (map #(select-keys % [:question-set/name
                                                      :question-set/questions
                                                      :question-set/passing-score])
                                     (db/get-all-question-sets test-db))]
          (t/is (some (fn [act-set]
                        (and (= (:question-set/name question-set) (:question-set/name act-set))
                             (= (:question-set/passing-score question-set) (:question-set/passing-score question-set))))
                      question-set-list)))))))


(deftest course-test
  (let [test-db (-create-test-db "course-test-db")]
    (testing "get-all-courses of the dummy dataset"
      (let [ref-courses [#:course{:id "1",
                                  :course-name "Programming 1",
                                  :question-sets [#:question-set{:id "2", :name "Week 1:"}]}
                         #:course{:id "0",
                                  :course-name "Specialization Functional Programming: Clojure",
                                  :question-sets [#:question-set{:id "1", :name "Test 01: Generative Testing"}
                                                  #:question-set{:id "3", :name "Test 00: Alien"}]}]
            res (db/get-all-courses test-db)]
        (t/is (every? (fn [act] (some #(= act %) ref-courses)) res))))
    (testing "get-course-by-id with id = 1"
      (let [course-id "1"
            res (db/get-course-by-id test-db course-id)]
        (t/is (= res #:course{:id "1",
                              :course-name "Programming 1",
                              :question-sets [#:question-set{:id "2", :name "Week 1:"}]}))))
    (testing "get-course-by-id with id = 0"
      (let [course-id "0"
            res (db/get-course-by-id test-db course-id)]
        (t/is (= res #:course{:id "0",
                              :course-name "Specialization Functional Programming: Clojure",
                              :question-sets [#:question-set{:id "1", :name "Test 01: Generative Testing"}
                                              #:question-set{:id "3", :name "Test 00: Alien"}]}))))
    (testing "get-course-by-id with invalid id = 42"
      (t/is (thrown-with-msg?
              clojure.lang.ExceptionInfo
              #"Nothing found for entity id [:course/id \W 42 \W]"
              (db/get-course-by-id test-db "42"))))
    (testing "add-course! with generated course names"
      (let [course-names (distinct (map #(string/lower-case %) (gen/sample (s/gen :course/course-name) generator-sample-size)))]
        (t/is (every? (fn [act]
                        (let [_ (db/add-course! test-db act)
                              excisting-course-names (map #(:course/course-name %) (db/get-all-courses test-db))]
                          (some #(= act %) excisting-course-names)))
                      course-names))))
    (testing "add-course! with existing name - should fail"
      (t/is (thrown-with-msg?
              java.lang.AssertionError
              #"There is already a course with the same name in the database. Please check the existing course and wether you need to create a new one."
              (db/add-course! test-db "Programming 1"))))))


(deftest user-test
  (let [test-db (-create-test-db "user-test-db")]
    (testing "get-all-user of dummy-data"
      (let [res (db/get-all-user test-db)
            reference-user [#:user{:id "0"
                                   :github-id "12345"
                                   :course-iterations [#:course-iteration{:id "1"} #:course-iteration{:id "2"}]}
                            #:user{:id "2"
                                   :github-id "45678"
                                   :course-iterations [#:course-iteration{:id "1"}]}
                            #:user{:id "3"
                                   :github-id "13579"
                                   :course-iterations [#:course-iteration{:id "2"}]}]]
        (t/is (every? (fn [act] (some #(= act %) reference-user)) res))))
    (testing "get-user-by-id with id = 0"
      (t/is (= (db/get-user-by-id test-db "0") {:user/id "0"
                                                :user/github-id "12345"
                                                :user/course-iterations [#:course-iteration{:id "1"} #:course-iteration{:id "2"}]})))
    (testing "get-user-by-id with id = 2"
      (t/is (= (db/get-user-by-id test-db "2") {:user/id "2"
                                                :user/github-id "45678"
                                                :user/course-iterations [#:course-iteration{:id "1"}]})))
    (testing "get-user-by-id with invalid id = 42"
      (t/is (thrown-with-msg?
              clojure.lang.ExceptionInfo
              #"Nothing found for entity id [:user/id \W 42 \W]"
              (db/get-user-by-id test-db "42"))))
    (testing "get-user-by-github-id with id = 12345"
      (t/is (= (db/get-user-by-github-id test-db "12345") {:user/id "0"
                                                           :user/github-id "12345"
                                                           :user/course-iterations [#:course-iteration{:id "1"} #:course-iteration{:id "2"}]})))
    (testing "get-user-by-id with id = 45678"
      (t/is (= (db/get-user-by-github-id test-db "45678") {:user/id "2"
                                                           :user/github-id "45678"
                                                           :user/course-iterations [#:course-iteration{:id "1"}]})))
    (testing "get-user-by-id with invalid id = 42"
      (t/is (thrown-with-msg?
              clojure.lang.ExceptionInfo
              #"Nothing found for entity id [:user/git\Wid \W 42 \W]"
              (db/get-user-by-github-id test-db "42"))))
    (testing "add-user! with generated github-ids"
      (let [github-ids (distinct (gen/sample (s/gen :user/github-id) generator-sample-size))]
        (t/is (every? (fn [act]
                        (let [_ (db/add-user! test-db act)
                              excisting-github-ids (map #(:user/github-id %) (db/get-all-user test-db))]
                          (some #(= act %) excisting-github-ids)))
                      github-ids))))
    (testing "add-user! with existing github-id - should fail"
      (t/is (thrown-with-msg?
              java.lang.AssertionError
              #"There is already a user with the same github-id in the database. Please check the existing course and wether you need to create a new one."
              (db/add-user! test-db "12345"))))))


(deftest answer-test
  (let [test-db (-create-test-db "answer-test-db")]
    (testing "get-all-answers"
      (let [ref-answers [#:answer{:id "1"
                                  :answer ["transients are a non persistent data structures in clojure. They are used to increase performance."]
                                  :points 1
                                  :question #:question{:id "1"}
                                  :user #:user{:id "0"}}
                         #:answer{:id "2"
                                  :answer ["generative Tests are only a good choice, if you have an oracle or you can write an inverse function. But they have very high costs compared to example based testing"]
                                  :points 1
                                  :question #:question{:id "3"}
                                  :user #:user{:id "0"}}
                         #:answer{:id "3"
                                  :answer ["I like transients"]
                                  :points 0
                                  :question #:question{:id "1"}
                                  :user #:user{:id "2"}}
                         #:answer{:id "4"
                                  :answer ["JVM, i.e., Java Virtual Machine. JVM is the engine that drives the Java code. Mostly in other Programming Languages, compiler produce code for a particular system but Java compiler produce Bytecode for a Java Virtual Machine. When we compile a Java program, then bytecode is generated. Bytecode is the source code that can be used to run on any platform. Bytecode is an intermediary language between Java source and the host system. It is the medium which compiles Java code to bytecode which gets interpreted on a different machine and hence it makes it Platform/Operating system independent."]
                                  :points 3
                                  :question #:question{:id "2"}
                                  :user #:user{:id "0"}}
                         #:answer{:id "5"
                                  :answer ["immutable"]
                                  :points 0
                                  :question #:question{:id "4"}
                                  :user #:user{:id "2"}}
                         #:answer{:id "6"
                                  :answer ["example based testing is good for documentation"]
                                  :points 0
                                  :question #:question{:id "3"}
                                  :user #:user{:id "2"}}
                         #:answer{:id "7"
                                  :answer ["Oracle" "inverse function" "specs"]
                                  :points 1
                                  :question #:question{:id "5"}
                                  :user #:user{:id "0"}}
                         #:answer{:id "8",
                                  :answer ["mutable"],
                                  :points 1
                                  :question #:question{:id "4"},
                                  :user #:user{:id "0"}}
                         #:answer{:id "9"
                                  :answer ["object oriented"]
                                  :points 1
                                  :question #:question{:id "6"}
                                  :user #:user{:id "0"}}
                         #:answer{:id "10"
                                  :answer ["Oracle" "specs"]
                                  :points 1
                                  :question #:question{:id "5"}
                                  :user #:user{:id "2"}}
                         #:answer{:id "11"
                                  :answer ["1979"]
                                  :points 1
                                  :question #:question{:id "7"}
                                  :user #:user{:id "0"}}
                         #:answer{:id "12"
                                  :answer ["Alien is the best movie of all time <3"]
                                  :points 1
                                  :question #:question{:id "8"}
                                  :user #:user{:id "0"}}
                         #:answer{:id "13"
                                  :answer ["logic"]
                                  :points 0
                                  :question #:question{:id "6"}
                                  :user #:user{:id "3"}}
                         #:answer{:id "14"
                                  :answer ["I don't know, pls give me points :D"]
                                  :points 0
                                  :question #:question{:id "2"}
                                  :user #:user{:id "3"}}]
            res (db/get-all-answers test-db)]
        (t/is (every? (fn [act] (some #(= act %) ref-answers)) res))))))


(deftest correction-test
  (let [test-db (-create-test-db "correction-test-db")]
    (testing "get-all-corrections-of-corrector with corrector-id = 3"
      (let [res (db/get-all-corrections-of-corrector test-db "3")
            ref-corrections [#:correction{:answer #:answer{:id "2"}}
                             #:correction{:answer #:answer{:id "1"}}
                             #:correction{:answer #:answer{:id "4"}}
                             #:correction{:answer #:answer{:id "12"}}]]
        (t/is (every? (fn [act] (some #(= act %) ref-corrections)) res))))
    (testing "get-all-corrections-of-corrector with corrector-id = 2"
      (let [res (db/get-all-corrections-of-corrector test-db "2")
            ref-corrections [#:correction{:answer #:answer{:id "14"}}]]
        (t/is (every? (fn [act] (some #(= act %) ref-corrections)) res))))
    (testing "get-all-corrections-of-corrector with invalid corrector-id = 42"
      (t/is (thrown-with-msg?
              clojure.lang.ExceptionInfo
              #"Nothing found for entity id [:user/id \W 42 \W]"
              (db/get-all-corrections-of-corrector test-db "42"))))
    (testing "add-correction! with valid correction"
      (let [answer-id "1"
            correction {:correction/feedback "not good" :correction/points 0 :corrector/id "3"}
            _ (db/add-correction! test-db answer-id correction)
            corrections-of-corrector (db/get-all-corrections-of-corrector test-db "3")]
        (t/is (= 2 (count (filter #(= (first (vals (first (vals %)))) "1") corrections-of-corrector))))))
    (testing "add-correction! with invalid answer-id"
      (let [answer-id "42"
            correction {:correction/feedback "not good" :correction/points 0 :corrector/id "3"}]
        (t/is (thrown-with-msg?
                clojure.lang.ExceptionInfo
                #"Nothing found for entity id [:user/id \W 42 \W]"
                (db/add-correction! test-db answer-id correction)))))
    (testing "add-correction! with invalid corrector-id"
      (let [answer-id "1"
            correction {:correction/feedback "not good" :correction/points 0 :corrector/id "42"}]
        (t/is (thrown-with-msg?
                clojure.lang.ExceptionInfo
                #"Nothing found for entity id [:user/id \W 42 \W]"
                (db/add-correction! test-db answer-id correction)))))
    (testing "get-corrections-of-answer with answer-id = 2"
      (let [answer-id "2"
            res (db/get-corrections-of-answer test-db answer-id)
            ref-correction #:correction{:feedback "Please elaborate about the aspects of example-based testing"}]
        (t/is (= (:feedback res) (:feedback ref-correction)))))
    (testing "get-corrections-of-answer with answer-id = 1"
      (let [answer-id "1"
            res (db/get-corrections-of-answer test-db answer-id)
            ref-corrections [#:correction{:feedback "Can you say something about the rules of handling with transients?"}
                             #:correction{:feedback "not good"}]]
        (t/is (every? (fn [act] (some #(= (:feedback act) (:feedback %)) ref-corrections)) res))))
    (testing "get-corrections-of-answer with invalid answer-id"
      (let [answer-id "42"]
        (t/is (thrown-with-msg?
                java.lang.AssertionError
                (re-pattern (str "The answer-id: " answer-id "does not exist in the database!"))
                (db/get-corrections-of-answer test-db answer-id)))))))
