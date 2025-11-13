import baseConfig from "./baseConfig.js";

export default function(viewerId) {
  const viewer = makeBIMDataViewer({
    ...baseConfig,
    api: {
      accessToken: "fZ5CP4g2QQlj2KBXxqdl2jTNokiESIde",
      cloudId: 11520,
      projectId: 245620,
      modelIds: [1203414],
      onlyLoadUuids: {
        1203414: ["3toKckUfH2jBmd$7xKi2GF"]
      },
    },
    plugins: {
      ...baseConfig.plugins,
      viewer2d: {
        compass: false,
        help: false,
        modelLoader: "hidden",
        storeySelectorAutoOpen: false,
      }
    }
  });

  viewer.mount(viewerId, {
    ratios: [50, 50],
    children: ["3d", "2d"]
  });
}
