# Bimdata workers

## Workers
### URLs of Bimdata apps
| Variables   | Default value           | Description             |
|-------------|-------------------------|-------------------------|
| API_URL     | "http://0.0.0.0:8000"   | Bimdata API URL.        |

### RabbitMQ configuration
| Variables         | Default value | Description              |
|-------------------|---------------|--------------------------|
| RABBITMQ_HOST     | "127.0.0.1"   | RabbitMQ server address. |
| RABBITMQ_PORT     | "5672"        | RabbitMQ server port.    |
| RABBITMQ_USER     | "guest"       | RabbitMQ username.       |
| RABBITMQ_PASSWORD | "guest"       | RabbitMQ password.       |

### Email configuration
| Variables            | Default value          | Description                   |
|----------------------|------------------------|-------------------------------|
| SMTP_HOST            | "smtp.mandrillapp.com" | SMTP server address.          |
| SMTP_PORT            | 587                    | SMTP server port.             |
| SMTP_USE_TLS         | "True"                 | SMTP communication use TLS.   |
| SMTP_USER            | "BIMData.io"           | SMTP authentication user.     |
| SMTP_PASS            | ""                     | SMTP authentication password. |
| DEFAULT_FROM_EMAIL   | "bug@bimdata.io"       | SMTP default from email.      |
| MODELS_SUPPORT_EMAIL | []                     |                               |
| DEFAULT_TO_EMAILS    | process-errors@bimdata.io,maquettes-en-erreur@boostinlyon.flowdock.com | |

### Other configuration
| Variables                        | Default value                 | Description |
|----------------------------------|-------------------------------|-------------|
| MASTER_TOKEN                     | "123"                         |             |
| ENV                              | "development"                 |             |

## Workers xkt
### URLs of Bimdata apps
| Variables   | Default value                    | Description             |
|-------------|----------------------------------|-------------------------|
| API_URL     | "https://api-staging.bimdata.io" | Bimdata API URL.        |

### RabbitMQ configuration
| Variables         | Default value | Description              |
|-------------------|---------------|--------------------------|
| RABBITMQ_HOST     | "127.0.0.1"   | RabbitMQ server address. |
| RABBITMQ_PORT     | "5672"        | RabbitMQ server port.    |
| RABBITMQ_USER     | "guest"       | RabbitMQ username.       |
| RABBITMQ_PASSWORD | "guest"       | RabbitMQ password.       |

## Worker headless viewer 360
### URLs of Bimdata apps
| Variables   | Default value                    | Description             |
|-------------|----------------------------------|-------------------------|
| API_URL     | "https://api-staging.bimdata.io" | Bimdata API URL.        |

### RabbitMQ configuration
| Variables         | Default value | Description              |
|-------------------|---------------|--------------------------|
| RABBITMQ_HOST     | "127.0.0.1"   | RabbitMQ server address. |
| RABBITMQ_PORT     | "5672"        | RabbitMQ server port.    |
| RABBITMQ_USER     | "guest"       | RabbitMQ username.       |
| RABBITMQ_PASSWORD | "guest"       | RabbitMQ password.       |

## Image configuration
| Variables            | Default value | Description                                            |
|----------------------|---------------|--------------------------------------------------------|
| CA_CERT              | ""            | Path of a certificate to add to container trusted CAs. |
