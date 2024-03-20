# makeBIMDataViewer

`makeBIMDataViewer` is the function that is available after importing the viewer.

```javascript
import makeBIMDataViewer from "@bimdata/viewer";

const bimdataViewer = makeBIMDataViewer({
  /* configuration object */
});
```

It takes a configuration object that accept the following properties :

## locale

- **Type**: `String`
- **Details**: A string to determine the locale of the viewer.

Available locales are:
 - English: `en` (default)
 - French: `fr` 
 - Spanish: `es`
 - German: `de`
 - Italian: `it`

## api

- **Type**: `Object`
- **Details**: An object containing [BIMData API](../../api/introduction/overview.md)  connection config.

Example :

```javascript
const bimdataViewer = makeBIMDataViewer({
  api: {
    modelIds: [15097],
    cloudId: 10344,
    projectId: 237466,
    accessToken: "TAbdyPzoQeYgVSMe4GUKoCEfYctVhcwJ",
  },
});
```

The `api` properties are:

| Name          | Type       | Description                    |
| :------------ | :--------- | :----------------------------- |
| `modelIds`    | `number[]` | (**Optional**) An array of model ids to load on startup. |
| `cloudId`     | `number`   | The cloud id.                  |
| `projectId`   | `number`   | The project id.                |
| `accessToken` | `string`   | The access token.              |
| `archiveUrl`  | `string`   | The BIMData Archive backend URL. Default to `https://archive.bimdata.io` |
| `apiUrl`      | `string`   | The BIMData API URL. Default to `https://api.bimdata.io` |
| `offline`     | `object`   | Offline mode configuration.    |

Here are the `offline` configuration options:

| Name          | Type       | Description                    |
| :------------ | :--------- | :----------------------------- |
| `enabled`     | `boolean`  | Default to `false`. Enable/Disable offline mode. |
| `data`        | `Blob | string`   | A Blob or URL of the *offline-package*    |

You can refer to [the dedicated page](./offline_mode.md) to learn more about offline mode.

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
    header: false,
    version: false,
    bimdataLogo: false,
    contextMenu: false,
    resizable: true,
  },
});
```

The `ui` properties are:

| Name                    | Type      | Description                                                                 |
| :---------------------- | :-------- | :-------------------------------------------------------------------------- |
| `style`                 | `object`  | An set of props to customize [viewer colors](../guide/README.md#colors-🎨). |
| `header`                | `boolean` | **Default** to `true`. If `false`, the header is hidden.                    |
| `version`               | `boolean` | **Default** to `true`. If `false`, the viewer version is hidden.            |
| `bimdataLogo`           | `boolean` | **Default** to `true`. If `false`, the BIMData logo is hidden.              |
| `contextMenu`           | `boolean` | **Default** to `true`. If `false`, the context menu is disabled.            |
| `resizable`             | `boolean` | **Default** to `true`. If `false`, the layout is not resizable from the UI. |

## plugins

- **Type**: `Object` | `boolean`
- **Details**: An object to customize the BIMData viewer native plugins. If `false`, no native plugins are available.

Each property is a plugin name and the value is either a boolean or an object. An object is considered as `true` and the object content is provided to the plugin instance on `this.$plugin.settings`.

Some native plugins are enabled by default and others disabled. To enabled plugins that are disabled by default, you must provide their names with `true` or an object with plugin specific options.

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
    "window-manager": false,
  },
});
```

:::tip
For more details about native plugins, see [the native plugins reference](/viewer/reference/native_plugins.html).
:::

The returned object of the `makeBIMDataViewer` function have the following interface:

| Property                                            | Description  |
| :-------------------------------------------------- | :----------- |
| `mount(containerElementOrSelector: HTMLElement | string, layout?: Object): Object` | Mount the viewer on the corresponding DOM element with the specified layout. See [`mount`](./mount.md) |
| `setLocale(locale: string): void`                   | Set the [viewer locale](#locale).  |
| `registerPlugin(plugin: Object, cfg: Object): void` | Register a plugin. See [plugin registration](./plugin.md#registration-and-plugin-api). |
| `registerWindow(window: Object): void`              | Register a window. See [window registration](./window.md#registration). |
| `unregisterWindow(windowName: string): void`        | Unregister the corresponding window. |
| `setAccessToken(accessToken: string): void`         | Set API access token. |
| `async loadModels(modelIds: number[]): Object[]`    | Load the corresponding models. |
| `destroy(): void`                                   | Destroy the viewer. All the plugins will be destroyed and the DOM won't react anymore. **Warning:** If you remove the viewer's `<div>` without calling this method, there will be a huge memory leak |
