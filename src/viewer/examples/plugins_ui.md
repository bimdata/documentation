# Plugin UI

This example shows 4 types of plugin UI. Three as buttons. One as global window UI. Note that `plugin1` stay open even if you click outsite of it thanks to the property `keepOpen` set to true.

<ClientOnly>
  <BIMDataViewer config="pluginUi"/>
</ClientOnly>

::: tip
To see a plugin hidden by another one, hover its button to make it stand up front.
:::

```javascript
const viewer = makeBIMDataViewer({
  ui: {
    headerVisible: false,
  },
});

viewer.registerPlugin({
  name: "plugin1",
  component: {
    template: "<div>Plugin 1</div>"
  },
  button: {
    position: "right",
    content: "simple",
    keepOpen: true,
  }
});

viewer.registerPlugin({
  name: "plugin2",
  component: {
    template: "<div>Plugin 2</div>"
  },
  button: {
    position: "right",
    content: "panel"
  }
});

viewer.registerPlugin({
  name: "plugin3",
  component: {
    template: "<div>Plugin 3</div>"
  },
  button: {
    position: "right",
  }
});


viewer.registerPlugin({
  name: "plugin4",
  component: {
    template: "<div>Plugin 4</div>"
  },
});

viewer.registerWindow({
  name: "window",
  plugins: [
    "plugin1",
    "plugin2",
    "plugin3",
    "plugin4",
  ],
});

viewer.mount("#dom-element-id", "window");
```