## Building an uber jar
The app can be built to an uber-jar (a jar file containg the app and it's dependencies), ready to be run with `java -jar expert-parakeet-standalone.jar`.

The magic happens in the build.clj file using [clojure/tools.build](https://clojure.org/guides/tools_build).

Note that the App expects to be run behind a reverse proxy that handles TLS termination. All "http" requests are automatically 301 redirected to "https" as configured with `secure-site-defaults`.

## Shipping a container
A Dockerfile is provided that builds the uber jar within Docker in an empheral "builder" container and then packs it into a container with .

Voila: We have a build system ready to run in docker and a contanerized version of our app.

## Secrets
For continous deployment to fly.io, you need to provide your FLY_API_TOKEN to Githubs CI as a repository secret. See the [documentation from fly here](https://fly.io/docs/app-guides/continuous-deployment-with-github-actions/).

As noted in `authentification.md`, you need to provide OAUTH credentials to the application as environment variables. On fly.io, these should be setup as [runtime secrets](https://fly.io/docs/reference/secrets/).