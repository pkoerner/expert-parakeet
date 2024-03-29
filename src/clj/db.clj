(ns db
  (:require
    [clojure.string :as string]
    [datahike.api :as d]
    [db.dummy-data :as dummy-data]
    [db.schema :refer [db-schema]]
    [nano-id.core :refer [nano-id]]))


(def id-len 10)


(defprotocol Database-Protocol

  (generate-id
    [this attr])

  (get-course-iterations-of-student
    [this user-id])

  (get-all-course-iterations
    [this])

  ;; think unnecessary -> service and domain
  (get-graded-answers-of-question-set
    [this user-id question-set-id])

  ;; unnecessary in my opinion because workaround in domain/service
  ;; (get-questions-for-user
  ;;   [this corrector-id])

  (get-question-ids-for-user
    [this user-id]
    "Fetches all question-ids belonging to a user.")

  (get-answers-for-question
    [this question-id]
    "Fetches all answers of all users for one question.")

  ;; think unnecessary
  (get-all-answers-with-corrections
    [this]
    "Fetches every answer with a correction from the database")

  (get-all-corrections-of-corrector
    [this corrector-id])

  (get-question-set-by-id
    [this id])

  (get-all-question-sets
    [this])

  (get-all-courses
    [this])

  (get-course-iterations-of-course
    [this course-id])

  (get-all-question-ids
    [this])

  (get-all-question-categories
    [this])

  (add-course!
    [this course-name])

  (get-course-iteration-by-id
    [this course-iteration-id])

  (add-course-iteration-with-question-sets!
    [this course-id year semester question-set-ids])

  ;; no test because it only uses add-course-iteration-with-question-sets!
  (add-course-iteration!
    [this course-id year semester])

  (get-question-by-id
    [this id])

  (get-question-and-possible-solutions-by-id
    [this id])

  (add-question!
    [this question])

  (add-question-set!
    [this question-set-name course-iteration-id passing-score questions start end])

  (add-user-answer!
    [this user-id question-id answer]
    "Adds an answer of a user to a question.")

  ;; no test because it only uses add-user-answer!
  (add-multiple-user-answers!
    [this user-id answers]
    "Adds multiple answers of a user to multiple questions.
               Remark: Answers has to be a collection of tuples containing a question-id
               and an answer.")

  (get-all-answers
    [this])

  ;; think unnecessary because it returns an answer based on the answer-id?
  (get-answers-for-correction
    [this answer-id])

  (get-corrections-of-answer
    [this answer-id])

  (add-correction!
    [this ant-id correction])

  (add-user!
    [this git-id]
    "add a new user to the db with a new id, the given git-id and an empty coll of course-iterations.")

  (get-user-by-id
    [this id]
    "get the user given the user-id id.")

  (get-user-by-git-id
    [this git-id]
    "get the user given the git-id of the user")

  (get-course-by-id
    [this course-id]
    "get the corresponding course given the id")

  (get-all-user
    [this]
    "get all users in database")

  (get-user-id-by-git-id
    [this git-id]
    "get the user id given the git-id of the user. This function returns nil in case the user does not exist.")

  (get-all-corrections-from-user
    [this user-id]
    "get all corrections by user-id")

  (get-all-corrections-from-corrector
    [this corrector-id]
    "get all corrections by the user-id of the corrector"))


(deftype Database
  [conn]

  Database-Protocol

  ;; provide the db attr of the id you want to check for collisions
  (generate-id
    [this attr]
    (loop [id (nano-id id-len)]
      (if (seq (d/q '[:find ?e
                      :in $ ?attr ?id
                      :where [?e ?attr ?id]]
                    @(.conn this) attr id))
        (recur (nano-id id-len))
        id)))


  (get-course-iterations-of-student
    [this user-id]
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
               @(.conn this) [:user/id user-id])))


  (get-all-course-iterations
    [this]
    (mapv first (d/q '[:find (pull ?e [:course-iteration/id {:course-iteration/course [:course/id :course/course-name]}
                                       :course-iteration/year
                                       :course-iteration/semester
                                       :course-iteration/year
                                       {:course-iteration/question-sets [:question-set/id]}])
                       :where [?e :course-iteration/id]]
                     @(.conn this))))


  (get-graded-answers-of-question-set
    [this user-id question-set-id]
    (mapv first
          (d/q '[:find (pull ?a [:answer/points
                                 {:answer/question [:question/id :question/type]}])
                 :in $ ?u ?t
                 :where
                 [?a :answer/user ?u]
                 [?a :answer/question ?f]
                 [?t :question-set/questions ?f]
                 [?a :answer/points]]
               @(.conn this) [:user/id user-id] [:question-set/id question-set-id])))



  ;; (get-questions-for-user
  ;;   [this user-id]
  ;;   (mapv first
  ;;         (d/q '[:find (pull ?course-iteration [:course-iteration/semester
  ;;                                               :course-iteration/year
  ;;                                               {:course-iteration/course [:course/course-name]}
  ;;                                               {:course-iteration/question-sets [:question-set/id :question-set/name
  ;;                                                                                 {:question-set/questions [:question/id :question/type]}]}])
  ;;                :in $ ?corr
  ;;                :where
  ;;                [?corr :user/course-iterations ?course-iteration]]
  ;;              @(.conn this) [:user/id user-id])))


  (get-question-ids-for-user
    [this user-id]
    (mapv first
          (d/q '[:find (pull ?q [:question/id])
                 :in $ ?u
                 :where
                 [?u :user/course-iterations ?ci]
                 [?ci :course-iteration/question-sets ?qs]
                 [?qs :question-set/questions ?q]]
               @(.conn this) [:user/id user-id])))


  (get-answers-for-question
    [this question-id]
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
           @(.conn this) question-id)))


  (get-all-answers-with-corrections
    [this]
    (mapv first
          (d/q '[:find (pull ?answer [:answer/id])
                 :in $
                 :where
                 [?correction :correction/answer ?answer]]
               @(.conn this))))


  (get-all-corrections-of-corrector
    [this corrector-id]
    (mapv first
          (d/q '[:find (pull ?k [{:correction/answer [:answer/id]}])
                 :in $ ?korr
                 :where
                 [?k :correction/corrector ?korr]]
               @(.conn this) [:user/id corrector-id])))


  (get-question-set-by-id
    [this id]
    (d/pull @(.conn this)
            [:question-set/id :question-set/name {:question-set/questions [:question/id :question/question-statement :question/points :question/type :question/possible-solutions]}]
            [:question-set/id id]))


  (get-all-question-sets
    [this]
    (mapv first (d/q '[:find (pull ?e [*])
                       :where [?e :question-set/id]]
                     @(.conn this))))


  (get-all-courses
    [this]
    (mapv first
          (d/q '[:find (pull ?e [:course/id :course/course-name {:course/question-sets [:question-set/id :question-set/name]}])
                 :where [?e :course/id]]
               @(.conn this))))


  (get-course-iterations-of-course
    [this course-id]
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
                     @(.conn this) course-id)))


  (get-all-question-ids
    [this]
    (mapv first (d/q '[:find (pull ?e [:question/id])
                       :where [?e :question/id]]
                     @(.conn this))))


  (get-all-question-categories
    [this]
    (mapv first
          (d/q '[:find ?c
                 :where [_ :question/categories ?c]]
               @(.conn this) [])))


  (add-course!
    [this course-name]
    (let [excisting-course-names (map #(:course/course-name %) (get-all-courses this))]
      (if (some #(= (string/lower-case course-name) (string/lower-case %)) excisting-course-names)
        (throw (AssertionError. (str "There is already a course with the same name in the database. Please check the existing course and wether you need to create a new one.")))
        (let [id (generate-id this :course/id)
              tx-result (d/transact (.conn this)
                                    [{:db/id -1
                                      :course/id id
                                      :course/course-name course-name}])
              db-after (:db-after tx-result)]
          (d/pull db-after [:course/id :course/course-name]
                  [:course/id id])))))


  (get-course-iteration-by-id
    [this course-iteration-id]
    (d/pull @(.conn this)
            [:course-iteration/id {:course-iteration/course [:course/id :course/course-name]}
             :course-iteration/year :course-iteration/semester
             {:course-iteration/question-sets [:question-set/id :question-set/name]}]
            [:course-iteration/id course-iteration-id]))


  (add-course-iteration-with-question-sets!
    [this course-id year semester question-set-ids]
    (let [id (generate-id this :course-iteration/id)
          question-set-ids-keyed (mapv (fn [question-set-id] [:question-set/id (str question-set-id)])
                                       question-set-ids)
          tx-result (d/transact (.conn this)
                                [{:db/id     -1
                                  :course-iteration/id   id
                                  :course-iteration/course [:course/id course-id]
                                  :course-iteration/year year
                                  :course-iteration/semester semester
                                  :course-iteration/question-sets question-set-ids-keyed}])
          db-after (:db-after tx-result)]
      (d/pull db-after [:course-iteration/id
                        :course-iteration/course
                        :course-iteration/year
                        :course-iteration/semester
                        :course-iteration/question-sets]
              [:course-iteration/id id])))


  (add-course-iteration!
    [this course-id year semester]
    (add-course-iteration-with-question-sets! this course-id year semester []))


  (get-question-by-id
    [this id]
    (d/pull @(.conn this)
            ["*"]
            [:question/id id]))


  (get-question-and-possible-solutions-by-id
    [this id]
    (d/pull @(.conn this)
            [:question/id :question/question-statement :question/points :question/type :question/possible-solutions]
            [:question/id id]))


  (add-question!
    [this question]
    (let [question-ids (map #(:question/id %) (get-all-question-ids this))
          question-list (map #(select-keys (db/get-question-by-id this %) [:question/type
                                                                           :question/question-statement
                                                                           :question/points])
                             question-ids)]
      (if (some #(= % (select-keys question [:question/type :question/question-statement :question/points])) question-list)
        (throw (AssertionError. (str "There is a similar question already in the data base. Please check the existing question and wether you need to create a new one. " (select-keys question [:question/type :question/question-statement]))))
        (let [id (generate-id this :question/id)
              type (:question/type question)
              trans-map (apply assoc {:db/id        -1
                                      :question/id     id
                                      :question/type    type
                                      :question/points (:question/points question)
                                      :question/question-statement (:question/question-statement question)
                                      :question/categories (:question/categories question)}
                               (cond (= type :question.type/free-text)
                                     [:question/evaluation-criteria (:question/evaluation-criteria question)]

                                     (= type :question.type/single-choice)
                                     [:question/possible-solutions (:question/possible-solutions question)
                                      :question/single-choice-solution (:question/single-choice-solution question)]

                                     (= type :question.type/multiple-choice)
                                     [:question/possible-solutions (:question/possible-solutions question)
                                      :question/multiple-choice-solution (:question/multiple-choice-solution question)]))
              tx-result (d/transact (.conn this) [trans-map])
              db-after (:db-after tx-result)]
          (d/pull db-after  [:question/id :question/question-statement :question/points :question/type :question/possible-solutions
                             :question/evaluation-criteria :question/single-choice-solution
                             :question/multiple-choice-solution
                             :question/categories]
                  [:question/id id])))))


  (add-question-set!
    [this question-set-name course-iteration-id passing-score questions start end]
    (let [id (generate-id this :question-set/id)
          question-ids (doall (map (fn [question]
                                     (if (:question/id question)
                                       (:question/id question)
                                       (:question/id (add-question! this question)))) ; frage war noch nicht in db
                                   questions))
          tx-result-question-set (d/transact (.conn this)
                                             [{:db/id                      -1
                                               :question-set/id            id
                                               :question-set/name          question-set-name
                                               :question-set/start         start
                                               :question-set/end           end
                                               :question-set/passing-score passing-score
                                               :question-set/questions (mapv (fn [q-id] [:question/id q-id]) question-ids)}])
          course-iteration (get-course-iteration-by-id this course-iteration-id)
          _tx-result-course-iteration (d/transact conn [{:db/id         -1
                                                         :course-iteration/id       (:course-iteration/id course-iteration)
                                                         :course-iteration/semester (:course-iteration/semester course-iteration)
                                                         :course-iteration/year     (:course-iteration/year course-iteration)
                                                         :course-iteration/question-sets    (conj (:course-iteration/question-sets course-iteration) [:question-set/id id])}])
          db-after (:db-after tx-result-question-set)]
      (d/pull db-after [:question-set/id :question-set/name] [:question-set/id id])))


  (add-user-answer!
    [this user-id question-id answer]
    (let [id (generate-id this :answer/id)
          tx-result (d/transact (.conn this)
                                [{:db/id -1
                                  :answer/id id
                                  :answer/question [:question/id question-id]
                                  :answer/user [:user/id user-id]
                                  :answer/answer answer}])
          db-after (:db-after tx-result)]
      (d/pull db-after [:answer/id {:answer/question [:question/id]}] [:answer/id id])))


  (add-multiple-user-answers!
    [this user-id answers]
    (mapv
      (fn [[question-id answer]]
        (add-user-answer! this user-id question-id answer))
      answers))


  (get-all-answers
    [this]
    (mapv first
          (d/q '[:find (pull ?e [:answer/id {:answer/question [:question/id]} {:answer/user [:user/id]}  :answer/answer :answer/points])
                 :where [?e :answer/id]]
               @(.conn this))))


  (get-answers-for-correction
    [this answer-id]
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
               @(.conn this) [:answer/id answer-id])))


  (get-corrections-of-answer
    [this answer-id]
    (let [existing-answer-ids (map #(:answer/id %) (get-all-answers this))]
      (if (some #(= answer-id %) existing-answer-ids)
        (map
          #(zipmap [:correction/feedback :correction/timestamp] %)
          (d/q '[:find ?corr-feedback ?timestamp
                 :in $ ?answer-id
                 :where
                 [?answer :answer/id ?answer-id]
                 [?correction :correction/answer ?answer ?tx]
                 [?tx :db/txInstant ?timestamp]
                 [?correction :correction/feedback ?corr-feedback]]
               @(.conn this) answer-id))
        (throw (AssertionError. (re-pattern (str "The answer-id: " answer-id "does not exist in the database!")))))))


  (add-correction!
    [this ant-id {feedback :correction/feedback points :correction/points corr-id :corrector/id}]
    (let [tx-result (d/transact (.conn this)
                                [{:db/id -1
                                  :correction/feedback feedback
                                  :correction/corrector [:user/id corr-id]
                                  :correction/answer [:answer/id ant-id]}
                                 {:answer/id ant-id
                                  :answer/points points}])
          db-after (:db-after tx-result)
          ids (:tempids tx-result)]
      (d/pull db-after [:correction/feedback {:correction/answer [:answer/points]}] (get ids -1))))


  (add-user!
    [this git-id]
    (let [existing-git-ids (map #(:user/git-id %) (get-all-user this))]
      (if (some #(= git-id %) existing-git-ids)
        (throw (AssertionError. (str "There is already a user with the same git-id in the database. Please check the existing course and wether you need to create a new one.")))
        (let [user-id (generate-id this :user/id)
              tx-result (d/transact (.conn this)
                                    [{:db/id -1
                                      :user/id user-id
                                      :user/git-id git-id
                                      :user/course-iterations []}])
              db-after (:db-after tx-result)]
          (d/pull db-after [:user/id :user/git-id :user/course-iterations]
                  [:user/id user-id])))))


  (get-user-by-id
    [this user-id]
    (d/pull @(.conn this)
            [:user/id :user/git-id {:user/course-iterations [:course-iteration/id]}]
            [:user/id user-id]))


  (get-user-by-git-id
    [this git-id]
    (d/pull @(.conn this)
            [:user/id :user/git-id {:user/course-iterations [:course-iteration/id]}]
            [:user/git-id git-id]))


  (get-course-by-id
    [this course-id]
    (d/pull @(.conn this)
            [:course/id :course/course-name {:course/question-sets [:question-set/id :question-set/name]}]
            [:course/id course-id]))


  (get-all-user
    [this]
    (mapv first
          (d/q '[:find (pull ?e [:user/id :user/git-id {:user/course-iterations [:course-iteration/id]}])
                 :where [?e :user/id]]
               @(.conn this))))


  (get-user-id-by-git-id
    [this git-id]
    (first (d/q '[:find ?id
                  :in $ ?git-id
                  :where
                  [?e :user/git-id ?git-id]
                  [?e :user/id ?id]]
                @(.conn this) git-id)))


  (get-all-corrections-from-user
    [this user-id]
    (mapv
      #(zipmap [:correction/feedback :answer/points :question/points :question/question-statement :correction/timestamp :answer/answer] %)
      (d/q '[:find ?feedback ?points-reached ?reachable-points ?question-statement ?timestamp ?answers
             :in $ ?user-id
             :where
             [?user :user/id ?user-id]
             [?answer :answer/user ?user]
             [?answer :answer/points ?points-reached]
             [?answer :answer/answer ?answers]
             [?answer :answer/question ?question]
             [?correction :correction/answer ?answer]
             [?correction :correction/feedback ?feedback ?tx]
             [?question :question/question-statement ?question-statement]
             [?question :question/points ?reachable-points]
             [?tx :db/txInstant ?timestamp]]
           @(.conn this) user-id)))


  (get-all-corrections-from-corrector
    [this corrector-id]
    (mapv
      #(zipmap [:correction/feedback :answer/points :question/points :question/question-statement :correction/timestamp :answer/answer] %)
      (d/q '[:find ?feedback ?points-reached ?reachable-points ?question-statement ?timestamp ?answers
             :in $ ?user-id
             :where
             [?user :user/id ?user-id]
             [?correction :correction/corrector ?user]
             [?correction :correction/feedback ?feedback ?tx]
             [?correction :correction/answer ?answer]
             [?answer :answer/points ?points-reached]
             [?answer :answer/answer ?answers]
             [?answer :answer/question ?question]
             [?question :question/question-statement ?question-statement]
             [?question :question/points ?reachable-points]
             [?tx :db/txInstant ?timestamp]]
           @(.conn this) corrector-id))))


;; use mem db

(def mem-cfg
  {:store {:backend :mem
           :id "expert-db"}
   :initial-tx db-schema})


;; use file db


#_(def file-cfg
    {:store {:backend :file
             :path "/tmp/expert-db"}
     :initial-tx schema})


(defn create-conn
  [cfg]
  (if (d/database-exists? cfg)
    (println "Found existing DB at:" (get-in cfg [:store :path]))
    (d/create-database cfg))

  (d/connect cfg))


(def create-database
  (let [conn (create-conn mem-cfg)]
    (d/transact conn dummy-data/dummy-data)
    (Database. conn)))

