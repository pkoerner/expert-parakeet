(ns controllers.xss-test
  (:require
   [clojure.string :as string]
   [clojure.test :as t :refer [deftest testing]]
   [controllers.course.course-controller :as cc]
   [datahike.api :as d]
   [controllers.question.question-controller :refer [create-question-get submit-create-question!]]
   [db :refer [Database-Protocol]]
   [db.xss-dummy-data :as xss-dummy-data :refer [xss-payload]]
   [db.schema :refer [db-schema]]
   [services.answer-service.answer-service :refer [->AnswerService]]
   [services.correction-service.correction-service :refer [->CorrectionService]]
   [services.course-iteration-service.course-iteration-service :refer [->CourseIterationService]]
   [services.course-service.course-service :refer [->CourseService]]
   [services.question-service.question-service :refer [->QuestionService]]
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

(deftest test-xss-create-course
  (testing "Create course html-code should be escaped to prevent XSS."
    (let [req {:params {:name xss-payload}}
          post-destination "https://some.url"]
      (t/are [html-output] (not (string/includes? html-output xss-payload))
        (cc/create-course-get req post-destination)
        (cc/submit-create-course! req post-destination (services :course-service))))))

(deftest test-xss-create-question
  (testing "Create question html-code should be escaped to prevent XSS."
    (let [req {:params {:name xss-payload}}
          get-question-categories-fun (fn [] [xss-payload])
          post-destination "https://some.url"]
      (t/are [html-output] (not (string/includes? html-output xss-payload))
        (create-question-get req get-question-categories-fun post-destination)
        (submit-create-question! req post-destination (:question-service services))
        ))))

;; (deftest test-xss-user-overview
;;   (testing "User overview html-code should be escaped to prevent XSS."
;;     (let [req {:params {:name xss-data}}
;;           post-destination "https://some.url"]
;;       (t/are [html-output] (not (string/includes? html-output xss-data))
;;         (create-user-overview-get (get-all-course-iterations-for-user (:course-iteration-service services) user-github-id))))))