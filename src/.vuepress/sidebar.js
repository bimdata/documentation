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
    {
      title: "Tutorials",
      children: [
        "tutorials/",
        "tutorials/make_your_own_window_layout",
        "tutorials/plugins_ui",
        "tutorials/shortcuts",
        "tutorials/context_menu",
        "tutorials/state",
        "tutorials/plugins_communication",
      ],
    },
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
      title: "Reference",
      children: [
        "reference/makeBIMDataViewer",
        "reference/mount",
      ],
    },
  ];
}
