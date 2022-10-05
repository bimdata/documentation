# Context Menu

In this fourth tutorial, we will learn how to customize de context menu.

## Step by step

### Add custom command

Now we add a command that is displayed only if one element is selected. To do so, we register a new plugin with no UI (component) but a `startupScript` method:

```javascript
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

viewer.registerPlugin(plugin4);
```

This command with the label `"Log selected"` is displayed only if at least one element is selected. Indeed, a context menu command is displayed on the context menu if there is no predicate method associated to it, or if its associated predicate method returns true when the context menu is open. The execute method is executed when the user click on the command. The execute method we added logs the selected objects in the console.

### Add custom context command

The previous command is displayed everywhere if the predicate method returns true. In our case, if one element is selected. However, you may want to add custom context menu command on a specific location. We will update the component 3 that is displayed on the right button of the window 2 to add custom context menu command when right clicking on it. To make sure no other command are added to the context menu when clicking on the component 3, we call `preventDefault` to remove all command from the context menu before adding the new one. In this way, even if one object is selected, only the command specific for the component 3 is displayed when clicking on it.

```javascript
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
```

## Resulting viewer

Try selecting objects, right clicking on the entire UI or on the open component 3 (the component displayed after clicking on the right button on the window 2).

<ClientOnly>
  <BIMDataViewer config="contextMenu"/>
</ClientOnly>

## Complete code example

```javascript
// Configure the viewer
const viewer = makeBIMDataViewer({
  api: {
    modelIds: [15097],
    cloudId: 10344,
    projectId: 237466,
    accessToken: "TAbdyPzoQeYgVSMe4GUKoCEfYctVhcwJ",
  },
  ui: {
    version: false,
    bimdataLogo: false,
    menuVisible: false,
  },
  plugins: {
    bcf: false,
    fullscreen: false,
    measure3d: false,
    projection: false,
    search: false,
    section: false,
    "structure-properties": false,
    viewer3d: {
      navCube: false,
      help: false,
      modelLoader: "hidden",
    },
    "viewer3d-parameters": false,
    "window-split": false,
  }
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

viewer.registerPlugin(plugin1);
viewer.registerPlugin(plugin2);
viewer.registerPlugin(plugin3);
viewer.registerPlugin(plugin4);

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
