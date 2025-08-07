(ns controllers.xss-test
  (:require
   [clojure.string :as string]
   [clojure.test :as t :refer [deftest testing]]
   [controllers.course.course-controller :as cc]
   [db :refer [Database-Protocol]]
   [services.course-service.course-service :refer [->CourseService]]))

(def xss-data "<script>alert('XSS')</script>")

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

(def test-db
  (mock-db
   :get-all-courses (fn [] [{:course/id 1 :course/name xss-data}])
   :add-course! (fn [course] (assoc course :course/id 999))))

(def ^:private services
  {:course-service (->CourseService test-db)})

(deftest test-xss-create-course
  (testing "Controllers containing html-code should be escaped to prevent XSS."
    (let [req {:params {:name xss-data}}
          post-destination "https://some.url"]
      (t/are [html-output] (not (string/includes? html-output xss-data))
        (cc/create-course-get req post-destination)
        (cc/submit-create-course! req post-destination (services :course-service))))))