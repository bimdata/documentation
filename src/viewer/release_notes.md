# Release Notes

## v2.18.0 (2026-08-26)

### Feature

 * **New Fragments Viewer** !!!
 * Layout: allow multiple side panels in local context
 * Mobile: Viewer Mobile DWG

### Bugfixes

 * BCF: topic state sync

## v2.17.2 (2026-05-25)

### Features

 * IFC 3D: add color selector in context menu

### Bugfixes

 * IFC 2D / DWG: white lines in dark mode

## v2.17.1 (2026-04-23)

### Bugfixes

 * IFC 3D: fix demo xkt loading

## v2.17.0 (2026-04-08)

### Features

 * IFC 2D: new synchronization plugin (with anchors)
 * Plan: fit view on all plans

### Bugfixes

 * IFC: fix bug in first person view mode
 * IFC: fix fit view when loading multiple models at once
 * IFC: improve performance of structure plugin

## v2.16.3 (2026-02-26)

### Bugfixes

 * IFC 2D: show spaces areas
 * IFC 2D: fix rotation issue
 * Plan: add tooltip on clibration button
 * BCF: avoid error when exporting many topics

## v2.16.2 (2026-02-10)

### Bugfixes

 * IFC 2D: fix rotation plugin for Mac OS
 * Mobile: fix 3D engine setup and 2D camera positioning
 * Point Cloud: tile handle full rootTransform matrix 

## v2.16.1 (2026-01-22)

### Bugfixes

 * DWG: fix new Engine 2D integration

## v2.16.0 (2026-01-08)

### Features

 * DWG: new Engine 2D with better perfomance

### Bugfixes

 * Plan: fix drawings in PDF models

## v2.15.1 (2026-01-07)

### Bugfixes

 * Plan: fix measurement plugin

## v2.15.0 (2025-12-09)

### Features

 * IFC/Plan: Annotation 360

### Bugfixes

 * BCF: fix bcf export when all topics are selected
 * Point Cloud: handle tile data with no content
 * Point Cloud: fix tiles center positioning
 * Plan: fix model transform with multiple plans

## v2.14.0 (2025-11-14)

### Features

 * IFC: partial loading: ability to filter loaded elements via viewer config ([see example](./examples/partial_loading.md))
 * Plan: display zones/spaces for models other than Meta Building
 * Plan: rotation plugin
 * Plan: 360 annotations
 * BCF: view annotations of all topics
 * BCF: topic documents and groups

### Bugfixes

 * BCF: properly handle overflow for topic objects list
 * i18n: update and fix translations for English, German and Spanish

## v2.13.0 (2025-10-27)

