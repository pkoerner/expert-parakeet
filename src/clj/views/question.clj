(ns views.question
  (:require 
   [db]
   [application-services.question-service :refer [extract-question-id-from-question
                                              extract-question-statement-from-question
                                              dispatch-question-type]]
   [hiccup.form :refer [form-to
                        submit-button]]))


(defn question-form
  [question-id]
  (form-to [:put (str "/answer/" question-id "/" (rand-int 30))]
                (let [question (db/get-question-by-id question-id)]
                  [:div [:p
                         {:id (extract-question-id-from-question question)}
                         (extract-question-statement-from-question question)]
                  (dispatch-question-type question)])
                (submit-button "submit")))