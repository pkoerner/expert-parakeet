(ns controllers.course.course-controller-test
  (:require
    [clojure.spec.alpha :as s]
    [clojure.string :as string]
    [clojure.test :as t :refer [deftest testing]]
    [clojure.test.check.clojure-test :refer [defspec]]
    [clojure.test.check.generators :as gen]
    [clojure.test.check.properties :as prop]
    [controllers.course.course-controller :refer [create-course-get
                                                  submit-create-course!]]
    [ring.util.codec :refer [form-encode]]
    [services.course-service.course-service :as cs :refer [->CourseService]]
    [services.course-service.p-course-service :refer [PCourseService
                                                      validate-course]]
    [views.course.create-course-view :refer [create-course-error-keys]]))


(def ^:private error-map-gen
  (let [rand-error-map (->> create-course-error-keys
                            (map (fn [key] {(str key) (str "Error for key " key)}))
                            (gen/elements))]
    (gen/fmap #(apply merge %)
              (gen/vector rand-error-map 1 2))))


#_{:clj-kondo/ignore [:unresolved-symbol]}


(defspec test-generated-create-course-get 100
  (prop/for-all [error-map error-map-gen]
                (let [post-destination "https://some.url"
                      res (create-course-get {:query-params error-map}
                                             post-destination)]
                  (t/is (and (every? #(string/includes? res %) (vals error-map))
                             (string/includes? res post-destination))))))


(defn- stub-course-service
  [& {:keys [validate-course create-course]
      :or {validate-course (fn [& _] {})
           create-course (fn [& _] {})}}]
  (reify PCourseService
    (validate-course
      [_self course-name]
      (validate-course course-name))

    (create-course
      [_self course-name]
      (create-course course-name))))


(deftest test-submit-create-course!
  (testing "Test that the db-add-function get's called with the correct values with different parameters."
    (let [test-request {:__anti-forgery-token ""
                        :multipart-params {"course" "nice name"}}
          db-add-fun-stub (fn [course-name]
                            (t/is (s/valid? :course/course-name course-name)))
          course-service (stub-course-service :create-course db-add-fun-stub)
          redirect-uri "https://some.url"]
      (doseq [course-name ["name1" "name2"]]
        (submit-create-course!
          (assoc-in test-request [:multipart-params "course"] course-name)
          redirect-uri
          course-service))))

  (testing "Test that the db-add-function is not called when the parameters are invalid.
            And that the correct error message is send with the redirect."
    (let [test-request {:__anti-forgery-token ""
                        :multipart-params {"course" "nice name"}}
          db-add-fun-stub (fn [_course-name]
                            (t/is false "The function to create a course was called but shouldn't be!"))
          course-service (stub-course-service
                           :validate-course (fn [& args]
                                              (apply (partial validate-course (->CourseService)) args))
                           :create-course db-add-fun-stub)
          redirect-uri "https://some.url"
          wrong-course-name ""]
      (t/are [request expected-error]
             (let [response (submit-create-course! request redirect-uri course-service)
                   response-status (:status response)
                   response-url (get-in response [:headers "Location"])]
               (and (= 302 response-status)
                    (string/includes? response-url (form-encode expected-error))))
        (assoc-in test-request [:multipart-params "course"] wrong-course-name)
        "Der ausgewählte Name war inkorrekt!"))))
