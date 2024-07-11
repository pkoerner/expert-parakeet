(ns controllers.correction.new-correction-controller
  (:require
    [clojure.spec.alpha :as s]
    [ring.util.response :as response]
    [util.ring-extensions :refer [construct-url extract-errors
                                  html-response]]
    [views.correction.new-correction-view :as view]))


(defn- extract-answer-id
  "Takes a request and returns the value of query param answer-id or nil, if it does not exist."
  [req]
  (let [query-params (:query-params req)]
    (if query-params
      (get query-params "answer-id")
      nil)))


(s/fdef new-correction-get
        :args (s/cat :req coll?
                     :post-destination :general/non-blank-string
                     :get-answer-fn (s/? (s/get-spec `db/get-answer-by-id))
                     :get-question-fn (s/? (s/get-spec `db/get-question-by-id)))
        :ret #(instance? hiccup.util.RawString %))


(defn new-correction-get
  "Creates the GET form to create a new correction."
  [req post-destination get-answer-fn get-question-fn]
  (let [answer (get-answer-fn (extract-answer-id req))
        question (get-question-fn (:question/id (:answer/question answer)))
        errors (extract-errors req)]
    (view/new-correction-form answer question post-destination :errors errors)))


(defn- validate-correction
  "Validates the fields of a correction object and returns errors, if any."
  [answer-id points feedback]
  (conj
    (conj (conj {}
                (when-not (s/valid? :answer/points points) [:correction/points "Die angegebenen Punkte sind ungültig."]))
          (when-not (s/valid? :correction/feedback feedback) [:correction/answer "Das angegebene Feedback ist ungültig."]))
    (when-not (s/valid? :answer/id answer-id) [:correction/answer "Die Frage ist ungültig."])))


(s/fdef submit-new-correction!
        :args (s/cat :req coll?
                     :redirect-uri :general/non-blank-string
                     :add-correction-fn (s/? (s/get-spec `db/add-correction!))
                     :get-user-by-git-id-fn (s/? (s/get-spec `db/get-user-by-git-id)))
        :ret #(instance? hiccup.util.RawString %))


(defn submit-new-correction!
  "Parses a request to submit a new correction. Redirects to redirect-uri on errors."
  [req redirect-uri add-correction-fn get-user-by-id-fn]
  (let [form-data (-> req (:multipart-params) (dissoc :__anti-forgery-token))
        answer-id (form-data "answer-id")
        points (try (Long/parseLong (form-data "points")) (catch NumberFormatException _ nil))
        feedback (form-data "feedback")
        validation-errors (validate-correction answer-id points feedback)]
    (if (empty? validation-errors)
      (do (add-correction-fn answer-id {:correction/feedback feedback :correction/points points :corrector/id (get-user-by-id-fn (str (get-in req [:session :user :id])))})
          (html-response "Die Korrektur wurde erfolgreich hinzugefügt."))
      (response/redirect (construct-url (str (get-in req [:headers :origin]) redirect-uri) (assoc validation-errors "answer-id" answer-id))))))
