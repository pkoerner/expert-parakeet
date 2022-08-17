# Setup Authentification

## Step 1: Setup GitHub OAuth2

See [the GitHub documentation](https://docs.github.com/en/developers/apps/building-oauth-apps/creating-an-oauth-app)

Keep in mind that we need access to the users email address.

## Step 2: Create a `.env` file containing your OAUTH Client-ID + Client-Secret:

```
# .env
OAUTH_CLIENT_ID=xxxxxxxxxxxxxxxxxxxx
OAUTH_CLIENT_SECRET=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

## Step 3: Load env variables and run

You can then load that `.env` file in your shell

```shell
. .env
export OAUTH_CLIENT_ID OAUTH_CLIENT_SECRET
```

And then run

```shell
make run
```