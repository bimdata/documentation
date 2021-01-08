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
| `preventDefault(): void`                                      | Do not display registered commands when context menu opens.                                                                        |
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
| `predicate()?`      | An optionnal predicate function that is run when the context menu opens. The command is displayed if the function returns `true`. |
| `group?: number`    | The group the command belongs to. **Default** to 0.                                                                               |
| `position?: number` | The position where to display the command in its group. **Default** to 0.                                                         |

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

| Name             | Description                                                                    | Display condition                                   | Group        | Position |
| :--------------- | :----------------------------------------------------------------------------- | :-------------------------------------------------- | :----------- | :------- |
| selectAll        | Select all objects.                                                            | At least one object is not selected.                | `select`     | 1        |
| deselectAll      | Select all selected objects.                                                   | At least one object is selected.                    | `select`     | 2        |
| selectSimilar    | Select all objects that share a common `type` with the unique selected object. | Exactly one object is selected.                     | `select`     | 3        |
| reverseSelection | Deselect all selected objects and select the others.                           | At least one object is selected.                    | `select`     | 4        |
| showAll          | Show all hidden objects.                                                       | At least one object is not visible.                 | `visibility` | 1        |
| hide             | Hide the selected objects.                                                     | At least one object is selected.                    | `visibility` | 2        |
| hideAll          | Hide all visible objects.                                                      | At least one object is visible.                     | `visibility` | 3        |
| isolate          | Isolate the selected objects.                                                  | At least one object is selected and none are xrayed | `visibility` | 4        |
| reintegrate      | Un-isolate all objects.                                                        | At least one object is xrayed.                      | `visibility` | 5        |
| colorize         | Colorize the selected objects.                                                 | At least one object is selected.                    | `color`      | 1        |

The command groups are displayed in ascending order according to the command `group` property with a separator between them. The commands in a group are displayed in ascending order corresponding to their `position` property.

It is possible to change the default group positions:

```javascript
// To display select group related commands at the end
$viewer.contextMenu.groupPositions.select = Infinity;
```

The default value of the `contextMenu.groupPositions` properties are the following:

| Property     | Value |
| :----------- | :---- |
| `select`     | 10    |
| `visibility` | 20    |
| `color`      | 30    |

This means that adding a command without adding a group property will display it at the top of the context menu as the default group value is 0. Because default group values are not contiguous, you can display you custom group between the default ones.

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
