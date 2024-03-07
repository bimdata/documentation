# Window

A window is composed of [plugins](#plugin) and can be registered using two ways :

- The first is by adding a window configuration object in a plugin configuration.
- The second is by registering it directly on the BIMData viewer object.

## Window configuration object

| Property                  | Description                                                                                                                                    |
| :------------------------ | :--------------------------------------------------------------------------------------------------------------------------------------------- |
| `name`: `string`          | **Required** The name of the window. Must be unique.                                                                                           |
| `label`: `string`         | The label that is displayed to the user. Can be a key to be translated like : "viewer3d.window_label".                                         |
| `plugins`: `array`        | An array of plugins which will be added to the window.                                                                                         |
| `icon.imgUri`: `string`   | A string that is injected into an `img` HTML element as a src. This image will be displayed while selecting the window on the window selector       |
| `menu`: `boolean` | Default to `true`. If `false`, the menu is hidden if there is only one window displayed. |

```javascript
const bimdataViewer = makeBIMDataViewer(/* {...} */);

const windowConfigurationObject = {
  name: "windowName",
  plugins: [
    /* plugins */
  ],
};

// first way
bimdataViewer.registerPlugin({
  /* plugin specific fields */
  window: windowConfigurationObject,
});

// second way
bimdataViewer.registerWindow(windowConfigurationObject);
```
