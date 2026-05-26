import { defineConfig } from "vitepress";
import sidebar from "./sidebar.js";

export default defineConfig({
  lang: "en-US",
  title: "Documentation",
  description: "BIMData Official Documentation",
  head: [
    ["link", { rel: "icon", href: "/images/favicon.svg", type: "image/svg+xml" }]
  ],
  themeConfig: {
    siteTitle: false,
    logo: "/images/logo.svg",
    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/bimdata/documentation",
      }
    ],
    nav: [
      { text: "API", link: "/api/introduction/overview.html" },
      { text: "Viewer", link: "/viewer/" },
      { text: "On Premises", link: "/on-premises/getting_started.html" },
      { text: "User Guide", link: "/user-guide/creer-un-compte-bimdata.html" },
    ],
    sidebar,
  },

  // This is to avoid 'legacy-js-api' warnings
  // (see: https://sass-lang.com/documentation/breaking-changes/legacy-js-api/#bundlers)
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          api: "modern-compiler"
        }
      }
    }
  }
});
