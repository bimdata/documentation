# Bimdata Platform Back

## URLs of Bimdata apps

| Variables         | Default value  | Description                 |
|-------------------|----------------|-----------------------------|
| API_URL           | ""             | Bimdata API URL.            |
| PLATFORM_URL      | ""             | Bimdata platform front URL. |
| PLATFORM_BACK_URL | ""             | Bimdata platform back URL.  |

## Database configuration
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
| REPLICA_DB_HOSTS     | None                | list of postgresql read-only replicas server address. |
| REPLICA_DB_PORTS     | Same as DB_PORT     | list of postgresql read-only replicas server port.    |
| REPLICA_DB_NAMES     | Same as DB_NAME     | list of postgresql read-only database name.           |
| REPLICA_DB_USERS     | Same as DB_USER     | list of postgresql read-only database user.           |
| REPLICA_DB_PASSWORDS | Same as DB_PASSWORD | list of postgresql read-only database user.           |

## OpenID configuration
::: v-pre
| Variables         | Default value | Description            |
|-------------------|---------------|------------------------|
| IAM_URL           |               | OIDC provider address. |
| IAM_CLIENT_ID     |               | OIDC client ID.        |
| IAM_CLIENT_SECRET |               | OIDC client secret.    |
:::

## Email configuration
| Variables            | Default value        | Description                   |
|----------------------|----------------------|-------------------------------|
| SMTP_HOST            |                      | SMTP server address.          |
| SMTP_PORT            |                      | SMTP server port.             |
| SMTP_USE_TLS         |                      | SMTP communication use TLS.   |
| SMTP_USER            |                      | SMTP authentication user.     |
| SMTP_PASS            |                      | SMTP authentication password. |
| DEFAULT_FROM_EMAIL   | "support@bimdata.io" | SMTP default from email.      |

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

## Other configuration
| Variables                        | Default value                          | Description                                        |
|----------------------------------|----------------------------------------|----------------------------------------------------|
| ENV                              | "development"                          |                                                    |
| ALLOWED_HOSTS                    | []                                     |                                                    |
| DEBUG                            | False                                  |                                                    |
| ADMIN_INTERFACE                  |                                        | Use to be able to deploy separate admin interface. |
| DJANGO_SETTINGS_MODULE           | "platform_back.settings.platform_back" | Use to be able to deploy separate admin interface. |
| SECRET_KEY                       | "SET_DEVELOPMENT_DJANGO_SECRET_KEY"    |                                                    |
| WEBHOOKS_SECRET                  | ""                                     |                                                    |
| MASTER_TOKEN                     | ""                                     |                                                    |
| REQUESTS_CA_BUNDLE               | ""                                     |                                                    |
