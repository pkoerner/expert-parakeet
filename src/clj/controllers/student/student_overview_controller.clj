(ns controllers.student.student-overview-controller)


;; (if (auth/is-logged-in req)
;;   (let [user-id "0"] ; TODO: Replace the '0' with (str (get-in req [:session :user :id]))
;;     (views.student-overview/overview
;;      (domain/course-iterations-with-total-points
;;       (db/get-course-iterations-of-student user-id)
;;       (partial db/get-graded-answers-of-question-set user-id))))
;;   [:a {:href "/oauth2/github"} "Login"])
