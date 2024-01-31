import baseConfig from "./baseConfig";

export default function(viewerId) {
  // Configure the viewer
  const viewer = makeBIMDataViewer(baseConfig);

  // Create components
  const component1 = {
    name: "Component_1",
    template: `
      <div style="height: 100%; display: flex; justify-content: center; align-items: center;">
        <div>
          <div style="text-align: center;">
            <p><b>Listen to global context shortcuts :</b></p>
            <p>{{ globalMessage || "..." }}</p>
          </div>
          <hr>
          <div style="text-align: center;">
            <p><b>Listen to local context shortcuts :</b></p>
            <p>{{ localMessage || "..." }}</p>
          </div>
        </div>
      </div>`,
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
  };

  const component2 = {
    name: "Component_2",
    template: `
      <div style="height: 100%; display: flex; justify-content: center; align-items: center;">
        <div style="text-align: center;">
          <p><b>Local context "custom-event" message :</b></p>
          <p>{{ message || "..." }}</p>
        </div>
      </div>`,
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
      this.$viewer.localContext.hub.on("custom-event", event => this.message = event.message);
    },
  };

  const component3 = {
    name: "Component_3",
    template: "<div @contextmenu='onContextMenu'>Component 3</div>",
    methods: {
      onContextMenu() {
        this.$viewer.contextMenu.preventDefault();
        this.$viewer.contextMenu.registerContextCommand({
          label: "My command!",
          execute: () => {/* do nothing */},
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

  // Define layout
  const layout = {
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

  viewer.mount(viewerId, layout);
}
