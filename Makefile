.PHONY: dev-server format test lint uber
# this rule is first, so that just running 'make' will start the server
dev-server: compile-cljs
	clj -X core/start-dev-server

format:
	clj -M:format

test: compile-cljs
	clj -M:test-runner

lint:
	clj -M:lint

uber: compile-cljs
	clj -T:build uber

compile-cljs:
	clj -X:compile-cljs
