(ns services.question-service.question-service
  (:require
    [clojure.spec.alpha :as s]
    [clojure.string :as string]
    [db]
    [services.question-service.p-question-service :refer [PQuestionService]]
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
  " Checks if a user is assgined to a
requested question. If so an
empty error map is returned. Otherwise
an error-set with a specified error is returned. "
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
  [this question]
  (db/add-question! (.db this) question))


(s/fdef get-question-categories
        :args (s/cat :self #(= PQuestionService (type %)))
        :ret (s/coll-of :question/categories))


(defn- get-question-categories
  [this]
  (db/get-all-question-categories (.db this)))


(defn- as-coll
  [coll-or-single]
  (if (or (nil? coll-or-single) (coll? coll-or-single))
    coll-or-single
    [coll-or-single]))


(def ^:private question-keys
  [:question/statement :question/max-points :question/type
   :question/possible-solutions :question/correct-solutions
   :question/evaluation-criteria
   :question/categories])


(def ^:private to-question-type
  {"free-text" :question.type/free-text
   "single-choice" :question.type/single-choice
   "multiple-choice" :question.type/multiple-choice})


(defn- create-validation-functions-with-error-msg
  "Takes as input a question map with keys from the `:question` namespace.
   
   Constructs a map consisting of all keys from the `:question` namespace mapped to a vector of vectors containing a pair of a function and a string.
   The function validates the input corresponding to the key and the string is a error message corresponding to the failing of the validation function.
   
   The map is constructed at runtime as different validations are needed depending on the type under the `:question/type` key.
   
   The returned map will contain all keys for a single-choice, multiple-choice, or free-text question, with corresponding validation functions."
  [question]
  (let [{:question/keys [statement
                         max-points
                         type
                         possible-solutions
                         correct-solutions
                         evaluation-criteria
                         categories]} question]
    (merge
      {:question/statement [[#(s/valid? :question/statement statement) "Die Fragestellung war inkorrekt!"]]
       :question/max-points [[#(s/valid? :question/max-points max-points) "Die erreichbaren Punkte waren inkorrekt!"]]
       :question/type [[#(s/valid? :question/type type) "Der ausgewälte question-type war kein korrekter type!"]]}

      (when (or (= type :question.type/single-choice) (= type :question.type/multiple-choice))
        {:question/possible-solutions
         [[#(s/valid? :question/possible-solutions possible-solutions) "Die Antwortmöglichkeiten waren nicht korrekt!"]
          [#(if possible-solutions (apply distinct? possible-solutions) true) "Zwei Antwortmglichkeiten waren identisch!"]]})

      (when  (= type :question.type/single-choice)
        {:question/correct-solutions
         [[#(= (count correct-solutions) 1) "Single choice questions must have exactly one correct answer!"]
          [#(s/valid? :question/correct-solutions correct-solutions) "Die korrekte Antwort war keine korrekte Antwort!"]
          [#(every? (fn [x] (contains? (set possible-solutions) x)) correct-solutions) "Die korrekte Antwort war nicht in den möglichen Antworten enthalten!"]]})

      (when  (= type :question.type/multiple-choice)
        {:question/correct-solutions
         [[#(s/valid? :question/correct-solutions correct-solutions) "Die korrekten Antworten waren keine korrekten korrekten Antworten!"]
          [#(every? (fn [x] (contains? (set possible-solutions) x)) correct-solutions) "Die korrekte Antwort war nicht in den möglichen Antworten enthalten!"]]})

      (when (= type :question.type/free-text)
        {:question/evaluation-criteria
         [[#(s/valid? :question/evaluation-criteria evaluation-criteria) "Die angegebenen Bewertungskriterien waren keine korrekten Bewertungskriterien!"]]})

      (when (not-empty categories)
        {:question/categories
         [[#(s/valid? :question/categories categories) "Die angegebenen Kategorien waren nicht korrekt geformt!"]]}))))


(defn- parse-question
  "Takes as arguments all possible fields of a question map and tries to parse them.
   
   If a required value (`achivable-points` or `type`) cannot be parsed, a map containing the corresponding key with an error message as string is associated under the
   `:errors` key.
   If a not required value fails to parse or is `nil`, `nil` is added under the key to the question map.
   
   Returns a question map. If an error occured while parsing, the map will contain an `:errors` key which indicates an error while parsing.
   Values that are not required may be `nil`."
  [question]
  (letfn [(parse-points
            [points]
            (if (and (not (nil? points)) (number? points))
              {:question/max-points points}
              (try (let [points (Long/parseLong (.trim points))]
                     {:question/max-points points})
                   (catch NumberFormatException _
                     {:errors {:question/max-points "Die erreichbaren Punkte müssen eine Zahl sein"}}))))]
    (let [{:strs [question-statement achivable-points type
                  possible-solutions correct-solutions
                  evaluation-criteria
                  categories]} question]
      (reduce (partial merge-with merge)
              {}
              [{:question/statement question-statement}
               (if (s/valid? :question/type type)
                 {:question/type type}
                 (let [question-type (to-question-type type)]
                   (if (nil? question-type)
                     {:errors {:question/type "Der angegebene question-type war kein valider type!"}}
                     {:question/type question-type})))
               (parse-points achivable-points)
               {:question/possible-solutions (as-coll possible-solutions)}
               (if (and (= type :question.type/single-choice)
                        (not= (count correct-solutions) 1))
                 {:errors {:question/correct-solutions "Es sollte nur eine Antwort bei einer single-choice Frage geben!"}}
                 {:question/correct-solutions correct-solutions})
               {:question/evaluation-criteria evaluation-criteria}
               {:question/categories (distinct (as-coll categories))}]))))


(defn- validate-parsed-question
  "Takes a question map as its input.
   
   It constructs the map containing a vector of vectors of validation functions with an error message.
   For each key an error message is constructed using the functions with their message.
   If the error message is not empty it is added to a map containing all errors for each question key.
   
   The so constructed error map is returned."
  [question]
  (let [keys-to-validate question-keys
        validation-functions-with-error-msg (create-validation-functions-with-error-msg question)]

    (letfn [(construct-error-msg
              [current-key]
              (reduce (fn [current-error-msg [is-valid? error-msg]]
                        (if (is-valid?)
                          current-error-msg
                          (string/join "\n" (filter not-empty [current-error-msg error-msg]))))
                      ""
                      (validation-functions-with-error-msg current-key)))]

      (reduce (fn [error-map current-key]
                (let [possible-error-msg (construct-error-msg current-key)]
                  (if (empty? possible-error-msg)
                    error-map
                    (assoc-in error-map [:errors current-key] possible-error-msg))))
              {}
              keys-to-validate))))


;; TODO: the spec for the question argument is incorrect, this is the form-data from the client
;; the resulting question map also does not contain ids and solutions are inlined as strings
(s/fdef validate-question-impl
        :args (s/cat :self #(= PQuestionService (type %))
                     :question :question/question)
        :ret (s/or :errors #(contains? % :errors)
                   :question :question/question))


(defn- validate-question-impl
  [_ question]
  (let [parsed-question (parse-question question)]
    (if (seq (parsed-question :errors))
      parsed-question
      (validate-parsed-question parsed-question))))


(extend QuestionService
  PQuestionService
  {:validate-user-for-question validate-user-for-question
   :get-question-by-id get-question-by-id
   :create-question! create-question-impl!
   :get-question-categories get-question-categories
   :validate-question validate-question-impl})
