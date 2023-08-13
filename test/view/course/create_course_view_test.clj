(ns view.course.create-course-view-test
  (:require
    [clojure.string :as string]
    [clojure.test :as t :refer [deftest testing]]
    [clojure.test.check.clojure-test :refer [defspec]]
    [clojure.test.check.generators :as gen]
    [clojure.test.check.properties :as prop]
    [test-extensions :refer [test-with-check]]
    [views.course.create-course-view :refer [course-form create-course-error-keys submit-success-view]]))


(def ^:private opts {:clojure.spec.test.check/opts {:num-tests 200}})


(deftest test-course-from
  (testing "Testing that the course form contains the post-destination."
    (t/are [test-input]
           (let [[post-destination] test-input
                 test-result (str (course-form post-destination))]
             (string/includes? test-result post-destination))
      ["https://some.url"]))
  (testing "Testing that errors are displayed in the form, when errors are passed to the view."
    (let [post-destination "https://some.url"
          name-error {:course/course-error "Some course-name error"}
          doubling-error {:course/course-already-existed "Some doubling error"}]
      (t/are [errors]
             (let [test-result (course-form post-destination :errors errors)]
               (every? #(string/includes? test-result %) (vals errors)))
        name-error
        doubling-error
        (merge name-error doubling-error)))))


(deftest test-submit-success-view
  (testing "Autogenerated tests for submit success view"
    (test-with-check `submit-success-view opts)))


(def ^:private error-map-gen
  (let [rand-error-map (->> create-course-error-keys
                            (map (fn [key] {key (str "Error for key " key)}))
                            (gen/elements))]
    (gen/fmap #(apply merge %)
              (gen/vector rand-error-map 1 2))))


#_{:clj-kondo/ignore [:unresolved-symbol]}


(defspec test-generated-course-form-errors-are-displayed 100
  (let [post-destination "https://some.url"]
    (prop/for-all [error-map error-map-gen]
                  (let [test-result (course-form post-destination :errors error-map)]
                    (every? #(string/includes? test-result %) (vals error-map))))))
