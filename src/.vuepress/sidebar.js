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
    {
      title: "Guide",
      children: [
        "guide/",
        "guide/style_and_personalization",
      ],
    },
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
    "offline_mode",
    {
      title: "Examples",
      path: "examples/",
      children: [
        "examples/plan_annotations"
      ], 
    },
    {
      title: "Reference",
      children: [
        "reference/makeBIMDataViewer",
        "reference/mount",
        "reference/$viewer",
        "reference/state",
        "reference/global_context",
        "reference/local_context",
        "reference/context_menu",
        "reference/native_plugins",
        "reference/viewer_plugins",
        "reference/global_components",
        "reference/hubs",
      ],
    },
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
