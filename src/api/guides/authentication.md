# Authentication

## Details

The OpenID Connect used by the BIMData Connect, our authentication system, is built on the shoulders of OAuth2.0.

BIMData Connect handles the sign-in, the login and authentication processes of your application users. You can focus on creating and building your application. The user’s browser is redirected to the Sign-In page by the Web Application.

The Sign-In page is on the BIMData Connect server. The BIMData Connect provides to the user’s browser an Access Token. Then the user’s browser could send requests to the Web Application sending the Access Token. The type of authentication is defined during the creation of the application.

![BIMData Connect](/assets/img/api/API-BIMdata_connect.jpg)

## Get your Access Token

![BIMData Connect](/assets/img/api/API-auth_flow.jpg)

## Use your Access Token

There are two possible ways to authenticate depending on your application architecture design. You can either:
- access as an application and benefit from authentication capacities.
- use a user-behavior authentication.

## When use an app auth?
### The benefits
#### Simple to use

No user means no credentials to manage nor complex workflow, it’s simpler to access via the application.

#### Pluggable

You can subscribe to events and use webhooks. It’s the easiest way to provide automation.

Use it when you need to have a scheduled response to an event and launch a script depending on this response.

::: warning Important

You cannot access as a user, therefore you cannot:
- do any impersonation
- manage fine granularity with access rights
- share data with other applications using BIMData
:::

## When use a user impersonation?
### The benefits
#### User’s name as the author

- Emulating the user’s actions enables you to act in the name of the user.
- Creating content with impersonation writes the user’s name in the creator’s name of this content.

#### Sharing the authoring
Your script can modify data created by the user and amend it.

### Let BIMData handle the complexity
The credentials complexity is handled by the BIMData Connect authentication server. This option is compliant with the user’s credentials. Use it when you need to access the user’s log, such as the user’s history, and report actions.

## Authentication Flows

OpenID Connect has different authentication flows and you have to choose the one which fits your needs the best.

### Authorization code flow

This flow is designed to be used with apps using a backend with templating technologies. It gives you an Access Token you can use directly to call the API and a Refresh Token you can use later to behave as a user even without the user actually using the application (ie: cron, asynchronous data processing).

You can forward the Access Token to the browser and let the browser directly call the BIMData API. It this case, you need to implement a way to refresh the Access Token when it expires.

::: tip Note
More information and libraries

- Find more information on this Github repo: [https://rograce.github.io/openid-connect-documentation/explore_auth_code_flow](https://rograce.github.io/openid-connect-documentation/explore_auth_code_flow) .
- Find libraries helping you with the implementation: [https://openid.net/developers/libraries/](https://openid.net/developers/libraries/).
:::

#### Usage example

- Enrichment of your app’s data with your own dataset.

### Implicit flow

This flow is designed to be used with apps without a backend like mobiles apps or full javascript apps.
Implicit flow is the way when you don’t need a back-end software. Everything is done in the user’s browser. It retrieves the access_token and can use it as you want. But when the token expires, you need the user to refresh it.

::: tip Note
Example and libraries

- Find an example of implicit flow usage in a web browser on our’s Github example repository: [https://github.com/bimdata/web-app-example](https://github.com/bimdata/web-app-example) .
- Find libraries helping you with the implementation: [https://openid.net/developers/libraries/](https://openid.net/developers/libraries/).
:::

#### Usage examples

- Get the Access Token by the browser to use it directly after getting it.
- Reporting into the application of the user’s actions.