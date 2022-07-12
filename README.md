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
shadow-cljs -A dev-frontend watch app # clj -A:dev-frontend -M:shadow-cljs  watch app
```

# Troubleshooting:

If `The required JS dependency "highlight.js/lib/core" is not available`.
Try running:

```shell
npm install highlight.js@latest
```
