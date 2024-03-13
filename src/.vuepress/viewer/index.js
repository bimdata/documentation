import contextMenu from "./config/contextMenu.js";
import hubs from "./config/hubs.js";
import planAnnotations from "./config/planAnnotations.js";
import pluginUI from "./config/pluginUI.js";
import shortcuts from "./config/shortcuts.js";
import simple from "./config/simple.js";
import state from "./config/state.js";
import windowUI from "./config/windowUI.js";
import defaultConfig from "./config/default.js";
import guiLayout from "./config/guiLayout.js";
import contextPlugins from "./config/contextPlugins.js";

const configs = new Map([
  ["contextMenu", contextMenu],
  ["hubs", hubs],
  ["guiLayout", guiLayout],
  ["contextPlugins", contextPlugins],
  ["planAnnotations", planAnnotations],
  ["pluginUI", pluginUI],
  ["shortcuts", shortcuts],
  ["simple", simple],
  ["state", state],
  ["windowUI", windowUI],
  ["default", defaultConfig],
]);

async function makeViewer(config, id) {
  await import(/* webpackIgnore: true */ "https://cdn.jsdelivr.net/npm/@bimdata/viewer@2.0.0-beta.148");
  if (configs.has(config)) {
    return configs.get(config)(id);
  } else {
    throw new Error(`Fail to setup viewer, config ${config} does not exist.`);
  }
}

export default makeViewer;
