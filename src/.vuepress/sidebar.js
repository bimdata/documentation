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
    {
      title: "Getting Started",
      collapsable: false,
      children: [
        "getting_started/quick_start",
        "getting_started/own_models",
        "getting_started/native_plugins",
      ],
    },
    {
      title: "Customize the viewer",
      collapsable: false,
      children: ["customize_the_viewer/ui"],
    },
    ["api", "Viewer API"],
  ];
}
