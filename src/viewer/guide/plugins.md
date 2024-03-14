# Plugins

In the previous part, we covers the differen UI elements used by the BIMData viewer. In this part, we will cover the main aspect you need to know to manipulate the BIMData viewer environment using plugins.

## Plugin classes

Firstly, we need to differentiate between these three classes: **Plugin**, **PluginInstance** and **PluginComponentInstance**. To understand the difference, we have to keep in mind that a **Plugin** is added to a window as a child. This window can be open several times on the same BIMDataViewer instance, and the same plugin can also be added to different windows. For this reasons, there is a difference between the **Plugin** and its instances across all displayed windows.

### Plugin

A **Plugin** is the entity we get when we register a plugin into the viewer:

```js
const myPlugin = bimdataViewer.registerPlugin({
  name: "myPlugin"
});
```
It is like the base blue print for the **PluginInstance**s.

### PluginInstance

When we load a window containing a plugin as child, the corresponding **Plugin** is used to instanciate a unique copy a the **Plugin**, called a **PluginInstance**.

The **PluginInstance** has a specific API to interact with this specific **Plugin** copy.

:::tip
[See the **PluginInstance** reference for more details](../reference/plugin.html#plugin-instance).
:::

### PluginComponentInstance

As **Plugin** is a blue print to instanciante new **PluginInstance**, `plugin.component` is a blue print to instanciate **PluginComponentInstance**s.

:::tip
[See the **PluginComponentInstance** reference for more details](../reference/plugin.html#plugin-component).
:::

TODO add a quick example for plugin as button, plugin as window, startupScript

## Plugins UI

Plugins are window children and can be displayed in different ways.

### Default representation

The default representation is on the window area.

<img width=250px src="/assets/img/viewer/viewer-gui-plugin-default.png" alt="Viewer GUI plugin default.">

### Plugin as button

Plugins can also be displayed as a side button, on the left or right of the window. By clicking on it, the plugin opens and its content is displayed in 3 different ways:

- **simple** : plugin content displayed close to its corresponding button, on a small window.

<img width=250px src="/assets/img/viewer/viewer-gui-plugin-button-simple.png" alt="Viewer GUI plugin button simple.">

- **panel** : plugin content displayed on the whole window height.

<img width=250px src="/assets/img/viewer/viewer-gui-plugin-button-panel.png" alt="Viewer GUI plugin button panel.">

- **free** : plugin content displayed on the side of the button, without any layout. Its size is determined by its content.

<img width=250px src="/assets/img/viewer/viewer-gui-plugin-button-free.png" alt="Viewer GUI plugin button free.">

:::tip
Checkout [the example about the GUI Layout](../examples/gui_layout.html) for practical application.
:::

### Context Menu & Keyboard Shortcuts

The context menu and the keyboard shortcuts take into account the context of the request. In this way, it is possible to launch a specific action in a particular window when a keyboard key is pressed while the mouse is hovering that window. In the same way, it is possible to add to the context menu only a list of commands specific to the place where the click was made.

The context menu is usually displayed while right clicking on the screen.

<img width=250px src="/assets/img/viewer/viewer-gui-context-menu.png" alt="Viewer GUI context menu.">

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

- `localContext`, used to manipulate the parent window UI and state.
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

The `globalContext` is the entity to interact with the UI at a global level. It has API to manipulate the window layout like `open`, `swap`, `close`... It is also the access point for the viewer header API: `globalContext.header`. It is also used to register keyboard shortcuts globally, display loading spinner or display modal on the entire viewer view.

It can be also considered as the `localContexts` parent. Indeed, it has API to get all viewer's `localContexts`, pluginInstances, pluginComponentInstances...

### Local Context

The `localContext` is the entity to interact with the window UI. It is used to register keyboard shortcuts locally, display loading spinner or display modal bounded on the window view. It also owns the window state (loadedModels, modeTypes, selectedStorey...).

Notice that the `$viewer.localContext` property is context dependent. It returns the corresponding `localContext` of where it is called. In another hand, `$viewer.globalContext` is always the same wherever it is called.

#### Difference from Window

`localContext` and `window` can be mistaken as a single entity, but the main difference is that you can load different window using the same localContext. The windows have to be registered first, and then can be loaded using the `bimdataViewer.mount` second argument, or the `localContext.loadWindow` method. The `localContext` is like the *host* that can accept different window to be loaded in it.

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

The [BIMData design system](https://design.bimdata.io/) is globally available on the viewer and can be use to quickly stylize the plugin components.

In the following example, the [`BIMDataButton` ](https://design.bimdata.io/components/buttons) is not imported as it is globally available:

```js
const myPluginComponent = {
  template: "<BIMDataButton @click='onClick' >Click !</BIMDataButton>",
  methods: {
    onClick() {
      console.log("clicked !");
    }
  }
}
```
