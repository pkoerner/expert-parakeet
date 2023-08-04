(ns controllers.user.user-overview-controller
  (:require
    [clojure.spec.alpha :as s]
    [services.course-iteration-service.p-course-iteration-service :refer [get-all-course-iterations-for-user]]
    [views.user-overview.user-overview-view :as user-view]))


(s/fdef create-user-overview-get
        :args (s/cat :user :user
                     :get-all-course-iterations-for-user-fun (s/? (s/get-spec get-all-course-iterations-for-user))))


(defn create-user-overview-get
  " Takes a list of all course iterations with all questions sets for a user as argument.
   It returns an overview page of these course iterations the user is assigned to.
   If the user is also acorrector or a Lecturer this side contains
   links to the corrector overview and the lecturer overview."
  [all-course-iterations-for-user]
  (user-view/create-user-overview all-course-iterations-for-user))
