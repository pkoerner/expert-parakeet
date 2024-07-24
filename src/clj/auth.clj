(ns auth
  (:require
    [clj-http.client :as client]
    [clojure.spec.alpha :as s]
    [ring.middleware.oauth2 :refer [wrap-oauth2]]
    [util.ring-extensions :refer [html-response]]))


;; RFC 6749 1.5:
;;
;; ┌──────────┐                               ┌───────────────┐
;; │          │── (A) ─Authorization Request─▶│   Resource    │
;; │          │◀─ (B) ──Authorization Grant───│     Owner     │
;; │          │                               └───────────────┘
;; │          │                               ┌───────────────┐
;; │  Client  │── (C) ──Authorization Grant──▶│ Authorization │
;; │          │◀─ (D) ─────Access Token───────│    Server     │
;; │          │                               └───────────────┘
;; │          │                               ┌───────────────┐
;; │          │── (E) ─────Access Token──────▶│   Resource    │
;; │          │◀─ (F) ───Protected Resource───│    Server     │
;; └──────────┘                               └───────────────┘

;; Authentication Step:                                       ⎞
;; - User is redirect to GitHub where they are asked          ⎟ Is done by the OAuth2-
;;   to give our app permission to access their               ⎟ Middleware
;;   user id.                                                 ⎟ 
;; - We acquire a 'Authorization Grant' with which we         ⎟
;;   are able to get an 'Access Token'                        ⎠
;; - With this 'Access Token' we can make calls to the             ⎞
;;   GitHub User API and fetch the user-id                         ⎟ Our Magic
;; - We add the user id to the session                             ⎠
;; - (optional) We could persist the session, currently the session is deleted when the user closes their browser (Attention!)

;; Secrets from Environment variables
;; - it is important to keep the OAUTH_CLIENT_ID and OAUTH_CLIENT_SECRET variables secret!
;; - For local development this can be handled with normal environment variables in your operating system
;;   (see our readme.md: https://github.com/pkoerner/expert-parakeet#how-to-run)
;; - In production we handle this with fly.io runtime secrets and GitHub repository secrets.
;; - Further information can be found in our readme.md in the
;;   'Continous Deployment' section (https://github.com/pkoerner/expert-parakeet#continous-deployment)
(def oauth-client-id (if *compile-files* "" (System/getenv "OAUTH_CLIENT_ID")))
(def oauth-client-secret (if *compile-files* "" (System/getenv "OAUTH_CLIENT_SECRET")))

(assert oauth-client-id "OAUTH_CLIENT_ID is not set")
(assert oauth-client-secret "OAUTH_CLIENT_SECRET is not set")


;; OAuth2 settings
;; 
(def oauth-github-profile
  {:github
   {;; "Resource Owner" -> gives us an 'Authorization Grant', meaning we're allowed to user the users account in this authentication process.
    :authorize-uri    "https://github.com/login/oauth/authorize"
    ;; "Authorization Server" -> gives us a token to request the account data from the user we previously got a 'Authorization Grant' for.
    :access-token-uri "https://github.com/login/oauth/access_token"
    :client-id        oauth-client-id
    :client-secret    oauth-client-secret
    ;; withouth any scopes definition, github provides us with the uid of the current user, which is all we need.
    ;; :scopes           []
    ;; Start URL
    ;; -> initiates the oauth process and redirects the user to GitHub 
    :launch-uri       "/oauth2/github"
    ;; URL where the user will be redirected from GitHub to us -> the query String contains the token
    :redirect-uri     "/oauth2/github/callback"
    ;; The middleware redirects the user to this URL when the oauth was successful.
    ;; At this point we can process the user id provided by GitHub, e.g. put it in the session.
    :landing-uri      "/oauth2/github/callback-success"}})


(defn extract-token
  [request]
  (-> request
      (get-in [:oauth2/access-tokens :github :token])))


;; API Call to the Github User API
(defn github-user-data-from-token
  [token]
  (-> (client/get
        "https://api.github.com/user"
        {:accept :json
         :oauth-token token
         :as :json})
      :body
      (select-keys [:id])))


(defn- authenticate-session
  "This function adds the ID provided by the GitHub OAuth to our session."
  [request]
  (let [github-data (github-user-data-from-token (extract-token request))
        oauth-github-id (github-data :id)]

    {:status 307
     :headers {"Content-Type" "text/plain", "Location" "/login"}
     :session (assoc (:session request) :user {:oauth-github-id oauth-github-id})
     :body (str github-data)}))


(s/fdef is-authenticated?
        :args (s/cat :request coll?)
        :ret boolean?)


(defn is-authenticated?
  "Checks if the user is authenticated via oauth provided by github."
  [request]
  (contains? (-> request :session :user) :oauth-github-id))


(s/fdef is-logged-in?
        :args (s/cat :request coll?)
        :ret boolean?)


(defn is-logged-in?
  "Checks if the user is logged in as a user from the application."
  [request]
  (contains? (-> request :session :user) :id)) ; #'auth/is-logged-in?


(defn wrap-authentication-routes
  [handler]
  (fn [request]
    (case (:uri request)
      ;; The call to authenticate the session should be available to users that are not 
      ;; already authenticated.
      "/oauth2/github/callback-success" (authenticate-session request)
      (if (is-authenticated? request)
        (handler request)
        (html-response [:p "Unauthorized."])))))


(defn wrap-authentication
  [handler]
  (wrap-oauth2 (wrap-authentication-routes handler) oauth-github-profile))
