.PHONY: dev-server format test lint uber
dev-server:
	clj -X core/start-dev-server

format:
	clj -M:format

test:
	clj -M:test-runner

lint:
	clj -M:lint

uber:
	clj -T:build uber