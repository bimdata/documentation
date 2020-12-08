# mount

Once created, the BIMDataViewer must be mounted to a [DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model) element in order to be displayed to the user.

```javascript
bimdataViewer.mount("#viewerId"); // 'viewerId' must be the id of an existing element.
```

The mount method take an optional second argument: the [`layout`](/viewer/customize_the_ui.html#layout). The [`layout`](/viewer/customize_the_ui.html#layout) is the configuration of the windows displayed at startup. The **default** value is "3d", which is the name of a window registered by default. The "3d" window includes many BIMData plugins like "viewer3d", "section", "projection", "structure-properties"...

## Layout

The layout object can be either a `string` or an `object`.

- If string, it must be the name of a registered window.
- If object, the layout is a recursive object representing a container of window names.

### Container

| Name        | Type                | Description                                                                     |
| :---------- | :------------------ | :------------------------------------------------------------------------------ |
| `ratios`    | `number[]`          | **Required**. The amount of space taken by respective children.                 |
| `children`  | `(string|object)[]` | **Required**. An array of window names as string or other containers as object. |
| `direction` | `string`            | "column" or "row"(**default**). The direction of the container.                  |

:::tip
To learn more about layout:

- [Make your own window layout](/viewer/tutorials/make_your_own_window_layout.html)
- [Customize the UI - Layout](/viewer/customize_the_ui.html#layout)
  :::
