# Global Components

This example shows how to use the BIMDataViewer [global components](../reference/global_components.html).

### Demo

<ClientOnly>
  <BIMDataViewer config="globalComponents"/>
</ClientOnly>

### HTML

```html
<!DOCTYPE html>
<html lang="en" dir="ltr">

<head>
  <meta charset="utf-8" />
  <style>
    html,
    body {
      margin: 0;
      cursor: default;
    }
  </style>
  <title>BIMDataViewer</title>
  <script type="module"
    src="https://cdn.jsdelivr.net/npm/@bimdata/viewer@2.0.0-beta.145/dist/bimdata-viewer.esm.min.js"></script>
</head>

<body>
  <div style="height: 100svh">
    <div id="viewer"></div>
  </div>
  <script type="module">
    const bimdataViewer = makeBIMDataViewer({
      // do not display the header, the bimdata logo and the viewer version
      ui: {
        header: false,
        bimdataLogo: false,
        version: false,
      },
      // remove all native plugins
      plugins: false,
    });

    bimdataViewer.registerPlugin({
      name: "plugin-1",
      component: {
        template: `
          <div style="position: relative; height: 100%;">
            <BIMDataNoModelWindowPlaceHolder v-if="$viewer.localContext.loadedModels.length === 0" />
            <BIMDataModelLoader />
            <BIMDataStoreySelector style="position: absolute; left: var(--spacing-unit); bottom: var(--spacing-unit);"/>

            <div style="height: 100%; display: flex; flex-direction: column; justify-content: center; align-items: center;" v-if="$viewer.localContext.loadedModels.length > 0">
              <div> LoadedModel name = {{ $viewer.localContext.loadedModels[0].name }}</div>
              <div v-if="!$viewer.localContext.selectedStorey">Please select a storey</div>
              <div v-else> Selected storey name = {{ $viewer.localContext.selectedStorey.name }}</div>
            </div>
          </div>`,
      },
      window: {
        name: "window-1",
        header: false,
        modelTypes: ["IFC"],
        multiModel: false,
      },
    });

    bimdataViewer.mount("#viewer", "window-1");
  </script>
</body>

</html>
```