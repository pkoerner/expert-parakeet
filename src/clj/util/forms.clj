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
   
   This either returns a validated map or a partially validated map with an `:errors` key.
   The `:errors` key contains a map with form data keys mapped to error messages which may be displayed in the web form."
  [validators service form-data]
  (loop [result {}
         validators (seq validators)]
    (if (empty? validators)
      result
      (let [[key validator-fn] (first validators)
            value (get form-data key)
            validation-result (validator-fn service result value)
            new-result (if-let [error (get validation-result :error)]
                         (update result :errors merge {key error})
                         (merge result validation-result))]
        (recur new-result (rest validators))))))
