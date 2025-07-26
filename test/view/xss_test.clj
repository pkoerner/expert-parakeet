(ns view.xss-test 
  (:require
   [clojure.string :as string]
   [clojure.test :as t :refer [deftest testing]]
   [views.course.create-course-view :refer [create-course-form]]
   [views.question.create-question-view :refer [create-question-form]]))

(deftest test-create-course-view
  (testing "Strings containing html-code in the create-course-form should be escaped to prevent XSS."
    (let [xss-data "<script>alert('XSS')</script>"
          test-result (create-course-form "https://some.url" :course-data {:name xss-data})]
      (t/is (not (string/includes? test-result xss-data))))))


(deftest test-create-question-form
  (testing "Strings containing html-code in the create-question-form should be escaped to prevent XSS."
    (let [xss-data "<script>alert('XSS')</script>"
          test-result (create-question-form [] "https://some.url" :question-data {:statement xss-data :criteria xss-data :category xss-data})]
      (println test-result)
      (t/is (not (string/includes? test-result xss-data)) "XSS payload should not appear unescaped in the any field."))))