# Configuration
This lists all variables you can use to configure our playbook.

## applications.yml
### DNS configuration
::: v-pre
| Variables                   | Default value                            | Description                                            |
|-----------------------------|------------------------------------------|--------------------------------------------------------|
| app_dns_domain              | "domain.tld"                             | DNS (sub)domain use to build the app URLs.             |
| api_dns_name                | `"api.{{ app_dns_domain }}"`             | DNS name use for the API URL.                          |
| connect_dns_name            | `"connect.{{ app_dns_domain }}"`         | DNS name use for the Connect URL.                      |
| platform_back_dns_name      | `"platform-back.{{ app_dns_domain }}"`   | DNS name use for the Platform back URL.                |
| platform_front_dns_name     | `"platform.{{ app_dns_domain }}"`        | DNS name use for the Platform URL.                     |
| iam_dns_name                | `"iam.{{ app_dns_domain }}"`             | DNS name use for the Keycloak (identity provider) URL. |
| documentation_dns_name      |`"doc.{{ app_dns_domain }}"`              | DNS name use for the documentation URL.                |
| share_dns_name              |`"share.{{ app_dns_domain }}"`            | DNS name use for the share URL.                        |  
| archive_dns_name            |`"archive.{{ app_dns_domain }}"`          | DNS name use for the archive URL.                      |
:::

For example if:
```
app_dns_domain: bimdata.company.tld
api_dns_name: `"api.{{ app_dns_domain }}"`
```

The DNS name for the API will be: `api.bimdata.company.tld`.
Each name needs to be defined in the corresponding authoritative DNS server. This playbook does not manage this.

### SMTP Configuration
::: v-pre
| Variables          | Default value             | Description                                              |
|--------------------|---------------------------|----------------------------------------------------------|
| smtp_host          | ""                        | SMTP server address.                                     |
| smtp_port          | 587                       | SMTP server port.                                        |
| smtp_user          | ""                        | User used for the authentication on the SMTP server.     |
| smtp_pass          | `"{{ vault_smtp_pass }}"` | Password used for the authentication on the SMTP server. |
| smtp_use_tls       | true                      | If the SMTP connection should use TLS or not.            |
| smtp_default_email | ""                        | Email address use as default sender.                     |
:::

### Web configuration
| Variables           | Default value | Description                                       |
|---------------------|---------------|---------------------------------------------------|
| external_port_http  | 80            | TCP port for HTTP connections on the web server.  |
| external_port_https | 443           | TCP port for HTTPS connections on the web server. |
| max_upload_size     | "1g"          | Maximum upload file size (ifc… etc).              |

### Data storage
::: v-pre
| Variables                  | Default value                      | Description                                                 |
|----------------------------|------------------------------------|-------------------------------------------------------------|
| bimdata_path               | "/opt/bimdata"                     | Where we will install our needed files on the servers.      |
| bimdata_docker_volume_path | `"{{ bimdata_path }}/data"`        | Where will your data will be store on the servers.          |
| bimdata_dockerfiles_path   | `"{{ bimdata_path }}/dockerfiles"` | Where we store the dockerfiles use to start the containers. |
:::

Object storage (Swift):

