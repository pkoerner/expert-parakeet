(ns controllers.course.course-controller
  (:require
    [clojure.spec.alpha :as s]
    [clojure.string :as string]
    [db]
    [ring.util.codec :refer [form-encode]]
    [ring.util.response :as response]
    [services.course-service.p-course-service :refer [create-course
                                                      PCourseService
                                                      validate-course]]
    [util.ring-extensions :refer [html-response]]
    [util.spec-functions :refer [map-spec]]
    [views.course.create-course-view :as view]))


(defn- extract-errors
  [request]
  (let [query-params (:query-params request)]
    (when query-params
      (->> query-params
           (map (fn [[key val]] [(read-string key) val]))
           (into {})))))


(s/fdef create-course-get
        :args (s/cat :req coll?
                     :post-destination :general/non-blank-string)
        :ret #(instance? hiccup.util.RawString %)
        :fn #(let [{{:keys [post-destination]} :args ret :ret} %]
               (string/includes? (str ret) post-destination)))


(defn create-course-get
  "Returns an html-form to create a course.
   The form ist posted to the `post-destination` parameter.

   When the request passed to this function inside of `req` contains error values,
   they are displayed as errors within the form.
   The fields can be seen in `view/course-form`."
  [req post-destination]
  (let [errors (extract-errors req)]
    (if errors
      (view/course-form post-destination :errors errors)
      (view/course-form post-destination))))


(defn- add-to-db-and-get-success-msg
  [course db-add-fun]
  (let [db-result (db-add-fun course)]
    (view/submit-success-view (:course/course-name db-result))))


(defn- construct-url
  [base-uri param-map]
  (->> param-map
       (map (fn [[key msg]] [(form-encode key) (form-encode msg)]))
       (map (fn [[key msg]] (str key "=" msg)))
       (string/join "&")
       (str base-uri "?")))


(s/def ::req-data
  (map-spec {:__anti-forgery-token any?
             :multipart-params (map-spec {"course-name" :course/course-name})}))


(s/fdef submit-create-course!
        :args (s/cat :req ::req-data
                     :redirect-uri string?
                     :course-service #(satisfies? PCourseService %))
        :ret #(instance? hiccup.util.RawString %))


(defn submit-create-course!
  "This function takes a request and a uri to be redirected to, when the data of the request was invalid.
   If the data was invalid the request is redirected to the `redirect-uri` with the errors as query parameters."
  [req redirect-uri course-service]
  (let [form-data (-> req (:multipart-params) (dissoc :__anti-forgery-token))
        course-name (form-data "course")
        validation-errors (validate-course course-service course-name)]
    (if (empty? validation-errors)
      (html-response (add-to-db-and-get-success-msg course-name (partial create-course course-service)))
      (response/redirect (construct-url (str (get-in req [:header :origin]) redirect-uri) validation-errors)))))
