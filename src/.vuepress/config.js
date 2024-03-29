const sidebar = require("./sidebar.js");

module.exports = {
  title: "Documentation",
  head: [["link", { rel: "icon", href: "/assets/img/favicon.svg", type: "image/svg+xml" }]],
  themeConfig: {
    logo: "/assets/img/logo.svg",
    repo: "bimdata/documentation-next",
    docsBranch: "develop",
    editLinks: true,
    docsDir: "src",
    nav: [
      { text: "API", link: "/api/introduction/overview.html" },
      { text: "Viewer", link: "/viewer/" },
      { text: "On Premises", link: "/on-premises/getting_started.html" },
    ],
    sidebar,
    searchPlaceholder: "Search",
  },
  plugins: [
    () => ({
      alias: {
        '@SearchBox':
        "/src/.vuepress/components/SearchBox.vue"
      },
    })
  ]
};
