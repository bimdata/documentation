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
    "customize_the_ui",
    {
      title: "Develop your plugins",
      children: [
        "plugins/overview",
        "plugins/plugin_as_button",
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
        "examples/context_menu",
        "examples/state",
        "examples/plugins_communication",
      ],
    },
    {
      title: "Reference",
      children: [
        "reference/makeBIMDataViewer",
        "reference/mount",
      ],
    },
  ];
}
