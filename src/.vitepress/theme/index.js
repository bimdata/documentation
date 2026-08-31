import DefaultTheme from "vitepress/theme";
import { h } from "vue";

import "./custom.css";
import "./footer.css";

import BIMDataViewer from "../components/BIMDataViewer.vue";
import Footer from "./components/Footer.vue";

/** @type {import('vitepress').Theme} */
export default {
  extends: DefaultTheme,

  Layout: () =>
    h(DefaultTheme.Layout, null, {
      "layout-bottom": () => h(Footer),
    }),

  enhanceApp({ app }) {
    app.component("BIMDataViewer", BIMDataViewer);
  },
};