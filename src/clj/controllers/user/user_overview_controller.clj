(ns controllers.user.user-overview-controller
  (:require
   [clojure.spec.alpha :as s]
   [services.question-set-service.question-set-service :as q-set-ser]
   [views.user-overview.user-overview-view :as user-view]))


;; (if (auth/is-logged-in req)(let [user-id "0"] ; TODO: Replace the '0' with (str (get-in req [:session :user :id]))
;;   
;;     (views.student-overview/overview
;;      (domain/course-iterations-with-total-points
;;       (db/get-course-iterations-of-student user-id)
;;       (partial db/get-graded-answers-of-question-set user-id))))
;;   [:a {:href "/oauth2/github"} "Login"])


(s/fdef create-user-overview-get
  :args (s/cat :user :user
               :get-all-question-sets-for-student-fun (s/? (s/get-spec `q-set-ser/get-all-course-iterations-for-student))))

(defn create-user-overview-get
  " Takes a user and a function to get all question sets for a student as arguments.
   It returns an overview of all question sets the user is assigned to. If the user is also acorrector or a Lecturer this side contains
   links to the corrector overview and the lecturer overview."
  [user get-all-question-sets-for-student-fun]
  (user-view/create-user-overview user (get-all-question-sets-for-student-fun (:user/id user))))