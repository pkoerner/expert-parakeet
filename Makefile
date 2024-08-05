.PHONY: dev-server format test lint uber

include .env

export OAUTH_CLIENT_ID
export OAUTH_CLIENT_SECRET

# this rule is first, so that just running 'make' will start the server
dev-server: compile-cljs
	clj -X core/start-dev-server

format:
	clj -M:format

test: compile-cljs
	clj -X:test

lint:
	clj -M:lint

uber: compile-cljs
	clj -T:build uber

compile-cljs:
	clj -X:compile-cljs
