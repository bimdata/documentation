# Prerequisites
## Hardware

### Minimal

This can be use to test the solution and process small models.

| Server                             | CPU        | RAM      | Disk                          |
|:----------------------------------:|:----------:|:---------:|:----------------------------:|
| Applications + databases + workers | 4 cores    | 16 GB     | 64GB SSD + 2 * data size     |

### Recommended
| Server                     | CPU        | RAM       | Disk                      |
|:--------------------------:|:----------:|:---------:|:-------------------------:|
| Applications + Databases   | 4 cores    | 12 GB     | 64GB SSD + 2 * data size  |
| Model processing (workers) | 8 cores    | 32 GB     | 64 GB SSD                 |

The requirements are heavly dependants of your data, what you want to process, and at which speed.
For example, for bigs IFCs file with a lot of geometry compelxity, 32 GB of ram will not be enought.
But we are constanly working to reduce the memory consuption of our workers.
So don't hesitate to contact us, we can work with you to determine what's best for you need.

### High Availability
For the High availability, the prerequisites are the same as the *Recommended*
configuration with more servers: each server need to have at least two instances.

## Software
BIMData.io softwares are distributed with their dependencies in the form of Docker Images.
This facilitated the installation but makes it necessary to use a technology capable of
running the containers (Docker, Containerd, etc.).

Moreover, here the minimal version for the third party components:

| Component       | Needed Version |
| --------------- |:--------------:|
| Keycloak        | >=11           |
| Postgres        | >=11           |
| RabbitMQ        | AMQP 0-9-1     |

## Databases
Five databases are necessary for the proper functioning of our applications:
  - one for the API,
  - one for the platform,
  - one for Connect,
  - one for Keycloak.

One Postgresql extension is necessary: `hstore`. Our apps will create it when needed,
but the Postgresql user needs to have the `CREATE` permission on the database for that.
You can otherwise create it manually.

## Security
### Firewall
Here are the ports to open for the good communication of all the elements. Each port can be customized and the flow matrix must be adapted if necessary.

| Source             | Protocol | Port      | Destination         | Note                |
|:------------------:|:--------:|:---------:|:-------------------:|:-------------------:|
| Web-front-end      | TCP      | 8000      | API                 |                     |
| Web-front-end      | TCP      | 8000      | Connect             |                     |
| Web-front-end      | TCP      | 8000      | Platform (back)     |                     |
| Web-front-end      | TCP      | 80        | Platform (front)    |                     |
| Web-front-end      | TCP      | 8000      | Marketplace (back)  |                     |
| Web-front-end      | TCP      | 8000      | Marketplace (front) |                     |
| Web-front-end      | TCP      | 8080      | Keycloak            |                     |
| Web-front-end      | TCP      | 15672     | RabbitMQ            | Admin interface     |
| Web-front-end      | TCP      | 8080      | Archive             |                     |
| Web-front-end      | TCP      | 80        | Documentation       |                     |
||||||
| API                | TCP      | 80 / 443  | Web-front-end       |                     |
| Connect            | TCP      | 80 / 443  | Web-front-end       |                     |
| Platform (back)    | TCP      | 80 / 443  | Web-front-end       |                     |
| Marketplace (back) | TCP      | 80 / 443  | Web-front-end       |                     |
| Archive            | TCP      | 80 / 443  | Web-front-end       |                     |
| Workers            | TCP      | 80 / 443  | Web-front-end       |                     |
||||||
| API                | TCP      | 5432      | Postgres            |                     |
| Connect            | TCP      | 5432      | Postgres            |                     |
| Keycloak           | TCP      | 5432      | Postgres            |                     |
| Platform (back)    | TCP      | 5432      | Postgres            |                     |
| Marketplace (back) | TCP      | 5432      | Postgres            |                     |
||||||
| API                | TCP      | 5672      | RabbitMQ            |                     |
| Workers            | TCP      | 5672      | RabbitMQ            |                     |
||||||
| API                | TCP      | 587       | SMTP                | Optional            |
| Connect            | TCP      | 587       | SMTP                | Optional            |
| Platform (back)    | TCP      | 587       | SMTP                | Optional            |
| Workers            | TCP      | 587       | SMTP                | Optional            |
||||||
| Users              | TCP      | 80 / 443  | Web-front-end       |                     |
| Users              | TCP      | 80 / 443  | Object Storage      | Optional            |
||||||
| Archive            | TCP      | 80 / 443  | Object Storage      | Optional            |
