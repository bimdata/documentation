# Overview

Plugins allows to add new features to the viewer. Here is a list of some addition you may want to do:
- Develop a plugin that responds to state changes like selected objects, hidden objects...
- Add context menu commands.
- Add shortcuts.

A plugin is mainly either a Vuejs 2.x component or/and a simple function that is run when the viewer is mouted into the [DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model).

::: tip
If you develop a plugin as a Vuejs 2.x component, you may want to look at the [plugin UI configuration documentation](/viewer/ui.html#plugin).
:::

To develop a plugin as a **component**, you must provide a Vuejs 2.x component on the `component` property of the configuration object of the `registerPlugin` method.

To develop a plugin as a **function**, you must provide a function on the startupScript property of the configuration object of the `registerPlugin` method.

Both component or function have access to the `$viewer` object. This object allows you to interact with the viewer core.

The `$viewer` object can be access on `this` on a component, or as the first parameter of the startupScript methode.

```javascript
// on a component :
this.$viewer;

// on the startupScript methode
{
  startupScript($viewer) {
    /* */
  }
}
```

In addition to the access of the `$viewer` object, a plugin developped as a component will have some API used to bind a behavior on the user interactions. For example, a plugin displayed as a button will provide an open and a close methods.
