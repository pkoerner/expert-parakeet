(ns util.forms)


(defn as-coll
  "Wraps the parameter in a vector if it is not already a collection."
  [coll-or-single]
  (cond
    (empty? coll-or-single) []
    (coll? coll-or-single) coll-or-single
    :else [coll-or-single]))


(defn validate-form-data
  "Uses `validators` together with the `service` to parse and validate the `form-data`.
   
   `validators` is a list of validator/parsing functions for each form data key.
   Each element in that list is a tuple containing the form data key and
   a function which takes the service, the currently parsed result and the value that is saved in the form data (may be nil).
   The validator function either returns an error of the form `{:error \"message\"}` or fields that get merged with the current result.
   Use a vector and not a map to preserve the iteration order!

   `service` is the first argument to the validation service function, so for example a `PQuestionService`.
   This argument is called `this` in some examples because it refers to an instance of a service while the validator function is written in the service file.
   
   This either returns a validated map or a partially validated map with an `:errors` key.
   The `:errors` key contains a map with form data keys mapped to error messages which may be displayed in the web form.
   
   This function can be used to implement the validate-xyz functions from the service protocols.
   For example from `PQuestionService`: `(validate-question [self question-form-data])` which can be implemented as
   `(partial validate-form-data question-validators)`, where `question-validators` is a previously defined vector of validation functions.

   Some abbreviated examples:
```clojure
(def question-validators
  [[:max-points (fn [_ _ value]
                  (let [parsed-value (edn/read-string (str value))]
                    (if (s/valid? :question/max-points parsed-value)
                      {:question/max-points parsed-value}
                      {:error \"The maximum points must be a non-negative integer\"})))]
   [:categories (fn [_ _ value]
                  (let [categories (->> value
                                        (as-coll)
                                        (map str)
                                        (map string/trim)
                                        (filter (complement empty?))
                                        (set))]
                    (if (s/valid? :question/categories categories)
                      {:question/categories categories}
                      {:error \"The categories must be non-empty strings\"})))]
   [:evaluation-criteria (fn [_ {:question/keys [type]} value]
                           (when (= type :question.type/free-text)
                             (let [parsed-value (-> value (str) (string/trim))]
                               (if (s/valid? :question/evaluation-criteria parsed-value)
                                 {:question/evaluation-criteria parsed-value}
                                 {:error \"The evalatuation criteria must be a string\"}))))]])
```
```clojure
(def course-validators
  [[:name (fn [this _ value]
            (let [parsed-value (-> value (str) (str/trim))]
              (cond
                (not (s/valid? :course/name parsed-value)) {:error \"The course name must be a non-empty string\"}
                (let [courses (db/get-all-courses (.db this))
                      courses-with-same-name (filter (fn [course] (= parsed-value (course :course/name))) courses)]
                  (seq courses-with-same-name)) {:error \"The given course name already exists\"}
                :else {:course/name parsed-value})))]])
```
   
   Also refer to the tests of the service validate-xyz functions!
   "
  [validators service form-data & args]
  (loop [result {}
         validators (seq validators)]
    (if (empty? validators)
      result
      (let [[key validator-fn] (first validators)
            value (get form-data key)
            validation-result (apply validator-fn service result value args)
            new-result (if-let [error (get validation-result :error)]
                         (update result :errors merge {key error})
                         (merge result validation-result))]
        (recur new-result (rest validators))))))
