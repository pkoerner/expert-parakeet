(ns domain-test
  {:clj-kondo/config '{:linters {:unresolved-symbol
                                 {:exclude (test-test-max-punkte)}}}}
  (:require
    [clojure.test :as t]
    [clojure.test.check.clojure-test :refer [defspec]]
    [clojure.test.check.generators :as gen]
    [clojure.test.check.properties :as prop]
    [domain :as d])
  (:import
    java.text.SimpleDateFormat))


(defn frage-from-punkte
  [punkte]
  (assoc {} :question-set/questions (mapv #(assoc {} :question/points %) punkte)))


(defspec test-test-max-punkte 10
  (prop/for-all
    [punkte (gen/list gen/nat)]
    (let [test (frage-from-punkte punkte)
          expected-result (apply + punkte)]
      (= expected-result (d/calc-max-points-of-question-set test)))))


(t/deftest test-test-erreichte-punkte
  (t/testing "Keine zwei Antworten für die gleiche Frage"
    (let [input [{:answer/points 10, :answer/question {:question/id "2", :question/type :frage.typ/bool}}
                 {:answer/points 4, :answer/question {:question/id "3", :question/type :question.type/free-text}}
                 {:answer/points 1, :answer/question {:question/id "5", :question/type :frage.typ/bool}}]]
      (t/is (= 15 (d/calc-achieved-points input)))))
  (t/testing "Zwei Antworten für die gleiche Frage"
    (let [input [{:answer/points 10, :answer/question {:question/id "2", :question/type :frage.typ/bool}}
                 {:answer/points 4, :answer/question {:question/id "3", :question/type :question.type/free-text}}
                 {:answer/points 1, :answer/question {:question/id "2", :question/type :frage.typ/bool}}
                 {:answer/points 5, :answer/question {:question/id "3", :question/type :question.type/free-text}}]]
      (t/is (= 15 (d/calc-achieved-points input)))))
  (t/testing "Keine Antworten"
    (let [input []]
      (t/is (= 0 (d/calc-achieved-points input))))))


(t/deftest test-test-punkte
  (t/testing "Zwei Fragen in Test"
    (let [test {:question-set/id "1", :question-set/name "Test 1", :question-set/questions [{:question/id "2", :question/points 10},{:question/id "3", :question/points 2}]}
          antwort-fct (fn [& _args] [{:answer/points 10, :answer/question {:question/id "2", :question/type :frage.typ/bool}}])]
      (t/is (= (d/calc-question-set-points antwort-fct test)
               {:question-set/id "1" :question-set/name "Test 1" :question-set/max-points 12 :question-set/achived-points 10})))))


(t/deftest test-unpack-map-in-map
  (t/testing "Two items in one map"
    (let [input-map {:question-set/id "1", :question-set/name "Test 1",
                     :question-set/questions [{:question/id "2", :question/type :frage.typ/bool},{:question/id "3", :question/type :question.type/free-text}]}
          result-map [{:question-set/id "1", :question-set/name "Test 1", :question/id "2", :question/type :frage.typ/bool}
                      {:question-set/id "1", :question-set/name "Test 1", :question/id "3", :question/type :question.type/free-text}]]
      (t/is (= result-map
               (d/unpack-map-in-map :question-set/questions input-map)))))
  (t/testing "One items in one map"
    (let [input-map {:question-set/id "1", :question-set/name "Test 1",
                     :question-set/questions [{:question/id "2", :question/type :frage.typ/bool}]}
          result-map [{:question-set/id "1", :question-set/name "Test 1", :question/id "2", :question/type :frage.typ/bool}]]
      (t/is (= result-map
               (d/unpack-map-in-map :question-set/questions input-map)))))
  (t/testing "Two items in one map"
    (let [input-map {:question-set/id "1", :question-set/name "Test 1",
                     :question-set/questions []}
          result-map []]
      (t/is (= result-map
               (d/unpack-map-in-map :question-set/questions input-map))))))


(t/deftest test-remove-antworten-with-identical-user-frage-id
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


(t/deftest test-freitext-fragen
  (t/testing "Remove one frage"
    (let [input-map [{:course-iteration/semester "WiSe", :course-iteration/year 2000, :course-iteration/course {:course/course-name "Fach 1"},
                      :course-iteration/question-sets [{:question-set/id "1", :question-set/name "Test 1",
                                                        :question-set/questions [{:question/id "2", :question/type :frage.typ/bool},{:question/id "3",:question/type :question.type/free-text}]}]},
                     {:course-iteration/semester "SoSe", :course-iteration/year 2001, :course-iteration/course {:course/course-name "Fach 2"},
                      :course-iteration/question-sets [{:question-set/id "1", :question-set/name "Test 1",
                                                        :question-set/questions [{:question/id "2", :question/type :frage.typ/bool},{:question/id "3", :question/type :question.type/free-text}]},
                                                       {:question-set/id "2", :question-set/name "Test 2", :question-set/questions [{:question/id "1", :question/type :question.type/free-text}]}]}]
          result-map [{:course-iteration/semester "WiSe", :course-iteration/year 2000, :question-set/id "1", :question-set/name "Test 1", :question/id "3", :question/type :question.type/free-text, :course/course-name "Fach 1"},
                      {:course-iteration/semester "SoSe", :course-iteration/year 2001, :question-set/id "1", :question-set/name "Test 1", :question/id "3", :question/type :question.type/free-text, :course/course-name "Fach 2"},
                      {:course-iteration/semester "SoSe", :course-iteration/year 2001, :question-set/id "2", :question-set/name "Test 2", :question/id "1", :question/type :question.type/free-text, :course/course-name "Fach 2"}]]
      (t/is (= result-map (d/extract-free-text-questions input-map)))))
  (t/testing "No fragen for one test"
    (let [input-map [{:course-iteration/semester "WiSe", :course-iteration/year 2000, :course-iteration/course {:course/course-name "Fach 1"},
                      :course-iteration/question-sets [{:question-set/id "1", :question-set/name "Test 1",
                                                        :question-set/questions []}]},
                     {:course-iteration/semester "SoSe", :course-iteration/year 2001, :course-iteration/course {:course/course-name "Fach 2"},
                      :course-iteration/question-sets [{:question-set/id "1", :question-set/name "Test 1",
                                                        :question-set/questions [{:question/id "2", :question/type :frage.typ/bool},{:question/id "3", :question/type :question.type/free-text}]},
                                                       {:question-set/id "2", :question-set/name "Test 2", :question-set/questions [{:question/id "1", :question/type :question.type/free-text}]}]}]
          result-map [{:course-iteration/semester "SoSe", :course-iteration/year 2001, :question-set/id "1", :question-set/name "Test 1", :question/id "3", :question/type :question.type/free-text, :course/course-name "Fach 2"},
                      {:course-iteration/semester "SoSe", :course-iteration/year 2001, :question-set/id "2", :question-set/name "Test 2", :question/id "1", :question/type :question.type/free-text, :course/course-name "Fach 2"}]]
      (t/is (= result-map (d/extract-free-text-questions input-map)))))
  (t/testing "Only bool fragen for one test"
    (let [input-map [{:course-iteration/semester "WiSe", :course-iteration/year 2000, :course-iteration/course {:course/course-name "Fach 1"},
                      :course-iteration/question-sets [{:question-set/id "1", :question-set/name "Test 1",
                                                        :question-set/questions [{:question/id "2", :question/type :frage.typ/bool},{:question/id "3",:question/type :frage.typ/bool}]}]},
                     {:course-iteration/semester "SoSe", :course-iteration/year 2001, :course-iteration/course {:course/course-name "Fach 2"},
                      :course-iteration/question-sets [{:question-set/id "1", :question-set/name "Test 1",
                                                        :question-set/questions [{:question/id "2", :question/type :frage.typ/bool},{:question/id "3", :question/type :question.type/free-text}]},
                                                       {:question-set/id "2", :question-set/name "Test 2", :question-set/questions [{:question/id "1", :question/type :question.type/free-text}]}]}]
          result-map [{:course-iteration/semester "SoSe", :course-iteration/year 2001, :question-set/id "1", :question-set/name "Test 1", :question/id "3", :question/type :question.type/free-text, :course/course-name "Fach 2"},
                      {:course-iteration/semester "SoSe", :course-iteration/year 2001, :question-set/id "2", :question-set/name "Test 2", :question/id "1", :question/type :question.type/free-text, :course/course-name "Fach 2"}]]
      (t/is (= result-map (d/extract-free-text-questions input-map))))))


(t/deftest test-sortierte-antworten-von-freitext-fragen
  (t/testing "Korrekt sortiert"
    (let [antworten [{:answer/id "1", :user/id "1", :answer/timestamp (.parse (SimpleDateFormat. "yyyy-MM-dd") "2022-08-04")},
                     {:answer/id "1", :user/id "0", :answer/timestamp (.parse (SimpleDateFormat. "yyyy-MM-dd") "2022-08-07")},
                     {:answer/id "2", :user/id "1", :answer/timestamp (.parse (SimpleDateFormat. "yyyy-MM-dd") "2022-08-05")},
                     {:answer/id "3", :user/id "1", :answer/timestamp (.parse (SimpleDateFormat. "yyyy-MM-dd") "2022-08-06")}]
          antwort-fct (fn [_id] antworten)
          freitext-fragen [{:course-iteration/semester "WiSe", :course-iteration/year 2000, :question-set/id "1", :question-set/name "Test 1", :question/id "3", :question/type :question.type/free-text, :course/course-name "Fach 1"}]
          result [{:answer/id "1", :user/id "1", :answer/timestamp (.parse (SimpleDateFormat. "yyyy-MM-dd") "2022-08-04"), :course-iteration/semester "WiSe", :course-iteration/year 2000,
                   :question-set/id "1", :question-set/name "Test 1", :question/id "3", :question/type :question.type/free-text, :course/course-name "Fach 1"}
                  {:answer/id "2", :user/id "1", :answer/timestamp (.parse (SimpleDateFormat. "yyyy-MM-dd") "2022-08-05"), :course-iteration/semester "WiSe", :course-iteration/year 2000,
                   :question-set/id "1", :question-set/name "Test 1", :question/id "3", :question/type :question.type/free-text, :course/course-name "Fach 1"},
                  {:answer/id "3", :user/id "1", :answer/timestamp (.parse (SimpleDateFormat. "yyyy-MM-dd") "2022-08-06"), :course-iteration/semester "WiSe", :course-iteration/year 2000,
                   :question-set/id "1", :question-set/name "Test 1", :question/id "3", :question/type :question.type/free-text, :course/course-name "Fach 1"}
                  {:answer/id "1", :user/id "0", :answer/timestamp (.parse (SimpleDateFormat. "yyyy-MM-dd") "2022-08-07"), :course-iteration/semester "WiSe", :course-iteration/year 2000,
                   :question-set/id "1", :question-set/name "Test 1", :question/id "3", :question/type :question.type/free-text, :course/course-name "Fach 1"}]]
      (t/is (= result (d/sort-answers-of-free-text-questions-by-timestamp antwort-fct freitext-fragen)))))
  (t/testing "Two fragen, two antworten"
    (let [antworten [{:answer/id "1", :user/id "0", :answer/timestamp (.parse (SimpleDateFormat. "yyyy-MM-dd") "2022-08-07")},
                     {:answer/id "2", :user/id "1", :answer/timestamp (.parse (SimpleDateFormat. "yyyy-MM-dd") "2022-08-05")}]
          antwort-fct (fn [_id] antworten)
          freitext-fragen [{:course-iteration/semester "WiSe", :course-iteration/year 2000, :question-set/id "1", :question-set/name "Test 1", :question/id "3", :question/type :question.type/free-text, :course/course-name "Fach 1"},
                           {:course-iteration/semester "SoSe", :course-iteration/year 2001, :question-set/id "1", :question-set/name "Test 1", :question/id "3", :question/type :question.type/free-text, :course/course-name "Fach 2"}]
          result [{:answer/id "2", :user/id "1", :answer/timestamp (.parse (SimpleDateFormat. "yyyy-MM-dd") "2022-08-05"), :course-iteration/semester "WiSe", :course-iteration/year 2000,
                   :question-set/id "1", :question-set/name "Test 1", :question/id "3", :question/type :question.type/free-text, :course/course-name "Fach 1"},
                  {:answer/id "2", :user/id "1", :answer/timestamp (.parse (SimpleDateFormat. "yyyy-MM-dd") "2022-08-05"), :course-iteration/semester "SoSe", :course-iteration/year 2001,
                   :question-set/id "1", :question-set/name "Test 1", :question/id "3", :question/type :question.type/free-text, :course/course-name "Fach 2"},
                  {:answer/id "1", :user/id "0", :answer/timestamp (.parse (SimpleDateFormat. "yyyy-MM-dd") "2022-08-07"), :course-iteration/semester "WiSe", :course-iteration/year 2000,
                   :question-set/id "1", :question-set/name "Test 1", :question/id "3", :question/type :question.type/free-text, :course/course-name "Fach 1"},
                  {:answer/id "1", :user/id "0", :answer/timestamp (.parse (SimpleDateFormat. "yyyy-MM-dd") "2022-08-07"), :course-iteration/semester "SoSe", :course-iteration/year 2001,
                   :question-set/id "1", :question-set/name "Test 1", :question/id "3", :question/type :question.type/free-text, :course/course-name "Fach 2"}]]
      (t/is (= result (d/sort-answers-of-free-text-questions-by-timestamp antwort-fct freitext-fragen))))))


(t/deftest test-antworten-unkorrigiert-und-nur-eine-pro-user-frage-test-id
  (t/testing "Korrigierte Antworten werden entfernt"
    (let [antworten-mit-korrekturen [{:answer/id "3"} {:answer/id "2"} {:answer/id "0"}]
          antworten [{:answer/id "0", :user/id "1", :answer/timestamp (.parse (SimpleDateFormat. "yyyy-MM-dd") "2022-08-05"), :course-iteration/semester "WiSe", :course-iteration/year 2000,
                      :question-set/id "1", :question-set/name "Test 1", :question/id "3", :question/type :question.type/free-text, :course/course-name "Fach 1"},
                     {:answer/id "1", :user/id "1", :answer/timestamp (.parse (SimpleDateFormat. "yyyy-MM-dd") "2022-08-05"), :course-iteration/semester "SoSe", :course-iteration/year 2001,
                      :question-set/id "1", :question-set/name "Test 1", :question/id "3", :question/type :question.type/free-text, :course/course-name "Fach 2"},
                     {:answer/id "2", :user/id "0", :answer/timestamp (.parse (SimpleDateFormat. "yyyy-MM-dd") "2022-08-07"), :course-iteration/semester "WiSe", :course-iteration/year 2000,
                      :question-set/id "1", :question-set/name "Test 1", :question/id "3", :question/type :question.type/free-text, :course/course-name "Fach 1"},
                     {:answer/id "3", :user/id "0", :answer/timestamp (.parse (SimpleDateFormat. "yyyy-MM-dd") "2022-08-07"), :course-iteration/semester "SoSe", :course-iteration/year 2001,
                      :question-set/id "1", :question-set/name "Test 1", :question/id "3", :question/type :question.type/free-text, :course/course-name "Fach 2"}]
          result [{:answer/id "1", :answer/timestamp (.parse (SimpleDateFormat. "yyyy-MM-dd") "2022-08-05"), :course-iteration/semester "SoSe", :course-iteration/year 2001,
                   :question-set/id "1", :question-set/name "Test 1", :question/id "3", :question/type :question.type/free-text, :course/course-name "Fach 2"}]]
      (t/is (= result (d/uncorrected-answers-with-distinct-ids antworten-mit-korrekturen antworten)))))
  (t/testing "Antworten mit gleicher User, frage, test ID werden entfernt"
    (let [antworten-mit-korrekturen []
          antworten [{:answer/id "0", :user/id "1", :answer/timestamp (.parse (SimpleDateFormat. "yyyy-MM-dd") "2022-08-05"), :course-iteration/semester "WiSe", :course-iteration/year 2000,
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
      (t/is (= result (d/uncorrected-answers-with-distinct-ids antworten-mit-korrekturen antworten)))))
  (t/testing "Unkorrigierte Frage und eine jüngere korrigierte Frage"
    (let [antworten-mit-korrekturen [{:answer/id "1"}]
          antworten [{:answer/id "0", :answer/timestamp (.parse (SimpleDateFormat. "yyyy-MM-dd") "2022-08-05"), :course-iteration/semester "WiSe", :course-iteration/year 2000,
                      :question-set/id "1", :question-set/name "Test 1", :question/id "3", :question/type :question.type/free-text, :course/course-name "Fach 1"},
                     {:answer/id "1", :answer/timestamp (.parse (SimpleDateFormat. "yyyy-MM-dd") "2022-08-06"), :course-iteration/semester "WiSe", :course-iteration/year 2000,
                      :question-set/id "1", :question-set/name "Test 1", :question/id "3", :question/type :question.type/free-text, :course/course-name "Fach 2"}]
          result []]
      (t/is (= result (d/uncorrected-answers-with-distinct-ids antworten-mit-korrekturen antworten))))))


(t/deftest test-antworten-korrigiert
  (t/testing "Eine Korrektur"
    (let [korrigierte-antworten [{:correction/answer {:answer/id "1"}}]
          antworten [{:answer/id "0"}, {:answer/id "1"}, {:answer/id "2"}]
          result [{:answer/id "1"}]]
      (t/is (= result (d/corrected-answers korrigierte-antworten antworten)))))
  (t/testing "Keine passende Korrektur"
    (let [korrigierte-antworten [{:correction/answer {:answer/id "4"}}]
          antworten [{:answer/id "0"}, {:answer/id "1"}, {:answer/id "2"}]
          result []]
      (t/is (= result (d/corrected-answers korrigierte-antworten antworten)))))
  (t/testing "Alles korrigiert"
    (let [korrigierte-antworten [{:correction/answer {:answer/id "0"}}
                                 {:correction/answer {:answer/id "1"}}
                                 {:correction/answer {:answer/id "2"}}]
          antworten [{:answer/id "0"}, {:answer/id "1"}, {:answer/id "2"}]
          result [{:answer/id "0"}, {:answer/id "1"}, {:answer/id "2"}]]
      (t/is (= result (d/corrected-answers korrigierte-antworten antworten))))))


(t/deftest test-antworten-fuer-korrektur-ansicht
  (t/testing "Eine Antwort aufbereiten"
    (let [input [{:answer/id "0", :answer/answer ["Antwort"], :answer/points 5,
                  :answer/question {:question/question-statement "Fragetext", :question/points 6, :question/evaluation-criteria "Loesung"}}]
          output {:answer/id "0", :answer/answer "Antwort", :answer/points 5, :question/question-statement "Fragetext",
                  :question/points 6, :question/evaluation-criteria "Loesung"}]
      (t/is output (d/answers-for-correction-view input)))))


(t/deftest test-korrekturen-into-antwort
  (t/testing "Keine Korrektur vorhanden"
    (let [antwort {:answer/id "0"}
          korrekturen-fct (fn [_id] [])
          result (merge antwort {:korrektur/id nil})]
      (t/is result (d/merge-latest-correction-with-answer korrekturen-fct antwort))))
  (t/testing "Eine Korrektur vorhanden"
    (let [antwort {:answer/id "0"}
          korrektur {:korrektur/id "0" :correction/timestamp (.parse (SimpleDateFormat. "yyyy-MM-dd") "2022-08-05")}
          korrekturen-fct (fn [_id] (conj [] korrektur))
          result (merge antwort korrektur)]
      (t/is result (d/merge-latest-correction-with-answer korrekturen-fct antwort))))
  (t/testing "Mehrere Korrekturen vorhanden"
    (let [antwort {:answer/id "0"}
          korrekturen-fct (fn [_id]
                            [{:korrektur/id "0" :correction/timestamp (.parse (SimpleDateFormat. "yyyy-MM-dd") "2022-08-03")}
                             {:korrektur/id "0" :correction/timestamp (.parse (SimpleDateFormat. "yyyy-MM-dd") "2022-08-05")}
                             {:korrektur/id "0" :correction/timestamp (.parse (SimpleDateFormat. "yyyy-MM-dd") "2022-08-04")}])
          result (merge antwort {:korrektur/id "0" :correction/timestamp (.parse (SimpleDateFormat. "yyyy-MM-dd") "2022-08-05")})]
      (t/is result (d/merge-latest-correction-with-answer korrekturen-fct antwort)))))


(t/deftest test-check-incoming-korrektur
  (t/testing "Input is fine"
    (let [korrektur-input {:correction/feedback "Gut!" :correction/points "3" :korrektor/id "1"}
          antwort-input [{:answer/id "0" :answer/points 0 :answer/answer "So ist das"
                          :answer/question {:question/question-statement "Frage" :question/points 4 :question/evaluation-criteria "Kriterien"}}]
          result {:correction/feedback "Gut!" :correction/points 3 :korrektor/id "1"}]
      (t/is result (d/validate-incoming-correction korrektur-input antwort-input))))
  (t/testing "Keine Antwort"
    (let [korrektur-input {:correction/feedback "Gut!" :correction/points "3" :korrektor/id "1"}
          antwort-input []
          result (merge korrektur-input {:error :keine-passende-antwort})]
      (t/is result (d/validate-incoming-correction korrektur-input antwort-input))))
  (t/testing "Corrupted Antwort"
    (let [korrektur-input {:correction/feedback "Gut!" :correction/points "3" :korrektor/id "1"}
          antwort-input [{:answer/id "0" :answer/points 0 :answer/answer "So ist das"
                          :answer/question {}}]
          result (merge korrektur-input {:error :keine-passende-antwort})]
      (t/is result (d/validate-incoming-correction korrektur-input antwort-input))))
  (t/testing "Keine Korrektur 1"
    (let [korrektur-input {:correction/points "3" :korrektor/id "1"}
          antwort-input [{:answer/id "0" :answer/points 0 :answer/answer "So ist das"
                          :answer/question {:question/question-statement "Frage" :question/points 4 :question/evaluation-criteria "Kriterien"}}]
          result (merge korrektur-input {:error :korrektur-text-missing})]
      (t/is result (d/validate-incoming-correction korrektur-input antwort-input))))
  (t/testing "Keine Korrektur 2"
    (let [korrektur-input {:correction/feedback "" :correction/points "3" :korrektor/id "1"}
          antwort-input [{:answer/id "0" :answer/points 0 :answer/answer "So ist das"
                          :answer/question {:question/question-statement "Frage" :question/points 4 :question/evaluation-criteria "Kriterien"}}]
          result (merge korrektur-input {:error :korrektur-text-missing})]
      (t/is result (d/validate-incoming-correction korrektur-input antwort-input))))
  (t/testing "Keine Punkte 1"
    (let [korrektur-input {:correction/feedback "Gut!", :korrektor/id "1"}
          antwort-input [{:answer/id "0" :answer/points 0 :answer/answer "So ist das"
                          :answer/question {:question/question-statement "Frage" :question/points 4 :question/evaluation-criteria "Kriterien"}}]
          result (merge korrektur-input {:error :korrektur-punkte-missing})]
      (t/is result (d/validate-incoming-correction korrektur-input antwort-input))))
  (t/testing "Keine Punkte 2"
    (let [korrektur-input {:correction/feedback "Gut!" :correction/points "" :korrektor/id "1"}
          antwort-input [{:answer/id "0" :answer/points 0 :answer/answer "So ist das"
                          :answer/question {:question/question-statement "Frage" :question/points 4 :question/evaluation-criteria "Kriterien"}}]
          result (merge korrektur-input {:error :korrektur-punkte-missing})]
      (t/is result (d/validate-incoming-correction korrektur-input antwort-input))))
  (t/testing "Punkte invalid 1"
    (let [korrektur-input {:correction/feedback "Gut!" :correction/points "hallo" :korrektor/id "1"}
          antwort-input [{:answer/id "0" :answer/points 0 :answer/answer "So ist das"
                          :answer/question {:question/question-statement "Frage" :question/points 4 :question/evaluation-criteria "Kriterien"}}]
          result (merge korrektur-input {:error :punkte-invalid})]
      (t/is result (d/validate-incoming-correction korrektur-input antwort-input))))
  (t/testing "Punkte invalid 2"
    (let [korrektur-input {:correction/feedback "Gut!" :correction/points "-10" :korrektor/id "1"}
          antwort-input [{:answer/id "0" :answer/points 0 :answer/answer "So ist das"
                          :answer/question {:question/question-statement "Frage" :question/points 4 :question/evaluation-criteria "Kriterien"}}]
          result (merge korrektur-input {:error :punkte-invalid})]
      (t/is result (d/validate-incoming-correction korrektur-input antwort-input))))
  (t/testing "Zu viele Punkte"
    (let [korrektur-input {:correction/feedback "Gut!" :correction/points "10" :korrektor/id "1"}
          antwort-input [{:answer/id "0" :answer/points 0 :answer/answer "So ist das"
                          :answer/question {:question/question-statement "Frage" :question/points 4 :question/evaluation-criteria "Kriterien"}}]
          result (merge korrektur-input {:error :punkte-zu-viel})]
      (t/is result (d/validate-incoming-correction korrektur-input antwort-input)))))
