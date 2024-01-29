import contextMenu from "./config/contextMenu.js";
import hubs from "./config/hubs.js";
import planAnnotations from "./config/planAnnotations.js";
import pluginUi from "./config/pluginUi.js";
import shortcuts from "./config/shortcuts.js";
import simple from "./config/simple.js";
import state from "./config/state.js";
import windowUI from "./config/windowUI.js";

const configs = new Map([
  ["contextMenu", contextMenu],
  ["hubs", hubs],
  ["planAnnotations", planAnnotations],
  ["pluginUi", pluginUi],
  ["shortcuts", shortcuts],
  ["simple", simple],
  ["state", state],
  ["windowUI", windowUI],
]);

async function makeViewer(config, id) {
  await import(/* webpackIgnore: true */ "https://cdn.jsdelivr.net/npm/@bimdata/viewer@2.0.0-beta.104");
  if (configs.has(config)) {
    return configs.get(config)(id);
  } else {
    throw new Error(
      `Impossible to make viewer because a config named ${config} does not exist.`
    );
  }
}

export default makeViewer;
