(ns controllers.course-iteration.course-iteration-controller
  (:require
    [clojure.edn]
    [clojure.spec.alpha :as s]
    [db]
    [services.course-iteration-service.p-course-iteration-service :refer [create-course-iteration PCourseIterationService
                                                                          validate-course-iteration]]
    [util.ring-extensions :refer [html-response]]
    [views.course-iteration.create-course-iteration-view :as view]))


(s/fdef create-course-iteration-get
        :args (s/cat :req coll?
                     :post-destination :general/non-blank-string
                     :get-courses-fun (s/? (s/get-spec `db/get-all-courses))
                     :get-question-sets-fun (s/? (s/get-spec `db/get-all-question-sets)))
        :ret #(instance? hiccup.util.RawString %))


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
  [_req post-destination get-courses-fun get-question-sets-fun]
  (let [courses (get-courses-fun)
        question-sets (get-question-sets-fun)]
    (if (empty? courses)
      (html-response (view/no-courses))
      (html-response (view/course-iteration-form courses question-sets post-destination)))))


(s/fdef submit-create-course-iteration!
        :args (s/cat :req coll?
                     :post-destination string?
                     :get-courses-fun (s/? (s/get-spec `db/get-all-courses))
                     :get-question-sets-fun (s/? (s/get-spec `db/get-all-question-sets))
                     :course-iteration-service #(satisfies? PCourseIterationService %))
        :ret #(instance? hiccup.util.RawString %))


(defn submit-create-course-iteration!
  "This function takes a `request`, and `post-destination`, `get-courses-fun` and `get-question-sets-fun` that are used to re-render the form when the data was invalid.  
   It also takes an implementation of the `PCourseIterationService` protocol, 
   which is used for validation and persisting the final course-iteration in the database. 
   If the data was invalid the form is shown again with the validation errors."
  [req post-destination get-courses-fun get-question-sets-fun course-iteration-service]
  (let [form-data (-> req :params (dissoc :__anti-forgery-token))
        course-iteration-or-errors (validate-course-iteration course-iteration-service form-data)
        validation-errors (course-iteration-or-errors :errors)]
    (if (empty? validation-errors)
      (let [added-course-iteration (create-course-iteration course-iteration-service course-iteration-or-errors)]
        (html-response (view/submit-success-view added-course-iteration)))
      (let [courses (get-courses-fun)
            question-sets (get-question-sets-fun)]
        (html-response (view/course-iteration-form courses question-sets post-destination :errors validation-errors :course-iteration-data form-data))))))
