# Global components

## ModelsLoader

### On viewers

By default, the `ModelsLoader` component is available on viewers (3d, 2d, plan, ...). Is allows to load/unload models.

It is possible [to hide it or disable it](./native_plugins.html#viewer-plugins).

### Global

The `ModelsLoader` & the `NoModelWindowPlaceHolder` components are also globally registered on the viewer and can be used like [the globally registered BIMData design system](/viewer/customize_the_ui.html#embed-design-system).

```html
<template>
  <div class="myComponentTemplate">
    <NoModelWindowPlaceHolder v-if="noModelLoaded" />
    <ModelsLoader
      :multi="true"
      :types="['IFC']"
      @load-models="loadModels"
      @unload-models="unloadModels"
    />
  </div>
</template>
```

These two components are already stylized so they render at the center of the window. (full size for the `NoModelWindowPlaceHolder`)

The `ModelsLoader` has the following interface:

| Property                                                             | Description                                                                                             |
| :------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------ |
| **Event handlers**                                                   |                                                                                                         |
| `load-models(models)`                                                | Trigger when the user click on an unloaded [model](/viewer/reference/state.html#model).                                                       |
| `unload-models(models)`                                              | Trigger when the user click on an loaded [model](/viewer/reference/state.html#model).                                                         |
| **Props**                                                            |                                                                                                         |
| `multi: boolean`                                                     | If false, radio buttons are displayed instead of checkboxes and only one model can be loaded at a time. |
| `types: ["IFC", "POINT_CLOUD", "PDF", "METABUILDING", "DWG", "DXF"]` | Used to filter the [models](/viewer/reference/state.html#model) displayed on the list.                                                        |
