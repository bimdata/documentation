# Bimdata API

## URLs of Bimdata apps

| Variables         | Default value           | Description                 |
|-------------------|-------------------------|-----------------------------|
| API_URL           | "http://localhost:8081" | Bimdata API URL.            |
| APP_URL           | "http://localhost:8080" | Bimdata platform front URL. |
| PLATFORM_BACK_URL | "http://127.0.0.1:8082" | Bimdata platform back URL.  |

## Database configuration
There variables are needed for the database authentication.

| Variables            | Default value    | Description                |
|----------------------|------------------|----------------------------|
| DB_NAME              | "platform_back"  | Postgresql database name.  |
| DB_USER              | "platform_back"  | Postgresql user.           |
| DB_PASSWORD          | "platform_back"  | Postgresql password.       |
| DB_HOST              | "127.0.0.1"      | Postgresql server address. |
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

## RabbitMQ configuration
| Variables         | Default value | Description              |
|-------------------|---------------|--------------------------|
| RABBITMQ_HOST     | "127.0.0.1"   | RabbitMQ server address. |
| RABBITMQ_PORT     | "5672"        | RabbitMQ server port.    |
| RABBITMQ_USER     | "bimdata"     | RabbitMQ username.       |
| RABBITMQ_PASSWORD | "bimdata"     | RabbitMQ password.       |


## OpenID configuration
::: v-pre
| Variables                    | Default value           | Description            |
|------------------------------|-------------------------|------------------------|
| OIDC_OP_ISSUER               | "http://localhost:8000" | OIDC provider address. |
:::

## Email configuration
| Variables            | Default value          | Description                   |
|----------------------|------------------------|-------------------------------|
| SMTP_HOST            | "smtp.mandrillapp.com" | SMTP server address.          |
| SMTP_PORT            | 587                    | SMTP server port.             |
| SMTP_USE_TLS         | "True"                 | SMTP communication use TLS.   |
| SMTP_USER            | "BIMData.io"           | SMTP authentication user.     |
| SMTP_PASS            | False                  | SMTP authentication password. |
| DEFAULT_FROM_EMAIL   | "support@bimdata.io"   | SMTP default from email.      |

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
| Variables                        | Default value                                      | Description |
|----------------------------------|----------------------------------------------------|-------------|
| ENV                              | "development"                                      |             |
| ALLOWED_HOSTS                    |                                                    |             |
| ADMIN_INTERFACE                  | True                                               |             |
| SECRET_KEY                       | 7rvr*q1&_eqcetu^2x#2q+4&g8(&n&6*68+6xd#mxqs^6-u2rp |             |
| WEBHOOKS_SECRET                  | 123                                                |             |
| MASTER_TOKEN                     | 123                                                |             |
| REQUESTS_CA_BUNDLE               | ""                                                 |             |

FLUENTD_SERVER = environ.get("FLUENTD_SERVER", "172.17.0.1")
FLUENTD_PORT = environ.get("FLUENTD_PORT", 24224)
FLUENTD_TAG = "app.bimdata.platformback"
