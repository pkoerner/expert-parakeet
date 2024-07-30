(ns services.user-service.user-service
  (:require
    [clojure.spec.alpha :as s]
    [db]
    [services.user-service.p-user-service :refer [PUserService]]))


(deftype UserService
  [db])


(s/fdef create-user-impl
        :args (s/cat :self #(satisfies? PUserService %)
                     :oauth-github-id :general/non-blank-string)
        :ret (s/keys :req [:user/id
                           :user/github-id]))


(defn- create-user-impl
  [this oauth-github-id]
  (db/add-user! (.db this) oauth-github-id))


(s/fdef github-id-in-use?-impl
        :args (s/cat :self #(satisfies? PUserService %)
                     :oauth-github-id :general/non-blank-string)
        :ret boolean?)


(defn- github-id-in-use?-impl
  [this oauth-github-id]
  (boolean (db/get-user-id-by-github-id (.db this) oauth-github-id)))


(s/fdef get-user-id-by-github-id-impl
        :args (s/cat :self #(satisfies? PUserService %)
                     :oauth-github-id :general/non-blank-string)
        :ret (s/or :user-id int? :nil nil?))


(defn- get-user-id-by-github-id-impl
  [this oauth-github-id]
  (db/get-user-id-by-github-id (.db this) oauth-github-id))


(extend UserService PUserService {:create-user! create-user-impl :github-id-in-use? github-id-in-use?-impl :get-user-id-by-github-id get-user-id-by-github-id-impl})
