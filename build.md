## Building an uber jar
The app can be built to an uber-jar (a jar file containg the app and it's dependencies), ready to be run with `java -jar expert-parakeet-standalone.jar`.

The magic happens in the build.clj file using [clojure/tools.build](https://clojure.org/guides/tools_build).


## Shipping a container
A Dockerfile is provided that builds the uber jar within Docker in an empheral "builder" container and then packs it into a container with .

Voila: We have a build system ready to run in docker and a contanerized version of our app.