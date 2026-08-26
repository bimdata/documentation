# Getting started

<script setup>
import BIMDataIconFileDwg from "../.vitepress/components/BIMDataIconFileDwg.vue";
import BIMDataIconFileDxf from "../.vitepress/components/BIMDataIconFileDxf.vue";
import BIMDataIconFileIfc from "../.vitepress/components/BIMDataIconFileIfc.vue";
import BIMDataIconFilePlan from "../.vitepress/components/BIMDataIconFilePlan.vue";
import BIMDataIconFilePointCloud from "../.vitepress/components/BIMDataIconFilePointCloud.vue";
import ViewerMainPage from "../.vitepress/components/ViewerMainPage.vue";
</script>

The BIMData Viewer displays models of many formats in a web page. Each format is
handled by its own native built-in viewer, with **display**, **navigation**,
**measurement** and **annotation** available on all of them.

<div style="align-items: center; display: flex; flex-wrap: wrap; gap: 24px; margin: 24px 0;">
  <div style="align-items: center; display: flex; gap: 8px;"><BIMDataIconFileIfc /> IFC</div>
  <div style="align-items: center; display: flex; gap: 8px;"><BIMDataIconFilePlan /> PDF, PNG, JPG</div>
  <div style="align-items: center; display: flex; gap: 8px;"><BIMDataIconFileDwg /> DWG</div>
  <div style="align-items: center; display: flex; gap: 8px;"><BIMDataIconFileDxf /> DXF</div>
  <div style="align-items: center; display: flex; gap: 8px;"><BIMDataIconFilePointCloud /> PLY, LAS, LAZ</div>
</div>

This guide takes you from an empty file to a model running in your browser. No
account needed for the first step. Count about 15 minutes for the whole page.

<ViewerMainPage />

## See it running

Create an `index.html` file, paste this, and open it. The identifiers below point
to our public demo model, so it works as-is.

::: code-group

```html [CDN]
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1.0" />
    <title>BIMDataViewer - Quick start</title>
  </head>

  <body>
    <div style="height: 100vh;">
      <div id="viewer"></div>
    </div>

    <script type="module">
      import makeBIMDataViewer from "https://cdn.jsdelivr.net/npm/@bimdata/viewer@latest";

      const bimdataViewer = makeBIMDataViewer({
        api: {
          // demo identifications
          modelIds: [15097],
          cloudId: 10344,
          projectId: 237466,
          accessToken: "TAbdyPzoQeYgVSMe4GUKoCEfYctVhcwJ",
        },
      });

      bimdataViewer.mount("#viewer");
    </script>
  </body>
</html>
```

```html [NPM]
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1.0" />
    <title>BIMDataViewer - Quick start</title>
  </head>

  <body>
    <div style="height: 100vh;">
      <div id="viewer"></div>
    </div>

    <script type="module">
      import makeBIMDataViewer from "@bimdata/viewer"; // bundler needed

      const bimdataViewer = makeBIMDataViewer({
        api: {
          // demo identifications
          modelIds: [15097],
          cloudId: 10344,
          projectId: 237466,
          accessToken: "TAbdyPzoQeYgVSMe4GUKoCEfYctVhcwJ",
        },
      });

      bimdataViewer.mount("#viewer");
    </script>
  </body>
</html>
```
:::

That is the entire integration: an import, four identifiers, and a `mount()`.

::: warning Double-clicking the file will not work
ES modules are blocked on the `file://` protocol, so opening the file directly
gives you a blank page and a CORS error in the console. Serve it over HTTP
instead, with the *Live Server* extension in VS Code or `npx serve` in the folder.
:::

::: tip Blank page, no error?
The viewer fills its parent element. If the container has no height, nothing
renders. That is what the `height: 100vh` wrapper above is for.
:::

::: tip Pin the version in production
`@latest` is convenient while you experiment, but it means your page changes
whenever we ship a release. Pin an explicit version once you go live.
:::

## Use your own models

The demo identifiers are read-only and shared. To display your own data you need
your own `cloudId`, `projectId`, `modelIds` and `accessToken`.

### 1. Create an application

An **application** is your developer identity with BIMData, and it is what gives
you API credentials.

