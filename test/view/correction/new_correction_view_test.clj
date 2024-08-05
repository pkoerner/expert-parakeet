(ns view.correction.new-correction-view-test)


#_(:require
   [clojure.string :as string]
   [clojure.test :as t :refer [deftest testing]]
   [views.correction.new-correction-view :refer [new-correction-form]])


;; TODO: rewrite when logic for getting points of an answer is implemented
#_(deftest test-new-correctoin-form
  (testing "Testing that the new-correction-form contains given data."
    (t/are [test-input]
           (let [[answer question post-destination] test-input
                 res (str (new-correction-form answer question post-destination))]
             (and
               (string/includes? res (first (:answer/answer answer)))
               (string/includes? res (:answer/id answer))
               (string/includes? res (:question/statement question))
               (string/includes? res (:question/evaluation-criteria question))
               (string/includes? res post-destination)))

      [{:answer/id "1"
        :answer/question [:question/id "1"]
        :answer/creator [:user/id "0"]
        :answer/answer ["transients are a non persistent data structures in clojure. They are used to increase performance."]
        :answer/points 1}
       {:question/id "1"
        :question/type :question.type/free-text
        :question/statement "Describe a use case for transient data structures"
        :question/evaluation-criteria "The following aspects are explained: performance improvement, mutable variant of persistent data structures, must be made persistent before function return"
        :question/max-points 3
        :question/categories #{"Cat1" "Cat2" "Cat3"}}
       "https://some.url"]

      [{:answer/id "4"
        :answer/question [:question/id "2"]
        :answer/creator [:user/id "0"]
        :answer/answer [" JVM, i.e., Java Virtual Machine.
           JVM is the engine that drives the Java code.
           Mostly in other Programming Languages, compiler produce code for a particular system but Java compiler produce Bytecode for a Java Virtual Machine.
           When we compile a Java program, then bytecode is generated. Bytecode is the source code that can be used to run on any platform.
           Bytecode is an intermediary language between Java source and the host system.
           It is the medium which compiles Java code to bytecode which gets interpreted on a different machine and hence it makes it Platform/Operating system independent."]
        :answer/points 3}
       {:question/id "2"
        :question/type :question.type/free-text
        :question/statement "What is the JVM?"
        :question/evaluation-criteria "Something like this (from Wikipedia): https://en.wikipedia.org/wiki/Java_virtual_machine"
        :question/max-points 3
        :question/categories #{"Cat1" "Cat2"}}
       "https://some.url"])))
