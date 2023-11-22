# Local Context

The `$viewer.localContext` object is used as an interface between a plugin and its containing window.

Here is the full `LocalContext` interface:

```typescript
interface LocalContext {
  hub: EventHandler<LocalContextEvents>;

  id: number;
  readonly el: Element;
  readonly x: number;
  readonly y: number;
  readonly width: number;
  readonly height: number;
  resolution: number;

  // Local state
  readonly multiModel: boolean;
  readonly modelTypes?: string[];
  readonly loadedModels: StateModel[];
  readonly loadedModelIds: number[];
  readonly loadingModelIds: number[];
  readonly currentStorey: StateStorey | null;
  loadModels(ids: number[]): Promise<boolean>;
  unloadModels(ids: number[]): boolean;
  toggleModel(id: number): Promise<boolean>;
  selectStorey(storey: StateStorey): void;
  showPlan(plan: StatePlan): void;
  hidePlan(plan: StatePlan): void;
  togglePlanVisibility(plan: StatePlan): void;
  togglePlanEdition(plan: StatePlan): void;
  createPlan(model: StateModel, storey: StateStorey, document: ApiDocument, positioning: StatePositionning): Promise<StatePlan>;
  updatePlan(plan: StatePlan, positioning: StatePositionning): Promise<StatePlan>;
  deletePlan(plan: StatePlan): Promise<void>;

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
  loadWindow(windowName: string): void;

  // Plugins
  readonly plugins: Map<string, PluginInstance>;

  // Shortcuts
  registerShortcut(shortcut: Shortcut): boolean;
  unregisterShortcut(name: string): boolean;

  // Loading
  readonly loading: boolean;
  loadingProcessStart(): void;
  loadingProcessEnd(): void;

  // Modals
  readonly modals: {
    pushModal(component: Object, props?: Object, options?: Object): void;
    clearModal(): void;
  };
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
| `currentStorey`                    | Storey that is currently active                                        |
| **methods**                        |                                                                        |
| `loadModels(ids: number[])`        | Load the given models in this context                                  |
| `unloadModels(ids: number[])`      | Unload the given models from this context                              |
| `toggleModel(id: number)`          | *Load* (resp. *unload*) model if it is *not unloaded* (resp. *loaded*) |
| `selectStorey(storey: Storey)`     | Set storey as the current storey                                       |
| `showPlan(plan: Plan)`             | Show plan                                                              |
| `hidePlan(plan: Plan)`             | Hide plan                                                              |
| `togglePlanVisibility(plan: Plan)` | Toggle plan visibility                                                 |
| `togglePlanEdition(plan: Plan)`    | Toggle plan edition mode                                               |

The properties described above are reactive and can be watched by Vue to trigger effects:

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
| `annotationMode`                              | `true` if annotation mode is activated, `false` otherwise                           |
| **methods**                                   |                                                                                     |
| `getViewpoint(options?: any)`                 | (*async*) Get the current model viewer viewpoint                                    |
| `setViewpoint(viewpoint: any, options?: any)` | (*async*) Set model viewer viewpoint                                                |
| `startAnnotationMode(callback: Function)`     | Activate annotation mode                                                            |
| `stopAnnotationMode()`                        | Deactivate annotation mode                                                          |
| `fitView(options?: any)`                      | Apply a "fit view" command to the model viewer                                      |
| `showUI(options?: any)`                       | Makes all UI elements of the context visible (such as plugins and model selector)   |
| `hideUI(options?: { exceptions: string[] })`  | (*async*) Hide all UI elements of the context (some exceptions can be specified)    |

## Events

### Local Context specific events

| Name                        | Payload                                      | Description |
| :-------------------------- | :------------------------------------------- | :---------- |
| `alert`                     | `{ type: string, message: string }`          | A plugin in this context raised an alert to be displayed |
| `context-resize`            | `{ width: number, height: number }`          | The context window has been resized |
| `models-loaded`             | `{ models: Model[] }`                        | One or more models have been loaded in this context |
| `models-unloaded`           | `{ models: Model[] }`                        | One or more models have been unloaded from this context |
| `models-loading`            | `{ ids: number[] }`                          | One or more models are loading in this context |
| `storey-selected`           | `{ storey: Storey }`                         | The current active storey has changed |
| `plan-shown`                | `{ plan: Plan }`                             | A storey plan is now visible |
| `plan-hidden`               | `{ plan: Plan }`                             | A storey plan has been hidden |
| `plan-editing`              | `{ plan: Plan }`                             | A storey plan edition mode has been toggle |
| `plan-created`              | `{ plan: Plan }`                             | A storey plan has been created |
| `plan-updated`              | `{ plan: Plan }`                             | A storey plan has been updated |
| `plan-deleted`              | `{ plan: Plan }`                             | A storey plan has been deleted |
| `pdf-page-changed`          | `{ model: Model, page: any }`                | The current PDF page changed |

### Events emitted on both Global & Local contexts

| Name                        | Payload                                      | Description |
| :-------------------------- | :------------------------------------------- | :---------- |
| `plugin-created`            | `{ name: string, plugin: PluginInstance }`   | A plugin has been added to this context |
| `plugin-destroyed`          | `{ name: string, plugin: PluginInstance }`   | A plugin has been removed from this context |
| `plugin-menu-open`          | `{ name: string, plugin: PluginInstance }`   | A menu plugin has been opened |
| `plugin-menu-close`         | `{ name: string, plugin: PluginInstance }`   | A menu plugin has been closed |
| `3d-model-loaded`           | `{ model: Model, plugin: ViewerIfc3D }`      | An IFC model has been loaded in an IFC 3D viewer |
| `3d-model-unloaded`         | `{ model: Model, plugin: ViewerIfc3D }`      | An IFC model has been unloaded from an IFC 3D viewer |
| `2d-model-loaded`           | `{ model: Model, plugin: ViewerIfc2D }`      | An IFC model has been loaded in an IFC 2D viewer |
| `2d-model-unloaded`         | `{ model: Model, plugin: ViewerIfc2D }`      | An IFC model has been unloaded from an IFC 2D viewer |
| `dwg-model-loaded`          | `{ model: Model, plugin: ViewerDwg }`        | A DWG model has been loaded |
| `dwg-model-unloaded`        | `{ model: Model, plugin: ViewerDwg }`        | A DWG model has been unloaded |
| `dxf-model-loaded`          | `{ model: Model, plugin: ViewerDwg }`        | A DXF model has been loaded |
| `dxf-model-unloaded`        | `{ model: Model, plugin: ViewerDwg }`        | A DXF model has been unloaded |
| `plan-model-loaded`         | `{ model: Model, plugin: ViewerPlan }`       | A Plan/Meta-Building model has been loaded |
| `plan-model-unloaded`       | `{ model: Model, plugin: ViewerPlan }`       | A Plan/Meta-Building model has been unloaded |
| `pointcloud-model-loaded`   | `{ model: Model, plugin: ViewerPointCloud }` | A Point Cloud model has been loaded |
| `pointcloud-model-unloaded` | `{ model: Model, plugin: ViewerPointCloud }` | A Point Cloud model has been unloaded |