1. Go to [connect.bimdata.io](https://connect.bimdata.io) and sign in.
2. Open **Manage your application** → **Create an application**.
3. Set the access type to **`Confidential`**.
4. `base_url` and `redirect_uri` are required even though you will not use them
   here. `http://localhost:8080/oidc-callback` will do.

You get a `client_id`, a `client_secret` and an `ApiKey`. See
[Create your application](/api/guides/application) for details.

::: danger Keep these on your server
These credentials grant full access to your data. They belong in your backend,
never in a web page. Step 3 covers what to put in the browser instead.
:::

### 2. Create a cloud, a project and a model

The fastest route is our demo endpoint, which creates a project with a model
already in it, with no upload and no processing wait.

```bash
# Create a cloud
curl --request POST 'https://api.bimdata.io/cloud' \
  --header 'Content-Type: application/json' \
  --header 'Authorization: ApiKey YOUR_API_KEY' \
  --data '{"name": "My First Cloud"}'

# Create a demo project inside it
curl --request POST 'https://api.bimdata.io/cloud/CLOUD_ID/create-demo' \
  --header 'Content-Type: application/json' \
  --header 'Authorization: ApiKey YOUR_API_KEY'

# List its models
curl --request GET 'https://api.bimdata.io/cloud/CLOUD_ID/project/PROJECT_ID/ifc' \
  --header 'Authorization: ApiKey YOUR_API_KEY'
```

Each response gives you the identifier for the next call.

You can also create a project and upload your own IFC from the
[BIMData Platform](https://platform.bimdata.io/), then read the identifiers from
the URL.

::: warning A project created by hand is not visible to your app
Your application does not automatically have access to your user's data, and the
reverse is also true. To connect the two, invite yourself into a cloud created by
your app. See
[Share data between App and Platform](/api/guides/share_data).
:::

### 3. Create a token for the browser

Whatever you write in the page is readable by your users. So the token you pass
to the viewer must not be your application's `ApiKey`, which can read *and
delete* everything you own.

Use a **ProjectAccessToken** instead: temporary, read-only, limited to one
project.

```bash
curl --request POST 'https://api.bimdata.io/cloud/CLOUD_ID/project/PROJECT_ID/access-token' \
  --header 'Content-Type: application/json' \
  --header 'Authorization: ApiKey YOUR_API_KEY' \
  --data '{
    "expires_at": "2026-12-31T23:59:00Z",
    "scopes": ["model:read"]
  }'
```

`model:read` opens models and is the minimum scope the viewer requires. See
[Scopes](/api/guides/scopes) for the full list, and
[Authentication](/api/guides/authentication) for other flows.

::: tip In production
Generate a fresh 12-hour token from your backend each time a user opens the
viewer. Your `ApiKey` stays on your server, and the browser only ever holds a
short-lived, narrowly scoped token.
:::

Drop your four values into the snippet above, and you are running on your own
data.

## Make it yours

The default interface carries BIMData branding. One configuration block removes
it and lets the viewer blend into your own product:

```js
const bimdataViewer = makeBIMDataViewer({
  api: { /* ... */ },
  locale: "fr",
  ui: {
    header: false,
    bimdataLogo: false,
    version: false,
    style: { backgroundColor: "F5F5F5" },
  },
});
```

Native plugins can be turned off entirely with `plugins: false`, or one by one:

```js
plugins: {
  bcf: false,
  measure3d: false,
  section: false,
  viewer3d: { navCube: false, help: false },
}
```

Full list of options:
[makeBIMDataViewer](/viewer/reference/makeBIMDataViewer) and
[Native Plugins](/viewer/reference/native_plugins).

## Going further

**Other formats.** Everything above works the same way for plans, DWG, DXF and
point clouds. Pass the relevant model ID and the matching viewer takes over. A
project can hold several formats at once, and you can display them side by side.

**Rearrange the workspace.** Choose which panels appear where, split the window,
build your own layout. See
[User Interface](/viewer/guide/).

**Add your own features.** The viewer exposes a JavaScript plugin API built on
[Vue 3](https://vuejs.org/). You don't need to master Vue.js to develop a plugin,
and you can still update the DOM with jQuery if you like. Start with
[Plugins](/viewer/guide/plugins), or clone the
[Viewer SDK](/viewer/viewer_sdk) for a pre-configured development environment.

**Mobile and offline.** The viewer supports touch devices
([Mobile](/viewer/mobile)) and disconnected use
([Offline Mode](/viewer/reference/offline_mode)).

The viewer is bound to the [BIMData API](/api/introduction/overview), which you
can use to upload and manage models programmatically.
