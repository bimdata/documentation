# Window UI

This example shows how to create custom windows layout.

<ClientOnly>
  <BIMDataViewer config="windowUI"/>
</ClientOnly>

```javascript
const viewer = makeBIMDataViewer({
  ui: {
    headerVisible: false
  }
});

viewer.registerWindow({
  name: "windowUI",
  plugins: [],
});

viewer.mount(id, {
  ratios: [40, 60],
  children: [
    "windowUI",
    {
      ratios: [50, 50],
      direction: "column",
      children: ["windowUI", "windowUI"],
    },
  ],
});
```