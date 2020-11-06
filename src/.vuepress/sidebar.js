module.exports = {
  '/api/': getApiSidebar(),
  '/plateform/': [],
  '/viewer/': getViewerSidebar(),
}

function getApiSidebar() {
  return [
    '',
    'external_libraries',
   {
     title: 'Guides',
     collapsable: false,
     children: [
       'guides/cloud',
       'guides/project',
       'guides/ifc',
       'guides/folder&document',
       'guides/access_token',
       'guides/application',
       'guides/authentication',
       'guides/scopes',
       'guides/share_data',
       'guides/security',
     ]
   } ,
    'reference'
  ]
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