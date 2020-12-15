const sidebar = require("./sidebar.js");

module.exports = {
  head: [
    ['link', { rel: 'icon', href: '/assets/img/favicon.svg', type: "image/svg+xml" }],
    ['script', { src: "https://www.unpkg.com/@bimdata/viewer@1.1.0" }]
  ],
  themeConfig: {
    logo: '/assets/img/logo.svg',
    repo: 'bimdata/documentation-next',
    docsBranch: 'develop',
    editLinks: true,
    docsDir: 'src',
    nav: [
      { text: 'API', link: '/api/introduction/overview.html' },
      { text: 'Viewer', link: '/viewer/' },
    ],
    sidebar
  },
}
