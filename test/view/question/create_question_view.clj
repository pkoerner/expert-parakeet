(ns view.question.create-question-view
  (:require
    [clojure.string :as string]
    [clojure.test :as t :refer [deftest testing]]
    [clojure.test.check.generators :as gen]
    [clojure.test.check.properties :as prop]
    [domain.spec]
    [views.question.create-question-view :refer [question-form]]))


(deftest test-question-form
  (testing "Testing that the question-form contains every category and test that is sent to post-address."
    (t/are [test-input]
           (let [[categories post-destination] test-input
                 test-result (str (question-form categories post-destination))]
             (and
               (every? #(string/includes? test-result %) categories)
               (string/includes? test-result post-destination)))

      [["Cat1" "Cat2" "Cat3"]
       "https://some.url"]

      [[] "https://some.url"]

      [["cat1" "Cat2" "more" "Categories" "than" "I" "can" "count" "so" "much"]
       "https://some.url"]))


  (testing "Testing that errors are displayed in the form, when errors are passed to the view."
    (let [[categories post-destination] [[] "https://some.url"]
          categories-error #:question{:categories "Wrong categories"}
          type-error #:question{:type "Wrong type"}
          question-statement-error #:question{:statement "Wrong question-statement"}
          points-error #:question{:max-points "Wrong points"}
          evaluation-criteria-error #:question{:evaluation-criteria "Wrong evaluation-criteria"}
          possible-solutions-error #:question{:possible-solutions "Wrong possible-solutions"}
          single-choice-solution-error #:question{:correct-solutions "Wrong single-choice-solution"}
          multiple-choice-solution-error #:question{:correct-solutions "Wrong multiple-choice-solution"}]
      (t/are [errors]
             (let [test-result (question-form categories post-destination :errors errors)]
               (every? #(string/includes? test-result %) (vals errors)))

        categories-error
        type-error
        question-statement-error
        points-error
        evaluation-criteria-error
        possible-solutions-error
        single-choice-solution-error
        multiple-choice-solution-error
        ;; some random merges of the error messages. No particular reason why those are tested.
        (merge categories-error type-error question-statement-error)
        (merge points-error evaluation-criteria-error possible-solutions-error)
        (merge single-choice-solution-error multiple-choice-solution-error))))


  (testing "Testing that data to populate the view is displayed in the form."
    (let [[categories post-destination] [["Cat1" "Cat2"] "https://some.url"]
          possible-solutions ["Solution1" "Solution2" "More solutions"]
          basic-input #:question{:statement "Valid question statement."
                                 :categories [(first categories)]
                                 :max-points 5

                                 :evaluation-criteria "Some evaluation criteria"
                                 :possible-solutions possible-solutions
                                 :correct-solutions [(first possible-solutions)]}]
      (t/are [question-data]
             (let [test-result (question-form categories post-destination :question-data question-data)]
               (every? (fn [val]
                         (if (coll? val)
                           (every? #(string/includes? test-result %) (map str val))
                           (string/includes? test-result (str val))))
                       (vals ; question/type is not displayed
                        (dissoc question-data :question/type))))


        (apply dissoc
               (assoc basic-input :question/type :question.type/free-text)
               [:question/possible-solutions :question/correct-solutions])
        (apply dissoc
               (assoc basic-input :question/type :question.type/single-choice)
               [:question/evaluation-criteria])
        (apply dissoc
               (assoc basic-input :question/type :question.type/multiple-choice)
               [:question/evaluation-criteria])))))


(def ^:private error-map-gen
  (let [rand-error-map (->> [:statement :max-points :type
                             :possible-single-choice-solutions :correct-single-choice-solutions
                             :possible-multiple-choice-solutions :correct-multiple-choice-solutions
                             :categories]
                            (map (fn [key] {key (str "Error for key " key)}))
                            (gen/elements))]
    (gen/fmap #(apply merge %)
              (gen/vector rand-error-map 1 4))))


#_{:clj-kondo/ignore [:unresolved-symbol]}


(defspec test-generated-question-creation-form-errors-are-displayed 100
  (let [[categories post-destination] [[] "https://some.url"]]
    (prop/for-all [error-map error-map-gen]
                  (let [test-result (question-form categories post-destination :errors error-map)]
                    (every? #(string/includes? test-result %) (vals error-map))))))
