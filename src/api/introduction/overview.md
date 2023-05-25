# Overview

BIMData API is a tool to interact with your models stored on BIMData’s servers. Once your account on BIMData Connect is created, you can:

- Create and manage clouds
- Create and manage projects
- Upload IFC, DWG, PDF, plan images
- Request data from clouds, projects, and models

![all API features](/assets/img/api/API-features.png)

## APIs

BIMData API is composed of five APIs:

### Model API

- Upload Models
  - IFC
  - DWF
  - DXF
  - PDF
  - Point Clouds
  - plan images
- Retrieve and update Model’s data in real-time
- 3D models throught [glTF format](https://www.khronos.org/gltf/)

### BCF API
- Create BCF
- Share BCFs with other services
- Build a complete automated error management flow
- We implement the [BCF 2.1 API](https://github.com/buildingSMART/BCF-API) defined by BuildingSMART

### Collaboration API
- Create clouds and projects
- Invite users
- Manage their rights
- Share models, data and documents


### Webhook API
- Get informed in real-time of your projects activities
- Build automated workflow

### Single Sign-On (SSO) API
- Log in on desktop, tablet, mobile
- Log in all your BIM Services through BIMData Connect: [https://connect.bimdata.io](https://connect.bimdata.io)
- Log in through your own SSO (OpenID Connect or SAMLv2)


## General Principles

BIMData API follows these general principles:

- All API access is over HTTPS

- All non-binary data is sent and received as JSON

- Errors are sent using standard HTTP response codes (400, 401, 403, 404)

- Actions are indicated by HTTP verbs: GET, POST, PUT, PATCH, DELETE

::: warning
Calls made over plain HTTP will respond a 302, redirecting to the same URL over HTTPS.
:::

The API Endpoint is: [https://api.bimdata.io](https://api.bimdata.io)

## OpenID Connect

BIMData API uses the [OpenID Connect](https://openid.net/connect/) protocol (technically very similar to the OAuth2 protocol). Any [OpenID library](https://openid.net/developers/libraries/) you may find online to help you implement the protocol also works with BIMData API.
