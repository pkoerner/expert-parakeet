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
             (t/is (s/valid? :question/question res)))))
    (testing "get-question-by-id with invalid id = 42"
      (t/is (thrown-with-msg?
              clojure.lang.ExceptionInfo
              #"Nothing found for entity id [:question-set/id \W 42 \W]"
              (db/get-question-by-id test-db "42"))))
    (testing "add-question! with valid single-choice question as input and check wether it contains in the db"
      (let [input-question {:question/type :question.type/single-choice
                            :question/statement "What is the answer to everything"
                            :question/possible-solutions ["21" "42"]
                            :question/correct-solutions ["42"]
                            :question/max-points 1
                            :question/categories ["Cat1"]}
            _ (db/add-question! test-db "1" input-question)
            question-ids (map :question/id (db/get-all-question-ids test-db))
            question-list (map #(db/get-question-by-id test-db %) question-ids)]
        (t/is (some #(= % (input-question :question/statement)) (map :question/statement question-list)))))
    (testing "add-question! with valid multiple-choice question as input and check wether it contains in the db"
      (let [input-question {:question/type :question.type/multiple-choice
                            :question/statement "What is the answer to everything and what is the best movie ever?"
                            :question/possible-solutions ["21" "42" "Alien"]
                            :question/correct-solutions ["42" "Alien"]
                            :question/max-points 1
                            :question/categories ["Cat2"]}
            _ (db/add-question! test-db "1" input-question)
            question-ids (map #(:question/id %) (db/get-all-question-ids test-db))
            question-list (map #(db/get-question-by-id test-db %) question-ids)]
        (t/is (some #(= % (input-question :question/statement)) (map :question/statement question-list)))))
    (testing "add-question! with valid free-text-choice question as input and check wether it contains in the db"
      (let [input-question {:question/type :question.type/free-text
                            :question/statement "What does rickrolling mean?"
                            :question/evaluation-criteria "Never gonna give you up"
                            :question/max-points 2
                            :question/categories ["Cat2" "Cat3"]}
            _ (db/add-question! test-db "1" input-question)
            question-ids (map #(:question/id %) (db/get-all-question-ids test-db))
            question-list (map #(db/get-question-by-id test-db %) question-ids)]
        (t/is (some #(= % (input-question :question/statement)) (map :question/statement question-list)))))
    (testing "add-question! with invalid question as input"
      ;; missing type
      (let [input-question {:question/statement "What is the answer to everything"
                            :question/possible-solutions ["21" "42"]
                            :question/correct-solutions ["42"]
                            :question/max-points 1
                            :question/categories ["Cat1"]}]
        (t/is (thrown? java.lang.IllegalArgumentException (db/add-question! test-db "1" input-question)))))
    (testing "add-question! with already existing free-text-choice question as input: duplicate questions are now allowed"
      (let [input-question {:question/type :question.type/free-text
                            :question/statement "What are some advantages and disadvantages of example-based and generative testing?"
                            :question/evaluation-criteria "The following aspects are explained: Oracle, performance, test-coverage"
                            :question/max-points 2
                            :question/categories #{"Cat1" "Cat3"}}
            _ (db/add-question! test-db "1" input-question)
            _ (db/add-question! test-db "1" input-question)
            question-ids (map #(:question/id %) (db/get-all-question-ids test-db))
            question-list (map #(db/get-question-by-id test-db %) question-ids)
            matching-questions (filter #(= (:question/statement %) (:question/statement input-question)) question-list)]
        (t/is (>= (count matching-questions) 2))))

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
    ;;                                   (= (sort (distinct (:question/correct-solutions input-question))) (:question/correct-solutions %)))
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
            reference-ids #{"1", "2"}
            res-ids (->> res
                         (map :course-iteration/id)
                         (set))]
        (t/is (= reference-ids res-ids))))
    (testing "get-course-iterations-of-course functional programming clojure"
      (let [course-id "1"
            res (db/get-course-iterations-of-course test-db course-id)
            reference-ids #{"1"}
            res-ids (->> res
                         (map :course-iteration/id)
                         (set))]
        (t/is (= reference-ids res-ids))))
    (testing "get-course-iterations-of-course programming"
      (let [course-id "2"
            res (db/get-course-iterations-of-course test-db course-id)
            reference-ids #{"2"}
            res-ids (->> res
                         (map :course-iteration/id)
                         (set))]
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
             (t/is (= (:course-iteration/semester res) :semester/winter))
             (t/is (= (:course-iteration/year res) 2022)))))
    (testing "get-course-iteration-by-id with id = 2"
      (let [course-iteration-id "2"
            res (db/get-course-iteration-by-id test-db course-iteration-id)]
        (and (t/is (= (:course-iteration/id res) "2"))
             (t/is (= (:course-iteration/semester res) :semester/summer))
             (t/is (= (:course-iteration/year res) 2020)))))
    (testing "get-course-iteration-by-id with invalid id = 42"
      (t/is (thrown-with-msg?
              clojure.lang.ExceptionInfo
              #"Nothing found for entity id [:course-iteration/id \W 42\W ]"
              (db/get-course-iteration-by-id test-db "42"))))
    (testing "add-course-iteration! with valid course-iteration as input and check wether it contains in the db"
      (let [course-id "1"
            course {:course/id course-id}
            course-iteration-year 1999
            course-iteration-semester :semester/summer
            course-iteration-question-sets [{:question-set/id "3"}
                                            {:question-set/id "1"}]
            _ (db/add-course-iteration!
                test-db
                {:course-iteration/course course
                 :course-iteration/year course-iteration-year
                 :course-iteration/semester course-iteration-semester
                 :course-iteration/question-sets course-iteration-question-sets})
            course-iterations (map #(select-keys % [:course-iteration/semester
                                                    :course-iteration/year])
                                   (db/get-course-iterations-of-course test-db course-id))]
        (t/is (some #(= % {:course-iteration/semester course-iteration-semester :course-iteration/year course-iteration-year}) course-iterations))))
    (testing "add-course-iteration! with invalid question-set as input"
      (let [course {:course/id "1"}
            course-iteration-year 1999
            course-iteration-semester :semester/summer
            course-iteration-question-sets [{:question-set/id "lol"}]]
        (t/is (thrown-with-msg?
                clojure.lang.ExceptionInfo
                #"Nothing found for entity id [:question-set/id \W lol \W]"
                (db/add-course-iteration!
                  test-db
                  {:course-iteration/course course
                   :course-iteration/year course-iteration-year
                   :course-iteration/semester course-iteration-semester
                   :course-iteration/question-sets course-iteration-question-sets})))))
    (testing "add-course-iteration! with invalid course-id as input"
      (let [course {:course/id "lol"}
            course-iteration-year 1999
            course-iteration-semester :semester/summer
            course-iteration-question-sets [{:question-set/id "3"}]]
        (t/is (thrown-with-msg?
                clojure.lang.ExceptionInfo
                #"Nothing found for entity id [:course/id \W lol \W]"
                (db/add-course-iteration!
                  test-db
                  {:course-iteration/course course
                   :course-iteration/year course-iteration-year
                   :course-iteration/semester course-iteration-semester
                   :course-iteration/question-sets course-iteration-question-sets})))))
    (testing "get-course-iterations-of-student with valid student-id"
      (let [user-id "1"
            res (db/get-course-iterations-of-student test-db user-id)
            ref-course-iteration #{#:course-iteration{:id "1", :year 2022, :course #:course{:id "1", :name "Functional Programming: Clojure", :question-sets [#:question-set{:id "1", :name "Test 01: Generative Testing"} #:question-set{:id "2", :name "Test 00: Alien"}]}, :semester :semester/winter, :question-sets [#:question-set{:id "1", :name "Test 01: Generative Testing"} #:question-set{:id "2", :name "Test 00: Alien"}]}
                                   #:course-iteration{:id "2", :year 2020, :course #:course{:id "2", :name "Programming", :question-sets [#:question-set{:id "3", :name "Week 1"}]}, :semester :semester/summer, :question-sets [#:question-set{:id "3", :name "Week 1"}]}}]
        (t/is (= ref-course-iteration (set res)))))
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
                        :question/correct-solutions ["object oriented"]
                        :question/max-points 1
                        :question/categories #{"Cat2"}}
                       {:question/id "2"
                        :question/type :question.type/free-text
                        :question/statement "What is the JVM?"
                        :question/evaluation-criteria "Something like this (from Wikipedia): https://en.wikipedia.org/wiki/Java_virtual_machine"
                        :question/max-points 3
                        :question/categories #{"Cat1" "Cat2"}}]
            question-set {:question-set/name question-set-name
                          :question-set/required-points passing-score}
            _ (db/add-question-set!
                test-db
                question-set-name
                course-iteration-id
                passing-score
                questions)
            question-set-list (map #(select-keys % [:question-set/name
                                                    :question-set/required-points])
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
                        :question/correct-solutions ["functional"]
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
                        :question/correct-solutions ["object oriented"]
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
                            :question/correct-solutions ["42"]
                            :question/max-points 1
                            :question/categories ["Cat1"]}
            question-set-name "The Truth 2"
            course-iteration-id "1"
            passing-score 1
            questions [input-question]
            question-set {:question-set/name question-set-name
                          :question-set/required-points passing-score}
            _ (db/add-question-set!
                test-db
                question-set-name
                course-iteration-id
                passing-score
                questions)
            question-set-list (map #(select-keys % [:question-set/name
                                                    :question-set/required-points])
                                   (db/get-all-question-sets test-db))]
        (t/is (some #(= % question-set) (vec question-set-list)))))
    (testing "add-question-set! with semi generated question-set"
      (dotimes [_ 10]
        (let [question-set-name (gen/generate (s/gen :question-set/name))
              course-iteration-id "1" ; must be existing iteration for success
              passing-score (gen/generate (s/gen :question-set/required-points))
              questions []
              question-set {:question-set/name question-set-name
                            :question-set/questions questions
                            :question-set/required-points passing-score}
              _ (db/add-question-set!
                  test-db
                  question-set-name
                  course-iteration-id
                  passing-score
                  questions)
              question-set-list (map #(select-keys % [:question-set/name
                                                      :question-set/questions
                                                      :question-set/required-points])
                                     (db/get-all-question-sets test-db))]
          (t/is (some (fn [act-set]
                        (and (= (:question-set/name question-set) (:question-set/name act-set))
                             (= (:question-set/required-points question-set) (:question-set/required-points question-set))))
                      question-set-list)))))))


(deftest course-test
  (let [test-db (-create-test-db "course-test-db")]
    (testing "get-all-courses of the dummy dataset"
      (let [ref-courses #{#:course{:id "1",
                                   :name "Functional Programming: Clojure",
                                   :question-sets [#:question-set{:id "1", :name "Test 01: Generative Testing"} #:question-set{:id "2", :name "Test 00: Alien"}]}
                          #:course{:id "2",
                                   :name "Programming",
                                   :question-sets [#:question-set{:id "3", :name "Week 1"}]}}
            res (db/get-all-courses test-db)]
        (t/is (= ref-courses (set res)))))
    (testing "get-course-by-id with id = 1"
      (let [course-id "1"
            res (-> (db/get-course-by-id test-db course-id)
                    (dissoc :course/questions :course/question-sets))] ; not checking questions and question sets because they contain randomly generated ids
        (t/is (= res #:course{:id "1",
                              :name "Functional Programming: Clojure",}))))
    (testing "get-course-by-id with id = 2"
      (let [course-id "2"
            res (-> (db/get-course-by-id test-db course-id)
                    (dissoc :course/questions :course/question-sets))] ; ditto
        (t/is (= res #:course{:id "2",
                              :name "Programming"}))))
    (testing "get-course-by-id with invalid id = 42"
      (t/is (thrown-with-msg?
              clojure.lang.ExceptionInfo
              #"Nothing found for entity id [:course/id \W 42 \W]"
              (db/get-course-by-id test-db "42"))))
    (testing "add-course! with generated course names"
      (let [course-names (distinct (map #(string/lower-case %) (gen/sample (s/gen :course/name) generator-sample-size)))]
        (t/is (every? (fn [act]
                        (let [_ (db/add-course! test-db {:course/name act})
                              existing-course-names (map #(:course/name %) (db/get-all-courses test-db))]
                          (some #(= act %) existing-course-names)))
                      course-names))))
    (testing "add-course! with existing name - should fail"
      (t/is (thrown-with-msg?
              java.lang.AssertionError
              #"There is already a course with the same name in the database. Please check the existing course and wether you need to create a new one."
              (db/add-course! test-db {:course/name "Programming"}))))))


(deftest user-test
  (let [test-db (-create-test-db "user-test-db")]
    (testing "get-all-users of dummy-data"
      (let [res (db/get-all-users test-db)
            reference-user [#:user{:id "1"
                                   :github-id "12345"}
                            #:user{:id "2"
                                   :github-id "45678"}
                            #:user{:id "3"
                                   :github-id "13579"}]]
        (t/is (every? (fn [act] (some #(= act %) reference-user)) res))))
    (testing "get-user-by-id with id = 1"
      (t/is (= (db/get-user-by-id test-db "1") {:user/id "1"
                                                :user/github-id "12345"})))
    (testing "get-user-by-id with id = 2"
      (t/is (= (db/get-user-by-id test-db "2") {:user/id "2"
                                                :user/github-id "45678"})))
    (testing "get-user-by-id with invalid id = 42"
      (t/is (thrown-with-msg?
              clojure.lang.ExceptionInfo
              #"Nothing found for entity id [:user/id \W 42 \W]"
              (db/get-user-by-id test-db "42"))))
    (testing "get-user-by-github-id with id = 12345"
      (t/is (= (db/get-user-by-github-id test-db "12345") {:user/id "1"
                                                           :user/github-id "12345"})))
    (testing "get-user-by-id with id = 45678"
      (t/is (= (db/get-user-by-github-id test-db "45678") {:user/id "2"
                                                           :user/github-id "45678"})))
    (testing "get-user-by-id with invalid id = 42"
      (t/is (nil? (db/get-user-by-github-id test-db "42"))))
    (testing "add-user! with generated github-ids"
      (let [github-ids (distinct (gen/sample (s/gen :user/github-id) generator-sample-size))]
        (t/is (every? (fn [act]
                        (let [_ (db/add-user! test-db act)
                              excisting-github-ids (map #(:user/github-id %) (db/get-all-users test-db))]
                          (some #(= act %) excisting-github-ids)))
                      github-ids))))
    (testing "add-user! with existing github-id - should fail"
      (t/is (thrown-with-msg?
              java.lang.AssertionError
              #"There is already a user with the same github-id in the database."
              (db/add-user! test-db "12345"))))))


(deftest answer-test
  (let [test-db (-create-test-db "answer-test-db")]
    (testing "get-all-answers"
      (let [ref-answers #{#:answer{:id "1",
                                   :answer "transients are a non persistent data structures in clojure. They are used to increase performance.",
                                   :question #:question{:id "1", :statement "Describe a use case for transient data structures", :max-points 3, :type :question.type/free-text},
                                   :creator #:user{:id "1", :github-id "12345"}}
                          #:answer{:id "2",
                                   :answer "generative Tests are only a good choice, if you have an oracle or you can write an inverse function. But they have very high costs compared to example based testing",
                                   :question #:question{:id "2", :statement "What are some advantages and disadvantages of example-based and generative testing?", :max-points 2, :type :question.type/free-text},
                                   :creator #:user{:id "1", :github-id "12345"}}
                          #:answer{:id "3",
                                   :question #:question{:id "3", :statement "Transient data structures are:", :max-points 1, :type :question.type/single-choice},
                                   :creator #:user{:id "1", :github-id "12345"},
                                   :selected-solutions [#:solution{:id "1", :statement "mutable"}]}
                          #:answer{:id "4",
                                   :question #:question{:id "4", :statement "Which keywords are suitable for generative testing?", :max-points 1, :type :question.type/multiple-choice},
                                   :creator #:user{:id "1", :github-id "12345"},
                                   :selected-solutions [#:solution{:id "3", :statement "Oracle"} #:solution{:id "4", :statement "inverse function"} #:solution{:id "5", :statement "specs"}]}
                          #:answer{:id "5",
                                   :answer "I like transients",
                                   :question #:question{:id "1", :statement "Describe a use case for transient data structures", :max-points 3, :type :question.type/free-text},
                                   :creator #:user{:id "2", :github-id "45678"}}
                          #:answer{:id "6",
                                   :answer "example based testing is good for documentation",
                                   :question #:question{:id "2", :statement "What are some advantages and disadvantages of example-based and generative testing?", :max-points 2, :type :question.type/free-text},
                                   :creator #:user{:id "2", :github-id "45678"}}
                          #:answer{:id "7",
                                   :question #:question{:id "3", :statement "Transient data structures are:", :max-points 1, :type :question.type/single-choice},
                                   :creator #:user{:id "2", :github-id "45678"},
                                   :selected-solutions [#:solution{:id "2", :statement "immutable"}]}
                          #:answer{:id "8",
                                   :question #:question{:id "4", :statement "Which keywords are suitable for generative testing?", :max-points 1, :type :question.type/multiple-choice},
                                   :creator #:user{:id "2", :github-id "45678"},
                                   :selected-solutions [#:solution{:id "3", :statement "Oracle"} #:solution{:id "5", :statement "specs"}]}
                          #:answer{:id "9",
                                   :question #:question{:id "5", :statement "When was the movie Alien by ridley scott released?", :max-points 1, :type :question.type/single-choice},
                                   :creator #:user{:id "1", :github-id "12345"},
                                   :selected-solutions [#:solution{:id "7", :statement "1979"}]}
                          #:answer{:id "10",
                                   :answer "Alien is the best movie of all time <3",
                                   :question #:question{:id "6", :statement "Which one is the greates movie of all time? ;D", :max-points 1, :type :question.type/free-text},
                                   :creator #:user{:id "1", :github-id "12345"}}
                          #:answer{:id "11",
                                   :answer "JVM, i.e., Java Virtual Machine. JVM is the engine that drives the Java code. Mostly in other Programming Languages, compiler produce code for a particular system but Java compiler produce Bytecode for a Java Virtual Machine. When we compile a Java program, then bytecode is generated. Bytecode is the source code that can be used to run on any platform. Bytecode is an intermediary language between Java source and the host system. It is the medium which compiles Java code to bytecode which gets interpreted on a different machine and hence it makes it Platform/Operating system independent.",
                                   :question #:question{:id "7", :statement "What is the JVM?", :max-points 3, :type :question.type/free-text},
                                   :creator #:user{:id "1", :github-id "12345"}}
                          #:answer{:id "12",
                                   :question #:question{:id "8", :statement "What type of programming lanuage is java?", :max-points 1, :type :question.type/single-choice},
                                   :creator #:user{:id "1", :github-id "12345"},
                                   :selected-solutions [#:solution{:id "11", :statement "object oriented"}]}
                          #:answer{:id "13",
                                   :answer "I don't know, pls give me points :D",
                                   :question #:question{:id "7", :statement "What is the JVM?", :max-points 3, :type :question.type/free-text},
                                   :creator #:user{:id "3", :github-id "13579"}}
                          #:answer{:id "14",
                                   :question #:question{:id "8", :statement "What type of programming lanuage is java?", :max-points 1, :type :question.type/single-choice},
                                   :creator #:user{:id "3", :github-id "13579"},
                                   :selected-solutions [#:solution{:id "13", :statement "logic"}]}}
            res (db/get-all-answers test-db)]
        (t/is (= ref-answers (set res)))))))


(deftest correction-test
  (let [test-db (-create-test-db "correction-test-db")]
    (testing "get-all-corrections-from-corrector with corrector-id = 3"
      (let [res (db/get-all-corrections-from-corrector test-db "3")
            ref-corrections #{#:correction{:answer #:answer{:id "1"}}
                              #:correction{:answer #:answer{:id "2"}}
                              #:correction{:answer #:answer{:id "10"}}}]
        (t/is (= ref-corrections (set (map (fn [c] {:correction/answer {:answer/id (get-in c [:correction/answer :answer/id])}}) res))))))
    (testing "get-all-corrections-from-corrector with corrector-id = 2"
      (let [res (db/get-all-corrections-from-corrector test-db "2")
            ref-corrections #{#:correction{:answer #:answer{:id "11"}}
                              #:correction{:answer #:answer{:id "13"}}}]
        (t/is (= ref-corrections (set (map (fn [c] {:correction/answer {:answer/id (get-in c [:correction/answer :answer/id])}}) res))))))
    (testing "get-all-corrections-from-corrector with invalid corrector-id = 42"
      (t/is (thrown-with-msg?
              clojure.lang.ExceptionInfo
              #"Nothing found for entity id [:user/id \W 42 \W]"
              (db/get-all-corrections-from-corrector test-db "42"))))
    (testing "add-correction! with valid correction"
      (let [answer-id "1"
            correction {:correction/feedback "#not good#" :correction/points 0 :corrector/id "3"}
            _ (db/add-correction! test-db answer-id correction)
            corrections-of-corrector (db/get-all-corrections-from-corrector test-db "3")]
        (t/is (some #(= (% :correction/feedback) (correction :correction/feedback)) corrections-of-corrector))))
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
        (t/is (= (mapv :correction/feedback res) [(:correction/feedback ref-correction)]))))
    (testing "get-corrections-of-answer with answer-id = 1"
      (let [answer-id "1"
            res (db/get-corrections-of-answer test-db answer-id)
            ref-corrections [#:correction{:feedback "Can you say something about the rules of handling with transients?"}
                             #:correction{:feedback "not good"}]]
        (t/is (every? (fn [act] (some #(= (:feedback act) (:feedback %)) ref-corrections)) res))))
    (testing "get-corrections-of-answer with invalid answer-id"
      (let [answer-id "42"]
        (t/is (thrown-with-msg?
                clojure.lang.ExceptionInfo
                #"Nothing found for entity id [:answer/id \W 42 \W]"
                (db/get-corrections-of-answer test-db answer-id)))))))
