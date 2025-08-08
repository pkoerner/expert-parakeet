(ns controllers.question.question-controller
  (:require
    [clojure.spec.alpha :as s]
    [clojure.string]
    [db]
    [services.question-service.p-question-service :refer [create-question!
                                                          get-question-categories
                                                          PQuestionService
                                                          validate-question
                                                          get-question-by-id
                                                          validate-user-for-question]]
    [services.question-service.question-service :as q-ser]
    [util.ring-extensions :refer [html-response]]
    [views.question.create-question-view :as creation-view]
    [views.question.question-view :as question-view]))


(defn question-get
  [req post-destination-root question-service]
  (let [question-id (-> req :route-params :id)
        user-id     (str (-> req :session :user :id))
        question    (get-question-by-id question-service question-id)
        permission-error (validate-user-for-question question-service user-id question-id)]
    (if (empty? permission-error)
      (html-response (question-view/question-form question (clojure.string/replace post-destination-root ":id" question-id)))
      (html-response (question-view/no-question-assignment permission-error)))))


(s/fdef create-question-get
        :args (s/cat :req coll?
                     :get-question-categories-fun (s/get-spec `q-ser/get-question-categories)
                     :post-destination string?))


(defn create-question-get
  "Takes a ring request, a function to get question categories, and a post-destination as arguments.
   It returns a form for question creation, the result of which will be sent to the provided `post-destination`."
  [req get-question-categories-fun post-destination]
  (let [db (get-in req [:ctx :db])
        categories (get-question-categories-fun)
        courses (db/get-all-courses db)]
    (html-response
      (creation-view/create-question-form
        categories
        courses
        post-destination))))


(s/fdef submit-create-question!
        :args (s/cat :req coll?
                     :post-destination string?
                     :question-service #(= PQuestionService (type %))))


(defn submit-create-question!
  "Takes a ring request, a url to which the post should be sent, if it needs to be filled out again, and a question-service as parameters.  
   From the ring request the parameters for the question to be created are extracted and validated.
   If it is a valid question, the question is created, persisted, and a success html view is returned.
   If it is not a valid question, the old question data with the error messages is passed to the `question-creation-form` again, 
   to display the old values with the corresponding error messages.

   Considered `:params`:
   ```clj
   {\"statement\" String,
    \"max-points\" String,
    \"type\" \"single-choice\"/\"multiple-choice\"/\"free-text\",
    \"possible-single-choice-solutions\" String or array of strings,
    \"correct-single-choice-solutions\" String or array of strings,
    \"possible-multiple-choice-solutions\" String or array of strings,
    \"correct-multiple-choice-solutions\" String or array of strings,
    \"evaluation-criteria\" String,
    \"categories\" String or array of strings,
    \"course-id\" String}  ;; NEU: Kurs-ID
   ```"

  [req post-destination question-service]
  (let [form-data (-> req :params (dissoc :__anti-forgery-token))
        db (get-in req [:ctx :db])
        courses (db/get-all-courses db)

        ;; Kurs-ID extrahieren und validieren
        course-id (get form-data "course-id")
        course-valid? (and course-id (db/get-course-by-id db course-id))

        question-or-errors (validate-question question-service form-data)
        validation-errors (question-or-errors :errors)]

    ;; Kurs-Validierungsfehler hinzufügen (wenn nötig)
    (let [all-errors (if course-valid?
                       validation-errors
                       (assoc validation-errors :course "Invalid course selected"))]

      (if (empty? all-errors)
        ;; Frage mit Kurs-ID erstellen
        (let [added-question (create-question! question-service question-or-errors course-id)]
          (html-response (creation-view/question-success-view added-question)))

        ;; Fehler anzeigen
        (html-response (creation-view/create-question-form (get-question-categories question-service)
                                                           courses
                                                           post-destination
                                                           :errors all-errors
                                                           :question-data form-data))))))
