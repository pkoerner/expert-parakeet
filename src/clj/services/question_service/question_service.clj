(ns services.question-service.question-service
  (:require [clojure.spec.alpha :as s]
            [clojure.string :as string]
            db
            [services.question-service.p-question-service :refer [PQuestionService]]))

;; todo replace all direct db calls and inject repositories
(deftype QuestionService
         [])

(defn- create-question-impl!
  [_ question]
  (db/add-question! question))

(defn- get-question-categories
  [_]
  (db/get-all-question-categories))

(defn- create-validation-functions-with-error-msg
  [question]
  (let [{:question/keys [question-statement
                         points
                         type
                         possible-solutions
                         single-choice-solution
                         multiple-choice-solution
                         evaluation-criteria
                         categories]} question]
    (merge
     {:question/question-statement [[#(s/valid? :question/question-statement question-statement) "Die Fragestellung war inkorrekt!"]]
      :question/points [[#(s/valid? :question/points points) "Die erreichbaren Punkte waren inkorrekt!"]]
      :question/type [[#(s/valid? :question/type type) "Der ausgewälte question-type war kein korrekter type!"]]}

     (when (or (= type :question.type/single-choice) (= type :question.type/multiple-choice))
       {:question/possible-solutions
        [[#(s/valid? :question/possible-solutions possible-solutions) "Die Antwortmöglichkeiten waren nicht korrekt!"]
         [#(if possible-solutions (apply distinct? possible-solutions) true) "Zwei Antwortmglichkeiten waren identisch!"]]})

     (when  (= type :question.type/single-choice)
       {:question/single-choice-solution
        [[#(s/valid? :question/single-choice-solution single-choice-solution) "Die möglichen Antworten waren keine korrekten möglichen Antworten!"]
         [#((set possible-solutions) single-choice-solution) "Die korrekte Antwort war nicht in den möglichen Antworten enthalten!"]]})

     (when  (= type :question.type/multiple-choice)
       {:question/multiple-choice-solution
        [[#(s/valid? :question/multiple-choice-solution multiple-choice-solution) "Die möglichen Antworten waren keine korrekten möglichen Antworten!"]
         [#(every? (fn [x] ((set possible-solutions) x)) multiple-choice-solution) "Die korrekte Antwort war nicht in den möglichen Antworten enthalten!"]]})

     (when (= type :question.type/free-text)
       {:question/evaluation-criteria
        [[#(s/valid? :question/evaluation-criteria evaluation-criteria) "Die angegebenen Bewertungskriterien waren keine korrekten Bewertungskriterien!"]]})

     (when (seq categories)
       {:question/categories
        [[#(s/valid? :question/categories categories) "Die angegebenen Kategorien waren nicht korrekt geformt!"]]}))))


(def ^:private to-question-type
  {"free-text" :question.type/free-text
   "single-choice" :question.type/single-choice
   "multiple-choice" :question.type/multiple-choice})


(defn- parse-question
  [question-statement achivable-points type
   possible-solutions single-choice-solutions multiple-choice-solutions
   evaluation-criteria
   categories]
  (letfn [(as-coll
            [coll-or-single]
            (if (or (nil? coll-or-single) (coll? coll-or-single))
              coll-or-single
              [coll-or-single]))]
    (reduce merge
            {}
            [{:question/question-statement question-statement}
             (let [question-type (to-question-type type)]
               (if (nil? question-type)
                 {:errors {:question/type "Der angegebene question-type war kein valider type!"}}
                 {:question/type question-type}))
             (try (let [points (Long/parseLong (.trim achivable-points))]
                    {:question/points points})
                  (catch NumberFormatException _
                    {:errors {:question/points "Die erreichbaren Punkte müssen eine Zahl sein"}}))
             {:question/possible-solutions (as-coll possible-solutions)}
             (if (coll? single-choice-solutions)
               {:errors {:question/single-choice-solution "Es sollte nur eine Antwort bei einer single-choice Frage geben!"}}
               {:question/single-choice-solution single-choice-solutions})
             {:question/multiple-choice-solution (as-coll multiple-choice-solutions)}
             {:question/evaluation-criteria evaluation-criteria}
             {:question/categories (as-coll categories)}])))


(defn- validate-question-impl
  [_
   question-statement achivable-points type
   possible-solutions single-choice-solutions multiple-choice-solutions
   evaluation-criteria
   categories]

  (let [question (parse-question question-statement achivable-points type
                                 possible-solutions single-choice-solutions multiple-choice-solutions
                                 evaluation-criteria
                                 categories)
        errors (question :errors)]
    (if errors
      question
      (let [validation-functions-with-error-msg (create-validation-functions-with-error-msg question)]
        (reduce (fn [error-map error-key]
                  (let [error-to-display (reduce (fn [error-str [validation-fun error-msg]]
                                                   (if (validation-fun)
                                                     error-str
                                                     (string/join "\n" (filter seq [error-str error-msg]))))
                                                 ""
                                                 (validation-functions-with-error-msg error-key))]
                    (if (seq error-to-display)
                      (assoc-in error-map [:errors error-key] (string/join [error-to-display ; "\n" "\"" (question error-key) "\""
                                                                            ]))
                      error-map)))
                question
                [:question/question-statement
                 :question/points
                 :question/type
                 :question/possible-solutions
                 :question/single-choice-solution
                 :question/multiple-choice-solution
                 :question/evaluation-criteria
                 :question/categories])))))

(extend QuestionService
  PQuestionService
  {:create-question! create-question-impl!
   :get-question-categories get-question-categories
   :validate-question validate-question-impl})