import DefaultTheme from "vitepress/theme";
import "./custom.css";

import BIMDataViewer from "../components/BIMDataViewer.vue";

/** @type {import('vitepress').Theme} */
export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component("BIMDataViewer", BIMDataViewer);
  },
};
