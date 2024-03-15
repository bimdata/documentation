# makeBIMDataViewer

`makeBIMDataViewer` is the function that is available after importing the viewer.

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
| `modelIds`    | `number[]` | An array of model ids to load. |
| `cloudId`     | `number`   | The cloud id.                  |
| `projectId`   | `number`   | The project id.                |
| `accessToken` | `string`   | The access token.              |
| `apiUrl`      | `string`   | The BIMData api url.           |
| `offline`     | `object`   | Offline mode configuration.    |

Here are `offline` configuration options:

| Name       | Type      | Description                                      |
| :--------- | :-------- | :----------------------------------------------- |
| `enabled`  | `boolean` | Default to `false`. Enable/Disable offline mode. |
| `dataFile` | `object`  | Offline mode configuration.                      |

You can refer to [the dedicated page](../offline_mode.md) to learn more about offline mode.

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
| `style.backgroundColor` | `string`  | A css color applied to the viewer background.                               |
| `header`                | `boolean` | **Default** to `true`. If `false`, the header is hidden.                    |
| `version`               | `boolean` | **Default** to `true`. If `false`, the viewer version is hidden.            |
| `bimdataLogo`           | `boolean` | **Default** to `true`. If `false`, the BIMData logo is hidden.              |
| `contextMenu`           | `boolean` | **Default** to `true`. If `false`, the context menu is disabled.            |
| `resizable`             | `boolean` | **Default** to `true`. If `false`, the layout is not resizable from the UI. |

## plugins

- **Type**: `Object` | `boolean`
- **Details**: An object to customize the BIMData viewer native plugins. If false, no native plugins are available.

Each property is a plugin name and the value is either a boolean or an object. An object is considered as true and the object content is provided to the plugin instance on `this.$plugin.settings`.

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
    "window-manager": false,
  },
});
```

:::tip
For more details about native plugins, see [the native plugins reference](/viewer/reference/native_plugins.html).
:::

The returned object of the `makeBIMDataViewer` function have the following interface:

| Property                                            | Description                                                                                                                                                                         |
| :-------------------------------------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `mount(containerElementOrSelector: HTMLElement      | string, layout?: Object): Object`                                                                                                                                                   | Mount the viewer on the corresponding DOM element with the specified layout. |
| `setLocale(locale: string): void`                   | Set the locale of the viewer. Available locales are `en` or `fr`.                                                                                                                   |
| `registerPlugin(plugin: Object, cfg: Object): void` | Register a plugin.                                                                                                                                                                  |
| `registerWindow(window: Object): void`              | Register a window                                                                                                                                                                   |
| `unregisterWindow(windowName: string): void`        | Unregister the corresponding window.                                                                                                                                                |
| `setAccessToken(accessToken: string): void`         | Set the access token.                                                                                                                                                               |
| `async loadModels(modelIds: number[]): Object[]`    | Load the corresponding models.                                                                                                                                                      |
| `destroy(): void`                                   | Destroy the viewer. All the plugins will be destroyed and the DOM won't react anymore. If you remove the viewer's div without calling this method, there will be a huge memory leak |
