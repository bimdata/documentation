# Plan Annotations

This example will show you how to create a plugin that use the annotation API
to create, edit and delete annotations on a PDF plan.

The plugin will be a button that you can click to add an annotation anywhere on a plan.
Once the annotation is added you can drag & drop it to change its position.
You can also delete it by double clicking it.

### Demo

<ClientOnly>
  <style>
    .plan-annotation {
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
    tooltip: "Annotations",
    icon: {
      component: "BIMDataIconLocation",
      options: { size: "m" },
    },
  },
};
```

### Create plugin components

Then we'll create the plugin component that will hold the logic:

```js
// file: PdfAnnotationsPlugin.js
import PlanAnnotation from "./PlanAnnotation.vue";

export default {
  render() {
    return null;
  },
  onOpen() {
    const state = this.$viewer.state;
    const context = this.$viewer.localContext;

    // Register an annotation callback to perform the desired action on click
    context.startAnnotationMode(({ x, y }) => {

      // Create a synchronized annotation in the state
      state.addAnnotation({
        component: PlanAnnotation,
        x,
        y,
        z: 0,
      });

      // Unregister the callback when finished
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

You can also add the following rules to your page stylesheet:

```css
.plan-annotation {
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

Notice the use of [BIMData css variables](https://design.bimdata.io/guidelines-utilities/variables) like `--color-primary`. It allows to stay in sync with the global theme and to track colors that may have been changed [when the viewer was initialized](../guide/#colors-🎨).