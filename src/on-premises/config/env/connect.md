## Bimdata Connect

### URLs of Bimdata apps

| Variables    | Default value                           | Description                |
|--------------|-----------------------------------------|----------------------------|
| API_URL      | "http://localhost:8000"                 | Bimdata API URL.           |
| SITE_URL     | "http://localhost:8001"                 | Bimdata Connect URL.       |
| DOC_URL      | "https://developers-staging.bimdata.io" | Bimdata Documentation URL. |
| PLATFORM_URL | "https://platform-staging.bimdata.io"   | Bimdata Platform URL.      |

### Database configuration
There variables are needed for the database authentication.

| Variables            | Default value    | Description                |
|----------------------|------------------|----------------------------|
| DB_NAME              | "auth"           | Postgresql database name.  |
| DB_USER              | "bimdata"        | Postgresql user.           |
| DB_PASSWORD          | "bimdata"        | Postgresql password.       |
| DB_HOST              | "localhost"      | Postgresql server address. |
| DB_PORT              | "5432"           | Postgresql server port.    |

If your Postgresql cluster use read-only replicas, you can configure the API
with these variables to distribute the read-only requests through all of them.
Each of these variable is a comma separated list. If each replica have a different
configuration, the order in each list matter: the first element `REPLICA_DB_HOSTS`
will use the first port in `REPLICA_DB_PORTS` and so on.

| Variables            | Default value    | Description                                                                              |
|----------------------|------------------|------------------------------------------------------------------------------------------|
| REPLICA_DB_HOSTS     | ""               | list of postgresql read-only replicas server address.                                    |
| REPLICA_DB_PORTS     | ""               | list of postgresql read-only replicas server port. Needed if REPLICA_DB_HOSTS not empty. |
| REPLICA_DB_NAMES     | ""               | list of postgresql read-only database name. Take same value as DB_NAME by default.       |
| REPLICA_DB_USERS     | ""               | list of postgresql read-only database user. Take same value as DB_USER by default.       |
| REPLICA_DB_PASSWORDS | ""               | list of postgresql read-only database user. Take same value as DB_USER by default.       |

### OpenID configuration
::: v-pre
| Variables                   | Default value           | Description            |
|-----------------------------|-------------------------|------------------------|
| IAM_URL                     | "http://localhost:8080" | OIDC provider address. |
| IAM_ADMIN_LOGIN             | "keycloak@bimdata.io"   | OIDC admin username.   |
| IAM_ADMIN_PASSWORD          | "123"                   | OIDC admin password.   |
| IDENTITY_PROVIDER_CLIENT_ID | ""                      |                        |
:::

### Storage configuration
By default, the API use a local storage in `/opt/storage` to store all the uploaded datas.
But these datas are not serve by the API itself. It's necessary to configure a web
server, like other static files.
That's why we recommande using an object storage for production.

To enable Swift usage, you need to set `SWIFT_AUTH_URL`, and if this variable is
set, alors the other variables `SWIFT_*` need to be set.

| Variables            | Default value | Description                                        |
|----------------------|---------------|----------------------------------------------------|
| SWIFT_AUTH_URL       | ""            | Swift URL auth server                              |
| SWIFT_TENANT_ID      | ""            | Swift tenant ID.                                   |
| SWIFT_TENANT_NAME    | ""            | Swift tenant name.                                 |
| SWIFT_USERNAME       | ""            | Swift username .                                   |
| SWIFT_PASSWORD       | ""            | Swift password.                                    |
| SWIFT_CONTAINER_NAME | ""            | Swift container name use to store the files.       |

### Email configuration

| Variables          | Default value          | Description                   |
|--------------------|------------------------|-------------------------------|
| SMTP_HOST          | "smtp.mandrillapp.com" | SMTP server address.          |
| SMTP_PORT          | 587                    | SMTP server port.             |
| SMTP_USE_TLS       | "True"                 | SMTP communication use TLS.   |
| SMTP_USER          | "BIMData.io"           | SMTP authentication user.     |
| SMTP_PASS          | False                  | SMTP authentication password. |
| DEFAULT_FROM_EMAIL | "no-reply@bimdata.io"  | SMTP default from email.      |

### Image configuration

| Variables            | Default value | Description                                            |
|----------------------|---------------|--------------------------------------------------------|
| WORKERS              | 4             | Configure Gunicorn workers.                            |
| PORT                 | 8000          | Configure Gunicorn listen port.                        |
| CA_CERT              | ""            | Path of a certificate to add to container trusted CAs. |
| COMPILE_SCSS         | 0             | 0 or 1. Configure if django compilescss during init.   |
| COLLECT_STATIC       | 1             | 0 or 1. Configure if django collectstatic during init. |
| APPLY_MIGRATION      | 1             | 0 or 1. Configure if django migrate during init.       |
| PROCESS_TASKS        | 0             | 0 or 1. Configure if django process_tasks.             |

### Other configuration

| Variables                   | Default value                                        | Description |
|-----------------------------|------------------------------------------------------|-------------|
| API_TOKEN                   | "123"                                                |             |
| INVITATION_SECRET           | "123"                                                |             |
| INVITATION_CLIENT_ID        | "123"                                                |             |
| INVITATION_CLIENT_SECRET    | "123"                                                |             |
| IDENTITY_PROVIDER_CLIENT_ID | ""                                                   |             |
| SECRET_KEY                  | "121$6-+gg7z-2p(5-$ooz8p^xz^-hy$m2z1h(p4guv#!dpdt3c" |             |
| ENV                         | "development"                                        |             |
| ALLOWED_HOSTS               | []                                                   |             |
| ADMIN_INTERFACE             | False                                                |             |
| ADMIN_URL                   | "http://localhost:8001/admin"                        |             |
