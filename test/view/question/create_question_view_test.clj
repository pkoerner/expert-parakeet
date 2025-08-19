(ns view.question.create-question-view-test
  (:require
    [clojure.string :as string]
    [clojure.test :as t :refer [deftest testing]]
    [clojure.test.check.clojure-test :refer [defspec]]
    [clojure.test.check.generators :as gen]
    [clojure.test.check.properties :as prop]
    [domain.spec]
    [views.question.create-question-view :refer [create-question-form]]))


(deftest test-create-question-form
  (testing "Testing that the create-question-form contains every category and test that is sent to post-address."
    (t/are [categories post-destination]
           (let [test-result (str (create-question-form categories post-destination))]
             (and
               (every? #(string/includes? test-result %) categories)
               (string/includes? test-result post-destination)))

      ["Cat1" "Cat2" "Cat3"]
      "https://some.url"

      []
      "https://some.url"

      ["cat1" "Cat2" "more" "Categories" "than" "I" "can" "count" "so" "much"]
      "https://some.url"))

  (testing "Testing that errors are displayed in the form, when errors are passed to the view."
    (let [categories []
          post-destination "https://some.url"
          categories-error {:categories "Wrong categories"}
          type-error {:type "Wrong type"}
          question-statement-error {:statement "Wrong question-statement"}
          points-error {:max-points "Wrong points"}
          evaluation-criteria-error {:evaluation-criteria "Wrong evaluation-criteria"}
          possible-single-choice-solutions-error {:possible-single-choice-solutions "Wrong possible-single-choice-solutions"}
          possible-multiple-choice-solutions-error {:possible-multiple-choice-solutions "Wrong possible-multiple-choice-solutions"}
          correct-single-choice-solution-error {:correct-single-choice-solutions "Wrong correct-single-choice-solutions"}
          correct-multiple-choice-solution-error {:correct-multiple-choice-solutions "Wrong correct-multiple-choice-solutions"}]
      (t/are [errors]
             (let [test-result (create-question-form categories post-destination :errors errors)]
               (every? #(string/includes? test-result %) (vals errors)))

        categories-error
        type-error
        question-statement-error
        points-error
        evaluation-criteria-error
        possible-single-choice-solutions-error
        possible-multiple-choice-solutions-error
        correct-single-choice-solution-error
        correct-multiple-choice-solution-error
        ;; some random merges of the error messages. No particular reason why those are tested.
        (merge categories-error type-error question-statement-error)
        (merge points-error evaluation-criteria-error possible-multiple-choice-solutions-error)
        (merge correct-single-choice-solution-error correct-multiple-choice-solution-error))))


  (testing "Testing that data to populate the view is displayed in the form."
    (let [categories ["Cat1" "Cat2"]
          post-destination "https://some.url"
          possible-solutions ["Solution1" "Solution2" "More solutions"]
          basic-input {;; :question/id "q-2"
                       :statement "Valid question statement."
                       :categories [(first categories)]
                       :max-points "5"
                       :evaluation-criteria "Some evaluation criteria"
                       :possible-single-choice-solutions possible-solutions
                       :possible-multiple-choice-solutions possible-solutions
                       :correct-single-choice-solution-error [(first possible-solutions)]
                       :correct-multiple-choice-solution-error [(first possible-solutions) (second possible-solutions)]}]
      (t/are [question-data]
             (let [test-result (create-question-form categories post-destination :question-data question-data)]
               (every? (fn [val]
                         (if (coll? val)
                           (every? #(string/includes? test-result %) (map str val))
                           (string/includes? test-result (str val))))
                       (vals ; :type is not displayed
                        (dissoc question-data :type))))

        (assoc basic-input :type "free-text")
        (assoc basic-input :type "single-choice")
        (assoc basic-input :type "multiple-choice")))))


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
  (let [categories []
        post-destination "https://some.url"]
    (prop/for-all [error-map error-map-gen]
                  (let [test-result (create-question-form categories post-destination :errors error-map)]
                    (every? #(string/includes? test-result %) (vals error-map))))))
