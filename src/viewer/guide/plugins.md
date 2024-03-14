# Plugins

In the previous part, we covers the differen UI elements used by the BIMData viewer. In this part, we will cover the main aspect you need to know to manipulate the BIMData viewer environment using [**Plugins**](../reference/plugin.html).

## Plugin types

Firstly, we need to differentiate between these three classes: [**Plugin**](../reference/plugin.html), [**PluginInstance**](../reference/plugin.html#plugin-instance) and [**PluginComponentInstance**](../reference/plugin.html#plugin-component-instance). To understand the difference, we have to keep in mind that a [**Plugin**](../reference/plugin.html) is added to a [**Window**](../reference/window.html) as a child. This [**Window**](../reference/window.html) can be open several times on the same BIMDataViewer instance, and the same plugin can also be added to different [**Windows**](../reference/window.html). For this reasons, there is a difference between the [**Plugin**](../reference/plugin.html) and its instances across all displayed [**Windows**](../reference/window.html).

```js
const myPlugin = bimdataViewer.registerPlugin({
  name: "myPlugin",
  component: {
    template: "<div>My plugin component template</div>"
    created() {
      this; // this represents the plugin component instance.

      this.$plugin; // global API to get the corresponding plugin instance.
    }
  }
});
```

In this example, myPlugin is a [**Plugin**](../reference/plugin.html). `this.$plugin` allows to get the [**PluginInstance**](../reference/plugin.html#plugin-instance), while `this` it the instance of the Vue.js component, also named [**PluginComponentInstance**](../reference/plugin.html#plugin-component-instance) in the context of the BIMDataViewer.

Plugins don't necessarily need to be represented (with a `component`), and it can sometimes be useful to register a plugin that will only act as a function for manipulating the viewer. The corresponding API is `startupScript`.

```js{3}
const myPlugin = bimdataViewer.registerPlugin({
  name: "myPlugin",
  startupScript($viewer) {
    // add logic here
  },
});
```

## Plugin UI

[**Plugins**](../reference/plugin.html) are [**Window**](../reference/window.html) children and can be displayed in different ways.

### Default representation

The default representation is on the [**Window**](../reference/window.html) area.

```js
const myPlugin = bimdataViewer.registerPlugin({
  name: "myPlugin",
  component: {
    template: "<div>My plugin component template</div>"
  }
});
```

<img width=250px src="/assets/img/viewer/viewer-gui-plugin-default.png" alt="Viewer GUI plugin default.">

### Plugin as button

Plugins can also be displayed as a side button, on the left or right of the [**Windows**](..reference/window.html). By clicking on it, the plugin opens and its content is displayed in 3 different ways:

- **simple** : plugin content displayed close to its corresponding button, on a small [**Windows**](..reference/window.html).

```js{8}
const myPlugin = bimdataViewer.registerPlugin({
  name: "myPlugin",
  component: {
    template: "<div>My plugin component template</div>"
  },
  button: {
    position: "left",
    content: "simple"
  }
});
```

<img width=250px src="/assets/img/viewer/viewer-gui-plugin-button-simple.png" alt="Viewer GUI plugin button simple.">

- **panel** : plugin content displayed on the whole [**Window**](../reference/window.html) height.

```js{8}
const myPlugin = bimdataViewer.registerPlugin({
  name: "myPlugin",
  component: {
    template: "<div>My plugin component template</div>"
  },
  button: {
    position: "right",
    content: "panel"
  }
});
```

<img width=250px src="/assets/img/viewer/viewer-gui-plugin-button-panel.png" alt="Viewer GUI plugin button panel.">

- **free** : plugin content displayed on the side of the button, without any layout. Its size is determined by its content.

```js{8}
const myPlugin = bimdataViewer.registerPlugin({
  name: "myPlugin",
  component: {
    template: "<div>My plugin component template</div>"
  },
  button: {
    position: "right",
    content: "free"
  }
});
```

<img width=250px src="/assets/img/viewer/viewer-gui-plugin-button-free.png" alt="Viewer GUI plugin button free.">

:::tip
Checkout [the example about the GUI Layout](../examples/gui_layout.html) for practical application.
:::

### Context Menu & Keyboard Shortcuts

The [**Context Menu**](../reference/context-menu.html) and the [**Keyobard Shortcuts**](../reference/keyobard-shortcuts.html) can be personalized using [**Plugins**](../reference/plugin.html).

<img width=250px src="/assets/img/viewer/viewer-gui-context-menu.png" alt="Viewer GUI context menu.">

Both of them take into account the context of the request. In this way, it is possible to launch a specific action in a particular [**Window**](../reference/window.html) when a keyboard key is pressed while the mouse is hovering that [**Windows**](..reference/window.html). In the same way, it is possible to add to the [**Context Menu**](../reference/context-menu.html) only a list of commands specific to the place where the click was made.

The [**Context Menu**](../reference/context-menu.html) is usually displayed while right clicking on the screen.

Here is a example of a shortcut and a context menu command:

```js
const MyPlugin = {
  name: "context-menu-and-keyboard-shortcut",
  startupScript($viewer) {

    $viewer.globalContext.registerShortcut({
      name: "message",
      key: "L",
      execute: () => {
        if ($viewer.state.selectedObjects.length > 0) {
          console.log($viewer.state.selectedObjects)
        }
      }
    });

    $viewer.contextMenu.registerCommand({
      label: "Log selection",
      execute: () => console.log($viewer.state.selectedObjects),
      predicate: () => $viewer.state.selectedObjects.length > 0,
      picto: "L"
    });
  },
};
```

## $viewer

`$viewer` is the main entry point for a plugin to interact with other elements of the BIMData viewer. It is globally available and can be accessed directly on the plugin component instance using `this.$viewer`.

```js
const myPluginComponent = {
  created() {
    const $viewer = this.$viewer;

    // ...
  }
}
```

Via `$viewer`, you can access important properties like:

- `localContext`, used to manipulate the parent [**Window**](../reference/window.html) UI and state.
- `globalContent`, used to manipulate the global UI.
- `api`, used to do all the things related to the connection with the BIMData API.
- `state`, used to manipulate the BIM object states, the annotations and listen to BIM object state changes.
- `i18n`, used to do internationalization.

Notice that `$viewer` is also available as first argument of the `startupScript` method and can be injected to be used on component setup method.

```js
import { inject } from "vue";

const myPluginComponent = {
  setup() {
    const $viewer = inject("$viewer");

    // ...
  }
}
```

## Global & Local Contexts

The `globalContext` and the `localContext` are two essential entities of the BIMDataViewer API.

### Global Context

The `globalContext` is the entity to interact with the UI at a global level. It has API to manipulate the [**Window**](../reference/window.html) layout like `open`, `swap`, `close`... It is also the access point for the viewer header API: `globalContext.header`. It is also used to register keyboard shortcuts globally, display loading spinner or display modal on the entire viewer view.

It can be also considered as the `localContexts` parent. Indeed, it has API to get all viewer's `localContexts`, pluginInstances, pluginComponentInstances...

### Local Context

The `localContext` is the entity to interact with the [**Window**](../reference/window.html) UI. It is used to register keyboard shortcuts locally, display loading spinner or display modal bounded on the [**Window**](../reference/window.html) view. It also owns the [**Window**](../reference/window.html) state (loadedModels, modeTypes, selectedStorey...).

Notice that the `$viewer.localContext` property is context dependent. It returns the corresponding `localContext` of where it is called. In another hand, `$viewer.globalContext` is always the same wherever it is called.

#### Difference from Window

`localContext` and [**Window**](../reference/window.html) can be mistaken as a single entity, but the main difference is that you can load different [**Window**](../reference/window.html) using the same localContext. The [**Windows**](../reference/window.html) have to be registered first, and then can be loaded using the `bimdataViewer.mount` second argument, or the `localContext.loadWindow` method. The `localContext` is like the *host* that can accept different [**Window**](../reference/window.html) to be loaded in it.

#### UI bounds

A good image to see the difference between the bounds of the `localContext` and the `globalContext` is the spinner which is displayed when the `globalContext.loadingProcessStart()` or `localContext.loadingProcessStart()` is called :

<div style="display: flex; justify-content: space-around;">
  <p><b>Global context spinner</b></p>
  <p><b>Local context spinner</b></p>
</div>
<p align="center">
  <img width="48%" src="/assets/img/viewer/Viewer-global_context.gif" alt="Viewer global context spinner">
  <img width="48%" src="/assets/img/viewer/Viewer-local_context.gif" alt="Viewer local context spinner.">
</p>`


:::tip
[See the global and local context plugins example.](../examples/context_plugins.html)
:::

## Design System 🧑‍🎨

The [BIMData design system](https://design.bimdata.io/) is globally available on the viewer and can be use to quickly stylize the [**Plugin Components**](../reference/plugin.html#plugin-component-instance).

In the following example, the [`BIMDataButton` ](https://design.bimdata.io/components/buttons) is not imported as it is globally available:

```js{2}
const myPluginComponent = {
  template: "<BIMDataButton @click='onClick' >Click !</BIMDataButton>",
  methods: {
    onClick() {
      console.log("clicked !");
    }
  }
}
```
