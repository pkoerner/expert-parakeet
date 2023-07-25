(ns views.course.create-course-view
  (:require
    [clojure.spec.alpha :as s]
    [clojure.string :as string]
    [hiccup.form :as hform]
    [hiccup2.core :as h]
    [ring.util.anti-forgery :refer [anti-forgery-field]]))


(def create-course-error-keys
  "Possible errors to display in the course-form."
  {:course-error "Der ausgewählte Name war inkorrekt!"
   :course-already-existed "Der angegebene Fachname wird bereits verwendet!"})


(s/fdef course-form
        :args (s/cat :post-destination :general/non-blank-string
                     :kwargs (s/? (s/or :empty empty?
                                        :map (s/map-of create-course-error-keys
                                                       string?))))
        :ret #(instance? hiccup.util.RawString %)
        :fn (fn [spec-map]
              (let [{{:keys [post-destination]} :args
                     ret :ret} spec-map]
                #(string/includes? ret post-destination))))

#_{:clj-kondo/ignore [:unresolved-var]}
(defn course-form
  "Returns a html-form for course creation.
   Field of the response is: [course].
   It can display errors provided in a map behind the optional `:errors` parameter."
  [post-destination & {:keys [errors] :or {errors {}}}]
  (h/html
    (hform/form-to
      {:enctype "multipart/form-data"}
      [:post post-destination]

      [:div
       (when (errors :course-error)
         [:div [:span {:style "color: red;"} (errors :course-error)]])
       (when (errors :course-already-existed)
         [:div [:span {:style "color: red;"} (errors :course-already-existed)]])
       [:label {:for "course"} "Fachname:"] [:br]
       [:input#course {:name "course"
                       :type "text"
                       :value "Neues Fach"}]]

      (h/raw (anti-forgery-field))
      (hform/submit-button "submit"))))


(s/fdef submit-success-view
        :args (:course :course/course-name)
        :ret (s/and #(string/includes? % "erfolg")
                    #(instance? hiccup.util.RawString %)))


(defn submit-success-view
  [course]
  (h/html
    [:div
     [:p "Das Fach " course " wurde erfolgreich erstellt.!\n"]]))
