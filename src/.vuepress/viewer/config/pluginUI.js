import baseConfig from "./baseConfig.js";

export default function(viewerId) {
  // Configure the viewer
  const viewer = makeBIMDataViewer(baseConfig);

  // Create components
  const component1 = {
    name: "Component_1",
    template: `
      <div style="height: 100%; display: flex; justify-content: center; align-items: center;">
        Component 1
      </div>`,
  };

  const component2 = {
    name: "Component_2",
    template: `
      <div style="height: 100%; display: flex; justify-content: center; align-items: center;">
        Component 2
      </div>`,
  };

  const component3 = {
    name: "Component_3",
    template: "<div>Component 3</div>",
  };

  // Create and register plugins
  const plugin1 = {
    name: "plugin1",
    component: component1,
  };

  const plugin2 = {
    name: "plugin2",
    component: component2,
  };

  const plugin3 = {
    name: "plugin3",
    component: component3,
    button: {
      position: "right",
      content: "simple",
      keepOpen: true,
    },
  };

  viewer.registerPlugin(plugin1);
  viewer.registerPlugin(plugin2);
  viewer.registerPlugin(plugin3);

  // Create and register windows
  const window1 = {
    name: "window1",
    plugins: ["plugin1"],
  };

  const window2 = {
    name: "window2",
    plugins: ["plugin2", "plugin3"],
  };

  viewer.registerWindow(window1);
  viewer.registerWindow(window2);

  // Define layout
  const layout = {
    ratios: [40, 60],
    children: [
      "3d",
      {
        ratios: [50, 50],
        direction: "column",
        children: ["window1", "window2"],
      },
    ],
  };

  viewer.mount(viewerId, layout);
}