### Features

 * Viewer Plan: add `fitViewRequested` param to [`selectStorey`](./reference/local_context.md#local-state) method

### Bugfixes

 * Fix bug with button plugin active state
 * Fix bugs with multiple viewer instances on the same page
 * Fix 3D camera control keymap
 * Fix 3D model loading with no chunks
 * Fix Point Cloud section plugin
 * Fix caliper for DWG measures
 * Plan: Fix `fitView` for zones/spaces

## v2.12.0 (2025-07-30)

### Features

 * Viewer Plan refactoring
 * [Viewer Plan Mobile](./mobile.md#mobile-viewer-plan)
 * Plan: add plan mask feature
 * Plan: add 'panDisabled' option to drawing-tools config
 * Plan: use `model.transform` instead of storey plan porsitioning
 * Plan: label plugin
 * DWG: add calibration tool

### Bugfixes

 * MetaBuilding: fix view fit on storey change
 * IFC 2D: fix setPickable/Unpickable
 * Plan: fix bug when spam clicking 'next page' button
 * Plan: use Pointer Events instead of Touch Events in drawing-tools

## v2.11.0 (2025-06-11)

### Features

 * BCF: add 'stage' field to export and filters
 * IFC: 3D models chunks
 * Plan: Model Positioning
 * Plan: add drawing events on create, update, delete

### Bugfixes

 * BCF: handle topics whith no model attached
 * BCF: open topic 'default' window if no layout is specified
 * BCF: use user locale in xlsx export
 * Model Loader: fix bug with model preview
 * IFC: properly handle model unload in structure
 * Plan: fix drawings on PDF pages
 * Plan: fix PDF export on chromium based browsers

## v2.10.1 (2025-05-12)

### Bugfixes

 * Avoid error when switching PDF pages quickly
 * Update API client to v10.21.3

## v2.10.0 (2025-04-28)

### Features

 * 3D Section plugin rework. The section planes are no longer disabled when the plugin is closed.

### Bugfixes

 * BCF comment snapshot with multi-windows was broken
 * DWG Layers CSS issue

## v2.9.0 (2025-04-23)

### Features

 * New model loader UI
 * Viewer IFC 3D: add 'Interactive Spaces' parameter (can be switched *On* or *Off*, was always *On* before)
 * Improve IFC structure performance
 * Improve PDF export performance

### Bugfixes

 * Fix: handle viewer photosphere topic viewpoint
 * Fix: improve mobile compatibility
 * Fix: encapsulate internal styles to avoid CSS leaks
 * Fix: drawings creation on mobile device
 * Fix: children count in IFC structure tree
 * Fix: PDF viewer window resize

## v2.8.0 (2025-03-10)

### Features

 * Drawing tools text color

### Bugfixes

 * Fix plan section deletion error

## v2.7.0 (2025-02-17)

### Features

 * Photosphere viewer
 * Improve PDF export performance
 * Improve Structure performance
 * i18n: Update translations

### Bugfixes

 * Fix BCF annotation edition (create/update/delete)
 * Avoid annotation drag & drop on right-click

## v2.6.1 (2024-12-12)

### Features

 * Add "field of view" param to point cloud viewer parameters
 * Smartview selection feature
 * Smartview show/hide feature
 * Edit smartviews feature

## v2.6.0 (2024-11-18)

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

## v2.5.0 (2024-09-25)

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

## v2.4.1 (2024-08-14)

### Bugfixes

 * Correctly load viewpoint if no topic layout specified
 * Fix persistent spinner when opening BCF Manager
 * Fix Meta-Building storey change handler

## v2.4.0 (2024-08-09)

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

## v2.3.0 (2024-06-27)

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

## v2.2.0 (2024-04-29)

### Features

 * Update english translations
 * Add `loadDrawings` and `clearDrawings` methods to drawing tools plugin interface

### Bugfixes

 * Fix "scroll on zoom" bug for 3D and point cloud viewers
 * Fix handle touch events for drawing tools
 * Keep current selection when opening BCF topic creation form
 * BCF topic auto open
 * Fix typos

## v2.1.0 (2024-03-22)

### Features

 * [Add ability to switch offline mode dynamically](./reference/offline_mode.html)
 * [Add offline methods customization options](./reference/offline_mode.html)

### Bugfixes

* Add missing iconOpen plugin option.
* window open/close events payload was incorrect.
* Change 'api.offline.dataFile' to 'api.offline.data'.
* add bcfApi and collaborationApi offline customization options.
* remove deprecated of local context & global context plugins getters.

## v2.0.0 (2024-03-07)

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

[`$viewer`](./reference/$viewer) is available via injection.

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

## v1.10.1 (2023-06-14)

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
* [Add Viewer Plan "pdf-page-changed" event](./reference/native_plugins#viewer-plan)
* [Add ability to pass params to plugin onOpen/onClose methods](./guide/plugins#plugin_as_button)
* Add viewer common interface
* [Context menu handles async predicates](./reference/context_menu#command-interface)
* [New bimdataViewer `destroy` method to propertly clean it](./reference/makeBIMDataViewer)
* [New `setObjectsOpacity` method on the Viewer3D plugin](./reference/native_plugins#viewer-3d-ifc)
* [Point Cloud Viewer has `xeokitSdk` exposed and its `viewer` property is renamed as `xeokit`](./reference/native_plugins#viewer-point-cloud)
* [Add Viewer Plan 'plan-model-loaded' and 'plan-model-unloaded' events](./reference/native_plugins#viewer-plan)

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

## v1.9.0 (2022-11-24)

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

* [Exposed Modelsloader](./reference/global_components#modelsloader)
* Upgrade xeokit dependency to 2.2
* Upgrade bimdata 2d-engine dependency to 1.14
* Command Manager removed
* Logger removed
* Warning plugin removed
* Add getLocalContexts(windowName) on [$viewer](./reference/$viewer)
* [Embed BIMData design system](./guide/index)
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

## v1.8.2 (2021-11-12)
#### Developers
* Add [`translateIfcEntities` option](./reference/native_plugins#structure-and-properties)


## v1.8.1 (2021-11-10)
#### Developers
* `getLastEvent` is now referenced in `index.d.ts`. Don't forget to use it (even with .js files) to bring auto-complete in your development tools.


## v1.8.0 (2021-11-10)
#### Usages
* 2D Measurement can now snap to lines. Press CTRL (or cmd) while measuring.
* 3D and 2D camera synchronization is now available in 2D parameters.
* IFC Entities (IfcWall, IfcDoor, etc) are now translated in French (If you want to help us translate them into other languages, please contact us!)
* BCF search now filters on all BCF fields and not only on the title.
* Upgraded Spanish translation

#### Developers
* 2D engine now uses the same coordinates as the 3D engine. You can build even more powerful 2D and 3D interactions.
* Events now have an option `getLastEvent`. If `true`, the last event (if any) is instantly triggered. It is useful for state synchronization on plugin initialization.


## v1.7.4 (2021-10-18)
#### Usages
* Archived models can now be loaded in multi-model if the first model loaded is archived


## v1.7.3 (2021-10-13)
#### Usages
* Add first iteration of Spanish translations


## v1.7.2 (2021-10-11)
#### Usages
* Add first iteration of German translations


## v1.7.1 (2021-09-29)
#### Developers
* Alerts plugin is now enabled on 2d window by default
#### Bugfixes
* Update api client to fix issues with `getExtensions`, `updateExtensions`, `createClassificationElementRelations` and `listClassificationElementRelations` methods

## v1.7.0 (2021-09-17)
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
* Add `2d-model-loaded` and `2d-model-unloaded` [events](./reference/native_plugins#events-1)
* The new 2D engine is now [documented](https://2d-engine.bimdata.io). You can develop plugin drawing stuff in 2D!
* Windows can now have an [icon](./guide/index)
* Add 3D annotations [events](./reference/native_plugins#events)

#### Bugfixes
* Fix 2D crash if the page loading the viewer doesn't allow `eval` or `new Function()`
* Fix rare 2D crash
* Improve 2D performances on some models
* Fix some French BCF translations
* Fix many small bugs on some browsers
* Object state is now correctly set when opening a new 3D window


## v1.6.2 (2021-05-12)
#### Bugfixes
* Fix bug with logarithmicDepthBuffer. It could cause glitches if two surfaces were too close to each other


## v1.6.1 (2021-05-10)
#### Usages
* Improve default 2D and 3D parameters (Edges, highlight, spaces and space names are enabled by default)


## v1.6.0 (2021-05-10)
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


## v1.5.6 (2021-03-25)
#### Bugfixes
* Performance fixes


## v1.5.0 (2021-02-19)
#### Developers
* Add [showAllAnnotations option](./reference/native_plugins#bcf) to BCF plugin
* Add structure window as available window by default. `bimdataViewer.unregisterWindow('structure')` to remove it.
* Add [getRawElements()](./reference/$viewer#getrawelements)

#### Bugfixes
* Fix BCF bucket tip which showed the wrong shortcut
* Fix objects being cut when to close from camera
* Fix xraySetters


## v1.4.1 (2021-02-08)
#### Bugfixes
* Fix [object properties](./reference/state.html#object) that may not be accessible in some contexts


## v1.4.0 (2021-02-02)
#### Usages
* Improve 3D rendering performances up to 25%

#### Developers
* [BCF current-user can now be fetched from a custom endpoint](./reference/native_plugins#bcf)
* [Add method to reload Structure plugin](./reference/native_plugins#structure-and-properties)
* [Move getRawElements() method to $viewer.state.api](./reference/$viewer#getrawelements)

#### Bugfixes
* Fix picking on big 3D models
* Fix `object.getFirstAncestorWithType()` which may be not defined on some cases
* Fix plugin `$close()` triggered even if the plugin wasn't opened when `keepOpen = false`


## v1.3.0 (2021-01-20)

#### Usages
* New Section planes tool
* New pivot marker
* New pivot behavior when clicking outside the model. It's easier than ever to navigate in the model
* Spatial tree is no more opened if model have more than 8 IfcBuildings (to decrease loading time)
* First person projection is now named "Flight mode"
* Elements highlight on mouse hover is now disabled in Flight mode

#### Developers
* [BCF users can now be fetched from a custom endpoint](./reference/native_plugins#bcf)
* [Increase render and pick precision for very large models](https://github.com/xeokit/xeokit-sdk/issues/254)
* [Add methods to retrieve objects, children, siblings and parents](./reference/state#objects)
* [Add logger level configuration in makeBIMDataViewer](./reference/makeBIMDataViewer#logger)
* [Add viewer instance setLocale method](./reference/makeBIMDataViewer#locale)

#### Bugfixes
* Fix BCF interface if loading was slower than the human
* Fix multi model selection if there was too many models in the project
* Fix context menu (right click) after full screen is swifted off
* Fix french typo

## Migration Guide from 0.x to 1.x

This is the first major BIMData Viewer update. Thanks to your feebacks, we have improved the API. It is now more intuitive, more powerful and there are many new features.
This guide will only show you how to upgrade your plugins. If you want to see the new feature in detail, see the [viewer documentation](./index).

Major features:
- The 2D Viewer is now available.
- Implement your plugins in [dedicated windows and build even more powerful tools](./guide/index).
- Implement [loading screens](./reference/$viewer#global-and-local-contexts).
- [Modals](./reference/$viewer#modals).
- [Custom Right click actions](./reference/context_menu#get-the-context-menu).
- Improved integration in various web environments.
- Better performances.
- Improved multi-models loading and positioning.
- [Undo/Redo (CTRL-Z)](./reference/state#undo-redo) on state change actions.


### Viewer instance

#### ES Module

::: code-group

```javascript [Version 0.x]
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
const { viewer, store, eventHub, setAccessToken } = initBIMDataViewer('app', accessToken, cfg);
```

```javascript [Version 1.x]
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

```javascript [Both]
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
const { viewer, store, eventHub, setAccessToken } = initBIMDataViewer('app', accessToken, cfg);

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
:::

#### Script tag


::: code-group

```html [Version 0.x]
<script src="https://unpkg.com/@bimdata/viewer@^0.8.22/dist/bimdata-viewer.min.js" charset="utf-8"></script>
```

```html [Version 1.x]
<script src="https://cdn.jsdelivr.net/npm/@bimdata/viewer@1.9.3" charset="utf-8"></script>
```
:::

#### Refresh access token

::: code-group

```javascript [Version 0.x]
const {viewer, store, eventHub, setAccessToken} = initBIMDataViewer('app', accessToken, cfg);
setAccessToken(newToken);
```

```javascript [Version 1.x]
bimdataViewer.setAccessToken(newToken);
```
:::

#### Change language

::: code-group

```javascript [Version 0.x]
const {viewer, store, eventHub, setAccessToken} = initBIMDataViewer('app', accessToken, cfg);
viewer.$i18n.locale = locale;
```

```javascript [Version 1.x]
viewerVm.$i18n.locale = locale;
```
:::

### Plugin configuration file

::: code-group

```javascript [Version 0.x]
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

```javascript [Version 1.x]
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

```javascript [Both]
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
:::

### Plugin API

#### Object change

::: warning
Version 0.x used objects `uuids` as `id`. To handle identical `uuids` (eg: in model versioning), objects in version 1.x now have a unique `id` added by the viewer. It is still possible to access `uuid` using `object.uuid`. All viewer methods used `id` and not `uuid`. Be carefull to correctly link the two properties.
:::

::: tip
There are `uuids` utilities. See the [state reference](./reference/state#objects).
:::

::: code-group

```javascript [Version 0.x]
this.$hub.on("select-objects", ({ ids }) => { /* Do something with ids. */ });
```

```javascript [Version 1.x]
this.$viewer.state.hub.on("objects-selected", ({ objects }) => { /* Do something with objects. */ });
```
:::

#### Setters

::: code-group

```javascript [Version 0.x]
this.$hub.emit("select-objects", { ids: [/* object ids to be selected */] });
```

```javascript [Version 1.x]
this.$viewer.state.selectObjects([/* object ids to be selected */]);
```
:::

#### Getters

::: code-group

```javascript [Version 0.x]
this.$utils.getCloudId();
this.$utils.getProjectId();
this.$utils.getAccessToken();
```

```javascript [Version 1.x]
this.$viewer.api.cloudId;
this.$viewer.api.projectId;
this.$viewer.api.accessToken;
```
:::

::: tip
- [$viewer reference](./reference/$viewer).
- [State getters reference](./reference/state#objects-getters).
:::

#### BIMData API Client

::: code-group

```javascript [Version 0.x]
const apiClient = new this.$bimdataApiClient.IfcApi();
```

```javascript [Version 1.x]
const apiClient = new this.$viewer.api.apiClient.IfcApi();
// All API calls are the same
```
:::

#### Structure helpers

::: code-group

```javascript [Version 0.x]
this.$utils.getObjectParent(id);
this.$utils.getObjectSpace(id);
this.$utils.getObjectAncestorByType(id, type);
```

```javascript [Version 1.x]
// structure methods are now object's methods
object.parent;
object.space;
object.getFirstAncestorWithType(type);
```
:::

::: tip
See [state object reference](./reference/state#objects).
:::

#### Model Loading

::: code-group

```javascript [Version 0.x]
this.$utils.loadIfc(ifcs);
this.$utils.unloadIfc(ifcs);

const loadedIfc = this.$utils.getSelectedIfcs()[0];
```

```javascript [Version 1.x]
await this.$viewer.state.loadIfcs([ifcIds]);
// Resolve when ifcs are added in the state, not when the 3D viewer has loaded them
this.$viewer.state.unloadIfcs([ifcIds]);

const loadedIfc = this.$viewer.state.ifcs[0];
```
:::

#### Error message

::: code-group

```javascript [Version 0.x]
this.$hub.emit("alert", {
  type: "success",
  message: this.$t("successMessage"),
});
```

```javascript [Version 1.x]
this.$viewer.localContext.hub.emit("alert", {
  type: "success",
  message: this.$t("bimObjectPlugin.successMessage"),
});
```
:::


#### Modals

::: code-group

```javascript [Version 0.x]
this.$plugins.modalManager.pushModal(modal);
```

```javascript [Version 1.x]
this.$viewer.globalContext.modals.pushModal(modal);
```
:::
