(ns db
  (:require
    [clojure.string :as string]
    [clojure.walk]
    [datahike.api :as d]
    [db.dummy-data :as dummy-data]
    [db.schema]
    [nano-id.core :refer [nano-id]]))


(defprotocol Database-Protocol

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
    [this course])

  (get-course-iteration-by-id
    [this course-iteration-id])

  (add-course-iteration!
    [this course])

  (get-question-by-id
    [this id])

  (add-question!
    [this question])

  (add-question-set!
    [this question-set-name course-iteration-id required-points questions])

  (add-user-answer!
    [this user-id question-id answer-or-solution-ids]
    "Adds an answer/solution-ids of a user to a question.")

  ;; no test because it only uses add-user-answer!
  (add-multiple-user-answers!
    [this user-id question-ids-and-answer-or-solution-ids]
    "Adds multiple answers of a user to multiple questions.
     Remark: Answers has to be a collection of tuples containing a question-id
     and an answer/solution ids.")

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
    "get the user given the github-id of the user, returns nil when github-id is unknown")

  (get-course-by-id
    [this course-id]
    "get the corresponding course given the id")

  (get-all-users
    [this]
    "get all users in database")

  (get-all-corrections-from-user
    [this user-id]
    "get all corrections by the user-id of the creator of the answer it belongs to")

  (get-all-corrections-from-corrector
    [this corrector-id]
    "get all corrections by the user-id of the corrector")

  (get-answer-by-id
    [this answer-id]
    "get an answer given its id"))


(def id-len 10)


;; provide the db attr of the id you want to check for collisions
(defn- generate-id
  [db attr]
  (loop [id (nano-id id-len)]
    (if (seq (d/q '[:find ?e
                    :in $ ?attr ?id
                    :where [?e ?attr ?id]]
                  db attr id))
      (recur (nano-id id-len))
      id)))


(defn- resolve-enums
  [entity]
  (clojure.walk/postwalk
    (fn [x]
      (if (and (map? x)
               (= (keys x) [:db/ident]))
        (x :db/ident)
        x))
    entity))


