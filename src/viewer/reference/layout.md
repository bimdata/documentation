# Layout

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
| `ratios`    | `number[]`             | **Required**. The amount of space taken by respective children.                 |
| `children`  | `(string or object)[]` | **Required**. An array of window names as string or other containers as object. |
| `direction` | `string`               | "column" or "row"(**default**). The direction of the container.                 |

TODO add the Layout API