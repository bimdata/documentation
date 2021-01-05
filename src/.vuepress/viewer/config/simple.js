export default function(viewerId) {
  const viewer = makeBIMDataViewer({
    locale: "fr",
    api: {
      ifcIds: [15097],
      cloudId: 10344,
      projectId: 237466,
      accessToken: "TAbdyPzoQeYgVSMe4GUKoCEfYctVhcwJ",
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
      windowSelector: false,
      search: false,
      "structure-properties": false,
    },
  });

  viewer.mount(`#${viewerId}`);
}