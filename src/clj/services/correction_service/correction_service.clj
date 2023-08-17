(ns services.correction-service.correction-service
  (:require
    [clojure.spec.alpha :as s]
    [db]
    [services.correction-service.p-correction-service :refer [PCorrectionService]]))


(deftype CorrectionService
  [db])


(s/fdef get-corrections-from-user-as-impl
        :args (s/cat :self #(satisfies? PCorrectionService %)
                     :user-id :user/id
                     :role #(contains? #{:student :corrector} %)))


(defn- get-corrections-from-user-as-impl
  [this user-id role]
  (case role
    :student (db/get-all-corrections-from-user (.db this) user-id)
    :corrector (db/get-all-corrections-from-corrector (.db this) user-id)
    []))


(extend CorrectionService PCorrectionService {:get-corrections-from-user-as get-corrections-from-user-as-impl})
