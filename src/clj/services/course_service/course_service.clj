(ns services.course-service.course-service
  (:require
    [clojure.spec.alpha :as s]
    [db]
    [services.course-service.p-course-service :refer [PCourseService]]
    [views.course.create-course-view :as view]))


;; todo replace all direct db calls and inject repositories
(deftype CourseService
  [db])


(s/fdef get-all-courses
        :args (s/cat :self #(satisfies? PCourseService %))
        :ret (s/coll-of (s/keys :req [:course/id :course/course-name])))


(defn get-all-courses
  [this]
  (db/get-all-courses (.db this)))


(s/fdef create-course-impl
        :args (s/cat :self #(satisfies? PCourseService %)
                     :course-name :course/course-name)
        :ret (s/keys :req [:course/id
                           :course/course-name]))


(defn- create-course-impl
  [_ course-name]
  (db/add-course! course-name))


(s/fdef validate-course-impl
        :args (s/cat :self #(= PCourseService (type %))
                     :course-name :course/course-name)
        :ret (s/map-of view/create-course-error-keys
                       string?))


(defn- validate-course-impl
  [_ course-name]
  (let [courses (db/get-all-courses)
        courses-with-same-name (filter (fn [course] (= course-name (course :course/course-name))) courses)]
    (-> {}
        (#(if (s/valid? :course/course-name course-name)
            %
            (assoc % :course/course-error "Der ausgewählte Name war inkorrekt!")))
        (#(if (empty? courses-with-same-name)
            %
            (assoc % :course/course-already-existed "Der angegebene Fachname wird bereits verwendet!"))))))


(extend CourseService
  PCourseService
  {:get-all-courses get-all-courses
   :create-course create-course-impl
   :validate-course validate-course-impl})

