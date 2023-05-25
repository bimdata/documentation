# Authentication

There are many ways to authenticate to BIMData API. This guide will help you find the most suitable authentication depending on your use-case.


## I want to access the API from a backend

First, you need to [create an application](/api/guides/application.html#how-to-create-your-application-on-bimdata-connect).
The access type must be set to `Confidential`. Even if base_url and redirect_uri won't be used, you must set values.

Once created, you'll be given a `client_id`, a `client_secret` and an `ApiKey`.

### Use client_credentials
You can either use `client_id` and `client_secret` and [exchange them with an AccessToken usable on the API as explained here](/api/introduction/quick_start.html#get-your-access-token).
- ✅ Pros : Uses the standard OpenID Connect protocol, compatible with many libraries
- ❌ Cons : One more HTTP request to do before calling BIMData API

### Use ApiKey
Or you can also directly use the ApiKey to call the API:
```bash
curl --request POST 'https://api.bimdata.io/cloud' \
 --header 'Content-Type: application/json' \
 --header 'Authorization: ApiKey YOUR_API_KEY' \
 --data '{"name": "My First Cloud"}'
```
- ✅ Pros : Can be directly used without additionnal HTTP request
- ❌ Cons : Does't have an expire date. If you leak it, the only way to secure your data is to revoke the ApiKey on the [application management page](https://connect.bimdata.io/developers/client/).


## I want to run BIMData Viewer on my website

BIMData Viewer needs an access token to load data from the API.
As the viewer run in users' browser, your application's token must not be used. A malicious user could retrieve the token and access or delete all your data.
To avoid exposing your app token to your users, you can [create a ProjectAccessToken](https://api.bimdata.io/doc#/collaboration/createProjectAccessToken). It allows you to create a temporary token with limited rights.
The requests takes two parameters:
 - `expires_at`, an ISO 8601 date. It is recommended to dynamically create a 12 hours token each time a user opens the Viewer.
 - `scopes`, an array of token's permissions:
    - `bcf:read` The token can read BCF data
    - `bcf:write` The token can create BCF Topics or comment BCFs
    - `document:read` The token can read document files
    - `document:write` The token can upload or delete documents
    - `model:read` The token can open models (IFC, DWG, PDF, plans)
    - `model:write` The token can create models (Meta Building) and update model properties.

To open the viewer, `model:read` is the minimum scope required.



## I want to impersonate users

OpenID Connect allows you to impersonate users with your app. These flows are complex and already well documented all around Internet.


## I have another use case

There are many possibilities, please contact us by email: [<support@bimdata.io>](support@bimdata.io)
