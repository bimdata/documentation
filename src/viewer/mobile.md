# Mobile

A plugin with specific mobile interactions is natively available in the BIMDataViewer. To use it, give the `"mobile"` window name as second argument of the [mount method](/viewer/reference/mount.html) when mounting the BIMDataViewer into the DOM.

```js
bimdataViewer.mount("#app", "mobile");
```

<img width=500px src="/assets/img/viewer/viewer-mobile.png" alt="Viewer Mobile">

The plugin is composed of **three** main elements from top to bottom:

- storey selector
- viewer 2D as a mini map
- viewer 3D

It has the following [instance](/viewer/reference/plugin.html#plugin-component-instance) API:

| property              | Description                                                                                                                                            |
| :-------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------- |
| `map2dShown: boolean` | If `false`, the viewer 2D or mini map is not shown.                                                                                                    |
| `viewer2d: Object`    | The [Vue.js](https://vuejs.org/) component holding the [BIMData 2D-Engine](https://2d-engine.bimdata.io/) on the `engine2d` property.                  |
| `viewer3d: Object`    | The [Vue.js](https://vuejs.org/) component holding the 3D viewer from the [xeokit-sdk](https://github.com/xeokit/xeokit-sdk) on the `xeokit` property. |

```js
const mobilePlugin = $viewer.globalContext.plugins.get("mobile")[0];

const engine2d = mobilePlugin.viewer2d.engine2d;
const xeokit = mobilePlugin.viewer3d.xeokit;
```

## Loading model

The model loaded into the mobile plugin is the one loaded on the [localContext](/viewer/reference/local_context.html#local-state).

```js
this.$viewer.localContext.loadModels([myModelId]);
```

Or at startup using the config object of the [makeBIMDataViewer](/viewer/reference/makeBIMDataViewer.html#api) function.

```js
const bimdataViewer = makeBIMDataViewer({
  api: {
    modelIds: [15097], // < ---
    cloudId: 10344,
    projectId: 237466,
    accessToken: "TAbdyPzoQeYgVSMe4GUKoCEfYctVhcwJ",
  },
});
```

## Mobile browsers

If you plan to embed the viewer into a web page that will be accessed on mobile
make sure to add the following `<meta />` tag in the `<head>` of your html document:

```html
<meta name="viewport" content="width=device-width,initial-scale=1.0" />
```

This ensure that the viewer is displayed properly on both desktop and mobile devices
([learn more](https://developer.mozilla.org/en-US/docs/Web/HTML/Viewport_meta_tag)).
