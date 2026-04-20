import baseConfig from "./baseConfig.js";

export default function(viewerId) {
  // Configure the viewer
  const viewer = makeBIMDataViewer(baseConfig);

  viewer.registerPlugin({ name: "test" });

  // Create and register windows
  const window1 = {
    name: "window1",
    plugins: ["test"],
  };

  const window2 = {
    name: "window2",
    plugins: ["test"],
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
