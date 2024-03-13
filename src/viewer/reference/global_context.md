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
  resizable: boolean; // if `true`, the user can resize the windows by dragging the window separators.
  open({ ratio: number;
    direction?: "column" | "row";
    insertAfter?: boolean;
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
  readonly pluginComponentInstances: Map<string, PluginComponentInstance[]>;

  getViewers(): ModelViewerInstance[];
}
```

## Events

The table below describe global context specific events:

| Name           | Payload                  | Description                                                                                    |
| :------------- | :----------------------- | :--------------------------------------------------------------------------------------------- |
| `window-open`  | the opened window object | Sent when a [window](/viewer/customize_the_ui.html#window) is selected on the window selector. |
| `window-close` | the closed window object | Sent when a [window](/viewer/customize_the_ui.html#window) is closed.                          |

Additionally a set of [local context events](/viewer/reference/local_context.html#events-emitted-on-both-global-local-contexts)
are also emitted on global context.
