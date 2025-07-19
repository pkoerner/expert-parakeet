(ns controllers.course.course-controller-test
  (:require
    [clojure.spec.alpha :as s]
    [clojure.string :as string]
    [clojure.test :as t :refer [deftest testing]]
    [controllers.course.course-controller :refer [create-course-get
                                                  submit-create-course!]]
    [db :refer [Database-Protocol]]
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
  [& {:keys [get-all-courses validate-course create-course]
      :or {get-all-courses (fn [& _] {})
           validate-course (fn [& _] {})
           create-course (fn [& _] {})}}]
  (reify PCourseService
    (get-all-courses
      [_self]
      (get-all-courses))

    (validate-course
      [_self course-form-data]
      (validate-course course-form-data))

    (create-course
      [_self course]
      (create-course course))))


(defn- mock-db
  [& {:keys [get-all-courses add-course!]
      :or {get-all-courses (fn [& _] {})
           add-course! (fn [& _] {})}}]
  (reify Database-Protocol
    (get-all-courses
      [_self]
      (get-all-courses))
    (add-course!
      [_self course]
      (add-course! course))))


(deftest test-submit-create-course!
  (let [db-stub (mock-db)
        course-service (->CourseService db-stub)]
    (testing "Test that the db-add-function get's called with the correct values with different parameters."
      (let [test-request {:__anti-forgery-token ""
                          :params {}}
            db-add-fun-stub (fn [course]
                              (t/is (s/valid? (s/keys :req [:course/name]) course))
                              (assoc course :course/id "id"))
            course-service (stub-course-service :create-course db-add-fun-stub
                                                :validate-course (partial validate-course course-service))
            post-destination "https://some.url"]
        (doseq [course-name ["name1" "name2"]]
          (submit-create-course!
            (assoc-in test-request [:params :name] course-name)
            post-destination
            course-service))))

    (testing "Test that the db-add-function is not called when the parameters are invalid.
              And that the correct error message is sent."
      (let [test-request {:__anti-forgery-token ""
                          :params {}}
            db-add-fun-stub (fn [_name]
                              (t/is false "The function to create a course was called but shouldn't be!"))
            course-service (stub-course-service :create-course db-add-fun-stub
                                                :validate-course (partial validate-course course-service))
            post-destination "https://some.url"
            wrong-course-name ""]
        (t/are [request expected-error]
               (let [response (submit-create-course! request post-destination course-service)]
                 (string/includes? response expected-error))
          (assoc-in test-request [:params :name] wrong-course-name)
          "The course name must be a non-empty string")))))

(deftest test-submit-create-course-xss!
  (testing "Test that strings containing XSS scripts are being escaped when creating a response. 
            Note: The course name itself can still contain unescaped scripts."
   (let [db-stub (mock-db)
         course-service (->CourseService db-stub)
         xss-data "<script>alert('XSS')</script>"
         test-request {:__anti-forgery-token ""
                       :params {:name xss-data}}
         response (submit-create-course! test-request "/create-course" course-service)]
     (t/is (not (string/includes? response xss-data))))))