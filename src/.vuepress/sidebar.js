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
    "viewer-reference",
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
        "guide/plugins",
      ],
    },
    {
      title: "Examples",
      path: "/viewer/examples/",
      children: [
        "examples/gui_layout",
        "examples/context_plugins",
        "examples/layout_manipulation",
        "examples/ifc_annotations",
        "examples/plan_annotations",
        "examples/global_components",
        "examples/partial_loading",
      ],
    },
    {
      title: "Reference",
      path: "/viewer/reference/",
      children: [
        "reference/window",
        "reference/plugin",
        "reference/makeBIMDataViewer",
        "reference/mount",
        "reference/$viewer",
        "reference/state",
        "reference/global_context",
        "reference/local_context",
        "reference/context_menu",
        "reference/keyboard_shortcuts",
        "reference/header",
        "reference/native_plugins",
        "reference/viewer_plugins",
        "reference/global_components",
        "reference/hubs",
        "reference/annotations",
        "reference/offline_mode",
      ],
    },
    "mobile",
    "viewer_sdk",
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
