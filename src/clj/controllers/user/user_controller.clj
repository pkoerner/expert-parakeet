(ns controllers.user.user-controller
  (:require
    [auth]
    [clojure.spec.alpha :as s]
    [ring.util.response :refer [redirect]]
    [services.user-service.p-user-service :refer [PUserService 
                                                  get-user-id-by-git-id]]))


(s/fdef login
        :args (s/cat :req coll?
                     :user-service #(satisfies? PUserService %))
        :ret (s/keys :req-un [::status ::body]))


(defn login
  "Tries to login the user based on their GitHub Authentication"
  [req user-service]
  (if (not (auth/is-authenticated? req))
    ;; Redirect to GitHub oauth if not authenticated
    (redirect "/oauth2/github")
    ;; else search user in the database and put it into the session or redirect to user creation
    (let [session (req :session)
          oauth-github-id (-> session :user :oauth-github-id)
          [user-id] (get-user-id-by-git-id user-service (str (-> session :user :oauth-github-id)))]
      (if user-id
        (-> (redirect "/") (assoc :session {:user {:id user-id :oauth-github-id oauth-github-id}}))
        (redirect "/")))))