::: v-pre
| Variables                    | Default value                    | Description                                         |
|------------------------------|----------------------------------|-----------------------------------------------------|
| swift_enabled                | false                            | Enable the swift storage or not.                    |
| swift_auth_url               | ""                               | The URL of the auth server.                         |
| swift_tenant_id              | ""                               | The tenant/project id to use when authenticating.   |
| swift_tenant_name            | ""                               | The tenant/project name to use when authenticating. |
| swift_username               | ""                               | The username to use to authenticate.                |
| swift_password               | "{{ vault_swift_password }}"     | The password/key to use to authenticate.            |
| swift_temp_url_key           | "{{ vault_swift_temp_url_key }}" | The temporary URL key ([see openstack documentation](https://docs.openstack.org/kilo/config-reference/content/object-storage-tempurl.html))      |
| swift_api_container_name     | ""                               | The container in which to store the API files.      |
| swift_connect_container_name | ""                               | The container in which to store the Connect files.  |
:::

### Applications configuration
::: v-pre
| Variables                           | Default value                                                              | Description                                                 |
|-------------------------------------|----------------------------------------------------------------------------|-------------------------------------------------------------|
| api_secret_key                      | `"{{ vault_api_secret_key }}"`                                             | You should not change this.                                 |
||||
| connect_secret_key                  | `"{{ vault_connect_secret_key }}"`                                         | You should not change this.                                 |
| connect_client_id                   | `"{{ 'connect_client_id' \| to_uuid(namespace=uuid_namespace) }}"`         | You should not change this.                                 |
| connect_client_secret               | `"{{ 'connect_client_secret' \| to_uuid(namespace=uuid_namespace) }}"`     | You should not change this.                                 |
| connect_invitation_secret           | `"{{ vault_connect_invitation_secret }}"`                                  | You should not change this.                                 |
| connect_invitation_client           | `"{{ 'connect_invitation_client' \| to_uuid(namespace=uuid_namespace) }}"` | You should not change this.                                 |
| connect_invitation_client_secret    | `"{{ vault_connect_invitation_client_secret }}"`                           | You should not change this.                                 |
||||
| platform_back_secret_key            | `"{{ vault_platform_back_secret_key }}"`                                   | You should not change this.                                 |
| platform_back_webhook_secret        | `"{{ vault_platform_back_webhook_secret }}"`                               | You should not change this.                                 |
||||
| platform_front_client_id            | `"{{ 'platform_front_client_id' | to_uuid(namespace=uuid_namespace) }}"`   | You should not change this.                                 |
||||
| iam_user                            | "admin"                                                                    | Keycloak administrator user.                                |
| iam_password                        | `"{{ vault_iam_password }}"`                                               | Keycloak administrator password.                            |
||||
| workers_export_instance             | 1                                                                          | Number of replicas deployed on *each* server.               |
| workers_export_cpu                  | 1                                                                          | Number of CPUs allocated for each replica.                  |
| workers_gltf_instance               | 1                                                                          | Number of replicas deployed on *each* server.               |
| workers_gltf_cpu                    | 1                                                                          | Number of CPUs allocated for each replica.                  |
| workers_extract_instance            | 1                                                                          | Number of replicas deployed on *each* server.               |
| workers_extract_cpu                 | 1                                                                          | Number of CPUs allocated for each replica.                  |
| workers_extract_quantities_instance | 1                                                                          | Number of replicas deployed on *each* server.               |
| workers_extract_quantities_cpu      | 1                                                                          | Number of CPUs allocated for each replica.                  |
| workers_svg_instance                | 1                                                                          | Number of replicas deployed on *each* server.               |
| workers_svg_cpu                     | 1                                                                          | Number of CPUs allocated for each replica.                  |
| workers_bvh_instance                | 1                                                                          | Number of replicas deployed on *each* server.               |
| workers_bvh_cpu                     | 1                                                                          | Number of CPUs allocated for each replica.                  |
| workers_optimize_instance           | 1                                                                          | Number of replicas deployed on *each* server.               |
| workers_optimize_cpu                | 1                                                                          | Number of CPUs allocated for each replica.                  |
| workers_merge_instance              | 1                                                                          | Number of replicas deployed on *each* server.               |
| workers_merge_cpu                   | 1                                                                          | Number of CPUs allocated for each replica.                  |
| workers_xkt_instance                | 1                                                                          | Number of replicas deployed on *each* server.               |
| workers_xkt_cpu                     | 1                                                                          | Number of CPUs allocated for each replica.                  |
| workers_preview_instance            | 1                                                                          | Number of replicas deployed on *each* server.               |
| workers_preview_cpu                 | 1                                                                          | Number of CPUs allocated for each replica.                  |
||||
| uuid_namespace                      | `"{{ app_dns_domain \| to_uuid }}"`                                        | Use to generate needed UUIDs.                               |
| master_token                        | `"{{ vault_master_token }}"`                                               | Master token use for authentication between workers and API.|
| app_env                             | "on-premises"                                                              | Environnement definition for some app. Must not be changed. |
| mapbox_token                        | `"{{ vault_mapbox_token }}"`                                               | Token for authentication on the Mapbox API.                 |
:::

## connectivity.yml
### Ansible connectivity
| Variables                  | Default value      | Description                   |
|----------------------------|--------------------|-------------------------------|
| ansible_python_interpreter | "/usr/bin/python3" | Force the use of python3.     |
| ansible_ssh_pipelining     | true               | Improve ansible performances. |

### SSH Bastion
If you can't use SSH directly from this computer to the servers where you want to install
our applications, you can use a *bastion* that will proxy the ssh connections.

::: v-pre
| Variables                 | Default value                   | Description                                    |
|---------------------------|---------------------------------|------------------------------------------------|
| use_bastion               | false                           | Configure if you want to use a bastion or not. |
| bastion_ssh_addr          | ""                              | Bastion adresse use for the ssh connection.    |
| bastion_ssh_port          | 22                              | Bastion TCP port use for the ssh connection.   |
| bastion_ssh_user          | `"{{ lookup('env', 'USER') }}"` | SSH user for authentication on the Bastion.    |
| bastion_ssh_extra_options | *undefined*                     | String to add other SSH options.               |
:::

### Proxy
If your servers can't access the web directly, you may need to configure a proxy
to access our docker registry for example.

| Variables   | Default value | Description                                            |
|-------------|---------------|--------------------------------------------------------|
| http_proxy  | ""            | HTTP proxy address.                                    |
| https_proxy | ""            | HTTPS proxy address.                                   |
| no_proxy    | []            | List of domains / IP where the proxy must not be used. |

## databases.yml
### External postgres cluster
| Variables        | Default value | Description                                                                      |
|------------------|---------------|----------------------------------------------------------------------------------|
| use_external_db  | false         | Configure if you want to use a postgres instance manage by this playbook or not. |
| external_db_host | ""            | Postgres cluster address use for connection if use_external_db: true.            |
| external_db_port | 5432          | Postgres cluster TCP port use for connection if use_external_db: true.           |

### Databases
::: v-pre
| Variables               | Default value                           | Description                            |
|-------------------------|-----------------------------------------|----------------------------------------|
| db_api_name             | "api"                                   | Database name for the API.             |
| db_api_user             | "api"                                   | Postgres user for the API.             |
| db_api_password         | `"{{ vault_db_api_password }}"`         | Postgres password for the API.         |
||||
| db_connect_name         | "connect"                               | Database name for Connect.             |
| db_connect_user         | "connect"                               | Postgres user for Connect.             |
| db_connect_password     | `"{{ vault_db_connect_password }}"`     | Postgres password for Connect.         |
||||
| db_platform_name        | "platform"                              | Database name for the Platform.        |
| db_platform_user        | "platform"                              | Postgres user for the Platform.        |
| db_platform_password    | `"{{ vault_db_platform_password }}"`    | Postgres password for the Platform.    |
||||
| db_iam_name             | "iam"                                   | Database name for Keycloak.            |
| db_iam_user             | "iam"                                   | Postgres user for Keycloak.            |
| db_iam_password         | `"{{ vault_db_iam_password }}"`         | Postgres password for Keycloak.        |
||||
| db_share_name           | "share"                                 | Database name for Share.               |
| db_share_user           | "share"                                 | Postgres user for Share.               |
| db_share_password       | `"{{ vault_db_share_password }}"`       | Postgres password for Share.           |
:::

If `use_external_db: false` AND if the [db] server is different from the [app] server (in the inventory)
each Postgres instance will need to use its own TCP port. There are defined with these variables.
You will need to configure your firewall: the [app] server will need to be able to communication
with the [db] server on these ports.

::: v-pre
| Variables                    | Default value                                                          | Description                                                                              |
|------------------------------|------------------------------------------------------------------------|------------------------------------------------------------------------------------------|
| db_api_external_port         | 5432                                                                   | Postgres external port for the API.                                                      |
| db_connect_external_port     | 5433                                                                   | Postgres external port for Connect.                                                      |
| db_platform_external_port    | 5434                                                                   | Postgres external port for the Platform.                                                 |
| db_iam_external_port         | 5435                                                                   | Postgres external port for Keycloak.                                                     |
| db_share_external_port       | 5436                                                                   | Postgres external port for Share.                                                        |
| db_server_addr               | `"{{ hostvars[groups['db'][0]]['ansible_default_ipv4']['address'] }}"` | Use to determine the IP that will be use for Postgres connection between [app] and [db]. |
:::

## docker_images.yml
::: v-pre
| Variables                               | Default value                                              | Description                                                               |
|-----------------------------------------|------------------------------------------------------------|---------------------------------------------------------------------------|
| docker_private_registry                 | "docker-registry.bimdata.io"                               | Define the registry address from which most of the images will come from. |
| docker_registries                       |                                                            | List of registries informations use to configure docker authentication.   |
| docker_rabbitmq_image                   | "rabbitmq"                                                 | RabbitMQ docker image (use Dockerhub by default).                         |
| docker_rabbitmq_tag                     | "3.8-management-alpine"                                    | RabbitMQ docker tag.                                                      |
| docker_postgres_image                   | "postgres"                                                 | Postgres docker image (use Dockerhub by default).                         |
| docker_postgres_tag                     | "10-alpine"                                                | Postgres docker tag.                                                      |
| docker_nginx_image                      | "jwilder/nginx-proxy"                                      | Nginx docker image (use Dockerhub by default).                            |
| docker_nginx_tag                        | "alpine"                                                   | Nginx docker tag.                                                         |
| docker_api_image                        | `"{{ docker_private_registry }}/on-prem/api"`              | API docker image.                                                         |
| docker_api_tag                          | latest                                                     | API docker tag.                                                           |
| docker_connect_image                    | `"{{ docker_private_registry }}/on-prem/connect"`          | Connect docker image.                                                     |
| docker_connect_tag                      | latest                                                     | Connect docker tag.                                                       |
| docker_platform_back_image              | `"{{ docker_private_registry }}/on-prem/platform_back"`    | Platform back docker image.                                               |
| docker_platform_back_tag                | latest                                                     | Platform back docker tag.                                                 |
| docker_platform_front_image             | `"{{ docker_private_registry }}/on-prem/platform"`         | Platform front docker image.                                              |
| docker_platform_front_tag               | latest                                                     | Platform front docker tag.                                                |
| docker_iam_image                        | `"{{ docker_private_registry }}/on-prem/iam"`              | Keycloak docker image.                                                    |
| docker_iam_tag                          | latest                                                     | Keycloak docker tag.                                                      |
| docker_documentation_image              | `"{{ docker_private_registry }}/on-prem/documentation"`    | Documentation docker image.                                               |
| docker_documentation_tag                | latest                                                     | Documentation docker tag.                                                 |
| docker_share_image                      | `"{{ docker_private_registry }}/on-prem/share"`            | Share docker image.                                                       |
| docker_share_tag                        | latest                                                     | Share docker tag.                                                         |
| docker_archive_image                    | `"{{ docker_private_registry }}/on-prem/archive"`          | Archive docker image.                                                     |
| docker_archive_tag                      | latest                                                     | Archive docker tag.                                                       |
| docker_workers_export_image             | `"{{ docker_private_registry }}/on-prem/workers"`          | Worker export docker image.                                               |
| docker_workers_export_tag               | latest                                                     | Worker export docker tag.                                                 |
| docker_workers_gltf_image               | `"{{ docker_private_registry }}/on-prem/workers"`          | Worker GLTF docker image.                                                 |
| docker_workers_gltf_tag                 | latest                                                     | Worker GLTF docker tag.                                                   |
| docker_workers_extract_image            | `"{{ docker_private_registry }}/on-prem/workers"`          | Worker extract docker image.                                              |
| docker_workers_extract_tag              | latest                                                     | Worker extract docker tag.                                                |
| docker_workers_extract_quantities_image | `"{{ docker_private_registry }}/on-prem/workers"`          | Worker extract quantities docker image.                                   |
| docker_workers_extract_quantities_tag   | latest                                                     | Worker extract quantities docker tag.                                     |
| docker_workers_svg_image                | `"{{ docker_private_registry }}/on-prem/workers"`          | Worker SVG docker image.                                                  |
| docker_workers_svg_tag                  | latest                                                     | Worker SVG docker tag.                                                    |
| docker_workers_bvh_image                | `"{{ docker_private_registry }}/on-prem/workers"`          | Worker BVH docker image.                                                  |
| docker_workers_bvh_tag                  | latest                                                     | Worker BVH docker tag.                                                    |
| docker_workers_optimize_image           | `"{{ docker_private_registry }}/on-prem/workers"`          | Worker optimize docker image.                                             |
| docker_workers_optimize_tag             | latest                                                     | Worker optimize docker tag.                                               |
| docker_workers_merge_image              | `"{{ docker_private_registry }}/on-prem/workers"`          | Worker merge docker image.                                                |
| docker_workers_merge_tag                | latest                                                     | Worker merge docker tag.                                                  |
| docker_workers_xkt_image                | `"{{ docker_private_registry }}/on-prem/xkt_worker"`       | Worker XKT docker image.                                                  |
| docker_workers_xkt_tag                  | latest                                                     | Worker XKT docker tag.                                                    |
| docker_workers_preview_image            | `"{{ docker_private_registry }}/on-prem/viewer_360"`       | Worker preview docker image.                                              |
| docker_workers_preview_tag              | latest                                                     | Worker preview docker tag.                                                |
:::

## docker.yml
::: v-pre
| Variables                  | Default value                                                                                                                                       | Description                                                                                                  |
|----------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------|
| install_docker             | true                                                                                                                                                | Install Docker or not (if not, docker need to be already installed).                                         |
| docker_apt_dependencies    | ["python3-docker", "gnupg", "apt-transport-https", "ca-certificates"]                                                                               | List of APT packages to install before Docker.                                                               |
| docker_apt_release_channel | "stable"                                                                                                                                            | Docker version that will be installed.                                                                       |
| docker_repo_base_url       | "https://download.docker.com/linux"                                                                                                                 | Docker APT repository.                                                                                       |
| docker_apt_key_url         | `"{{ docker_repo_base_url }}/{{ ansible_distribution | lower }}/gpg"`                                                                               | URL of APT GPG key needed for Docker installation.                                                           |
| docker_apt_repo_url        | `"{{ docker_repo_base_url }}/{{ ansible_distribution | lower }}"`                                                                                   | URL of APT repository for Docker installation.                                                               |
||||
| docker_edition             | ce                                                                                                                                                  | Docker edition that will be installed ('ee' for 'Enterprise Edition' or 'ce' for 'Community Edition')        |
| docker_pkg_name            | `"docker-{{ docker_edition }}"`                                                                                                                     | Docker APT package name that will be installed.                                                              |
| docker_pkg_version         | ""                                                                                                                                                  | Docker APT package version that will be installed.                                                           |
| docker_pkg_version_hold    | `"{{ docker_pkg_version | default(false) | ternary(true, false) }}"`                                                                                | Should APT be configure to hold the Docker version (false by default, true if docker_pkg_version is defined) |
||||
| docker_svc_name            | "docker"                                                                                                                                            | Docker service name.                                                                                         |
| docker_install_compose     | true                                                                                                                                                | Install Docker compose or not (if noot, need to be already installed.)                                       |
| docker_compose_version     | "1.29.2"                                                                                                                                            | Docker compose version to install.                                                                           |
| docker_compose_url         | `"https://github.com/docker/compose/releases/download/{{ docker_compose_version }}/docker-compose-{{ ansible_system }}-{{ ansible_architecture }}"` | URL to download docker compose.                                                                              |
| docker_compose_path        | "/usr/local/bin/docker-compose"                                                                                                                     | Path of where Docker compose will be installed.                                                              |
||||
| docker_use_extra_hosts     | false                                                                                                                                               | Add /etc/hosts value in containers if needed.                                                                |
| docker_extra_hosts         | []                                                                                                                                                  | list of hosts that will be added to /etc/hosts of containers.                                                |
:::

## nginx.yml
You should not have to modify these variables in most cases.

| Variables            | Default value | Description                 |
|----------------------|---------------|-----------------------------|
| nginx_custom_conf    |               | Nginx custom configuration. |
| nginx_vhost_override |               | Nginx vhost configuration.  |

## rabbitmq.yml
::: v-pre
| Variables               | Default value                     | Description                                                |
|-------------------------|-----------------------------------|------------------------------------------------------------|
| use_external_rabbitmq   | false                             | Set to true if you want to use your own RabbitMQ instance. |
| external_rabbitmq_host  | ""                                | RabbitMQ cluster address if use_external_rabbitmq: true.   |
| external_rabbitmq_port  | 5672                              | RabbitMQ cluster TCP port if use_external_rabbitmq: true.  |
| rabbitmq_user           | "bimdata"                         | RabbitMQ user use for authentication.                      |
| rabbitmq_password       | `"{{ vault_rabbitmq_password }}"` | RabbitMQ password use for authentication.                  |
| rabbitmq_admin_dns_name | `"rabbitmq.{{ app_dns_domain }}"` | RabbitMQ dns name.                                         |
| rabbitmq_external_port  | 5672                              | RabbitMQ external port.                                    |
| rabbitmq_server_addr    | `"{{ rabbitmq_admin_dns_name }}"` | RabbitMQ server address.                                   |
:::

## tls.yml
::: v-pre
| Variables                  | Default value                             | Description                                                                                                                    |
|----------------------------|-------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------|
| tls_enabled                | false                                     | Enable external TLS or not.                                                                                                    |
| nginx_use_pregen_dh        | true                                      | Use pre-defined diffie hellman parameters. If false it'll generate new one. This take a lot of time.                           |
| tls_ca_certificate         | ""                                        | CA certificate of the CA used to sign the certificates for the applications. (PEM format.)                                     |
| tls_subca_certificates     | []                                        | If a complexe CA architecture is used, tls_ca_certificate should contain the main CA, and this list all the intermediate ones. |
| tls_api_key                | `"{{ vault_tls_api_key }}"`               | API TLS key (PEM format).                                                                                                      |
| tls_api_cert               | ""                                        | API TLS Certificate (PEM format).                                                                                              |
| tls_connect_key            | `"{{ vault_tls_connect_key }}"`           | Connect TLS key (PEM format).                                                                                                  |
| tls_connect_cert           | ""                                        | Connect TLS Certificate (PEM format).                                                                                          |
| tls_platform_back_key      | `"{{ vault_tls_platform_back_key }}"`     | Platform back TLS key (PEM format).                                                                                            |
| tls_platform_back_cert     | ""                                        | Platform back TLS Certificate (PEM format).                                                                                    |
| tls_platform_front_key     | `"{{ vault_tls_platform_front_key }}"`    | Platform front TLS key (PEM format).                                                                                           |
| tls_platform_front_cert    | ""                                        | Platform front TLS Certificate (PEM format).                                                                                   |
| tls_iam_key                | `"{{ vault_tls_iam_key }}"`               | Keycloak TLS key (PEM format).                                                                                                 |
| tls_iam_cert               | ""                                        | Keycloak TLS Certificate (PEM format).                                                                                         |
| tls_rabbitmq_admin_key     | `"{{ vault_tls_rabbitmq_admin_key }}"`    | RabbitMQ TLS key (PEM format). (Only needed if use_external_rabbitmq: false.)                                                  |
| tls_rabbitmq_admin_cert    | ""                                        | RabbitMQ TLS Certificate (PEM format). (Only needed if use_external_rabbitmq: false.)                                          |
| tls_documentation_key      | `"{{ vault_tls_documentation_key }}"`     | Documentation TLS key (PEM format).                                                                                            |
| tls_documentation_cert     | ""                                        | Documentation TLS Certificate (PEM format).                                                                                    |
| tls_share_key              | `"{{ vault_tls_share_key }}"`             | Share TLS key (PEM format).                                                                                                    |
| tls_share_cert             | ""                                        | Share TLS Certificate (PEM format).                                                                                            |
| tls_archive_key            | `"{{ vault_tls_archive_key }}"`           | Archive TLS key (PEM format).                                                                                                  |
| tls_archive_cert           | ""                                        | Archive TLS Certificate (PEM format).                                                                                          |
:::

## vault.yml
In this file, all private pieces of information are defined. Like passwords, TLS keys, or other security stuff.
You should replace all the values and encrypt the file with [`ansible-vault`](https://docs.ansible.com/ansible/latest/user_guide/vault.html).
