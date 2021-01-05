# Shortcuts

In this third tutorial, we will update the component 1 of the precedent examples to show how to register a global shortcut and a local shortcut. The local shortcut is executed only if the mouse is hovering the `window1` (top right), while the global is executed everywhere.

::: tip
A local context shortcut has priority over a gobal context shortcut registered on the same key. If you press the registered key hovering the `window1`, only the local context shortcut is executed. The global context shortcut is executed on the rest of the UI, even the header if present.
:::

## Step by step

### Register shortcuts

The main element of the new component we will create is this:
```javascript
created() {
  this.$viewer.globalContext.registerShortcut({
    name: "message",
    key: "m",
    execute: () =>
      (this.globalMessage = `"m" key pressed GLOBALLY`),
  });
  this.$viewer.localContext.registerShortcut({
    name: "message",
    key: "m",
    execute: () => (this.localMessage = `"m" key pressed LOCALLY`),
  });
},
```

This means when the component is created, it register a global and a local shortcuts on the key <kbd>m</kbd>.

### Complete `component1`

The rest of the code is used to display message on the UI when <kbd>m</kbd> keys are pressed. You can find the code described previously on the created component life cycle hook. See [Vuejs component](https://vuejs.org/v2/guide/components.html) for more informations.

```javascript{21-32}
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
```

## Resulting viewer

Press the key <kbd>m</kbd> hovering the viewer on different areas.

<ClientOnly>
  <BIMDataViewer config="shortcuts"/>
</ClientOnly>

## Complete code example

```javascript {24-69}
// Configure the viewer
const viewer = makeBIMDataViewer({
  ui: {
    headerVisible: false,
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
  template: "<div>Component 3</div>",
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

viewer.registerPlugin(plugin1);
viewer.registerPlugin(plugin2);
viewer.registerPlugin(plugin3);

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

viewer.mount(`#${viewerId}`, customLayout);
```
