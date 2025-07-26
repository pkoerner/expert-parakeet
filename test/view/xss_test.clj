(ns view.xss-test 
  (:require
   [clojure.string :as string]
   [clojure.test :as t :refer [deftest testing]]
   [views.course.create-course-view :refer [create-course-form]]))

(deftest test-create-course-view
  (testing "Strings containing html-code in the create-course-form should be escaped to prevent XSS."
    (let [xss-data "<script>alert('XSS')</script>"
          test-result (create-course-form "https://some.url" :course-data {:name xss-data})]
      (t/is (not (string/includes? test-result xss-data))))))