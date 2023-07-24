(ns db
  (:require
    [datahike.api :as d]
    [db.dummy-data :as dummy-data]
    [db.schema :refer [db-schema]]
    [nano-id.core :refer [nano-id]]))


(def id-len 10)


;; use mem db

(def cfg
  {:store {:backend :mem
           :id "expert-db"}
   :initial-tx db-schema})


;; use file db


#_(def cfg
    {:store {:backend :file
             :path "/tmp/expert-db"}
     :initial-tx schema})


(defn create-conn
  []
  (if (d/database-exists? cfg)
    (println "Found existing DB at:" (get-in cfg [:store :path]))
    (d/create-database cfg))

  (d/connect cfg))


(def conn (create-conn))


(do (d/transact conn dummy-data/dummy-data) nil)


;; provide the db attr of the id you want to check for collisions
(defn generate-id
  [attr]
  (loop [id (nano-id id-len)]
    (if (seq (d/q '[:find ?e
                    :in $ ?attr ?id
                    :where [?e ?attr ?id]]
                  @conn attr id))
      (recur (nano-id id-len))
      id)))


(defn get-course-iterations-of-student
  [user-id]
  (mapv first
        (d/q '[:find (pull ?k [:course-iteration/id
                               {:course-iteration/course [:course/course-name]}
                               :course-iteration/year
                               :course-iteration/semester
                               {:course-iteration/question-sets [:question-set/id :question-set/name
                                                                 {:question-set/questions [:question/id
                                                                                           :question/points]}]}])
               :in $ ?u
               :where
               [?u :user/course-iterations ?k]]
             @conn [:user/id user-id])))


(defn get-graded-answers-of-question-set
  [user-id question-set-id]
  (mapv first
        (d/q '[:find (pull ?a [:answer/points
                               {:answer/question [:question/id :question/type]}])
               :in $ ?u ?t
               :where
               [?a :answer/user ?u]
               [?a :answer/question ?f]
               [?t :question-set/questions ?f]
               [?a :answer/points]]
             @conn [:user/id user-id] [:question-set/id question-set-id])))


(defn get-questions-for-user
  [user-id]
  (mapv first
        (d/q '[:find (pull ?course-iteration [:course-iteration/semester
                                              :course-iteration/year
                                              {:course-iteration/course [:course/course-name]}
                                              {:course-iteration/question-sets [:question-set/id :question-set/name
                                                                                {:question-set/questions [:question/id :question/type]}]}])
               :in $ ?corr
               :where
               [?corr :user/course-iterations ?course-iteration]]
             @conn [:user/id user-id])))


(defn get-question-ids-for-user
  "Fetches all question-ids belonging to
   a user."
  [user-id]
  (mapv first
        (d/q '[:find (pull ?q [:question/id])
               :in $ ?u
               :where
               [?u :user/course-iterations ?ci]
               [?ci :course-iteration/question-sets ?qs]
               [?qs :question-set/questions ?q]]
             @conn [:user/id user-id])))


(defn get-answers-for-question
  "Fetches all answers of all users for one question."
  [question-id]
  (map
    #(zipmap [:answer/id :user/id :answer/timestamp] %)
    (d/q '[:find ?answer-id ?user-id ?timestamp
           :in $ ?question-id
           :where
           [?question :question/id ?question-id]
           [?answer :answer/question ?question]
           [?answer :answer/id ?answer-id ?tx]
           [?tx :db/txInstant ?timestamp]
           [?answer :answer/user ?user]
           [?user :user/id ?user-id]]
         @conn question-id)))


(defn get-all-answers-with-corrections
  "Fetches every answer with a correction from the database"
  []
  (mapv first
        (d/q '[:find (pull ?answer [:answer/id])
               :in $
               :where
               [?correction :correction/answer ?answer]]
             @conn)))


(defn get-all-corrections-of-corrector
  [corrector-id]
  (mapv first
        (d/q '[:find (pull ?k [{:correction/answer [:answer/id]}])
               :in $ ?korr
               :where
               [?k :correction/corrector ?korr]]
             @conn [:user/id corrector-id])))


