# Local Context

The `localContext` shares a `Context` interface with the `globalContext`. Here is the full `LocalContext` interface:

```typescript
interface Context {
  readonly hub: EventHandler;

  registerShortcut(shortcut: Shortcut, context: GlobalContext | LocalContext): boolean;
  unregisterShortcut(name: string, context: GlobalContext | LocalContext): boolean;

  readonly loading: boolean;
  loadingProcessStart(): void;
  loadingProcessEnd(): void;
  spinner: { component: Object, props: Object }; // a custom spinner replacing the default BIMDataSpinner

  modals: {
    pushModal(component: any, props?: any, options?: any): void;
    clearModal(): void;
  };

  el: HTMLElement;
}
```

```typescript
interface LocalContext extends Context {
  id: number;
  readonly x: number;
  readonly y: number;
  readonly width: number;
  readonly height: number;
  resolution: number;

  close(): void;

  // Local state
  readonly multiModel: boolean;
  readonly modelTypes?: string[];
  readonly loadedModels: StateModel[];
  readonly loadedModelIds: number[];
  readonly loadingModelIds: number[];
  readonly selectedStorey: StateStorey | null;
  loadModels(ids: number[]): Promise<boolean>;
  unloadModels(ids: number[]): boolean;
  selectStorey(storey: StateStorey, { showPlans?: boolean, fitViewRequested?: boolean }): void;
  showPlan(plan: StatePlan): void;
  hidePlan(plan: StatePlan): void;

  // Viewer Interface
  readonly viewer: ModelViewerInstance | null;
  readonly annotationMode: boolean;
  getViewpoint: (options?: any) => any | Promise<any>;
  setViewpoint: (viewpoint: any, options?: any) => void | Promise<void>;
  startAnnotationMode: (callback: Function) => void;
  stopAnnotationMode: () => void;
  fitView: (options?: any) => void;
  showUI: (options?: any) => void;
  hideUI: (options?: { exceptions: string[] }) => Promise<void>;

  // Context Window
  readonly window: Window;
  loadWindow(windowName: string, windowState?: { modelIds: number, viewpoint: Object, storey: string }): void;
  unloadWindow(): void;

  // Plugins
  readonly pluginInstances: new Map<string, PluginInstance>;
  readonly plugins: Map<string, PluginComponentInstance>;
}
```

## Local State

The [global state](./state.md) allows to manage a set of shared data that is not tied to a specific context.

To manage models, storeys and plans for a given context you can use the `localContext` object.

| Name                               | Description                                                            |
| :--------------------------------- | :--------------------------------------------------------------------- |
| **properties**                     |                                                                        |
| `loadedModels`                     | List of currently loaded models                                        |
| `loadedModelIds`                   | List of currently loaded model ids                                     |
| `loadingModelIds`                  | List of model ids that are currently loading                           |
| `selectedStorey`                   | Storey that is currently active                                        |
| **methods**                        |                                                                        |
| `loadModels(ids: number[])`        | Load the given models in this context                                  |
| `unloadModels(ids: number[])`      | Unload the given models from this context                              |
| `selectStorey(storey: Storey, { showPlans?: boolean, fitViewRequested?: boolean })`     | Set storey as the current storey. If `showPlans` is `false` (default to `true`), the corresponding storey plans are not shown. `fitViewRequested` (default to `true`) is an hint indicating to the `"storey-selected"` listeners that a fit view should be done. Useful if a custom fit view is performed just after selecting the storey.                                       |
| `showPlan(plan: Plan)`             | Show plan                                                              |
| `hidePlan(plan: Plan)`             | Hide plan                                                              |

