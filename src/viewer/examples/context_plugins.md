# Global and Local Context Plugins

This example shows how to communicate from different plugins across the BIMDataViewer window layout using the `globalContext` and the `localContext`.

### Demo

<ClientOnly>
  <BIMDataViewer config="contextPlugins"/>
</ClientOnly>

### HTML

```html
<!DOCTYPE html>
<html lang="en" dir="ltr">

<head>
  <meta charset="utf-8" />
  <style>
    html,
    body {
      margin: 0;
      cursor: default;
    }
  </style>
  <title>BIMDataViewer</title>
    <script type="module"
    src="https://cdn.jsdelivr.net/npm/@bimdata/viewer@2.0.0-beta.145/dist/bimdata-viewer.esm.min.js"></script>
</head>

<body>
  <div style="height: 100svh">
    <div id="viewer"></div>
  </div>
  <script type="module">
    const bimdataViewer = makeBIMDataViewer({
      // do not display the header, the bimdata logo and the viewer version
      ui: {
        header: false,
        bimdataLogo: false,
        version: false,
      },
      // remove all native plugins
      plugins: false,
    });

    /*** PLUGIN REGISTRATION ***/
    bimdataViewer.registerPlugin({
      name: "plugin-1",
      component: {
        template: "<BIMDataButton fill @click='onClick' >Click to open the plugin 2</BIMDataButton>",
        methods: {
          onClick() {
            this.$viewer.localContext.pluginComponentInstances.get("plugin-2").$open();
          }
        }
      },
      button: {
        position: "left",
        content: "simple",
      },
    });

    bimdataViewer.registerPlugin({
      name: "plugin-2",
      component: {
        template: "<BIMDataButton fill @click='onClick' >Click to open the plugin 3</BIMDataButton>",
        methods: {
          onClick() {
            this.$viewer.globalContext.pluginInstances.get("plugin-3")[0].open();
          }
        }
      },
      button: {
        position: "right",
        content: "simple",
      },
    });

    bimdataViewer.registerPlugin({
      name: "plugin-3",
      component: {
        template: "<div>Plugin 3</div>",
      },
      button: {
        position: "left",
        content: "simple",
      },
    });

    /*** WINDOW REGISTRATION ***/
    bimdataViewer.registerWindow({
      name: "window-1",
      plugins: ["plugin-1", "plugin-2"],
    });
    bimdataViewer.registerWindow({
      name: "window-2",
      plugins: ["plugin-3"],
    });

    /*** LAYOUT ***/
    const layout = {
      ratios: [50, 50],
      direction: "column",
      children: [
        "window-1",
        "window-2",
      ],
    };

    bimdataViewer.mount("#viewer", layout);
  </script>
</body>

</html>
```

:::tip
Notice that [PluginInstances](../reference/plugin.html#plugin-instance) and [PluginComponentInstances](../reference/plugin.html#plugin-component-instance) do not use the same API to open the plugin. Also, `globalContext.pluginInstances` return an Array of [PluginInstances](../reference/plugin.html#plugin-instance) because the same plugin can be instantiated many times on different [Windows](../reference/window.html).
:::