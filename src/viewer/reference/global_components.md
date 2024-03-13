# Global components

## ModelsLoader

### On viewers

By default, the `BIMDataModelLoader` component is available on viewers (3d, 2d, plan, ...). Is allows to load/unload models.

It is possible [to hide it or disable it](./native_plugins.html#viewer-plugins).

### Global

Global components are available to allows quick integration: (no import needed)

- `BIMDataModelLoader`
- `BIMDataNoModelWindowPlaceHolder`
- `BIMDataStoreySelector`

These components are already binded to their corresponding localContext and can be use to update/display the local state. (selected storey, loaded models...)

```html
<template>
  <div class="myComponentTemplate">
    <BIMDataNoModelWindowPlaceHolder v-if="$viewer.localContext.loadedModels.length === 0" />
    <BIMDataModelLoader />
  </div>
</template>
```

The `BIMDataModelLoader` has the following interface:

| Props                        | Description                                                                        |
| :--------------------------- | :--------------------------------------------------------------------------------- |
| `preview: boolean`           | *Default* to `false`. If `true`, hovering a model on the list display its preview. |
| `windowPositioning: boolean` | *Default* to `true`. If `false`, it is displayed as a `block`.                     |
| `width: string`              | *Default* to `"350px"`.                                                            |
| `customFilter: Function`     | An optional function to filter the models.                                         |
