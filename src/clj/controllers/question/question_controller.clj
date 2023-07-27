(ns controllers.question.question-controller
  (:require
    [clojure.string :as string]
    [db]
    [ring.util.codec :refer [form-encode]]
    [ring.util.response :as response]
    [services.question-service.p-question-service :refer [create-question!
                                                          validate-question]]
    [util.ring-extensions :refer [html-response]]
    [views.question.create-question-view :as view :refer [question-success-view]]))


(defn- extract-errors
  [request]
  (let [query-params (:query-params request)]
    (if query-params
      (->> query-params
           (map (fn [[key val]] [(read-string key) val]))
           (into {}))
      {})))


(defn create-question-get
  [req get-question-categories-fun post-destination]
  (view/question-form (get-question-categories-fun) post-destination :errors (extract-errors req)))


(defn- construct-url
  [base-uri param-map]
  (->> param-map
       (map (fn [[key msg]] [(form-encode key) (form-encode msg)]))
       (map (fn [[key msg]] (str key "=" msg)))
       (string/join "&")
       (str base-uri "?")))


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
      (response/redirect (construct-url (str (get-in req [:headers :origin]) redirect-uri) validation-errors)))))
