.PHONY: backend
backend:
	clj -X core/start-server

.PHONY: frontend
frontend:
	npm install && npm run frontend

.PHONY: format
format:
	clj -M:format

.PHONY: test
test:
	clj -M:test-runner