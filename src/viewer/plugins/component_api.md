# Component API

A plugin component will have a special API if it is registered as a [window button](/viewer/customize_the_ui.html#button).

## onOpen and onClose

`onOpen` and `onClose` methods prevent user from spam clicking a plugin button. It will not be possible to the user to open or close the plugin if the returned [Promise](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise) is not resolved.

As their names suggest, `onOpen` is run when the user request the plugin to be opened,
while `onClose` is run when the user request the plugin to be closed.

::: tip
The plugin can be opened or closed using the UI (by clicking) or [programmatically using javascript](#open-and-close).
:::

```javascript
const myComponent = {
  async onOpen() {
    await new Promise((res) => setTimeout(res, 1000));
  },
  onClose() {
    return new Promise((res) => setTimeout(res, 2000));
  },
  methods: {
    onClick() {
      console.log("clicked !");
    },
  },
  template: `
    <div>
      <button type="button" @click="onClick">Click me!</button>
    </div>`,
};
```

The result:

![Viewer async plugin](/assets/img/viewer/Viewer-async_plugin.gif)

These methods are usefull when an action needs to be awaited before the plugin can be opened or closed again.

## $open and $close

A plugin can be opened or closed using the UI (by clicking) but you may want to do it programmatically using javascript. To do so, you can use `$open` or `$close` methods available on `this`.

Example: a plugin component opened at startup and that close itself after 2 seconds.
```javascript
const myPluginComponent = {
  mounted() {
    this.$open();
    setTimeout(() => this.$close(), 2000);
  },
};
```
