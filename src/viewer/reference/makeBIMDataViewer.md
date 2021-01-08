# makeBIMDataViewer

`makeBIMDataViewer` is the function that is available after [importing the viewer](/viewer/getting_started.html).

```javascript
import makeBIMDataViewer from "@bimdata/viewer";

const bimdataViewer = makeBIMDataViewer({
  /* configuration object */
});
```

The returned object of the `makeBIMDataViewer` function have the following interface:

| Property                                                                           | Description                                                                  |
| :--------------------------------------------------------------------------------- | :--------------------------------------------------------------------------- |
| `mount(containerElementOrSelector: HTMLElement | string, layout?: Object): Object` | Mount the viewer on the corresponding DOM element with the specified layout. |
| `setLocale(locale: string): void`                                                  | Set the locale of the viewer. Available locales are `en` or `fr`.            |
| `registerPlugin(plugin: Object, cfg: Object): void`                                | Register a plugin.                                                           |
| `registerWindow(window: Object): void`                                             | Register a window                                                            |
| `unregisterWindow(windowName: string): void`                                       | Unregister the corresponding window.                                         |
| `setAccessToken(accessToken: string): void`                                        | Set the access token.                                                        |
| `loadIfcs(ifcIds: number[]): Object[]`                                             | Load the corresponding ifcs.                                                 |

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
    ifcIds: [15097],
    cloudId: 10344,
    projectId: 237466,
    accessToken: "TAbdyPzoQeYgVSMe4GUKoCEfYctVhcwJ",
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

## logger

- **Type**: `Object`
- **Details**: An object to set the logger level.

`logger.level` can be set to "INFO", "WARNING" (default) or "ERROR".

```javascript
const bimdataViewer = makeBIMDataViewer({
  // ...
  logger: {
    level: "INFO"
  },
});
```

## offlineOptions

- **Type**: `Object`
- **Details**: An object to configure the offline behaviour of the BIMData viewer.

:::tip
For more informations, see the [offline reference](./offline.html).
:::