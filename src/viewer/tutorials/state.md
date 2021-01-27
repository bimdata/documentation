# State

We already saw on previous tutorials how to display context menu commands if objects on the state are selected:

```javascript
$viewer.state.selectedObjects;
```

The state encapsulate logic of objects and ifcs. There is getters to get objects depending of their condition (selected, visible, ...) and setters to update them.

In this tutorial, we will simply add a plugin that listen to the state to know when objects are selected, and hide them.

## Step by step

### Add a 5th plugin to hide object when selected

```javascript
const plugin5 = {
  startupScript($viewer) {
    $viewer.state.hub.on("objects-selected", ({ objects }) =>
      $viewer.state.hideObjects(objects.map((object) => object.id))
    );
  },
};

viewer.registerPlugin(plugin5);
```

This plugin with a startup script method listen to "objects-selected" event on the state hub and hide corresponding objects.

## Resulting viewer

Try selecting objects on the model. As objects get selected, they are hidden.

::: tip
If the viewer3d window is too small, you can resize it by dragging the vertical separator.
:::

<ClientOnly>
  <BIMDataViewer config="state"/>
</ClientOnly>

## Complete code example

```javascript {136-143,149}
// Configure the viewer
const viewer = makeBIMDataViewer({
  ui: {
    headerVisible: false,
    contextMenu: {
      defaultCommands: false,
    },
  },
  api: {
    ifcIds: [15097],
    cloudId: 10344,
    projectId: 237466,
    accessToken: "TAbdyPzoQeYgVSMe4GUKoCEfYctVhcwJ",
  },
  plugins: {
    bcf: false,
    "structure-properties": false,
    fullscreen: false,
    section: false,
    search: false,
    projection: false,
    windowSelector: false,
  },
});

// Create components
const component1 = {
  name: "Component_1",
  data() {
    return {
      globalMessage: null,
      localMessage: null,
    };
  },
  watch: {
    globalMessage(value) {
      if (value) {
        setTimeout(() => (this.globalMessage = null), 2000);
      }
    },
    localMessage(value) {
      if (value) {
        setTimeout(() => (this.localMessage = null), 2000);
      }
    },
  },
  created() {
    this.$viewer.globalContext.registerShortcut({
      name: "message",
      key: "m",
      execute: () => (this.globalMessage = `"m" key pressed GLOBALLY`),
    });
    this.$viewer.localContext.registerShortcut({
      name: "message",
      key: "m",
      execute: () => (this.localMessage = `"m" key pressed LOCALLY`),
    });
  },
  template: ` <div style="height: 100%; display: flex; justify-content:center; align-items:center;">
                  <div>
                    <div style="text-align:center;">
                      <p><b>Listen to global context shortcuts :</b></p>
                      <p>{{ globalMessage || "..." }}</p>
                    </div>
                    <hr>
                    <div style="text-align:center;">
                      <p><b>Listen to local context shortcuts :</b></p>
                      <p>{{ localMessage || "..." }}</p>
                    </div>
                  <div>
                  </div>`,
};

const component2 = {
  name: "Component_2",
  template: `
    <div
      style="height: 100%;
      display: flex;
      justify-content:center;
      align-items:center;"
    >
      Component 2
    </div>`,
};

const component3 = {
  name: "Component_3",
  template: "<div @contextmenu='onContextMenu'>Component 3</div>",
  methods: {
    onContextMenu() {
      this.$viewer.contextMenu.preventDefault();
      this.$viewer.contextMenu.registerContextCommand({
        label: "My command!",
        execute: () => {
          /* do nothing */
        },
      });
    },
  },
};

// Create and register plugins
const plugin1 = {
  name: "plugin1",
  component: component1,
};

const plugin2 = {
  name: "plugin2",
  component: component2,
};

const plugin3 = {
  name: "plugin3",
  component: component3,
  button: {
    position: "right",
    content: "simple",
    keepOpen: true,
  },
};

const plugin4 = {
  name: "plugin4",
  startupScript($viewer) {
    $viewer.contextMenu.registerCommand({
      label: "Log selected",
      execute: () => console.log($viewer.state.selectedObjects),
      predicate: () => $viewer.state.selectedObjects.length > 0,
    });
  },
};

const plugin5 = {
  name: "plugin5",
  startupScript($viewer) {
    $viewer.state.hub.on("objects-selected", ({ objects }) =>
      $viewer.state.hideObjects(objects.map((object) => object.id))
    );
  },
};

viewer.registerPlugin(plugin1);
viewer.registerPlugin(plugin2);
viewer.registerPlugin(plugin3);
viewer.registerPlugin(plugin4);
viewer.registerPlugin(plugin5);

// Create and register windows
const window1 = {
  name: "window1",
  plugins: ["plugin1"],
};

const window2 = {
  name: "window2",
  plugins: ["plugin2", "plugin3"],
};

viewer.registerWindow(window1);
viewer.registerWindow(window2);

// Mount custom layout
const customLayout = {
  ratios: [40, 60],
  children: [
    "3d",
    {
      ratios: [50, 50],
      direction: "column",
      children: ["window1", "window2"],
    },
  ],
};

viewer.mount("#viewerId", customLayout);
```
