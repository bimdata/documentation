# Event hubs

TODO not a tutorial anymore

Hubs allow to register event listener or trigger events on them. The state hub is probably the one that you will use the most, but there is also two other hubs that can be interesting. Remember the `globalContext` and the `localContext` from the [shorctut tutorial](/viewer/tutorials/shortcuts.html)? There is also a hub on each of these contexts. If you want to trigger events that can reach only plugins on the same window, use the `localContext.hub`. If you want to trigger event for all plugins, use the `globalContext.hub`.

:::tip
For more information, see [global and local contexts documentation](/viewer/reference/$viewer.html#global-and-local-contexts).
:::

In this tutorial, we will trigger a local event when the plugin3 gets open and the plugin2 will listen to this event and display a message accordingly.

## Step by step

### Emitting an event when plugin 3 gets open

We first have to emit an event when the plugin 3 gets open. To do so, we will use the [plugin as button API](/viewer/plugins/plugin_as_button.html) and emit an event on the `localContext.hub`.

Let's update the component3:

```javascript {15-19}
const component3 = {
  name: "Component_3",
  template: "<div @contextmenu='onContextMenu'>Component 3</div>",
  methods: {
    onContextMenu() {
      this.$viewer.contextMenu.preventDefault();
      this.$viewer.contextMenu.registerContextCommand({
        label: "My command!",
        execute: () => {
          /* do nothing */
        },
      });
    },
  },
  onOpen() {
    this.$viewer.localContext.hub.emit("custom-event", {
      message: "The plugin 3 is getting open!",
    });
  },
};
```

With this added code, the plugin 3 emits an event named `"custom-event"` on the `localContext.hub` when it gets open. However, as nobody is listening to this event, nothing happens.

### Listening to localContext events

Next, we will update the component 2 to listen to the `localContext.hub` `"custom-event"` event and display the `message` it contains. The most important part is this:

```javascript
created() {
  this.subID = this.$viewer.localContext.hub.on(
    "custom-event",
    (event) => (this.message = event.message)
  );
},
```

And this is the full component 2:

```javascript {15-23}
const component2 = {
  name: "Component_2",
  data() {
    return {
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
    this.subID = this.$viewer.localContext.hub.on(
      "custom-event",
      (event) => (this.message = event.message)
    );
  },
  destroyed() {
    this.$viewer.localContext.hub.off(this.subID);
  },
  template: `
    <div
      style="height: 100%;
      display: flex;
      justify-content:center;
      align-items:center;"
    >
      <div style="text-align:center;">
        <p><b>Local context "custom-event" message :</b></p>
        <p>{{ message || "..." }}</p>
      </div>
    </div>`,
};
```

::: warning
When you make a call to [`hub.on(eventName, callback)`](/viewer/reference/hubs.md) it will provide you with a subscription ID.
This sub ID is used to 'cancel' the subscription using the [`hub.off(subID)`](/viewer/reference/hubs.md) method in order to release resources and stop listening to that event.
For performance reason you should always consider cancelling active subscriptions when they are not useful anymore.
This is typically done in the `destroyed()` lifecycle hook of a component (as shown above).
:::

::: tip
You can also use the [`hub.clear()`](/viewer/reference/hubs.md) method to remove all subscriptions at once.
:::

The rest of the code is similar to the component 1 to display messages.

### Other possibility

In this example, we use `localContext` because plugin 2 and plugin 3 are on the same window. They share the same `localContext`. Plugin 1 cannot get the `"custom-event"` event because it has another `localContext` (as it is on another window). If we want to display the message on the component 1 (UI of the plugin 1), we could use the `globalContext` instead. Emitting an event on the `globalContext` allows every plugin in the viewer to listen to them and act accordingly.
