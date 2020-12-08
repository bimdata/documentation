# Hubs

In the previous tutorials, we already used the state hub to listen to object modification events:

```javascript
$viewer.state.hub.on("objects-selected", (objects) => {
  /* Do something with selected objects. */
});
```

Hubs allow to register event listener or trigger events on them. The state hub is probably the one that you will use the most, but there is also two other hubs that can be interesting. Remember the `globalContext` and the `localContext` from the [shorctut tutorial](/viewer/tutorials/shortcuts.html)? There is also a hub on each of these contexts. If you want to trigger events that can reach only plugins on the same window, use the `localContext.hub`. If you want to trigger event for all plugins, use the `globalContext.hub`.

:::tip
For more information, see [global and local contexts documentation](/viewer/reference/$viewer.html#global-and-local-contexts).
:::

In this tutorial, we will trigger a local event when the plugin3 gets open and the plugin2 will listen to this event and display a message accordingly.

## Step by step

### Emitting an event when plugin 3 gets open

We first have to emit an event when the plugin 3 gets open. To do so, we will use the [plugin as button API](/viewer/plugins/plugin_as_button.html) and emit an event on the `localContext.hub`.

Let's update the component3:

```javascript {15-19}
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
  onOpen() {
    this.$viewer.localContext.hub.emit("custom-event", {
      message: "The plugin 3 is getting open!",
    });
  },
};
```

With this added code, the plugin 3 emits an event named `"custom-event"` on the `localContext.hub` when it gets open. However, as nobody is listen to this event, nothing happens.

### Listening to localContext events

Next, we will update the component 2 to listen to the `localContext.hub` `"custom-event"` event and display the `message` it contains. The most important part is this:

```javascript
created() {
  this.$viewer.localContext.hub.on(
    "custom-event",
    (event) => (this.message = event.message)
  );
},
```

And this is the full component 2:

```javascript {15-20}
const component2 = {
  name: "Component_2",
  data() {
    return {
      message: null,
    };
  },
  watch: {
    message(value) {
      if (value) {
        setTimeout(() => (this.message = null), 2000);
      }
    },
  },
  created() {
    this.$viewer.localContext.hub.on(
      "custom-event",
      (event) => (this.message = event.message)
    );
  },
  template: `
    <div
      style="height: 100%;
      display: flex;
      justify-content:center;
      align-items:center;"
    >
      <div style="text-align:center;">
        <p><b>Local context "custom-event" message :</b></p>
        <p>{{ message || "..." }}</p>
      </div>
    </div>`,
};
```

The rest of the code is similar to the component 1 to display messages.

### Other possibility

In this example, we use `localContext` because plugin 2 and plugin 3 are on the same window. They share the same `localContext`. Plugin 1 cannot get the `"custom-event"` event because it has another `localContext` (as it is on another window). If we want to display the message on the component 1 (UI of the plugin 1), we could use the `globalContext` instead. Emitting an event on the `globalContext` allows every plugin of the entiere viewer to listen to them and act accordingly.

## Resulting viewer

Try opening the plugin 3 (the right button on the last bottom-right window).

<ClientOnly>
  <BIMDataViewer config="hubs"/>
</ClientOnly>

## Complete code example

```javascript {75-107,123-127}
// Configure the viewer
const viewer = makeBIMDataViewer({
  ui: {
    headerVisible: false,
    contextMenu: {
      defaultCommands: false,
    },
  },
  api: {
    ifcIds: [2283],
    cloudId: 515,
    projectId: 756,
    accessToken: "fc83e49ca9444d3ea41d212599f39040",
    apiUrl: "https://api-staging.bimdata.io",
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
  data() {
    return {
      message: null,
    };
  },
  watch: {
    message(value) {
      if (value) {
        setTimeout(() => (this.message = null), 2000);
      }
    },
  },
  created() {
    this.$viewer.localContext.hub.on(
      "custom-event",
      (event) => (this.message = event.message)
    );
  },
  template: `
    <div
      style="height: 100%;
      display: flex;
      justify-content:center;
      align-items:center;"
    >
      <div style="text-align:center;">
        <p><b>Local context "custom-event" message :</b></p>
        <p>{{ message || "..." }}</p>
      </div>
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
  onOpen() {
    this.$viewer.localContext.hub.emit("custom-event", {
      message: "The plugin 3 is getting open!",
    });
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

viewer.mount(`#${viewerId}`, customLayout);
```
