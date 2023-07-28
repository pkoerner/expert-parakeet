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
    [db]
    [ring.util.codec :refer [form-encode]]
    [services.course-iteration-service.course-iteration-service :as cis :refer [->CourseIterationService]]
    [services.course-iteration-service.p-course-iteration-service :refer [PCourseIterationService validate-course-iteration]]
    [views.course-iteration.create-course-iteration-view :refer [create-course-iteration-error-keys]]))


;; TODO make dummy db instead
(def db db/create-database)


(def ^:private error-map-gen
  (let [rand-error-map (->> create-course-iteration-error-keys
                            (map (fn [key] {(str key) (str "Error for key " key)}))
                            (gen/elements))]
    (gen/fmap #(apply merge %)
              (gen/vector rand-error-map 1 4))))


#_{:clj-kondo/ignore [:unresolved-symbol]}


(defspec test-generated-create-course-iteration-get 100
  (prop/for-all [error-map error-map-gen]
                (let [post-destination "destination"
                      res (create-course-iteration-get {:query-params error-map}
                                                       post-destination db)]
                  (t/is (and (every? #(string/includes? res %) (vals error-map))
                             (string/includes? res post-destination))))))


(deftest test-create-course-iteration-get
  (testing "When there are no courses, an error message is displayed."
    (let [empty-request {}
          get-no-courses-fun (fn [_] [])
          res (create-course-iteration-get empty-request
                                           "post-destination"
                                           db
                                           :get-courses-fun get-no-courses-fun)]
      (t/is (not (string/includes? res "form"))))))


(defn- stub-course-iteration-service
  [& {:keys [validate-course-iteration create-course-iteration]
      :or {validate-course-iteration (fn [& _] {})
           create-course-iteration (fn [& _] {})}}]
  (reify PCourseIterationService
    (validate-course-iteration
      [_self course-id year semester question-set-ids]
      (validate-course-iteration course-id year semester question-set-ids))

    (create-course-iteration
      [_self course-id year semester question-set-ids]
      (create-course-iteration course-id year semester question-set-ids))))


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
          course-iteration-service (stub-course-iteration-service
                                     :create-course-iteration db-add-fun-stub)
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
          course-iteration-service))))

  (testing "Test that the db-add-function is not called when the parameters are invalid. 
            And that the correct error message is send with the redirect."
    (let [test-request {:__anti-forgery-token ""
                        :multipart-params {"course-id" "123"
                                           "year" "2023"
                                           "semester" "WiSe"
                                           "question-set-ids" ["1"]}}
          db-add-fun-stub (fn [_course-id _year _semester _question-set-ids]
                            (t/is false "The function to create a course-itration was called but shouldn't be!"))

          course-iteration-service (stub-course-iteration-service
                                     :validate-course-iteration (fn [& args]
                                                                  (apply (partial validate-course-iteration (->CourseIterationService db)) args))
                                     :create-course-iteration db-add-fun-stub)
          redirect-uri "S"
          wrong-course-id ""
          wrong-year "-2023"
          wrong-semester "Sommer"
          wrong-question-set-ids [""]]

      (t/are [request expected-error]
             (let [response (submit-create-course-iteration! request redirect-uri course-iteration-service)
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
        "Das ausgewählte question-set war nicht korrekt!"))))
