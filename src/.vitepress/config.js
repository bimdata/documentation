import { defineConfig } from "vitepress";
import sidebar from "./sidebar.js";
import llmstxt from 'vitepress-plugin-llms';


export default defineConfig({
  lang: "en-US",
  title: "Documentation",
  description: "BIMData Official Documentation",
  ignoreDeadLinks: "localhostLinks",
  appearance: false,
  markdown: {
    theme: 'one-dark-pro'
  },
  head: [
    ["link", { rel: "icon", href: "/images/favicon.svg", type: "image/svg+xml" }],
    [
      "link",
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@400;600&display=swap",
      },
    ],
  ],
  themeConfig: {
    siteTitle: false,
    logo: {
      light: "/images/logo.svg",
      alt: "BIMData",
    },
    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/bimdata/documentation",
      },
    ],
    nav: [
      { text: "API", link: "/api/introduction/overview.html" },
      { text: "Viewer", link: "/viewer/" },
      { text: "On Premises", link: "/on-premises/getting_started.html" },
      { text: "User Guide", link: "/user-guide/creer-un-compte-bimdata.html" },
    ],
    sidebar,
    search: {
      provider: "local",
    },
  },

  // This is to avoid 'legacy-js-api' warnings
  // (see: https://sass-lang.com/documentation/breaking-changes/legacy-js-api/#bundlers)
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          api: "modern-compiler",
        },
      },
    },
    ssr: {
      noExternal: ["@bimdata/design-system"]
    },
    plugins: [llmstxt()],
  },
});
