(ns controllers.correction.new-correction-controller-test
  (:require
    [clojure.string :as string]
    [clojure.test :as t :refer [deftest testing]]
    [controllers.correction.new-correction-controller :refer [new-correction-get submit-new-correction!]]
    [hiccup.util :refer [url-encode]]))


(deftest test-new-correction-get
  (let [empty-request {}
        answer "This is a test answer."
        question "This is the question."
        evaluation  "This the evaluation criteria."
        get-answer-fn (fn [_] {:answer/id "0" :answer/question "0" :answer/answer answer})
        get-question-fn (fn [_] {:question/question-statement question :question/evaluation-criteria evaluation})]
    (testing "Returns a form object on normal invocation."
      (let [post-destination "post-destination"
            res (new-correction-get empty-request
                                    post-destination
                                    get-answer-fn
                                    get-question-fn)]
        (t/is (and (string/includes? res "form")
                   (string/includes? res post-destination)
                   (string/includes? res answer)
                   (string/includes? res question)
                   (string/includes? res evaluation)))))))


(deftest test-submit-new-correction-errors
  (let [answer-id "123"
        req {:multipart-params {"answer-id" answer-id}}
        add-correction-fn (fn [_] nil)
        get-user-by-git-id-fn (fn [_] nil)]
    (testing "Returns errors on wrong submit data."
      (let [redirect-uri "redirect-uri"
            res (submit-new-correction! req
                                        redirect-uri
                                        add-correction-fn
                                        get-user-by-git-id-fn)]
        (t/is (and (string/includes? res redirect-uri)
                   (string/includes? res answer-id)
                   (string/includes? res (url-encode "Die angegebenen Punkte sind ungültig."))
                   (string/includes? res (url-encode "Das angegebene Feedback ist ungültig."))))))))


(deftest test-submit-new-correction-success
  (let [answer-id "123"
        feedback "This is feedback."
        points 1
        corrector "5"
        req {:multipart-params {"answer-id" answer-id "points" (str points) "feedback" feedback}}
        call-arg-answer-id (atom nil)
        call-arg-correction (atom nil)
        add-correction-fn (fn [id correction]
                            (swap! call-arg-answer-id (fn [_] id))
                            (swap! call-arg-correction (fn [_] correction)))
        get-user-by-git-id-fn (fn [_] corrector)]
    (testing "add-correction-fn is called with the right arguments."
      (let [redirect-uri "redirect-uri"
            res (submit-new-correction! req
                                        redirect-uri
                                        add-correction-fn
                                        get-user-by-git-id-fn)]
        (t/is (string/includes? res "Die Korrektur wurde erfolgreich hinzugefügt."))
        (t/is (= @call-arg-answer-id answer-id))
        (t/is (= @call-arg-correction {:correction/feedback feedback :correction/points points :corrector/id corrector}))))))
