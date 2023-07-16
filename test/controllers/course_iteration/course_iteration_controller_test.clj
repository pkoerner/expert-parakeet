(ns controllers.course-iteration.course-iteration-controller-test
  (:require
    [clojure.spec.alpha :as s]
    [clojure.string :as string]
    [clojure.test :as t :refer [deftest testing]]
    [clojure.test.check.clojure-test :refer [defspec]]
    [clojure.test.check.generators :as gen]
    [clojure.test.check.properties :as prop]
    [controllers.course-iteration.course-iteration-controller :refer
     [create-course-iteration-get submit-create-course-iteration!]]
    [ring.util.codec :refer [form-encode]]
    [views.course-iteration.create-course-iteration-view :refer [create-course-iteration-errors]]))


(def ^:private error-map-gen
  (gen/fmap #(apply merge %) (gen/vector (gen/elements (map (fn [[key val]] {(str key) val}) create-course-iteration-errors))
                                         1 4)))


#_{:clj-kondo/ignore [:unresolved-symbol]}


(defspec test-create-course-iteration-get 100
  (prop/for-all [error-map error-map-gen]
                (let [post-destination "destination"
                      res (create-course-iteration-get {:query-params error-map}
                                                       post-destination)]
                  (t/is (and (every? #(string/includes? res %) (vals error-map))
                             (string/includes? res post-destination))))))


(deftest test-submit-create-course-iteration!
  (testing "Test that the db-add-function get's called with the correct values with different parameters."
    (let [test-request {:__anti-forgery-token ""
                        :multipart-params {"course-id" "123"
                                           "year" "2023"
                                           "semester" "WiSe"
                                           "question-set-ids" ["1"]}}
          db-add-fun-stub (fn [course-id year semester question-set-ids]
                            (t/is (s/valid? :course/id course-id))
                            (t/is (s/valid? :course-iteration/year year))
                            (t/is (s/valid? :course-iteration/semester semester))
                            (t/is (s/valid? (s/coll-of :question-set/id) question-set-ids)))
          redirect-uri "S"]
      (doseq [course-id ["1" "50009"]
              year ["2023" "2024"]
              semester ["WiSe" "SoSe"]
              question-set-ids [[] ["1" "2" "3"]]]
        (submit-create-course-iteration!
          (-> test-request
              (assoc-in [:multipart-params "course-id"] course-id)
              (assoc-in [:multipart-params "year"] year)
              (assoc-in [:multipart-params "semester"] semester)
              (assoc-in [:multipart-params "question-set-ids"] question-set-ids))
          redirect-uri
          :db-add-fun db-add-fun-stub))))

  (testing "Test that the db-add-function is not called when the parameters are invalid. 
            And that the correct error message is send with the redirect."
    (let [test-request {:__anti-forgery-token ""
                        :multipart-params {"course-id" "123"
                                           "year" "2023"
                                           "semester" "WiSe"
                                           "question-set-ids" ["1"]}}
          db-add-fun-stub (fn [_course-id _year _semester _question-set-ids]
                            (t/is false "The function to create a course-itration was called but shouldn't be!"))
          redirect-uri "S"
          wrong-course-id ""
          wrong-year "-2023"
          wrong-semester "Sommer"
          wrong-question-set-ids [""]]

      (t/are [request expected-error]
             (let [response (submit-create-course-iteration! request redirect-uri :db-add-fun db-add-fun-stub)
                   response-status (:status response)
                   response-url (get-in response [:headers "Location"])]
               (and (= 302 response-status)
                    (string/includes? response-url (form-encode expected-error))))
        (assoc-in test-request [:multipart-params "course-id"] wrong-course-id)
        "Der ausgewählte Kurs war inkorrekt!"

        (assoc-in test-request [:multipart-params "year"] wrong-year)
        "Das ausgewählte Jahr war inkorrekt!"

        (assoc-in test-request [:multipart-params "semester"] wrong-semester)
        "Das ausgewählte Semester war inkorrekt!"

        (assoc-in test-request [:multipart-params "question-set-ids"] wrong-question-set-ids)
        "Das ausgewählte question-set-war nicht korrekt!"))))

