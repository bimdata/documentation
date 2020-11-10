# Create your application

## Which app will you create?

The implementation of your app depends on your needs. You can create several types of applications.

### Backend-less application

Choose this way if you are developing a backend-less application.

These applications:
- Could share data with other applications like BIMData Platform or any other third-party app.
- Must use BIMData Connect users credentials system.
- Are usually mobile apps or small Javascript apps.

### Application with a backend

#### With BIMData Connect Users

Choose this way if your app has a backend (PHP, NodeJS, Python, .NET, etc.).

These applications:
- Could share data with other applications like BIMData Platform or any other third-party app.
- must use BIMData Connect users credentials system.

#### Without Users

Chose this way if you don’t want to use BIMData Connect users (You may want to create an IFC Access Token).

These applications:
- Have to manage their own users and authorizations.
- can’t share data with other BIMData applications.
- Have an easier setup.

## How-To create your application on BIMData Connect

- Create an account on the [https://connect.bimdata.io](https://connect.bimdata.io) website.
- After the login step, go to “Manage your application” and click on `Create an application`.
- In the form to Create an Application, let’s type “Wonderful app” in the field Name. The other fields can be edited later.
- Click on create.

::: tip
Your user has no access to what your application created. To grant access to your user see [how-to share data with your app](/api/guides/share_data).
:::

You created your first application and now have access to 2 new pieces of information:

- the Client ID
- the Client Secret

### Fields description

#### Name

You can choose whatever you want. The name is displayed to users when requesting permissions and in their application list.

#### Scopes

Select scopes your app needs. See the [Scopes documentation](/api/guides/scopes) to learn more.

#### Redirect URIs

The list of authorized redirect URIs. After allowing your app to access their data, users will be redirected to your app on one of these URIs. By default, the redirect URI is: `http://localhost:8080/oidc-callback`

::: warning
For security reasons, avoid using locals URL such as localhost, 127.0.0.1, 192.168.x.x, etc. for applications in production.
:::

::: tip See also
See also [our documentation about Security](/api/guides/security).
:::
