(ns test-extensions
  (:require [clojure.spec.test.alpha :as stest]
            [clojure.test :as t]))

(defn test-with-check
  [property opts]
  (letfn [(construct-error-msg [fail]
            (-> fail
                (first)
                (:clojure.spec.test.check/ret)
                (dissoc :result-data :shrunk :result)
                (str)))]

    (let [result (stest/check property opts)
          success (true? (get-in (first result) [:clojure.spec.test.check/ret :pass?]))]
      (t/is success (construct-error-msg result)))))