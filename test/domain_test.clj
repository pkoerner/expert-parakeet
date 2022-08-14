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
  (assoc {} :test/fragen (mapv #(assoc {} :frage/punkte %) punkte)))


(defspec test-test-max-punkte 10
  (prop/for-all
    [punkte (gen/list gen/nat)]
    (let [test (frage-from-punkte punkte)
          expected-result (apply + punkte)]
      (= expected-result (d/test-max-punkte test)))))


(t/deftest test-test-erreichte-punkte
  (t/testing "Keine zwei Antworten für die gleiche Frage"
    (let [input [{:antwort/punkte 10, :antwort/frage {:frage/id "2", :frage/typ :frage.typ/bool}}
                 {:antwort/punkte 4, :antwort/frage {:frage/id "3", :frage/typ :frage.typ/text}}
                 {:antwort/punkte 1, :antwort/frage {:frage/id "5", :frage/typ :frage.typ/bool}}]]
      (t/is (= 15 (d/test-erreichte-punkte input)))))
  (t/testing "Zwei Antworten für die gleiche Frage"
    (let [input [{:antwort/punkte 10, :antwort/frage {:frage/id "2", :frage/typ :frage.typ/bool}}
                 {:antwort/punkte 4, :antwort/frage {:frage/id "3", :frage/typ :frage.typ/text}}
                 {:antwort/punkte 1, :antwort/frage {:frage/id "2", :frage/typ :frage.typ/bool}}
                 {:antwort/punkte 5, :antwort/frage {:frage/id "3", :frage/typ :frage.typ/text}}]]
      (t/is (= 15 (d/test-erreichte-punkte input)))))
  (t/testing "Keine Antworten"
    (let [input []]
      (t/is (= 0 (d/test-erreichte-punkte input))))))


(t/deftest test-test-punkte
  (t/testing "Zwei Fragen in Test"
    (let [test {:test/id "1", :test/name "Test 1", :test/fragen [{:frage/id "2", :frage/punkte 10},{:frage/id "3", :frage/punkte 2}]}
          antwort-fct (fn [& _args] [{:antwort/punkte 10, :antwort/frage {:frage/id "2", :frage/typ :frage.typ/bool}}])]
      (t/is (= (d/test-punkte antwort-fct test)
               {:test/id "1" :test/name "Test 1" :test/max-punkte 12 :test/erreichte-punkte 10})))))


(t/deftest test-unpack-map-in-map
  (t/testing "Two items in one map"
    (let [input-map {:test/id "1", :test/name "Test 1",
                     :test/fragen [{:frage/id "2", :frage/typ :frage.typ/bool},{:frage/id "3", :frage/typ :frage.typ/text}]}
          result-map [{:test/id "1", :test/name "Test 1", :frage/id "2", :frage/typ :frage.typ/bool}
                      {:test/id "1", :test/name "Test 1", :frage/id "3", :frage/typ :frage.typ/text}]]
      (t/is (= result-map
               (d/unpack-map-in-map :test/fragen input-map)))))
  (t/testing "One items in one map"
    (let [input-map {:test/id "1", :test/name "Test 1",
                     :test/fragen [{:frage/id "2", :frage/typ :frage.typ/bool}]}
          result-map [{:test/id "1", :test/name "Test 1", :frage/id "2", :frage/typ :frage.typ/bool}]]
      (t/is (= result-map
               (d/unpack-map-in-map :test/fragen input-map)))))
  (t/testing "Two items in one map"
    (let [input-map {:test/id "1", :test/name "Test 1",
                     :test/fragen []}
          result-map []]
      (t/is (= result-map
               (d/unpack-map-in-map :test/fragen input-map))))))


(t/deftest test-remove-antworten-with-identical-user-frage-id
  (t/testing "No removal"
    (let [provided-list [{:frage/id "1", :test/id "2", :user/id "0", :antwort/timestamp "2022-08-03T00:00:00Z"}
                         {:frage/id "2", :test/id "3", :user/id "6", :antwort/timestamp "2022-08-02T00:00:00Z"}
                         {:frage/id "3", :test/id "4", :user/id "2", :antwort/timestamp "2022-08-01T00:00:00Z"}]]
      (t/is (= provided-list (d/remove-antworten-with-identical-user-frage-test-id provided-list)))))
  (t/testing "Two removals"
    (let [provided-list [{:frage/id "1", :test/id "2", :user/id "0", :antwort/timestamp "2022-08-05T00:00:00Z"}
                         {:frage/id "2", :test/id "3", :user/id "6", :antwort/timestamp "2022-08-04T00:00:00Z"}
                         {:frage/id "1", :test/id "2", :user/id "0", :antwort/timestamp "2022-08-03T00:00:00Z"}
                         {:frage/id "2", :test/id "3", :user/id "6", :antwort/timestamp "2022-08-02T00:00:00Z"}
                         {:frage/id "3", :test/id "4", :user/id "2", :antwort/timestamp "2022-08-01T00:00:00Z"}]
          expected-result [{:frage/id "1", :test/id "2", :user/id "0", :antwort/timestamp "2022-08-05T00:00:00Z"}
                           {:frage/id "2", :test/id "3", :user/id "6", :antwort/timestamp "2022-08-04T00:00:00Z"}
                           {:frage/id "3", :test/id "4", :user/id "2", :antwort/timestamp "2022-08-01T00:00:00Z"}]]
      (t/is (= expected-result (d/remove-antworten-with-identical-user-frage-test-id provided-list))))))


(t/deftest test-freitext-fragen
  (t/testing "Remove one frage"
    (let [input-map [{:kurs/semester "WiSe", :kurs/jahr 2000, :kurs/fach {:fach/fachtitel "Fach 1"},
                      :kurs/tests [{:test/id "1", :test/name "Test 1",
                                    :test/fragen [{:frage/id "2", :frage/typ :frage.typ/bool},{:frage/id "3",:frage/typ :frage.typ/text}]}]},
                     {:kurs/semester "SoSe", :kurs/jahr 2001, :kurs/fach {:fach/fachtitel "Fach 2"},
                      :kurs/tests [{:test/id "1", :test/name "Test 1",
                                    :test/fragen [{:frage/id "2", :frage/typ :frage.typ/bool},{:frage/id "3", :frage/typ :frage.typ/text}]},
                                   {:test/id "2", :test/name "Test 2", :test/fragen [{:frage/id "1", :frage/typ :frage.typ/text}]}]}]
          result-map [{:kurs/semester "WiSe", :kurs/jahr 2000, :test/id "1", :test/name "Test 1", :frage/id "3", :frage/typ :frage.typ/text, :fach/fachtitel "Fach 1"},
                      {:kurs/semester "SoSe", :kurs/jahr 2001, :test/id "1", :test/name "Test 1", :frage/id "3", :frage/typ :frage.typ/text, :fach/fachtitel "Fach 2"},
                      {:kurs/semester "SoSe", :kurs/jahr 2001, :test/id "2", :test/name "Test 2", :frage/id "1", :frage/typ :frage.typ/text, :fach/fachtitel "Fach 2"}]]
      (t/is (= result-map (d/freitext-fragen input-map)))))
  (t/testing "No fragen for one test"
    (let [input-map [{:kurs/semester "WiSe", :kurs/jahr 2000, :kurs/fach {:fach/fachtitel "Fach 1"},
                      :kurs/tests [{:test/id "1", :test/name "Test 1",
                                    :test/fragen []}]},
                     {:kurs/semester "SoSe", :kurs/jahr 2001, :kurs/fach {:fach/fachtitel "Fach 2"},
                      :kurs/tests [{:test/id "1", :test/name "Test 1",
                                    :test/fragen [{:frage/id "2", :frage/typ :frage.typ/bool},{:frage/id "3", :frage/typ :frage.typ/text}]},
                                   {:test/id "2", :test/name "Test 2", :test/fragen [{:frage/id "1", :frage/typ :frage.typ/text}]}]}]
          result-map [{:kurs/semester "SoSe", :kurs/jahr 2001, :test/id "1", :test/name "Test 1", :frage/id "3", :frage/typ :frage.typ/text, :fach/fachtitel "Fach 2"},
                      {:kurs/semester "SoSe", :kurs/jahr 2001, :test/id "2", :test/name "Test 2", :frage/id "1", :frage/typ :frage.typ/text, :fach/fachtitel "Fach 2"}]]
      (t/is (= result-map (d/freitext-fragen input-map)))))
  (t/testing "Only bool fragen for one test"
    (let [input-map [{:kurs/semester "WiSe", :kurs/jahr 2000, :kurs/fach {:fach/fachtitel "Fach 1"},
                      :kurs/tests [{:test/id "1", :test/name "Test 1",
                                    :test/fragen [{:frage/id "2", :frage/typ :frage.typ/bool},{:frage/id "3",:frage/typ :frage.typ/bool}]}]},
                     {:kurs/semester "SoSe", :kurs/jahr 2001, :kurs/fach {:fach/fachtitel "Fach 2"},
                      :kurs/tests [{:test/id "1", :test/name "Test 1",
                                    :test/fragen [{:frage/id "2", :frage/typ :frage.typ/bool},{:frage/id "3", :frage/typ :frage.typ/text}]},
                                   {:test/id "2", :test/name "Test 2", :test/fragen [{:frage/id "1", :frage/typ :frage.typ/text}]}]}]
          result-map [{:kurs/semester "SoSe", :kurs/jahr 2001, :test/id "1", :test/name "Test 1", :frage/id "3", :frage/typ :frage.typ/text, :fach/fachtitel "Fach 2"},
                      {:kurs/semester "SoSe", :kurs/jahr 2001, :test/id "2", :test/name "Test 2", :frage/id "1", :frage/typ :frage.typ/text, :fach/fachtitel "Fach 2"}]]
      (t/is (= result-map (d/freitext-fragen input-map))))))


(t/deftest test-sortierte-antworten-von-freitext-fragen
  (t/testing "Korrekt sortiert"
    (let [antworten [{:antwort/id "1", :user/id "1", :antwort/timestamp (.parse (SimpleDateFormat. "yyyy-MM-dd") "2022-08-04")},
                     {:antwort/id "1", :user/id "0", :antwort/timestamp (.parse (SimpleDateFormat. "yyyy-MM-dd") "2022-08-07")},
                     {:antwort/id "2", :user/id "1", :antwort/timestamp (.parse (SimpleDateFormat. "yyyy-MM-dd") "2022-08-05")},
                     {:antwort/id "3", :user/id "1", :antwort/timestamp (.parse (SimpleDateFormat. "yyyy-MM-dd") "2022-08-06")}]
          antwort-fct (fn [_id] antworten)
          freitext-fragen [{:kurs/semester "WiSe", :kurs/jahr 2000, :test/id "1", :test/name "Test 1", :frage/id "3", :frage/typ :frage.typ/text, :fach/fachtitel "Fach 1"}]
          result [{:antwort/id "1", :user/id "1", :antwort/timestamp (.parse (SimpleDateFormat. "yyyy-MM-dd") "2022-08-04"), :kurs/semester "WiSe", :kurs/jahr 2000,
                   :test/id "1", :test/name "Test 1", :frage/id "3", :frage/typ :frage.typ/text, :fach/fachtitel "Fach 1"}
                  {:antwort/id "2", :user/id "1", :antwort/timestamp (.parse (SimpleDateFormat. "yyyy-MM-dd") "2022-08-05"), :kurs/semester "WiSe", :kurs/jahr 2000,
                   :test/id "1", :test/name "Test 1", :frage/id "3", :frage/typ :frage.typ/text, :fach/fachtitel "Fach 1"},
                  {:antwort/id "3", :user/id "1", :antwort/timestamp (.parse (SimpleDateFormat. "yyyy-MM-dd") "2022-08-06"), :kurs/semester "WiSe", :kurs/jahr 2000,
                   :test/id "1", :test/name "Test 1", :frage/id "3", :frage/typ :frage.typ/text, :fach/fachtitel "Fach 1"}
                  {:antwort/id "1", :user/id "0", :antwort/timestamp (.parse (SimpleDateFormat. "yyyy-MM-dd") "2022-08-07"), :kurs/semester "WiSe", :kurs/jahr 2000,
                   :test/id "1", :test/name "Test 1", :frage/id "3", :frage/typ :frage.typ/text, :fach/fachtitel "Fach 1"}]]
      (t/is (= result (d/sortierte-antworten-von-freitext-fragen antwort-fct freitext-fragen)))))
  (t/testing "Two fragen, two antworten"
    (let [antworten [{:antwort/id "1", :user/id "0", :antwort/timestamp (.parse (SimpleDateFormat. "yyyy-MM-dd") "2022-08-07")},
                     {:antwort/id "2", :user/id "1", :antwort/timestamp (.parse (SimpleDateFormat. "yyyy-MM-dd") "2022-08-05")}]
          antwort-fct (fn [_id] antworten)
          freitext-fragen [{:kurs/semester "WiSe", :kurs/jahr 2000, :test/id "1", :test/name "Test 1", :frage/id "3", :frage/typ :frage.typ/text, :fach/fachtitel "Fach 1"},
                           {:kurs/semester "SoSe", :kurs/jahr 2001, :test/id "1", :test/name "Test 1", :frage/id "3", :frage/typ :frage.typ/text, :fach/fachtitel "Fach 2"}]
          result [{:antwort/id "2", :user/id "1", :antwort/timestamp (.parse (SimpleDateFormat. "yyyy-MM-dd") "2022-08-05"), :kurs/semester "WiSe", :kurs/jahr 2000,
                   :test/id "1", :test/name "Test 1", :frage/id "3", :frage/typ :frage.typ/text, :fach/fachtitel "Fach 1"},
                  {:antwort/id "2", :user/id "1", :antwort/timestamp (.parse (SimpleDateFormat. "yyyy-MM-dd") "2022-08-05"), :kurs/semester "SoSe", :kurs/jahr 2001,
                   :test/id "1", :test/name "Test 1", :frage/id "3", :frage/typ :frage.typ/text, :fach/fachtitel "Fach 2"},
                  {:antwort/id "1", :user/id "0", :antwort/timestamp (.parse (SimpleDateFormat. "yyyy-MM-dd") "2022-08-07"), :kurs/semester "WiSe", :kurs/jahr 2000,
                   :test/id "1", :test/name "Test 1", :frage/id "3", :frage/typ :frage.typ/text, :fach/fachtitel "Fach 1"},
                  {:antwort/id "1", :user/id "0", :antwort/timestamp (.parse (SimpleDateFormat. "yyyy-MM-dd") "2022-08-07"), :kurs/semester "SoSe", :kurs/jahr 2001,
                   :test/id "1", :test/name "Test 1", :frage/id "3", :frage/typ :frage.typ/text, :fach/fachtitel "Fach 2"}]]
      (t/is (= result (d/sortierte-antworten-von-freitext-fragen antwort-fct freitext-fragen))))))


(t/deftest test-antworten-unkorrigiert-und-nur-eine-pro-user-frage-test-id
  (t/testing "Korrigierte Antworten werden entfernt"
    (let [antworten-mit-korrekturen [{:antwort/id "3"} {:antwort/id "2"} {:antwort/id "0"}]
          antworten [{:antwort/id "0", :user/id "1", :antwort/timestamp (.parse (SimpleDateFormat. "yyyy-MM-dd") "2022-08-05"), :kurs/semester "WiSe", :kurs/jahr 2000,
                      :test/id "1", :test/name "Test 1", :frage/id "3", :frage/typ :frage.typ/text, :fach/fachtitel "Fach 1"},
                     {:antwort/id "1", :user/id "1", :antwort/timestamp (.parse (SimpleDateFormat. "yyyy-MM-dd") "2022-08-05"), :kurs/semester "SoSe", :kurs/jahr 2001,
                      :test/id "1", :test/name "Test 1", :frage/id "3", :frage/typ :frage.typ/text, :fach/fachtitel "Fach 2"},
                     {:antwort/id "2", :user/id "0", :antwort/timestamp (.parse (SimpleDateFormat. "yyyy-MM-dd") "2022-08-07"), :kurs/semester "WiSe", :kurs/jahr 2000,
                      :test/id "1", :test/name "Test 1", :frage/id "3", :frage/typ :frage.typ/text, :fach/fachtitel "Fach 1"},
                     {:antwort/id "3", :user/id "0", :antwort/timestamp (.parse (SimpleDateFormat. "yyyy-MM-dd") "2022-08-07"), :kurs/semester "SoSe", :kurs/jahr 2001,
                      :test/id "1", :test/name "Test 1", :frage/id "3", :frage/typ :frage.typ/text, :fach/fachtitel "Fach 2"}]
          result [{:antwort/id "1", :antwort/timestamp (.parse (SimpleDateFormat. "yyyy-MM-dd") "2022-08-05"), :kurs/semester "SoSe", :kurs/jahr 2001,
                   :test/id "1", :test/name "Test 1", :frage/id "3", :frage/typ :frage.typ/text, :fach/fachtitel "Fach 2"}]]
      (t/is (= result (d/antworten-unkorrigiert-und-nur-eine-pro-user-frage-test-id antworten-mit-korrekturen antworten)))))
  (t/testing "Antworten mit gleicher User, frage, test ID werden entfernt"
    (let [antworten-mit-korrekturen []
          antworten [{:antwort/id "0", :user/id "1", :antwort/timestamp (.parse (SimpleDateFormat. "yyyy-MM-dd") "2022-08-05"), :kurs/semester "WiSe", :kurs/jahr 2000,
                      :test/id "1", :test/name "Test 1", :frage/id "3", :frage/typ :frage.typ/text, :fach/fachtitel "Fach 1"},
                     {:antwort/id "1", :user/id "1", :antwort/timestamp (.parse (SimpleDateFormat. "yyyy-MM-dd") "2022-08-05"), :kurs/semester "SoSe", :kurs/jahr 2001,
                      :test/id "1", :test/name "Test 1", :frage/id "3", :frage/typ :frage.typ/text, :fach/fachtitel "Fach 2"},
                     {:antwort/id "2", :user/id "1", :antwort/timestamp (.parse (SimpleDateFormat. "yyyy-MM-dd") "2022-08-07"), :kurs/semester "WiSe", :kurs/jahr 2000,
                      :test/id "1", :test/name "Test 1", :frage/id "3", :frage/typ :frage.typ/text, :fach/fachtitel "Fach 1"},
                     {:antwort/id "3", :user/id "0", :antwort/timestamp (.parse (SimpleDateFormat. "yyyy-MM-dd") "2022-08-07"), :kurs/semester "SoSe", :kurs/jahr 2001,
                      :test/id "1", :test/name "Test 1", :frage/id "3", :frage/typ :frage.typ/text, :fach/fachtitel "Fach 2"}]
          result [{:antwort/id "2", :antwort/timestamp (.parse (SimpleDateFormat. "yyyy-MM-dd") "2022-08-07"), :kurs/semester "WiSe", :kurs/jahr 2000,
                   :test/id "1", :test/name "Test 1", :frage/id "3", :frage/typ :frage.typ/text, :fach/fachtitel "Fach 1"},
                  {:antwort/id "3", :antwort/timestamp (.parse (SimpleDateFormat. "yyyy-MM-dd") "2022-08-07"), :kurs/semester "SoSe", :kurs/jahr 2001,
                   :test/id "1", :test/name "Test 1", :frage/id "3", :frage/typ :frage.typ/text, :fach/fachtitel "Fach 2"}]]
      (t/is (= result (d/antworten-unkorrigiert-und-nur-eine-pro-user-frage-test-id antworten-mit-korrekturen antworten)))))
  (t/testing "Unkorrigierte Frage und eine jüngere korrigierte Frage"
    (let [antworten-mit-korrekturen [{:antwort/id "1"}]
          antworten [{:antwort/id "0", :antwort/timestamp (.parse (SimpleDateFormat. "yyyy-MM-dd") "2022-08-05"), :kurs/semester "WiSe", :kurs/jahr 2000,
                      :test/id "1", :test/name "Test 1", :frage/id "3", :frage/typ :frage.typ/text, :fach/fachtitel "Fach 1"},
                     {:antwort/id "1", :antwort/timestamp (.parse (SimpleDateFormat. "yyyy-MM-dd") "2022-08-06"), :kurs/semester "WiSe", :kurs/jahr 2000,
                      :test/id "1", :test/name "Test 1", :frage/id "3", :frage/typ :frage.typ/text, :fach/fachtitel "Fach 2"}]
          result []]
      (t/is (= result (d/antworten-unkorrigiert-und-nur-eine-pro-user-frage-test-id antworten-mit-korrekturen antworten))))))


(t/deftest test-antworten-korrigiert
  (t/testing "Eine Korrektur"
    (let [korrigierte-antworten [{:korrektur/antwort {:antwort/id "1"}}]
          antworten [{:antwort/id "0"}, {:antwort/id "1"}, {:antwort/id "2"}]
          result [{:antwort/id "1"}]]
      (t/is (= result (d/antworten-korrigiert korrigierte-antworten antworten)))))
  (t/testing "Keine passende Korrektur"
    (let [korrigierte-antworten [{:korrektur/antwort {:antwort/id "4"}}]
          antworten [{:antwort/id "0"}, {:antwort/id "1"}, {:antwort/id "2"}]
          result []]
      (t/is (= result (d/antworten-korrigiert korrigierte-antworten antworten)))))
  (t/testing "Alles korrigiert"
    (let [korrigierte-antworten [{:korrektur/antwort {:antwort/id "0"}}
                                 {:korrektur/antwort {:antwort/id "1"}}
                                 {:korrektur/antwort {:antwort/id "2"}}]
          antworten [{:antwort/id "0"}, {:antwort/id "1"}, {:antwort/id "2"}]
          result [{:antwort/id "0"}, {:antwort/id "1"}, {:antwort/id "2"}]]
      (t/is (= result (d/antworten-korrigiert korrigierte-antworten antworten))))))


(t/deftest test-antworten-fuer-korrektur-ansicht
  (t/testing "Eine Antwort aufbereiten"
    (let [input [{:antwort/id 0, :antwort/antwort ["Antwort"], :antwort/punkte 5,
                  :antwort/frage {:frage/frage-text "Fragetext", :frage/punkte 6, :frage/loesungskriterien "Loesung"}}]
          output {:antwort/id 0, :antwort/antwort "Antwort", :antwort/punkte 5, :frage/frage-text "Fragetext",
                  :frage/punkte 6, :frage/loesungskriterien "Loesung"}]
      (t/is output (d/antworten-fuer-korrektur-ansicht input)))))


(t/deftest test-korrekturen-into-antwort
  (t/testing "Keine Korrektur vorhanden"
    (let [antwort {:antwort/id 0}
          korrekturen-fct (fn [_id] [])
          result (merge antwort {:korrektur/id nil})]
      (t/is result (d/korrekturen-into-antwort korrekturen-fct antwort))))
  (t/testing "Eine Korrektur vorhanden"
    (let [antwort {:antwort/id 0}
          korrektur {:korrektur/id 0 :korrektur/timestamp (.parse (SimpleDateFormat. "yyyy-MM-dd") "2022-08-05")}
          korrekturen-fct (fn [_id] (conj [] korrektur))
          result (merge antwort korrektur)]
      (t/is result (d/korrekturen-into-antwort korrekturen-fct antwort))))
  (t/testing "Mehrere Korrekturen vorhanden"
    (let [antwort {:antwort/id 0}
          korrekturen-fct (fn [_id]
                            [{:korrektur/id 0 :korrektur/timestamp (.parse (SimpleDateFormat. "yyyy-MM-dd") "2022-08-03")}
                             {:korrektur/id 0 :korrektur/timestamp (.parse (SimpleDateFormat. "yyyy-MM-dd") "2022-08-05")}
                             {:korrektur/id 0 :korrektur/timestamp (.parse (SimpleDateFormat. "yyyy-MM-dd") "2022-08-04")}])
          result (merge antwort {:korrektur/id 0 :korrektur/timestamp (.parse (SimpleDateFormat. "yyyy-MM-dd") "2022-08-05")})]
      (t/is result (d/korrekturen-into-antwort korrekturen-fct antwort)))))


(t/deftest test-check-incoming-korrektur
  (t/testing "Input is fine"
    (let [korrektur-input {:korrektur/korrektur-text "Gut!" :korrektur/punkte "3" :korrektor/id "1"}
          antwort-input [{:antwort/id "0" :antwort/punkte 0 :antwort/antwort "So ist das"
                          :antwort/frage {:frage/frage-text "Frage" :frage/punkte 4 :frage/loesungskriterien "Kriterien"}}]
          result {:korrektur/korrektur-text "Gut!" :korrektur/punkte 3 :korrektor/id "1"}]
      (t/is result (d/check-incoming-korrektur korrektur-input antwort-input))))
  (t/testing "Keine Antwort"
    (let [korrektur-input {:korrektur/korrektur-text "Gut!" :korrektur/punkte "3" :korrektor/id "1"}
          antwort-input []
          result (merge korrektur-input {:error :keine-passende-antwort})]
      (t/is result (d/check-incoming-korrektur korrektur-input antwort-input))))
  (t/testing "Corrupted Antwort"
    (let [korrektur-input {:korrektur/korrektur-text "Gut!" :korrektur/punkte "3" :korrektor/id "1"}
          antwort-input [{:antwort/id "0" :antwort/punkte 0 :antwort/antwort "So ist das"
                          :antwort/frage {}}]
          result (merge korrektur-input {:error :keine-passende-antwort})]
      (t/is result (d/check-incoming-korrektur korrektur-input antwort-input))))
  (t/testing "Keine Korrektur 1"
    (let [korrektur-input {:korrektur/punkte "3" :korrektor/id "1"}
          antwort-input [{:antwort/id "0" :antwort/punkte 0 :antwort/antwort "So ist das"
                          :antwort/frage {:frage/frage-text "Frage" :frage/punkte 4 :frage/loesungskriterien "Kriterien"}}]
          result (merge korrektur-input {:error :korrektur-text-missing})]
      (t/is result (d/check-incoming-korrektur korrektur-input antwort-input))))
  (t/testing "Keine Korrektur 2"
    (let [korrektur-input {:korrektur/korrektur-text "" :korrektur/punkte "3" :korrektor/id "1"}
          antwort-input [{:antwort/id "0" :antwort/punkte 0 :antwort/antwort "So ist das"
                          :antwort/frage {:frage/frage-text "Frage" :frage/punkte 4 :frage/loesungskriterien "Kriterien"}}]
          result (merge korrektur-input {:error :korrektur-text-missing})]
      (t/is result (d/check-incoming-korrektur korrektur-input antwort-input))))
  (t/testing "Keine Punkte 1"
    (let [korrektur-input {:korrektur/korrektur-text "Gut!", :korrektor/id "1"}
          antwort-input [{:antwort/id "0" :antwort/punkte 0 :antwort/antwort "So ist das"
                          :antwort/frage {:frage/frage-text "Frage" :frage/punkte 4 :frage/loesungskriterien "Kriterien"}}]
          result (merge korrektur-input {:error :korrektur-punkte-missing})]
      (t/is result (d/check-incoming-korrektur korrektur-input antwort-input))))
  (t/testing "Keine Punkte 2"
    (let [korrektur-input {:korrektur/korrektur-text "Gut!" :korrektur/punkte "" :korrektor/id "1"}
          antwort-input [{:antwort/id "0" :antwort/punkte 0 :antwort/antwort "So ist das"
                          :antwort/frage {:frage/frage-text "Frage" :frage/punkte 4 :frage/loesungskriterien "Kriterien"}}]
          result (merge korrektur-input {:error :korrektur-punkte-missing})]
      (t/is result (d/check-incoming-korrektur korrektur-input antwort-input))))
  (t/testing "Punkte invalid 1"
    (let [korrektur-input {:korrektur/korrektur-text "Gut!" :korrektur/punkte "hallo" :korrektor/id "1"}
          antwort-input [{:antwort/id "0" :antwort/punkte 0 :antwort/antwort "So ist das"
                          :antwort/frage {:frage/frage-text "Frage" :frage/punkte 4 :frage/loesungskriterien "Kriterien"}}]
          result (merge korrektur-input {:error :punkte-invalid})]
      (t/is result (d/check-incoming-korrektur korrektur-input antwort-input))))
  (t/testing "Punkte invalid 2"
    (let [korrektur-input {:korrektur/korrektur-text "Gut!" :korrektur/punkte "-10" :korrektor/id "1"}
          antwort-input [{:antwort/id "0" :antwort/punkte 0 :antwort/antwort "So ist das"
                          :antwort/frage {:frage/frage-text "Frage" :frage/punkte 4 :frage/loesungskriterien "Kriterien"}}]
          result (merge korrektur-input {:error :punkte-invalid})]
      (t/is result (d/check-incoming-korrektur korrektur-input antwort-input))))
  (t/testing "Zu viele Punkte"
    (let [korrektur-input {:korrektur/korrektur-text "Gut!" :korrektur/punkte "10" :korrektor/id "1"}
          antwort-input [{:antwort/id "0" :antwort/punkte 0 :antwort/antwort "So ist das"
                          :antwort/frage {:frage/frage-text "Frage" :frage/punkte 4 :frage/loesungskriterien "Kriterien"}}]
          result (merge korrektur-input {:error :punkte-zu-viel})]
      (t/is result (d/check-incoming-korrektur korrektur-input antwort-input)))))
