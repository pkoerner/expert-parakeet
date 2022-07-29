# How to run

Run Front & Backend:

```shell
docker-compose up -d
clj -X core/start-server
shadow-cljs watch app
```

Tests:

```shell
clj -A:test-runner
```


# Troubleshooting:

If `The required JS dependency "highlight.js/lib/core" is not available`.
Try running:

```shell
npm install highlight.js@latest
```
