---
sidebarDepth: 2
---

# Migration Guide from 0.x to 1.x

This is the first major BIMData Viewer update. Thanks to your feebacks, we have improved the API. It is now more intuitive, more powerful and there are many new features.
This guide will only show you how to upgrade your plugins. If you want to see the new feature in detail, see the [viewer documentation](/viewer/index.html).

Major features:
- The 2D Viewer is now available.
- Implement your plugins in [dedicated windows and build even more powerful tools](/viewer/customize_the_ui.html#overview).
- Implement [loading screens](/viewer/reference/$viewer.html#global-and-local-contexts).
- [Modals](/viewer/reference/$viewer.html#modals).
- [Custom Right click actions](/viewer/reference/context_menu.html#get-the-context-menu).
- Improved integration in [various web environments](/viewer/getting_started.html#installation).
- Better performances.
- Improved multi-models loading and positioning.
- [Offline support](/viewer/reference/offline.html#offline-mode).
- [Undo/Redo (CTRL-Z)](/viewer/reference/state.html#undo-redo) on state change actions.


## Viewer instance

### ES Module

<ClientOnly>
<code-group>
<code-block title="Version 0.x">

```javascript
import BIMDataViewer from "@bimdata/viewer";

const cfg = {
    cloudId: 88,
    projectId: 100,
    ifcIds: [175],
    bimdataPlugins: {
        bcf: false,
        merge: false,
        allowExport: false
    }
};
const accessToken = 'DEMO_TOKEN';
const {viewer, store, eventHub, setAccessToken} = initBIMDataViewer('app', accessToken, cfg);
```
</code-block>
<code-block title="Version 1.x">

```javascript
import makeBIMDataViewer from "@bimdata/viewer";

const bimdataViewer = makeBIMDataViewer({
  api: {
    ifcIds: [2283],
    cloudId: 515,
    projectId: 756,
    accessToken: "fc83e49ca9444d3ea41d212599f39040",
    apiUrl: "https://api.bimdata.io",
  },
  plugins: {
    bcf: false,
    "structure-properties": {
      merge: false,
      export: false
    }
  }
});

const vm = bimdataViewer.mount("#app");
```
</code-block>
<code-block title="Both">

```javascript
/******* VERSION 0.X *******/

import BIMDataViewer from "@bimdata/viewer";

const cfg = {
    cloudId: 88,
    projectId: 100,
    ifcIds: [175],
    bimdataPlugins: {
        bcf: false,
        merge: false,
        allowExport: false
    }
};
const accessToken = 'DEMO_TOKEN';
const {viewer, store, eventHub, setAccessToken} = initBIMDataViewer('app', accessToken, cfg);

/******* VERSION 1.X *******/

import makeBIMDataViewer from "@bimdata/viewer";

const bimdataViewer = makeBIMDataViewer({
  api: {
    ifcIds: [2283],
    cloudId: 515,
    projectId: 756,
    accessToken: "fc83e49ca9444d3ea41d212599f39040",
    apiUrl: "https://api.bimdata.io",
  },
  plugins: {
    bcf: false,
    "structure-properties": {
      merge: false,
      export: false
    }
  }
});

const vm = bimdataViewer.mount("#app");
```
</code-block>

</code-group>
</ClientOnly>

### Script tag


<ClientOnly>
<code-group>
<code-block title="Version 0.x">

```html
<script src="https://unpkg.com/@bimdata/viewer@^0.8.22/dist/bimdata-viewer.min.js" charset="utf-8"></script>
```
</code-block>
<code-block title="Version 1.x">

```html
<script src="https://unpkg.com/@bimdata/viewer@^1.2.0" charset="utf-8"></script>
```
</code-block>
</code-group>
</ClientOnly>

### Refresh access token

<ClientOnly>
<code-group>
<code-block title="Version 0.x">

```javascript
const {viewer, store, eventHub, setAccessToken} = initBIMDataViewer('app', accessToken, cfg);
setAccessToken(newToken);
```
</code-block>
<code-block title="Version 1.x">

```javascript
bimdataViewer.setAccessToken(newToken);
```
</code-block>
</code-group>
</ClientOnly>

### Change language

<ClientOnly>
<code-group>
<code-block title="Version 0.x">

```javascript
const {viewer, store, eventHub, setAccessToken} = initBIMDataViewer('app', accessToken, cfg);
viewer.$i18n.locale = locale;
```
</code-block>
<code-block title="Version 1.x">

```javascript
viewerVm.$i18n.locale = locale;
```
</code-block>
</code-group>
</ClientOnly>

## Plugin configuration file

<ClientOnly>
<code-group>
<code-block title="Version 0.x">

```javascript
export default {
  name: "bimObjectPlugin",
  component: BimobjectComponent,
  display: {
    iconPosition: "right",
    content: "windowed",
  },
  keepActive: true,
  tooltip: "tooltip",
  icon: {
    imgUri: icon,
  },
  i18n: {
    en: {
      tooltip: "BIMobject",
      successMessage: "Objects updated",
    },
    fr: {
      tooltip: "BIMobject",
      successMessage: "Objects mis à jour",
    },
  },
};
```
</code-block>
<code-block title="Version 1.x">

```javascript
export default {
  name: "bimObjectPlugin",
  component: BimobjectComponent,
  addToWindows: ["3d", "2d"], // You must define in which windows your plugin will be visible. ["3d", "2d"] is the default behavior
  button: {
    position: "right",
    content: "panel",
    keepOpen: true,
    tooltip: "bimObjectPlugin.tooltip", // All tranlations are injected is an intermediate object named as the plugin to avoid conflicts. You must prefix all translations with the plugin name
    icon: {
      imgUri: icon,
    },
  },
  i18n: {
    en: {
      tooltip: "BIMobject",
      successMessage: "Element(s) updated",
    },
    fr: {
      tooltip: "BIMobject",
      successMessage: "Élément(s) mis à jour",
    },
  },
};
```
</code-block>
<code-block title="Both">

```javascript
/******* VERSION 0.X *******/

export default {
  name: "bimObjectPlugin",
  component: BimobjectComponent,
  display: {
    iconPosition: "right",
    content: "windowed",
  },
  keepActive: true,
  tooltip: "tooltip",
  icon: {
    imgUri: icon,
  },
  i18n: {
    en: {
      tooltip: "BIMobject",
      successMessage: "Objects updated",
    },
    fr: {
      tooltip: "BIMobject",
      successMessage: "Objects mis à jour",
    },
  },
};

/******* VERSION 1.X *******/

export default {
  name: "bimObjectPlugin",
  component: BimobjectComponent,
  addToWindows: ["3d", "2d"], // You must define in which windows your plugin will be visible. ["3d", "2d"] is the default behavior
  button: {
    position: "right",
    content: "panel",
    keepOpen: true,
    tooltip: "bimObjectPlugin.tooltip", // All tranlations are injected is an intermediate object named as the plugin to avoid conflicts. You must prefix all translations with the plugin name
    icon: {
      imgUri: icon,
    },
  },
  i18n: {
    en: {
      tooltip: "BIMobject",
      successMessage: "Element(s) updated",
    },
    fr: {
      tooltip: "BIMobject",
      successMessage: "Élément(s) mis à jour",
    },
  },
};
```
</code-block>
</code-group>
</ClientOnly>

## Plugin API

### Object change

::: warning
Version 0.x used objects `uuids` as `id`. To handle identical `uuids` (eg: in model versioning), objects in version 1.x now have a unique `id` added by the viewer. It is still possible to access `uuid` using `object.uuid`. All viewer methods used `id` and not `uuid`. Be carefull to correctly link the two properties.
:::

::: tip
There are `uuids` utilities. See the [state reference](/viewer/reference/state.html#ids-and-uuids).
:::

<ClientOnly>
<code-group>
<code-block title="Version 0.x">

```javascript
this.$hub.on("select-objects", ({ ids }) => { /* Do something with ids. */ });
```
</code-block>
<code-block title="Version 1.x">

```javascript
this.$viewer.state.hub.on("objects-selected", ({ objects }) => { /* Do something with objects. */ });
```
</code-block>
</code-group>
</ClientOnly>

### Setters

<ClientOnly>
<code-group>
<code-block title="Version 0.x">

```javascript
this.$hub.emit("select-objects", { ids: [/* object ids to be selected */] });
```
</code-block>
<code-block title="Version 1.x">

```javascript
this.$viewer.state.selectObjects([/* object ids to be selected */]);
```
</code-block>
</code-group>
</ClientOnly>

### Getters

<ClientOnly>
<code-group>
<code-block title="Version 0.x">

```javascript
this.$utils.getCloudId();
this.$utils.getProjectId();
this.$utils.getAccessToken();
```
</code-block>
<code-block title="Version 1.x">

```javascript
this.$viewer.api.cloudId;
this.$viewer.api.projectId;
this.$viewer.api.accessToken;
```
</code-block>
</code-group>
</ClientOnly>

::: tip
- [$viewer reference](/viewer/reference/$viewer.html#viewer).
- [State getters reference](/viewer/reference/state.html#getters).
:::

### BIMData API Client

<ClientOnly>
<code-group>
<code-block title="Version 0.x">

```javascript
const apiClient = new this.$bimdataApiClient.IfcApi();
```
</code-block>
<code-block title="Version 1.x">

```javascript
const apiClient = new this.$viewer.api.apiClient.IfcApi();
// All API calls are the same
```
</code-block>
</code-group>
</ClientOnly>

### Structure helpers

<ClientOnly>
<code-group>
<code-block title="Version 0.x">

```javascript
this.$utils.getObjectParent(id);
this.$utils.getObjectSpace(id);
this.$utils.getObjectAncestorByType(id, type);
```
</code-block>
<code-block title="Version 1.x">

```javascript
// structure methods are now object's methods
object.parent;
object.space;
object.getFirstAncestorWithType(type);
```
</code-block>
</code-group>
</ClientOnly>

::: tip
See [state object reference](/viewer/reference/state.html#object).
:::

### Model Loading

<ClientOnly>
<code-group>
<code-block title="Version 0.x">

```javascript
this.$utils.loadIfc(ifcs);
this.$utils.unloadIfc(ifcs);

const loadedIfc = this.$utils.getSelectedIfcs()[0];
```
</code-block>
<code-block title="Version 1.x">

```javascript
await this.$viewer.state.loadIfcs([ifcIds]);
// Resolve when ifcs are added in the state, not when the 3D viewer has loaded them
this.$viewer.state.unloadIfcs([ifcIds]);

const loadedIfc = this.$viewer.state.ifcs[0];
```
</code-block>
</code-group>
</ClientOnly>

### Error message

<ClientOnly>
<code-group>
<code-block title="Version 0.x">

```javascript
this.$hub.emit("alert", {
  type: "success",
  message: this.$t("successMessage"),
});
```
</code-block>
<code-block title="Version 1.x">

```javascript
this.$viewer.localContext.hub.emit("alert", {
  type: "success",
  message: this.$t("bimObjectPlugin.successMessage"),
});
```
</code-block>
</code-group>
</ClientOnly>


### Modals

<ClientOnly>
<code-group>
<code-block title="Version 0.x">

```javascript
this.$plugins.modalManager.pushModal(modal);
```
</code-block>
<code-block title="Version 1.x">

```javascript
this.$viewer.globalContext.modals.pushModal(modal);
```
</code-block>
</code-group>
</ClientOnly>
