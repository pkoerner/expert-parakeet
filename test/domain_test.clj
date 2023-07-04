(ns domain-test
  {:clj-kondo/config '{:linters {:unresolved-symbol
                                 {:exclude (test-calc-max-points-of-question-set)}}}}
  (:require
    [clojure.test :as t]
    [clojure.test.check.clojure-test :refer [defspec]]
    [clojure.test.check.generators :as gen]
    [clojure.test.check.properties :as prop]
    [domain :as d])
  (:import
    java.text.SimpleDateFormat))


(defn create-question-set-from-points
  "Creates a map that contains 
   a single key :question-set/questions
   with a vector of maps as the value. 
   The maps each contain a key :question/points 
   and a natural number of points as its value."
  [points]
  (assoc {} :question-set/questions (mapv #(assoc {} :question/points %) points)))


(defspec test-calc-max-points-of-question-set 10
  (prop/for-all
    [points (gen/list gen/nat)]
    (let [question-set (create-question-set-from-points points)
          expected-result (apply + points)]
      (= expected-result (d/calc-max-points-of-question-set question-set)))))


(t/deftest test-achieved-points-in-question-set
  (t/testing "No second answer for any question"
    (let [input [{:answer/points 10, :answer/question {:question/id "2", :question/type :question.type/bool}}
                 {:answer/points 4, :answer/question {:question/id "3", :question/type :question.type/free-text}}
                 {:answer/points 1, :answer/question {:question/id "5", :question/type :question.type/bool}}]]
      (t/is (= 15 (d/calc-achieved-points input)))))
  (t/testing "Two answers for the same question"
    (let [input [{:answer/points 10, :answer/question {:question/id "2", :question/type :question.type/bool}}
                 {:answer/points 4, :answer/question {:question/id "3", :question/type :question.type/free-text}}
                 {:answer/points 1, :answer/question {:question/id "2", :question/type :question.type/bool}}
                 {:answer/points 5, :answer/question {:question/id "3", :question/type :question.type/free-text}}]]
      (t/is (= 15 (d/calc-achieved-points input)))))
  (t/testing "No answers"
    (let [input []]
      (t/is (= 0 (d/calc-achieved-points input))))))


(t/deftest test-question-set-points
  (t/testing "Two questions in a single question-set"
    (let [question-set {:question-set/id "1", :question-set/name "Test 1", :question-set/questions [{:question/id "2", :question/points 10},{:question/id "3", :question/points 2}]}
          answer-selection (fn [& _args] [{:answer/points 10, :answer/question {:question/id "2", :question/type :question.type/bool}}])]
      (t/is (= (d/calc-question-set-points answer-selection question-set)
               {:question-set/id "1" :question-set/name "Test 1" :question-set/max-points 12 :question-set/achived-points 10})))))


(t/deftest test-unpack-map-in-map
  (t/testing "Two items in one map"
    (let [input-map {:question-set/id "1", :question-set/name "Test 1",
                     :question-set/questions [{:question/id "2", :question/type :question.type/bool},{:question/id "3", :question/type :question.type/free-text}]}
          result-map [{:question-set/id "1", :question-set/name "Test 1", :question/id "2", :question/type :question.type/bool}
                      {:question-set/id "1", :question-set/name "Test 1", :question/id "3", :question/type :question.type/free-text}]]
      (t/is (= result-map
               (d/unpack-map-in-map :question-set/questions input-map)))))
  (t/testing "One item in one map"
    (let [input-map {:question-set/id "1", :question-set/name "Test 1",
                     :question-set/questions [{:question/id "2", :question/type :question.type/bool}]}
          result-map [{:question-set/id "1", :question-set/name "Test 1", :question/id "2", :question/type :question.type/bool}]]
      (t/is (= result-map
               (d/unpack-map-in-map :question-set/questions input-map)))))
  (t/testing "Two items in one map"
    (let [input-map {:question-set/id "1", :question-set/name "Test 1",
                     :question-set/questions []}
          result-map []]
      (t/is (= result-map
               (d/unpack-map-in-map :question-set/questions input-map))))))


(t/deftest test-remove-answers-with-identical-user-and-question-id
  (t/testing "No removal"
    (let [provided-list [{:question/id "1", :question-set/id "2", :user/id "0", :answer/timestamp "2022-08-03T00:00:00Z"}
                         {:question/id "2", :question-set/id "3", :user/id "6", :answer/timestamp "2022-08-02T00:00:00Z"}
                         {:question/id "3", :question-set/id "4", :user/id "2", :answer/timestamp "2022-08-01T00:00:00Z"}]]
      (t/is (= provided-list (d/answers-with-distinct-ids provided-list)))))
  (t/testing "Two removals"
    (let [provided-list [{:question/id "1", :question-set/id "2", :user/id "0", :answer/timestamp "2022-08-05T00:00:00Z"}
                         {:question/id "2", :question-set/id "3", :user/id "6", :answer/timestamp "2022-08-04T00:00:00Z"}
                         {:question/id "1", :question-set/id "2", :user/id "0", :answer/timestamp "2022-08-03T00:00:00Z"}
                         {:question/id "2", :question-set/id "3", :user/id "6", :answer/timestamp "2022-08-02T00:00:00Z"}
                         {:question/id "3", :question-set/id "4", :user/id "2", :answer/timestamp "2022-08-01T00:00:00Z"}]
          expected-result [{:question/id "1", :question-set/id "2", :user/id "0", :answer/timestamp "2022-08-05T00:00:00Z"}
                           {:question/id "2", :question-set/id "3", :user/id "6", :answer/timestamp "2022-08-04T00:00:00Z"}
                           {:question/id "3", :question-set/id "4", :user/id "2", :answer/timestamp "2022-08-01T00:00:00Z"}]]
      (t/is (= expected-result (d/answers-with-distinct-ids provided-list))))))


(t/deftest test-extraction-of-free-text-questions
  (t/testing "Remove one question"
    (let [input-map [{:course-iteration/semester "WiSe", :course-iteration/year 2000, :course-iteration/course {:course/course-name "Fach 1"},
                      :course-iteration/question-sets [{:question-set/id "1", :question-set/name "Test 1",
                                                        :question-set/questions [{:question/id "2", :question/type :question.type/bool},{:question/id "3",:question/type :question.type/free-text}]}]},
                     {:course-iteration/semester "SoSe", :course-iteration/year 2001, :course-iteration/course {:course/course-name "Fach 2"},
                      :course-iteration/question-sets [{:question-set/id "1", :question-set/name "Test 1",
                                                        :question-set/questions [{:question/id "2", :question/type :question.type/bool},{:question/id "3", :question/type :question.type/free-text}]},
                                                       {:question-set/id "2", :question-set/name "Test 2", :question-set/questions [{:question/id "1", :question/type :question.type/free-text}]}]}]
          result-map [{:course-iteration/semester "WiSe", :course-iteration/year 2000, :question-set/id "1", :question-set/name "Test 1", :question/id "3", :question/type :question.type/free-text, :course/course-name "Fach 1"},
                      {:course-iteration/semester "SoSe", :course-iteration/year 2001, :question-set/id "1", :question-set/name "Test 1", :question/id "3", :question/type :question.type/free-text, :course/course-name "Fach 2"},
                      {:course-iteration/semester "SoSe", :course-iteration/year 2001, :question-set/id "2", :question-set/name "Test 2", :question/id "1", :question/type :question.type/free-text, :course/course-name "Fach 2"}]]
      (t/is (= result-map (d/extract-free-text-questions input-map)))))
  (t/testing "No questions for one test"
    (let [input-map [{:course-iteration/semester "WiSe", :course-iteration/year 2000, :course-iteration/course {:course/course-name "Fach 1"},
                      :course-iteration/question-sets [{:question-set/id "1", :question-set/name "Test 1",
                                                        :question-set/questions []}]},
                     {:course-iteration/semester "SoSe", :course-iteration/year 2001, :course-iteration/course {:course/course-name "Fach 2"},
                      :course-iteration/question-sets [{:question-set/id "1", :question-set/name "Test 1",
                                                        :question-set/questions [{:question/id "2", :question/type :question.type/bool},{:question/id "3", :question/type :question.type/free-text}]},
                                                       {:question-set/id "2", :question-set/name "Test 2", :question-set/questions [{:question/id "1", :question/type :question.type/free-text}]}]}]
          result-map [{:course-iteration/semester "SoSe", :course-iteration/year 2001, :question-set/id "1", :question-set/name "Test 1", :question/id "3", :question/type :question.type/free-text, :course/course-name "Fach 2"},
                      {:course-iteration/semester "SoSe", :course-iteration/year 2001, :question-set/id "2", :question-set/name "Test 2", :question/id "1", :question/type :question.type/free-text, :course/course-name "Fach 2"}]]
      (t/is (= result-map (d/extract-free-text-questions input-map)))))
  (t/testing "Only bool questions for one test"
    (let [input-map [{:course-iteration/semester "WiSe", :course-iteration/year 2000, :course-iteration/course {:course/course-name "Fach 1"},
                      :course-iteration/question-sets [{:question-set/id "1", :question-set/name "Test 1",
                                                        :question-set/questions [{:question/id "2", :question/type :question.type/bool},{:question/id "3",:question/type :question.type/bool}]}]},
                     {:course-iteration/semester "SoSe", :course-iteration/year 2001, :course-iteration/course {:course/course-name "Fach 2"},
                      :course-iteration/question-sets [{:question-set/id "1", :question-set/name "Test 1",
                                                        :question-set/questions [{:question/id "2", :question/type :question.type/bool},{:question/id "3", :question/type :question.type/free-text}]},
                                                       {:question-set/id "2", :question-set/name "Test 2", :question-set/questions [{:question/id "1", :question/type :question.type/free-text}]}]}]
          result-map [{:course-iteration/semester "SoSe", :course-iteration/year 2001, :question-set/id "1", :question-set/name "Test 1", :question/id "3", :question/type :question.type/free-text, :course/course-name "Fach 2"},
                      {:course-iteration/semester "SoSe", :course-iteration/year 2001, :question-set/id "2", :question-set/name "Test 2", :question/id "1", :question/type :question.type/free-text, :course/course-name "Fach 2"}]]
      (t/is (= result-map (d/extract-free-text-questions input-map))))))


(t/deftest test-sorting-of-free-text-question-answers
  (t/testing "Correct sorting"
    (let [answers [{:answer/id "1", :user/id "1", :answer/timestamp (.parse (SimpleDateFormat. "yyyy-MM-dd") "2022-08-04")},
                   {:answer/id "1", :user/id "0", :answer/timestamp (.parse (SimpleDateFormat. "yyyy-MM-dd") "2022-08-07")},
                   {:answer/id "2", :user/id "1", :answer/timestamp (.parse (SimpleDateFormat. "yyyy-MM-dd") "2022-08-05")},
                   {:answer/id "3", :user/id "1", :answer/timestamp (.parse (SimpleDateFormat. "yyyy-MM-dd") "2022-08-06")}]
          answer-selection (fn [_id] answers)
          free-text-questions [{:course-iteration/semester "WiSe", :course-iteration/year 2000, :question-set/id "1", :question-set/name "Test 1", :question/id "3", :question/type :question.type/free-text, :course/course-name "Fach 1"}]
          result [{:answer/id "1", :user/id "1", :answer/timestamp (.parse (SimpleDateFormat. "yyyy-MM-dd") "2022-08-04"), :course-iteration/semester "WiSe", :course-iteration/year 2000,
                   :question-set/id "1", :question-set/name "Test 1", :question/id "3", :question/type :question.type/free-text, :course/course-name "Fach 1"}
                  {:answer/id "2", :user/id "1", :answer/timestamp (.parse (SimpleDateFormat. "yyyy-MM-dd") "2022-08-05"), :course-iteration/semester "WiSe", :course-iteration/year 2000,
                   :question-set/id "1", :question-set/name "Test 1", :question/id "3", :question/type :question.type/free-text, :course/course-name "Fach 1"},
                  {:answer/id "3", :user/id "1", :answer/timestamp (.parse (SimpleDateFormat. "yyyy-MM-dd") "2022-08-06"), :course-iteration/semester "WiSe", :course-iteration/year 2000,
                   :question-set/id "1", :question-set/name "Test 1", :question/id "3", :question/type :question.type/free-text, :course/course-name "Fach 1"}
                  {:answer/id "1", :user/id "0", :answer/timestamp (.parse (SimpleDateFormat. "yyyy-MM-dd") "2022-08-07"), :course-iteration/semester "WiSe", :course-iteration/year 2000,
                   :question-set/id "1", :question-set/name "Test 1", :question/id "3", :question/type :question.type/free-text, :course/course-name "Fach 1"}]]
      (t/is (= result (d/sort-answers-of-free-text-questions-by-timestamp answer-selection free-text-questions)))))
  (t/testing "Two questions, two answers"
    (let [answers [{:answer/id "1", :user/id "0", :answer/timestamp (.parse (SimpleDateFormat. "yyyy-MM-dd") "2022-08-07")},
                   {:answer/id "2", :user/id "1", :answer/timestamp (.parse (SimpleDateFormat. "yyyy-MM-dd") "2022-08-05")}]
          answer-selection (fn [_id] answers)
          free-text-questions [{:course-iteration/semester "WiSe", :course-iteration/year 2000, :question-set/id "1", :question-set/name "Test 1", :question/id "3", :question/type :question.type/free-text, :course/course-name "Fach 1"},
                               {:course-iteration/semester "SoSe", :course-iteration/year 2001, :question-set/id "1", :question-set/name "Test 1", :question/id "3", :question/type :question.type/free-text, :course/course-name "Fach 2"}]
          result [{:answer/id "2", :user/id "1", :answer/timestamp (.parse (SimpleDateFormat. "yyyy-MM-dd") "2022-08-05"), :course-iteration/semester "WiSe", :course-iteration/year 2000,
                   :question-set/id "1", :question-set/name "Test 1", :question/id "3", :question/type :question.type/free-text, :course/course-name "Fach 1"},
                  {:answer/id "2", :user/id "1", :answer/timestamp (.parse (SimpleDateFormat. "yyyy-MM-dd") "2022-08-05"), :course-iteration/semester "SoSe", :course-iteration/year 2001,
                   :question-set/id "1", :question-set/name "Test 1", :question/id "3", :question/type :question.type/free-text, :course/course-name "Fach 2"},
                  {:answer/id "1", :user/id "0", :answer/timestamp (.parse (SimpleDateFormat. "yyyy-MM-dd") "2022-08-07"), :course-iteration/semester "WiSe", :course-iteration/year 2000,
                   :question-set/id "1", :question-set/name "Test 1", :question/id "3", :question/type :question.type/free-text, :course/course-name "Fach 1"},
                  {:answer/id "1", :user/id "0", :answer/timestamp (.parse (SimpleDateFormat. "yyyy-MM-dd") "2022-08-07"), :course-iteration/semester "SoSe", :course-iteration/year 2001,
                   :question-set/id "1", :question-set/name "Test 1", :question/id "3", :question/type :question.type/free-text, :course/course-name "Fach 2"}]]
      (t/is (= result (d/sort-answers-of-free-text-questions-by-timestamp answer-selection free-text-questions))))))


(t/deftest test-uncorrected-answers-with-distinct-user-question-question-set-id
  (t/testing "Corrected answers are removed"
    (let [answers-with-corrections [{:answer/id "3"} {:answer/id "2"} {:answer/id "0"}]
          answers [{:answer/id "0", :user/id "1", :answer/timestamp (.parse (SimpleDateFormat. "yyyy-MM-dd") "2022-08-05"), :course-iteration/semester "WiSe", :course-iteration/year 2000,
                    :question-set/id "1", :question-set/name "Test 1", :question/id "3", :question/type :question.type/free-text, :course/course-name "Fach 1"},
                   {:answer/id "1", :user/id "1", :answer/timestamp (.parse (SimpleDateFormat. "yyyy-MM-dd") "2022-08-05"), :course-iteration/semester "SoSe", :course-iteration/year 2001,
                    :question-set/id "1", :question-set/name "Test 1", :question/id "3", :question/type :question.type/free-text, :course/course-name "Fach 2"},
                   {:answer/id "2", :user/id "0", :answer/timestamp (.parse (SimpleDateFormat. "yyyy-MM-dd") "2022-08-07"), :course-iteration/semester "WiSe", :course-iteration/year 2000,
                    :question-set/id "1", :question-set/name "Test 1", :question/id "3", :question/type :question.type/free-text, :course/course-name "Fach 1"},
                   {:answer/id "3", :user/id "0", :answer/timestamp (.parse (SimpleDateFormat. "yyyy-MM-dd") "2022-08-07"), :course-iteration/semester "SoSe", :course-iteration/year 2001,
                    :question-set/id "1", :question-set/name "Test 1", :question/id "3", :question/type :question.type/free-text, :course/course-name "Fach 2"}]
          result [{:answer/id "1", :answer/timestamp (.parse (SimpleDateFormat. "yyyy-MM-dd") "2022-08-05"), :course-iteration/semester "SoSe", :course-iteration/year 2001,
                   :question-set/id "1", :question-set/name "Test 1", :question/id "3", :question/type :question.type/free-text, :course/course-name "Fach 2"}]]
      (t/is (= result (d/uncorrected-answers-with-distinct-ids answers-with-corrections answers)))))
  (t/testing "Answers with same user, question, and question-set-id are removed"
    (let [answers-with-corrections []
          answers [{:answer/id "0", :user/id "1", :answer/timestamp (.parse (SimpleDateFormat. "yyyy-MM-dd") "2022-08-05"), :course-iteration/semester "WiSe", :course-iteration/year 2000,
                    :question-set/id "1", :question-set/name "Test 1", :question/id "3", :question/type :question.type/free-text, :course/course-name "Fach 1"},
                   {:answer/id "1", :user/id "1", :answer/timestamp (.parse (SimpleDateFormat. "yyyy-MM-dd") "2022-08-05"), :course-iteration/semester "SoSe", :course-iteration/year 2001,
                    :question-set/id "1", :question-set/name "Test 1", :question/id "3", :question/type :question.type/free-text, :course/course-name "Fach 2"},
                   {:answer/id "2", :user/id "1", :answer/timestamp (.parse (SimpleDateFormat. "yyyy-MM-dd") "2022-08-07"), :course-iteration/semester "WiSe", :course-iteration/year 2000,
                    :question-set/id "1", :question-set/name "Test 1", :question/id "3", :question/type :question.type/free-text, :course/course-name "Fach 1"},
                   {:answer/id "3", :user/id "0", :answer/timestamp (.parse (SimpleDateFormat. "yyyy-MM-dd") "2022-08-07"), :course-iteration/semester "SoSe", :course-iteration/year 2001,
                    :question-set/id "1", :question-set/name "Test 1", :question/id "3", :question/type :question.type/free-text, :course/course-name "Fach 2"}]
          result [{:answer/id "2", :answer/timestamp (.parse (SimpleDateFormat. "yyyy-MM-dd") "2022-08-07"), :course-iteration/semester "WiSe", :course-iteration/year 2000,
                   :question-set/id "1", :question-set/name "Test 1", :question/id "3", :question/type :question.type/free-text, :course/course-name "Fach 1"},
                  {:answer/id "3", :answer/timestamp (.parse (SimpleDateFormat. "yyyy-MM-dd") "2022-08-07"), :course-iteration/semester "SoSe", :course-iteration/year 2001,
                   :question-set/id "1", :question-set/name "Test 1", :question/id "3", :question/type :question.type/free-text, :course/course-name "Fach 2"}]]
      (t/is (= result (d/uncorrected-answers-with-distinct-ids answers-with-corrections answers)))))
  (t/testing "Uncorrected question and a later corrected question"
    (let [answers-with-corrections [{:answer/id "1"}]
          answers [{:answer/id "0", :answer/timestamp (.parse (SimpleDateFormat. "yyyy-MM-dd") "2022-08-05"), :course-iteration/semester "WiSe", :course-iteration/year 2000,
                    :question-set/id "1", :question-set/name "Test 1", :question/id "3", :question/type :question.type/free-text, :course/course-name "Fach 1"},
                   {:answer/id "1", :answer/timestamp (.parse (SimpleDateFormat. "yyyy-MM-dd") "2022-08-06"), :course-iteration/semester "WiSe", :course-iteration/year 2000,
                    :question-set/id "1", :question-set/name "Test 1", :question/id "3", :question/type :question.type/free-text, :course/course-name "Fach 2"}]
          result []]
      (t/is (= result (d/uncorrected-answers-with-distinct-ids answers-with-corrections answers))))))


(t/deftest test-corrected-answers
  (t/testing "A single corrected answer"
    (let [corrected-answers [{:correction/answer {:answer/id "1"}}]
          answers [{:answer/id "0"}, {:answer/id "1"}, {:answer/id "2"}]
          result [{:answer/id "1"}]]
      (t/is (= result (d/corrected-answers corrected-answers answers)))))
  (t/testing "No matching corrections"
    (let [corrected-answers [{:correction/answer {:answer/id "4"}}]
          answers [{:answer/id "0"}, {:answer/id "1"}, {:answer/id "2"}]
          result []]
      (t/is (= result (d/corrected-answers corrected-answers answers)))))
  (t/testing "All answers are corrected"
    (let [corrected-answers [{:correction/answer {:answer/id "0"}}
                             {:correction/answer {:answer/id "1"}}
                             {:correction/answer {:answer/id "2"}}]
          answers [{:answer/id "0"}, {:answer/id "1"}, {:answer/id "2"}]
          result [{:answer/id "0"}, {:answer/id "1"}, {:answer/id "2"}]]
      (t/is (= result (d/corrected-answers corrected-answers answers))))))


(t/deftest test-answers-for-correction-view
  (t/testing "Process a single answer"
    (let [input [{:answer/id "0", :answer/answer ["Antwort"], :answer/points 5,
                  :answer/question {:question/question-statement "Fragetext", :question/points 6, :question/evaluation-criteria "Loesung"}}]
          output {:answer/id "0", :answer/answer "Antwort", :answer/points 5, :question/question-statement "Fragetext",
                  :question/points 6, :question/evaluation-criteria "Loesung"}]
      (t/is (= output (d/answers-for-correction-view input))))))


(t/deftest test-merging-latest-correction-with-answer
  (t/testing "No correction available"
    (let [answer {:answer/id "0"}
          correction-wrapping-func (fn [_id] [])
          result (merge answer {:correction/id nil})]
      (t/is (= result (d/merge-latest-correction-with-answer correction-wrapping-func answer)))))
  (t/testing "Single correction available"
    (let [answer {:answer/id "0"}
          correction {:correction/id "0" :correction/timestamp (.parse (SimpleDateFormat. "yyyy-MM-dd") "2022-08-05")}
          correction-wrapping-func (fn [_id] (conj [] correction))
          result (merge answer correction)]
      (t/is (= result (d/merge-latest-correction-with-answer correction-wrapping-func answer)))))
  (t/testing "Several corrections available"
    (let [answer {:answer/id "0"}
          correction-wrapping-func (fn [_id]
                                     [{:correction/id "0" :correction/timestamp (.parse (SimpleDateFormat. "yyyy-MM-dd") "2022-08-03")}
                                      {:correction/id "0" :correction/timestamp (.parse (SimpleDateFormat. "yyyy-MM-dd") "2022-08-05")}
                                      {:correction/id "0" :correction/timestamp (.parse (SimpleDateFormat. "yyyy-MM-dd") "2022-08-04")}])
          result (merge answer {:correction/id "0" :correction/timestamp (.parse (SimpleDateFormat. "yyyy-MM-dd") "2022-08-05")})]
      (t/is (= result (d/merge-latest-correction-with-answer correction-wrapping-func answer))))))


(t/deftest test-incoming-correction-validation
  (t/testing "Input is fine"
    (let [correction-input {:correction/feedback "Gut!" :correction/points "3" :corrector/id "1"}
          answer-input [{:answer/id "0" :answer/points 0 :answer/answer "So ist das"
                         :answer/question {:question/question-statement "Frage" :question/points 4 :question/evaluation-criteria "Kriterien"}}]
          result {:correction/feedback "Gut!" :correction/points 3 :corrector/id "1"}]
      (t/is (= result (d/validate-incoming-correction correction-input answer-input)))))
  (t/testing "No answer"
    (let [correction-input {:correction/feedback "Gut!" :correction/points "3" :corrector/id "1"}
          answer-input []
          result (merge correction-input {:error :keine-passende-antwort})]
      (t/is (= result (d/validate-incoming-correction correction-input answer-input)))))
  (t/testing "Corrupted answer"
    (let [correction-input {:correction/feedback "Gut!" :correction/points "3" :corrector/id "1"}
          answer-input [{:answer/id "0" :answer/points 0 :answer/answer "So ist das"
                         :answer/question {}}]
          result (merge correction-input {:error :keine-passende-antwort})]
      (t/is (= result (d/validate-incoming-correction correction-input answer-input)))))
  (t/testing "No correction 1"
    (let [correction-input {:correction/points "3" :corrector/id "1"}
          answer-input [{:answer/id "0" :answer/points 0 :answer/answer "So ist das"
                         :answer/question {:question/question-statement "Frage" :question/points 4 :question/evaluation-criteria "Kriterien"}}]
          result (merge correction-input {:error :correction-feedback-missing})]
      (t/is (= result (d/validate-incoming-correction correction-input answer-input)))))
  (t/testing "No correction 2"
    (let [correction-input {:correction/feedback "" :correction/points "3" :corrector/id "1"}
          answer-input [{:answer/id "0" :answer/points 0 :answer/answer "So ist das"
                         :answer/question {:question/question-statement "Frage" :question/points 4 :question/evaluation-criteria "Kriterien"}}]
          result (merge correction-input {:error :correction-feedback-missing})]
      (t/is (= result (d/validate-incoming-correction correction-input answer-input)))))
  (t/testing "No points 1"
    (let [correction-input {:correction/feedback "Gut!", :corrector/id "1"}
          answer-input [{:answer/id "0" :answer/points 0 :answer/answer "So ist das"
                         :answer/question {:question/question-statement "Frage" :question/points 4 :question/evaluation-criteria "Kriterien"}}]
          result (merge correction-input {:error :correction-points-missing})]
      (t/is (= result (d/validate-incoming-correction correction-input answer-input)))))
  (t/testing "No points 2"
    (let [correction-input {:correction/feedback "Gut!" :correction/points "" :corrector/id "1"}
          answer-input [{:answer/id "0" :answer/points 0 :answer/answer "So ist das"
                         :answer/question {:question/question-statement "Frage" :question/points 4 :question/evaluation-criteria "Kriterien"}}]
          result (merge correction-input {:error :correction-points-missing})]
      (t/is (= result (d/validate-incoming-correction correction-input answer-input)))))
  (t/testing "No points 1"
    (let [correction-input {:correction/feedback "Gut!" :correction/points "hallo" :corrector/id "1"}
          answer-input [{:answer/id "0" :answer/points 0 :answer/answer "So ist das"
                         :answer/question {:question/question-statement "Frage" :question/points 4 :question/evaluation-criteria "Kriterien"}}]
          result (merge correction-input {:error :invalid-points})]
      (t/is (= result (d/validate-incoming-correction correction-input answer-input)))))
  (t/testing "No points 2"
    (let [correction-input {:correction/feedback "Gut!" :correction/points "-10" :corrector/id "1"}
          answer-input [{:answer/id "0" :answer/points 0 :answer/answer "So ist das"
                         :answer/question {:question/question-statement "Frage" :question/points 4 :question/evaluation-criteria "Kriterien"}}]
          result (merge correction-input {:error :invalid-points})]
      (t/is (= result (d/validate-incoming-correction correction-input answer-input)))))
  (t/testing "Too many points"
    (let [correction-input {:correction/feedback "Gut!" :correction/points "10" :corrector/id "1"}
          answer-input [{:answer/id "0" :answer/points 0 :answer/answer "So ist das"
                         :answer/question {:question/question-statement "Frage" :question/points 4 :question/evaluation-criteria "Kriterien"}}]
          result (merge correction-input {:error :exceeding-number-of-points})]
      (t/is (= result (d/validate-incoming-correction correction-input answer-input))))))
