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
    }
  },
});
```

## BCF

- name: bcf

The BCF plugin allows to interact with the BIMData BCF API by default. It is possible to change the target API using its configuration.

| Name        | Type     | Description                                       |
| :---------- | :------- | :------------------------------------------------ |
| `headers`   | `object` | An object containing the header of the API calls. |
| `apiUrl`    | `string` | BIMData API by default. The BCF API URL.          |
| `projectId` | `object` | BIMData's project id by default. The project ID.  |

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

## Structure and properties

- name: structure-properties

This plugin is actually two plugins merged together. The `structure` plugin that displays the tree structures of the IFCs. The `properties` plugin that displays the properties of the selected objects.

| Name             | Type      | Description                                                          |
| :--------------- | :-------- | :------------------------------------------------------------------- |
| `merge`          | `boolean` | **Default** to `false`. Add the merge ifcs option on the structure.  |
| `export`         | `boolean` | **Default** to `false`. Add the export ifcs option on the structure. |
| `editProperties` | `boolean` | **Default** to `false`. Allows editing properties.                   |

## Viewer 3D

- name: viewer3d

This plugin display the 3D representation of the IFC.

| Name          | Type      | Description                                                                     |
| :------------ | :-------- | :------------------------------------------------------------------------------ |
| `pivotMarker` | `boolean` | **Default** to `true`. Add a pivot marker of the rotation center when pivoting. |
| `navCube`     | `boolean` | **Default** to `true`. Add the navCube to facilitate the 3D navigation.         |
| `edges`       | `boolean` | **Default** to `true`. Add model edges.                                          |

## Window split

- name: window-split

This plugin is displayed if there is only one window and the header is dsplayed flying. It is displayed as button on the top-right of the window, and add the possibility to split the current window by half, and add the new window where the user want (top, bottom, right or left).