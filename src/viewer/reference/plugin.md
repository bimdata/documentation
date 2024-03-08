
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

## Plugin as button

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


## Plugin as window content

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

## How to develop a plugin

A plugin is mainly either a [Vue component](https://vuejs.org/guide/essentials/component-basics.html) or/and a simple function that is run when the viewer is mounted into the [DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model).

::: tip
To learn what is a Vue component, [have a look at the Vue documentation](https://vuejs.org/guide/introduction.html).
:::

Both component and function have access to the [`$viewer`](/viewer/reference/$viewer.html) object. It can be accessed using `this` on a component, or as the first parameter of the `startupScript` method. This object allows to interact with the viewer core.

### Plugin as a function

To develop a plugin as a **function**, you must provide a function on the `startupScript` property of the configuration object of the `registerPlugin()` method. The first argument of this function is the [`$viewer`](/viewer/reference/$viewer.html) object.

### Plugin as a component

To develop a plugin as a **component**, you must provide a Vue component on the `component` property of the configuration object of the `registerPlugin()` method.

::: tip
Here are some usefull links you should need to develop your own plugin with a component:
- [Plugin UI configuration documentation](/viewer/customize_the_ui.html#plugin) to see the UI possibilities.
- [Plugin as button API](/viewer/plugins/plugin_as_button.html) to bind a behavior on the user interactions.
:::

### Example

TODO put in examples

See below a plugin registered with both a startup script function and a Vue component that can be displayed on the viewer windows.

The Vue component:

```javascript
const myComponent = {
  name: "myPluginComponent",
  methods: {
    onClick() {
      const visibleObjects = this.$viewer.state.visibleObjects;
      console.log("These are the visible objects:", visibleObjects);
    },
  },
  template: `
    <div>
      <button type="button" @click="onClick">
        Click to log visible objects.
      </button>
    </div>`,
};
```

The *startupScript* function:

```javascript
const myFunction = ($viewer) => {
  $viewer.state.hub.on("objects-selected", (objects) =>
    console.log("New objects are selected", objects)
  );
};
```

The registration:

```javascript
import makeBIMDataViewer from "@bimdata/viewer";

const bimdataViewer = makeBIMDataViewer({
  /* ... */
});

bimdataViewer.registerPlugin({
  name: "myPlugin",
  component: myComponent,
  startupScript: myFunction,
  addToWindows: ["3d"]
});
```

## Plugin as button

A plugin component will have a special API if it is registered as a [window button](/viewer/customize_the_ui.html#button).

### onOpen and onClose

`onOpen` and `onClose` methods prevent user from spam clicking a plugin button. It will not be possible to the user to open or close the plugin if the returned [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) is not resolved.

As their names suggest, `onOpen` is run when the user request the plugin to be opened,
while `onClose` is run when the user request the plugin to be closed.

::: tip
The plugin can be opened or closed using the UI (by clicking) or [programmatically using javascript](#open-and-close).
:::

```javascript
const myComponent = {
  async onOpen() {
    await new Promise((res) => setTimeout(res, 1000));
  },
  onClose() {
    return new Promise((res) => setTimeout(res, 2000));
  },
  methods: {
    onClick() {
      console.log("clicked !");
    },
  },
  template: `
    <div>
      <button type="button" @click="onClick">Click me!</button>
    </div>`,
};
```

The result:

![Viewer async plugin](/assets/img/viewer/Viewer-async_plugin.gif)

These methods are useful when an action needs to be awaited before the plugin can be opened or closed again.

### $open and $close

A plugin can be opened or closed using the UI (by clicking) but you may want to do it programmatically using javascript.
To do so, you can use `$open` or `$close` methods available on `this`.

Example: a plugin component opened at startup and that close itself after 2 seconds.
```javascript
const myPluginComponent = {
  mounted() {
    this.$open();
    setTimeout(() => this.$close(), 2000);
  },
};
```

### Open/Close parameters

You can also provide any parameter you want when you call `$open` or `$close`.
These paramters will be passed to the `onOpen` or `onClose` method respectively.

Example:
```js
const myPluginComponent = {
  template: `
    <button @click="onClick">
      Click me
    </button>
  `,
  data() {
    return { count: 0 };
  },
  onOpen(msg) {
    console.log("open message: ", msg);
  },
  methods: {
    onClick() {
      this.$open(`count = ${this.count++}`);
    }
  }
};
```

## i18n

It is possible to add internationalization for plugins.

### Translate text

To add i18n files, use the `i18n` plugin property. To translate a text, use `$t("pluginName.textKey")`.

Example:

```javascript
const EN = {
  "textKey": "This text is in english.",
};

const FR = {
  "textKey": "Ce texte est en français",
};

const myPlugin = {
  name: "myPlugin",
  i18n: {
    en: EN,
    fr: FR,
  },
  component: {
    template: "<div>{{ $t('myPlugin.textKey') }}</div>"
  }
};
```

### Set the viewer locale

To set the viewer local, use the `locale` property of the [makeBIMDataViewer](/viewer/reference/makeBIMDataViewer.html) configuration object:

```javascript
const viewer = makeBIMDataViewer({
  locale: "en",
});
```

The available locales are:
- English: en (default)
- French: fr 
- Spanish: es
- German: de
- Italian: it
