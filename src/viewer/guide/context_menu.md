# Context Menu

## Add custom command

Now we add a command that is displayed only if one element is selected. To do so, we register a new plugin with no UI (component) but a `startupScript` method:

```javascript
const plugin4 = {
  name: "plugin4",
  startupScript($viewer) {
    $viewer.contextMenu.registerCommand({
      label: "Log selected",
      execute: () => console.log($viewer.state.selectedObjects),
      predicate: () => $viewer.state.selectedObjects.length > 0,
    });
  },
};

viewer.registerPlugin(plugin4);
```

This command with the label `"Log selected"` is displayed only if at least one element is selected. Indeed, a context menu command is displayed on the context menu if there is no predicate method associated to it, or if its associated predicate method returns true when the context menu is open. The execute method is executed when the user click on the command. The execute method we added logs the selected objects in the console.

## Add custom context command

The previous command is displayed everywhere if the predicate method returns true. In our case, if one element is selected. However, you may want to add custom context menu command on a specific location. We will update the component 3 that is displayed on the right button of the window 2 to add custom context menu command when right clicking on it. To make sure no other command are added to the context menu when clicking on the component 3, we call `preventDefault` to remove all command from the context menu before adding the new one. In this way, even if one object is selected, only the command specific for the component 3 is displayed when clicking on it.

```javascript
const component3 = {
  name: "Component_3",
  template: "<div @contextmenu='onContextMenu'>Component 3</div>",
  methods: {
    onContextMenu() {
      this.$viewer.contextMenu.preventDefault();
      this.$viewer.contextMenu.registerContextCommand({
        label: "My command!",
        execute: () => {/* do nothing */},
      });
    },
  },
};
```
