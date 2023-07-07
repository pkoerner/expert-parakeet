(ns view.course-iteration.create-course-iteration-view-test
  (:require [clojure.string :as string]
            [clojure.test :as t :refer [deftest testing]]
            [views.course-iteration.create-course-iteration-view :use [course-iteration-form]]))


(deftest test-course-iteration-form
  (testing "Testing that the course-iteration-form contains every course and test that is sent to it."
   (t/are [test-input]
          (let [[courses question-sets post-destination] test-input
                test-result (str (course-iteration-form courses question-sets post-destination))]
            (and
             (every? #(string/includes? test-result (:course/course-name %)) courses)
             (every? #(string/includes? test-result (:question-set/name %)) question-sets)
             (string/includes? test-result post-destination)))

     [[#:course{:id "2Jw0c5U", :course-name "0x0"}]
      [#:question-set{:id "nA1", :name "T897OJj4U1"}]
      "https://some.url"]

     [[] [] "https://some.url"]

     [[#:course{:id "4091undas", :course-name "HHello"}
       #:course{:id "21408uisdh5U", :course-name "Hell"}
       #:course{:id "dasdaU", :course-name "Bye"}
       #:course{:id "2JwaadsU", :course-name "Tschau"}]
      [#:question-set{:id "nA1", :name "T897OJj4U1"}
       #:question-set{:id "2", :name "Test 2"}
       #:question-set{:id "3", :name "Test 3"}
       #:question-set{:id "4", :name "Test 4"}
       #:question-set{:id "5", :name "Test 5"}
       #:question-set{:id "6", :name "Test 6"}
       #:question-set{:id "7", :name "Test 7"}
       #:question-set{:id "8", :name "Test 8"}
       #:question-set{:id "9", :name "Test 9"}
       #:question-set{:id "10", :name "Test 10"}]
      "https://some.url"])))

(t/run-test test-course-iteration-form)