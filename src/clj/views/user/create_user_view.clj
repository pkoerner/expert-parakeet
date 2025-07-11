(ns views.user.create-user-view
  (:require
    [clojure.spec.alpha :as s]
    [hiccup.form :as hform]
    [hiccup2.core :as h]
    [ring.util.anti-forgery :refer [anti-forgery-field]]))


(s/fdef create-user-form
        :args (s/cat :post-destination :general/non-blank-string)
        :ret #(instance? hiccup.util.RawString %))


(defn create-user-form
  "Returns an html-form which is used to create a user."
  [post-destination]
  (hform/form-to
    [:post post-destination]
    [:div "For this Github account, there is no user assigned"]

    [:div {:class "mb-3"}
     (hform/label {:class "form-label"} "user-name" "User Name")
     (hform/text-field {:class "form-control" :required true} "user-name")]

    [:div {:class "mb-3"}
     (hform/label {:class "form-label"} "matriculation-id" "Matriculation Id")
     (hform/text-field {:class "form-control" :required true} "matriculation-id")]

    (h/raw (anti-forgery-field))
    (hform/submit-button {:class "btn btn-primary"} "Create user for this Github account")))
