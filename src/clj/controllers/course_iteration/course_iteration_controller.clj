(ns controllers.course-iteration.course-iteration-controller
  (:require [clojure.edn]
            [clojure.spec.alpha :as s]
            [clojure.string :as string]
            [db]
            [ring.util.response :as response]
            [services.course-iteration-service.p-course-iteration-service :refer [create-course-iteration
                                                                                  get-all-course-iterations
                                                                                  PCourseIterationService
                                                                                  validate-course-iteration]]
            [services.user-service.p-user-service :refer [get-all-users]]
            [util.ring-extensions :refer [construct-url extract-errors
                                          html-response]]
            [util.spec-functions :refer [map-spec]]
            [views.course-iteration.assign-member-course-iteration-view :as assign-view]
            [views.course-iteration.create-course-iteration-view :as create-view]))
   

(s/fdef create-course-iteration-get
        :args (s/cat :req coll?
                     :post-destination :general/non-blank-string
                     :get-courses-fun (s/? (s/get-spec `db/get-all-courses))
                     :get-question-sets-fun (s/? (s/get-spec `db/get-all-question-sets)))
        :ret #(instance? hiccup.util.RawString %)
        :fn (s/or :no-courses-existant
                  #(let [{:keys [ret]} %]
                     (string/includes? ret "erst ein Fach erstellt"))
                  :course-iteration-creation
                  #(let [{{:keys [post-destination]} :args ret :ret} %]
                     (string/includes? (str ret) post-destination))))


(defn create-course-iteration-get
  "Returns an html-form for creating a course-iteration.  
   The courses and question-sets are fetched from the provided functions `get-courses-fun` `get-question-sets-fun` 
   to display them in the forms selection.  
   When there is no course, an error message is displayed that a course must be created before a course-iteration can be created.  

   The function accepts optional functions as the arguments `:get-course-fun` and `:get-question-sets-fun` to fetch
   courses or question-sets.
   
   The form is posted to the provided `post-destination` parameter.
   
   When the request passed to this function inside of `req` contains predefined error values in the `:query-params` of the `req` parameter, 
   they are displayed as errors within the form.
   The fields can be seen in `view/course-iteration-form`."
  [req post-destination get-courses-fun get-question-sets-fun]
  (let [courses (get-courses-fun)
        question-sets (get-question-sets-fun)]
    (if (empty? courses)
      create-view/no-courses
      (let [errors (extract-errors req)]
        (if errors
          (create-view/course-iteration-form courses question-sets post-destination :errors errors)
          (create-view/course-iteration-form courses question-sets post-destination))))))


(defn- add-to-db-and-get-succsess-msg
  [course-id year semester question-set-ids db-add-fun]
  (let [db-result (db-add-fun
                    course-id year semester question-set-ids)]
    (create-view/submit-success-view
      (:course-iteration/semester db-result)
      (:course-iteration/year db-result))))


(s/def ::request-data
  (map-spec {:__anti-forgery-token any?
             :multipart-params (map-spec {"course-id" :course/id
                                          "year" (s/and string? #(s/valid? :course-iteration/year (clojure.edn/read-string %)))
                                          "semester" :course-iteration/semester
                                          "question-set-ids" (s/coll-of :question-set/id)})}))


(s/fdef submit-create-course-iteration!
        :args (s/cat :request ::request-data
                     :redirect-uri string?
                     :course-iteration-service #(satisfies? PCourseIterationService %))
        :ret #(instance? hiccup.util.RawString %))


(defn submit-create-course-iteration!
  "This function takes a `request`, and a uri to be redirected to, when the data of the request was invalid.  
   It also takes an implementation of the `PCourseIterationService` protocol, 
   which is used for validation and persisting the final course-iteration in the database. 
   If the data was invalid the request is redirected to the provided `redirect-uri` with the errors as query parameters."
  [request redirect-uri course-iteration-service]
  (let [form-data (-> request (:multipart-params) (dissoc :__anti-forgery-token))
        course-id (form-data "course-id")
        year (clojure.edn/read-string (form-data "year"))
        semester (case (form-data "semester")
                   "WiSe" :semester/winter
                   "SuSe" :semester/summer
                   nil)
        ;; If there is only one id, it is send as a single value. If there are multiple, they are send in a col.
        question-set-ids (let [ids-or-id (form-data "question-set-ids")]
                           (cond (coll? ids-or-id) ids-or-id
                                 (nil? ids-or-id) []
                                 :else [ids-or-id]))

        validation-errors (validate-course-iteration course-iteration-service course-id year semester question-set-ids)]

    (if (empty? validation-errors)
      (html-response (add-to-db-and-get-succsess-msg course-id year semester question-set-ids (partial create-course-iteration course-iteration-service)))
      (response/redirect (construct-url (str (get-in request [:headers :origin]) redirect-uri) validation-errors)))))

(defn course-iteration-overview-get 
  "Returns the overview of all available course iterations"
  [course-iteration-service]
  (html-response 
   (assign-view/list-course-iteration-view 
    (get-all-course-iterations course-iteration-service))))

(defn course-iteration-user-overview
  "Returns the overview of all users that, where the membership status can be changed"
  [request user-service]
  (let [course-id (-> request :params :course-id)]
    (html-response
     (assign-view/create-user-list-view
      course-id
      (get-all-users user-service)))))
