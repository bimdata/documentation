export default function(id) {
  const viewer = makeBIMDataViewer({
    ui: {
      headerVisible: false,
    },
  });

  viewer.registerPlugin({
    name: "plugin1",
    component: {
      template: "<div>Plugin 1</div>"
    },
    button: {
      position: "right",
      content: "simple",
      keepOpen: true,
    }
  });

  viewer.registerPlugin({
    name: "plugin2",
    component: {
      template: "<div>Plugin 2</div>"
    },
    button: {
      position: "right",
      content: "panel"
    }
  });

  viewer.registerPlugin({
    name: "plugin3",
    component: {
      template: "<div>Plugin 3</div>"
    },
    button: {
      position: "right",
    }
  });

  viewer.registerWindow({
    name: "window",
    plugins: [
      "plugin1",
      "plugin2",
      "plugin3",
    ],
  });

  viewer.mount(id, "window");
}
