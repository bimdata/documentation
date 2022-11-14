# Native plugins

The BIMDataViewer is shipped with native plugins that allow basic interaction with ifcs/models. To enabled/disabled/configure them, use their name with the corresponding configuration on the `plugins` section of the `makeBIMDataViewer` configuration object.

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

The BCF plugin allows to interact with the BIMData BCF API by default. It is possible to change the target API using its configuration.

### Configuration

| Name                 | Type             | Description                                                                                                                                                                                                          | Default             | Version |
| :------------------- | :--------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------------------ | :------ |
| `headers`            | `object`         | Additionnal headers to send to the BCF API                                                                                                                                                                           | {}                  | 1.2.0   |
| `apiUrl`             | `string`         | The BCF API URL.                                                                                                                                                                                                     | BIMData API URL     | 1.2.0   |
| `projectId`          | `object`         | Override the project ID                                                                                                                                                                                              | viewer's project id | 1.2.0   |
| `fetchUsers`         | `async function` | Define another method to fetch user list (used in `assigned_to` field)                                                                                                                                               | null                | 1.3.0   |
| `mergeUsers`         | `boolean`        | Set if users fetched with fetchUsers must be merged with users on BIMData API or should override the list                                                                                                            | true                | 1.3.0   |
| `fetchCurrentUser`   | `async function` | Change the method to retrive BCF current-user. Defaults to BCF standard method. Must be return the same object than standard current-user route. Emitted BCF Topics and Comments will use the id of the current user | null                | 1.4.0   |
| `showAllAnnotations` | `boolean`        | If true, all annotations for all BCF in list will be shown                                                                                                                                                           | false               | 1.5.0   |

## Fullscreen

- name: fullscreen

A plugin as button that allows to request fullscreen on the window it lays in.

## Projection

- name: projection

A plugin as button that sends projection type information on the `localContext.hub` when user change it through the UI. It **requires** the `viewer3d` plugin.

## Search

- name: search

A plugin as button that allows to search object by uuids or names.

## Section

- name: section

A plugin as button that allows to create section planes in the `viewer3d` plugin. As mentionned, it **requires** the `viewer3d` plugin to work properly.

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

This plugin is actually two plugins merged together. The `structure` plugin that displays the tree structures of the IFCs. The `properties` plugin that displays the properties of the selected objects.

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

