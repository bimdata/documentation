# Release Notes

## v2.6.1

### Features

 * Add "field of view" param to point cloud viewer parameters
 * Smartview selection feature
 * Smartview show/hide feature
 * Edit smartviews feature

## v2.6.0

### Feature
 * DWG Viewer now supports layouts. You can now switch between different layouts in the same DWG file.
 * [BIMData Viewer can no be used on mobile with a special UI](./mobile.html)
 * Offline archives with PDF models can be lighter with the trade off of higher CPU usage during load.
 * Point density on point clouds is now better
 * Smartviews plugin has been improve and allow to mix many views

### Bugfixes
 * Editing properies works again
 * Fix annotations on 3D and 2D at the same time when 3D annotation goes behind the camera
 * Many fixes in PDF exports with drawings
 * Fix performance issue with Minimap

## v2.5.0

### Feature

 * Viewer Plan: add `includeDrawings` param to `exportAsPdf()` method
 * Add button-structure and button-properties plugins
 * Add `bimdata_elevation` field to state storeys
 * Add zone creation event on local/global contexts
 * Update translations
 * Add `area` and `perimeter` getters on state zones

### Bugfixes

 * Fix: injection for annotation components
 * Fix: pdf page selection in building maker
 * Fix: properly set localContext resolution on pdf export
 * Fix: load xkt file on models with no explicit xkt versions
 * Fix: add model name to IfcProject structure
 * Fix(Viewer 3D): LOD
 * Fix(Viewer Plan): properly handle models without document
 * Fix: add touch event for 3D annotation mode & annotations drag & drop

## v2.4.1

### Bugfixes

 * Correctly load viewpoint if no topic layout specified
 * Fix persistent spinner when opening BCF Manager
 * Fix Meta-Building storey change handler

## v2.4.0

### BREAKING CHANGES

#### Window Lifecycle

`loadWindow` is called in *setup* intead of *mounted*,
This means that it is no longer possible to access `localContext.el` in the `created()` hook,
it will only be available from the `mounted()` hook and after.

Before:
```js
export default {
  created() {
    this.$viewer.localContext.el.addEventListener(
      "contextmenu",
      this.onContextMenu
    );
  },
  // ...
};
```

Now:
```js
export default {
  created() {
    // `this.$viewer.localContext.el` is null here
  },
  mounted() {
    this.$viewer.localContext.el.addEventListener(
      "contextmenu",
      this.onContextMenu
    );
  },
  // ...
};
```

#### Annotation API

Annotation API has been simplified to provide developers with more flexibility and ease of use.

Examples ([IFC](./examples/ifc_annotations.md) and [Plan](./examples/plan_annotations.md)) have been updated accordingly.

See [viewer reference](./reference/annotations.md) to learn more.

