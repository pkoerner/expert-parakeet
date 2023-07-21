(ns controllers.course.course-controller
  (:require
    [clojure.spec.alpha :as s]
    [clojure.string :as string]
    [db]
    [ring.util.codec :refer [form-encode]]
    [ring.util.response :as response]
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


(s/fdef validate-course
        :args (:course-name :course/course-name)
        :ret (s/map-of view/create-course-error-keys
                       string?))


(defn- validate-course
  [course-name]
  (let [error-map view/create-course-error-keys
        courses (db/get-all-courses)
        courses-with-same-name (filter (fn [course] (= course-name (course :course/course-name))) courses)]
    (-> error-map
        (#(if (s/valid? :course/course-name course-name)
            (dissoc % :course-error)
            %))
        (#(if (empty? courses-with-same-name)
            (dissoc % :course-already-existed)
            %)))))


#_(->> error-map
     #_(fn [m] (if (s/valid? :course/course-name course-name)
                 (dissoc m :course-error)
                 m))
     (fn [m] (if (empty? courses-with-same-name)
               (dissoc m :course-already-existed)
               m)))


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


(s/def ::req-data
  (map-spec {:__anti-forgery-token any?
             :multipart-params (map-spec {"course-name" :course/course-name})}))


(s/fdef submit-create-course!
        :args (s/cat :req ::req-data
                     :redirect-uri string?)
        :ret #(instance? hiccup.util.RawString %))


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
