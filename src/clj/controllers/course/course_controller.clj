(ns controllers.course.course-controller
  (:require
    [clojure.string :as string]
    [db]
    [ring.util.codec :refer [form-encode]]
    [ring.util.response :as response]
    [util.ring-extensions :refer [html-response]]
    [views.course.create-course-view :as view]))


(defn- extract-errors
  [request]
  (let [query-params (:query-params request)]
    (when query-params
      (->> query-params
           (map (fn [[key val]] [(read-string key) val]))
           (into {})))))


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


(defn- validate-course
  [course-name]
  (let [error-map (dissoc view/create-course-errors :course-error) ; TODO: should check course-name specs
        courses (db/get-all-courses)
        courses-with-same-name (filter (fn [course] (= course-name (course :course/course-name))) courses)]
    (if (empty? courses-with-same-name)
      (dissoc error-map :course-already-existed)
      error-map)))


(defn- add-to-db-and-get-success-msg
  [course]
  (let [db-result (db/add-course! course)]
    (view/submit-success-view (:course/course-name db-result))))


(defn- construct-url
  [base-uri param-map]
  (->> param-map
       (map (fn [[key msg]] [(form-encode key) (form-encode msg)]))
       (map (fn [[key msg]] (str key "=" msg)))
       (string/join "&")
       (str base-uri "?")))


(defn submit-create-course!
  "This function takes a request and a uri to be redirected to, when the data of the request was invalid.
   If the data was invalid the request is redirected to the `redirect-uri` with the errors as query parameters."
  [req redirect-uri]
  (let [form-data (-> req (:multipart-params) (dissoc :__anti-forgery-token))
        course-name (form-data "course")
        validation-errors (validate-course course-name)]
    (if (empty? validation-errors)
      (html-response (add-to-db-and-get-success-msg course-name))
      (response/redirect (construct-url (str (get-in req [:header :origin]) redirect-uri) validation-errors)))))
