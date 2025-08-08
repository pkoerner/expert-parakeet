(ns services.question-service.question-service
  (:require
    [clojure.edn :as edn]
    [clojure.set :as set]
    [clojure.spec.alpha :as s]
    [clojure.string :as string]
    [db]
    [services.question-service.p-question-service :refer [PQuestionService]]
    [util.forms :refer [as-coll validate-form-data]]
    [views.question.question-view :as view]))


(deftype QuestionService
  [db])


(s/fdef get-question-by-id
        :args (s/cat :self #(satisfies? PQuestionService %) :question-id string?)
        :ret  (s/keys :req [:question/id
                            :question/statement
                            :question/max-points
                            :question/type]))


(defn get-question-by-id
  [this question-id]
  (db/get-question-by-id (.db this) question-id))


(s/fdef validate-user-for-question
        :args (s/cat :self #(satisfies? PQuestionService %)
                     :user-id :user/id
                     :question-id :question/id)
        :ret (s/coll-of keyword?))


(defn- get-question-ids-for-user
  [db user-id]
  (db/get-question-ids-for-user db user-id))


(defn validate-user-for-question
  "Checks if a user is assigned to a
   requested question. If so an
   empty error map is returned. Otherwise
   an error-set with a specified error is returned."
  [this user-id question-id]
  (let [users-questions (get-question-ids-for-user (.db this) user-id)
        error-set view/question-errors]
    (if (.contains users-questions {:question/id question-id})
      (disj view/question-errors :not-assigned-to-question)
      error-set)))


;; TODO: the spec for the question argument is incorrect, must not include ids and the solutions must be strings
(s/fdef create-question-impl!
        :args (s/cat :self #(= PQuestionService (type %))
                     :question :question/question)
        :ret :question/question)


(defn- create-question-impl!
  [this course-id question]
  (db/add-question! (.db this) course-id question))


(s/fdef get-question-categories
        :args (s/cat :self #(= PQuestionService (type %)))
        :ret (s/coll-of :question/categories))


(defn- get-question-categories
  [this]
  (db/get-all-question-categories (.db this)))


(def ^:private question-validators
  "List of validator/parsing functions for questions.
   Each element is a tuple containing the form data key and
   a function which takes the currently parsed question result and the value that is saved in the form data (may be nil).
   The validator function either returns an error of the form `{:error \"message\"}` or question fields that get merged with the current result.
   We are using a vector and not a map to preserve the iteration order!"
  [[:type (fn [_ _ value]
            (let [parsed-value (keyword "question.type"
                                        (if (keyword? value)
                                          (name value)
                                          (str value)))]
              (if (s/valid? :question/type parsed-value)
                {:question/type parsed-value}
                {:error "The given question type is invalid"})))]
   [:statement (fn [_ _ value]
                 (let [parsed-value (-> value (str) (string/trim))]
                   (if (s/valid? :question/statement parsed-value)
                     {:question/statement parsed-value}
                     {:error "The question statement must be a non-empty string"})))]
   [:max-points (fn [_ _ value]
                  (let [parsed-value (edn/read-string (str value))]
                    (if (s/valid? :question/max-points parsed-value)
                      {:question/max-points parsed-value}
                      {:error "The maximum points must be a non-negative integer"})))]
   [:categories (fn [_ _ value]
                  (let [categories (->> value
                                        (as-coll)
                                        (map str)
                                        (map string/trim)
                                        (filter (complement empty?))
                                        (set))]
                    (if (s/valid? :question/categories categories)
                      {:question/categories categories}
                      {:error "The categories must be non-empty strings"})))]
   [:evaluation-criteria (fn [_ {:question/keys [type]} value]
                           (when (= type :question.type/free-text)
                             (let [parsed-value (-> value (str) (string/trim))]
                               (if (s/valid? :question/evaluation-criteria parsed-value)
                                 {:question/evaluation-criteria parsed-value}
                                 {:error "The evalatuation criteria must be a string"}))))]
   [:possible-single-choice-solutions (fn [_ {:question/keys [type]} value]
                                        (when (= type :question.type/single-choice)
                                          (let [possible-choices (->> value
                                                                      (as-coll)
                                                                      (map str)
                                                                      (map string/trim)
                                                                      (filter (complement empty?))
                                                                      (set))]
                                            (if (>= (count possible-choices) 1)
                                              {:question/possible-solutions possible-choices}
                                              {:error "There must be at least one possible choice"}))))]
   [:possible-multiple-choice-solutions (fn [_ {:question/keys [type]} value]
                                          (when (= type :question.type/multiple-choice)
                                            (let [possible-choices (->> value
                                                                        (as-coll)
                                                                        (map str)
                                                                        (map string/trim)
                                                                        (filter (complement empty?))
                                                                        (set))]
                                              (if (>= (count possible-choices) 1)
                                                {:question/possible-solutions possible-choices}
                                                {:error "There must be at least one possible choice"}))))]
   [:correct-single-choice-solutions (fn [_ {:question/keys [type possible-solutions]} value]
                                       (when (= type :question.type/single-choice)
                                         (let [correct-choices (->> value
                                                                    (as-coll)
                                                                    (map str)
                                                                    (map string/trim)
                                                                    (filter (complement empty?))
                                                                    (set))]
                                           (cond
                                             (not (set/subset? correct-choices possible-solutions)) {:error "The correct choices must be a subset of the possible choices"}
                                             (not= (count correct-choices) 1) {:error "There must be exactly one correct choice"}
                                             :else {:question/correct-solutions correct-choices}))))]
   [:correct-multiple-choice-solutions (fn [_ {:question/keys [type possible-solutions]} value]
                                         (when (= type :question.type/multiple-choice)
                                           (let [correct-choices (->> value
                                                                      (as-coll)
                                                                      (map str)
                                                                      (map string/trim)
                                                                      (filter (complement empty?))
                                                                      (set))]
                                             (cond
                                               (not (set/subset? correct-choices possible-solutions)) {:error "The correct choices must be a subset of the possible choices"}
                                               :else {:question/correct-solutions correct-choices}))))]])


(extend QuestionService
  PQuestionService
  {:validate-user-for-question validate-user-for-question
   :get-question-by-id get-question-by-id
   :create-question! create-question-impl!
   :get-question-categories get-question-categories
   :validate-question (partial validate-form-data question-validators)})
