(ns controllers.course-iteration.course-iteration-controller
  (:require [db]
            [views.course-iteration.create-course-iteration-view :as view]))



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

    (reduce (fn [error-col [spec val]]
              (if (s/valid? spec val)
                error-col
                (conj error-col (error-map spec))))
            []
            [[:course/id course-id]
             [:course-iteration/year year]
             [:course-iteration/semester semester]
             [(s/coll-of :question-set/id) question-set-ids]])))

(defn- add-to-db-and-get-succsess-msg
  [course-id year semester question-set-ids db-add-fun]
  (let [db-result (db-add-fun
                   course-id year semester question-set-ids)]
    (view/submit-success-view
     (:course-iteration/semester db-result)
     (:course-iteration/year db-result))))

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

(defn submit-create-course-iteration!
  [request]
  (submit-create-course-iteration-mockable
   request
   db/add-course-iteration-with-question-sets!))