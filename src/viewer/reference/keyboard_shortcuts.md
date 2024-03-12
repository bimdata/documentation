# Keyboard shortcuts

Keyboard shortcuts can be registered using the `localContext` and the `globalContext`. `localContext` keyboard shortcuts are triggered only if the mouse is hovering the correspinding `localContext`, taking priority over `globalContext` keyboard shortcuts registered on the same key.

```js
const myComponent = {
  created() {
    this.$viewer.globalContext.registerShortcut({
      name: "message",
      key: "m",
      execute: () =>
        (this.globalMessage = `"m" key pressed GLOBALLY`),
    });
    this.$viewer.localContext.registerShortcut({
      name: "message",
      key: "m",
      execute: () => (this.localMessage = `"m" key pressed LOCALLY`),
    });
  },
}
```