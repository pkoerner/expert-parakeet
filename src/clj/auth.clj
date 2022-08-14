(ns auth
  (:require
    [clj-http.client :as client]
    [ring.middleware.oauth2 :refer [wrap-oauth2]]))


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

;; Schritte für den Login:                                    ⎞
;; - Nutzer wird auf Github weitergeleitet und gefragt,       ⎟
;;   ob die E-Mail Adresse und andere Dinge für den           ⎟
;;   Service geteilt werden darf.                             ⎟ Wird von der OAuth2-
;; - Der Resource Owner wird gefragt,                         ⎟ Middleware gehandhabt
;;   ob die E-Mail Adresse freigegeben werden darf.           ⎟
;; - Es gibt einen Grant, mit dem vom Authorization Server    ⎟
;;   ein Access Token erstellt werden kann                    ⎠
;; - Wir fragen mit dem Access Token dem Github "Resource Server", ⎞
;;   was die user-id, e-mail Adresse, Name usw. ist.               ⎟ Eigene Magie
;; - Wir schreiben diese in die Session                            ⎠
;; - (optional) Wir können die Session persistent machen (Achtung!)

;; Secrets aus den Umgebungsvariablen
;; - werden oft in Docker-files als Umgebungsvariable angegeben
;; - kann unsicher sein: andere Prozesse könnten diese auslesen
;; - besser: secret als Datei
;; - Kubernetes z.B. kann secrets direkt als Datei in den Pod mounten
(def oauth-client-id (System/getenv "OAUTH_CLIENT_ID"))
(def oauth-client-secret (System/getenv "OAUTH_CLIENT_SECRET"))
(assert oauth-client-id "OAUTH_CLIENT_ID is not set")
(assert oauth-client-secret "OAUTH_CLIENT_SECRET is not set")


;; OAuth2 settings
;; 
(def oauth-github-profile
  {:github
   {;; "Resource Owner" -> gibt uns einen Grant
    :authorize-uri    "https://github.com/login/oauth/authorize"
    ;; "Authorization Server" -> gibt uns ein Token
    :access-token-uri "https://github.com/login/oauth/access_token"
    :client-id        oauth-client-id
    :client-secret    oauth-client-secret
    ;; Wir wollen die email Adresse des Nutzers erfahren
    ;; -> wir bekommen noch ein paar Infos mehr (user-id, alles öffentliche, ...)
    :scopes           ["user:email"]
    ;; Start URL (die muss der Nutzer aufrufen)
    ;; -> initiiert alles und leitet den Nutzer an Github weiter
    :launch-uri       "/api/oauth2/github"
    ;; URL, an die Github uns weiter leitet -> im Query String liegt das Token
    :redirect-uri     "/api/oauth2/github/callback"
    ;; Die middleware leitet uns dort hin weiter, wenn alles geklappt hat
    ;; -> in dem Handler können wir Github nach der user-id fragen,
    ;;    die Matr.Nr. in der DB abfragen und alles in die Session speichern
    :landing-uri      "/api/logged-in"}})


(defn extract-token
  [request]
  (-> request
      (get-in [:oauth2/access-tokens :github :token])))


;; API Call zu der Github API
(defn github-user-data-from-token
  [token]
  (-> (client/get
        "https://api.github.com/user"
        {:accept :json
         :oauth-token token
         :as :json})
      :body
      (select-keys [:email :name :id])))


;; Github ID, Name, E-Mail zu Session hinzu fügen
(defn logged-in
  [request]
  (let [github-data (github-user-data-from-token (extract-token request))]
    {:status 307
     :headers {"Content-Type" "text/plain", "Location" "http://localhost:8082/"}
     :session (assoc (:session request) :user github-data)
     ;; Hier werden für demonstrationszwecke ein paar Daten angezeigt
     ;; Der frontend code könnte hier die Bestätigung bekommen,
     ;; dass der Login funktioniert hat
     :body (str github-data)}))


(defn is-logged-in
  [request]
  (contains? (-> request :session) :user))


(defn api-is-logged-in
  [request]
  {:status 200
   :headers {"Content-Type" "text/plain"}
   :body (str (is-logged-in request))})


(defn wrap-authentication-routes
  [handler]
  (fn [request]
    (case (:uri request)
      ;; Der logged-in call darf nicht abgefangen werden,
      ;; daher wird dieser hier gehandhabt
      "/api/logged-in" (logged-in request)
      ;; Status der session
      "/api/is-logged-in" (api-is-logged-in request)
      ;; Prüfen ob der Nutzer eingeloggt ist
      (if (is-logged-in request)
        ;; Nutzer darf alles machen
        (handler request)
        ;; Nutzer muss sich authentifizieren
        {:status 401
         :body "Please login using github at localhost:8081/api/oauth2/github"}))))


(defn wrap-authentication
  [handler]
  (wrap-oauth2 (wrap-authentication-routes handler) oauth-github-profile))
