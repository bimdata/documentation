---
tags:
  - $viewer
---

# `$viewer`

The `$viewer` object can be accessed on any component instance (using `this.$viewer`),
it is also passed as the first argument of the `startupScript` method of a plugin.
It is the entrypoint to interact with the viewer core.
If a component uses the Vue.js composition API, `$viewer` needs to be
[injected](https://vuejs.org/api/composition-api-dependency-injection.html#inject):

```js
setup() {
  const $viewer = inject("$viewer");

  // ...
}
```

Below is a description of its interface:

```typescript
interface $Viewer {
  readonly version: string; // the viewer version
  readonly locale: string;
  readonly i18n: i18n;
  readonly api: Api;
  readonly state: State;
  readonly uiSettings: Object; // the settings of the ui property passed to the mabeBIMDataViewer function
  readonly pluginsCfg: Object; // the settings of the plugins property passed to the mabeBIMDataViewer function

  readonly registeredWindows: string[];  // List of registered window names
  readonly registeredPlugins: string[];  // List of registered plugin names

  readonly globalContext: GlobalContext;
  readonly localContext: LocalContext;
  readonly contextMenu: ContextMenu;
}
```

## i18n

`$viewer.i18n` is used to access the viewer internationalization API:

```typescript
enum ViewerLocale { "de", "en", "es", "fr", "it" }

interface i18n {
  i18nVuePlugin: any;
  registerTranslations(messages: Object): void;  // Register a set of messages
  changeLocale(locale: ViewerLocale): void;      // Change the current viewer locale
}
```

Example usage: register translations that will be used in a plugin template.

```javascript
this.$viewer.i18n.registerTranslations({
  en: {
    hello: "Hello world !"
  },
  fr: {
    hello: "Boujour le monde !"
  }
});
```

## API

The `$viewer.api` object is used to interact with the [BIMData API](/api/introduction/overview.html).

```typescript
interface Api {
  readonly apiClient: BIMDataApiClient;
  readonly apiUrl: string;
  readonly archiveUrl: string;
  readonly cloudId: number;
  readonly projectId: number;
  readonly permissions: Permissions;
  accessToken: string;

  getModel(modelId: number): Promise<Model>;
  getModelStructure(model: Model): Promise<any>;
  getRawElements(modelId: number): Promise<any>;
  waitForModelProcess(model: Model): Promise<Model>;
}
```

::: tip
See [the doc of the **typescript-fetch-api-client**](/api/external_libraries.html#typescript) to learn
more about what you can do with `$viewer.api.apiClient`.
:::

Here is an example of how to get an IFC element from the API:

```javascript
const modelId = 123;
const uuid = "my element uuid";

const element = await this.$viewer.api.apiClient.modelApi.getElement(
  this.$viewer.api.cloudId,
  modelId,
  this.$viewer.api.projectId,
  uuid
);
```

### Permissions

The `$viewer.api.permissions` object hold a set of flags that tell which actions the user is allowed to perform.

```typescript
interface Permissions {
  hasAdminPermission: boolean;
  hasBcfReadPermission: boolean;
  hasBcfWritePermission: boolean;
  hasDocReadPermission: boolean;
  hasDocWritePermission: boolean;
  hasModelReadPermission: boolean;
  hasModelWritePermission: boolean;
  hasReadPermission: boolean;
  hasWritePermission: boolean;
  userRole: string;
  tokenScopes: {
    bcf?: string[];
    model?: string[];
    document?: string[];
  };
  usableScopes: {
    bcf?: string[];
    model?: string[];
    document?: string[];
  };
}
```

### getRawElements

The `$viewer.api.getRawElements()` method retrieves all objects, their properties, classifications, systems and layers.

For performance reasons, the API sends a formatted JSON that needs to be rebuilt in order to be used in javascript.

If you want to parse data to filter objects, you probably want to use this method.

```javascript
const modelId = 123;
const elements = await this.$viewer.api.getRawElements(modelId);
```

The result is an object where keys are uuids and value are the element data formatted like
the [API response](https://api.bimdata.io/doc#/model/getElement).

### waitForModelProcess

The `$viewer.api.waitForModelProcess()` method can be used to wait until a given model is processed,
i.e. it has a status of `C` (COMPLETED), `E` (ERROR) or `X` (WON'T FIX). It takes a **model** object as parameter.

A typical usage example is when you need to upload a model and then wait for it to be processed before opening it in a viewer.

```javascript
const processedModel = await this.$viewer.api.waitForModelProcess(model);
```

## State

The `$viewer.state` object provide a way to interact with [the global state](./state.md).

## Global and Local contexts

For a more detailed description of the global/local context interfaces, refer to their respective documentation:

 - [Global Context](./global_context.md)
 - [Local Context](./local_context.md)

### Shortcuts

You can use `globalContext`/`localContext` to register shortcuts that depends on the context.

When triggering a shortcut, the current context is the window the mouse is hovering.
If two shortcuts are registered on the same key, one on the `localContext`, the other on the `globalContext`,
the `localContext` shortcut will be executed on keystroke if the mouse is hovering the window,
else, it will be the `globalContext` one (the mouse is hovering another window or the header).

A shortcut object has the following interface:

```typescript
interface Shortcut {
  name: string;       // [Required] A name to identify the shortcut.
  key: string;        // [Required] This key the shortcut is bound to (case insensitive).
  ctrlKey: boolean;   // [Default to `false`] Does the `ctrl` (or `meta`) key must be pressed to trigger the shortcut ?
  shiftKey: boolean;  // [Default to `false`] Does the `shift` key must be pressed to trigger the shortcut ?
  altKey: boolean;    // [Default to `false`] Does the `alt` key must be pressed to trigger the shortcut ?
  execute(): void;    // [Required] The function that will be executed when the key is pressed.
}
```     

Example usage:

```javascript
this.$viewer.globalContext.registerShortcut({
  name: "log",
  key: "l",
  ctrlKey: true,
  execute: () => console.log("Log from global shortcut."),
});

this.$viewer.localContext.registerShortcut({
  name: "log",
  key: "l",
  ctrlKey: true,
  execute: () => console.log("Log from local shortcut."),
});
```

Shortcuts can be unregistered calling the `unregisterShortcut()` method with the shortcut name.

```javascript
this.$viewer.globalContext.unregisterShortcut("log");
this.$viewer.localContext.unregisterShortcut("log");
```

### Spinners

You can display a spinner to tell the user to wait until some process is finished.

Spinners can be displayed on the whole UI (**globalContext**) or just the current window (**localContext**).

```javascript
// A spinner on the whole UI
this.$viewer.globalContext.loadingProcessStart();

// A spinner on the current window
this.$viewer.localContext.loadingProcessStart();
```

<div style="display: flex; justify-content: space-around;">
  <p><b>Global context spinner</b></p>
  <p><b>Local context spinner</b></p>
</div>
<p align="center">
  <img width="48%" src="/assets/img/viewer/Viewer-global_context.gif" alt="Viewer global context spinner">
  <img width="48%" src="/assets/img/viewer/Viewer-local_context.gif" alt="Viewer local context spinner.">
</p>

To stop spinners use the following methods:

```javascript
this.$viewer.globalContext.loadingProcessEnd();
this.$viewer.localContext.loadingProcessEnd();
```

There is a `loading` property (on both `globalContext` and `localContext`) that indicates if a spinner is displayed on the related context.

The global spinner can also be customized via the `spinner` property on `globalContext`:

```javascript
// Set custom spinner to be used as global spinner
this.$viewer.globalContext.spinner = {
  component: SpinnerComponent,
  props: SpinnerProps,
};

// Reset global spinner to default
this.$viewer.globalContext.spinner = null;
```

### Modals

In a similar way, you can choose to show a modal on the whole UI or just the current window
using modals manager available on `globalContext.modals` and `localContext.modals`.

Modal manager allows to display modals. Modals are queued so if more than one modals are sent to the same modals manager,
they will be displayed in order.

To open a modal, call `pushModal()` method on a modal manager.

| Property                      | Description                                                                                              |
| :---------------------------- | :------------------------------------------------------------------------------------------------------- |
| `pushModal(component, props)` | Add a modal to the queue. `component` is a valid vuejs component. `props` is the component props values. |
| `clearModal()`                | Clear the current modal.                                                                                 |

```javascript
this.$viewer.localContext.modals.pushModal(MyModalComponent);
```

To close a modal, click outside of its content or emit the `"close"` event inside the modal component.

```javascript
this.$emit("close");
```

## Context Menu

You can manage [the viewer context menu](./context_menu.md) with `$viewer.contextMenu`.
