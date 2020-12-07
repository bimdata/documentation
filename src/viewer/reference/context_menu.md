# Context Menu

The context menu is displayed after right clicking on the viewer. It displays commands that may depends on the contexts and can be customized.

## Interface

| Property                                              | Description                                              |
| :---------------------------------------------------- | :------------------------------------------------------- |
| `preventDefault()`                                    | Do not display default commands when context menu opens. |
| `registerContextCommand(command: ContextMenuCommand)` | Add command for the openning context menu.               |
| `registerCommand(command: ContextMenuCommand)`        | Add command on context menu.                             |

## Command Interface

| Property        | Description                                                                                                                       |
| :-------------- | :-------------------------------------------------------------------------------------------------------------------------------- |
| `label: string` | The text displayed on the menu.                                                                                                   |
| `picto`         | Usually a letter to show the associated shortcut.                                                                                 |
| `execute()`     | The function to execute when the command is clicked.                                                                              |
| `?predicate()`  | An optionnal predicate function that is run when the context menu opens. The command is displayed if the function returns `true`. |

## Examples

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
});
```

### Context command

**Description**: Right clicking on the button element clear default commands and add a custom command to the context menu. The command is called "Yo" and log "Yo !" on the console.

```javascript
{
  methods: {
    onContextMenu() {
      this.$viewer.contextMenu.preventDefault();
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
