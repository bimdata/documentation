---
tags: ["event", "events"]
---

# Hubs

A Hub is an event manager. It allows to register event handler and to trigger events.

There are three hubs on the viewer:

- The state hub, available on `$viewer.state.hub`.
- The local context hub, available on `$viewer.localContext.hub`.
- The global context hub, available on `$viewer.globalContext.hub`.

The interface of a hub is the following:

| Property                                                                | Description                                                                                                                                                                                                                                                                 |
| :---------------------------------------------------------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `on(eventName: string, callback: function, options?: object): number`   | A method that register an handler on the event name. When the event is emitted on the hub, the callback function is executed with the event payload as first argument. The `number` returned by the function is the subscription id that can be used to remove the handler. |
| `once(eventName: string, callback: function, options?: object): number` | This method is the same as the `on` method, but the callback is executed only once for the given event and then removed from the listerners.                                                                                                                                |
| `off(subscriptionId: number): void`                                     | Cancel the corresponding subscription.                                                                                                                                                                                                                                      |
| `emit(eventName: string, payload?: any): void`                          | Emit an event with a optional payload.                                                                                                                                                                                                                                      |
| `clear(): void`                                                         | Remove all subscriptions of this hub.                                                                                                                                                                                                                                       |

The third parameter `options` is an optional `Object` that accepts the property `getLastEvent` as a boolean default to `false`. If `true`, the callback is trigered with the last event (if it exists) immediately. It can be interesting for state synchronization.

:::tip
Many of the events you may use are State events. Find more [reading the State reference](./state.html#events).
:::

:::tip
Other usefull events are from the global and the local context. Find more [reading the \$viewer reference](./$viewer.html#events).
:::
