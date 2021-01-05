export default function(viewerId) {
  // Configure the viewer
  const viewer = makeBIMDataViewer({
    ui: {
      headerVisible: false,
    },
    api: {
      ifcIds: [15097],
      cloudId: 10344,
      projectId: 237466,
      accessToken: "TAbdyPzoQeYgVSMe4GUKoCEfYctVhcwJ",
    },
    plugins: {
      bcf: false,
      "structure-properties": false,
      fullscreen: false,
      section: false,
      search: false,
      projection: false,
      windowSelector: false,
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

  viewer.mount(`#${viewerId}`, customLayout);
}
