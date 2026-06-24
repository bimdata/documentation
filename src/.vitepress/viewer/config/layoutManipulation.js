import baseConfig from "./baseConfig.js";

const SplitLayoutPlugin = {
  name: "splitLayoutPlugin",
  addToWindows: ["3d", "2d"],
  i18n: {
    en: { tooltip: "" },
  },
  button: {
    position: "right",
    tooltip: "splitLayoutPlugin.tooltip",
    icon: {
      component: "BIMDataIconWindowRight",
      options: { size: "m" },
    },
  },
  component: {
    onOpen() {
      if (
        this.$viewer.globalContext.getLocalContexts("3d").length > 0 &&
        this.$viewer.globalContext.getLocalContexts("2d").length > 0
      ) {
        // If both 3D and 2D viewers are open the close current window
        this.$viewer.localContext.close();
      } else {
        // Else if this is a 3D (resp. 2D) viewer window then open a 2D (resp. 3D) window beside it
        const windowName = this.$viewer.localContext.window.name;
        const modelIds = this.$viewer.localContext.loadedModelIds;
        const split = windowToOpen => {
          this.$viewer.globalContext.open({
            ratio: 50,
            direction: "row",
            insertAfter: true,
            windowName: windowToOpen,
            windowState: { modelIds }
          });
        };
  
        if (windowName === "3d") split("2d");
        if (windowName === "2d") split("3d");
      }

      setTimeout(() => this.$close());
    },
  }
};

const SwapLayoutPlugin = {
  name: "swapLayoutPlugin",
  addToWindows: ["3d", "2d"],
  i18n: {
    en: { tooltip: "" },
  },
  button: {
    position: "right",
    tooltip: "swapLayoutPlugin.tooltip",
    icon: {
      component: "BIMDataIconSwap",
      options: { size: "m" },
    },
  },
  component: {
    onOpen() {
      // Get the first two contexts in the local context list
      const [ctx1, ctx2] = this.$viewer.globalContext.localContexts;

      if (ctx2) this.$viewer.globalContext.swap(ctx1.id, ctx2.id);

      setTimeout(() => this.$close());
    },
  }
};

export default function(viewerId) {
  const viewer = makeBIMDataViewer({
    ...baseConfig,
    api: {
      accessToken: "fZ5CP4g2QQlj2KBXxqdl2jTNokiESIde",
      cloudId: 11520,
      projectId: 245620,
      modelIds: [1203414],
    },
    plugins: {
      ...baseConfig.plugins,
      viewer2d: {
        compass: false,
        help: false,
        modelLoader: "hidden",
        storeySelectorAutoOpen: false,
      }
    }
  });

  viewer.registerPlugin(SplitLayoutPlugin);
  viewer.registerPlugin(SwapLayoutPlugin);

  viewer.mount(viewerId, "3d");
}
