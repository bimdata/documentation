export default function(viewerId) {
  const viewer = makeBIMDataViewer({
    locale: "fr",
    api: {
      modelIds: [15097],
      cloudId: 10344,
      projectId: 237466,
      accessToken: "TAbdyPzoQeYgVSMe4GUKoCEfYctVhcwJ",
    },
    ui: {
      version: false,
      bimdataLogo: false,
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
    }
  });

  viewer.mount(`#${viewerId}`);
}