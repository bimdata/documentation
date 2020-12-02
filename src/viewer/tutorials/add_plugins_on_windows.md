# Add plugins on windows

In this second tutorials, we will add 3 plugins to our custom windows layout.

::: tip
This tutorial is the second step of the tutorials. The code to make the windows layout will not be described here. To learn how to create the windows layout, please [go to the first step of the tutorials](/viewer/tutorials/make_your_own_window_layout.html).
:::

## Step by step

### Create components

We first create 3 simple [Vuejs 2.x components](https://vuejs.org/v2/guide/components.html):

```javascript
const component1 = {
  name: "Component_1",
  template: "<div>Component 1</div>",
};

const component2 = {
  name: "Component_2",
  template: "<div>Component 2</div>",
};

const component3 = {
  name: "Component_3",
  template: "<div>Component 3</div>",
};
```

These components have no logic for the moment, only a template indicating their names.

### Create and register plugins

Next, we need to register plugins with the previously created components.

```javascript
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
};

viewer.registerPlugin(plugin1);
viewer.registerPlugin(plugin2);
viewer.registerPlugin(plugin3);
```

We want our plugins to be displayed differently on windows, so we will customise their configurations.

"plugin1" and "plugin2" will be displayed as `window` main content. No need to add more plugin configuration but we will add just a little bit of style on their components to display the text at the center of the windows:

```javascript
const component1 = {
  name: "Component_1",
  template: `
  <div
    style="height: 100%;
    display: flex;
    justify-content:center;
    align-items:center;"
  >
    Component 1
  </div>`,
};

// The same for component2
```

"plugin3" will be displayed as right window button. We need to update its configuration:

```javascript
const plugin3 = {
  name: "plugin3",
  component: component3,
  button: {
    position: "right",
    content: "simple",
    keepOpen: true,
  },
};
```

With this configuration, the plugin does not close if the user click away from it, and its style is a small rectangle open close to the button.

### Add plugins to windows

We finally add plugins to windows. Let's update the code of the previous tutorial to add our plugins into "window1" and "window2".

```javascript
const window1 = {
  name: "window1",
  plugins: ["plugin1"],
};

const window2 = {
  name: "window2",
  plugins: ["plugin2", "plugin3"],
};
```

::: warning
This code must be placed after plugins registration.
:::

## Resulting viewer

<ClientOnly>
  <BIMDataViewer config="pluginUi"/>
</ClientOnly>

## Complete code example

```javascript
  // Configure the viewer
  const viewer = makeBIMDataViewer({
    ui: {
      headerVisible: false,
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
    },
  });

  // Create components
  const component1 = {
    name: "Component_1",
    template: `
    <div
      style="height: 100%;
      display: flex;
      justify-content:center;
      align-items:center;"
    >
      Component 1
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

  viewer.mount(canvasId, customLayout);
```
