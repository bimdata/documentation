# Native plugins

The BIMDataViewer is shipped with native plugins that allow basic interaction with ifcs/models.
To enable/disable/configure them, use their name with the corresponding configuration on the `plugins` section
of the `makeBIMDataViewer` configuration object.

Example:

```javascript
const viewer = makeBIMDataViewer({
  plugins: {
    viewer3d: {
      navCube: false,
    },
    split: true,
    "structure-properties": {
      merge: true,
    },
  },
});
```

Some plugins have instance API that can be used to interact with them:

Example:

```javascript
$viewer.globalContext
  .getPlugins("structure-properties")
  .forEach((plugin) => plugin.reloadTrees());
```

## BCF

- name: bcf

The BCF plugin allows to interact with the BIMData BCF API by opening the [BCF Manager plugin](#bcf-manager).
This is a button plugin that can be added to any **viewer** window (`2d`, `3d`, `dwg`, `plan`).

::: tip Note
In order to use BCF features you have to enable the **BCF Manager plugin** (enabled by default).<br/>
The **BCF** plugin will be useless if BCF Manager is not enabled.
:::

### Configuration

| Name        | Type     | Description |
| :---------- | :------- | :---------- |
| `topicGuid` | `string` | **guid** of the topic that will be opened automatically when the plugin is mounted |

## BCF Manager

- name: bcfManager

The BCF Manager plugin is a window plugin that provides a complete UI to view/create/update/delete BCF topics in the current project.

## Fullscreen

- name: fullscreen

A plugin as button that allows to request fullscreen on the window it lays in.

## Projection

- name: projection

A plugin as button that sends projection type information on the `localContext.hub` when user change it through the UI.
It **requires** the `viewer3d` plugin.

## Search

- name: search

A plugin as button that allows to search object by uuids or names.

## Section

- name: section

A plugin as button that allows to create section planes in the `viewer3d` plugin.
As mentionned, it **requires** the `viewer3d` plugin to work properly.

## Window selector

- name: windowSelector

This plugin is displayed on windows if no plugins are present on them. It displays the available windows registered on the viewer.

## Split

- name: split

Disabled by default, the split plugin add the ability to split the ifc according to the selection, through a command on the context menu.

## Structure

- name: structure

The `structure` plugin displays the tree structures of the IFCs.

### Instance API

| Name             | Description                          |
| :--------------- | :----------------------------------- |
| `reload(): void` | Reload the trees of the loaded IFCs. |

## Structure and properties

- name: structure-properties

This plugin is actually two plugins merged together. The `structure` plugin that displays the tree structures of the IFCs.
The `properties` plugin that displays the properties of the selected objects.

### Configuration

| Name                   | Type      | Description                                                          |
| :--------------------- | :-------- | :------------------------------------------------------------------- |
| `merge`                | `boolean` | **Default** to `false`. Add the merge ifcs option on the structure.  |
| `export`               | `boolean` | **Default** to `false`. Add the export ifcs option on the structure. |
| `editProperties`       | `boolean` | **Default** to `false`. Allows editing properties.                   |
| `translateIfcEntities` | `boolean` | **Default** to `false`. Enable IFC Entites translation.              |

### Instance API

| Name                  | Description                          |
| :-------------------- | :----------------------------------- |
| `reloadTrees(): void` | Reload the trees of the loaded IFCs. |

## Viewer 3D

- name: viewer3d

This plugin display the 3D representation of the IFC.

### Configuration

| Name            | Type      | Description                                                                                  |
| :-------------- | :-------- | :------------------------------------------------------------------------------------------- |
| `pivotMarker`   | `boolean` | **Default** to `true`. Add a pivot marker of the rotation center when pivoting.              |
| `navCube`       | `boolean` | **Default** to `true`. Add the navCube to facilitate the 3D navigation.                      |
| `edges`         | `boolean` | **Default** to `true`. Add model edges.                                                      |
| `enableOffsets` | `boolean` | **Default** to `False`. Allow model objects to be translated. This increase GPU memory usage |

### Events

| Name                  | Payload | Description | Emitted on                         |
| :-------------------- | :------ | :---------- | :--------------------------------- |
| `3d-model-loading`    | `{ ifc, plugin }` | Emitted when a 3D model is loading. | `localContext` and `globalContext` |
| `3d-model-loaded`     | `{ model, plugin }` | Emitted when a 3D model is loaded. | `localContext` and `globalContext` |
| `3d-model-unloaded`   | `{ model, plugin }` | Emitted when a 3D model is unloaded. | `localContext` and `globalContext` |
| `annotation-create`   | [`{ id, annotation }`](https://xeokit.github.io/xeokit-sdk/docs/class/src/plugins/AnnotationsPlugin/Annotation.js~Annotation.html) | Emitted when an annotation marker is created. | `localContext` and `globalContext` |
| `annotation-click`    | [`{ id, annotation }`](https://xeokit.github.io/xeokit-sdk/docs/class/src/plugins/AnnotationsPlugin/Annotation.js~Annotation.html) | Emitted when an annotation marker is clicked. | `localContext` and `globalContext` |
| `annotation-delete`   | `{ id }` | Emitted when an annotation marker is deleted. | `localContext` and `globalContext` |
| `annotation-clear`    | No payload | Emitted when annotation marker are cleared. | `localContext` and `globalContext` |
| `3d-camera-update`    | `{ eye: number[], look: number[], up: number[] }` | Emitted when the camera is updated | `globalContext` |

### Instance API

This API is available from this object on the `3d` window:

```javascript
const viewer3dPlugin = this.$viewer.localContext.getPlugin("viewer3d");
```

| Name | Description |
| :--- | :---------- |
| `getLoadedModels(): object[]` | Get the list of models that are currently loaded in this viewer |
| `loadModels(models: object[]): Promise<void>` | Load the specified models in this viewer |
| `unloadModels(models: object[]): Promise<void>` | Unload the specified models |
| `getViewpoint(snapshot: boolean): object` | Returns the BCF Viewpoint of the current view. If `snapshot` is `false` (`true` by default), it skips the screenshot (better performances) |
| `setViewpoint(viewpoint: object, options: object): void` | Set the camera view according to the given BCF viewpoint |
| `annotationMode: boolean` | Is annotation mode enabled |
| `startAnnotationMode(callback: Function): void` | Enable annotation mode |
| `stopAnnotationMode(): void` | Disable annotation mode |
| `fitView(uuids: string[]): void` | Fit the camera view so all specified objects fit in the screen. Apply to all objects if array is empty or undefined. |
| `showUI(): void` | Show all UI elements (plugins, models selector, help, etc...) in the viewer window |
| `hideUI(options: { exceptions: string[] }): void` | Hide UI elements (plugins, models selector, help, etc...) in the viewer window, except those specified the `exceptions` options |
| `selectOnClick: boolean` | **Default** to `true`. If true, clicking an object select it. |
| `highlightOnHover: boolean` | **Default** to `true`. If true, hovering an object highlight it. |
| `getProjection(): string` | Return current projection |
| `changeProjection(projection: string): void` | Set current projection |
| `isolateObjects(ids: string[], options: object): void` | Objects with ids not included in `ids` are set to `xrayed = true` & `pickable = false`. |
| `isolateObjectsByUuids(uuids: string[], options: object): void` | The same as `isolateObjects` but with `uuids` instead of `ids`. |
| `reintegrateObjects(): void` | Unisolate objects (opposite action of `isolateObjects`). |


## Window split

- name: window-split

This plugin is displayed if there is only one window and the header is displayed flying. It is displayed as button on the top-right of the window, and add the possibility to split the current window by half, and add the new window where the user want (top, bottom, right or left).

## Viewer 2D

- name: viewer2d

This plugin display the 2D representation of the IFC.

### Events

| Name                | Payload             | Description                          | Emitted on                         |
| :------------------ | :------------------ | :----------------------------------- | :--------------------------------- |
| `2d-model-loaded`   | `{ model, plugin }` | Emitted when a 2D model is loaded.   | `localContext` and `globalContext` |
| `2d-model-unloaded` | `{ model, plugin }` | Emitted when a 2D model is unloaded. | `localContext` and `globalContext` |

### Instance API

This API is available from this object on the `2d` window:

```javascript
const viewer2dPlugin = this.$viewer.localContext.getPlugin("viewer2d");
```

| Name | Description |
| :--- | :---------- |
| `viewer: E2D.Viewer` | The [engine 2D viewer](https://2d-engine.bimdata.io). |
| `getLoadedModels(): object[]` | Get the list of models that are currently loaded in this viewer |
| `loadModels(models: object[]): Promise<void>` | Load the specified models in this viewer. **Note:** currently only one 2D model can be loaded at a time, thus only the first model in the list will be loaded. |
| `unloadModels(models: object[]): Promise<void>` | Unload the specified models |
| `getViewpoint(): Promise<object>` | Returns a promise that resolve to a BCF Viewpoint of the current view |
| `setViewpoint(viewpoint: object): void` | Set the camera view according to the given BCF viewpoint |
| `annotationMode: boolean` | Is annotation mode enabled |
| `startAnnotationMode(callback: Function): void` | Enable annotation mode |
| `stopAnnotationMode(): void` | Disable annotation mode |
| `fitView(objects: object[]): void` | Fit the camera view so all specified objects fit in the screen. Apply to all objects if array is empty or undefined. |
| `showUI(): void` | Show all UI elements (plugins, models selector, help, etc...) in the viewer window |
| `hideUI(options: { exceptions: string[] }): void` | Hide UI elements (plugins, models selector, help, etc...) in the viewer window, except those specified the `exceptions` options |
| `selectOnClick: boolean` | **Default** to `true`. If true, clicking an object select it. |
| `highlightOnHover: boolean` | **Default** to `true`. If true, hovering an object highlight it. |
| `spaceNamesDisplayed: boolean` | **Default** to `true`. If `true`, the space names are displayed. |
| `doorsDisplayed: boolean` | **Default** to `false`. If `true`, the doors are displayed. |
| `compassDisplayed: boolean` | **Default** to `true`. If `true`, the compass is displayed. |
| `camera3DSynchronization: boolean` | **Default** to `false`. If `true`, the camera follows the rotation of a 3D camera and an icon representing the 3D camera position is displayed. |
| `syncRotationFrom3DCamera(eye: number[], look: number[], up: number[]): void` | **Default** arguments are `eye = [0, 0, 0], look = [0, 0, 0],up = [0, 1, 0]`. Synchronize the roation between the given 3D camera parameters and the 2D camera. |
| `selectedStorey: object` | Currently selected (displayed) storey |

## Viewer DWG

- name: dwg

This plugin display DWG models.

### Events

| Name                 | Payload             | Description                           | Emitted on                         |
| :------------------- | :------------------ | :------------------------------------ | :--------------------------------- |
| `dwg-model-loaded`   | `{ model, plugin }` | Emitted when a DWG model is loaded.   | `localContext` and `globalContext` |
| `dwg-model-unloaded` | `{ model, plugin }` | Emitted when a DWG model is unloaded. | `localContext` and `globalContext` |

### Instance API

This API is available from this object on the `dwg` window:

```javascript
const viewerDWGPlugin = this.$viewer.localContext.getPlugin("dwg");
```

| Name                        | Description                                                      |
| :-------------------------- | :--------------------------------------------------------------- |
| `viewer: E2D.Viewer`        | The [engine 2D viewer](https://2d-engine.bimdata.io).            |
| `getLoadedModels(): object[]` | Get the list of models that are currently loaded in this viewer |
| `loadModels(models: object[]): Promise<void>` | Load the specified models in this viewer. **Note:** currently only one DWG model can be loaded at a time, thus only the first model in the list will be loaded. |
| `unloadModels(models: object[]): Promise<void>` | Unload the specified models |
| `getViewpoint(): Promise<object>` | Returns a promise that resolve to a BCF Viewpoint of the current view |
| `setViewpoint(viewpoint: object): void` | Set the camera view according to the given BCF viewpoint |
| `annotationMode: boolean` | Is annotation mode enabled |
| `startAnnotationMode(callback: Function): void` | Enable annotation mode |
| `stopAnnotationMode(): void` | Disable annotation mode |
| `fitView(objects: object[]): void` | Fit the camera view so all specified objects fit in the screen. Apply to all objects if array is empty or undefined. |
| `showUI(): void` | Show all UI elements (plugins, models selector, help, etc...) in the viewer window |
| `hideUI(options: { exceptions: string[] }): void` | Hide UI elements (plugins, models selector, help, etc...) in the viewer window, except those specified the `exceptions` options |
| `selectOnClick: boolean`    | **Default** to `true`. If true, clicking an object select it.    |
| `highlightOnHover: boolean` | **Default** to `true`. If true, hovering an object highlight it. |
| `hideAll(): void`           | Hide all objects.                                                |

## Viewer DXF

- name: dxf

This plugin display DXF models.

**Events** and **Instance API** are the same as the [Viewer DWG](#viewer-dwg).

## Viewer Plan

- name: plan

This plugin displays bitmap plans (PDF, PNG, JPG, METABUILDING models).

### Events

| Name                 | Payload             | Description                            | Emitted on                         |
| :------------------- | :------------------ | :------------------------------------- | :--------------------------------- |
| `dwg-model-loaded`   | `{ model, plugin }` | Emitted when a plan model is loaded.   | `localContext` and `globalContext` |
| `dwg-model-unloaded` | `{ model, plugin }` | Emitted when a plan model is unloaded. | `localContext` and `globalContext` |

### Instance API

This API is available from this object on the `plan` window:

```javascript
const viewerPlanPlugin = this.$viewer.localContext.getPlugin("plan");
```

| Name                 | Description                                           |
| :------------------- | :---------------------------------------------------- |
| `viewer: E2D.Viewer` | The [engine 2D viewer](https://2d-engine.bimdata.io). |
| `getLoadedModels(): object[]` | Get the list of models that are currently loaded in this viewer |
| `loadModels(models: object[]): Promise<void>` | Load the specified models in this viewer. **Note:** currently only one plan model can be loaded at a time, thus only the first model in the list will be loaded. |
| `unloadModels(models: object[]): Promise<void>` | Unload the specified models |
| `getViewpoint(): Promise<object>` | Returns a promise that resolve to a BCF viewpoint of the current view |
| `setViewpoint(viewpoint: object): Promise<void>` | (*async*) Set the camera view according to the given BCF viewpoint |
| `annotationMode: boolean` | Is annotation mode enabled |
| `startAnnotationMode(callback: Function): void` | Enable annotation mode |
| `stopAnnotationMode(): void` | Disable annotation mode |
| `fitView({ bitmaps: object[] }): void` | Set the camera view so the given bitmaps fit in the screen. **Note:** currently only the first bitmap of the list will be taken into account. |
| `showUI(): void` | Show all UI elements (plugins, models selector, help, etc...) in the viewer window |
| `hideUI(options: { exceptions: string[] }): void` | Hide UI elements (plugins, models selector, help, etc...) in the viewer window, except those specified the `exceptions` options |
| `selectedStorey: object` | Currently selected (displayed) storey (`null` if not a METABUILDING model) |
| `bitmaps: object[]` | Array of loaded bitmaps |
| `pdfPages: object[]` | Array of pages models (for multipage PDF) |
| `pdfPageIndex: number` | Current PDF page index (for multipage PDF) |
| `nextPdfPage(): Promise<void>` | (*async*) Switch to the next PDF page (if any) |
| `prevPdfPage(): Promise<void>` | (*async*) Switch to the previouos PDF page (if any) |
| `setPdfPage(index: number): Promise<void>` | (*async*) Go to the specified PDF page (if it exist). **Note:** pages are indexed from 0 to n-1. |
| `exportAsPNG(): Promise<string>` | (*async*) Get a base64 URL of PNG screenshot of the viewer |
| `exportAsJPG(): Promise<string>` | (*async*) Get a base64 URL of JPG screenshot of the viewer |
| `exportAsPDF(): Promise<object>` | (*async*) Generate and return a [jsPDF](https://artskydj.github.io/jsPDF/docs/jsPDF.html) document with the viewer content |

## 2D measurements

- name: measure2d

A plugin as un button that allows to measure distances, angles and surfaces in the 2D viewer
Measurements are saved in local storage

## 3D parameters

- name: viewer3d-parameters

A plugin as un button that allows to configure highlight, edges and Spaces visibility.
Parameters are saved in local storage

## 2D parameters

- name: viewer2d-parameters

A plugin as un button that allows to configure door openings and space names.
Parameters are saved in local storage

# Viewer plugins

It is possible to configure the UI of plugins displayed as viewer (viewer 3d, viewer 2d, viewer plan, viewer dwg, viewer dxf):

| Property      | Description                                                                                                                                                                                                   |
| :------------ | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `modelLoader` | Can be `"hidden"` or `"disabled"`. If `hidden`, the component isn't shown but it will load models defined in the viewer parameters. If `disabled`, the models won't be loaded and you must load them manually |

```javascript
const viewerConfig = {
  plugins: {
    viewer3d: {
      modelLoader: "hidden",
    },
  },
};
```
