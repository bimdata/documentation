# State

The state contains [Models](#model) and [objects](#object) logic. It is located on the `$viewer` object:

```javascript
$viewer.state;
```

## Model

A [Model](https://github.com/bimdata/javascript-api-client/blob/master/docs/Model.md) object with `structure`, `objects` and `uuids` properties.

- `structure`: the object returned by fetching [model](https://github.com/bimdata/javascript-api-client/blob/master/docs/Model.md) `structureFile`.
- `objects`: an Array of all model [objects](#object).
- `uuids`: a Map to retrieve model [object](#object) by uuid (ex: model.uuids.get("myuuid"))

## Object

```typescript
interface object {
  id: number;
  model: Model;
  visible: boolean;
  pickable: boolean;
  selected: boolean;
  highlighted: boolean;
  xrayed: boolean;
  type: string;
  uuid: string;
  name: string;
  object_type: string;
  children: ViewerObject[];
  parent: ViewerObject;
  descendants: ViewerObject[];
  ancestors: ViewerObject[];
  getFirstAncestorWithType: ViewerObject;
  storey: ViewerObject; // get first ancestor with type "storey"
  space: ViewerObject; // get first ancestor with type "space"
}
```

## Getters

Getters allows to quickly access models and objects with specific properties.

```javascript
const allModels = state.models;
```

| Name                                                       | Description                                            |
| :--------------------------------------------------------- | :----------------------------------------------------- |
| `models`                                                   | Returns all models.                                    |
| `objects`                                                  | Returns all objects.                                   |
| `getIfc(ifcId)`                                            | Returns the ifc with the specified id.                 |
| `getObject(objectId)`                                      | Returns the object with the specified id.              |
| `getObjectsByUuids(uuids: string[])`                       | Returns objects with corresponding uuids.              |
| `getObjectsOfType(type: string)`                           | Returns objects with corresponding type.               |
| `getTypesOf(ids: number[] | Set<number>): string[]`        | Returns all the types of the corresponding objects.    |
| `getObjectsWithTheSameTypeAs(ids: number[] | Set<number>)` | Returns all objects with the same type as objects ids. |
| `selectedObjects`                                          | Returns selected objects.                              |
| `deselectedObjects`                                        | Returns deselected objects.                            |
| `highlightedObjects`                                       | Returns highlighted objects.                           |
| `unhighlightedObjects`                                     | Returns unhighlighted objects.                         |
| `visibleObjects`                                           | Returns visible objects.                               |
| `unvisibleObjects`                                         | Returns unvisible objects.                             |
| `xrayedObjects`                                            | Returns xrayed objects.                                |
| `unxrayedObjects`                                          | Returns unxrayed objects.                              |
| `colorizedObjects`                                         | Returns colorized objects.                             |

In addition of the previous getters, there are Map getters that return a `Map` instead of an `Array`:

| Name                              | Description                                                                                                                                    |
| :-------------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------- |
| `modelsMap: Map<string, Object>`    | Returns a Map with all model. `keys` are model ids.                                                                                               |
| `objectsMap: Map<string, Object>` | Returns a Map with all objects. `keys` are object ids.                                                                                         |
| `uuidsMap: Map<string, Object[]>` | Returns a Map with all objects. `keys` are object uuids. As object uuids may not be unique, uuidsMap.get("some_uuid") always returns an array. |

```javascript
const object = $viewer.state.uuidsMap.get("some_uuid")[0]; // Always returns an array with the corresponding objects.
```

:::tip
If you need Array API like `filter`, `some`... Use `state.objects.filter(() => {/* do something */})`.

If you need to get an object by uuid, use Map getters that are more performant for this purpose.
:::

## Setters

Setters allows to update the state.

```javascript
const objectId = 1;

state.selectObjects([objectId], options);
```

| Name                                   | Description                                                     |
| :------------------------------------- | :-------------------------------------------------------------- |
| Models setter                          |                                                                 |
| `async loadModels(modelIds: number[])` | **Async** Load models with the specified ids. and returns them. |
| `unloadModels(modelIds: number[])`     | Unload models with the specified ids.                           |
| Objects setter                         |                                                                 |
| `selectObjects(ids, options)`          | Select objects.                                                 |
| `deselectObjects(ids, options)`        | Deselect objects.                                               |
| `highlightObjects(ids, options)`       | Highlight objects.                                              |
| `unhighlightObjects(ids, options)`     | Unhighlight objects.                                            |
| `showObjects(ids, options)`            | Show objects.                                                   |
| `hideObjects(ids, options)`            | Hide objects.                                                   |
| `xrayObjects(ids, options)`            | Xray objects.                                                   |
| `unxrayObjects(ids, options)`          | Unxray objects.                                                 |
| `colorizeObjects(ids, color, options)` | Color objects with HEXColor (ex: "#FFFFFF").                    |

The `options` object on setters is passed as property on the event payload. It could be interesting in some special case when a plugin update objects and listen to the same object change event. If the plugin sent the event, it may be appropriate to do not react on the corresponding event:

```javascript
this.$viewer.state.selectObjects(ids, { trigger: this });

this.$viewer.state.hub.on("objects-selected", ({ objects, options }) => {
  if (options.trigger === this) return;
  /* Do something if the event comes from another plugin. */
});
```

## IDs and UUIDs

All property getters and setters have `id` and `uuid` equivalent.

For getters, add `Ids` or `Uuids`:

```javascript
$viewer.state.selectedObjects; // Return the selected objects
$viewer.state.selectedObjectsIds; // Return the selected objects ids
$viewer.state.selectedObjectsUuids; // Return the selected objects uuids
```

For setters, add `ByUuids`:

```javascript
$viewer.state.selectObjects(ids, options); // Selects objects by ids
$viewer.state.selectObjectsByUuids(uuids, options); // Selects objects by uuids
```

## Hub

`state.hub` allows to listen for [state update events](#events) :

```javascript
state.hub.on("objects-selected", ({ ids, options }) => {
  console.log("Do something.");
});

state.hub.on(
  "models-loaded",
  ({ models }) => {
    console.log("Do something.");
  },
  {
    getLastEvent: true, // immediately trigger the callback with the last loaded models if they exists.
  }
);
```

`options` is a custom object passed at some [setters](#setters).

### Events

| Name                    | Payload                                              |
| :---------------------- | :--------------------------------------------------- |
| **Models events**       |                                                      |
| `models-loaded`         | { models: Model[] }                                  |
| `models-unloaded`       | { models: Model[] }                                  |
| **Objects events**      |                                                      |
| `objects-added`         | { objects: Array }                                   |
| `objects-removed`       | { objects: Array }                                   |
| `objects-selected`      | { objects: Array, options: Object }                  |
| `objects-deselected`    | { objects: Array, options: Object }                  |
| `objects-highlighted`   | { objects: Array, options: Object }                  |
| `objects-unhighlighted` | { objects: Array, options: Object }                  |
| `objects-shown`         | { objects: Array, options: Object }                  |
| `objects-hidden`        | { objects: Array, options: Object }                  |
| `objects-xrayed`        | { objects: Array, options: Object }                  |
| `objects-unxrayed`      | { objects: Array, options: Object }                  |
| `objects-colorized`     | { objects: Array, color: HEXColor, options: Object } |

:::tip
For more information about the state hub interface, see [the hub reference](hubs.html).
:::
