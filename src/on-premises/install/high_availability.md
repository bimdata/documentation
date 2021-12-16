# High availability
Most of Bimdata's components are stateless, so we can simply increase the
number of replicas and run them across multiple nodes and use the leverage of
the internal mechanism of the orchestrator to distribute the charge across them.

However, for the third party components, it's expected that the user installs and
configure them to be highly available.
This include :
  - a highly available PostgreSQL cluster,
  - a highly available RabbitMQ cluster,
  - a highly available Keycloak cluser.

## Bimdata API
Bimdata API itself is stateless, but it manages the storage of uploaded data by users.
Therefore, you have two possibilities:
  - use a redundant swift object storage to store the data,
  - you need to provide a redundant storage shared between all the API containers.

## Bimdata Connect
Bimdata Connect itself is stateless, but it manages the storage of uploaded data by users.
Therefore, you have two possibilities:
  - use a redundant swift object storage to store the data,
  - you need to provide a redundant storage shared between all the Connect containers.
