(ns controller.question-set.question-set-controller
   (:require
    [db]
    [views.question-set :as view]))

(defn- extract-question-sets-of-user 
  [user-id]
  (map
   #(-> % :course-iteration/question-sets)
   (db/get-course-iterations-of-student user-id)))

(defn- extract-question-set-ids-of-user
  [user-id]
  (apply concat (map
                 #(map :question-set/id %)
                 (extract-question-sets-of-user user-id))))


(defn- validate-user-for-question-set
  "Checks if a user is assgined to a
   requested question set. If so an
   empty error map is returned. Otherwise
   an error-map with a specified error is returned."
  [user-id question-set-id]
  (let [users-question-sets (extract-question-set-ids-of-user user-id)
        error-map view/question-set-errors]
    (if (.contains users-question-sets question-set-id)
      (dissoc view/question-set-errors :not-assigned-to-question-set)
      error-map)))

(defn question-set-get
  "Returns a form for a question-set
   if the current user is assigned to
   this question-set. If not an error
   view will be displayed."
  [req & {:keys [get-question-set-fun]
        :or {get-question-set-fun db/get-question-set-by-id}}]
  (let [question-set 
        (get-question-set-fun (-> req :route-params :id))
        permission-error
        (validate-user-for-question-set (str(-> req :session :user :id)) (-> req :route-params :id))]
    (if (empty? permission-error)
      (view/question-set-form question-set)
      (view/no-assignement-form permission-error))))