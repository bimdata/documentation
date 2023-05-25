# Create your application

## How-To create your application on BIMData Connect

- Create an account on the [https://connect.bimdata.io](https://connect.bimdata.io) website.
- After the login step, go to “Manage your application” and click on `Create an application`.
- In the form to Create an Application, let’s type “Wonderful app” in the field Name. The other fields can be edited later.
- Click on create.

::: tip
Your user has no access to what your application created. To grant access to your user see [how-to share data with your app](/api/guides/share_data.html).
:::

You created your first application and now have access to 2 new pieces of information:

- the Client ID
- the Client Secret

### Fields description

#### Name

You can choose whatever you want. The name is displayed to users when requesting permissions and in their application list.

#### Scopes

Select scopes your app needs. See the [Scopes documentation](/api/guides/scopes.html) to learn more.

#### Redirect URIs

The list of authorized redirect URIs. After allowing your app to access their data, users will be redirected to your app on one of these URIs. By default, the redirect URI is: `http://localhost:8080/oidc-callback`

::: warning
For security reasons, avoid using local URLs such as localhost, 127.0.0.1, 192.168.x.x, etc. for applications in production.
:::

::: tip See also
See also [our documentation about Security](/api/guides/security.html).
:::
