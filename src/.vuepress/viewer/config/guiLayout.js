export default function (viewerElementId) {
  const bimdataViewer = makeBIMDataViewer({
    api: {
      accessToken: "fZ5CP4g2QQlj2KBXxqdl2jTNokiESIde",
      cloudId: 11520,
      projectId: 245620,
    },
    ui: {
      header: false,
      bimdataLogo: false,
      version: false,
    },
    plugins: false,
  });

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

  bimdataViewer.mount(viewerElementId, layout);
}