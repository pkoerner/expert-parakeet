(ns core
  (:require
    [ajax.core :refer [default-interceptors to-interceptor]]
    [day8.re-frame.http-fx]
    [events]
    [re-frame.core :as rf]
    [reagent.dom :as rdom]
    [router]
    [sub]))


(def debug? ^boolean goog.DEBUG)


(defn dev-setup
  []
  (when debug?
    (enable-console-print!)
    (println "dev mode")))


(defn init
  []
  (rf/clear-subscription-cache!)
  (rf/dispatch-sync [:init-db])
  (dev-setup)
  (router/init-routes!)
  (rdom/render [router/router-component {:router router/router}]
               (.getElementById js/document "app")))


(def with-credentials-interceptor
  (to-interceptor {:name "With Credentials Interceptor"
                   :request #(assoc-in % [:with-credentials] true)}))


(swap! default-interceptors (partial cons with-credentials-interceptor))
