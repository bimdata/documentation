import contextMenu from "./config/contextMenu.js";
import contextPlugins from "./config/contextPlugins.js";
import globalComponents from "./config/globalComponents.js";
import guiLayout from "./config/guiLayout.js";
import hubs from "./config/hubs.js";
import ifcAnnotations from "./config/ifcAnnotations.js";
import layoutManipulation from "./config/layoutManipulation.js";
import planAnnotations from "./config/planAnnotations.js";
import pluginUI from "./config/pluginUI.js";
import shortcuts from "./config/shortcuts.js";
import simple from "./config/simple.js";
import state from "./config/state.js";
import windowUI from "./config/windowUI.js";

const configs = new Map([
  ["contextMenu", contextMenu],
  ["contextPlugins", contextPlugins],
  ["globalComponents", globalComponents],
  ["guiLayout", guiLayout],
  ["hubs", hubs],
  ["ifcAnnotations", ifcAnnotations],
  ["layoutManipulation", layoutManipulation],
  ["planAnnotations", planAnnotations],
  ["pluginUI", pluginUI],
  ["shortcuts", shortcuts],
  ["simple", simple],
  ["state", state],
  ["windowUI", windowUI],
]);

async function makeViewer(config, id) {
  await import(/* webpackIgnore: true */ "https://cdn.jsdelivr.net/npm/@bimdata/viewer@2.4.1");
  if (configs.has(config)) {
    return configs.get(config)(id);
  } else {
    throw new Error(`Fail to setup viewer, config ${config} does not exist.`);
  }
}

export default makeViewer;
