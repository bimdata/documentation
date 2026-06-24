# Introduction
This document explains how to install BIMData.io applications on your servers.

You can test our products on our [SaaS Platform](https://platform.bimdata.io).

## How to have access to on-premises
You must contact our [sales services](mailto:contact@bimdata.io) to have access to the necessary resources for the installation.

## Architecture
The BIMData.io softwares are separated into multiple components, each one with its role.

### Web applications
Web applications are the components with which the users interact:
  - **BIMData Connect**: manage users and authentication,
  - **BIMData API**: to interact with the data,
  - **BIMData Platform**: allow the use of the previous components in our ergonomic interface.  
    The plaform is split in two components:
      - **Platform_front**
      - **Platform_back**
  - **BIMData Marketplace**: to manage differents plugins.
    The Marketplace is split in two components:
      - **Marketplace_front**
      - **Marketplace_back**
  - **BIMData Archive**:  to download zip archives from the DMS.
  - **BIMData Documentation**: a copy of our documentation, in the right version, so you can always access it.

### Workers
Workers are the components that will be used to extract, transform, convert or produce
data from models or other documents. There are a lot of different workers:
  - GLTF:
  - SVG:
  - XKT:
  - Preview:
  - Extract:
  - Export:
  - Merge:

### Third-party components
BIMData.io softwares need other components to work:
  - [Keycloak](https://www.keycloak.org/): an open-source identify and access management solution used for the authentication,
  - [Postgresql](https://www.postgresql.org/): an open-source relational database used to store structured data; Used by all BIMData.io backends and keycloak,
  - [RabbitMQ](https://www.rabbitmq.com): an open-source message broker used for asynchronous communications between our components. Used by Workers.

They can also use some optional components:
  - an SMTP server to send mail,
  - an Object Storage (like S3) to store uploaded files.

There are a lot of different components, it can be complicated to understand their interactions,
so we hope this diagram can help you to apprehend the different network flows:

![Diagram showing the communication between the different components](/images/on-premises/Onpremise-network_flow.png)
