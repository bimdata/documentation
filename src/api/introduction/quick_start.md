# Quick start

## Create an application

The first step is to create an application. Follow the [guide to create your application](/api/guides/application.html#how-to-create-your-application-on-bimdata-connect) and come back here to follow the next steps once you get a `client_id` and a `client_secret`.

## Get your Access Token

Once you have created your app, you have a `client_id` and a `client_secret` that you can exchange for an Access Token through an HTTP call. You will need this Access Token for every call of the bimdata’s API

```bash
curl --request POST "https://iam-staging.bimdata.io/auth/realms/bimdata/protocol/openid-connect/token" \
  --header "Content-Type: application/x-www-form-urlencoded" \
  --data "grant_type=client_credentials&client_id=YOUR_CLIENT_ID&client_secret=YOUR_CLIENT_SECRET"
```

::: warning
This API call doesn’t accept JSON.
Be sure to use application/x-www-form-urlencoded encoding.
:::

Once you have the access_token, you can start doing API calls!

## Create a Cloud

Next, let's create a [Cloud](/api/introduction/concepts.md#cloud). A Cloud is a configurable space where projects are created. All projects in this Cloud share the Cloud’s configuration.

A Cloud just needs a name:

```bash
curl --request POST 'https://api-staging.bimdata.io/cloud' \
 --header 'Content-Type: application/json' \
 --header 'Authorization: Bearer YOUR_ACCESS_TOKEN' \
 --data '{"name": "My First Cloud"}'
```

You get a Cloud ID in the response. We need it for our next API call.

## Create a Project

Once you have your first Cloud, you can create your first [Project](/api/introduction/concepts.md#project). For this tutorial, we will use a special endpoint that creates a demo Project with our demo Model: createDemo.

```bash
curl --request POST 'https://api-staging.bimdata.io/cloud/YOUR_CLOUD_ID/create-demo' \
 --header 'Content-Type: application/json' \
 --header 'Authorization: Bearer YOUR_ACCESS_TOKEN'
```

You receive back the created Project (its ID).

## Retrieve a Model

Let’s retrieve the Model in the demo project using the getIfcs endpoint!

```bash
curl --request GET 'https://api-staging.bimdata.io/cloud/YOUR_CLOUD_ID/project/YOUR_PROJECT_ID/ifc' \
 --header 'Content-Type: application/json' \
 --header 'Authorization: Bearer YOUR_ACCESS_TOKEN'
```

You get an array of the Models in the Project. Keep the IFC ID, you need it in the next call.

## Get properties

With the IFC ID we get from the previous call, let’s get the properties of all the doors of the Model.

```bash
curl --request GET 'https://api-staging.bimdata.io/cloud/YOUR_CLOUD_ID/project/YOUR_PROJECT_ID/ifc/YOUR_IFC_ID/element/simple?type=IfcDoor' \
 --header 'Content-Type: application/json' \
 --header 'Authorization: Bearer YOUR_ACCESS_TOKEN'
```

And it’s done! :tada:
You get all the properties of all the doors of the Model!
