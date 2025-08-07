(ns controllers.xss-test
  (:require
   [clojure.string :as string]
   [clojure.test :as t :refer [deftest testing]]
   [controllers.course.course-controller :as cc]))

(def xss-data "<script>alert('XSS')</script>")


(deftest test-xss
  (testing "Controllers containing html-code should be escaped to prevent XSS."
    (t/are [html-output] (not (string/includes? html-output xss-data))
      ;; Create Course
      (cc/create-course-get nil nil)
      (cc/submit-create-course! nil nil nil))))