### Features

 * [Add globalContext models API](./reference/global_context.md)
 * Provide annotated object to annotation callback (IFC only)
 * [Add `metaBuildingStructure` to viewer plan settings](./reference/native_plugins.md#configuration-5)
 * [Improve PDF export feature](./reference/viewer_plugins.md#viewer-plan)
 * Save & restore BCF topic layout
 * Update xeokit
 * Update english and german translations

### Bugfixes

 * Fix keyboard shortcuts displayed in help modal
 * Fix 3D annotations visibility update
 * Fix IFC property edition

## v2.3.0

### Features

 * Meta-Building Structure
 * First person view + Mini map
 * Add offline options param
 * Add ability to remove the zone editor "Done" button
 * Viewer 3D parameters rework
 * Re-enabled structures root element to show/select all
 * Viewer plan `fitView()` now accepts zone/space UUIDs as parameters
 * Add the ability to dynamically change viewer 3D keyboard layout
 * PDF export optimization

### Bugfixes

 * Fix error on storey change when no model is loaded
 * Fix synchronization & background-2d plugins position
 * Fix viewer plan `fitView()`
 * Fix: `buildingElevation` fallbacks to `siteElevation` if not set
 * Fix: model loader spinner on initialization

## v2.2.0

### Features

 * Update english translations
 * Add `loadDrawings` and `clearDrawings` methods to drawing tools plugin interface

### Bugfixes

 * Fix "scroll on zoom" bug for 3D and point cloud viewers
 * Fix handle touch events for drawing tools
 * Keep current selection when opening BCF topic creation form
 * BCF topic auto open
 * Fix typos

## v2.1.0

### Features

 * [Add ability to switch offline mode dynamically](./reference/offline_mode.html)
 * [Add offline methods customization options](./reference/offline_mode.html)

### Bugfixes

* Add missing iconOpen plugin option.
* window open/close events payload was incorrect.
* Change 'api.offline.dataFile' to 'api.offline.data'.
* add bcfApi and collaborationApi offline customization options.
* remove deprecated of local context & global context plugins getters.

## v2.0.0

### BREAKING CHANGES

#### Vue 3

Update to [Vue.js framework version 3](https://vuejs.org/).
This brings some breaking changes in the writting of plugins due to the major version increase.
Please follow [this guide](https://v3-migration.vuejs.org/) to update your plugins.

#### Import via CDN

The UMD build is no longer available. To use the global `makeBIMDataViewer` function, you need to update the url and add `type="module"` in the script tag.

Before:
```js
<script src="https://cdn.jsdelivr.net/npm/@bimdata/viewer@1.10.0/dist/bimdata-viewer.min.js"></script>
<script>
    const bimdataViewer = makeBIMDataViewer({ ... });
</script>
```

Now:
```js
<script type="module" src="https://cdn.jsdelivr.net/npm/@bimdata/viewer@2.0.0/dist/bimdata-viewer.esm.min.js"></script>
<script>
    const bimdataViewer = makeBIMDataViewer({ ... });
</script>
```

#### Viewer configuration

- **(1)** `menuVisible` property of the `makeBIMDataViewer` `ui` configuration changed to `header`:

```js
// OLD
makeBIMDataViewer({ ui: { menuVisible: true }});

// NEW
makeBIMDataViewer({ ui: { header: true }});
```

- **(2)** `"window-split"` plugin replaced by `"window-manager"`

### FEATURES

[Vue.js v3](https://vuejs.org/) brings the new [composition API](https://vuejs.org/guide/introduction.html#composition-api) & the [script setup support](https://vuejs.org/api/sfc-script-setup.html).

[`$viewer`](/viewer/reference/$viewer.html) is available via injection.

Example of a plugin using the composition API:

```js
import { inject } from "vue";

export default {
  setup() {
    const $viewer = inject("$viewer");
    // your code here
  }
};
```

### DEPRECATED

* To limit incompatibility issues, `destroyed` & `beforeDestroy` vue.js component lifecyles are still available but logged as deprecated. Please migrate to `beforeUnmount` & `unmounted`.

* `localContext` & `globalContext` `incrementSpinnerProcesses` & `decrementSpinnerProcesses` are deprecated, please use `loadingProcessStart` & `loadingProcessEnd` instead.

* `localContext.getPlugin(pluginName: string): Plugin` is deprecated, please use `localContext.plugins: Map<string, Plugin>` instead.
* `globalContext.getPlugins(pluginName: string): Plugin[]` is deprecated, please use `globalContext.plugins: Map<string, Plugin[]>` instead.
* `BIMDataViewerVue` is the `vue.js` instance the viewer is based on. Use it to write render functions or if you use the composition API in your plugins.

### PLUGIN BUILD

Due to the major Vue.js update, plugin build configuration must be updated. As the `h` function is now exposed on the vue.js instance, please use the globally available `BIMDataViewerVue` singleton.

Example of vite configuration:

```js
import { defineConfig } from "vite";

import vue from "@vitejs/plugin-vue";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";
import externalGlobals from "rollup-plugin-external-globals";

export default defineConfig(() => {
  return {
    build: {
      lib: {
        entry: "./src/myPlugin.js",
        formats: ["es"],
        name: "myPlugin",
        fileName: "myPlugin.plugin",
      },
      minify: 'terser',
    },
    plugins: [
      vue(),
      cssInjectedByJsPlugin(),
      externalGlobals({
        vue: 'BIMDataViewerVue', // MANDATORY
      }),
    ],
  };
});
```

## v1.10.1

#### Usages

* Add Point Cloud Viewer section plugin
* Add spinner while loading models on Point Cloud Viewer
* Add PDF Viewer multipage & export features
* Add BCF import/export features
* The viewer embed native Roboto Font
* New Smartview Plugin
* Viewer DWG handles hatches / textures
* Viewer 3D handles duplicated uuids - It is now possible to open two versions of the same model on the same Viewer 3D.
* New viewer 2D shortcut help modal
* Add nav-cube to Point Cloud Viewer
* Rework DWG Layers
* Show properties for systems and zones
* Distinguish objects property sets from type property sets in the properties plugin

#### Developers

* Improved annotation api
* [Add Viewer Plan "pdf-page-changed" event](/viewer/reference/native_plugins.html#viewer-plan)
* [Add ability to pass params to plugin onOpen/onClose methods](/viewer/plugins/plugin_as_button.html#open-close-parameters)
* Add viewer common interface
* [Context menu handles async predicates](/viewer/reference/context_menu.html#command-interface)
* [New bimdataViewer `destroy` method to propertly clean it](/viewer/reference/makeBIMDataViewer.html#makebimdataviewer)
* [New `setObjectsOpacity` method on the Viewer3D plugin](/viewer/reference/native_plugins.html#viewer-3d)
* [Point Cloud Viewer has `xeokitSdk` exposed and its `viewer` property is renamed as `xeokit`](/viewer/reference/native_plugins.html#viewer-point-cloud)
* [Add Viewer Plan 'plan-model-loaded' and 'plan-model-unloaded' events](/viewer/reference/native_plugins.html#viewer-plan)

#### Bugfixes

* Exported PDF have correct annotation size
* Viewer DWG correctly handles unvisible objects when a new model is loaded
* Viewer DWG handles opacity & stroke opacity
* Selection is deactivated when annotation mode is turned on
* Fix annotation API transform style - remove the `transform: translate(-50%, -50%)` native style
* Update some english translations
* Fix elevation loading on react and angular
* Fix IFC Export
* Fix select behaviour on GLTF models
* Fix structure plugin translation types
* Fix DWG texts anchors
* An error when attempting to load an already loaded model
* Do not clear object selection when opening BCF creation form
* Handle deprecated BIMDataAPI IfcApi methods properly

## v1.9.0

#### Usages

* New DWG & DXF viewer windows
* New GED window
* New Building Maker window
* New BCF Manager window
* New Viewer Plan
* It is now possible to open different models on different windows (2D, 3D, ...)
* New 2D Plan synchronisation
* Preview in 3D Model loader
* Improved 2D performance
* Improved 2D drawing capabilities
* 2D Texts
* Improved Properties: search + link documents + PDF preview
* 3D Measures
* Annotations
* Calibration
* 2D & 3D parameters Space visibility toggle
* Rounded 2D lines
* 2D Storey selector can be hidden

#### Developers

* [Exposed Modelsloader](/viewer/reference/global_components.html#modelsloader)
* Upgrade xeokit dependency to 2.2
* Upgrade bimdata 2d-engine dependency to 1.14
* Command Manager removed
* Logger removed
* Warning plugin removed
* Add getLocalContexts(windowName) on [$viewer](/viewer/reference/$viewer.html)
* [Embed BIMData design system](/viewer/customize_the_ui.html#embed-design-system)
* Improve state performances
* Customizable colors
* Use BIMData model API
* Refactor state: change ifc to model

#### Bugfixes

* Display 2D compass correctly while zoomed
* Fix 2D storey navigation (2D state, plan draw order, )
* Fix 2D zoom
* Fix 2D measurement plugin
* improve 3D LOD
* Fix 3D orhtographic projection
* Fix viewer 3D out of sync state
* Fix 2D/3D canvas mouse detection behind Model loader & Storey selector
* 2D/3D parameters clean destroy when the window is closed
* Fix shortcut error while openning the same window twice
* Handle properties long names
* Fix property edition
* Fix window registration
* Fix context menu crash on some conditions
* CSS/SCSS Fixes
* Fix model loader dropdownlist
* Fix autocomplete on search & tags inputs
* Fix crash while openning the viewer twice
* Better viewer bundle packing
* Fix window switching style
* Fix properties showing last selected object
* Hide plugin as button tooltip while the plugin is open

## v1.8.2
#### Developers
* Add [`translateIfcEntities` option](/viewer/reference/native_plugins.html#structure-and-properties)


## v1.8.1
#### Developers
* `getLastEvent` is now referenced in `index.d.ts`. Don't forget to use it (even with .js files) to bring auto-complete in your development tools.


## v1.8.0
#### Usages
* 2D Measurement can now snap to lines. Press CTRL (or cmd) while measuring.
* 3D and 2D camera synchronization is now available in 2D parameters.
* IFC Entities (IfcWall, IfcDoor, etc) are now translated in French (If you want to help us translate them into other languages, please contact us!)
* BCF search now filters on all BCF fields and not only on the title.
* Upgraded Spanish translation

#### Developers
* 2D engine now uses the same coordinates as the 3D engine. You can build even more powerful 2D and 3D interactions.
* Events now have an option `getLastEvent`. If `true`, the last event (if any) is instantly triggered. It is useful for state synchronization on plugin initialization.


## v1.7.4
#### Usages
* Archived models can now be loaded in multi-model if the first model loaded is archived


## v1.7.3
#### Usages
* Add first iteration of Spanish translations


## v1.7.2
#### Usages
* Add first iteration of German translations


## v1.7.1
#### Developers
* Alerts plugin is now enabled on 2d window by default
#### Bugfixes
* Update api client to fix issues with `getExtensions`, `updateExtensions`, `createClassificationElementRelations` and `listClassificationElementRelations` methods

## v1.7.0
#### Usages
* New menu to select windowed plugins
* New UI to manage viewers and windows
* You can now open properties in a new window
* Add ability to take 2D screenshots with annotations
* 3D lights have been improved
* Viewpoint is no more reset when loading another model in the viewer
* Improved 2D rendering
* 2D plan are now aligned to the screen
* 2D now have a compass
* UX improvements with 2D zoom
* 2D improve path measure validation

#### Developers
* Add `2d-model-loaded` and `2d-model-unloaded` [events](/viewer/reference/native_plugins.html#events-2)
* The new 2D engine is now [documented](https://2d-engine.bimdata.io). You can develop plugin drawing stuff in 2D!
* Windows can now have an [icon](/viewer/customize_the_ui.html#window-configuration-object)
* Add 3D annotations [events](https://developers-staging.bimdata.io/viewer/reference/native_plugins.html#events)

#### Bugfixes
* Fix 2D crash if the page loading the viewer doesn't allow `eval` or `new Function()`
* Fix rare 2D crash
* Improve 2D performances on some models
* Fix some French BCF translations
* Fix many small bugs on some browsers
* Object state is now correctly set when opening a new 3D window


## v1.6.2
#### Bugfixes
* Fix bug with logarithmicDepthBuffer. It could cause glitches if two surfaces were too close to each other


## v1.6.1
#### Usages
* Improve default 2D and 3D parameters (Edges, highlight, spaces and space names are enabled by default)


## v1.6.0
#### Usages
* Brand new 2D viewer
* Faster and more accurate rendering
* New measurment plugin: Measure distances, angle and surfaces easily!
* Space names are shown in 2D
* Door openings are shown in 2D
* You can disable and enable door openings and space names
* 2D objects can be colorized
* 2D objects can be textured
* User's 3D and 2D configurations are saved
* Many performances improvements

#### Developers
* Open and close event are now always triggered on edge-cases

#### Bugfixes
* Section plane plugin now show sections loaded from BCF
* Fix loadIfc method when ifcId is a string instead of an integer


## v1.5.6
#### Bugfixes
* Performance fixes


## v1.5.0
#### Developers
* Add [showAllAnnotations option](/viewer/reference/native_plugins.html#bcf) to BCF plugin
* Add structure window as available window by default. `bimdataViewer.unregisterWindow('structure')` to remove it.
* Add [getRawElements()](/viewer/reference/$viewer.html#getrawelements)

#### Bugfixes
* Fix BCF bucket tip which showed the wrong shortcut
* Fix objects being cut when to close from camera
* Fix xraySetters


## v1.4.1
#### Bugfixes
* Fix [object properties](/viewer/reference/state.html#object) that may not be accessible in some contexts


## v1.4.0
#### Usages
* Improve 3D rendering performances up to 25%

#### Developers
* [BCF current-user can now be fetched from a custom endpoint](/viewer/reference/native_plugins.html#bcf)
* [Add method to reload Structure plugin](/viewer/reference/native_plugins.html#structure-and-properties)
* [Move getRawElements() method to $viewer.state.api](/viewer/reference/$viewer.html#getrawelements)

#### Bugfixes
* Fix picking on big 3D models
* Fix `object.getFirstAncestorWithType()` which may be not defined on some cases
* Fix plugin `$close()` triggered even if the plugin wasn't opened when `keepOpen = false`


## v1.3.0

#### Usages
* New Section planes tool
* New pivot marker
* New pivot behavior when clicking outside the model. It's easier than ever to navigate in the model
* Spatial tree is no more opened if model have more than 8 IfcBuildings (to decrease loading time)
* First person projection is now named "Flight mode"
* Elements highlight on mouse hover is now disabled in Flight mode

#### Developers
* [BCF users can now be fetched from a custom endpoint](/viewer/reference/native_plugins.html#bcf)
* [Increase render and pick precision for very large models](https://github.com/xeokit/xeokit-sdk/issues/254)
* [Add methods to retrieve objects, children, siblings and parents](/viewer/reference/state.html#object)
* [Add logger level configuration in makeBIMDataViewer](/viewer/reference/makeBIMDataViewer.html#logger)
* [Add viewer instance setLocale method](/viewer/reference/makeBIMDataViewer.html#locale)

#### Bugfixes
* Fix BCF interface if loading was slower than the human
* Fix multi model selection if there was too many models in the project
* Fix context menu (right click) after full screen is swifted off
* Fix french typo

## Migration Guide from 0.x to 1.x

This is the first major BIMData Viewer update. Thanks to your feebacks, we have improved the API. It is now more intuitive, more powerful and there are many new features.
This guide will only show you how to upgrade your plugins. If you want to see the new feature in detail, see the [viewer documentation](/viewer/index.html).

Major features:
- The 2D Viewer is now available.
- Implement your plugins in [dedicated windows and build even more powerful tools](/viewer/customize_the_ui.html#overview).
- Implement [loading screens](/viewer/reference/$viewer.html#global-and-local-contexts).
- [Modals](/viewer/reference/$viewer.html#modals).
- [Custom Right click actions](/viewer/reference/context_menu.html#get-the-context-menu).
- Improved integration in various web environments.
- Better performances.
- Improved multi-models loading and positioning.
- [Undo/Redo (CTRL-Z)](/viewer/reference/state.html#undo-redo) on state change actions.


### Viewer instance

#### ES Module

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

#### Script tag


<code-group>
<code-block title="Version 0.x">

```html
<script src="https://unpkg.com/@bimdata/viewer@^0.8.22/dist/bimdata-viewer.min.js" charset="utf-8"></script>
```
</code-block>
<code-block title="Version 1.x">

```html
<script src="https://cdn.jsdelivr.net/npm/@bimdata/viewer@1.9.3" charset="utf-8"></script>
```
</code-block>
</code-group>

#### Refresh access token

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

#### Change language

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

### Plugin configuration file

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

### Plugin API

#### Object change

::: warning
Version 0.x used objects `uuids` as `id`. To handle identical `uuids` (eg: in model versioning), objects in version 1.x now have a unique `id` added by the viewer. It is still possible to access `uuid` using `object.uuid`. All viewer methods used `id` and not `uuid`. Be carefull to correctly link the two properties.
:::

::: tip
There are `uuids` utilities. See the [state reference](/viewer/reference/state.html#ids-and-uuids).
:::

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

#### Setters

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

#### Getters

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

::: tip
- [$viewer reference](/viewer/reference/$viewer.html#viewer).
- [State getters reference](/viewer/reference/state.html#getters).
:::

#### BIMData API Client

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

#### Structure helpers

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

::: tip
See [state object reference](/viewer/reference/state.html#object).
:::

#### Model Loading

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

#### Error message

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


#### Modals

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
