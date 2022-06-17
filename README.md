# How to run

Run:

```shell
clj -A:backend -X core/start-server
```

Tests:

```shell
clj -A:test-runner
```

Front & Backend:

```shell
docker-compose up -d
clj -A:backend -X core/start-server
shadow-cljs -A dev-frontend watch app
```
