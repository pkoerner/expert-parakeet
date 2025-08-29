(ns view.course-iteration.registration-view-test
  (:require
    [clojure.string :as string]
    [clojure.test :as t :refer [deftest testing]]
    [views.course-iteration.registration-view :refer [registration-get]]))


(deftest registration-get-test
  (testing "Testing that the registration get view shows every course-iteration sent to it"
    (t/are [post-destination user-id course-iterations]
           (let [test-result (str (registration-get post-destination user-id course-iterations))
                 already-registered-courses (filter (fn [c]
                                                      (some
                                                        #(= (:user/id %) user-id)
                                                        (:course-iteration/registrations c)))
                                                    course-iterations)]
             (and
               (every? #(string/includes? test-result (-> % :course-iteration/course :course/name)) course-iterations)
               (= (count already-registered-courses) (count (re-seq #"disabled" test-result)))
               (if (not-empty course-iterations)
                 (string/includes? test-result post-destination)
                 true)))

      "http://localhost:1337/postme"
      "666"
      [#:course-iteration{:id "999"
                          :course {:course/name "Funktionale Programmierung 3"}
                          :registrations []
                          :semester :semester/winter
                          :year 2025}
       #:course-iteration{:id "1000"
                          :course {:course/name "Funktionale Programmierung 4"}
                          :registrations []
                          :semester :semester/summer
                          :year 1970}]

      "http://localhost:1337/postme"
      "666"
      [#:course-iteration{:id "999"
                          :course {:course/name "Funktionale Programmierung 3"}
                          :registrations [{:user/id "666"} {:user/id "invalid"}]
                          :semester :semester/winter
                          :year 2025}
       #:course-iteration{:id "1000"
                          :course {:course/name "Funktionale Programmierung 4"}
                          :registrations []
                          :semester :semester/summer
                          :year 1970}])))
