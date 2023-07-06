.PHONY: dev-server
dev-server:
	clj -X core/start-dev-server

.PHONY: format
format:
	clj -M:format

.PHONY: test
test:
	clj -M:test-runner