(ns views.template
  (:require
    [auth :refer [is-logged-in?]]
    [hiccup.page :as hpage]
    [hiccup2.core :as h]))


(defrecord MenuItem
  [displayname href visible?])


(defn not-logged-in
  [request]
  (not (is-logged-in? request)))


(def menu-items
  (map (fn [item] (apply ->MenuItem item))
       [["Login" "/login" not-logged-in]
        ["Home" "/" is-logged-in?]
        ["Course Overview" "/user-overview" is-logged-in?]  ; FIXME: Check for admin permissions
        ["Correction Overview" "/correction-overview" is-logged-in?]   ; FIXME: Check for admin permissions
        ["Create Course" "/create-course" is-logged-in?]  ; FIXME: Check for admin permissions
        ["Create Course Iteration" "/create-course-iteration" is-logged-in?]  ; FIXME: Check for admin permissions
        ["Create Question" "/create-question" is-logged-in?]])) ; FIXME: Check for admin permissions


;; this is the bootstrap 4.0 example "stick-footer-navbar" without the javascript
;; "responsive navbar" thingy.

(defn ^:private render
  [request main-content]
  (str (h/html
         {:mode :html}
         (hpage/doctype :html5)
         [:html
          [:head
           [:meta {:charset "utf-8"}]
           [:meta
            {:name "viewport",
             :content "width=device-width, initial-scale=1, shrink-to-fit=no"}]
           [:title "Expert Parakeet"]
           (comment "Bootstrap core CSS")
           [:link {:href "/css/bootstrap.min.css", :rel "stylesheet"}]
           (comment "Custom styles for this template")
           [:link {:href "/css/sticky-footer-navbar.css", :rel "stylesheet"}]]
          [:body
           [:header
            (comment "Fixed navbar")
            [:nav
             {:class "navbar navbar-expand-md fixed-top bg-dark", :data-bs-theme "dark"}
             [:div {:class "container-fluid"}
              [:a {:class "navbar-brand", :href "#"} "Expert Parakeet"]
              [:ul
               {:class "navbar-nav me-auto"}
               (->> menu-items
                    (filter (fn [item] ((:visible? item) request)))
                    (map (fn [item]
                           [:li {:class "nav-item"}
                            [:a
                             (if (= (:uri request) (:href item))
                               {:class "nav-link active", :href (:href item), :aria-current "page"}
                               {:class "nav-link", :href (:href item)})
                             (:displayname item)]])))]]]]

           [:main
            {:role "main", :class "container"}
            (h/raw main-content)]
           [:footer
            {:class "footer"}
            [:div
             {:class "container"}
             [:span {:class "text-muted"} "Place sticky footer content here."]]]]])))


(defn wrap-navbar-and-footer
  [handler]
  (fn [request]
    (update (handler request) :body (partial render request))))
