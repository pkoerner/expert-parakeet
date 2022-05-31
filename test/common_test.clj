(ns common-test (:require [clojure.test :as t] [common]))

(t/deftest addtwo (t/testing "Add two"
                    (t/testing "Zero"
                      (t/is (= 2 (common/addtwo 0))))
                    (t/testing "One"
                      (t/is (= 3 (common/addtwo 1))))))

;(defn run [& _args] (t/run-tests))
