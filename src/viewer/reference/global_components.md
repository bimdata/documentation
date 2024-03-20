# Global components

Global components are available to allows quick integration (no import needed):

- `BIMDataModelLoader`
- `BIMDataNoModelWindowPlaceHolder`
- `BIMDataStoreySelector`

These components are already binded to their corresponding localContext and can be used to update/display the local state. (selected storey, loaded models...)

```html
<template>
  <div class="myComponentTemplate">
    <BIMDataNoModelWindowPlaceHolder v-if="$viewer.localContext.loadedModels.length === 0" />
    <BIMDataModelLoader />
  </div>
</template>
```

Have a look at [this demo example](../examples/global_components.md) to see how they can be used.

## ModelsLoader

### On viewers

By default, the `BIMDataModelLoader` component is available on viewers (3d, 2d, plan, ...). It allows to load/unload models.

It is possible [to hide it or disable it](./viewer_plugins.md#viewers-common-config).

The `BIMDataModelLoader` has the following interface:

| Props                        | Description                                                                        |
| :--------------------------- | :--------------------------------------------------------------------------------- |
| `preview: boolean`           | *Default* to `false`. If `true`, hovering a model on the list display its preview. |
| `windowPositioning: boolean` | *Default* to `true`. If `false`, it is displayed as a `block`.                     |
| `width: string`              | *Default* to `"350px"`.                                                            |
| `customFilter: Function`     | An optional function to filter the models.                                         |
