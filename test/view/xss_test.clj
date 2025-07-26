(ns view.xss-test 
  (:require
   [clojure.string :as string]
   [clojure.test :as t :refer [deftest testing]]
   [views.answer.answer-view :refer [submit-success-view]]
   [views.course-iteration.create-course-iteration-view :refer [course-iteration-form]]
   [views.course.create-course-view :refer [create-course-form]]
   [views.question.create-question-view :refer [create-question-form]]))

(def xss-data "<script>alert('XSS')</script>")

(deftest test-create-course-view
  (testing "Strings containing html-code should be escaped to prevent XSS."
    (t/are [html-output] (not (string/includes? html-output xss-data))
      (create-course-form "https://some.url" :course-data {:name xss-data})
      (create-question-form [] "https://some.url" :question-data {:statement xss-data :criteria xss-data :category xss-data})
      (submit-success-view xss-data)
      (course-iteration-form [{:course/name xss-data}] [{:question-set/name xss-data}] "https://some.url"))))