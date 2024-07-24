(ns db
  (:require
    [clojure.string :as string]
    [datahike.api :as d]
    [db.dummy-data :as dummy-data]
    [db.schema]
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

  (get-question-ids-for-user
    [this user-id]
    "Fetches all question-ids that a user can see/answer in their course iterations.")

  ;; only used for testing?
  (get-all-corrections-of-corrector
    [this corrector-id])

  (get-question-set-by-id
    [this id])

  ;; this should be get-all-question-sets-in-course
  (get-all-question-sets
    [this])

  (get-all-courses
    [this])

  ;; only used for testing
  (get-course-iterations-of-course
    [this course-id])

  ;; this should be get-all-questions-in-course
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

  (add-question!
    [this question])

  (add-question-set!
    [this question-set-name course-iteration-id required-points questions])

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

  ;; only used for testing?
  (get-corrections-of-answer
    [this answer-id])

  (add-correction!
    [this answer-id correction])

  (add-user!
    [this github-id]
    "add a new user to the db with a new id, the given github-id.")

  (get-user-by-id
    [this id]
    "get the user given the user-id id.")

  (get-user-by-github-id
    [this github-id]
    "get the user given the github-id of the user")

  (get-course-by-id
    [this course-id]
    "get the corresponding course given the id")

  (get-all-user
    [this]
    "get all users in database")

  ;; TODO: remove this, just use get-user-by-github-id
  (get-user-id-by-github-id
    [this github-id]
    "get the user id given the github-id of the user. This function returns nil in case the user does not exist.")

  (get-all-corrections-from-user
    [this user-id]
    "get all corrections by the user-id of the creator of the answer it belongs to")

  ;; TODO: merge this with get-all-corrections-of-corrector and add a timestamp
  (get-all-corrections-from-corrector
    [this corrector-id]
    "get all corrections by the user-id of the corrector")

  (get-answer-by-id
    [this answer-id]
    "get an answer given its id"))


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
          (d/q '[:find (pull ?ci pattern)
                 :in $ pattern ?u
                 :where
                 [?m :membership/user ?u]
                 [?ci :course-iteration/members ?m]]
               @(.conn this) db.schema/course-iteration-slim-pull [:user/id user-id])))


  (get-all-course-iterations
    [this]
    (mapv first (d/q '[:find (pull ?e pattern)
                       :in $ pattern
                       :where [?e :course-iteration/id]]
                     @(.conn this) db.schema/course-iteration-very-slim-pull)))


  (get-graded-answers-of-question-set
    [_this _user-id _question-set-id]
    [] ; we are not saving points in the answer anymore
    #_(mapv first
            (d/q '[:find (pull ?a [:answer/points
                                   {:answer/question [:question/id :question/type]}])
                   :in $ ?u ?t
                   :where
                   [?a :answer/creator ?u]
                   [?a :answer/question ?f]
                   [?t :question-set/questions ?f]
                   [?a :answer/points]]
                 @(.conn this) [:user/id user-id] [:question-set/id question-set-id])))


  (get-question-ids-for-user
    [this user-id]
    (mapv first
          (d/q '[:find (pull ?q [:question/id])
                 :in $ ?u
                 :where
                 [?m :membership/user ?u]
                 [?ci :course-iteration/members ?m]
                 [?ci :course-iteration/question-sets ?qs]
                 [?qs :question-set/questions ?q]]
               @(.conn this) [:user/id user-id])))


  (get-all-corrections-of-corrector
    [this corrector-id]
    (mapv first
          (d/q '[:find (pull ?correction pattern)
                 :in $ pattern ?corr
                 :where
                 [?correction :correction/corrector ?corr]]
               @(.conn this) db.schema/correction-slim-pull [:user/id corrector-id])))


  (get-question-set-by-id
    [this id]
    (d/pull @(.conn this)
            db.schema/question-set-pull
            [:question-set/id id]))


  (get-all-question-sets
    [this]
    (mapv first (d/q '[:find (pull ?e pattern)
                       :in $ pattern
                       :where
                       [?e :question-set/id]]
                     @(.conn this) db.schema/question-set-no-questions-pull)))


  (get-all-courses
    [this]
    (mapv first
          (d/q '[:find (pull ?e pattern)
                 :in $ pattern
                 :where
                 [?e :course/id]]
               @(.conn this) db.schema/course-slim-pull)))


  (get-course-iterations-of-course
    [this course-id]
    (mapv first (d/q '[:find (pull ?ci pattern)
                       :in $ pattern ?course-id
                       :where
                       [?c :course/id ?course-id]
                       [?ci :course-iteration/course ?c]]
                     @(.conn this) db.schema/course-iteration-pull course-id)))


  (get-all-question-ids
    [this]
    (mapv first (d/q '[:find (pull ?e pattern)
                       :in $ pattern
                       :where
                       [?e :question/id]]
                     @(.conn this) db.schema/question-slim-pull)))


  (get-all-question-categories
    [this]
    (mapv first
          (d/q '[:find ?c
                 :where
                 [_ :question/categories ?c]]
               @(.conn this))))


  (add-course!
    [this course-name]
    (let [existing-course-names (map :course/name (get-all-courses this))]
      (if (some #(= (string/lower-case course-name) (string/lower-case %)) existing-course-names)
        (throw (AssertionError. (str "There is already a course with the same name in the database. Please check the existing course and wether you need to create a new one.")))
        (let [id (generate-id this :course/id)
              tx-result (d/transact (.conn this)
                                    [{:db/id -1
                                      :course/id id
                                      :course/name course-name}])
              db-after (:db-after tx-result)]
          (d/pull db-after db.schema/course-slim-pull [:course/id id])))))


  (get-course-iteration-by-id
    [this course-iteration-id]
    (d/pull @(.conn this)
            db.schema/course-iteration-pull
            [:course-iteration/id course-iteration-id]))


  (add-course-iteration-with-question-sets!
    [this course-id year semester question-set-ids]
    (let [id (generate-id this :course-iteration/id)
          question-set-ids-keyed (mapv (fn [question-set-id] [:question-set/id question-set-id])
                                       question-set-ids)
          tx-result (d/transact (.conn this)
                                [{:db/id     -1
                                  :course-iteration/id   id
                                  :course-iteration/course [:course/id course-id]
                                  :course-iteration/year year
                                  :course-iteration/semester semester
                                  :course-iteration/question-sets question-set-ids-keyed}])
          db-after (:db-after tx-result)]
      (d/pull db-after db.schema/course-iteration-slim-pull
              [:course-iteration/id id])))


  (add-course-iteration!
    [this course-id year semester]
    (add-course-iteration-with-question-sets! this course-id year semester []))


  (get-question-by-id
    [this id]
    (d/pull @(.conn this)
            db.schema/question-pull
            [:question/id id]))


  (add-question!
    [this question]
    (let [question-ids (map :question/id (get-all-question-ids this))
          question-list (map #(select-keys (db/get-question-by-id this %) [:question/type
                                                                           :question/statement
                                                                           :question/max-points])
                             question-ids)]
      (if (some #(= % (select-keys question [:question/type :question/statement :question/max-points])) question-list)
        (throw (AssertionError. (str "There is a similar question already in the data base. Please check the existing question and wether you need to create a new one. " (select-keys question [:question/type :question/question-statement]))))
        (let [id (generate-id this :question/id)
              type (:question/type question)
              trans-map (apply assoc {:db/id        -1
                                      :question/id     id
                                      :question/type    type
                                      :question/max-points (:question/max-points question)
                                      :question/statement (:question/statement question)
                                      :question/categories (:question/categories question)}
                               (cond (= type :question.type/free-text)
                                     [:question/evaluation-criteria (:question/evaluation-criteria question)]

                                     (= type :question.type/single-choice)
                                     [:question/possible-solutions (:question/possible-solutions question)
                                      :question/correct-solutions (:question/correct-solutions question)]

                                     (= type :question.type/multiple-choice)
                                     [:question/possible-solutions (:question/possible-solutions question)
                                      :question/correct-solutions (:question/correct-solutions question)]))
              tx-result (d/transact (.conn this) [trans-map])
              db-after (:db-after tx-result)]
          (d/pull db-after db.schema/question-pull [:question/id id])))))


  (add-question-set!
    [this question-set-name course-iteration-id required-points questions]
    (let [id (generate-id this :question-set/id)
          question-ids (doall (map (fn [question]
                                     (if (contains? question :question/id)
                                       (:question/id question)
                                       (:question/id (add-question! this question)))) ; frage war noch nicht in db
                                   questions))
          tx-result-question-set (d/transact (.conn this)
                                             [{:db/id                      -1
                                               :question-set/id            id
                                               :question-set/name          question-set-name
                                               :question-set/required-points required-points
                                               :question-set/questions (mapv (fn [q-id] [:question/id q-id]) question-ids)}])
          course-iteration (get-course-iteration-by-id this course-iteration-id)
          ;; TODO: reduce this transaction to the minimum required data to add a new question set
          _tx-result-course-iteration (d/transact conn [{:db/id         -1
                                                         :course-iteration/id       (:course-iteration/id course-iteration)
                                                         :course-iteration/semester (:course-iteration/semester course-iteration)
                                                         :course-iteration/year     (:course-iteration/year course-iteration)
                                                         :course-iteration/question-sets    (conj (:course-iteration/question-sets course-iteration) [:question-set/id id])}])
          db-after (:db-after tx-result-question-set)]
      (d/pull db-after db.schema/question-set-no-questions-pull [:question-set/id id])))


  (add-user-answer!
    [this user-id question-id answer]
    (let [id (generate-id this :answer/id)
          ;; TODO: we need to set :answer/selected-solution instead of :answer/answer when required
          tx-result (d/transact (.conn this)
                                [{:db/id -1
                                  :answer/id id
                                  :answer/question [:question/id question-id]
                                  :answer/creator [:user/id user-id]
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
          (d/q '[:find (pull ?e pattern)
                 :in $ pattern
                 :where
                 [?e :answer/id]]
               @(.conn this) db.schema/answer-slim-pull)))


  (get-corrections-of-answer
    [this answer-id]
    (if-let [_existing-answer (not-empty (try (get-answer-by-id this answer-id) (catch Exception _ nil)))]
      (throw (AssertionError. (str "The answer-id " answer-id " does not exist in the database!")))
      (mapv
        (fn [[correction timestamp]] (merge correction {:correction/timestamp timestamp}))
        (d/q '[:find (pull ?correction pattern) ?timestamp
               :in $ pattern ?answer-id
               :where
               [?answer :answer/id ?answer-id]
               [?correction :correction/answer ?answer ?tx]
               [?tx :db/txInstant ?timestamp]]
             @(.conn this) db.schema/correction-slim-pull answer-id))))


  (add-correction!
    [this answer-id {feedback :correction/feedback
                     points :correction/points
                     corrector-id :corrector/id ; TODO rename this to :correction/corrector
                     }]
    (let [id (generate-id this :answer/id)
          tx-result (d/transact (.conn this)
                                [{:db/id -1
                                  :correction/id id
                                  :correction/corrector [:user/id corrector-id]
                                  :correction/answer [:answer/id answer-id]
                                  :correction/feedback feedback
                                  :correction/points points}])
          db-after (:db-after tx-result)]
      (d/pull db-after db.schema/correction-slim-pull [:correction/id id])))


  (add-user!
    [this github-id]
    (if-let [_existing-user (not-empty (try (get-user-by-github-id this github-id) (catch Exception _ nil)))]
      (throw (AssertionError. (str "There is already a user with the same github-id in the database.")))
      (let [user-id (generate-id this :user/id)
            tx-result (d/transact (.conn this)
                                  [{:db/id -1
                                    :user/id user-id
                                    :user/github-id github-id}])
            db-after (:db-after tx-result)]
        (d/pull db-after db.schema/user-pull [:user/id user-id]))))


  (get-user-by-id
    [this user-id]
    (d/pull @(.conn this)
            db.schema/user-pull
            [:user/id user-id]))


  (get-user-by-github-id
    [this github-id]
    ;; TODO: use d/q to mitigate logs and exceptions when there is no user for the given id
    (d/pull @(.conn this)
            db.schema/user-pull
            [:user/github-id github-id]))


  (get-course-by-id
    [this course-id]
    (d/pull @(.conn this)
            db.schema/course-pull
            [:course/id course-id]))


  (get-all-user
    [this]
    (mapv first
          (d/q '[:find (pull ?e [:user/id :user/github-id {:user/course-iterations [:course-iteration/id]}])
                 :where [?e :user/id]]
               @(.conn this))))


  (get-user-id-by-github-id
    [this github-id]
    (first (d/q '[:find ?id
                  :in $ ?github-id
                  :where
                  [?e :user/github-id ?github-id]
                  [?e :user/id ?id]]
                @(.conn this) github-id)))


  (get-all-corrections-from-user
    [this user-id]
    (mapv
      #(zipmap [:correction/feedback :answer/points :question/max-points :question/statement :correction/timestamp :answer/selected-solutions :answer/answer] %)
      (d/q '[:find ?feedback ?points-reached ?reachable-points ?question-statement ?timestamp ?selected-solutions ?answers
             :in $ ?user-id
             :where
             [?user :user/id ?user-id]
             [?answer :answer/creator ?user]
             [?answer :answer/selected-solutions ?selected-solutions]
             [?answer :answer/answer ?answers]
             [?answer :answer/question ?question]
             [?correction :correction/answer ?answer ?tx]
             [?correction :correction/feedback ?feedback]
             [?correction :correction/points ?points-reached]
             [?question :question/statement ?question-statement]
             [?question :question/max-points ?reachable-points]
             [?tx :db/txInstant ?timestamp]]
           @(.conn this) user-id)))


  (get-all-corrections-from-corrector
    [this corrector-id]
    (mapv
      #(zipmap [:correction/feedback :answer/points :question/max-points :question/statement :correction/timestamp :answer/selected-solutions :answer/answer] %)
      (d/q '[:find ?feedback ?points-reached ?reachable-points ?question-statement ?timestamp ?selected-solutions ?answers
             :in $ ?user-id
             :where
             [?user :user/id ?user-id]
             [?correction :correction/corrector ?user ?tx]
             [?correction :correction/feedback ?feedback]
             [?correction :correction/answer ?answer]
             [?correction :correction/points ?points-reached]
             [?answer :answer/answer ?answers]
             [?answer :answer/selected-solutions ?selected-solutions]
             [?answer :answer/question ?question]
             [?question :question/statement ?question-statement]
             [?question :question/max-points ?reachable-points]
             [?tx :db/txInstant ?timestamp]]
           @(.conn this) corrector-id)))


  (get-answer-by-id
    [this answer-id]
    (d/pull @(.conn this)
            db.schema/answer-pull
            [:answer/id answer-id])))


;; use mem db

(def mem-cfg
  {:store {:backend :mem
           :id "expert-db"}
   :initial-tx db.schema/db-schema})


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
