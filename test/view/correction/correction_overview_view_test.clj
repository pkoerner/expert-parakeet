(ns view.correction.correction-overview-view-test
  (:require
    [clojure.spec.alpha :as s]
    [clojure.string :as string]
    [clojure.test :as t :refer [deftest testing]]
    [clojure.test.check :as tc]
    [clojure.test.check.generators :as gen]
    [clojure.test.check.properties :as prop]
    [views.correction.correction-overview-view :refer [correction-overview]]))


(def page-args-gen
  (gen/let [number-of-pages (gen/such-that #(< 0 %) gen/nat)
            active-page (gen/choose 1 number-of-pages)]
    {:number-of-pages number-of-pages :active-page active-page}))


(def tab-args-gen
  (gen/let [tabs (gen/map (gen/not-empty gen/string-alphanumeric) (gen/not-empty gen/string-alphanumeric) {:min-elements 1})
            active-tab (gen/elements (vec (keys tabs)))]
    {:tabs tabs :active-tab active-tab}))


(def correction-gen (s/gen (s/keys :req [:correction/feedback :answer/points :question/max-points :question/statement :answer/answer])))


(deftest test-correction-overview
  (testing "Test that overview contains all information from the corrections"
    (tc/quick-check 50 (prop/for-all [corrections (gen/vector correction-gen)
                                      {tabs :tabs active-tab :active-tab} tab-args-gen
                                      {number-of-pages :number-of-pages active-page :active-page} page-args-gen]
                                     (let [correction-overview (correction-overview corrections tabs active-tab number-of-pages active-page)]
                                       (t/is (every? #(string/includes? correction-overview (:correction/feedback %)) corrections))
                                       (t/is (every? #(string/includes? correction-overview (first (:answer/answer %))) (filter #(not-empty (:answer/answer %)) corrections)))

                                       (t/is (every? #(string/includes? correction-overview (str (:answer/points %))) corrections))
                                       (t/is (every? #(string/includes? correction-overview (str (:question/max-points %))) corrections))
                                       (t/is (every? #(string/includes? correction-overview (:question/statement %)) corrections)))))))
