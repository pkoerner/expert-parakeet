(ns util.spec-functions
  (:require [clojure.spec.alpha :as s]
            [domain.spec]))


(defmacro map-spec
  "Macro to generate a spec that validates a Map which has non keyword keys.
   (When the keys are keywords, s/keys should be used.)
   It takes a map of keys and their specs as arguments.
   It is validated that all keys are present, and that each of the values of the keys adhere to the corresponding spec.
   
   Example:
   ```
   (map-spec {\"course-id\" :course/id
              \"year\" (s/and string? #(s/valid? :course-iteration/year (read-string %)))
              \"semester\" :course-iteration/semester
              \"question-set-ids\" (s/coll-of :question-set/id)})
   ```
   This macro does only support required keys and no optional keys. 
   Additional keys that are not speced will lead to a failure."
  [input-map]
  (let [input-map-keys (keys input-map)]
    `(s/and (fn [map-to-validate#]
              (let [key-set# (set (keys map-to-validate#))]
                (every? #(key-set# %) '~input-map-keys)))
            (s/coll-of (s/or
                        ~@(reduce into
                                  []
                                  (for [[key spec] input-map]
                                    `(~(keyword key) (s/tuple #{~key} ~spec)))))
                       :kind map?))))



