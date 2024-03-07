# Plugin

The viewer is shipped with native BIMData plugins but others can be added to add new features and more possibilities. A plugin is mainly either a [Vuejs component](https://vuejs.org/v2/guide/components.html) or/and a simple function that is run when the viewer is mounted into the [DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model).

::: tip
See the [plugins documentation](/viewer/plugins/overview.html) to know how to develop a plugin and add new features to the viewer.
:::

A plugin is added to the viewer by registering it :

```javascript
import makeBIMDataViewer from "@bimdata/viewer";
import MyPlugin from "@myOrganisation/plugin";

const bimdataViewer = makeBIMDataViewer(/* {...} */);

bimdataViewer.registerPlugin(MyPlugin);
```

## Plugin registration API

The registerPlugin method take an object as argument. The options are the followings:

| Property                   | Description                                                                                     |
| :------------------------- | :---------------------------------------------------------------------------------------------- |
| `name`: `string`           | **Required** The name of the plugin. Must be unique.                                            |
| `component`: `object`      | A Vuejs (v2.x) component.                                                                       |
| `i18n`: `object`           | An object containing translations for internationalization.                                     |
| `startupScript($viewer)`   | A function that is executed when the viewer is mounted, with [`$viewer`](/viewer/reference/$viewer.html) as argument. |
| `button`: `object`         | An [object](#button) that describe the display of the plugin if the plugin is shown as button.  |
| `window`: `object`         | An [object](#window) used to register a window with this plugin in it.                          |
| `addToWindows`: `string[]` | An array of [window](#window) name in which to include this plugin.                              |

## Button

| Property                | Description                                                                                                                 |
| :---------------------- | :-------------------------------------------------------------------------------------------------------------------------- |
| `position`: `string`    | "left" or "right". The position of the button in the window.                                                                |
| `content`: `string`     | "simple", "panel" or "free"(default). Different way to display the component when the button is clicked. (see images below) |
| `tooltip`: `string`     | A string that is displayed when the plugin button is hovered. It can be a key to be translated ex: "myPluginName.tooltip"   |
| `keepOpen`: `boolean`   | Default to `false`. If `true`, the plugin stay open even if the user click away from it.                                      |
| `icon.imgUri`: `string` | An uri to an image for the button.                                                                                          |

If only the `icon` is defined, the corresponding image is always displayed on the button.
A similar option, iconOpen can be defined to display a different icon when the button is open.

The images below show the different way to display plugin as button. (top-left : content = `simple`, top-right : content = `free`, bottom : content = `panel`)

<p align="center">
  <img src="/assets/img/viewer/Viewer-PluginButton-simple.png" alt="Viewer plugin button simple.">
  <img src="/assets/img/viewer/Viewer-PluginButton-free.png" alt="Viewer plugin button free.">
</p>
<p align="center">
  <img src="/assets/img/viewer/Viewer-PluginButton-panel.png" alt="Viewer plugin button panel.">
</p>

The `simple` mode display the component in a small div adapted for small menu interfaces like switching between few options.

The `free` mode display the component in a div. The developer of the plugin is responsible to decide the style of the component because the div is related to the component size.

The `panel` mode open the component in a Panel. The panel height is 100% of the window.

## Window content

A plugin that is not displayed as a button is displayed on the window content. The viewer 3D and the viewer 2D are plugins displayed this way.

Example: this is the file content (simplified) used to register the viewer 3D:

```javascript
import Viewer3D from "./Viewer3D.vue";

export default {
  name: "viewer3d",
  component: Viewer3D,
  window: {
    name: "3d",
  },
};
```

There is no [button](#button) configuration in this file. The viewer 3D is registered as "viewer3d" and a window named "3d" is created with the viewer 3d plugin as a child.

## mount

TODO : put in another place

Once created, the BIMDataViewer must be mounted to a [DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model) element in order to be displayed to the user.

```javascript
bimdataViewer.mount("#app"); // 'app' is the id of an existing element.
```

The mount method take an optional second argument: the [`layout`](#layout). The [`layout`](#layout) is the configuration of the windows displayed at startup. The default value is "3d", which is the name of a window registered by default. The "3d" window includes many BIMData plugins like "viewer3d", "section", "projection", "structure-properties"...

## Layout

The layout object can be either a `string` or an `object`.

- If `string`, it must be the name of a registered window.
- If `object`, the `layout` is a recursive object representing a container of window names. A container have ratios that represent the amount of space taken by given windows, a direction that can be "column" or "row"(default) and an array of children. A child can be a window name as `string` or another container as `object`.

Examples :

### A simple window name

```javascript
bimdataViewer.mount("#app", "3d");
```

<img width="100%" src="/assets/img/viewer/Viewer-1_window_special.png" alt='Layout "3d"'>

### A container with two windows

```javascript
bimdataViewer.mount("#app", {
  ratios: [40, 60],
  direction: "row",
  children: ["structure", "2d"],
});
```

<img width="100%" src="/assets/img/viewer/Viewer-2_windows.png" alt='Layout row 2 windows'>

### Nested containers

```javascript
bimdataViewer.mount("#app", {
  ratios: [55, 45],
  direction: "column",
  children: [
    {
      ratios: [50, 50],
      children: ["structure", "2d"],
    },
    "3d",
  ],
});
```

<img width="100%" src="/assets/img/viewer/Viewer-3_windows.png" alt='Layout 3 windows'>