.PHONY: run
run:
	clj -A:backend -X core/start-server

.PHONY: test
test:
	clj -A:test-runner