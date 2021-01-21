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
        "reference/offline",
      ],
    },
    "migration_guide",
    "release_notes",
  ];
}