(defn get-question-set-by-id
  [id]
  (d/pull @conn
          [:question-set/id {:question-set/questions [:question/id :question/question-statement :question/points :question/type :question/possible-solutions]}]
          [:question-set/id id]))


(defn get-all-question-sets
  "Return a vector containing the ids of all
   question-sets in the database."
  []
  (mapv first (d/q '[:find ?id
                     :where [_ :question-set/id ?id]]
                   @conn)))


(defn get-all-courses
  []
  (mapv first (d/q '[:find (pull ?e [:course-iteration/id {:course-iteration/course [:course/id :course/course-name]}
                                     :course-iteration/year
                                     :course-iteration/semester
                                     :course-iteration/year
                                     {:course-iteration/question-sets [:question-set/id]}])
                     :where [?e :course-iteration/id]]
                   @db/conn)))


(defn get-course-iterations-of-course
  [course-id]
  (mapv first (d/q '[:find (pull ?e [:course-iteration/id :course-iteration/semester :course-iteration/year
                                     {:course-iteration/question-sets
                                      [:question-set/id
                                       :question-set/name
                                       {:question-set/questions
                                        [:question/id :question/question-statement
                                         :question/points :question/type :question/possible-solutions
                                         :question/evaluation-criteria
                                         :question/single-choice-solution
                                         :question/multiple-choice-solution]}]}])
                     :in $ ?course-id
                     :where
                     [?f :course/id ?course-id]
                     [?e :course-iteration/course ?f]
                     [?e :course-iteration/id]]
                   @db/conn course-id)))


(defn get-all-questions
  []
  (mapv first (d/q '[:find (pull ?e [:question/id])
                     :where [?e :question/id]]
                   @db/conn)))


(defn add-course!
  [course-name]
  (let [id (generate-id :course/id)
        tx-result (d/transact conn
                              [{:db/id -1
                                :course/id id
                                :course/course-name course-name}])
        db-after (:db-after tx-result)]
    (d/pull db-after [:course/id :course/course-name]
            [:course/id id])))


(defn get-course-iteration-by-id
  [course-iteration-id]
  (d/pull @conn
          [:course-iteration/id {:course-iteration/course [:course/id :course/course-name]}
           :course-iteration/year :course-iteration/semester
           {:course-iteration/question-sets [:question-set/id :question-set/name]}]
          [:course-iteration/id course-iteration-id]))


(defn add-course-iteration!
  [course-id year semester]
  (let [id (generate-id :course-iteration/id)
        tx-result (d/transact conn
                              [{:db/id     -1
                                :course-iteration/id   id
                                :course-iteration/course [:course/id course-id]
                                :course-iteration/year year
                                :course-iteration/semester semester
                                :course-iteration/question-sets []}])
        db-after (:db-after tx-result)]
    (d/pull db-after [:course-iteration/id :course-iteration/course :course-iteration/year :course-iteration/semester :course-iteration/question-sets]
            [:course-iteration/id id])))


(defn get-question-by-id
  [id]
  (d/pull @db/conn
          [:question/id :question/question-statement :question/points :question/type :question/possible-solutions]
          [:question/id id]))


(defn add-question!
  [question]
  (let [id (generate-id :question/id)
        type (:question/type question)
        trans-map (apply assoc {:db/id        -1
                                :question/id     id
                                :question/type    type
                                :question/points (:question/points question)
                                :question/question-statement (:question/question-statement question)}
                         (cond (= type :question.type/free-text)
                               [:question/evaluation-criteria (:question/evaluation-criteria question)]

                               (= type :question.type/single-choice)
                               [:question/possible-solutions (:question/possible-solutions question)
                                :question/single-choice-solution (:question/single-choice-solution question)]

                               (= type :question.type/multiple-choice)
                               [:question/possible-solutions (:question/possible-solutions question)
                                :question/multiple-choice-solution (:question/multiple-choice-solution question)]))
        tx-result (d/transact conn [trans-map])
        db-after (:db-after tx-result)]
    (d/pull db-after  [:question/id :question/question-statement :question/points :question/type :question/possible-solutions
                       :question/evaluation-criteria :question/single-choice-solution
                       :question/multiple-choice-solution]
            [:question/id id])))


