# IFC Annotations

Here is an example of an IFC annotation plugin that demonstrate the use of the annotation API
to create synchronized annotations between 2D and 3D.

### Demo

<ClientOnly>
  <style>
    .ifc-annotation {
      transform: translate(-50%, -50%);
      width: 32px;
      height: 32px;
      border-radius: 50%;
      border: 1px solid var(--color-primary);
      background-color: var(--color-high);
      font-weight: bold;
      display: flex;
      justify-content: center;
      align-items: center;
      user-select: none;
      cursor: grab;
    }
  </style>
  <BIMDataViewer config="ifcAnnotations" />
</ClientOnly>

### Code

**Plugin definition:**
```js
// file: ifc-annotations.plugin.js
import IfcAnnotationsPlugin from "./IfcAnnotationsPlugin.js";

export default {
  name: "ifcAnnotations",
  component: IfcAnnotationsPlugin,
  addToWindows: ["3d", "2d"],
  button: {
    position: "right",
    keepOpen: true,
    tooltip: "Annotations",
    icon: {
      component: "BIMDataIconLocation",
      options: { size: "m" },
    },
  },
};
```

**Plugin component:**
```js
// file: IfcAnnotationsPlugin.js
import IfcAnnotation from "./IfcAnnotation.js";

export default {
  render() {
    return null;
  },
  onOpen() {
    const state = this.$viewer.state;
    const context = this.$viewer.localContext;

    // Register an annotation callback to perform the desired action on click
    context.startAnnotationMode(({ x, y, z }) => {

      // Create a synchronized annotation in the state
      state.addAnnotation({
        component: IfcAnnotation,
        x,
        y,
        z,
      });

      // Unregister the callback when finished
      context.stopAnnotationMode();

      this.$close();
    });
  },
};
```

**Annotation component and styles:**
```js
// file: IfcAnnotation.js
export default {
  template: `
    <div
      class="ifc-annotation"
      @dblclick="remove"
    >
      {{ annotation.id }}
    </div>
  `,
  props: {
    // An `annotation` prop is passed to your component
    // so we can interact directly with the annotation object
    annotation: Object,
  },
  methods: {
    remove() {
      // `this.$viewer` is also accessible in your annotation component
      this.$viewer.state.removeAnnotation(this.annotation);
    },
  },
};
```

```css
.ifc-annotation {
  /* This is a trick to place the marker under the cursor */
  transform: translate(-50%, -50%);

  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 1px solid var(--color-primary);
  background-color: var(--color-high);
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
  cursor: grab;
}
```

**Viewer instanciation:**
```js
// file: main.js
import makeBIMDataViewer from "@bimdata/viewer";
import IfcAnnotationsPlugin from "./ifc-annotations.plugin.js";

const viewer = makeBIMDataViewer({
  api: {
    // ...
  },
});

viewer.registerPlugin(IfcAnnotationsPlugin);

viewer.mount("#app", {
  ratios: [50, 50],
  children: ["2d", "3d"]
});
```
