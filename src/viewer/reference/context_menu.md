# Context Menu

The context menu is displayed after right clicking on the viewer. It displays commands that may depends on the contexts and can be customized.

## Get the context menu

The context menu can be accessed on the `$viewer` object:

```javascript
$viewer.contextMenu;
```

## Interface

| Property                                                      | Description                                                                                                                        |
| :------------------------------------------------------------ | :--------------------------------------------------------------------------------------------------------------------------------- |
| `registerContextCommand(command: ContextMenuCommand): number` | Add command for the openning context menu. Returns the command id.                                                                 |
| `registerCommand(command: ContextMenuCommand): number`        | Add command on context menu, displayed if the predicate exists and returns true. Returns the command id.                           |
| `unregisterCommand(commandId: number): boolean`               | Remove the command corresponding to the given id. Returns `true` if a command was removed, `false` otherwise.                      |
| `groupPositions: Object`                                      | An object with `select`, `visibility` and `color` properties that represent the group positions of corresponding default commands. |

## Command Interface

| Property            | Description                                                                                                                       |
| :------------------ | :-------------------------------------------------------------------------------------------------------------------------------- |
| `label: string`     | The text displayed on the menu.                                                                                                   |
| `picto: string`     | Usually a letter to show the associated shortcut.                                                                                 |
| `execute()`         | The function to execute when the command is clicked.                                                                              |
| `predicate()?`      | An optional predicate function that is run when the context menu opens. The command is displayed if the function returns `true`. If the predicate is an `async` function, the command is displayed when the `Promise` returned by the function resolves. |
| `group?: number`    | The group the command belongs to. **Default** to 0.                                                                               |
| `position?: number` | The position where to display the command in its group. **Default** to 0.                                                         |

## Examples

This examples are plugins or plugin components.

### Command with predicate

**Description**: The following plugin register a command using the startupScript method. The command is displayed on the context menu only if at least one element is selected. Once clicked, the selected objects are logged.

```javascript
const MyPlugin = {
  name: "selection-log",
  startupScript($viewer) {

    const myCommand = {
      label: "Log selection",
      execute: () => console.log($viewer.state.selectedObjects),
      predicate: () => $viewer.state.selectedObjects.length > 0,
    };

    $viewer.contextMenu.registerCommand(myCommand);
  },
};
```

### Context command

**Description**: Right clicking on the button element clear default commands and add a custom command to the context menu. The command is called "Yo" and log "Yo !" on the console.

```javascript
{
  methods: {
    onContextMenu() {
      this.$viewer.contextMenu.registerContextCommand({
        label: "Yo",
        execute: () => console.log("Yo !"),
      });
    },
  },
  template: `
    <div>
      <button type="button" @click="onClick" @contextmenu="onContextMenu">Click me!</button>
    </div>`,
}
```

## Example

TODO may be moved to example

### Add custom command

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
