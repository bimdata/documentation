export default function(canvasId) {
  const viewer = makeBIMDataViewer({
    locale: "fr",
    api: {
      ifcIds: [2283],
      cloudId: 515,
      projectId: 756,
      accessToken: "fc83e49ca9444d3ea41d212599f39040",
      apiUrl: "https://api-staging.bimdata.io",
    },
    ui: {
      windowManager: false,
    },
    plugins: {
      header: {
        warnings: false,
      },
      fullscreen: false,
      section: false,
      bcf: false,
    },
  });

  viewer.mount(`#${canvasId}`);
}