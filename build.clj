(ns build
  (:require
    [clojure.tools.build.api :as b]))


(def lib 'pkoerner/expert-parakeet)
(def class-dir "target/classes")
(def basis (b/create-basis {:project "deps.edn"}))
(def jar-file (format "target/expert-parakeet.jar"))
(def uber-file (format "target/expert-parakeet-standalone.jar"))


(defn clean
  [_]
  (b/delete {:path "target"}))


(defn jar
  [_]
  (b/write-pom {:class-dir class-dir
                :lib lib
                :basis basis
                :src-dirs ["src"]})
  (b/copy-dir {:src-dirs ["src" "resources"]
               :target-dir class-dir})
  (b/jar {:class-dir class-dir
          :jar-file jar-file}))


(defn uber
  [_]
  (clean nil)
  (b/copy-dir {:src-dirs ["src" "resources"]
               :target-dir class-dir})
  (b/compile-clj {:basis basis
                  :src-dirs ["src/clj"]
                  :class-dir class-dir})
  (b/uber {:class-dir class-dir
           :uber-file uber-file
           :basis basis
           :main 'core}))