| Name                | Payload                                                                                                                            | Description                                   | Emitted on                         |
| :------------------ | :--------------------------------------------------------------------------------------------------------------------------------- | :-------------------------------------------- | :--------------------------------- |
| `3d-model-loading`  | `{ ifc, plugin }`                                                                                                                  | Emitted when a 3D model is called.            | `localContext` and `globalContext` |
| `3d-model-loaded`   | `{ ifc, model, plugin }`                                                                                                           | Emitted when a 3D model is loaded.            | `localContext` and `globalContext` |
| `annotation-create` | [`{ id, annotation }`](https://xeokit.github.io/xeokit-sdk/docs/class/src/plugins/AnnotationsPlugin/Annotation.js~Annotation.html) | Emitted when an annotation marker is created. | `localContext` and `globalContext` |
| `annotation-click`  | [`{ id, annotation }`](https://xeokit.github.io/xeokit-sdk/docs/class/src/plugins/AnnotationsPlugin/Annotation.js~Annotation.html) | Emitted when an annotation marker is clicked. | `localContext` and `globalContext` |
| `annotation-delete` | `{ id }`                                                                                                                           | Emitted when an annotation marker is deleted. | `localContext` and `globalContext` |
| `annotation-clear`  | No payload                                                                                                                         | Emitted when annotation marker are cleared.   | `localContext` and `globalContext` |
| `3d-camera-update`  | `{eye: [number,number,number], look: [number,number,number], up: [number,number,number]}`                                          | Emitted when the camera is updated            | `globalContext`                    |

### Instance API

This API is available from this object on the `3d` window:

```javascript
const viewer3dPlugin = this.$viewer.localContext.getPlugin("viewer3d");
```

| Name                                      | Type      | Description                                                                                                            |
| :---------------------------------------- | :-------- | :--------------------------------------------------------------------------------------------------------------------- |
| `selectOnClick`                           | `boolean` | **Default** to `true`. If true, clicking an object select it.                                                          |
| `highlightOnHover`                        | `boolean` | **Default** to `true`. If true, hovering an object highlight it.                                                       |
| `getProjection(): string`                 | `method`  | Return current projection                                                                                              |
| `fitViewObjects([uuids]): void`           | `method`  | Fit the camera view so all specified objects fit in the screen. Apply to all objects if array is empty or undefined.   |
| `getViewpoint(snapshot=true): object`     | `method`  | Returns the BCF Viewpoint of the current view. If `snapshot` is `false`, it skips the screenshot (better performances) |
| `getCameraPosition(): object`             | `method`  | Returns camera position of the current view as defined in the BCF standard.                                            |
| `setCameraPosition(cameraPosition): void` | `method`  | Set camera position as defined in the BCF standard.                                                                    |

## Window split

- name: window-split

This plugin is displayed if there is only one window and the header is displayed flying. It is displayed as button on the top-right of the window, and add the possibility to split the current window by half, and add the new window where the user want (top, bottom, right or left).

## Viewer 2D

- name: viewer2d

This plugin display the 2D representation of the IFC.

### Events

| Name                | Payload           | Description                          | Emitted on                         |
| :------------------ | :---------------- | :----------------------------------- | :--------------------------------- |
| `2d-model-loaded`   | `{ ifc, plugin }` | Emitted when a 2D model is loaded.   | `localContext` and `globalContext` |
| `2d-model-unloaded` | `{ ifc, plugin }` | Emitted when a 2D model is unloaded. | `localContext` and `globalContext` |

### Instance API

This API is available from this object on the `2d` window:

```javascript
const viewer2dPlugin = this.$viewer.localContext.getPlugin("viewer2d");
```

| Name                                                                                                                   | Description                                                                                                                                                     |
| :--------------------------------------------------------------------------------------------------------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `selectOnClick: boolean`                                                                                               | **Default** to `true`. If true, clicking an object select it.                                                                                                   |
| `highlightOnHover: boolean`                                                                                            | **Default** to `true`. If true, hovering an object highlight it.                                                                                                |
| `viewer: E2D.Viewer`                                                                                                   | The [engine 2D viewer](https://2d-engine.bimdata.io).                                                                                                           |
| `spaceNamesDisplayed: boolean`                                                                                         | **Default** to `true`. If `true`, the space names are displayed.                                                                                                |
| `doorsDisplayed: boolean`                                                                                              | **Default** to `false`. If `true`, the doors are displayed.                                                                                                     |
| `compassDisplayed: boolean`                                                                                            | **Default** to `true`. If `true`, the compass is displayed.                                                                                                     |
| `camera3DSynchronization: boolean`                                                                                     | **Default** to `false`. If `true`, the camera follows the rotation of a 3D camera and an icon representing the 3D camera position is displayed.                 |
| `hideAll(): void`                                                                                                      | Hide all objects except the camera object displayed if `camera3DSynchronization` is on.                                                                         |
| `syncRotationFrom3DCamera(eye: [number,number,number], look: [number,number,number],up: [number,number,number]): void` | **Default** arguments are `eye = [0, 0, 0], look = [0, 0, 0],up = [0, 1, 0]`. Synchronize the roation between the given 3D camera parameters and the 2D camera. |

## Viewer DWG

- name: dwg

This plugin display the DWG representation of the IFC.

### Events

| Name                 | Payload           | Description                           | Emitted on                         |
| :------------------- | :---------------- | :------------------------------------ | :--------------------------------- |
| `dwg-model-loaded`   | `{ dwg, plugin }` | Emitted when a DWG model is loaded.   | `localContext` and `globalContext` |
| `dwg-model-unloaded` | `{ dwg, plugin }` | Emitted when a DWG model is unloaded. | `localContext` and `globalContext` |

### Instance API

This API is available from this object on the `dwg` window:

```javascript
const viewerDWGPlugin = this.$viewer.localContext.getPlugin("dwg");
```

| Name                        | Description                                                      |
| :-------------------------- | :--------------------------------------------------------------- |
| `selectOnClick: boolean`    | **Default** to `true`. If true, clicking an object select it.    |
| `highlightOnHover: boolean` | **Default** to `true`. If true, hovering an object highlight it. |
| `viewer: E2D.Viewer`        | The [engine 2D viewer](https://2d-engine.bimdata.io).            |
| `hideAll(): void`           | Hide all objects.                                                |

## Viewer DXF

- name: dxf

This plugin display the DXF representation of the IFC.

### Events

| Name                 | Payload           | Description                           | Emitted on                         |
| :------------------- | :---------------- | :------------------------------------ | :--------------------------------- |
| `dxf-model-loaded`   | `{ dxf, plugin }` | Emitted when a DXF model is loaded.   | `localContext` and `globalContext` |
| `dxf-model-unloaded` | `{ dxf, plugin }` | Emitted when a DXF model is unloaded. | `localContext` and `globalContext` |

### Instance API

This API is available from this object on the `dxf` window:

```javascript
const viewerDXFPlugin = this.$viewer.localContext.getPlugin("dxf");
```

| Name                        | Description                                                      |
| :-------------------------- | :--------------------------------------------------------------- |
| `selectOnClick: boolean`    | **Default** to `true`. If true, clicking an object select it.    |
| `highlightOnHover: boolean` | **Default** to `true`. If true, hovering an object highlight it. |
| `viewer: E2D.Viewer`        | The [engine 2D viewer](https://2d-engine.bimdata.io).            |
| `hideAll(): void`           | Hide all objects.                                                |

## Viewer Plan

- name: plan

This plugin displays bitmap plans.

### Instance API

This API is available from this object on the `dwg` window:

```javascript
const viewerPlanPlugin = this.$viewer.localContext.getPlugin("plan");
```

| Name                 | Description                                           |
| :------------------- | :---------------------------------------------------- |
| `viewer: E2D.Viewer` | The [engine 2D viewer](https://2d-engine.bimdata.io). |

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

| Property      | Description                                                                                                                                |
| :------------ | :----------------------------------------------------------------------------------------------------------------------------------------- |
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
