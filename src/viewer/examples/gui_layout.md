# GUI Layout

This example shows how to create a complex UI layout with 3 windows and 4 plugins. 3 plugins as button and one with default representation, displayed on the window area.

The plugins are registered first with different display options. Then the window, with registered plugins as children. Then the layout reference the registered window names.

### Demo

<ClientOnly>
  <BIMDataViewer config="guiLayout"/>
</ClientOnly>

### HTML

```html
<!DOCTYPE html>
<html lang="en" dir="ltr">

<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1.0" />
  <style>
    html,
    body {
      margin: 0;
      cursor: default;
    }
  </style>
  <title>BIMDataViewer</title>
</head>

<body>
  <div style="height: 100vh">
    <div id="viewer"></div>
  </div>
  <script type="module">
    import makeBIMDataViewer from "https://cdn.jsdelivr.net/npm/@bimdata/viewer@latest";

    const bimdataViewer = makeBIMDataViewer({
      // do not display the header, the bimdata logo and the viewer version
      ui: {
        header: false,
        bimdataLogo: false,
        version: false,
      },
      // remove all native plugins
      plugins: false,
    });

    /*** PLUGIN REGISTRATION ***/
    bimdataViewer.registerPlugin({
      name: "plugin-1",
      component: {
        template: "<div>Plugin 1</div>",
      },
      button: {
        position: "left",
        content: "simple",
      },
    });
    bimdataViewer.registerPlugin({
      name: "plugin-2",
      component: {
        template: "<div>Plugin 2</div>",
      },
      button: {
        position: "right",
        content: "panel",
        keepOpen: true,
        tooltip: "plugin-2.tooltip",
        icon: {
          component: "BIMDataIconLocation",
          options: { size: "m" },
        },
      },
      i18n: {
        en: {
          tooltip: "Location",
        },
        fr: {
          tooltip: "Localisation",
        },
      },
    });
    bimdataViewer.registerPlugin({
      name: "plugin-3",
      component: {
        template: "<div>Plugin 3</div>",
      },
      button: {
        position: "right",
        content: "free",
      },
    });
    bimdataViewer.registerPlugin({
      name: "plugin-4",
      component: {
        template: "<div style='height: 100%; display: flex; justify-content: center; align-items: center;'>Plugin 4</div>",
      },
    });

    /*** WINDOW REGISTRATION ***/
    bimdataViewer.registerWindow({
      name: "window-1",
      plugins: ["plugin-1"],
    });
    bimdataViewer.registerWindow({
      name: "window-2",
      plugins: ["plugin-2"],
    });
    bimdataViewer.registerWindow({
      name: "window-3",
      plugins: ["plugin-3", "plugin-4"],
    });

    /*** LAYOUT ***/
    const layout = {
      ratios: [25, 75],
      children: [
        "window-1",
        {
          ratios: [70, 30],
          direction: "column",
          children: ["window-2", "window-3"],
        },
      ],
    };

    bimdataViewer.mount("#viewer", layout);
  </script>
</body>

</html>
```