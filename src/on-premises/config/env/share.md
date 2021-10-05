## Bimdata share

## URLs of Bimdata apps
| Variables   | Default value                    | Description             |
|-------------|----------------------------------|-------------------------|
| API_URL     | "https://api-staging.bimdata.io" | Bimdata API URL.        |

## Database configuration
There variables are needed for the database authentication.

| Variables            | Default value    | Description                |
|----------------------|------------------|----------------------------|
| DB_NAME              | "share"        | Postgresql database name.  |
| DB_USER              | "share"        | Postgresql user.           |
| DB_PASSWORD          | "share"        | Postgresql password.       |
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

## OpenID configuration
| Variables      | Default value                    | Description            |
|----------------|----------------------------------|------------------------|
| OIDC_OP_ISSUER | "https://iam-staging.bimdata.io" | OIDC provider address. |

## Email configuration
| Variables            | Default value          | Description                   |
|----------------------|------------------------|-------------------------------|
| SMTP_HOST            | "smtp.mandrillapp.com" | SMTP server address.          |
| SMTP_PORT            | 587                    | SMTP server port.             |
| SMTP_USE_TLS         | "True"                 | SMTP communication use TLS.   |
| SMTP_USER            | "BIMData.io"           | SMTP authentication user.     |
| SMTP_PASS            | False                  | SMTP authentication password. |
| DEFAULT_FROM_EMAIL   | "no-reply@bimdata.io"  | SMTP default from email.      |
| MODELS_SUPPORT_EMAIL | []                     |                               |

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
| Variables                        | Default value                                        | Description |
|----------------------------------|------------------------------------------------------|-------------|
| SECRET_KEY                       | "y^1o_0dz-vi7omq$6e@7%mhnj*mc4v+n8+3pvcxwcx-y#p50ty" |             |
| ADMIN_URL                        | "http://localhost:8000/admin"                        |             |
| ADMIN_INTERFACE                  | False                                                |             |
| ENV                              | "development"                                        |             |
| ALLOWED_HOSTS                    |                                                      |             |
