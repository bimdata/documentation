export default function(id) {
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
      header: false,
      fullscreen: false,
      section: false,
      bcf: false,
    },
  });

  viewer.registerPlugin({
    startupScript($viewer) {
      $viewer.state.hub.on("objects-selected", ({ objects }) =>
        $viewer.state.hideObjects(objects.map((o) => o.id))
      );
    },
  });

  viewer.mount(id);
}
