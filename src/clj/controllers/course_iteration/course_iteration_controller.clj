(ns controllers.course-iteration.course-iteration-controller
  (:require
    [clojure.spec.alpha :as s]
    [clojure.string :as string]
    [db]
    [util.spec-functions :refer [map-spec]]
    [views.course-iteration.create-course-iteration-view :as view]))


(s/fdef create-course-iteration-get
        :args (s/cat :post-destination :general/non-blank-string)
        :ret #(instance? hiccup.util.RawString %)
        :fn #(let [{{:keys [post-destination]} :args
                    ret :ret} %]
               (string/includes? (str ret) post-destination)))


(defn create-course-iteration-get
  [post-destination]
  (let [courses (db/get-all-courses)
        question-sets (db/get-all-question-sets)]
    (if (nil? courses)
      view/no-courses
      (view/course-iteration-form courses question-sets post-destination))))


(defn- validate-course-iteration
  [course-id year semester question-set-ids]
  (let [error-map {:course/id "Der ausgewählte Kurs war inkorrekt!"
                   :course-iteration/year "Das ausgewählte Jahr war inkorrekt!"
                   :course-iteration/semester "Das ausgewählte Semester war inkorrekt!"
                   :question-set/id "Das ausgewählte question-set-war nicht korrekt!"}]

    (reduce (fn [error-col [error-key spec val]]
              (if (s/valid? spec val)
                error-col
                (conj error-col (error-map error-key))))
            []
            [[:course/id :course/id course-id]
             [:course-iteration/year :course-iteration/year year]
             [:course-iteration/semester :course-iteration/semester semester]
             [:question-set/id (s/coll-of :question-set/id) question-set-ids]])))


(defn- add-to-db-and-get-succsess-msg
  [course-id year semester question-set-ids db-add-fun]
  (let [db-result (db-add-fun
                    course-id year semester question-set-ids)]
    (view/submit-success-view
      (:course-iteration/semester db-result)
      (:course-iteration/year db-result))))


(s/def ::request-data
  (map-spec {:__anti-forgery-token any?
             :multipart-params (map-spec {"course-id" :course/id
                                          "year" (s/and string? #(s/valid? :course-iteration/year (read-string %)))
                                          "semester" :course-iteration/semester
                                          "question-set-ids" (s/coll-of :question-set/id)})}))


(s/fdef submit-create-course-iteration-mockable
        :args (s/cat :request ::request-data
                     :db-add-fun (s/get-spec `db/add-course-iteration-with-question-sets!))
        :ret #(instance? hiccup.util.RawString %))


(defn submit-create-course-iteration-mockable
  [request db-add-fun]
  (let [form-data (-> request (:multipart-params) (dissoc :__anti-forgery-token))
        course-id (form-data "course-id")
        year (read-string (form-data "year"))
        semester (form-data "semester")
        question-set-ids (let [ids-or-id (form-data "question-set-ids")]
                           (cond (coll? ids-or-id) ids-or-id
                                 (nil? ids-or-id) []
                                 :else [ids-or-id]))
        validation-errors (validate-course-iteration course-id year semester question-set-ids)]

    (if (empty? validation-errors)
      (add-to-db-and-get-succsess-msg course-id year semester question-set-ids db-add-fun)
      (view/submit-error-view validation-errors))))


(s/fdef submit-create-course-iteration!
        :args (s/cat :request ::request-data)
        :ret #(instance? hiccup.util.RawString %))


(defn submit-create-course-iteration!
  [request]
  (submit-create-course-iteration-mockable
    request
    db/add-course-iteration-with-question-sets!))
