# Global Context

Here is the full `GlobalContext` interface:

```typescript
interface GlobalContext {
  hub: EventHandler<GlobalContextEvents & LocalContextEvents>;

  readonly plugins: Map<string, PluginInstance[]>;
  readonly activeLocalContext?: LocalContext;
  readonly localContexts: LocalContext[];
  getLocalContexts(window: string): LocalContext[];
  getViewers(): ModelViewerInstance[];

  registerShortcut(shortcut: Shortcut, context: GlobalContext | LocalContext): boolean;
  unregisterShortcut(name: string, context: GlobalContext | LocalContext): boolean;

  readonly loading: boolean;
  loadingProcessStart(): void;
  loadingProcessEnd(): void;
  setSpinner(spinner: any): void;

  modals: {
    pushModal(component: any, props?: any, options?: any): void;
    clearModal(): void;
  };
}
```

## Events

The table below describe global context specific events:

| Name            | Payload                  | Description |
| :-------------- | :----------------------- | :---------- |
| `window-open`   | the opened window object | Sent when a [window](/viewer/customize_the_ui.html#window) is selected on the window selector. |
| `window-close`  | the closed window object | Sent when a [window](/viewer/customize_the_ui.html#window) is closed. |

Additionally a set of [local context events](/viewer/reference/local_context.html#events-emitted-on-both-global-local-contexts)
are also emitted on global context.
