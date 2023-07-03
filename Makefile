.PHONY: backend
backend:
	clj -X core/start-server

.PHONY: format
format:
	clj -M:format

.PHONY: test
test:
	clj -M:test-runner