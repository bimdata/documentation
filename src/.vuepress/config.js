module.exports = {
  title: "Documentation",
  head: [
    ['link', { rel: 'icon', href: '/assets/img/favicon.svg', type: "image/svg+xml" }],
    ['script', { src: "https://www.unpkg.com/@bimdata/viewer@1.0.0" }]
  ],
  themeConfig: {
    logo: '/assets/img/logo.svg',
    nav: [
      { text: 'API', link: '/api/' },
      { text: 'Platform', link: '/platform/' },
      { text: 'Viewer', link: '/viewer/' },
      { text: 'Github', link: 'https://github.com/bimdata/documentation-next' }
    ],
    sidebar: {
      '/api/': [],
      '/plateform/': [],
      '/viewer/': getViewerSidebar(),
    }
  }
}

function getViewerSidebar() {
  return [
    '',
    {
      title: 'Getting Started',
      collapsable: false,
      children: [
        'getting_started/quick_start',
        'getting_started/own_models',
        'getting_started/native_plugins',
      ]
    },
    {
      title: 'Customize the viewer',
      collapsable: false,
      children: [
        'customize_the_viewer/ui',
      ]
    },
    ['api', 'Viewer API'],
  ]
}