# How to run

## Windows and Mac:
```shell
docker-compose up -d
clj -X core/start-server
shadow-cljs watch app
```

## Linux
```shell
docker-compose -f docker-compose-linux.yml up -d
clj -X core/start-server
shadow-cljs watch app 
```

## Tests:

```shell
clj -A:test-runner
```


# Troubleshooting:

If `The required JS dependency "highlight.js/lib/core" is not available`.
Try running:

```shell
npm install highlight.js@latest
```
