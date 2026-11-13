# Vue.js dependency

The BIMData Viewer is built with [Vue.js](https://vuejs.org/). It is available in two builds:

| Build | Vue.js | Import |
| --- | --- | --- |
| Default | Embedded in the viewer bundle | `@bimdata/viewer` |
| Vue external | Provided by your application | `@bimdata/viewer/dist/bimdata-viewer.vue-external.esm.min.js` |

## Default build

If you import `makeBIMDataViewer` from `@bimdata/viewer`, Vue.js is bundled with the viewer. You have nothing else to do.

```js
import makeBIMDataViewer from "@bimdata/viewer";
```

## Use your application's Vue.js

If your application already uses Vue.js, you may prefer the viewer to reuse it instead of loading a second copy. This lets you, for instance, write viewer plugins as regular `.vue` components of your application.

To do so:

1. Import the **vue-external** build of the viewer.
2. Expose your Vue.js as the global `BIMDataViewerVue` before creating the viewer.

```js
// 1. Import the viewer build without Vue.js
import makeBIMDataViewer from "@bimdata/viewer/dist/bimdata-viewer.vue-external.esm.min.js";

// 2. Provide your application's Vue.js to the viewer
import * as Vue from "vue";
window.BIMDataViewerVue = Vue;

const bimdataViewer = makeBIMDataViewer({
  /* your config */
});
```

:::tip
The global variable must be named exactly `BIMDataViewerVue`: this is where the vue-external build looks for Vue.js.
:::

### Example: register a plugin written as a `.vue` component

With this setup, a component of your application can be registered directly as a [viewer plugin](./plugins.md):

```js
import makeBIMDataViewer from "@bimdata/viewer/dist/bimdata-viewer.vue-external.esm.min.js";

import * as Vue from "vue";
window.BIMDataViewerVue = Vue;

import ViewerPluginTest from "./ViewerPluginTest.vue";

const plugintest = {
  name: "testplugin",
  component: ViewerPluginTest,
  button: {
    position: "right",
    content: "panel",
  },
  addToWindows: ["3d"],
};

const bimdataViewer = makeBIMDataViewer({
  /* your config */
});

bimdataViewer.registerPlugin(plugintest);
```
