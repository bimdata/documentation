# Introduction
This document explains how to install BIMData.io applications on your servers.

You can test our products on our [SaaS Platform](https://connect.bimdata.io/signup/?next=https://platform.bimdata.io).

## How to have access to on-premises
You must have contacted our sales services to have access to the necessary resources for the installation.

## Architecture
The BIMData.io softwares are separated into multiple components, each one with its role.

### Web applications
Web applications are the components with which the users interact:
  - **Bimdata Connect**: manage the authentication and the right permissions,
  - **Bimdata API**: to interact with the data,
  - **Bimdata Platform**: allow the use of the previous components in our ergonomic interface.  
    The plaform is split in two components:
      - **Platform_front**
      - **Platform_back**
  - **Bimdata Marketplace**: to manage differents plugins.
    The Marketplace is split in two components:
      - **Marketplace_front**
      - **Marketplace_back**
  - **Bimdata Share**
  - **Bimdata Archive**

### Workers
Workers are the components that will be used to extract, transform, convert or produce
data from models or other documents. There are a lot of different workers:
  - GLTF:
  - SVG:
  - BVH:
  - XKT:
  - Preview:
  - Optimize:
  - Extract:
  - Export:
  - Merge:

### Third-party components
Bimdata.io softwares need other components to work:
  - [Keycloak](https://www.keycloak.org/): an open-source identify and access management solution used for the authentication,
  - [Postgresql](https://www.postgresql.org/): an open-source relational database used to store structured data,
  - [RabbitMQ](https://www.rabbitmq.com): an open-source message broker used for asynchronous communications between our components.

They can also use some optional components:
  - an SMTP server used to send mail,
  - an Object Storage (like S3) used to store uploaded files.

There are a lot of different components, it can be complicated to understand their interactions,
so we hope this diagram can help you to apprehend the different network flows:

![Diagram showing the communication between the different components](/assets/img/on-premises/Onpremise-network_flow.png)
