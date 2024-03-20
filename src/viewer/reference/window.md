# Window

## Registration

A window is composed of [plugins](./plugin.md) and can be registered using two ways :

- The first and most commonly used method is to add a window configuration object when registering a plugin.
- The second is by registering it directly on the BIMData viewer object.

```javascript
const bimdataViewer = makeBIMDataViewer(/* {...} */);

const windowConfigurationObject = {
  name: "windowName",
  plugins: [
    /* plugins */
  ],
};

// first way: register via plugin
bimdataViewer.registerPlugin({
  /* plugin specific fields */
  window: windowConfigurationObject,
});

// second way: register directly
bimdataViewer.registerWindow(windowConfigurationObject);
```

## Loading

A window can be loaded using the `localContext.loadWindow(windowName)` method. Notice that a `string` must be passed to this method, meaning that the corresponding window must be registered before.

Once loaded, the window can be accessed directly via `localContext.window`.

## Window API

Window and window configuration objects have the same API:

| Property                             | Description                                                                                                                                          |
| :----------------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------- |
| `name`: `string`                     | **Required** The name of the window. Must be unique.                                                                                                 |
| `label`: `string`                    | The label that is displayed to the user. Can be a key to be translated like : "viewer3d.window_label".                                               |
| `plugins`: `Array<string>`           | An array of plugins name which will be added to the window.                                                                                          |
| `header: boolean`                    | *Default* to `true`. Defines if the Header must be shown when only this window is displayed.                                                         |
| `icon.imgUri`: `string`              | A string that is injected into an `img` HTML element as a src. This image will be displayed while selecting the window on the window selector.       |
| `modelTypes: Array<string>`          | The model types handled by this window. Model types are "IFC", "DWG", "PDF", "JPEG", "PNG", "METABUILDING" and "POINT_CLOUD".                        |
| `multiModel: boolean`                | *Default* to `true`. Defines if the window can handle more than one model at a time.                                                                 |
| `noModel: boolean`                   | *Default* to `false`. Defines if the window handle models.                                                                                           |
| `logoAndVersion: boolean`            | *Default* to `false`. Defines if the BIMData logo and version are shown on the bottom left corner when only this window is displayed.                |
| `defaultWindow: boolean`             | *Default* to `false`. Defines this window as the viewer default window. The default window is displayed when no window are loaded on a localContext. |
| `displayedInWindowSelector: boolean` | *Default* to `true`. Defines if this window is shown on the window selector plugin. (the UI list of all available window )                           |
