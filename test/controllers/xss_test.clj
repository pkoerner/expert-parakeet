(ns controllers.xss-test
  (:require
   [clojure.string :as string]
   [clojure.test :as t :refer [deftest testing]]
   [controllers.answer.answer-controller :refer [submit-user-answer!]]
   [controllers.correction.correction-controller :refer [correction-overview-get]]
   [controllers.course-iteration.course-iteration-controller :refer [create-course-iteration-get
                                                                     submit-create-course-iteration!]]
   [controllers.course.course-controller :refer [create-course-get
                                                 submit-create-course!]]
   [controllers.question-set.question-set-controller :refer [question-set-get]]
   [controllers.question.question-controller :refer [create-question-get
                                                     question-get
                                                     submit-create-question!]]
   [controllers.user.user-overview-controller :refer [create-user-overview-get]]
   [datahike.api :as d]
   [db.dummy-data :refer [question-set-fp]]
   [db.schema :refer [db-schema]]
   [db.xss-dummy-data :as xss-dummy-data :refer [course-it-fp q-text
                                                 user1-student
                                                 user2-not-in-course
                                                 xss-payload]]
   [services.answer-service.answer-service :refer [->AnswerService]]
   [services.correction-service.correction-service :refer [->CorrectionService]]
   [services.course-iteration-service.course-iteration-service :refer [->CourseIterationService]]
   [services.course-iteration-service.p-course-iteration-service :refer [get-all-course-iterations-for-user]]
   [services.course-service.course-service :refer [->CourseService]]
   [services.course-service.p-course-service :refer [get-all-courses]]
   [services.question-service.p-question-service :refer [get-question-categories]]
   [services.question-service.question-service :refer [->QuestionService]]
   [services.question-set-service.p-question-set-service :refer [get-all-question-sets]]
   [services.question-set-service.question-set-service :refer [->QuestionSetService]]
   [services.user-service.user-service :refer [->UserService]]))


(defn create-test-db
  [id]
  (let [_ (d/create-database {:store {:backend :mem
                                      :id id}
                              :initial-tx db-schema})
        test-db-conn (d/connect {:store {:backend :mem
                                         :id id}
                                 :initial-tx db-schema})
        _ (d/transact test-db-conn xss-dummy-data/xss-data)
        test-db (db/->Database test-db-conn)]
    test-db))

(def test-db (create-test-db "xss-test-db"))

(def ^:private services
  {:course-service (->CourseService test-db)
   :course-iteration-service (->CourseIterationService test-db)
   :question-set-service (->QuestionSetService test-db)
   :question-service (->QuestionService test-db)
   :answer-service (->AnswerService test-db)
   :user-service (->UserService test-db)
   :correction-service (->CorrectionService test-db)})

; Parameters used in Tests
(def req {})
(def get-question-categories-fun (partial get-question-categories (:question-service services)))
(def post-destination "https://some.url")

; Tests
(deftest test-user-overview
  (testing "User overview html-code should be escaped to prevent XSS." 
    (t/are [html-output] (not (string/includes? html-output xss-payload))
      (create-user-overview-get (get-all-course-iterations-for-user (:course-iteration-service services) (user1-student :user/github-id))))))

(deftest test-question-set 
  (testing "Question set html-code should be escaped to prevent XSS."
    (let [req_member {:session {:user {:id (user1-student :user/id)}} 
                      :route-params {:id (question-set-fp :question-set/id)}}
          req_not_member {:session {:user {:id (user2-not-in-course :user/id)}}
                          :route-params {:id (question-set-fp :question-set/id)}}]
      (t/are [html-output] (not (string/includes? html-output xss-payload))
        (question-set-get req_member (:question-set-service services))
        (question-set-get req_not_member (:question-set-service services))))))

(deftest test-question
  (testing "Question html-code should be escaped to prevent XSS."
    (let [req-member {:session {:user {:id (user1-student :user/id)}}
                      :route-params {:id (q-text :question/id)}}
          req-not-member {:session {:user {:id (user2-not-in-course :user/id)}}
                          :route-params {:id (q-text :question/id)}}]
    (t/are [html-output] (not (string/includes? html-output xss-payload))
      (question-get req-member post-destination (:question-service services))
      (question-get req-not-member post-destination (:question-service services))))))

(deftest test-answer
  (testing "Answer html-code should be escaped to prevent XSS."
    (let [req {:params {:free-text xss-payload}
               :session {:user {:id (user1-student :user/id)}}
               :route-params {:id (q-text :question/id)}}]
      (t/are [html-output] (not (string/includes? html-output xss-payload))
        (submit-user-answer! req (:answer-service services))))))

(deftest test-create-question
  (testing "Create question html-code should be escaped to prevent XSS."
    (let [req-submit {:params {:question-data {:id (:question/id q-text)
                                               :type (:question/type q-text)
                                               :statement (:question/statement q-text)
                                               :evaluation-criteria (:question/evaluation-criteria q-text)
                                               :max-points (:question/max-points q-text)
                                               :categories (:question/categories q-text)}}}]
      (t/are [html-output] (not (string/includes? html-output xss-payload))
        (create-question-get req get-question-categories-fun post-destination)
        (submit-create-question! req-submit post-destination (:question-service services))))))

(deftest test-create-course
  (testing "Create course html-code should be escaped to prevent XSS."
    (let [req-submit {:params {:course-data {:name xss-payload}}}]
      (t/are [html-output] (not (string/includes? html-output xss-payload))
        (create-course-get req post-destination)
        (submit-create-course! req-submit post-destination (services :course-service))))))

(deftest test-create-course-iteration
  (testing "Create course iteration html-code should be escaped to prevent XSS."
    (let [no-courses-fun (fn [] [])
          no-q-sets-fun (fn [] [])
          req-submit-error {}
          req-submit-succes {:params {:course (:course/id (course-it-fp :course-iteration/course))
                                      :year (course-it-fp :course-iteration/year )
                                      :semester (course-it-fp :course-iteration/semester)
                                      :question-sets (course-it-fp :course-iteration/question-sets)}}]
      (t/are [html-output] (not (string/includes? html-output xss-payload))
        (create-course-iteration-get req post-destination
                                     (partial get-all-courses (:course-service services))
                                     (partial get-all-question-sets (:question-set-service services)))
        (create-course-iteration-get req post-destination no-courses-fun no-q-sets-fun) ; view/no-courses
        (submit-create-course-iteration! req-submit-error post-destination
                                         (partial get-all-courses (:course-service services))
                                         (partial get-all-question-sets (:question-set-service services))
                                         (:course-iteration-service services))
        (submit-create-course-iteration! req-submit-succes post-destination
                                         (partial get-all-courses (:course-service services))
                                         (partial get-all-question-sets (:question-set-service services))
                                         (:course-iteration-service services))))))

(deftest test-correction-overview
  (testing "Correction overview html-code should be escaped to prevent XSS."
    (let [req {:session {:user {:id (user2-not-in-course :user/id)}}}]
      (t/are [html-output] (not (string/includes? html-output xss-payload))
        (correction-overview-get req (services :correction-service))))))
