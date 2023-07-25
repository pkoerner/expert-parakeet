FROM clojure:tools-deps AS builder

WORKDIR /tmp
COPY build.clj deps.edn /tmp/
RUN clj -T:build clean
# The source code was not include until now intentionally!
# The above run of "clean" trigerred downloading all dependencies, resulting in a docker layer, that caches our dependencies, as long as they don't change.
# Without that, each change to any file would trigger a redownload of all dependencies.

COPY Makefile /tmp/
COPY src /tmp/src
RUN make uber

FROM amazoncorretto:11.0.19
COPY --from=builder /tmp/target/expert-parakeet-standalone.jar /app.jar
EXPOSE 8081/tcp
CMD java -jar /app.jar
