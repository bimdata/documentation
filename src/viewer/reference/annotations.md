# Annotation API

### State

The [state](./state.md) provide a way to manage a set of annotation objects.

```typescript
interface Annotation {
  readonly id: number;
  // Coordinates
  x: number;
  y: number; 
  z: number;
  // Settings
  draggable: boolean;
  grabberSelector?: string;
  // Vue component used to render annotation on viewer
  component: any;
  // Optional props to pass to the annotation component
  props?: any;
}
```

Annotation related fields and methods accessible from the [state](./state.md):

| Name                                    | Description                                                     |
| :-------------------------------------- | :-------------------------------------------------------------- |
| `annotations`                           | The list of all annotations (read only)                         |
| `addAnnotation(annotation, options)`    | Add an annotation to the state                                  |
| `removeAnnotation(annotation, options)` | Remove the given annotation from state                          |
| `clearAnnotations()`                    | Remove all annotations from state                               |

Annotation related events emitted on the [state](./state.md):

| Name                    | Payload                                     | Description                          |
| :---------------------- | :------------------------------------------ | :----------------------------------- |
| `annotation-added`      | `{ annotation: Annotation, options?: any }` | An annotation has been added         |
| `annotation-updated`    | `{ annotation: Annotation, options?: any }` | An annotation has been updated/moved |
| `annotation-removed`    | `{ annotation: Annotation, options?: any }` | An annotation has been removed       |

### Viewers plugins

The [viewers common interface](./viewer_plugins.md#viewers-common-api) includes the following
fields and methods to handle annotations:

| Name                                    | Description                                                       |
| :-------------------------------------- | :---------------------------------------------------------------- |
| `annotationMode`                        | Whether annotation mode is enabled or not                         |
| `startAnnotationMode(callback)`         | Start (enable) annotation mode with the given annotation callback |
| `stopAnnotationMode()`                  | Stop (disable) annotation mode                                    |

The **annotation callback**  passed to the`startAnnotationMode()` method as the following signature:

```typescript
type AnnotationCallback = ({
  // Annotation coordinates
  x: number,
  y: number,
  z: number,

  // Additional data
  models: StateModel[], // currently loaded models
  storey?: StateStorey, // current storey
  pdfPages?: any[], // list of PDF pages (only relevant for multipage PDF models)
  pdfPageIndex?: number, // current PDF page index (only relevant for multipage PDF models)
  object?: StateObject, // annotated IFC element (only relevant for IFC models)
}) => void;
```

## Usage

The annotation API is designed to help developers create/update/delete custom annotations
that are synchronized between viewer windows.
Below are some explanations on the basic usage of the API, you can have a look at the [examples](../examples/ifc_annotations.md)
to get a more concrete integration example.

#### 1. Add annotations

Given any viewer window we can use the [`localContext API`](./local_context.md#viewer-interface) to register an annotation callback
that we will allow us to get annotation coordinates on click.
The coordinates are used to add a new annotation to the state:

```js
const { state, localContext } = $viewer;

localContext.startAnnotationMode(({ x, y, z }) => {
  const annotation = state.addAnnotation({
    component: MyAnnotationComponent
    x,
    y,
    z,
  });

  console.log("new annotation: ", annotation);
});
```

When we are done adding annotations we can use `stopAnnotationMode()` to unregister annotation callback:

```js
localContext.stopAnnotationMode();
```

The annotation component (`MyAnnotationComponent` here) can be any valid Vue component, it will be used
to render the annotation on the viewer.

For convenience, an `annotation` prop, that hold the associated annotation object from the state, is passed to the component.

It is also possible to provide some custom props to the component via the `props` field of annotation object.

#### 2. Update/Drag annotation

Each annotation as a `draggable` property (which is `true` by default) that control whether the annotation can be moved
by dragging it on the canvas.

Setting `draggable` to `false` will prevent the annotation to be moved.
This can be used to implement some kind of annotation lock/unlock mechanism.

**Note:** The state will emit an `"annotation-updated"` event on every annotation move.

#### 3. Remove annotation

Annotations can be removed from the state using the `removeAnnotation()` method:

```js
$viewer.state.removeAnnotation(annotation);
```

Annotations can also be removed all at once with `clearAnnotations()`:

```js
$viewer.state.clearAnnotations();
```
