# `$viewer`

The `$viewer` object can be accessed using `this` on a component, or as the first parameter of the startupScript method. This object allows to interact with the viewer core. Here is an overview of what it contains:

<pre style="color: white;">
<b>$viewer</b>
│ <a href="/viewer/reference/context_menu.html">contextMenu</a>
│ <a href="/viewer/reference/state.html">state</a>
│ logger
│
└─── <b>api</b>
│ │ apiUrl
│ │ cloudId
│ │ projectId
│ │ accessToken
│ │ apiClient
│ │ getRawElements(ifcId)
│
└─── <b>localContext</b>
│ │ getPlugin(pluginName)
│ │ loading
│ │ incrementSpinnerProcesses()
│ │ decrementSpinnerProcesses()
│ │ registerShortcut(shortcut)
│ │ unregisterShortcut(shortcutName)
│ │ hub
│ │ modals
│
└─── <b>globalContext</b>
│ │ getPlugins(pluginName)
│ │ loading
│ │ incrementSpinnerProcesses()
│ │ decrementSpinnerProcesses()
│ │ registerShortcut(shortcut)
│ │ unregisterShortcut(shortcutName)
│ │ hub
│ │ modals

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

$viewer.logger.info(myMessage); // logged if logger level is "INFO"
$viewer.logger.warn(myMessage); // logged if logger level is "INFO" of "WARNING"
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

### getRawElements

`getRawElement()` is a special method. It retrieves all objects, their properties, classifications, systems and layers.

For performance reasons, the API sends a formatted JSON that needs to be rebuilt in order to be used in javascript.

If you want to parse data to filter objects, you probably want to use this method.

```javascript
const ifcId = 4;
const elements = await new this.$viewer.api.getRawElements(ifcId);
```

The result is an object where keys are uuids and value are the element data formatted like the [API response](https://api.bimdata.io/doc#/ifc/getElement)


## global and local contexts

The `globalContext` and the `localContext` objects are related to [windows](/viewer/customize_the_ui.html#window) and the viewer UI in general. The `globalContext` is the whole UI while the `localContext` is the [window](/viewer/customize_the_ui.html#window) where the code is executed.

These two objects share a similar API except for the `getPlugin(pluginName)` and `getPlugins(pluginName)` methods. A plugin must have a unique name in a window, but many plugins with the same name can be instanciated in the viewer if they belong to different windows. That is why `globalContext.getPlugins(pluginName)` returns an Array of plugins, while `localContext.getPlugin(pluginName)` returns a simple plugin (if it exists).

### Spinners

You can start a spinner to indicate to the user that he needs to wait. You can choose to add a spinner on the whole UI or just the current window.

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

To stop spinners:

```javascript
this.$viewer.localContext.decrementSpinnerProcesses();
this.$viewer.globalContext.decrementSpinnerProcesses();
```

The `loading` property on the `globalContext` and the `localContext` objects indicates if a spinner is running on the related context.

### Modals

In a similar way, you can choose to show a modal on the whole UI or just the current window using modal managers available on `localContext.modals` and `globalContext.modals`.

Modal managers allow to display modals. Modals are queue so if more than one modals are sent to the same modal manager, they will be displayed in order.

To open a modal, call `pushModal` on a modal manager.

| Property                      | Description                                                                                              |
| :---------------------------- | :------------------------------------------------------------------------------------------------------- |
| `pushModal(component, props)` | Add a modal to the queue. `component` is a valid vuejs component. `props` is the component props values. |

```javascript
this.$viewer.localContext.modals.pushModal(MyModal);
```

To close a modal, click outside of its content or emit the "close" event inside the modal component.

```javascript
this.$emit("close");
```

### Shortcuts

You can also register a shortcut that depends on the context. The current context is the window where the mouse is hover. If two shortcuts are registered on the same key, one on the `localContext`, the other on the `globalContext`, the `localContext` shortcut will be executed on keystroke if the mouse is hovering the window, else, it will be the `globalContext` one (the mouse is hovering another window or the header).

A shortcut object have the following interface:

| Property   | Type     | Description                                                                                                                                                                              |
| :--------- | :------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `name`     | String   | **Required**. A name to identify the shortcut.                                                                                                                                           |
| `key`      | String   | **Required**. Pressing this key will execute the shortcut (Case insensitive). [`key` may be many things](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key/Key_Values). |
| `execute`  | Function | **Required**. The function that will be executed when the key is pressed.                                                                                                                |
| `ctrlKey`  | Boolean  | **Default to false**. A boolean indicating that the ctrl key must be pressed in addition to the key to trigger the shortcut. (ctrl and meta keys are treated as the same key)          |
| `shiftKey` | Boolean  | **Default to false**. A boolean indicating that the shift key must be pressed in addition to the key to trigger the shortcut.                                                            |
| `altKey`   | Boolean  | **Default to false**. A boolean indicating that the alt key must be pressed in addition to the key to trigger the shortcut.                                                              |

```javascript
this.$viewer.localContext.registerShortcut({
  name: "log",
  key: "l",
  ctrlKey: true,
  execute: () => console.log("Log from local shortcut."),
});

this.$viewer.globalContext.registerShortcut({
  name: "log",
  key: "l",
  ctrlKey: true,
  execute: () => console.log("Log from global shortcut."),
});
```

Shortcuts can be unregistered calling the `unregisterShortcut` with the shortcut name.

```javascript
this.$viewer.globalContext.unregisterShortcut("log");
```

### Events

Some default events are sent to the local and global context.

- "plugin-menu-open", payload: the openned plugin. Sent when a [plugin as button](/viewer/plugins/plugin_as_button.html#plugin-as-button) is openned.
- "plugin-menu-close", payload: the closed plugin. Sent when a [plugin as button](/viewer/plugins/plugin_as_button.html#plugin-as-button) is closed.
- "window-open", payload: the openned window. Sent when a [window](/viewer/customize_the_ui.html#window) is selected on the window selector, displayed when the workspace is splitted. This event is only sent on the global context.

## utils

This objects is used to store utilities like the `getRawElements(ifcId)` method.
