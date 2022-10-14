export default function(viewerId) {
  // Configure the viewer
  const viewer = makeBIMDataViewer({
    api: {
      modelIds: [15097],
      cloudId: 10344,
      projectId: 237466,
      accessToken: "TAbdyPzoQeYgVSMe4GUKoCEfYctVhcwJ",
    },
    ui: {
      version: false,
      bimdataLogo: false,
      menuVisible: false,
    },
    plugins: {
      bcf: false,
      fullscreen: false,
      measure3d: false,
      projection: false,
      search: false,
      section: false,
      "structure-properties": false,
      viewer3d: {
        navCube: false,
        help: false,
        modelLoader: "hidden",
      },
      "viewer3d-parameters": false,
      "window-split": false,
    },
  });

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

  // Mount custom layout
  const customLayout = {
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

  viewer.mount(`#${viewerId}`, customLayout);
}
