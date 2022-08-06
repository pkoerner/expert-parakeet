(ns domain-test
  (:require
    [clojure.test :as t]
    [domain :as d]))


(t/deftest test-unpack-map-in-map
  (t/testing "Two items in one map"
    (let [input-map {:test/id 1, :test/name "Test 1",
                     :test/fragen [{:frage/id 2, :frage/typ :frage.typ/bool},{:frage/id 3, :frage/typ :frage.typ/text}]}
          result-map [{:test/id 1, :test/name "Test 1", :frage/id 2, :frage/typ :frage.typ/bool}
                      {:test/id 1, :test/name "Test 1", :frage/id 3, :frage/typ :frage.typ/text}]]
      (t/is (= result-map
               (d/unpack-map-in-map :test/fragen input-map)))))
  (t/testing "One items in one map"
    (let [input-map {:test/id 1, :test/name "Test 1",
                     :test/fragen [{:frage/id 2, :frage/typ :frage.typ/bool}]}
          result-map [{:test/id 1, :test/name "Test 1", :frage/id 2, :frage/typ :frage.typ/bool}]]
      (t/is (= result-map
               (d/unpack-map-in-map :test/fragen input-map)))))
  (t/testing "Two items in one map"
    (let [input-map {:test/id 1, :test/name "Test 1",
                     :test/fragen []}
          result-map []]
      (t/is (= result-map
               (d/unpack-map-in-map :test/fragen input-map))))))
