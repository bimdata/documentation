# Overview

The main goal of the BIMData viewer is to display plugins that can interact with the state, the UI or other plugins. It is shipped with native ones like a 3d viewer, a 2d viewer, a spacial structure, a BCF and many others. This native plugins are designed to meet the basic needs of a user that want to interact with his models.

However, you may want to add your own features to the viewer. To do so, the BIMData viewer provides a rich API through plugins to let you implement your own ideas.

Here is a list of some addition you may want to do:

- Develop a plugin that responds to state changes like selected objects, hidden objects...
- Add context menu commands.
- Add shortcuts.
- Add a different viewer like a pdf one.
- Add export to excel.
- ... (let us know ! [support@bimdata.io](mailto:support@bimdata.io))

## How to develop a plugin

A plugin is mainly either a [Vuejs 2.x component](https://vuejs.org/v2/guide/components.html) or/and a simple function that is run when the viewer is mouted into the [DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model).

::: tip
To learn what is a Vuejs 2.x component, [visite the Vuejs documentation](https://vuejs.org/v2/guide/components.html).
:::

Both component and function have access to the [`$viewer`](/viewer/plugins/$viewer.html) object. It can be accessed using `this` on a component, or as the first parameter of the startupScript method. This object allows to interact with the viewer core.

### Plugin as a function

To develop a plugin as a **function**, you must provide a function on the startupScript property of the configuration object of the `registerPlugin` method. The first argument of this function is the [`$viewer`](/viewer/plugins/$viewer.html)object.

### Plugin as a component

To develop a plugin as a **component**, you must provide a Vuejs 2.x component on the `component` property of the configuration object of the `registerPlugin` method.

::: tip
Here is some usefull links you should need to develop your own plugin with a component:
- [Plugin UI configuration documentation](/viewer/customize_the_ui.html#plugin) to see the UI possibilities.
- [Plugin as button API](/viewer/plugins/plugin_as_button.html) to bind a behavior on the user interactions.
:::

### Function and Component registration example

See below a plugin registered with both a startup script function and a vuejs component that can be displayed on the viewer windows.

The Vue.js 2.x component:

```javascript
const myComponent = {
  name: "myPluginComponent",
  methods: {
    onClick() {
      const visibleObjects = this.$viewer.state.visibleObjects;
      console.log("This is the visible objects:", visibleObjects);
    },
  },
  template: `
      <div>
        <button type="button" @click="onClick">Click to log visible objects.</button>
      </div>`,
};
```

The startupScript function:

```javascript
const myFunction = ($viewer) => {
  $viewer.state.hub.on("objects-selected", (objects) =>
    console.log("New objects are selected", objects)
  );
};
```

The registration:

```javascript
import makeBIMDataViewer from "@bimdata/viewer";

const bimdataViewer = makeBIMDataViewer({
  /**/
});

bimdataViewer.registerPlugin({
  name: "myPlugin",
  component: myComponent,
  startupScript: myFunction,
});
```
