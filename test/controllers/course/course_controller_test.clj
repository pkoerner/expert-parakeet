(ns controllers.course.course-controller-test
  (:require
    [clojure.spec.alpha :as s]
    [clojure.string :as string]
    [clojure.test :as t :refer [deftest testing]]
    [controllers.course.course-controller :refer [create-course-get
                                                  submit-create-course!]]
    [db :refer [Database-Protocol]]
    [ring.util.codec :refer [form-encode]]
    [services.course-service.course-service :as cs :refer [->CourseService]]
    [services.course-service.p-course-service :refer [PCourseService
                                                      validate-course]]))


(deftest test-create-course-get
  (let [empty-request {}]
    (testing "Returns a form object on normal invocation."
      (let [post-destination "post-destination"
            res (create-course-get empty-request
                                   post-destination)]
        (t/is (and (string/includes? res "form")
                   (string/includes? res post-destination)))))))


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


(defn- mock-db
  [& {:keys [get-all-courses]
      :or {get-all-courses (fn [& _] {})}}]
  (reify Database-Protocol
    (get-all-courses
      [_self]
      (get-all-courses))))


(deftest test-submit-create-course!
  (testing "Test that the db-add-function get's called with the correct values with different parameters."
    (let [test-request {:__anti-forgery-token ""}
          db-add-fun-stub (fn [course]
                            (t/is (s/valid? (s/keys :req [:course/name]) course)))
          course-service (stub-course-service :create-course db-add-fun-stub)
          post-destination "https://some.url"]
      (doseq [course-name ["name1" "name2"]]
        (submit-create-course!
          (assoc-in test-request [:params :name] course-name)
          post-destination
          course-service))))

  (testing "Test that the db-add-function is not called when the parameters are invalid.
            And that the correct error message is send with the redirect."
    (let [mock-db (mock-db)
          test-request {:__anti-forgery-token ""}
          db-add-fun-stub (fn [_name]
                            (t/is false "The function to create a course was called but shouldn't be!"))
          course-service (stub-course-service
                           :validate-course (fn [& args]
                                              (apply (partial validate-course (->CourseService mock-db)) args))
                           :create-course db-add-fun-stub)
          post-destination "https://some.url"
          wrong-course-name ""]
      (t/are [request expected-error]
             (let [response (submit-create-course! request post-destination course-service)]
               (string/includes? response expected-error))
        (assoc-in test-request [:params :name] wrong-course-name)
        "Der ausgewählte Name war inkorrekt!"))))
