(ns controllers.question.question-controller
  (:require
    [clojure.spec.alpha :as s]
    [db]
    [db]
    [services.question-service.p-question-service :refer [get-question-by-id
                                                          validate-user-for-question]]
    [services.question-service.p-question-service :refer [create-question!
                                                          get-question-categories
                                                          PQuestionService
                                                          validate-question]]
    [services.question-service.question-service :as q-ser]
    [util.ring-extensions :refer [html-response]]
    [util.ring-extensions :refer [extract-errors html-response]]
    [views.question.create-question-view :as creation-view :refer [question-success-view]]
    [views.question.question-view :as question-view]))


(defn question-get
  [req put-destination-root question-service]
  (let [question-id (-> req :route-params :id)
        user-id     (str (-> req :session :user :id))
        question    (get-question-by-id question-service question-id)
        permission-error (validate-user-for-question question-service user-id question-id)]
    (if (empty? permission-error)
      (html-response (question-view/question-form question (str put-destination-root question-id)))
      (html-response (question-view/no-question-assignment permission-error)))))


(s/fdef create-question-get
        :args (s/cat :req coll?
                     :get-question-categories-fun (s/get-spec `q-ser/get-question-categories)
                     :post-destination string?))


(defn create-question-get
  "Takes a ring request, a function to get question categories, and a post-destination as arguments.
  It returns a form for question creation, which post result will be send to the provieded `post-destination`."
  [req get-question-categories-fun post-destination]
  (creation-view/question-form (get-question-categories-fun) post-destination :errors (extract-errors req)))


(s/fdef submit-create-question!
        :args (s/cat :req coll?
                     :post-destination string?
                     :question-service #(= PQuestionService (type %))))


(defn submit-create-question!
  "Takes a ring request, a url to which the post should be send, if it needs to be filled out again, and a question-service as parameters.  
   Form the ring request the parameters for the question to be created are extracted and validated.
   If it is a valid question the question is created, persisted, and a success html view is returned.
   If it is not a valid question, the old question data with the error messages is passed to the `question-createion-form`, 
   to display the old values with the corresponding error messages.
   The form is afterwards send to the past in `post-url`.

   Considered `:multipart-params`
   ```clj
   {\"question-statement\" String,
   \"achivable-points\" String/Int,
   \"type\" \"single-choice\"/\"multiple-choice\"/\"free-text\",
   \"possible-solutions\" Array of strings,
   \"single-choice-solution\" String
   \"multiple-choice-solution\" Array of strings
   \"evaluation-criteria\" String}
   ```"
  [req post-destination question-service]
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
      (html-response (creation-view/question-form (get-question-categories question-service)
                                                  post-destination
                                                  :errors validation-errors
                                                  :question-data (dissoc result-map :errors))))))
