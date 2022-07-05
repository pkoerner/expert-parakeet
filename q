[1mdiff --git a/deps.edn b/deps.edn[m
[1mindex d5bd9e9..94a9800 100644[m
[1m--- a/deps.edn[m
[1m+++ b/deps.edn[m
[36m@@ -5,13 +5,13 @@[m
                                                        org.clojure/google-closure-library[m
                                                        org.clojure/google-closure-library-third-party][m
                                          :mvn/version "1.11.4"}[m
[31m-                                        re-frame/re-frame          #:mvn{:version "0.11.0"}[m
[31m-                                        reagent/reagent            #:mvn{:version "0.9.1"}[m
[32m+[m[32m                                        re-frame/re-frame          {:mvn/version "1.3.0-rc3"}[m
                                         thheller/shadow-cljs       {:mvn/version "2.18.0"}[m
                                         clj-kondo/clj-kondo        {:mvn/version "2022.04.25"}[m
[31m-                                        day8.re-frame/re-frame-10x {:mvn/version "0.7.0"}[m
[32m+[m[32m                                        day8.re-frame/re-frame-10x {:mvn/version "1.4.1"}[m
                                         cljs-ajax/cljs-ajax {:mvn/version "0.8.4"}[m
[31m-                                        metosin/reagent-dev-tools  {:mvn/version "0.2.1"}}}[m
[32m+[m[32m                                        metosin/reagent-dev-tools  {:mvn/version "0.2.1"}[m
[32m+[m[32m                                        cljsjs/highlight           {:mvn/version "10.3.1-0"}}}[m
            ;; Let's learn to use a common part already now since in the next exercise we create frontend with re-frame.[m
            :common       {:extra-paths ["src/cljc"][m
                           :extra-deps  {}}[m
[1mdiff --git a/docker-compose.yml b/docker-compose.yml[m
[1mindex 40ee654..d4be76d 100644[m
[1m--- a/docker-compose.yml[m
[1m+++ b/docker-compose.yml[m
[36m@@ -7,4 +7,3 @@[m [mservices:[m
       - ./proxy/conf/domain.conf:/etc/nginx/domain.conf:ro[m
     ports:[m
       - "8080:80"[m
[31m-    network_mode: host[m
[1mdiff --git a/shadow-cljs.edn b/shadow-cljs.edn[m
[1mindex ffa7455..7f0ee02 100644[m
[1m--- a/shadow-cljs.edn[m
[1m+++ b/shadow-cljs.edn[m
[36m@@ -9,4 +9,8 @@[m
                                         :preloads [devtools.preload]}}[m
                 :devtools        {:http-root    "resources/public"[m
                                   :http-port    8082[m
[31m-                                  }}}}[m
[32m+[m[32m                                  :preloads [day8.re-frame-10x.preload]}[m
[32m+[m[32m                :dev {:compiler-options[m
[32m+[m[32m                      {:closure-defines[m
[32m+[m[32m                       {re-frame.trace.trace-enabled?        true[m
[32m+[m[32m                        day8.re-frame.tracing.trace-enabled? true}}}}}}[m
[1mdiff --git a/src/clj/core.clj b/src/clj/core.clj[m
[1mindex 752d399..074f44c 100644[m
[1m--- a/src/clj/core.clj[m
[1m+++ b/src/clj/core.clj[m
[36m@@ -1,18 +1,27 @@[m
 (ns core[m
   (:require[m
     [compojure.coercions :refer [as-int]][m
[31m-    [compojure.core :refer [GET defroutes]][m
[32m+[m[32m    [compojure.core :refer [GET defroutes context]][m
     [compojure.route :as route][m
     [ring.adapter.jetty :refer [run-jetty]][m
     [ring.middleware.params :refer [wrap-params]][m
     [ring.middleware.reload :refer [wrap-reload]]))[m
 [m
[32m+[m[32m(defn get-test-by-id [id][m
[32m+[m[32m  {:test-id id[m
[32m+[m[32m   :questions [{:question-id 0 :question "Fühlen Sie sich prüfungsbereit?" :points 0}[m
[32m+[m[32m               {:question-id 1 :question "Was ist der Sinn des Lebens?" :points 42}]})[m
[32m+[m
[32m+[m
 [m
 (defroutes routes[m
[31m-  (GET "/api/random" [] (str [(rand-int 10) (rand-int 10)]))[m
[31m-  (GET "/api/random3" [] (str [(rand-int 10) (rand-int 10)]))[m
[31m-  (GET "/api/check-random" [a :<< as-int b :<< as-int res :<< as-int][m
[31m-       (str (= (+ a b) res)))[m
[32m+[m[32m (context "/api" [][m
[32m+[m[32m   (GET "/test" [] [])[m
[32m+[m[32m   (GET "/test/:test-id" [test-id] (str (get-test-by-id test-id)))[m
[32m+[m[32m   (GET "/check-random" [a :<< as-int b :<< as-int res :<< as-int][m
[32m+[m[32m      (str (= (+ a b) res)))[m
[32m+[m[32m          )[m
[32m+[m
   (route/not-found "Not Found"))[m
 [m
 [m
[1mdiff --git a/src/cljs/cljshello.cljs b/src/cljs/cljshello.cljs[m
[1mindex bf01ed0..62155b0 100644[m
[1m--- a/src/cljs/cljshello.cljs[m
[1m+++ b/src/cljs/cljshello.cljs[m
[36m@@ -15,22 +15,22 @@[m
 (rf/reg-event-db[m
   :init-db[m
   (fn [db _][m
[31m-    (GET "/api/random"[m
[32m+[m[32m    (GET "/api/test/3"[m
          {:handler (fn [resp][m
[31m-                     (rf/dispatch [:update-challenge (edn/read-string resp)]))})[m
[31m-    db))[m
[32m+[m[32m                     (rf/dispatch [:update-test (edn/read-string resp)]))})[m
[32m+[m[32m    (assoc db :test-id 3)))[m
 [m
 [m
 (rf/reg-event-db[m
[31m-  :update-challenge[m
[31m-  (fn [db [_ [a b]]][m
[31m-    (assoc db :a a :b b)))[m
[32m+[m[32m  :update-test[m
[32m+[m[32m  (fn [db [_ test]][m
[32m+[m[32m    (assoc db :test test)))[m
 [m
 [m
 (rf/reg-event-db[m
   :check-answer[m
[31m-  (fn [{:keys [answers] :as db}][m
[31m-    (POST "/api/foobarmachenwirspaeter"[m
[32m+[m[32m  (fn [{:keys [answers test-id] :as db}][m
[32m+[m[32m    (POST "/api/test/"[m
           {:handler (fn [resp][m
                       (rf/dispatch [:update-correct (edn/read-string resp)]))[m
            :body answers[m
[36m@@ -80,8 +80,7 @@[m
        :on-change #(rf/dispatch [:update-answer {question-id (-> % .-target .-value)}])}]]]])[m
 [m
 [m
[31m-(defn Questions[m
[31m-  [{:keys [questions]}][m
[32m+[m[32m(defn Questions [questions][m
   [:form (map TextQuestion questions)[m
    [:div.control[m
     [:button.button.is-link[m
[36m@@ -105,9 +104,7 @@[m
 (defn Root[m
   [][m
   [:div.container[m
[31m-   [Questions {:questions[m
[31m-               [{:question-id 0 :question "Fühlen Sie sich prüfungsbereit?" :points 0}[m
[31m-                {:question-id 1 :question "Was ist der Sinn des Lebens?" :points 42}]}][m
[32m+[m[32m   [Questions (get-in (rf/subscribe [:update-test]) [:test :questions])][m
    [Hello][m
    [Calc][m
    [React-to-user]])[m
