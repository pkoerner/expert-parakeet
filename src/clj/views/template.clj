(ns views.template
  (:require
    [auth :refer [is-logged-in]]
    [hiccup2.core :as h]))


(defrecord MenuItem
  [displayname href visible?])


(defn not-logged-in
  [request]
  (not (is-logged-in request)))

(def menu-items
  (map (fn [item] (apply ->MenuItem item))
       [["Login" "/login" not-logged-in]
        ["Home" "/" is-logged-in]
        ["Create Course Iteration" "/create-course-iteration" is-logged-in]  ; FIXME: Check for admin permissions
        ["Create Question" "/create-question" is-logged-in]]))  ; FIXME: Check for admin permissions


;; this is the bootstrap 4.0 example "stick-footer-navbar" without the javascript
;; "responsive navbar" thingy.

(defn ^:private render
  [request main-content]
  (str (h/html
         [:meta {:charset "utf-8"}]
         [:meta
          {:name "viewport",
           :content "width=device-width, initial-scale=1, shrink-to-fit=no"}]
         [:title "Expert Parakeet"]
         (comment "Bootstrap core CSS")
         [:link {:href "css/bootstrap.min.css", :rel "stylesheet"
                 :integrity "sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
                 :crossorigin "anonymous"}]
         (comment "Custom styles for this template")
         [:link {:href "css/sticky-footer-navbar.css", :rel "stylesheet"}]
         [:header
          (comment "Fixed navbar")
          [:nav
           {:class "navbar navbar-expand-md navbar-dark fixed-top bg-dark"}
           [:a {:class "navbar-brand", :href "#"} "Expert Parakeet"]
           [:ul
            {:class "navbar-nav mr-auto"}
            (->> menu-items
                 (filter (fn [item] ((:visible? item) request)))
                 (map (fn [item]
                        (if (= (:uri request) (:href item))
                          [:li {:class "nav-item active"} [:a {:class "nav-link", :href (:href item)} (:displayname item) [:span {:class "sr-only"} "current"]]]
                          [:li {:class "nav-item"} [:a {:class "nav-link", :href (:href item)} (:displayname item)]]))))]]]

         [:main
          {:role "main", :class "container"}
          (h/raw main-content)]
         [:footer
          {:class "footer"}
          [:div
           {:class "container"}
           [:span {:class "text-muted"} "Place sticky footer content here."]]])))


(defn wrap-navbar-and-footer
  [handler]
  (fn [request]
    (update (handler request) :body (partial render request))))
