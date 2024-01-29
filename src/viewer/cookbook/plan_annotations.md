# Plan Annotations

This *recipe* will show you how to create a plugin that use the annotation API
to create, edit and delete annotations on a PDF plan.

The plugin will be a button that you can click to add an annotation anywhere on a plan.
Once the annotation is added you can drag & drop it to change its position.
You can also "select" an annotation by clicking it and delete it by pressing the **&lt;Delete&gt;** key.

### Demo

<ClientOnly>
  <style>
    .plan-annotation {
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
    .plan-annotation.grabbing {
      cursor: grabbing;
    }
    .plan-annotation:focus {
      border: 2px solid var(--color-high);
      background-color: var(--color-warning);
    }
  </style>
  <BIMDataViewer config="planAnnotations"/>
</ClientOnly>

### Setup

First lets setup a viewer with a simple configuration and register a custom plugin:

```js
// file: main.js
import makeBIMDataViewer from "@bimdata/viewer";
import PlanAnnotationsPlugin from "./plan-annotations-plugin.js";

const viewer = makeBIMDataViewer({
  api: {
    // ...
  },
});

viewer.registerPlugin(PlanAnnotationsPlugin);

viewer.mount("#app", "plan");
```

### Create the plugin definition

Next, we'll define our plugin configuration:

```js
// file: plan-annotations-plugin.js
import PlanAnnotationsPluginComponent from "./PlanAnnotationsPlugin.js";

export default {
  name: "planAnnotations",
  component: PlanAnnotationsPluginComponent,
  addToWindows: ["plan"],
  button: {
    position: "right",
    keepOpen: true,
    tooltip: "planAnnotations.tooltip",
    icon: {
      component: "BIMDataIconLocation",
      options: { size: "m" },
    },
  },
  i18n: {
    en: {
      tooltip: "PDF Annotations",
    },
    fr: {
      tooltip: "Annotations PDF",
    },
  },
};
```

### Create plugin components

Then we'll create the plugin component that will hold the logic:

```js
// file: PdfAnnotationsPlugin.js
import PlanAnnotationComponent from "./PlanAnnotation.vue";

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
    context.startAnnotationMode(({ x, y }) => {
      const annotation = state.addAnnotation({
        component: PlanAnnotationComponent,
        props: {
          index: ++this.index,
          moveTo: position => Object.assign(annotation, position),
          remove: () => state.removeAnnotation(annotation),
        },
        x,
        y,
        z: 0,
      });
      context.stopAnnotationMode();
      this.$close();
    });
  },
};
```

Finally we'll add the component that will materialize the PDF annotation on the plan:

```js
// file: PlanAnnotation.js
export default {
  template: `
    <div
      class="plan-annotation"
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
      const engine2d = this.localContext.viewer.viewer;
      const { x: cx, y: cy } = engine2d.canvas.getBoundingClientRect();
      const { x, y } = this.$refs.marker.getBoundingClientRect();

      const { movementX, movementY } = event;

      const position = engine2d.camera.getPosition({
        x: (x - cx) + movementX,
        y: (y - cy) + movementY,
      });

      this.moveTo(position);
    }
  },
};
```

You can also add the following rules to your page stylesheet:

```css
.plan-annotation {
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

.plan-annotation.grabbing {
  cursor: grabbing;
}

.plan-annotation:focus {
  border: 2px solid var(--color-high);
  background-color: var(--color-warning);
}
```
