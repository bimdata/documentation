# mount

Once created, the BIMDataViewer must be mounted to a [DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model) element in order to be displayed to the user.

```javascript
bimdataViewer.mount("#viewerId"); // 'viewerId' must be the id of an existing element.
```

The mount method take an optional second argument: the [`layout`](../examples/gui_layout.md). The [`layout`](../examples/gui_layout.md) is the configuration of the windows displayed at startup. The **default** value is `"3d"`, which is the name of a window registered by default. The `"3d"` window includes many BIMData plugins like 
[`"viewer3d"`](./native_plugins.md#viewer-3d-ifc),
[`"section"`](./native_plugins.md#section),
[`"projection"`](./native_plugins.md#projection),
[`"structure-properties"`](./native_plugins.md#structure-and-properties)...

The layout object passed to the `bimdataviewer.mount` method can be either a `string` or an `object`.

- If string, it must be the name of a registered window.
- If object, the layout represents a window or a recursive object representing a container of window names.
  
## Window

A window is represented by a `string` with its name or the following Object: 

| Name          | Type                                                      | Description                                              |
| :------------ | :-------------------------------------------------------- | :------------------------------------------------------- |
| `windowName`  | `string`                                                  | The name of the window to load.                          |
| `windowState` | `{ modelIds: number, viewpoint: Object, storey: string }` | The state to load. (the storey string is the storey key) |

## Container

| Name        | Type                   | Description                                                                     |
| :---------- | :--------------------- | :------------------------------------------------------------------------------ |
| `ratios`    | `number[]`             | **Required**. The amount of space (in %) taken by respective children.                 |
| `children`  | `string[] | object[]`  | **Required**. An array of window names as string or other containers as object. |
| `direction` | `string`               | `"column"` or `"row"` (**default**). The direction of the container.                 |

Here is an example of a complex layout:

```js
const layout = {
  ratios: [40, 60],
  children: [
    "window-1",
    {
      direction: "column",
      ratios: [40, 60],
      children: [
        "window-2",
        {
          windowName: "window-3",
          windowState: {
            modelIds: [4717],
          },
        },
      ],
    },
  ],
};
```

The result is the following UI layout:

<img width=300px src="/assets/img/viewer/complex-layout.png" alt="Viewer complex mount layouts.">