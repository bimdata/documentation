# Scopes

A scope is an important concept using the API. Using scopes is a way to handle the credentials of your application.

## What’s a scope?

A scope is a limitation to the data on a given resource. A scope is described by two words: the resource and the limitation, i.e. model:write Access Token is validated by the BIMData Connect authentication service and the scopes are attached to an Access Token.

::: tip Note

About scopes

Scopes provide a way to limit the amount of access that is granted to an access token. For example, an access token issued to a client app may be granted READ and WRITE access to protected resources, or just READ access. You can implement your APIs to enforce any scope or combination of scopes you wish. So, if a client receives a token that has READ scope, and it tries to call an API endpoint that requires WRITE access, the call will fail.

source : [https://docs.apigee.com/api-platform/security/oauth/working-scopes](https://docs.apigee.com/api-platform/security/oauth/working-scopes)
:::

Your application’s user sees the scopes you registered as granted for your application and gives consent to the usage of their data based on this information. Set only the scopes you need.

The limitations are:

- Read: access to the data in read-only mode
- Write: edit the data
- Manage: link the elements, create/delete the links between elements

## List of scopes available

- `bcf:read`: Can do GET requests on BCF routes
- `bcf:write`: Can do POST, PATCH, DELETE requests on BCF routes
- `cloud:read`: Can list cloud users
- `cloud:manage`: Can do POST, PATCH, DELETE on cloud routes and change users permissions
- `document:read`: Can do GET requests on DMS routes
- `document:write`: Can do POST, PATCH, DELETE requests on DMS routes
- `model:read`: Can do GET requests on model routes
- `model:write`: Can do POST, PATCH, DELETE requests on model routes
- `org:manage`: Can invite users, manage DMS tags, users groups, create projects and manage [ProjectAccessTokens](/api/guides/authentication.html#i-want-to-run-bimdata-viewer-on-my-website)
- `user:read`: Can go GET requests on current user (works only with user impersonation)
- `user:write`: Can accept invitation requets (works only with user impersonation)
- `webhook:manage`: Can call webhook routes


## How to set the scopes of your application

The resources and possible scopes are pre-defined.

You can set a scope by typing scopes in a list in the form field Scopes. Each line contains only one scope. In the Manage your application screen, you can add, edit or remove from the Scopes list the granted access.
