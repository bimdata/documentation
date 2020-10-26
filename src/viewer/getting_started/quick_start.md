# Quick start

You can quickly launch the BIMData Viewer with demo identifications.

## Using `<script>` tag

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

## Using npm

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

