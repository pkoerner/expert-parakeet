(ns controllers.question.question-controller
  (:require
    [clojure.spec.alpha :as s]
    [clojure.string :as string]
    [db]
    [views.question.create-question-view :as view :refer [question-success-view]]))


(defn create-question-get
  [_req post-destination]

  (view/question-form post-destination))


(defn- create-validation-functions-with-error-msg
  [question-statement achivable-points type
   possible-solutions single-choice-solutions multiple-choice-solutions
   evaluation-criteria]
  (merge
    {:question/question-statement [[#(s/valid? :question/question-statement question-statement) "Die Fragestellung war inkorrekt!"]]
     :question/points [[#(s/valid? :question/points achivable-points) "Die erreichbaren Punkte waren inkorrekt!"]]
     :question/type [[#(s/valid? :question/type type) "Der ausgewälte question-type war kein korrekter type!"]]}

    (when (or (= type :question.type/single-choice) (= type :question.type/multiple-choice))
      {:question/possible-solutions
       [[#(s/valid? :question/possible-solutions possible-solutions) "Die Antwortmöglichkeiten waren nicht korrekt!"]
        [#(apply distinct? possible-solutions) "Zwei Antwortmglichkeiten waren identisch!"]]})

    (when  (= type :question.type/single-choice)
      {:question/single-choice-solution
       [[#(s/valid? :question/single-choice-solution single-choice-solutions) "Die möglichen Antworten waren keine korrekten möglichen Antworten!"]
        [#((set possible-solutions) single-choice-solutions) "Die korrekte Antwort war nicht in den möglichen Antworten enthalten!"]]})

    (when  (= type :question.type/multiple-choice)
      {:question/multiple-choice-solution
       [[#(s/valid? :question/multiple-choice-solution multiple-choice-solutions) "Die möglichen Antworten waren keine korrekten möglichen Antworten!"]
        [#(every? (fn [x] ((set possible-solutions) x)) multiple-choice-solutions) "Die korrekte Antwort war nicht in den möglichen Antworten enthalten!"]]})

    (when (= type :question.type/free-text)
      {:question/evaluation-criteria
       [[#(s/valid? :question/evaluation-criteria evaluation-criteria) "Die angegebenen Bewertungskriterien waren keine korrekten Bewertungskriterien!"]]})))


(defn- validate-question-createion-input-
  [question-statement achivable-points type
   possible-solutions single-choice-solutions multiple-choice-solutions
   evaluation-criteria]
  (let [validation-functions-with-error-msg (create-validation-functions-with-error-msg question-statement achivable-points type
                                                                                        possible-solutions single-choice-solutions multiple-choice-solutions
                                                                                        evaluation-criteria)]
    (reduce (fn [error-map error-key]
              (let [error-to-display (reduce (fn [error-str [validation-fun error-msg]]
                                               (if (validation-fun)
                                                 error-str
                                                 (string/join "\n" (filter seq [error-str error-msg]))))
                                             ""
                                             (validation-functions-with-error-msg error-key))]
                (if (seq error-to-display)
                  (assoc error-map error-key error-to-display)
                  error-map)))
            {}
            [:question/question-statement
             :question/points
             :question/type
             :question/possible-solutions
             :question/single-choice-solution
             :question/multiple-choice-solution
             :question/evaluation-criteria])))


(def ^:private to-question-type
  {"free-text" :question.type/free-text
   "single-choice" :question.type/single-choice
   "multiple-choice" :question.type/multiple-choice})


(defn create-question!
  "
```clj
{\"question-statement\" \"Fragestellung\",
 \"achivable-points\" \"5\",
 \"type\" \"single-choice\",
 \"possible-solutions\" [\"Single choice possible-answer 1\" \"Single choice possible-answer 2\" \"Single choice possible-answer 3\" \"Single choice possible-answer 4\" \"Single choice possible-answer 5\"],
 \"single-choice-solutions\" \"Single choice possible-answer 4\"}
```
   "
  [req add-question-fun]
  (let [form-data (-> req (:multipart-params) (dissoc "__anti-forgery-token"))
        {:strs [question-statement achivable-points type
                possible-solutions single-choice-solutions multiple-choice-solutions
                evaluation-criteria]} form-data
        achivable-points (read-string achivable-points)
        question-type (to-question-type type)

        error-map (validate-question-createion-input- question-statement
                                                      achivable-points
                                                      question-type
                                                      possible-solutions
                                                      single-choice-solutions
                                                      multiple-choice-solutions
                                                      evaluation-criteria)]
    (if (empty? error-map)
      (let [question {:question/question-statement question-statement
                      :question/points achivable-points
                      :question/type question-type
                      :question/possible-solutions possible-solutions
                      :question/single-choice-solution single-choice-solutions
                      :question/multiple-choice-solution multiple-choice-solutions
                      :question/evaluation-criteria evaluation-criteria}
            question (add-question-fun question)]
        (question-success-view question))
      error-map)))