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
                           :user/git-id
                           :user/course-iterations]))


(defn- create-user-impl
  [this oauth-github-id]
  (db/add-user! (.db this) oauth-github-id))


(s/fdef git-id-in-use?-impl
        :args (s/cat :self #(satisfies? PUserService %)
                     :oauth-github-id :general/non-blank-string)
        :ret boolean?)


(defn- git-id-in-use?-impl
  [this oauth-github-id]
  (boolean (db/get-user-id-by-git-id (.db this) oauth-github-id)))


(s/fdef get-user-id-by-git-id-impl
        :args (s/cat :self #(satisfies? PUserService %)
                     :oauth-github-id :general/non-blank-string)
        :ret (s/or :user-id int? :nil nil?))


(defn- get-user-id-by-git-id-impl
  [this oauth-github-id]
  (db/get-user-id-by-git-id (.db this) oauth-github-id))


(extend UserService PUserService {:create-user! create-user-impl :git-id-in-use? git-id-in-use?-impl :get-user-id-by-git-id get-user-id-by-git-id-impl})
