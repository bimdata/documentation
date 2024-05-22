# IFC Annotations

Here is an example of an IFC annotation plugin that demonstrate the use of the annotation API
to create synchronized annotations between 2D and 3D.

### Demo

<ClientOnly>
  <style>
    .ifc-annotation {
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
    .ifc-annotation.grabbing {
      cursor: grabbing;
    }
    .ifc-annotation:focus {
      border: 2px solid var(--color-high);
      background-color: var(--color-warning);
    }
  </style>
  <BIMDataViewer config="ifcAnnotations"/>
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
    tooltip: "ifcAnnotations.tooltip",
    icon: {
      component: "BIMDataIconLocation",
      options: { size: "m" },
    },
  },
  i18n: {
    en: {
      tooltip: "Add Annotations",
    },
  },
};
```

**Plugin component:**
```js
// file: IfcAnnotationsPlugin.js
import IfcAnnotation from "./IfcAnnotation.js";

export default {
  data() {
    return {
      index: 0
    };
  },
  render() {
    return null;
  },
  onOpen() {
    const state = this.$viewer.state;
    const context = this.$viewer.localContext;
    context.startAnnotationMode(({ x, y, z }) => {
      const annotation = state.addAnnotation({
        component: IfcAnnotation,
        props: {
          index: ++this.index,
          moveTo: position => Object.assign(annotation, position),
          remove: () => state.removeAnnotation(annotation),
        },
        x,
        y,
        z,
      });
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
      :class="{ grabbing }"
      ref="marker"
      tabindex="0"
      @keyup.delete="remove"
    >
      {{ index }}
    </div>
  `,
  props: {
    localContext: Object,
    index: Number,
    moveTo: Function,
    remove: Function,
  },
  data() {
    return {
      grabbing: false,
    };
  },
  mounted() {
    this.$refs.marker.addEventListener("mousedown", this.onMouseDown);
  },
  beforeUnmount() {
    this.$refs.marker.removeEventListener("mousedown", this.onMouseDown);
  },
  methods: {
    onMouseDown() {
      this.grabbing = true;
      document.addEventListener("mouseup", this.onMouseUp);
      document.addEventListener("mousemove", this.onMouseMove);
    },
    onMouseUp() {
      this.grabbing = false;
      document.removeEventListener("mousemove", this.onMouseMove);
    },
    onMouseMove(event) {
      let position;

      const windowName = this.localContext.window.name;

      if (windowName === "3d") {
        const { clientX, clientY } = event;

        const xeokit = this.localContext.viewer.xeokit;
        const { x, y } = xeokit.scene.canvas.canvas.getBoundingClientRect();

        const pickResult = xeokit.scene.pick({
          pickSurface: true,
          canvasPos: [clientX - x, clientY - y],
        });

        const [p0, p1, p2] = pickResult?.worldPos ?? [0, 0, 0];
        position = { x: p0, y: p2, z: p1 }; // xeokit is y-up
      } else {
        const { movementX, movementY } = event;

        const engine2d = this.localContext.viewer.viewer;
        const { x: cx, y: cy } = engine2d.canvas.getBoundingClientRect();
        const { x, y } = this.$refs.marker.getBoundingClientRect();

        position = engine2d.camera.getPosition({
          x: (x - cx) + movementX,
          y: (y - cy) + movementY,
        });
      }

      this.moveTo(position);
    }
  },
};
```

```css
.ifc-annotation {
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
.ifc-annotation.grabbing {
  cursor: grabbing;
}
.ifc-annotation:focus {
  border: 2px solid var(--color-high);
  background-color: var(--color-warning);
}
```

**Viewer instanciation:**
```js
// file: mains.js
import makeBIMDataViewer from "@bimdata/viewer";
import IfcAnnotationsPlugin from "./ifc-annotations-plugin.js";

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
