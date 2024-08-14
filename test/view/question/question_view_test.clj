(ns view.question.question-view-test
  (:require
    [clojure.string :as string]
    [clojure.test :as t :refer [deftest testing]]
    [views.question.question-view :refer [question-form]]))


(deftest test-question-form-dispatch
  (testing "Test that a text-area is shown in the view, when the question is a free text question."
    (let [question {:question/type :question.type/free-text
                    :question/statement "Why 42?"}
          dispatched-form (question-form question "https://some.url")]
      (t/is (string/includes? dispatched-form "textarea"))))

  (testing "Test that checkboxes are shown in the view, when the question is a multiple-choice question."
    (let [question {:question/type :question.type/multiple-choice
                    :question/statement "Why 42?"
                    :question/possible-solutions [{:solution/id "1" :solution/statement "A"}
                                                  {:solution/id "2" :solution/statement "B"}
                                                  {:solution/id "3" :solution/statement "C"}]}
          dispatched-form (question-form question "https://some.url")]
      (t/is (string/includes? dispatched-form "checkbox"))))

  (testing "Test that radio-buttons are shown in the view, when the question is a single-choice question."
    (let [question {:question/type :question.type/single-choice
                    :question/statement "Why 42?"
                    :question/possible-solutions [{:solution/id "1" :solution/statement "A"}
                                                  {:solution/id "2" :solution/statement "B"}
                                                  {:solution/id "3" :solution/statement "C"}]}
          dispatched-form (question-form question "https://some.url")]
      (t/is (string/includes? dispatched-form "radio")))))
