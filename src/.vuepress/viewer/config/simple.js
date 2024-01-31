import baseConfig from "./baseConfig.js";

export default function(viewerId) {
  const viewer = makeBIMDataViewer(baseConfig);
  viewer.mount(viewerId, "3d");
}