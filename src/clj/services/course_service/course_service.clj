(ns services.course-service.course-service
  (:require
    [clojure.spec.alpha :as s]
    [clojure.string :as str]
    [db]
    [services.course-service.p-course-service :refer [PCourseService]]))


;; todo replace all direct db calls and inject repositories
(deftype CourseService
  [db])


(s/fdef get-all-courses
        :args (s/cat :self #(satisfies? PCourseService %))
        :ret (s/coll-of (s/keys :req [:course/id :course/name])))


(defn get-all-courses
  [this]
  (db/get-all-courses (.db this)))


(s/fdef create-course-impl
        :args (s/cat :self #(satisfies? PCourseService %)
                     :course (s/keys :req [:course/name]))
        :ret :course/course)


(defn- create-course-impl
  [this course]
  (db/add-course! (.db this) course))


(s/fdef validate-course-impl
        :args (s/cat :self #(= PCourseService (type %))
                     :course-form-data map?)
        :ret (s/or :success (s/keys :req [:course/name])
                   :error (s/and map?
                                 #(contains? % :errors))))


(defn- validate-course-impl
  [this course-form-data]
  (let [courses (db/get-all-courses (.db this))
        course-name (-> course-form-data
                        :name
                        (str/trim))
        courses-with-same-name (filter (fn [course] (= course-name (course :course/name))) courses)]
    (-> {:course/name course-name}
        (#(if (s/valid? :course/name course-name)
            %
            (update % :errors merge {:course/course-error "The course name must be a non-empty string"})))
        (#(if (empty? courses-with-same-name)
            %
            (update % :errors merge {:course/course-already-existed "The given course name already exists"}))))))


(extend CourseService
  PCourseService
  {:get-all-courses get-all-courses
   :create-course create-course-impl
   :validate-course validate-course-impl})
