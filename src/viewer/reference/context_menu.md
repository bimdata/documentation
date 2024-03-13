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
| `preventDefault(): void;`                                     | Prevent registered commands to show. Usefull when only context commands are needed.                                                |
| `groupPositions: Object`                                      | An object with `select`, `visibility` and `color` properties that represent the group positions of corresponding default commands. |

## Command Interface

| Property            | Description                                                                                                                                                                                                                                              |
| :------------------ | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `label: string`     | The text displayed on the menu.                                                                                                                                                                                                                          |
| `picto: string`     | Usually a letter to show the associated shortcut.                                                                                                                                                                                                        |
| `execute()`         | The function to execute when the command is clicked.                                                                                                                                                                                                     |
| `predicate()?`      | An optional predicate function that is run when the context menu opens. The command is displayed if the function returns `true`. If the predicate is an `async` function, the command is displayed when the `Promise` returned by the function resolves. |
| `group?: number`    | The group the command belongs to. **Default** to 0.                                                                                                                                                                                                      |
| `position?: number` | The position where to display the command in its group. **Default** to 0.                                                                                                                                                                                |

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
