# UI

## Overview

<p align="center">
  <img width="48%" src="/assets/img/viewer/Viewer-1_window.png" alt="Viewer with one window.">
  <img width="48%" src="/assets/img/viewer/Viewer-2_windows.png" alt="Viewer with two windows.">
</p>
<p align="center">
  <img width="48%" src="/assets/img/viewer/Viewer-3_windows.png" alt="Viewer with three windows.">
  <img width="48%" src="/assets/img/viewer/Viewer-1_window_special.png" alt="Viewer with one window without header.">
</p>

The viewer UI is decomposed in three main parts :

- First, there is the [header](#header). The header is where some usefull actions can be performed like accessing the main menu, loading models or customizing the rest of the UI using the window manager. The header is not displayed on the bottom-right image. It is a special case where user only wants a floating header and a button (top-right) to customize windows.
- Next, there is the main view where [windows](#window) are displayed. The user can resize, add, delete, split or swap windows to create his own workspace, according to his needs. On the images above there is one, two or three windows with spatial arborescence, a 2d and 3d representations of the model displayed on different windows.
- Last, there are [plugins](#plugin) displayed as menu inside windows. Different display possibilities are shown on the image below (left, right, small...). These possibilities are described in the [plugin](#Plugin) part.

<p align="center">
  <img width="70%" src="/assets/img/viewer/Viewer-1_window_plugins.png" alt="Viewer with opened plugins.">
</p>

## Header

By default, the header is always displayed as a top bar. However, it can be changed if only one window is present, or totally removed if you need to.

### Flying header

To display the flying header instead of the top bar on a simple window, the `flyingHeader` propperty on a [window configuration object](#window-configuration-object) must be set to `true`;

```javascript
const bimdataViewer = makeBIMDataViewer(/* {...} */);

const windowConfigurationObject = {
  name: "windowName",
  flyingHeader: true,
  plugins: [
    /* plugins */
  ],
};

bimdataViewer.registerWindow(windowConfigurationObject);
```

Then, if only this window is displayed, the header will be displayed `flying` like on the image bellow.

<p align="center">
  <img width="70%" src="/assets/img/viewer/Viewer-1_window_special.png" alt="Flying header on siple window.">
</p>

::: warning
The flying header is possible only if one window is displayed. If there is two windows displayed, even if they have the flyingHeader property set to true, the header will be displayed as a top bar.
:::

### No header

In some case, you may want to get rid of the header. To do so, you must use the `makeBIMDataViewer` configuration object, and use the ui property :

```javascript
const bimdataViewer = makeBIMDataViewer({
  /* */
  ui: {
    headerVisible: false,
  },
});
```

### Window manager tools

The header contains the window manager tools. It is displayed on the right of the bar or as a right plugin if the header is displayed `flying`.

<div style="text-align:center;">
  <Icon name="screenConfig" size="xxxl" />
  <p><em>Window manager tools icon.</em></p>
</div>

You can choose to disable it to do not let the user update the UI:

```javascript
const bimdataViewer = makeBIMDataViewer({
  /* */
  ui: {
    windowManager: false,
  },
});
```

## Window

A window is composed of [plugins](#plugin) and can be registered using two ways :

- The first is by adding a window configuration object in a plugin configuration.
- The second is by registering it directly on the BIMData viewer object.

### Window configuration object

| Property                  | Description                                                                                                                                    |
| :------------------------ | :--------------------------------------------------------------------------------------------------------------------------------------------- |
| `name`: `string`          | **Required** The name of the window. Must be unique.                                                                                           |
| `label`: `string`         | The label that is displayed to the user. Can be a key to be translated like : "viewer3d.window_label".                                         |
| `plugins`: `array`        | An array of plugins which will be added to the window.                                                                                         |
| `flyingHeader`: `boolean` | Default to false. If true, the header bar is replaced by a flying header and a window manager button if this window is the only one displayed. |

```javascript
const bimdataViewer = makeBIMDataViewer(/* {...} */);

const windowConfigurationObject = {
  name: "windowName",
  plugins: [
    /* plugins */
  ],
};

// first way
bimdataViewer.registerPlugin({
  /* plugin specific fields */
  window: windowConfigurationObject,
});

// second way
bimdataViewer.registerWindow(windowConfigurationObject);
```

## Plugin

The viewer is shipped with native BIMData plugins but others can be added to add new features and more possibilities. A plugin is mainly either a Vuejs component or/and a simple function that is run when the viewer is mouted into the [DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model).

::: tip
See the [plugins documentation](/viewer/plugins/) to know how to develop a plugin and add new features to the viewer.
:::

A plugin is added to the viewer by registering it :

```javascript
import makeBIMDataViewer from "@bimdata/viewer"; // fake path
import MyPlugin from "@myOrganisation/plugin"; // fake path

const bimdataViewer = makeBIMDataViewer(/* {...} */);

bimdataViewer.registerPlugin(MyPlugin);
```

### Plugin registration API

The registerPlugin method take an object as argument. The options are the followings:

| Property                   | Description                                                                                     |
| :------------------------- | :---------------------------------------------------------------------------------------------- |
| `name`: `string`           | **Required** The name of the plugin. Must be unique.                                            |
| `component`: `object`      | A Vuejs (v2.x) component.                                                                       |
| `i18n`: `object`           | An object containing translations for internationalization.                                     |
| `startupScript($viewer)`   | A function that is executed when the viewer is mounted, with [`$viewer`](#$viewer) as argument. |
| `button`: `object`         | An [object](#button) that disribe the display of the plugin if the plugin is shown as button.   |
| `window`: `object`         | An [object](#window) used to register a window with this plugin in it.                          |
| `addToWindows`: `string[]` | An array of [window](#window) name in wich to include this plugin.                              |

### Button

| Property                | Description                                                                                                                 |
| :---------------------- | :-------------------------------------------------------------------------------------------------------------------------- |
| `position`: `string`    | "left" or "right". The position of the button in the window.                                                                |
| `content`: `string`     | "simple", "panel" or "free"(default). Different way to display the component when the button is clicked. (see images below) |
| `tooltip`: `string`     | A string that is displayed when the plugin button is hovered. It can be a key to be translated ex: "myPluginName.tooltip"   |
| `keepOpen`: `boolean`   | Default to `false`. If `true`, the plugin will close by clicking away from the viewer.                                      |
| `icon.imgUri`: `string` | An uri to an image for the button.                                                                                          |

If only the `icon` is defined, the corresponding image is always displayed on the button.
A similar option, iconOpen can be defined to display a icon different when the button is open.

The images below show the different way to display plugin as button. (top-left : content = `simple`, top-right : content = `free`, bottom : content = `panel`)

<p align="center">
  <img src="/assets/img/viewer/Viewer-PluginButton-simple.png" alt="Viewer plugin button simple.">
  <img src="/assets/img/viewer/Viewer-PluginButton-free.png" alt="Viewer plugin button free.">
</p>
<p align="center">
  <img src="/assets/img/viewer/Viewer-PluginButton-panel.png" alt="Viewer plugin button panel.">
</p>

The `simple` mode display the component in a small div adapted for small menu interfaces like switching between few options.
The `free` mode display the component in a div. The developper of the plugin is responsible to decide the style of the component because the div is related to the component size.
The `panel` mode open the component in a Panel. The panel height is 100% of the window (minus few margins) and it can be unpined. Once unpined, the panel can be resized and moved inside the window like on the gif below.

<p align="center">
  <img src="/assets/img/viewer/Viewer-panel.gif" alt="Viewer Panel.">
</p>

## mount

Once created, the BIMDataViewer must be mounted to a [DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model) element in order to be displayed to the user.

```javascript
bimdataViewer.mount("#app"); // 'app' is the id of an existing element.
```

The mount methode take an optional second argument: the [`layout`](#Layout). The [`layout`](#Layout) is the configuration of the windows displayed at startup. The default value is "3d", which is the name of a window registered by default. The "3d" window includes many BIMData plugins like "viewer3d", "section", "projection", "structure-properties"...

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

## Complete UI example

```html
<body>
  <div id="app"></div>
  <script type="module">
    import makeBIMDataViewer from "@bimdata/viewer";

    const bimdataViewer = makeBIMDataViewer({
      api: {
        cloudId: 515,
        projectId: 756,
        ifcIds: [2283],
        accessToken: "fc83e49ca9444d3ea41d212599f39040", // Demo token
        apiUrl: "https://api-staging.bimdata.io",
      },
    });

    bimdataViewer.registerPlugin({
      name: "buttonPlugin",
      component: {
        render(h) {
          return h("div", "Plugin Button component content.");
        },
      },
      button: {
        position: "left",
        content: "panel",
      },
    });

    bimdataViewer.registerPlugin({
      name: "windowPlugin",
      component: {
        render(h) {
          return h(
            "div",
            {
              style:
                "display: flex; justify-content: center; align-items: center; height: 100%;",
            },
            "Plugin Window component content."
          );
        },
      },
      window: {
        name: "window-1",
        plugins: ["buttonPlugin"],
      },
    });

    bimdataViewer.registerWindow({
      name: "window-2",
      plugins: ["buttonPlugin"],
    });

    bimdataViewer.mount("#app", {
      ratios: [30, 70],
      children: [
        "window-1",
        {
          ratios: [40, 60],
          direction: "column",
          children: ["window-2", "3d"],
        },
      ],
    });
  </script>
</body>
```

<img width="100%" src="/assets/img/viewer/Viewer-layout.png" alt='Complete layout example.'>
