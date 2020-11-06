const sidebar = require("./sidebar.js");

module.exports = {
  title: "Documentation",
  head: [
    ['link', { rel: 'icon', href: '/assets/img/favicon.svg', type: "image/svg+xml" }],
    ['script', { src: "https://www.unpkg.com/@bimdata/viewer@1.0.0" }]
  ],
  themeConfig: {
    logo: '/assets/img/logo.svg',
    repo: 'bimdata/documentation-next',
    editLinks: true,
    docsDir: 'src',
    nav: [
      { text: 'API', link: '/api/' },
      { text: 'Viewer', link: '/viewer/' },
    ],
    sidebar
  },
}
