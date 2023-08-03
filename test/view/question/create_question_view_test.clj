(ns view.question.create-question-view-test
  (:require
    [clojure.test :as t :refer [deftest testing]]
    [views.question.question-view :refer [question-form]]
    [clojure.string :as string]))

(deftest test-question-form-dispatch
  (testing "Test that a text-area is shown in the view, when the question is a free text question."
         (let [question {:question/type :question.type/free-text
                         :question/question-statement "Why 42?"}
               dispatched-form (question-form question "https://some.url")]
           (t/is (string/includes? dispatched-form "textarea"))))
  
  (testing "Test that checkboxes are shown in the view, when the question is a multiple-choice question."
    (let [question {:question/type :question.type/multiple-choice
                    :question/question-statement "Why 42?"
                    :question/possible-solutions ["A" "B" "C"]}
          dispatched-form (question-form question "https://some.url")]
      (t/is (string/includes? dispatched-form "checkbox"))))
  
  (testing "Test that radio-buttons are shown in the view, when the question is a single-choice question."
    (let [question {:question/type :question.type/single-choice
                    :question/question-statement "Why 42?"
                    :question/possible-solutions ["A" "B" "C"]}
          dispatched-form (question-form question "https://some.url")]
      (t/is (string/includes? dispatched-form "radio")))))

(t/run-test test-question-form-dispatch)