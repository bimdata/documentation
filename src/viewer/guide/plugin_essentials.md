# Plugin Essentials

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

When we load a window containing a plugin as child (`window.plugins = ["myPlugin"]`), the corresponding **Plugin** is used to instanciate a unique copy a the **Plugin**, called a **PluginInstance**.

The **PluginInstance** has a specific API to interact with this specific **Plugin** copy.

:::tip
[See the **PluginInstance** reference for more details](../reference/plugin.html#plugin-instance).
:::

### PluginComponentInstance

As **Plugin** is a blue print to instanciante new **PluginInstance**, `plugin.component` is a blue print to instanciate **PluginComponentInstance**s.

:::tip
[See the **PluginComponentInstance** reference for more details](../reference/plugin.html#plugin-component).
:::

## $viewer

`$viewer` is the main entry point for a plugin to interact with other elements of the BIMData viewer. It is globally available and can be accessed directly on the plugin component instance using `this.$viewer`.

```js
import { inject } from "vue";

const myPluginComponent = {
  created() {
    const $viewer = this.$viewer;

    // ...
  }
}
```

Via `$viewer`, you can access important properties like:

- `api`, used to do all the things related to the connection with the BIMData API.
- `i18n`, used to do internationalization.
- `localContext`, used to manipulate the parent window UI and state.
- `globalContent`, used to manipulate the global UI.
- `state`, used to manipulate the global state.

Notice that `$viewer` is also available as first argument of the `sctartupScript` method and can be injected to be used on component setup method.

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

It can be also considered as the `localContext`s's parent. Indeed, it has API to get all viewer's `localContext`s, pluginInstances, pluginComponentInstances...

### Local Context

The `localContext` is the entity to interact with the window UI. It is used to register keyboard shortcuts locally, display loading spinner or display modal bounded on the window view. It also owns the window state (loadedModels, modeTypes, selectedStorey...).

Notice that the `$viewer.localContext` property is context dependent. It returns the corresponding `localContext` of where it is called. In another hand, `$viewer.globalContext` is always the same wherever it is called.

#### Difference from Window

`localContext` and `window` can be mistaken as a single entity, but the main difference is that you can load different window using the same localContext. The windows have to be registered first, and then can be loaded using the `bimdataViewer.mount` second argument, or the `localContext.loadWindow` method. The `localContext` is like the *host* that can accept different window to be loaded in it.

:::tip
[See the global and local context plugins example.](../examples/context_plugins.html)
:::