(deftype Database
  [conn]

  Database-Protocol

  (get-course-iterations-of-student
    [this user-id]
    (->> (d/q '[:find (pull ?ci pattern)
                :in $ pattern ?u
                :where
                [?m :membership/user ?u]
                [?ci :course-iteration/members ?m]]
              @(.conn this) db.schema/course-iteration-slim-pull [:user/id user-id])
         (mapv first)
         (resolve-enums)))


  (get-all-course-iterations
    [this]
    (->>
      (d/q '[:find (pull ?e pattern)
             :in $ pattern
             :where [?e :course-iteration/id]]
           @(.conn this) db.schema/course-iteration-very-slim-pull)
      (mapv first)
      (resolve-enums)))


  (get-graded-answers-of-question-set
    [_this _user-id _question-set-id]
    ;; TODO: we are not saving points in the answer anymore
    (->> []
         (mapv first)
         (resolve-enums))
    #_(d/q '[:find (pull ?a [:answer/points
                                   {:answer/question [:question/id :question/type]}])
                   :in $ ?u ?t
                   :where
                   [?a :answer/creator ?u]
                   [?a :answer/question ?f]
                   [?t :question-set/questions ?f]
                   [?a :answer/points]]
                 @(.conn this) [:user/id user-id] [:question-set/id question-set-id]))


  (get-question-ids-for-user
    [this user-id]
    (->> (d/q '[:find (pull ?q [:question/id])
                :in $ ?u
                :where
                [?m :membership/user ?u]
                [?ci :course-iteration/members ?m]
                [?ci :course-iteration/question-sets ?qs]
                [?qs :question-set/questions ?q]]
              @(.conn this) [:user/id user-id])
         (mapv first)
         (resolve-enums)))


  (get-question-set-by-id
    [this id]
    (->> (d/pull @(.conn this)
                 db.schema/question-set-pull
                 [:question-set/id id])
         (resolve-enums)))


  (get-all-question-sets
    [this]
    (->> (d/q '[:find (pull ?e pattern)
                :in $ pattern
                :where
                [?e :question-set/id]]
              @(.conn this) db.schema/question-set-no-questions-pull)
         (mapv first)
         (resolve-enums)))


  (get-all-courses
    [this]
    (->> (d/q '[:find (pull ?e pattern)
                :in $ pattern
                :where
                [?e :course/id]]
              @(.conn this) db.schema/course-slim-pull)
         (mapv first)
         (resolve-enums)))


  (get-course-iterations-of-course
    [this course-id]
    (->> (d/q '[:find (pull ?ci pattern)
                :in $ pattern ?course-id
                :where
                [?c :course/id ?course-id]
                [?ci :course-iteration/course ?c]]
              @(.conn this) db.schema/course-iteration-pull course-id)
         (mapv first)
         (resolve-enums)))


  (get-all-question-ids
    [this]
    (->>
      (d/q '[:find (pull ?e pattern)
             :in $ pattern
             :where
             [?e :question/id]]
           @(.conn this) db.schema/question-slim-pull)
      (mapv first)
      (resolve-enums)))


  (get-all-question-categories
    [this]
    (->> (d/q '[:find ?c
                :where
                [_ :question/categories ?c]]
              @(.conn this))
         (mapv first)
         (resolve-enums)))


  (add-course!
    [this course]
    (let [course-name (get course :course/name)
          existing-course-names (map :course/name (get-all-courses this))]
      (if (some #(= (string/lower-case course-name) (string/lower-case %)) existing-course-names)
        (throw (AssertionError. (str "There is already a course with the same name in the database. Please check the existing course and wether you need to create a new one.")))
        (let [id (generate-id @(.conn this) :course/id)
              tx-result (d/transact (.conn this)
                                    [{:course/id id
                                      :course/name course-name}])
              db-after (:db-after tx-result)]
          (->> (d/pull db-after db.schema/course-slim-pull [:course/id id])
               (resolve-enums))))))


  (get-course-iteration-by-id
    [this course-iteration-id]
    (->> (d/pull @(.conn this)
                 db.schema/course-iteration-pull
                 [:course-iteration/id course-iteration-id])
         (resolve-enums)))


  (add-course-iteration!
    [this course]
    (let [id (generate-id @(.conn this) :course-iteration/id)
          tx-result (d/transact (.conn this)
                                [{:course-iteration/id id
                                  :course-iteration/course [:course/id (get-in course [:course-iteration/course :course/id])]
                                  :course-iteration/year (course :course-iteration/year)
                                  :course-iteration/semester (course :course-iteration/semester)
                                  :course-iteration/question-sets (mapv (fn [qs] [:question-set/id (qs :question-set/id)])
                                                                        (course :course-iteration/question-sets))}])
          db-after (:db-after tx-result)]
      (->> (d/pull db-after db.schema/course-iteration-slim-pull [:course-iteration/id id])
           (resolve-enums))))


  (get-question-by-id
    [this id]
    (->> (d/pull @(.conn this)
                 db.schema/question-pull
                 [:question/id id])
         (resolve-enums)))


  (add-question!
    [this question]
    ;; TODO: this needs to take a course as an argument so we can add the question to the owning course
    (let [question-ids (map :question/id (get-all-question-ids this))
          question-list (map #(select-keys (db/get-question-by-id this %)
                                           [:question/type
                                            :question/statement
                                            :question/max-points])
                             question-ids)]
      (if (some #(= % (select-keys question [:question/type :question/statement :question/max-points])) question-list)
        (throw (AssertionError. (str "There is a similar question already in the data base. Please check the existing question and wether you need to create a new one. " (select-keys question [:question/type :question/statement :question/max-points]))))
        (let [possible-solutions (->> (question :question/possible-solutions)
                                      (mapv (fn [sol]
                                              {:solution/id (generate-id @(.conn this) :solution/id)
                                               :solution/statement sol})))
              possible-solutions-lookup (->> possible-solutions
                                             (map (fn [sol]
                                                    [(sol :solution/statement) (sol :solution/id)]))
                                             (into {}))
              correct-solutions (->> (question :question/correct-solutions)
                                     (mapv (fn [sol]
                                             [:solution/id (possible-solutions-lookup sol)])))
              id (generate-id @(.conn this) :question/id)
              type (:question/type question)
              trans-map (apply assoc {:question/id id
                                      :question/type type
                                      :question/max-points (:question/max-points question)
                                      :question/statement (:question/statement question)
                                      :question/categories (:question/categories question)}
                               (case type
                                 :question.type/free-text
                                 [:question/evaluation-criteria (:question/evaluation-criteria question)]

                                 (:question.type/single-choice :question.type/multiple-choice)
                                 [:question/possible-solutions possible-solutions
                                  :question/correct-solutions correct-solutions]))
              tx-result (d/transact (.conn this) [trans-map])
              db-after (:db-after tx-result)]
          (->> (d/pull db-after db.schema/question-pull [:question/id id])
               (resolve-enums))))))


  (add-question-set!
    [this question-set-name course-iteration-id required-points questions]
    (let [id (generate-id @(.conn this) :question-set/id)
          question-ids (mapv (fn [question]
                               (if (contains? question :question/id)
                                 (:question/id question)
                                 (:question/id (add-question! this question)))) ; frage war noch nicht in db
                             questions)
          tx-result (d/transact (.conn this)
                                [{:question-set/id id
                                  :question-set/name question-set-name
                                  :question-set/required-points required-points
                                  :question-set/questions (mapv (fn [id] [:question/id id]) question-ids)}
                                 [:db/add [:course-iteration/id course-iteration-id] :course-iteration/question-sets [:question-set/id id]]])
          db-after (:db-after tx-result)]
      (->> (d/pull db-after db.schema/question-set-no-questions-pull [:question-set/id id])
           (resolve-enums))))


  (add-user-answer!
    [this user-id question-id answer-or-solution-ids]
    (let [id (generate-id @(.conn this) :answer/id)
          tx {:answer/id id
              :answer/question [:question/id question-id]
              :answer/creator [:user/id user-id]}
          tx (merge tx (if (string? answer-or-solution-ids)
                         {:answer/answer answer-or-solution-ids}
                         {:answer/selected-solutions (mapv (fn [sol] [:solution/id sol]) answer-or-solution-ids)}))
          tx-result (d/transact (.conn this) [tx])
          db-after (:db-after tx-result)]
      (->> (d/pull db-after db.schema/answer-slim-pull [:answer/id id])
           (resolve-enums))))


  (add-multiple-user-answers!
    [this user-id answers]
    (mapv (fn [[question-id answer-or-soution-ids]]
            (add-user-answer! this user-id question-id answer-or-soution-ids))
          answers))


  (get-all-answers
    [this]
    (->> (d/q '[:find (pull ?e pattern)
                :in $ pattern
                :where
                [?e :answer/id]]
              @(.conn this) db.schema/answer-slim-pull)
         (mapv first)
         (resolve-enums)))


  (get-corrections-of-answer
    [this answer-id]
    (->> (d/q '[:find (pull ?correction pattern) ?timestamp
                :in $ pattern ?answer
                :where
                [?correction :correction/answer ?answer ?tx]
                [?tx :db/txInstant ?timestamp]]
              ;; slim pull, because we assume the caller knows the question already
              @(.conn this) db.schema/correction-slim-pull [:answer/id answer-id])
         (mapv (fn [[correction timestamp]] (merge correction {:correction/timestamp timestamp})))
         (resolve-enums)))


  (add-correction!
    [this answer-id {feedback :correction/feedback
                     points :correction/points
                     corrector-id :corrector/id ; TODO rename this to :correction/corrector
                     }]
    (let [id (generate-id @(.conn this) :answer/id)
          tx-result (d/transact (.conn this)
                                [{:correction/id id
                                  :correction/corrector [:user/id corrector-id]
                                  :correction/answer [:answer/id answer-id]
                                  :correction/feedback feedback
                                  :correction/points points}])
          db-after (:db-after tx-result)]
      (->> (d/pull db-after db.schema/correction-slim-pull [:correction/id id])
           (resolve-enums))))


  (add-user!
    [this github-id]
    (if (some? (get-user-by-github-id this github-id))
      (throw (AssertionError. (str "There is already a user with the same github-id in the database.")))
      (let [user-id (generate-id @(.conn this) :user/id)
            tx-result (d/transact (.conn this)
                                  [{:user/id user-id
                                    :user/github-id github-id}])
            db-after (:db-after tx-result)]
        (->> (d/pull db-after db.schema/user-pull [:user/id user-id])
             (resolve-enums)))))


  (get-user-by-id
    [this user-id]
    (->> (d/pull @(.conn this)
                 db.schema/user-pull
                 [:user/id user-id])
         (resolve-enums)))


  (get-user-by-github-id
    [this github-id]
    (->> (d/q '[:find (pull ?e pattern)
                :in $ pattern ?github-id
                :where
                [?e :user/github-id ?github-id]]
              @(.conn this) db.schema/user-pull github-id)
         (ffirst)
         (resolve-enums)))


  (get-course-by-id
    [this course-id]
    (->> (d/pull @(.conn this)
                 db.schema/course-pull
                 [:course/id course-id])
         (resolve-enums)))


  (get-all-users
    [this]
    (->> (d/q '[:find (pull ?e pattern)
                :in $ pattern
                :where
                [?e :user/id]]
              @(.conn this) db.schema/user-pull)
         (mapv first)
         (resolve-enums)))


  (get-all-corrections-from-user
    [this student-id]
    (->> (d/q '[:find (pull ?correction pattern) ?timestamp
                :in $ pattern ?student-id
                :where
                [?answer :answer/creator ?student-id]
                [?correction :correction/answer ?answer ?tx]
                [?tx :db/txInstant ?timestamp]]
              @(.conn this) db.schema/correction-pull [:user/id student-id])
         (mapv (fn [[correction timestamp]] (merge correction {:correction/timestamp timestamp})))
         (resolve-enums)))


  (get-all-corrections-from-corrector
    [this corrector-id]
    (->>
      (d/q '[:find (pull ?correction pattern) ?timestamp
             :in $ pattern ?corrector-id
             :where
             [?correction :correction/corrector ?corrector-id ?tx]
             [?tx :db/txInstant ?timestamp]]
           @(.conn this) db.schema/correction-pull [:user/id corrector-id])
      (mapv (fn [[correction timestamp]] (merge correction {:correction/timestamp timestamp})))
      (resolve-enums)))


  (get-answer-by-id
    [this answer-id]
    (->> (d/pull @(.conn this)
                 db.schema/answer-pull
                 [:answer/id answer-id])
         (resolve-enums))))


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
