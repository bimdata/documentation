# State

This is how to listen to state changes and make state changes. In this example, once an object is selected, it is then hided.

<ClientOnly>
  <BIMDataViewer config="state"/>
</ClientOnly>

```javascript
const viewer = makeBIMDataViewer(/* viewer config */);

viewer.registerPlugin({
  startupScript($viewer) {
    $viewer.state.hub.on("objects-selected", ({ objects }) =>
      $viewer.state.hideObjects(objects.map((o) => o.id))
    );
  },
});

viewer.mount("#id");
```
