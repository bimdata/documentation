# Global Context

The `globalContext` shares a `Context` interface with the `localContext`. Here is the full `GlobalContext` interface:

```typescript
interface Context {
  readonly hub: EventHandler;

  registerShortcut(shortcut: Shortcut, context: GlobalContext | LocalContext): boolean;
  unregisterShortcut(name: string, context: GlobalContext | LocalContext): boolean;

  readonly loading: boolean;
  loadingProcessStart(): void;
  loadingProcessEnd(): void;
  spinner: { component: Object, props: Object }; // a custom spinner replacing the default BIMDataSpinner

  modals: {
    pushModal(component: any, props?: any, options?: any): void;
    clearModal(): void;
  };

  el: HTMLElement;
}
```

```js
interface GlobalContext extends Context {
  resizable: boolean;
  open({
    ratio: number;
    direction?: "column" | "row"; // defaults to "row"
    insertAfter?: boolean;        // defaults to true
    windowName?: string;
    windowState?: { modelIds: number[]; viewpoint: Object; storey: string; };
    localContextId?: number;
  }): Promise<number>;
  close(localContextId: number): Promise<boolean>;
  swap(localContextIdA: number, localContextIdB: number): Promise<void>;

  header: ViewerHeader;

  readonly activeLocalContext?: LocalContext;
  readonly localContexts: LocalContext[];
  getLocalContexts(windowName: string): LocalContext[];

  readonly pluginInstances: Map<string, PluginInstance[]>;
  readonly plugins: Map<string, PluginComponentInstance[]>;

  getViewers(): ModelViewerInstance[];
}
```

## Global Context API

| Name                               | Description                                                            |
| :--------------------------------- | :--------------------------------------------------------------------- |
| **properties**                     |                                                                        |
| `resizable` | If `true`, the user can resize the windows by dragging the window separators. |
| `activeLocalContext` | The currently active local context (the one associated to the window that is currently hovered by the cursor). |
| `localContexts` | List of all local contexts. |
| `pluginInstances` | A map of all plugin instances, map keys are plugin names and values are list of instances. |
| `plugins` | A map of all plugin [**component instances**](./plugin.md#plugin-component-instance) |
| **methods**                        |                                                                        |
| `open(options: any)` | (**async**) Split the given context with the specified options (ratio, direction, window, etc...). |
| `close(id: number)` | (**async**) Close the given context. |
| `swap(id1: number, id2: number)` | (**async**) Swap the given contexts. |
| `getLocalContexts(name: string)` | Returns local contexts that are associated with a given window. |
| `getViewers()` | Returns all [viewer plugins](./viewer_plugins.md) instances. |

## Events

The table below describe global context specific events:

| Name           | Payload                  | Description                                                           |
| :------------- | :----------------------- | :-------------------------------------------------------------------- |
| `window-open`  | the opened window object | Sent when a [window](./window.md) is selected on the window selector. |
| `window-close` | the closed window object | Sent when a [window](./window.md) is closed.                          |

Additionally a set of [local context events](/viewer/reference/local_context.html#events-emitted-on-both-global-local-contexts)
are also emitted on global context.
