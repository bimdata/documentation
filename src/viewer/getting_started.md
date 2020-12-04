# Getting started

## Installation

You can quickly launch the BIMData Viewer with demo identifications.

### Using `<script>` tag

```html
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8" />
    <title>BIMDataViewer - Quick start</title>
    <script src="https://www.unpkg.com/@bimdata/viewer"></script>
  </head>

  <body>
    <div style="height: 100vh;">
      <div id="app"></div>
    </div>

    <script>
      const bimdataViewer = makeBIMDataViewer({
        api: {
          ifcIds: [2283],
          cloudId: 515,
          projectId: 756,
          accessToken: "fc83e49ca9444d3ea41d212599f39040",
          apiUrl: "https://api-staging.bimdata.io",
        },
      });

      const vm = bimdataViewer.mount("#app");
    </script>
  </body>
</html>
```

### Using npm

Install it using npm :

```bash
npm i @bimdata/viewer
```

And import it with ES module :

```javascript
import makeBIMDataViewer from "@bimdata/viewer";
```

Usage in Vue.js component :

```vue
<template>
  <div class="viewer-container">
    <div id="viewer"></div>
  </div>
</template>

<script>
import makeBIMDataViewer from "@bimdata/viewer";

export default {
  mounted() {
    const bimdataViewer = makeBIMDataViewer({
      api: {
        ifcIds: [2283],
        cloudId: 515,
        projectId: 756,
        accessToken: "fc83e49ca9444d3ea41d212599f39040",
        apiUrl: "https://api-staging.bimdata.io",
      },
    });

    bimdataViewer.mount("#viewer");
  }
}
</script>

<style>
.viewer-container {
  height: 100vh;
}
</style>
```

## Use your own models

To use your own models on the BIMData Viewer, you first need to upload them using the [BIMData API](/api/introduction/overview.html).

Then, you can display them on the viewer using their identifications :

```javascript
const bimdataViewer = makeBIMDataViewer({
  api: {
    ifcIds: [XXX, XXX], // Your ifc ids
    cloudId: XXX, // Your cloud id
    projectId: XXX, // Your project id
    accessToken: XXX, // Your access token
    apiUrl: XXX, // The BIMData API URL you use
  },
});

bimdataViewer.mount("#viewer");
```

## Disable native plugins

UI elements like plugins, viewer version and BIMData logo can be configured. To do so, use the [makeBIMDataViewer](/viewer/reference/makeBIMDataViewer.html) function configuration object.

Here is an example to get an empty 3d viewer :

```javascript
const viewer = makeBIMDataViewer(
  ui: {
    version: false,
    bimdataLogo: false,
  },
  plugins: {
    header: false,
    "window-split": false,
    "structure-properties": false,
    bcf: false,
    projection: false,
    section: false,
    fullscreen: false,
    search: false,
    viewer3d: {
      navCube: false, // get rid of the navcube
    },
  }
);
```
The result :

![Viewer with one window empty](/assets/img/viewer/Viewer-1_window_empty.png)

::: tip
To see all the UI configuration possibilities, see the [viewer UI documentation](/viewer/customize_the_ui.html).
:::
