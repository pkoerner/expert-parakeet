(ns controllers.correction.correction-controller
  (:require
    [clojure.spec.alpha :as s]
    [db]
    [services.correction-service.p-correction-service :refer [PCorrectionService get-corrections-from-user-as]]
    [views.correction.correction-overview-view :as view]))


(def page-size 3)

(def tabs {"corrections" "Corrections", "corrected" "Submissions corrected by me"})


(s/fdef correction-overview-get
        :args (s/cat :req coll?
                     :correction-service #(satisfies? PCorrectionService %))
        :ret #(instance? hiccup.util.RawString %))


(defn correction-overview-get
  [req correction-service]
  (let [tab-param (get-in req [:params :tab] "corrections")
        active-tab (if (contains? tabs tab-param) tab-param "corrections")
        active-page (try (Integer/parseInt (get-in req [:params :page] "1")) (catch Exception _e 1))
        user-id (-> req :session :user :id)
        corrections    (case active-tab
                         "corrections" (get-corrections-from-user-as correction-service user-id :student)
                         "corrected" (get-corrections-from-user-as correction-service user-id :corrector)
                         [])
        page-result (->> corrections
                         (sort-by #(% :correction/timestamp))
                         (drop (* page-size (dec active-page)))
                         (take page-size))
        number-of-pages (max 1 (int (Math/ceil (/ (count corrections) page-size))))]

    (view/correction-overview page-result tabs active-tab number-of-pages active-page)))
