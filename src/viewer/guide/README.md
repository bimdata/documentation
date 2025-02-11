# Graphical User Interface

This guide shows how to quickly customize the existing BIMDataViewer UI.

## Header & Windows

As the name suggests, the [**Header**](../reference/header.html) is located at the top of the BIMDataViewer. [**Windows**](../reference/window.html) share the remaining space.

<img width=500px src="/assets/img/viewer/viewer-gui-header-and-windows.png" alt="Viewer GUI with windows and header.">


Different layouts can be created, with or without [**Header**](../reference/header.html), and with as many [**Windows**](../reference/window.html) as required.

<img width=500px src="/assets/img/viewer/viewer-gui-layouts.png" alt="Viewer GUI layouts.">

It is possible to completly remove the [**Header**](../reference/header.html) using the `ui` property of the [`makeBIMDataViewer`](../reference/makeBIMDataViewer.html) configuration parameter:

```js
const bimdataViewer = makeBIMDataViewer({
    ui: {
      header: false,
  },
});
```

To display the desire layout, use the second parameter of the [`bimdataViewer.mount`](../reference/mount.html) method:

```js
const bimdataViewer = makeBIMDataViewer({
    ui: {
      header: false,
  },
});

const layout = {
  ratios: [70, 30],
  children: [
    "3d",
    {
      direction: "column",
      ratios: [40, 60],
      children: [
        "2d",
        "properties"
      ],
    },
  ],
};

bimdataViewer.mount("#viewer", layout);
```

And you get the following layout:

<img width=400px src="/assets/img/viewer/layout-with-window-names.png" alt="Viewer layout with window names">

## BIMData Logo and Viewer Version

By default, the BIMData Logo and the Viewer version are displayed on the UI. They may change location depending on the number of [**Windows**](../reference/window.html). If only one [**Window**](../reference/window.html) without [**Header**](../reference/header.html), they are displayed on the bottom left corner of the UI. Else, they are displayed on the right of the [**Header**](../reference/header.html).

They can be removed using the `ui` property of the [`makeBIMDataViewer`](../reference/makeBIMDataViewer.html) configuration parameter:

```js
const bimdataViewer = makeBIMDataViewer({
    ui: {
      bimdataLogo: false,
      version: false,
  },
});
```

## Colors 🎨

You can change the colors of the viewer and the BIMData Design System components.

All customizable colors are defined in the [BIMData Design System documentation](https://design.bimdata.io/guidelines-utilities/colors)

You can overide any color you want to change using a value as a `string` representing any valid CSS value ("red", "#FF0000", "rgb(255, 0, 0)", etc).

```javascript
const bimdataViewer = makeBIMDataViewer({
  /* */
  ui: {
    style: {
      backgroundColor: "",
      colorPrimary: "",
      colorPrimaryLighter: "",
      colorPrimaryLight: "",
      colorPrimaryDark: "",
      colorSecondary: "",
      colorSecondaryLight: "",
      colorSecondaryLighter: "",
      colorSecondaryDark: "",
      colorSilverLight: "",
      colorSilver: "",
      colorSilverDark: "",
      colorGraniteLight: "",
      colorGranite: "",
      colorSuccess: "",
      colorSuccessLight: "",
      colorSuccessLighter: "",
      colorSuccessDark: "",
      colorWarning: "",
      colorWarningLight: "",
      colorWarningLighter: "",
      colorWarningDark: "",
      colorHigh: "",
      colorHighLight: "",
      colorHighLighter: "",
      colorHighDark: "",
      colorText: "",
      headerHeight: "",
    },
  },
});
```
