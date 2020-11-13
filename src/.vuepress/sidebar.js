module.exports = {
  "/api/": getApiSidebar(),
  "/plateform/": [],
  "/viewer/": getViewerSidebar(),
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
    "ui",
    {
      title: "Plugins",
      collapsable: false,
      children: [
        "plugins/overview",
        "plugins/component_api",
        "plugins/$viewer",
        "plugins/state",
        "plugins/context_menu",
      ],
    },
    {
      title: "Examples",
      children: [
        "examples/plugins_ui",
        "examples/window_ui",
        "examples/shortcuts",
      ],
    },
    {
      title: "Viewer API",
      collapsable: false,
      children: [
        "api/makeBIMDataViewer",
        "api/mount",
      ],
    },
  ];
}
