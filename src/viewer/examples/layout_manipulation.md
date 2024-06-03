# Layout Manipulation

The [Global Context API](../reference/global_context.md) offers a way to perform layout manipulation dynamically
(after viewer instanciation) through `open()`, `close()` and `swap()` methods.

The following example illustrate how these methods can be used in simple plugins.

**Split layout plugin:** when clicked, this button plugin will modify the layout as follow:
 - If both a 3D and 2D viewers are already open then close current window (local context).
 - Else if the current window is a 3D viewer then split the layout and open a new 2D viewer beside it.
 - Else if the current window is a 2D viewer then split the layout and open a new 3D viewer beside it.

**Swap layout plugin:** swap the content of the first two windows in the layout.

### Demo

<ClientOnly>
  <BIMDataViewer config="layoutManipulation"/>
</ClientOnly>

### Code

**Plugin definitions:**
```js
// file: split-layout.plugin.js
export default {
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
```

```js
// file: swap-layout.plugin.js
export default {
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
```

**Viewer instanciation:**
```js
// file: main.js
import makeBIMDataViewer from "@bimdata/viewer";
import SplitLayoutPlugin from "./split-layout.plugin.js";
import SwapLayoutPlugin from "./swap-layout.plugin.js";

const viewer = makeBIMDataViewer({
  api: {
    // ...
  },
});

viewer.registerPlugin(SplitLayoutPlugin);
viewer.registerPlugin(SwapLayoutPlugin);

viewer.mount(viewerId, "3d");
```
