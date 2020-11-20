# Context Menu

This example shows how to register a cutom context menu command that is displayed under certain conditions and how to clear the context menu and adding only one custom context command.

In this example, a `Log selected` command is displayed if at least one element is selected. Also, right clicking on the bottom window clear the context menu and displays a simple command that log a message in the console while executed.

<ClientOnly>
  <BIMDataViewer config="contextMenu"/>
</ClientOnly>

```javascript
const viewer = makeBIMDataViewer({
  locale: "fr",
  api: {
    ifcIds: [2283],
    cloudId: 515,
    projectId: 756,
    accessToken: "fc83e49ca9444d3ea41d212599f39040",
    apiUrl: "https://api-staging.bimdata.io",
  },
  ui: {
    headerVisible: false,
  },
});

viewer.registerPlugin({
  name: "plugin",
  component: {
    methods: {
      onContextMenu() {
        this.$viewer.contextMenu.preventDefault();
        this.$viewer.contextMenu.registerContextCommand({
          label: "Cleared menu!",
          execute: () => console.log("The context Menu has been cleared."),
        });
      },
    },
    template: ` <div style="height: 100%;" @contextmenu="onContextMenu"></div>`,
  },
});

viewer.registerPlugin({
  startupScript($viewer) {
    $viewer.contextMenu.registerCommand({
      label: "Log selected",
      execute: () => console.log($viewer.state.selectedObjects),
      predicate: () => $viewer.state.selectedObjects.length > 0,
    });
  },
});

viewer.registerWindow({
  name: "window",
  plugins: ["plugin"],
});

viewer.mount(id, {
  ratios: [80, 20],
  direction: "column",
  children: ["3d", "window"],
});
```
