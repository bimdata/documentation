## Overview

BIMData API is a tool to interact with your models stored on BIMData’s servers. Once your account on BIMData Connect is created, you can:

- Create and manage clouds

- Create and manage projects

- Upload IFC files

- Request data from clouds, projects, and models

![all API features](/assets/img/api/API-features.png)

BIMData API is composed of five APIs: an IFC API, a BCF API, a Collaboration API, a Checker API and a SSO API.
<div style="text-align: center;">
  <img src="/assets/img/api/API-organisation.png" width="350">
</div>

## Basics

BIMData API follows these general principles:

- All API access is over HTTPS

- All non-binary data is sent and received as JSON

- Errors are sent using standard HTTP response codes (400, 404, 403)

- Actions are indicated by HTTP verbs: GET, POST, PUT, PATCH, DELETE

::: warning
Calls made over plain HTTP will respond a 302, redirecting to the same URL over HTTPS.
:::

The API Endpoint is: [https://api-staging.bimdata.io](https://api-staging.bimdata.io)

## Details

### IFC API

- Upload Models
- Retrieve and update Model’s data in real-time
- We support the following implementations:
- IFC Spacial Structure
- IFC Zones
- IFC Classifications
- IFC Systems
- IFC Layers
- IFC Properties and PropertySets
- 3D models throught [glTF format](https://www.khronos.org/gltf/)

::: tip
For more details, see: our [IFC Guide](./guides#IFC).
:::


### BCF API
- Create BCF
- Share BCFs with other services
- Build a complete automated error management flow
- We implement the [BCF 2.1 API](https://github.com/buildingSMART/BCF-API) defined by BuildingSMART

### Collaboration API
- Create projects
- Invite users
- Manage their rights
- Share models, data and documents

### Checker API
- Validate your Models

### Single Sign-On (SSO) API
- Log in on desktop, tablet, mobile
- Log in all your BIM Services through BIMData Connect: [https://connect-staging.bimdata.io](https://connect-staging.bimdata.io)
- Log in through your own SSO (OpenID Connect or SAMLv2)

## First steps

### OpenID

BIMData API uses the OpenID Connect protocol (technically very similar to the OAuth2 protocol). Any OpenID library you may find online to help you implement the protocol also works with BIMData API.

### Make API calls

To make API calls, you must retrieve an Access Token. There are many ways to get one depending on the context or your application. We’ll use the simplest one for this ‘Getting Started’ and you can find the details of all methods in the tutorial dedicated to the Access Token.

Create your application
The first step is to create your application: as described in the create your application documentation. For the Getting Started, you want a confidential app. That means the app is able to keep a secret (a JavaScript app or a mobile app can’t because the code, and therefore the secret, is visible by the user)

::: tip Note
By default, an app has only access to its data. It can’t see data from another app or another user.
For example, your app won’t be able to see the data you have put on the BIMData Platform.
:::

### Get your Access Token
Once you have created your app, you have a client_id and a client_secret. You can exchange them for an Access Token through an HTTP call.

::: tip See also
See Get Access Token documentation for further information
:::

Once you have the access_token, you can start doing API calls!

### Create your Cloud

The first thing to do is to create a Cloud. A Cloud is a configurable space where projects are created. All projects in this Cloud share the Cloud’s configuration.

A Cloud just needs a name:

```bash
curl --request POST 'https://api-staging.bimdata.io/cloud' \
 --header 'Content-Type: application/json' \
 --header 'Authorization: Bearer YOUR_ACCESS_TOKEN' \
 --data '{"name": "My First Cloud"}'
```

You get a Cloud ID in the response. We need it for our next API call.

### Upload your first Model
Once you have your first Cloud, you may want to create your first Project and upload your first Model. For this tutorial, use a special endpoint that creates a demo Project with our demo Model: createDemo.

```bash
curl --request POST 'https://api-staging.bimdata.io/cloud/YOUR_CLOUD_ID/create-demo' \
 --header 'Content-Type: application/json' \
 --header 'Authorization: Bearer YOUR_ACCESS_TOKEN'
```

You receive back the created Project (its ID).

### Retrieve our Model

Let’s retrieve the Model in the demo using the getIfcs endpoint!

```bash
curl --request GET 'https://api-staging.bimdata.io/cloud/YOUR_CLOUD_ID/project/YOUR_PROJECT_ID/ifc' \
 --header 'Content-Type: application/json' \
 --header 'Authorization: Bearer YOUR_ACCESS_TOKEN'
```
You get an array of the Models in the Project. Keep the IFC ID, you need it in the next, and it will be the last, call.

### Get properties
Let’s get the properties of all the doors of the Model.

```bash
curl --request GET 'https://api-staging.bimdata.io/cloud/YOUR_CLOUD_ID/project/YOUR_PROJECT_ID/ifc/YOUR_IFC_ID/element/simple?type=IfcDoor' \
 --header 'Content-Type: application/json' \
 --header 'Authorization: Bearer YOUR_ACCESS_TOKEN'
```

And it’s done!
Hourra: you get all the properties of all the doors of the Model!
