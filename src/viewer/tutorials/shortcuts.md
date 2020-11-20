# Shortcuts

This example shows how to register a global shortcut and a local shortcut. The local shortcut is executed only if the mouse is hovering the second window, while the global is executed on the rest of the UI (even the header). Note the a local context shortcut has priority over a gobal context registered on the same key.

Key : `m`

<ClientOnly>
  <BIMDataViewer config="shortcuts"/>
</ClientOnly>

```javascript
const viewer = makeBIMDataViewer({
  locale: "fr",
  ui: {
    windowManager: false,
  },
  plugins: {
    header: false,
  },
});

const makePlugin = (name, context) => ({
  name,
  component: {
    data() {
      return {
        context,
        message: null,
      };
    },
    watch: {
      message(value) {
        if (value) {
          setTimeout(() => (this.message = null), 2000);
        }
      },
    },
    created() {
      this.$viewer[context].registerShortcut({
        name: "message",
        key: "m",
        // altKey: true,
        execute: () => (this.message = `${context} shortcut executed.`),
      });
    },
    template: ` <div style="height: 100%; display: flex; justify-content:center; align-items:center;">
                    <div style="text-align:center;">
                      <p>Listen to {{ context }} messages :</p>
                      <p>{{ message || "no message" }}</p>
                    </div>
                  </div>`,
  },
});

viewer.registerPlugin(makePlugin("plugin1", "globalContext"));
viewer.registerPlugin(makePlugin("plugin2", "localContext"));

viewer.registerWindow({
  name: "window1",
  plugins: ["plugin1"],
});

viewer.registerWindow({
  name: "window2",
  plugins: ["plugin2"],
});

viewer.mount(id, {
  ratios: [50, 50],
  direction: "row",
  children: ["window1", "window2"],
});
```
