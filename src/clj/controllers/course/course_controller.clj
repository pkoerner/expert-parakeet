(ns controllers.course.course-controller
  (:require
    [clojure.spec.alpha :as s]
    [clojure.string :as string]
    [db]
    [services.course-service.p-course-service :refer [create-course
                                                      PCourseService
                                                      validate-course]]
    [util.ring-extensions :refer [extract-errors
                                  html-response]]
    [views.course.create-course-view :as view]))


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
      (html-response (view/course-form post-destination :errors errors))
      (html-response (view/course-form post-destination)))))


(s/fdef submit-create-course!
        :args (s/cat :req coll?
                     :post-destination string?
                     :course-service #(satisfies? PCourseService %))
        :ret #(instance? hiccup.util.RawString %))


(defn submit-create-course!
  "This function takes a request and the destination for the request to be sent to (if it was unsuccessful and needs to be sent again)."
  [req post-destination course-service]
  (let [form-data (-> req :params (dissoc :__anti-forgery-token))
        course-or-errors (validate-course course-service form-data)
        validation-errors (course-or-errors :errors)]
    (if (empty? validation-errors)
      (let [added-course (create-course course-service course-or-errors)]
        (html-response (view/submit-success-view added-course)))
      (html-response (view/course-form post-destination :errors validation-errors :course-data form-data)))))