(defn add-question-set!
  [question-set-name course-iteration-id passing-score questions start end]
  (let [id (generate-id :question-set/id)
        question-ids (doall (map (fn [question]
                                   (if (:question/id question)
                                     (:question/id question)
                                     (:question/id (add-question! question)))) ; frage war noch nicht in db
                                 questions))
        tx-result-question-set (d/transact conn
                                           [{:db/id                      -1
                                             :question-set/id            id
                                             :question-set/name          question-set-name
                                             :question-set/start         start
                                             :question-set/end           end
                                             :question-set/passing-score passing-score
                                             :question-set/questions (mapv (fn [q-id] [:question/id q-id]) question-ids)}])
        course-iteration (get-course-iteration-by-id course-iteration-id)
        _tx-result-course-iteration (d/transact conn [{:db/id         -1
                                                       :course-iteration/id       (:course-iteration/id course-iteration)
                                                       :course-iteration/semester (:course-iteration/semester course-iteration)
                                                       :course-iteration/year     (:course-iteration/year course-iteration)
                                                       :course-iteration/question-sets    (conj (:course-iteration/question-sets course-iteration) [:question-set/id id])}])
        db-after (:db-after tx-result-question-set)]
    (d/pull db-after [:question-set/id :question-set/name] [:question-set/id id])))


(defn add-user-answer!
  "Adds an answer of a user to a question."
  [user-id question-id answer]
  (let [id (generate-id :answer/id)
        tx-result (d/transact conn
                              [{:db/id -1
                                :answer/id id
                                :answer/question [:question/id question-id]
                                :answer/user [:user/id user-id]
                                :answer/answer answer}])
        db-after (:db-after tx-result)]
    (d/pull db-after [:answer/id {:answer/question [:question/id]}] [:answer/id id])))


(defn add-multiple-user-answers!
  "Adds multiple answers of a user to multiple questions.
   Remark: Answers has to be a collection of tuples containing a question-id
   and an answer."
  [user-id answers]
  (mapv
    (fn [[question-id answer]]
      (db/add-user-answer! user-id question-id answer))
    answers))


(defn get-all-answers
  []
  (d/q '[:find (pull ?e [:answer/id :answer/user :answer/question :answer/answer])
         :where [?e :answer/id]]
       @db/conn))


(defn get-answers-for-correction
  [answer-id]
  (mapv first
        (d/q '[:find (pull ?answer [:answer/id
                                    :answer/points
                                    :answer/answer
                                    {:answer/question [:question/question-statement :question/points :question/evaluation-criteria]}])
               :in $ ?answer
               :where
               [?answer :answer/question ?question]
               [?question :question/type ?type]
               [(= ?type :question.type/free-text)]]
             @conn [:answer/id answer-id])))


(defn get-corrections-of-answer
  [answer-id]
  (map
    #(zipmap [:correction/feedback :correction/timestamp] %)
    (d/q '[:find ?corr-feedback ?timestamp
           :in $ ?answer-id
           :where
           [?answer :answer/id ?answer-id]
           [?correction :correction/answer ?answer ?tx]
           [?tx :db/txInstant ?timestamp]
           [?correction :correction/feedback ?corr-feedback]]
         @conn answer-id)))


(defn add-correction!
  [ant-id {feedback :correction/feedback points :correction/points corr-id :corrector/id}]
  (let [tx-result (d/transact conn
                              [{:db/id -1
                                :correction/feedback feedback
                                :correction/corrector [:user/id corr-id]
                                :correction/answer [:answer/id ant-id]}
                               {:answer/id ant-id
                                :answer/points points}])
        db-after (:db-after tx-result)
        ids (:tempids tx-result)]
    (d/pull db-after [:correction/feedback {:correction/answer [:answer/points]}] (get ids -1))))


(comment
  (set! *print-length* 5)

  (ffirst (d/q '[:find (count ?e)
                 :where
                 [?e :question/id]] @conn)))


(comment
  (d/pull @conn [:question-set/questions] [:question-set/id 1])
  (d/pull @conn [:question-set/id {:question-set/questions [:question/question-statement]}] [:question-set/id 1])
  (d/pull @conn [:question/question-statement] [:question/id 1]))
