## Bimdata Connect

### URLs of Bimdata apps

| Variables    | Default value | Description                |
|--------------|---------------|----------------------------|
| SITE_URL     | ""            | Bimdata Connect URL.       |
| API_URL      | ""            | Bimdata API URL.           |
| DOC_URL      | ""            | Bimdata Documentation URL. |
| PLATFORM_URL | ""            | Bimdata Platform URL.      |

### Database configuration
There variables are needed for the database authentication.

| Variables            | Default value    | Description                |
|----------------------|------------------|----------------------------|
| DB_HOST              |                  | Postgresql server address. |
| DB_PORT              |                  | Postgresql server port.    |
| DB_NAME              |                  | Postgresql database name.  |
| DB_USER              |                  | Postgresql user.           |
| DB_PASSWORD          |                  | Postgresql password.       |

If your Postgresql cluster use read-only replicas, you can configure the API
with these variables to distribute the read-only requests through all of them.
Each of these variable is a comma separated list. If each replica have a different
configuration, the order in each list matter: the first element `REPLICA_DB_HOSTS`
will use the first port in `REPLICA_DB_PORTS` and so on.

| Variables            | Default value       | Description                                           |
|----------------------|---------------------|-------------------------------------------------------|
| REPLICA_DB_HOSTS     | ""                  | list of postgresql read-only replicas server address. |
| REPLICA_DB_PORTS     | Same as DB_PORT     | list of postgresql read-only replicas server port.    |
| REPLICA_DB_NAMES     | Same as DB_NAME     | list of postgresql read-only database name.           |
| REPLICA_DB_USERS     | Same as DB_USER     | list of postgresql read-only database user.           |
| REPLICA_DB_PASSWORDS | Same as DB_PASSWORD | list of postgresql read-only database user.           |

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

| Variables                                | Default value                                                                                | Description                                                                                                        |
|------------------------------------------|----------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------|
| SWIFT_AUTH_URL                           |                                                                                              | The URL for the auth server.                                                                                       |
| SWIFT_USERNAME                           |                                                                                              | The username to use to authenticate.                                                                               |
| SWIFT_PASSWORD                           |                                                                                              | The key (password) to use to authenticate.                                                                         |
| SWIFT_AUTH_VERSION                       | 3                                                                                            | The version of the authentication protocol to use.                                                                 |
| SWIFT_TENANT_NAME / SWIFT_PROJECT_NAME   | None                                                                                         | The tenant/project name to use when authenticating.                                                                |
| SWIFT_TENANT_ID / SWIFT_PROJECT_ID       | None                                                                                         | The tenant/project id to use when authenticating.                                                                  |
| SWIFT_USER_DOMAIN_NAME                   | None                                                                                         | The domain name we authenticate to.                                                                                |
| SWIFT_USER_DOMAIN_ID                     | "default"                                                                                    | The domain id we authenticate to.                                                                                  |
| SWIFT_PROJECT_DOMAIN_NAME                | "default"                                                                                    | The domain name our project is located in.                                                                         |
| SWIFT_PROJECT_DOMAIN_ID                  | None                                                                                         | The domain id our project is located in.                                                                           |
| SWIFT_REGION_NAME                        | None                                                                                         | OpenStack region if needed. Check with your provider.                                                              |
| SWIFT_CONTAINER_NAME                     | None                                                                                         | The container in which to store the files.                                                                         |
| SWIFT_STATIC_CONTAINER_NAME              | None                                                                                         | Alternate container for storing staticfiles.                                                                       |
| SWIFT_AUTO_CREATE_CONTAINER              | True                                                                                         | Should the container be created if it does not exist?                                                              |
| SWIFT_AUTO_CREATE_CONTAINER_PUBLIC       | False                                                                                        | Set the auto created container as public on creation                                                               |
| SWIFT_AUTO_CREATE_CONTAINER_ALLOW_ORIGIN | "*"                                                                                          | Set the container's X-Container-Meta-Access-Control-Allow-Origin value, to support CORS requests.                  |
| SWIFT_AUTO_BASE_URL                      | True                                                                                         | Query the authentication server for the base URL.                                                                  |
| SWIFT_BASE_URL                           | None                                                                                         | The base URL from which the files can be retrieved.                                                                |
| SWIFT_NAME_PREFIX                        | ""                                                                                           | Prefix that gets added to all filenames.                                                                           |
| SWIFT_EXTRA_OPTIONS                      | {}                                                                                           | Extra options.                                                                                                     |
| SWIFT_STATIC_AUTO_BASE_URL               | True                                                                                         | Query the authentication server for the static base URL.                                                           |
| SWIFT_STATIC_BASE_URL                    | None                                                                                         | The base URL from which the static files can be retrieved,                                                         |
| SWIFT_STATIC_NAME_PREFIX                 | None                                                                                         | Prefix that gets added to all static filenames.                                                                    |
| SWIFT_CONTENT_TYPE_FROM_FD               | False                                                                                        | Determine the files mimetypes from the actual content rather than from their filename (default).                   |
| SWIFT_FULL_LISTING                       | True                                                                                         | Ensures to get whole directory contents (by default swiftclient limits it to 10000 entries)                        |
| SWIFT_AUTH_TOKEN_DURATION                | 60 * 60 * 23                                                                                 | How long a token is expected to be valid in seconds.                                                               |
| SWIFT_LAZY_CONNECT                       | True                                                                                         | If True swift connection will be obtained on first use, if False it will be obtained during storage instantiation. |
| SWIFT_GZIP_CONTENT_TYPES                 | [None,"text/plain","application/json","application/octet-stream","image/svg+xml","text/xml"] | List of content type that will be compressed.                                                                      |
| SWIFT_GZIP_COMPRESSION_LEVEL             | 4                                                                                            | Gzip compression level from 0 to 9. 0 = no compression, 9 = max compression                                        |
| SWIFT_GZIP_UNKNOWN_CONTENT_TYPE          | True                                                                                         | If set to True and the content-type can't be guessed, gzip anyway                                                  |
| SWIFT_CACHE_HEADERS                      | False                                                                                        | Headers cache on/off switcher                                                                                      |

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
| API_TOKEN                   | ""                                                   |             |
| INVITATION_SECRET           | ""                                                   |             |
| INVITATION_CLIENT_ID        | ""                                                   |             |
| INVITATION_CLIENT_SECRET    | ""                                                   |             |
| IDENTITY_PROVIDER_CLIENT_ID | ""                                                   |             |
| SECRET_KEY                  | "SET_DEVELOPMENT_DJANGO_SECRET_KEY"                  |             |
| ENV                         | "development"                                        |             |
| ALLOWED_HOSTS               | []                                                   |             |
| ADMIN_INTERFACE             | False                                                |             |
| ADMIN_URL                   | "http://localhost:8001/admin"                        |             |
| DEBUG                       | False                                                |             |
| DATA_UPLOAD_MAX_MEMORY_SIZE | 1 * 1024 ** 3                                        |             |
