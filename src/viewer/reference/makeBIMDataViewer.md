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

The `api` properties are:

| Name          | Type       | Description                  |
| :------------ | :--------- | :--------------------------- |
| `ifcIds`      | `number[]` | An array of IFC ids to load. |
| `cloudId`     | `number`   | The cloud id.                |
| `projectId`   | `number`   | The project id.              |
| `accessToken` | `string`   | The access token.            |
| `apiUrl`      | `string`   | The BIMData api url.         |

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

The `ui` properties are:

| Name                    | Type      | Description                                                             |
| :---------------------- | :-------- | :---------------------------------------------------------------------- |
| `style.backgroundColor` | `string`  | A css color applied to the viewer background.                           |
| `headerVisible`         | `boolean` | **Default** to `true`. If `false`, the header is hidden.                |
| `windowManager`         | `boolean` | **Default** to `true`. If `false`, the window manager tools are hidden. |
| `version`               | `boolean` | **Default** to `true`. If `false`, the viewer version is hidden.        |
| `bimdataLogo`           | `boolean` | **Default** to `true`. If `false`, the BIMData logo is hidden.          |
| `contextMenu`           | `boolean` | **Default** to `true`. If `false`, the context menu is disabled.        |

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
    split: true,
    bcf: false,
    header: false,
    fullscreen: false,
    projection: false,
    search: false,
    section: false,
    windowSelector: false,
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

:::tip
For more details about native plugins, see [the native plugins reference](/viewer/reference/native_plugins.html).
:::
