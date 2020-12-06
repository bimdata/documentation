# makeBIMDataViewer

`makeBIMDataViewer` is the function that is available after [importing the viewer](/viewer/getting_started/quick_start.html).

```javascript
import makeBIMDataViewer from "@bimdata/viewer";

const bimdataViewer = makeBIMDataViewer({
  /* configuration object */
});
```

It takes a configuration `object` that accept the following properties :

## locale

- **Type**: `String`
- **Details**: A string to determine the locale of the viewer. Available options: `en` or `fr`.

## api

- **Type**: `Object`
- **Details**: An object containing api informations.

Example :

```javascript
const bimdataViewer = makeBIMDataViewer({
  api: {
    ifcIds: [2283],
    cloudId: 515,
    projectId: 756,
    accessToken: "fc83e49ca9444d3ea41d212599f39040",
    apiUrl: "https://api-staging.bimdata.io",
  },
});
```

### api.ifcIds

- **Type**: `Number[]`
- **Details**: An array of IFC ids to load.

### api.cloudId: number

- **Type**: `Number`
- **Details**: The cloud id.

### api.projectId

- **Type**: `Number`
- **Details**: The project id.

### api.accessToken

- **Type**: `String`
- **Details**: The access token.

### api.apiUrl

- **Type**: `String`
- **Details**: The BIMData api url.

## ui

- **Type**: `Object`
- **Details**: An object to customize the global UI of the viewer.

Example :

```javascript
const bimdataViewer = makeBIMDataViewer({
  ui: {
    style: {
      backgroundColor: "FFFFFF",
    },
    headerVisible: false,
    windowManager: false,
    version: false,
    bimdataLogo: false,
    contextMenu: false,
  },
});
```

### ui.style.backgroundColor

- **Type**: `String`
- **Details**: A css color applied to the viewer background.

### ui.headerVisible

- **Type**: `Boolean`
- **Details**: Default to `true`. If `false`, the header is hidden.

### ui.windowManager

- **Type**: `Boolean`
- **Details**: Default to `true`. If `false`, the window manager tools are hidden.

### ui.windowManager

- **Type**: `Boolean`
- **Details**: Default to `true`. If `false`, the viewer version is hidden.

### ui.bimdataLogo

- **Type**: `Boolean`
- **Details**: Default to `true`. If `false`, the BIMData logo is hidden.

### ui.contextMenu

- **Type**: `Boolean`
- **Details**: Default to `true`. If `false`, the context menu is disabled.

## plugins

- **Type**: `Object`
- **Details**: An object to customize the BIMData viewer native plugins.

Each property is a plugin name and the value is either a boolean or an object. An object is considered as true and the object content is provided to the plugin instance on `this.$options.$cfg`.

Some native plugins are enabled by default and others disabled. To enabled plugins that are disabled by default, you must provide their names with `true` or an object with plugin specific options.

All native plugins are enabled by default except :
- split

Example :

```javascript
const bimdataViewer = makeBIMDataViewer({
  plugins: {
    bcf: false,
    header: false,
    fullscreen: false,
    projection: false,
    search: false,
    section: false,
    split: true,
    "structure-properties": {
      merge: true,
      export: true,
      editProperties: true,
    },
    viewer3d: {
      pivotMarker: false,
      navCube: false,
      edges: false,
    },
    "window-split": false,
  },
});
```
