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
  "Returns an html-form which is used to create a user.
   Currently there are no inputs in this form, but some things like the 'unikennung',
   a name and something like that should probably be included here."
  [post-destination]
  (hform/form-to
    [:post post-destination]
    ;; TODO: maybe ask about name, mail, unikennung?
    [:div "For this Github account, there is no user assigned"]

    (h/raw (anti-forgery-field))
    (hform/submit-button "Create user for this Github account")))
