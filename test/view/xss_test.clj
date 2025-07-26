(ns view.xss-test 
  (:require
   [clojure.string :as string]
   [clojure.test :as t :refer [deftest testing]]
   [views.answer.answer-view :as av]
   [views.course-iteration.create-course-iteration-view :as cciv :refer [course-iteration-form]]
   [views.course.create-course-view :as ccv :refer [create-course-form]]
   [views.question.create-question-view :refer [create-question-form
                                                question-success-view]]
   [views.question.question-view :refer [question-form]]))

(def xss-data "<script>alert('XSS')</script>")

(def xss-question {:question/type :question.type/free-text
               :question/statement xss-data 
               :question/max-points 10
               :question/categories [xss-data]})

(deftest test-xss
  (testing "Strings containing html-code should be escaped to prevent XSS."
    (t/are [html-output] (not (string/includes? html-output xss-data))
      ;; Create Course
      (create-course-form "https://some.url" :course-data {:name xss-data})
      (ccv/submit-success-view {:course/name xss-data})
      ;; Create Course Interation
      (course-iteration-form [{:course/name xss-data}] [{:question-set/name xss-data}] "https://some.url")
      (cciv/submit-success-view {:course-iteration/semester xss-data, :course-iteration/year xss-data})
      ;; Create Question
      (create-question-form [xss-data] "https://some.url" xss-question)
      (question-success-view xss-question)
      ;; Answer Question
      (question-form xss-question "https://some.url")
      (av/submit-success-view xss-data))))