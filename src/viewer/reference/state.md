# State

The state contains [IFCs](#ifc) and [objects](#object) logic. It is located on the `$viewer` object:

```javascript
$viewer.state
```

## IFC

An [IFC](https://github.com/bimdata/javascript-api-client/blob/master/docs/Ifc.md) object with `structure`, `objects` and `uuids` properties.

- `structure`: the object returned by fetching [ifc](https://github.com/bimdata/javascript-api-client/blob/master/docs/Ifc.md) `structureFile`.
- `objects`: an Array of all ifc [objects](#object).
- `uuids`: a Map to retrieve ifc [object](#object) by uuid (ex: ifc.uuids.get("myuuid"))

## Object

```typescript
interface object {
  id: number;
  ifcId: number;
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
}
```

## Getters

Getters allows to quickly access ifcs and objects with specific properties.

```javascript
const allIfcs = state.ifcs;
```

| Name                                 | Description                               |
| :----------------------------------- | :---------------------------------------- |
| `ifcs`                               | Returns all ifcs.                         |
| `objects`                            | Returns all objects.                      |
| `getIfc(ifcId)`                      | Returns the ifc with the specified id.    |
| `getObject(objectId)`                | Returns the object with the specified id. |
| `getObjectsByUuids(uuids: string[])` | Returns objects with corresponding uuids. |
| `selectedObjects`                    | Returns selected objects.                 |
| `deselectedObjects`                  | Returns deselected objects.               |
| `highlightedObjects`                 | Returns highlighted objects.              |
| `unhighlightedObjects`               | Returns unhighlighted objects.            |
| `visibleObjects`                     | Returns visible objects.                  |
| `unvisibleObjects`                   | Returns unvisible objects.                |
| `xrayedObjects`                      | Returns xrayed objects.                   |
| `unxrayedObjects`                    | Returns unxrayed objects.                 |
| `colorizedObjects`                   | Returns colorized objects.                |

## Setters

Setters allows to update the state.

```javascript
const objectId = 1;

state.selectObjects([objectId], { optionProperty: "someOption" });
```

`options` on objects setters is passed as property on the event payload.

| Name                                   | Description                                                   |
| :------------------------------------- | :------------------------------------------------------------ |
| Ifcs setter                            |                                                               |
| `loadIfcs(ifcIds: number[])`           | **Async** Load ifcs with the specified ids. and returns them. |
| `unloadIfcs(ifcIds: number[])`         | Unload ifcs with the specified ids.                           |
| Objects setter                         |                                                               |
| `selectObjects(ids, options)`          | Select objects.                                               |
| `deselectObjects(ids, options)`        | Deselect objects.                                             |
| `highlightObjects(ids, options)`       | Highlight objects.                                            |
| `unhighlightObjects(ids, options)`     | Unhighlight objects.                                          |
| `showObjects(ids, options)`            | Show objects.                                                 |
| `hideObjects(ids, options)`            | Hide objects.                                                 |
| `xrayObjects(ids, options)`            | Xray objects.                                                 |
| `unxrayObjects(ids, options)`          | Unxray objects.                                               |
| `colorizeObjects(ids, color, options)` | Color objects with HEXColor (ex: "#FFFFFF").                  |

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
```

`options` is a custom object passed at some [setters](#setters).

### Events

| Name                    | Payload                                              |
| :---------------------- | :--------------------------------------------------- |
| **Ifcs events**         |                                                      |
| `ifcs-loaded`           | { ifcs: ifc[] }                                      |
| `ifcs-unloaded`         | { ifcs: ifc[] }                                      |
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

## Undo Redo

The state in binded to `ctrl + z` (and `cmd + z`) and `ctrl + y` (and `cmd + y`) shortcuts to undo or redo modifications respectively. The majority of the state modifications can be undo or redo except highlight changes.