(ns controllers.user.user-overview-controller-test
  (:require
    [clojure.string :as string]
    [clojure.test :as t :refer [deftest testing]]
    [controllers.user.user-overview-controller :refer [create-user-overview-get]]))


(deftest create-user-overview-get-test
  (testing "Testing wether the course-iterations are shown in the overview"
    (let [course-iterations [{:course-iteration/id "2",
                              :course-iteration/year 2020,
                              :course-iteration/semester :semester/summer,
                              :course-iteration/course {:course/name "Programming 1"},
                              :course-iteration/question-sets '({:question-set/id "2" :question-set/name "Week 1:" :question-set/max-points 4, :question-set/achieved-points 4})}
                             {:course-iteration/id "1",
                              :course-iteration/year 2022,
                              :course-iteration/semester :semester/winter,
                              :course-iteration/course {:course/name "Specialization Functional Programming: Clojure"},
                              :course-iteration/question-sets '({:question-set/id "1", :question-set/name "Test 01: Generative Testing", :question-set/max-points 7, :question-set/achieved-points 4} {:question-set/id "3", :question-set/name "Test 00: Alien", :question-set/max-points 2, :question-set/achieved-points 2})}]
          created-overview (create-user-overview-get course-iterations)
          should-be-included-in-output ["Programming 1 2020 SuSe"
                                        "Specialization Functional Programming: Clojure 2022 WiSe"
                                        "Week 1:"
                                        "4/7"]]
      (t/is (every? #(string/includes? created-overview %) should-be-included-in-output))))
  (testing "Testing list element is displayed if nothing is handed over the overview"
    (let [created-overview (create-user-overview-get [])]
      (t/is (not (string/includes? created-overview "<li>")))
      (t/is (string/includes? created-overview "Your Courses:")))))
