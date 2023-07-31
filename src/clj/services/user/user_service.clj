(ns services.user.user-service
  (:require
   [clojure.spec.alpha :as s]
   [db]
   services.user.p-user-service :refer [PUserService]))

(deftype UserService
         [db])

;TODO implementation needed here if the database schema is edited
(defn- get-user-by-handle 
  [this, handle]
  )

(extend UserService
  PUserService
  {:get-user-by-handle get-user-by-handle})