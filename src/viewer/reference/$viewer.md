# `$viewer`

The `$viewer` object can be accessed using `this` on a component, or as the first parameter of the startupScript method. This object allows to interact with the viewer core. Here is an overview of what it contains:

<pre style="color: white;">
<b>$viewer</b>
│ <a href="/viewer/reference/context_menu.html">contextMenu</a>
│ <a href="/viewer/reference/state.html">state</a>
| getLocalContexts(windowName): LocalContext[];
│
└─── <b>api</b>
│ │ apiUrl: string;
│ │ cloudId: number;
│ │ projectId: number;
│ │ accessToken: string;
│ │ apiClient: ApiClient;
│ │ getRawElements(ifcId): RawElements;
│
└─── <b>localContext</b>
│ │ getPlugin(pluginName): Plugin; // DEPRECATED
│ │ plugins: Map&lt;string, Plugin&gt;;
│ │ loading: boolean;
│ │ incrementSpinnerProcesses(): void; // DEPRECATED
│ │ loadingProcessStart(): void;
│ │ decrementSpinnerProcesses(): void; // DEPRECATED
│ │ loadingProcessEnd(): void;
│ │ registerShortcut(shortcut): void;
│ │ unregisterShortcut(shortcutName): void;
│ │ hub: Hub;
│ │ modals: ModalManager;
│
└─── <b>globalContext</b>
│ │ getPlugins(pluginName): Plugin[]; // DEPRECATED
│ │ plugins: Map&lt;string, Plugin[]&gt;;
│ │ loading: boolean;
│ │ incrementSpinnerProcesses(): void; // DEPRECATED
│ │ loadingProcessStart(): void;
│ │ decrementSpinnerProcesses(): void; // DEPRECATED
│ │ loadingProcessEnd(): void;
│ │ registerShortcut(shortcut): void;
│ │ unregisterShortcut(shortcutName): void;
│ │ hub: Hub;
│ │ modals: ModalManager;

</pre>

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

A plugin must have a unique name in a window, but many plugins with the same name can be instanciated in the viewer if they belong to different windows. That is why `globalContext.plugins.get(pluginName)` returns an Array of plugins, while `localContext.plugins.get(pluginName)` returns a simple plugin.

### Spinners

You can start a spinner to indicate to the user that he needs to wait. You can choose to add a spinner on the whole UI or just the current window.

```javascript
// A spinner on the whole UI
this.$viewer.localContext.loadingProcessStart();

// A spinner on the current window
this.$viewer.globalContext.loadingProcessStart();
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
this.$viewer.localContext.loadingProcessEnd();
this.$viewer.globalContext.loadingProcessEnd();
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
| `ctrlKey`  | Boolean  | **Default to false**. A boolean indicating that the ctrl key must be pressed in addition to the key to trigger the shortcut. (ctrl and meta keys are treated as the same key)            |
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

| Name                    | Payload                                   | Description                                                                                                                              |
| :---------------------- | :---------------------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------- |
| `plugin-created`        | { pluginName: `string`, plugin: `Object`} | Sent when a [plugin](/viewer/plugins/overview.html) is created.                                                                          |
| `plugin-destroyed`      | { pluginName: `string`, plugin: `Object`} | Sent when a [plugin](/viewer/plugins/overview.html) is destroyed.                                                                        |
| `plugin-menu-open`      | plugin: `Object`                          | Sent when a [plugin as button](/viewer/plugins/plugin_as_button.html#plugin-as-button) is openned                                        |
| `plugin-menu-close`      | plugin: `Object`                          | Sent when a [plugin as button](/viewer/plugins/plugin_as_button.html#plugin-as-button) is closed.                                        |
| **Global context only** |                                           |                                                                                                                                          |
| `window-open`           | window: `Object`                          | Sent when a [window](/viewer/customize_the_ui.html#window) is selected on the window selector, displayed when a window is splitted. |
| `window-close`          | window: `Object`                          | Sent when a [window](/viewer/customize_the_ui.html#window) is closed.                                                                    |

## utils

This objects is used to store utilities like the `getRawElements(ifcId)` method.

## Local State

Two models can be loaded independently on different windows (like "2d", "3d" ...). However, using the [global state](/viewer/reference/state.html), it is not possible to know which model is loaded on a specified window. The `localContext` is the concrete API to interact with the abstract window and in addition of the previously mentionned properties, there is other ones that can considered as the properties of a local state.

These local state properties are as follows:

<pre style="color: white;">

──── <b>localContext</b>
│ │ <b>- Reactive properties that can be used in vue template, watcher, computed...</b>
│ │ loadedModels: StateModel[];
│ │ loadedModelIds: number[];
│ │ loadingModelIds: number[];
│ │ modelTypes: string[];
│ │ multiModel: boolean;
│ │ <b>- Methods to mutate the local state</b>
│ │ loadModels(ids: number[]): Promise&lt;boolean&gt;;
│ │ unloadModels(ids: number[]): boolean;
│ │ toggleModel(id: number): Promise&lt;boolean&gt;;

</pre>

The following example shows how to react on a local state mutation:

```js
// a custom plugin
export default {
  created() {
    this.$watch(
      () => this.$viewer.localContext.loadedModelIds,
      ids => console.log(`These model ids are loaded into the window ${this.$viewer.localContext.window.name}.`);
    );
  },
};

```