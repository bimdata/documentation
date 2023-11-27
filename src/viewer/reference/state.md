# State

The state contains [Models](#models), [Objects](#objects) and [Annotations](#annotations) logic.
It can be accessed with `$viewer.state`.

```typescript
interface State {
  hub: EventHandler<StateEvents>;

  /**** Models ****/
  readonly models: Model[];
  readonly modelsMap: Map<number, Model>;
  loadModels(ids: number[]): Promise<Model[]>;
  unloadModels(ids: number[]);
  getStoreyFromAbsoluteElevation(model: Model, elevation: number): Storey;

  /**** Objects ****/
  readonly objects: StateObject[];
  readonly objectsIds: number[];
  readonly objectsUuids: string[];
  readonly objectsMap: Map<number, StateObject>;
  readonly uuidsMap: { get(uuid: string): StateObject[]; };
  getObject(id: number): StateObject;
  getObjectsByUuids(uuids: string[]): StateObject[];
  getObjectsOfType(type: string): StateObject[];
  getObjectsWithTheSameTypeAs(ids: number[]): StateObject[];
  getTypesOf(ids: number[]): string[];

  readonly visibleObjects: StateObject[];
  readonly visibleObjectsIds: number[];
  readonly visibleObjectsUuids: string[];
  showObjects(ids: number[], options?: any): void;
  showObjectsByUuids(uuids: string[], options?: any): void;

  readonly unvisibleObjects: StateObject[];
  readonly unvisibleObjectsIds: number[];
  readonly unvisibleObjectsUuids: string[];
  hideObjects(ids: number[], options?: any): void;
  hideObjectsByUuids(uuids: string[], options?: any): void;

  readonly pickableObjects: StateObject[];
  readonly pickableObjectsIds: number[];
  readonly pickableObjectsUuids: string[];
  setObjectsPickable(ids: number[], options?: any): void;
  setObjectsPickableByUuids(uuids: string[], options?: any): void;

  readonly unpickableObjects: StateObject[];
  readonly unpickableObjectsIds: number[];
  readonly unpickableObjectsUuids: string[];
  setObjectsUnpickable(ids: number[], options?: any): void;
  setObjectsUnpickableByUuids(uuids: string[], options?: any): void;

  readonly selectedObjects: StateObject[];
  readonly selectedObjectsIds: number[];
  readonly selectedObjectsUuids: string[];
  selectObjects(ids: number[], options?: any): void;
  selectObjectsByUuids(uuids: string[], options?: any): void;

  readonly deselectedObjects: StateObject[];
  readonly deselectedObjectsIds: number[];
  readonly deselectedObjectsUuids: string[];
  deselectObjects(ids: number[], options?: any): void;
  deselectObjectsByUuids(uuids: string[], options?: any): void;

  readonly highlightedObjects: StateObject[];
  readonly highlightedObjectsIds: number[];
  readonly highlightedObjectsUuids: string[];
  highlightObjects(ids: number[], options?: any): void;
  highlightObjectsByUuids(uuids: string[], options?: any): void;

  readonly unhighlightedObjects: StateObject[];
  readonly unhighlightedObjectsIds: number[];
  readonly unhighlightedObjectsUuids: string[];
  unhighlightObjects(ids: number[], options?: any): void;
  unhighlightObjectsByUuids(uuids: string[], options?: any): void;

  readonly xrayedObjects: StateObject[];
  readonly xrayedObjectsIds: number[];
  readonly xrayedObjectsUuids: string[];
  xrayObjects(ids: number[], options?: any): void;
  xrayObjectsByUuids(uuids: string[], options?: any): void;

  readonly unxrayedObjects: StateObject[];
  readonly unxrayedObjectsIds: number[];
  readonly unxrayedObjectsUuids: string[];
  unxrayObjects(ids: number[], options?: any): void;
  unxrayObjectsByUuids(uuids: string[], options?: any): void;

  readonly colorizedObjects: StateObject[];
  readonly colorizedObjectsIds: number[];
  readonly colorizedObjectsUuids: string[];
  colorizeObjects(ids: number[], color?: string, options?: any): void;
  colorizeObjectsByUuids(uuids: string[], color?: string, options?: any): void;

  /**** Annotations ****/
  readonly annotations: Annotation[];
  addAnnotation(annotation: Annotation, options?: any): Annotation;
  removeAnnotation(annotation: Annotation, options?: any): boolean;
  clearAnnotations(): void;
}
```

## Models

A state `Model` is a [model object from API](https://api-staging.bimdata.io/doc#/model/getModel) extended with some additional fields.

```typescript
interface Model extends ApiModel {
  structure: Object;
  uuids: Map<string, StateObject>;
  objects: StateObject[];
  storeys: Storey[];
}
```

The `structure` object is obtained by fetching and parsing the file pointed by the model `structure_file` property.

The `uuids` map can be used to retrieve model objects directly (using their uuids).

## Objects

```typescript
interface StateObject {
  // Properties
  id: number;
  uuid: string;
  name: string;
  longname: string;
  type: string;
  object_type: string;
  model: Model;
  parent: StateObject;
  children: StateObject[];

  // State
  visible: boolean;
  pickable: boolean;
  selected: boolean;
  highlighted: boolean;
  xrayed: boolean;
  color: string;

  // Advanced getters
  readonly descendants: StateObject[];
  readonly ancestors: StateObject[];
  readonly site: StateObject;
  readonly building: StateObject;
  readonly storey: StateObject;
  readonly layout: StateObject;
  readonly space: StateObject;
  getFirstAncestorWithType: (type: string) => StateObject;
}
```

### Objects maps

| Name                                   | Description                              |
| :------------------------------------- | :--------------------------------------- |
| `objectsMap: Map<string, StateObject>` | A Map of all objects keyed by **id**.    |
| `uuidsMap: Map<string, StateObject[]>` | A Map of all objects keyed by **uuids**. |

As object uuids may not be unique, `uuidsMap.get()` always returns an array of objects.

### Objects getters

The state provide getters that allows to quickly access a set of objects with specific properties.

| Name                                                       | Description                                            |
| :--------------------------------------------------------- | :----------------------------------------------------- |
| **properties**                                             |                                                        |
| `visibleObjects`                                           | List of visible objects.                               |
| `unvisibleObjects`                                         | List of objects that are not visible.                  |
| `pickableObjects`                                          | List of pickable objects.                              |
| `unpickableObjects`                                        | List of objects that are not pickable.                 |
| `selectedObjects`                                          | List of selected objects.                              |
| `deselectedObjects`                                        | List of objects that are not selected.                 |
| `highlightedObjects`                                       | List of highlighted objects.                           |
| `unhighlightedObjects`                                     | List of objects that are not highlighted.              |
| `xrayedObjects`                                            | List of xrayed objects.                                |
| `unxrayedObjects`                                          | List of objects that are not xrayed.                   |
| `colorizedObjects`                                         | List of colorized objects.                             |
| **methods**                                                |                                                        |
| `getObject(id: number)`                                    | Returns the object with the specified id.              |
| `getObjectsByUuids(uuids: string[])`                       | Returns objects with corresponding uuids.              |
| `getObjectsOfType(type: string)`                           | Returns objects with corresponding type.               |
| `getObjectsWithTheSameTypeAs(ids: number[] | Set<number>)` | Returns all objects with the same type as objects ids. |
| `getTypesOf(ids: number[] | Set<number>)`                  | Returns all the types of the corresponding objects.    |

**Note:** for convenience, all getter properties have also `ids` and `uuids` equivalent:

```javascript
$viewer.state.selectedObjects;      // list of selected objects
$viewer.state.selectedObjectsIds;   // list of selected objects ids
$viewer.state.selectedObjectsUuids; // list of selected objects uuids
```

## Objects setters

Setters allows to update the objects state.

| Name                                                            | Description                                     |
| :-------------------------------------------------------------- | :---------------------------------------------- |
| `showObjects(ids: number[], options?: any)`                     | Show objects.                                   |
| `hideObjects(ids: number[], options?: any)`                     | Hide objects.                                   |
| `setObjectsPickable(ids: number[], options?: any)`              | Set objects as pickable.                        |
| `setObjectsUnpickable(ids: number[], options?: any)`            | Set objects as unpickable.                      |
| `selectObjects(ids: number[], options?: any)`                   | Select objects.                                 |
| `deselectObjects(ids: number[], options?: any)`                 | Deselect objects.                               |
| `highlightObjects(ids: number[], options?: any)`                | Highlight objects.                              |
| `unhighlightObjects(ids: number[], options?: any)`              | Unhighlight objects.                            |
| `xrayObjects(ids: number[], options?: any)`                     | Xray objects.                                   |
| `unxrayObjects(ids: number[], options?: any)`                   | Unxray objects.                                 |
| `colorizeObjects(ids: number[], color?: string, options?: any)` | Set objects color (ex: "#FFFFFF").              |

**Note:** as for [getters](#objects-getters), setters have `uuids` equivalent as well:

```javascript
$viewer.state.selectObjects(ids);          // selects objects by ids
$viewer.state.selectObjectsByUuids(uuids); // selects objects by uuids
```

Moreover, every setter has an optional `options` argument that can be used to pass additional data to the triggered event payload.
This provide more flexibility and allows to handle some complex use cases.

An example usage if the `options` argument could be to ensure that a plugin will not "auto-trigger" itself by emitting
an `"objects-selected"` event while still being able to react to other plugins `"objects-selected"` events:

```javascript
this.$viewer.state.hub.on("objects-selected", ({ objects, options }) => {
  if (options.emitter === this) return;
  /* Do something if the event comes from another plugin. */
});

// Pass an `emitter` option to ensure the plugin will not trigger itself
this.$viewer.state.selectObjects(ids, { emitter: this });
```

## Annotations

The state provide a way to manage a set of annotation objects.

```typescript
interface Annotation {
  // Coordinates
  x: number;
  y: number; 
  z: number;
  // Vue component used to render annotation on viewer
  component: any;
  // Optional props to pass to the annotation component
  props?: any;
}
```

Annotation related fields and methods:

| Name                                    | Description                                                     |
| :-------------------------------------- | :-------------------------------------------------------------- |
| `annotations`                           | The list of all annotations (read only)                         |
| `addAnnotation(annotation, options)`    | Add an annotation to the state                                  |
| `removeAnnotation(annotation, options)` | Remove the given annotation from state                          |
| `clearAnnotations()`                    | Remove all annotations from state                               |

## Events

| Name                    | Payload                                                  | Description |
| :---------------------- | :------------------------------------------------------- | :---------- |
| **Models events**       |                                                          |             |
| `models-loaded`         | { models: Model[] }                                      | One or more models have been loaded in the state |
| `models-unloaded`       | { models: Model[] }                                      | One or more models have been unloaded from the state |
| **Objects events**      |                                                          |             |
| `objects-added`         | { objects: StateObject[] }                               | Some objects have been added to the state |
| `objects-removed`       | { objects: StateObject[] }                               | Some objects have been removed from the state |
| `objects-shown`         | { objects: StateObject[], options?: any }                | Some objects have been made visible |
| `objects-hidden`        | { objects: StateObject[], options?: any }                | Some objects have been hidden |
| `objects-pickable`      | { objects: StateObject[], options?: any }                | Some objects have been made pickable |
| `objects-unpickable`    | { objects: StateObject[], options?: any }                | Some objects have been made unpickable |
| `objects-selected`      | { objects: StateObject[], options?: any }                | Some objects have been selected |
| `objects-deselected`    | { objects: StateObject[], options?: any }                | Some objects have been deselected |
| `objects-highlighted`   | { objects: StateObject[], options?: any }                | Some objects have been highlighted |
| `objects-unhighlighted` | { objects: StateObject[], options?: any }                | Some objects have been unhighlighted |
| `objects-xrayed`        | { objects: StateObject[], options?: any }                | Some objects have been xrayed |
| `objects-unxrayed`      | { objects: StateObject[], options?: any }                | Some objects have been unxrayed |
| `objects-colorized`     | { objects: StateObject[], color: string, options?: any } | Some objects have been colorized |
| **Annotations events**  |                                                          |             |
| `annotation-added`      | { annotation: Annotation, options?: any }                | An annotation has been added |
| `annotation-updated`    | { annotation: Annotation, options?: any }                | An annotation has been updated/moved |
| `annotation-removed`    | { annotation: Annotation, options?: any }                | An annotation has been removed |

:::tip
For more information about the state hub interface, see [the hub reference](hubs.html).
:::

Examples:

```js
state.hub.on("models-loaded", ({ models }) => {
  /* Handle newly loaded models */
});

state.hub.on("objects-selected", ({ objects, options }) => {
  /* Do something with selected objects */
});
```
