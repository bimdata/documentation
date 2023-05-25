module.exports = {
  "/api/": getApiSidebar(),
  "/plateform/": [],
  "/viewer/": getViewerSidebar(),
  "/on-premises/": getOnpremSidebar(),
};

function getApiSidebar() {
  return [
    {
      title: "Introduction",
      collapsable: false,
      children: [
        "introduction/overview",
        "introduction/quick_start",
        "introduction/concepts",
      ],
    },
    {
      title: "Guides",
      collapsable: false,
      children: [
        "guides/application",
        "guides/authentication",
        "guides/share_data",
        "guides/scopes",
        "guides/security",
        "guides/webhooks",
      ],
    },
    "external_libraries",
    "reference",
    "support",
  ];
}

function getViewerSidebar() {
  return [
    "",
    "getting_started",
    {
      title: "Tutorials",
      children: [
        "tutorials/",
        "tutorials/make_your_own_window_layout",
        "tutorials/add_plugins_on_windows",
        "tutorials/shortcuts",
        "tutorials/context_menu",
        "tutorials/state",
        "tutorials/hubs",
      ],
    },
    "customize_the_ui",
    {
      title: "Develop your plugins",
      children: [
        "plugins/overview",
        "plugins/plugin_as_button",
        "plugins/i18n",
      ],
    },
    "viewer_sdk",
    {
      title: "Reference",
      children: [
        "reference/makeBIMDataViewer",
        "reference/native_plugins",
        "reference/mount",
        "reference/$viewer",
        "reference/hubs",
        "reference/state",
        "reference/context_menu",
        "reference/global_components",
      ],
    },
    "migration_guide",
    "release_notes",
  ];
}

function getOnpremSidebar() {
  return [
    "getting_started",
    {
      title: "Installation",
      children: [
        "install/prerequisites",
        {
          title: "Quickstart",
          children: [
            "install/quickstart/install",
            "install/quickstart/config",
          ],
        },
        "install/high_availability",
      ],
    },
    {
      title: "Configuration",
      children: [
        {
          title: "Containers environment",
          children: [
            "config/env/api",
            "config/env/connect",
            "config/env/platform_front",
            "config/env/platform_back",
            "config/env/archive",
            "config/env/workers",
          ]
        }
      ]
    },
  ];
}
