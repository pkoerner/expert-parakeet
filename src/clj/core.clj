(ns core
  (:require
   [compojure.coercions :refer [as-int]]
   [compojure.core :refer [GET defroutes]]
   [compojure.route :as route]
   [ring.adapter.jetty :refer [run-jetty]]
   [ring.middleware.defaults :refer :all]
   [ring.middleware.params :refer [wrap-params]]
   [ring.middleware.reload :refer [wrap-reload]]
   [ring.middleware.oauth2 :refer [wrap-oauth2]]
   ;;[ring.middleware.defaults :refer [wrap-defaults, site-defaults]]
   ;;[ring.middleware.session :refer [wrap-session]]
   ;;[ring.middleware.session.cookie :refer [cookie-store]]
   [auth :refer [extract-token oauth-github-profile wrap-authentication]]))

(defroutes routes
  (GET "/api/random" [] (str [(rand-int 10) (rand-int 10)]))
  (GET "/api/random3" [] (str [(rand-int 10) (rand-int 10)]))
  (GET "/api/check-random" [a :<< as-int b :<< as-int res :<< as-int]
    (str (= (+ a b) res)))
  (GET "/api/access-token" request (str (extract-token request)))
  (GET "/api/session" request (str (:session request)))
  (route/not-found "Not Found"))

(def app
  (-> routes
      wrap-authentication
      (wrap-oauth2 oauth-github-profile)
      (wrap-defaults (assoc-in site-defaults [:session :cookie-attrs :same-site] :lax))
        ;; wrap-defaults kann das irgend wie auch -> ging nur nicht 
        ;;(wrap-session {:store (cookie-store {:key (byte-array (map byte [0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15])) :cookie-name "parakeet-session"})})
        ;;(wrap-defaults (assoc-in site-defaults [:cookie-attrs :same-site] :lax))
      wrap-params))


(def app-dev (wrap-reload #'app))

(defn start-server
  [& _args]
  (run-jetty app-dev {:port 8081 :join? false}))