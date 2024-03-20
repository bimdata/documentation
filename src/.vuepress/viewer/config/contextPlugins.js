export default function (viewerElementId) {
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
          this.$viewer.localContext.plugins.get("plugin-2").$open();
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
}