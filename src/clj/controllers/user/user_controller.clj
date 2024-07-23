(ns controllers.user.user-controller
  (:require
    [auth]
    [clojure.spec.alpha :as s]
    [ring.util.response :refer [redirect]]
    [services.user-service.p-user-service :refer [PUserService
                                                  create-user!
                                                  github-id-in-use?
                                                  get-user-id-by-github-id]]
    [views.user.create-user-view :as view]))


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
          [user-id] (get-user-id-by-github-id user-service (str (-> session :user :oauth-github-id)))]
      (if user-id
        (-> (redirect "/") (assoc :session {:user {:id user-id :oauth-github-id oauth-github-id}}))
        (redirect "/create-user")))))


(s/fdef create-user-get
        :args (s/cat :req coll?
                     :post-destination :general/non-blank-string
                     :user-service #(satisfies? PUserService %))
        :ret (s/or :html #(instance? hiccup.util.RawString %) :status-page (s/keys :req-un [::status ::body])))


(defn create-user-get
  "Returns an html form to create a user, but only if the session is authenticated via github and the
   associated github id is not yet in use by any user."
  [req post-destination user-service]
  (if (and (auth/is-authenticated? req) (not (github-id-in-use? user-service (str (-> req :session :user :oauth-github-id)))))
    (view/create-user-form post-destination)
    {:status 401 :body "Unauthorized"}))


(s/fdef submit-create-user
        :args (s/cat :req coll?
                     :redirect-uri string?
                     :user-service #(satisfies? PUserService %))
        :ret (s/keys :req-un [::status ::body]))


(defn submit-create-user
  "This function takes a request, containing an oauth-github-id in the session, and an 
   implementation of the `PUserService` protocol, which is used to insert a new user into the database.
   After creating a user the request will be redirected to the provided `redirect-uri`.
   In case the github-id is already in use the request is denied.
   "
  [req redirect-uri user-service]
  (if (and (auth/is-authenticated? req) (not (github-id-in-use? user-service (str (-> req :session :user :oauth-github-id)))))
    (let [oauth-github-id (-> req :session :user :oauth-github-id)]
      (create-user! user-service (str oauth-github-id))
      (redirect redirect-uri))
    {:status 401 :body "Unauthorized"}))
