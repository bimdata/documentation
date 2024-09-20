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

Some plugins have an [instance](./plugin.md#plugin-component-instance) API that can be used to interact with them:

Example:

```javascript
$viewer.globalContext
  .plugins.get("structure-properties")
  .forEach(plugin => plugin.reloadTrees());
```

## BCF

- name: `bcf`

The BCF plugin allows to interact with the BIMData BCF API by opening the [BCF Manager plugin](#bcf-manager).
This is a button plugin that can be added to any [**viewer window**](./viewer_plugins.md).

::: warning Note
In order to use BCF features you have to enable the [**BCF Manager plugin**](#bcf-manager) (enabled by default).<br/>
The BCF plugin will be useless if BCF Manager is not enabled.
:::

### Configuration

| Name        | Type     | Description |
| :---------- | :------- | :---------- |
| `topicGuid` | `string` | **guid** of the topic that will be opened automatically when the plugin is mounted |

## BCF Manager

- name: `bcfManager`

The BCF Manager plugin is a window plugin that provides a complete UI to view/create/update/delete BCF topics in the current project.

## Fullscreen

- name: `fullscreen`

A plugin as button that allows to request fullscreen on the window it lays in.

## Projection

- name: `projection`

A plugin as button that sends projection type information on the `localContext.hub` when user change it through the UI.
It **requires** the `viewer3d` plugin.

## Search

- name: `search`

A plugin as button that allows to search object by uuids or names.

## Section

- name: `section`

A plugin as button that allows to create section planes in the `viewer3d` plugin.
As mentionned, it **requires** the `viewer3d` plugin to work properly.

## Split

- name: `split`

Disabled by default, the split plugin add the ability to split the ifc according to the selection, through a command on the context menu.

## Structure

- name: `structure`

The `structure` plugin displays the tree structures of the IFCs.

### Instance API

| Name             | Description                          |
| :--------------- | :----------------------------------- |
| `reload(): void` | Reload the trees of the loaded IFCs. |

## Structure and properties

- name: `structure-properties`

This plugin is actually two plugins merged together. The `structure` plugin that displays the tree structures of the IFCs.
The `properties` plugin that displays the properties of the selected objects.

### Configuration

| Name                   | Type      | Description                                                          |
| :--------------------- | :-------- | :------------------------------------------------------------------- |
| `merge`                | `boolean` | **Default** to `false`. Add the merge ifcs option on the structure.  |
| `export`               | `boolean` | **Default** to `false`. Add the export ifcs option on the structure. |
| `editProperties`       | `boolean` | **Default** to `false`. Allows editing properties.                   |
| `translateIfcEntities` | `boolean` | **Default** to `false`. Enable IFC Entites translation.              |
| `customTranslations`   | `Object`  | Provide custom translations for IFC types (see example below).       |

Here is an example usage of the `customTranslations` configuration:

```js
const customTranslations = {
  fr: {
    IfcBeam: "Poutre",
    IfcDoor: "Porte",
    IfcSlab: "Dalle",
    IfcSpace: "Pièce / Espace",
    IfcWall: "Mur / Paroi",
    IfcWindow: "Fenêtre / Ouverture",
    // etc...
  },
  en: {
    IfcBeam: "Beam",
    IfcDoor: "Custom Door name",
    IfcSlab: "Slab",
    IfcSpace: "Space",
    IfcWall: "Wall",
    IfcWindow: "Window",
    // etc...
  },
};

const viewer = makeBIMDataViewer({
  // ...
  plugins: {
    "structure-properties": {
      translateIfcEntities: true, // has to be true to display translations
      customTranslations,
    }
  }
});
```

### Instance API

| Name                  | Description                          |
| :-------------------- | :----------------------------------- |
| `reloadTrees(): void` | Reload the trees of the loaded IFCs. |

## Window Manager

- name: `window-manager`

This plugin is in two parts.
The first part is displayed if there is only one window without header. It is displayed as a button on the top-right of the window, and add the possibility to split the current window by half, and add the new window where the user want (top, bottom, right or left).
The second part is on the right side of the header, and allows to enable split and shows window option.

## Viewer 3D (IFC)

- name: `viewer3d`

This plugin allows to view 3D representation of IFC models. This is a [viewer plugin](./viewer_plugins.md).

### Configuration

| Name                      | Type      | Description |
| :------------------------ | :-------- | :---------- |
| `pivotMarker`             | `boolean` | **Default** to `true`. Add a pivot marker of the rotation center when pivoting |
| `navCube`                 | `boolean` | **Default** to `true`. Add the navCube to facilitate the 3D navigation |
| `edges`                   | `boolean` | **Default** to `true`. Add model edges |
| `enableOffsets`           | `boolean` | **Default** to `false`. Allow model objects to be translated. This increase GPU memory usage |
| `enableDynamicLOD`        | `boolean` | **Default** to `true`. If FPS are too low, complex objects will be hidden during camera moves. This allow a better navigation on low-end computers or with very big models. This decrease GPU memory usage |
| `home`                    | `boolean` | **Default** to `true`.  Reinitialize point of view and reset all objects state (visibility, x-ray) |
| `navigationVersionsModel` | `boolean` | **Default** to `true`.  Allows navigation between various version of models |

### Events

| Name                | Payload | Description | Emitted on |
| :------------------ | :------ | :---------- | :--------- |
| `3d-model-loading`  | `{ ifc, plugin }` | Emitted when a 3D model is loading. | `localContext` and `globalContext` |
| `3d-model-loaded`   | `{ model, plugin }` | Emitted when a 3D model is loaded. | `localContext` and `globalContext` |
| `3d-model-unloaded` | `{ model, plugin }` | Emitted when a 3D model is unloaded. | `localContext` and `globalContext` |
| `annotation-create` | [`{ id, annotation }`](https://xeokit.github.io/xeokit-sdk/docs/class/src/plugins/AnnotationsPlugin/Annotation.js~Annotation.html) | Emitted when an annotation marker is created. | `localContext` and `globalContext` |
| `annotation-click`  | [`{ id, annotation }`](https://xeokit.github.io/xeokit-sdk/docs/class/src/plugins/AnnotationsPlugin/Annotation.js~Annotation.html) | Emitted when an annotation marker is clicked. | `localContext` and `globalContext` |
| `annotation-delete` | `{ id }` | Emitted when an annotation marker is deleted. | `localContext` and `globalContext` |
| `annotation-clear`  | No payload | Emitted when annotation marker are cleared. | `localContext` and `globalContext` |
| `3d-camera-update`  | `{ eye: number[], look: number[], up: number[] }` | Emitted when the camera is updated | `globalContext` |

### Instance API

This API is available in a `3d` window:

```javascript
const viewer3dPlugin = this.$viewer.localContext.plugins.get("viewer3d");
```

| Name | Description |
| :--- | :---------- |
| `xeokit` | [The Xeokit viewer](https://xeokit.github.io/xeokit-sdk/docs/class/src/viewer/Viewer.js~Viewer.html) |
| `xeokitSdk` | [The Xeokit SDK](https://xeokit.github.io/xeokit-sdk/docs/) |
| `selectOnClick: boolean` | **Default** to `true`. If true, clicking an object select it. |
| `highlightOnHover: boolean` | **Default** to `true`. If true, hovering an object highlight it. |
| `getProjection(): string` | Return current projection |
| `changeProjection(projection: string): void` | Set current projection |
| `isolateObjects(ids: string[], options: object): void` | Objects with ids not included in `ids` are set to `xrayed = true` & `pickable = false`. |
| `isolateObjectsByUuids(uuids: string[], options: object): void` | The same as `isolateObjects` but with `uuids` instead of `ids`. |
| `reintegrateObjects(): void` | Unisolate objects (opposite action of `isolateObjects`). |
| `setObjectsVisible(ids: string[], visible: boolean)`| Update the `visible` property of the corresponding objects. |
| `setObjectsSelected(ids: string[], selected: boolean)`| Update the `selected` property of the corresponding objects. |
| `setObjectsColorized(ids: string[], color: boolean)`| Update the `colorized` property of the corresponding objects. |
| `setObjectsHighlighted(ids: string[], highlighted: boolean)`| Update the `highlighted` property of the corresponding objects. |
| `setObjectsPickable(ids: string[], pickable: boolean)`| Update the `pickable` property of the corresponding objects. |
| `setObjectsXrayed(ids: string[], xrayed: boolean)`| Update the `xrayed` property of the corresponding objects. |
| `setObjectsOpacity(ids: string[], opacity: boolean)`| Update the `opacity` property of the corresponding objects. |
| `setObjectsCulled(ids: string[], culled: boolean)`| Update the `culled` property of the corresponding objects. |

## Viewer 2D (IFC)

- name: `viewer2d`

This plugin allows 2D representation of an IFC. This is a [viewer plugin](./viewer_plugins.md).

### Configuration

| Name                      | Type      | Description |
| :------------------------ | :-------- | :---------- |
| `compass`                 | `boolean` | Whether to display compass or not. Defaults to `true`. |
| `help`                    | `boolean` | Whether to display help button or not. Defaults to `true`. |
| `modelLoader`             | `string`  | See [viewers config](./viewer_plugins.md#viewers-common-config). Possible values: `"hidden"`, `"disabled"`, allows to control models loader display. By default model loader is displayed and enabled. |
| `storeySelector`          | `boolean` | Whether to display storey selector or not. Defaults to `true`. |
| `storeySelectorAutoOpen`  | `boolean` | Whether storey selector should auto open on model loading or not. Defaults to `true`. |

### Events

| Name                | Payload             | Description                          | Emitted on                         |
| :------------------ | :------------------ | :----------------------------------- | :--------------------------------- |
| `2d-model-loaded`   | `{ model, plugin }` | Emitted when a 2D model is loaded.   | `localContext` and `globalContext` |
| `2d-model-unloaded` | `{ model, plugin }` | Emitted when a 2D model is unloaded. | `localContext` and `globalContext` |

### Instance API

This API is available in a `2d` window:

```javascript
const viewer2dPlugin = this.$viewer.localContext.plugins.get("viewer2d");
```

| Name | Description |
| :--- | :---------- |
| `viewer: E2D.Viewer` | The [engine 2D viewer](https://2d-engine.bimdata.io). |
| `selectOnClick: boolean` | **Default** to `true`. If true, clicking an object select it. |
| `highlightOnHover: boolean` | **Default** to `true`. If true, hovering an object highlight it. |
| `spacesVisible: boolean` | **Default** to `true`. If `true`, the space names are displayed. |
| `doorsDisplayed: boolean` | **Default** to `false`. If `true`, the doors are displayed. |
| `compassDisplayed: boolean` | **Default** to `true`. If `true`, the compass is displayed. |
| `camera3DSynchronization: boolean` | **Default** to `false`. If `true`, the camera follows the rotation of a 3D camera and an icon representing the 3D camera position is displayed. |
| `syncRotationFrom3DCamera(eye: number[], look: number[], up: number[]): void` | **Default** arguments are `eye = [0, 0, 0], look = [0, 0, 0],up = [0, 1, 0]`. Synchronize the rotation between the given 3D camera parameters and the 2D camera. |

## Viewer DWG

- name: `dwg`

This plugin allows to view DWG models. This is a [viewer plugin](./viewer_plugins.md).

### Events

| Name                 | Payload             | Description                           | Emitted on                         |
| :------------------- | :------------------ | :------------------------------------ | :--------------------------------- |
| `dwg-model-loaded`   | `{ model, plugin }` | Emitted when a DWG model is loaded.   | `localContext` and `globalContext` |
| `dwg-model-unloaded` | `{ model, plugin }` | Emitted when a DWG model is unloaded. | `localContext` and `globalContext` |

### Instance API

This API is available in a `dwg` window:

```javascript
const viewerDWGPlugin = this.$viewer.localContext.plugins.get("dwg");
```

| Name                        | Description                                                      |
| :-------------------------- | :--------------------------------------------------------------- |
| `viewer: E2D.Viewer`        | The [engine 2D viewer](https://2d-engine.bimdata.io).            |
| `selectOnClick: boolean`    | **Default** to `true`. If true, clicking an object select it.    |
| `highlightOnHover: boolean` | **Default** to `true`. If true, hovering an object highlight it. |
| `hideAll(): void`           | Hide all objects.                                                |

## Viewer DXF

- name: `dxf`

This plugin allows to view DXF models. This is a [viewer plugin](./viewer_plugins.md).

**Events** and **Instance API** are the same as the [Viewer DWG](#viewer-dwg).

## Viewer Plan

- name: `plan`

This plugin allows to view bitmap plans (PDF, PNG, JPG, METABUILDING models). This is a [viewer plugin](./viewer_plugins.md).

### Configuration

| Name                      | Type      | Description |
| :------------------------ | :-------- | :---------- |
| `help`                    | `boolean` | Whether to display help button or not. Defaults to `true`. |
| `modelLoader`             | `string`  | See [viewers config](./viewer_plugins.md#viewers-common-config). Possible values: `"hidden"`, `"disabled"`, allows to control models loader display. By default model loader is displayed and enabled. |
| `metaBuildingStructure`   | `boolean` | Wether to display meta-building structure panel when a meta-building is loaded. If set to `false` a storey selector will be used instead. Defaults to `true`. |
| `storeySelector`          | `boolean` | Whether to display storey selector or not. Defaults to `true`. |
| `storeySelectorAutoOpen`  | `boolean` | Whether storey selector should auto open on model loading or not. Defaults to `true`. |

### Events

| Name                 | Payload             | Description                            | Emitted on                         |
| :------------------- | :------------------ | :------------------------------------- | :--------------------------------- |
| `plan-model-loaded`   | `{ model, plugin }` | Emitted when a plan model is loaded.   | `localContext` and `globalContext` |
| `plan-model-unloaded` | `{ model, plugin }` | Emitted when a plan model is unloaded. | `localContext` and `globalContext` |
| `pdf-page-changed`    | `{ model, page }` | Emitted when a pdf page is changed. | `localContext` only |

### Instance API

This API is available in a `plan` window:

```javascript
const viewerPlanPlugin = this.$viewer.localContext.plugins.get("plan");
```

| Name                 | Description                                           |
| :------------------- | :---------------------------------------------------- |
| `viewer: E2D.Viewer` | The [engine 2D viewer](https://2d-engine.bimdata.io). |
| `selectedStorey: Storey` | Currently selected (displayed) storey (`null` if not a METABUILDING model) |
| `bitmaps: any[]`     | Array of loaded bitmaps |
| `pdfPages: any[]`    | Array of pages models (for multipage PDF) |
| `pdfPageIndex: number` | Current PDF page index (for multipage PDF) |
| `nextPdfPage(): Promise<void>` | (*async*) Switch to the next PDF page (if any) |
| `prevPdfPage(): Promise<void>` | (*async*) Switch to the previouos PDF page (if any) |
| `setPdfPage(index: number): Promise<void>` | (*async*) Go to the specified PDF page (if it exist). **Note:** pages are indexed from 0 to n-1. |
| `exportAsPNG(): Promise<string>` | (*async*) Get a base64 URL of PNG screenshot of the viewer |
| `exportAsJPG(): Promise<string>` | (*async*) Get a base64 URL of JPG screenshot of the viewer |
| `exportAsPDF(): Promise<Blob>` | (*async*) Generate and return a PDF with the viewer content |

## Viewer Point Cloud

- name: `pointCloud`

This plugin allows to view point cloud models. This is a [viewer plugin](./viewer_plugins.md).

### Events

| Name                          | Payload             | Description                       | Emitted on                         |
| :---------------------------- | :------------------ | :-------------------------------- | :--------------------------------- |
| `pointcloud-model-loaded`     | `{ model, plugin }` | Emitted when a model is loaded.   | `localContext` and `globalContext` |
| `pointcloud-model-unloaded`   | `{ model, plugin }` | Emitted when a model is unloaded. | `localContext` and `globalContext` |

### Instance API

This API is available in a `pointCloud` window:

```javascript
const pointCloudPlugin = this.$viewer.localContext.plugins.get("pointCloud");
```

| Name | Description |
| :--- | :---------- |
| `xeokit` | [The Xeokit viewer](https://xeokit.github.io/xeokit-sdk/docs/class/src/viewer/Viewer.js~Viewer.html) |
| `xeokitSdk` | [The Xeokit SDK](https://xeokit.github.io/xeokit-sdk/docs/) |

## 3D parameters

- name: `viewer3d-parameters`

A button plugin that allows to configure highlight, edges and spaces visibility.
Parameters are saved in local storage.

## 2D parameters

- name: `viewer2d-parameters`

A button plugin that allows to configure door openings and space names.
Parameters are saved in local storage.

## 2D measurements

- name: `measure2d`

A button plugin that allows to measure distances, angles and surfaces in the 2D viewer
Measurements are saved in local storage.

## Zone Editor Button

- name: `zone-editor-button`

This plugin allows to interact with the BIMData Zone Editor by opening the [Zone Editor plugin](#zone-editor).

::: warning Note
In order to use Zone Editor features you have to enable the [**Zon Editor plugin**](#zone-editor) (enabled by default).<br/>
The Zone-Editor plugin will be useless if Zone Editor Button is not enabled.
:::

## Zone Editor

- name: `zone-editor`

The Zone Editor plugin is a window plugin that provides a complete UI to manage zones on a Meta Building.

### Events

| Name                          | Payload              | Description                       | Emitted on                         |
| :---------------------------- | :------------------- | :-------------------------------- | :--------------------------------- |
| `zone-created`                | `{ zone }`           | Emitted when a zone is created.   | `localContext` and `globalContext` |
| `space-created`               | `{ space }`          | Emitted when a space is created.  | `localContext` and `globalContext` |
| `zone-deleted`                | `{ zone }`           | Emitted when a zone is deleted.   | `localContext` and `globalContext` |
| `space-deleted`               | `{ space }`          | Emitted when a space is deleted.  | `localContext` and `globalContext` |
| `zone-updated`                | `{ zone, changes }`  | Emitted when a zone is updated.   | `localContext` and `globalContext` |
| `space-updated`               | `{ space, changes }` | Emitted when a space is updated.  | `localContext` and `globalContext` |
