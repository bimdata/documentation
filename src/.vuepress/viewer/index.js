import simple from "./simple.js";
import pluginUi from "./pluginUi.js";
import windowUI from "./windowUI.js";

const configs = new Map([
  ["simple", simple],
  ["pluginUi", pluginUi],
  ["windowUI", windowUI],
]);

function makeViewer(config, id) {
  if (configs.has(config)) {
    return configs.get(config)(id);
  } else {
    throw new Error(
      `Impossible to make viewer because a config named ${config} does not exist.`
    );
  }
}

export default makeViewer;
