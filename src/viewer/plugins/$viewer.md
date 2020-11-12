# `$viewer`

The `$viewer` object can be accessed using `this` on a component, or as the first parameter of the startupScript methode. This object allows to interact with the viewer core. Here is an overview of what it contains:

<pre style="color: white;">
<b>$viewer</b>
│ <a href="/viewer/plugins/context_menu.html">contextMenu</a>
│ <a href="/viewer/plugins/state.html">state</a>
│ logger
│
└─── <b>api</b>
│ │ apiUrl
│ │ cloudId
│ │ projectId
│ │ accessToken
│ │ apiClient
│
└─── <b>localContext</b>
│ │ getPlugin(pluginName)
│ │ loading
│ │ incrementSpinnerProcesses()
│ │ decrementSpinnerProcesses()
│ │ registerShortcut(shortcut)
│ │ unregisterShortcut(shortcutName)
│ │ hub
│ │ <a href="/viewer/plugins/modals.html">modals</a>
│
└─── <b>globalContext</b>
│ │ getPlugins(pluginName)
│ │ loading
│ │ incrementSpinnerProcesses()
│ │ decrementSpinnerProcesses()
│ │ registerShortcut(shortcut)
│ │ unregisterShortcut(shortcutName)
│ │ hub
│ │ <a href="/viewer/plugins/modals.html">modals</a>
│
└─── <b>utils</b>
│ │ getRawElements(ifcId)
</pre>

## logger

`logger` is an object that allows to log messages at different levels. The options available are `INFO`, `WARNING` and `ERROR`. The methods to log messages are `info`, `warn` and `error`.

To set the level of the `logger`:

```javascript
$viewer.logger.level = "INFO";
```

To log messages:

```javascript
const myMessage = "A simple message.";

$viewer.logger.info(myMessage); // logged if logger leve is "INFO"
$viewer.logger.warn(myMessage); // logged if logger leve is "INFO" of "WARNING"
$viewer.logger.error(myMessage); // always logged
```

## api

The `$viewer.api` object contains all informations needed to communicate with the [BIMData API](/api/introduction/overview.html).

::: tip
See [the documentation about the `$viewer.api.apiClient`](/api/external_libraries.html#javascript)
:::

Example: How to get an element from the API

```javascript
const ifcId = 4;
const uuid = "my element uuid";

const element = await new this.$viewer.api.apiClient.IfcApi().getElement(
  this.$viewer.api.cloudId,
  ifcId,
  this.$viewer.api.projectId,
  uuid
);
```

## global and local contexts

The `globalContext` and the `localContext` objects are related to [windows](/viewer/ui.html#window) and the viewer UI in genera. The `globalContext` is the whole UI while the `localContext` is the [window](/viewer/ui.html#window) where the code is executed.

TODO add a link to the context API.

### Spinners

You can start a spinner to indicate to the user that he needs to wait. You can choose to add a spinner on the whole UI or juste the current window.

```javascript
// A spinner on the whole UI
this.$viewer.localContext.incrementSpinnerProcesses();

// A spinner on the current window
this.$viewer.globalContext.incrementSpinnerProcesses();
```

<div style="display: flex; justify-content: space-around;">
  <p><b>Global context spinner</b></p>
  <p><b>Local context spinner</b></p>
</div>
<p align="center">
  <img width="48%" src="/assets/img/viewer/Viewer-global_context.gif" alt="Viewer global context spinner">
  <img width="48%" src="/assets/img/viewer/Viewer-local_context.gif" alt="Viewer local context spinner.">
</p>

### Modals

In a similar way, you can choose to show a modal on the whole UI or juste the current window using [the modal managers](/viewer/plugins/modals.html) available on `localContext.modals` and `globalContext.modals`.

### Shortcuts

You can also register a shortcut that depends on the context. The current context is the window where the mouse is hover. If two shortcuts are registered on the same key, one on the `localContext`, the other on the `globalContext`, the `localContext` shortcut will be executed on keystroke if the mouse is hovering the window, else, it will be the `globalContext` one (the mouse is hovering another window or the header).

## utils

This objects is used to store utilities like the `getRawElements(ifcId)` method.
