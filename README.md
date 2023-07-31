# Expert Parakeet

Expert Parakeet is a platform for students to learn by solving assignments. When part of their active courses, students can be given exercises to work on. There is a multitude of possible question types ranging from multiple choice to free text. Students can get both immediate automated and human written feedback from correctors. The assignments can optionally be graded.

The goal is to replace similar platforms, due to difficulties operating them. It is developed by students accompanying the course Functional Programming at the Heinrich Heine University. To satisfy the expectations of this course the primary programming language is Clojure.

# How to Run

## Setup Authentication

**Step 1: Setup GitHub OAuth2**

See [the GitHub documentation](https://docs.github.com/en/developers/apps/building-oauth-apps/creating-an-oauth-app).

Home URL: `http://localhost:8081/`

Callback URL: `http://localhost:8081/oauth2/github/callback`

**Step 2: Create a `.env` file containing your OAUTH Client-ID + Client-Secret:**

```
# .env
OAUTH_CLIENT_ID=xxxxxxxxxxxxxxxxxxxx
OAUTH_CLIENT_SECRET=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

**Step 3: Load env variables and run**

You can then load that `.env` file in your shell

```shell
. .env
export OAUTH_CLIENT_ID OAUTH_CLIENT_SECRET
```

## Run Development Server

```shell
make dev-server
```

## Run Tests

```shell
make test
```

## Apply Formatting and Run the Linter:

```shell
# do this each time before you commit!
make format
make lint
```

# How to Build

## Building an Uber-Jar
The app can be built to an uber-jar (a jar file containing the app and it's dependencies), ready to be run with `java -jar expert-parakeet-standalone.jar`.

The magic happens in the build.clj file using [clojure/tools.build](https://clojure.org/guides/tools_build).

Note that the app expects to be run behind a reverse proxy that handles TLS termination. All "http" requests are automatically 301 redirected to "https" as configured with `secure-site-defaults`.

## Shipping a Container
A Dockerfile is provided that builds the uber-jar within Docker in an ephemeral "builder" container and then packs it into a container.

Voila: We have a build system ready to run in docker and a containerized version of our app.

## Secrets
For continous deployment to fly.io, you need to provide your FLY_API_TOKEN to Githubs CI as a repository secret. See the [documentation from fly here](https://fly.io/docs/app-guides/continuous-deployment-with-github-actions/).

As noted in [Setup Authentication](#setup-authentication), you need to provide OAUTH credentials to the application as environment variables. On fly.io, these should be setup as [runtime secrets](https://fly.io/docs/reference/secrets/).

# Wiki

Further information like the used Architecture, a Styleguide and a Glossary of used terms can be found in the [wiki](https://github.com/pkoerner/expert-parakeet/wiki).