The properties described above are reactive and can be
[watched](https://vuejs.org/guide/essentials/watchers.html) by Vue to trigger effects:

```javascript
watch(
  () => $viewer.localContext.loadedModels
  models => {
    console.log("Currently loaded models: ", models);
  }
);
```

## Viewer Interface

For [viewer windows](./viewer_plugins.md) the `localContext` provide an API to interact with the local model viewer.
It is a set of methods that are independent on the type of viewer (`IFC`, `DWG`, `Plan`, ...).
If the current context is not a viewer window, an error is thrown when these methods are called.

| Name                                          | Description                                                                         |
| :-------------------------------------------- | :---------------------------------------------------------------------------------- |
| **properties**                                |                                                                                     |
| `viewer`                                      | Model viewer instance of this context, `null` if the context is not a viewer window |
| `annotationMode`                              | `true` if annotation mode is enabled, `false` otherwise                             |
| **methods**                                   |                                                                                     |
| `getSnapshot()`                               | (*async*) Get a snapshot of the current viewer: `{ snapshot_type: string, snapshot_data: string (Data URL) }` |
| `getViewpoint(options?: any)`                 | (*async*) Get a [BCF viewpoint](https://api.bimdata.io/doc#/bcf/getViewpoint) of the current viewer |
| `setViewpoint(viewpoint: any, options?: any)` | (*async*) Set model viewer viewpoint                                                |
| `startAnnotationMode(callback: Function)`     | Enable annotation mode (see [annotation API](./annotations.md#usage))               |
| `stopAnnotationMode()`                        | Disable annotation mode                                                             |
| `fitView(options?: any)`                      | Apply a "fit view" command to the model viewer                                      |
| `showUI(options?: any)`                       | (*async*) Makes all UI elements of the context visible (such as plugins and model selector) |
| `hideUI(options?: { exceptions: string[] })`  | (*async*) Hide all UI elements of the context (some exceptions can be specified)    |

## Events

### Local Context specific events

| Name               | Payload                             | Description                                              |
| :----------------- | :---------------------------------- | :------------------------------------------------------- |
| `alert`            | `{ type: string, message: string }` | A plugin in this context raised an alert to be displayed |
| `context-resize`   | `{ width: number, height: number }` | The context window has been resized                      |
| `models-loaded`    | `{ models: Model[] }`               | One or more models have been loaded in this context      |
| `models-unloaded`  | `{ models: Model[] }`               | One or more models have been unloaded from this context  |
| `models-loading`   | `{ ids: number[] }`                 | One or more models are loading in this context           |
| `storey-selected`  | `{ storey: Storey }`                | The current active storey has changed                    |
| `plan-shown`       | `{ plan: Plan }`                    | A storey plan is now visible                             |
| `plan-hidden`      | `{ plan: Plan }`                    | A storey plan has been hidden                            |
| `pdf-page-changed` | `{ model: Model, page: any }`       | The current PDF page changed                             |
| `drawing-created`  | `{ drawing: Drawing }`              | A new drawing has been created on the current model      |
| `drawing-updated`  | `{ drawing: Drawing }`              | A drawing has been updated on the current model          |
| `drawing-deleted`  | `{ drawing: Drawing }`              | A drawing has been deleted on the current model          |

### Events emitted on both Global & Local contexts

| Name                        | Payload                                      | Description                                          |
| :-------------------------- | :------------------------------------------- | :--------------------------------------------------- |
| `plugin-created`            | `{ name: string, plugin: PluginInstance }`   | A plugin has been added to this context              |
| `plugin-destroyed`          | `{ name: string, plugin: PluginInstance }`   | A plugin has been removed from this context          |
| `3d-model-loaded`           | `{ model: Model, plugin: ViewerIfc3D }`      | An IFC model has been loaded in an IFC 3D viewer     |
| `3d-model-unloaded`         | `{ model: Model, plugin: ViewerIfc3D }`      | An IFC model has been unloaded from an IFC 3D viewer |
| `2d-model-loaded`           | `{ model: Model, plugin: ViewerIfc2D }`      | An IFC model has been loaded in an IFC 2D viewer     |
| `2d-model-unloaded`         | `{ model: Model, plugin: ViewerIfc2D }`      | An IFC model has been unloaded from an IFC 2D viewer |
| `dwg-model-loaded`          | `{ model: Model, plugin: ViewerDwg }`        | A DWG model has been loaded                          |
| `dwg-model-unloaded`        | `{ model: Model, plugin: ViewerDwg }`        | A DWG model has been unloaded                        |
| `dxf-model-loaded`          | `{ model: Model, plugin: ViewerDwg }`        | A DXF model has been loaded                          |
| `dxf-model-unloaded`        | `{ model: Model, plugin: ViewerDwg }`        | A DXF model has been unloaded                        |
| `plan-model-loaded`         | `{ model: Model, plugin: ViewerPlan }`       | A Plan/Meta-Building model has been loaded           |
| `plan-model-unloaded`       | `{ model: Model, plugin: ViewerPlan }`       | A Plan/Meta-Building model has been unloaded         |
| `pointcloud-model-loaded`   | `{ model: Model, plugin: ViewerPointCloud }` | A Point Cloud model has been loaded                  |
| `pointcloud-model-unloaded` | `{ model: Model, plugin: ViewerPointCloud }` | A Point Cloud model has been unloaded                |
