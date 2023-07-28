(ns controllers.question.question-controller
  (:require
    [db]
    [services.question-service.p-question-service :refer [create-question!
                                                          validate-question
                                                          get-question-categories]]
    [util.ring-extensions :refer [extract-errors
                                  html-response]]
    [views.question.create-question-view :as view :refer [question-success-view]]))


(defn create-question-get
  [req get-question-categories-fun post-destination]
  (view/question-form (get-question-categories-fun) post-destination :errors (extract-errors req)))


(defn submit-create-question!
  "
```clj
{\"question-statement\" \"Fragestellung\",
 \"achivable-points\" \"5\",
 \"type\" \"single-choice\",
 \"possible-solutions\" [\"Single choice possible-answer 1\" \"Single choice possible-answer 2\" \"Single choice possible-answer 3\" \"Single choice possible-answer 4\" \"Single choice possible-answer 5\"],
 \"single-choice-solutions\" \"Single choice possible-answer 4\"}
```
   "
  [req redirect-uri question-service]
  (let [validate-question-fun (partial validate-question question-service)
        add-question-fun (partial create-question! question-service)

        form-data (-> req (:multipart-params) (dissoc "__anti-forgery-token"))
        {:strs [question-statement achivable-points type
                possible-solutions single-choice-solution multiple-choice-solution
                evaluation-criteria
                categories]} form-data
        result-map (validate-question-fun question-statement
                                          achivable-points
                                          type
                                          possible-solutions
                                          single-choice-solution
                                          multiple-choice-solution
                                          evaluation-criteria
                                          categories)
        validation-errors (result-map :errors)]
    (if (empty? validation-errors)
      (let [question result-map
            question (add-question-fun question)]
        (html-response (question-success-view question)))
      (html-response (view/question-form (get-question-categories question-service)
                                         redirect-uri
                                         :errors validation-errors
                                         :question-data (dissoc result-map :errors))))))
