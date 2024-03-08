# Keyboard shortcuts

```js
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
```