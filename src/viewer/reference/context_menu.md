# Context Menu

The context menu is displayed after right clicking on the viewer. It displays commands that may depends on the contexts and can be customized.

## Get the context menu

The context menu can be accessed on the `$viewer` object:
```javascript
$viewer.contextMenu
```

## Interface

| Property                                              | Description                                              |
| :---------------------------------------------------- | :------------------------------------------------------- |
| `preventDefault()`                                    | Do not display default commands when context menu opens. |
| `registerContextCommand(command: ContextMenuCommand)` | Add command for the openning context menu.               |
| `registerCommand(command: ContextMenuCommand)`        | Add command on context menu.                             |
| `unregisterCommand(command: ContextMenuCommand)`      | Remove context menu command.                             |

## Command Interface

| Property        | Description                                                                                                                       |
| :-------------- | :-------------------------------------------------------------------------------------------------------------------------------- |
| `label: string` | The text displayed on the menu.                                                                                                   |
| `picto: string` | Usually a letter to show the associated shortcut.                                                                                 |
| `execute()`     | The function to execute when the command is clicked.                                                                              |
| `predicate()`   | An optionnal predicate function that is run when the context menu opens. The command is displayed if the function returns `true`. |

## Default commands

The context menu is shipped with native default commands but they can be removed from the context menu commands and then added one by one if needed.

To remove default commands, use the [makeBIMDataViewer](./makeBIMDataViewer.html) configuration object:

```javascript
makeBIMDataViewer({
  ui: {
    contextMenu: {
      defaultCommands: false,
    },
  },
});
```

Default commands can be found in the contextMenu object:

```javascript
$viewer.contextMenu.defaultCommands.get("selectAll");
```

Ths `defaultCommands` object is a [javascript Map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map).

Here is a list of all available default commands:

| Name             | Description                                                                    | Display condition                                   |
| :--------------- | :----------------------------------------------------------------------------- | :-------------------------------------------------- |
| selectAll        | Select all objects.                                                            | At least one object is not selected.                |
| deselectAll      | Select all selected objects.                                                   | At least one object is selected.                    |
| selectSimilar    | Select all objects that share a common `type` with the unique selected object. | Exactly one object is selected.                     |
| reverseSelection | Deselect all selected objects and select the others.                           | At least one object is selected.                    |
| hide             | Hide the selected objects.                                                     | At least one object is selected.                    |
| hideAll          | Hide all visible objects.                                                      | At least one object is visible.                     |
| showAll          | Show all hidden objects.                                                       | At least one object is not visible.                 |
| isolate          | Isolate the selected objects.                                                  | At least one object is selected and none are xrayed |
| reintegrate      | Un-isolate all objects.                                                        | At least one object is xrayed.                      |
| colorize         | Colorize the selected objects.                                                 | At least one object is selected.                    |

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

### Change defaults commands

**Description**: If default commands are removed from the context menu using the `makeBIMDataViewer` configuration object, it is possible to retreive them using the `defaultCommands` object. The following example add the `selectAll` default command on the context menu while requesting the context menu on the button.

```javascript
{
  methods: {
    onContextMenu() {
      this.$viewer.contextMenu.registerCommand(
        $viewer.contextMenu.defaultCommands.get("selectAll")
      );
    },
  },
  template: `
    <div>
      <button type="button" @click="onClick" @contextmenu="onContextMenu">Click me!</button>
    </div>`,
}
```
