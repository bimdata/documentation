export default function(canvasId) {
  // Configure the viewer
  const viewer = makeBIMDataViewer({
    ui: {
      headerVisible: false,
    },
    api: {
      ifcIds: [2283],
      cloudId: 515,
      projectId: 756,
      accessToken: "fc83e49ca9444d3ea41d212599f39040",
      apiUrl: "https://api-staging.bimdata.io",
    },
    plugins: {
      bcf: false,
      "structure-properties": false,
      fullscreen: false,
      section: false,
      search: false,
      projection: false,
    }
  });

  // Create and register windows
  const window1 = {
    name: "window1",
    plugins: [],
  };

  const window2 = {
    name: "window2",
    plugins: [],
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

  viewer.mount(canvasId, customLayout);
}
