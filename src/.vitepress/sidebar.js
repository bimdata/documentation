export default {
  "/api/": getApiSidebar(),
  "/viewer/": getViewerSidebar(),
  "/on-premises/": getOnpremSidebar(),
  "/user-guide/": getUserGuideSidebar(),
};

function getApiSidebar() {
  return [
    {
      text: "Introduction",
      items: [
        { text: "Overview", link: "/api/introduction/overview" },
        { text: "Quick start", link: "/api/introduction/quick_start" },
        { text: "Concepts", link: "/api/introduction/concepts" },
      ],
    },
    {
      text: "Guides",
      items: [
        { text: "Create your application", link: "/api/guides/application" },
        { text: "Authentication", link: "/api/guides/authentication" },
        { text: "Share data between App and Platform", link: "/api/guides/share_data" },
        { text: "Scopes", link: "/api/guides/scopes" },
        { text: "Security", link: "/api/guides/security" },
        { text: "Webhooks", link: "/api/guides/webhooks" },
      ],
    },
    { text: "External libraries", link: "/api/external_libraries" },
    { text: "Reference", link: "/api/reference" },
    { text: "Viewer Reference", link: "/api/viewer-reference" },
    { text: "Support", link: "/api/support" },
  ];
}

function getViewerSidebar() {
  return [
    { text: "Getting Started", link: "/viewer/" },
    {
      text: "Guide",
      collapsed: false,
      items: [
        { text: "User Interface", link: "/viewer/guide/" },
        { text: "Plugins", link: "/viewer/guide/plugins" },
      ],
    },
    {
      text: "Examples",
      collapsed: false,
      items: [
        { text: "Layout", link: "/viewer/examples/gui_layout" },
        { text: "Layout Manipulation", link: "/viewer/examples/layout_manipulation" },
        { text: "Plugins Context", link: "/viewer/examples/context_plugins" },
        { text: "IFC Annotations", link: "/viewer/examples/ifc_annotations" },
        { text: "Plan Annotations", link: "/viewer/examples/plan_annotations" },
        { text: "Global components", link: "/viewer/examples/global_components" },
        { text: "Partial loading", link: "/viewer/examples/partial_loading" },
      ],
    },
    {
      text: "Reference",
      collapsed: true,
      items: [
        { text: "Window", link: "/viewer/reference/window" },
        { text: "Plugin", link: "/viewer/reference/plugin" },
        { text: "makeBIMDataViewer", link: "/viewer/reference/makeBIMDataViewer" },
        { text: "mount", link: "/viewer/reference/mount" },
        { text: "$viewer", link: "/viewer/reference/$viewer" },
        { text: "State", link: "/viewer/reference/state" },
        { text: "Global Context", link: "/viewer/reference/global_context" },
        { text: "Local Context", link: "/viewer/reference/local_context" },
        { text: "Context Menu", link: "/viewer/reference/context_menu" },
        { text: "Keyboard Shortcuts", link: "/viewer/reference/keyboard_shortcuts" },
        { text: "Header", link: "/viewer/reference/header" },
        { text: "Native Plugins", link: "/viewer/reference/native_plugins" },
        { text: "Viewer Plugins", link: "/viewer/reference/viewer_plugins" },
        { text: "Global Components", link: "/viewer/reference/global_components" },
        { text: "Event Hubs", link: "/viewer/reference/hubs" },
        { text: "Annotation API", link: "/viewer/reference/annotations" },
        { text: "Offline Mode", link: "/viewer/reference/offline_mode" },
      ],
    },
    { text: "Mobile", link: "/viewer/mobile" },
    { text: "Viewer SDK", link: "/viewer/viewer_sdk" },
    { text: "Release Notes", link: "/viewer/release_notes" },
  ];
}

function getOnpremSidebar() {
  return [
    { text: "Introduction", link: "/on-premises/getting_started" },
    {
      text: "Installation",
      items: [
        { text: "Prerequisites", link: "/on-premises/install/prerequisites" },
        {
          text: "Quickstart",
          items: [
            { text: "Installation", link: "/on-premises/install/quickstart/install" }, 
            { text: "Configuration", link: "/on-premises/install/quickstart/config" },
          ],
        },
        { text: "High availability", link: "/on-premises/install/high_availability" },
      ],
    },
    {
      text: "Configuration",
      items: [
        {
          text: "Containers environment",
          items: [
            { text: "BIMData API", link: "/on-premises/config/env/api" },
            { text: "BIMData Connect", link: "/on-premises/config/env/connect" },
            { text: "BIMData Platform Front", link: "/on-premises/config/env/platform_front" },
            { text: "BIMData Platform Back", link: "/on-premises/config/env/platform_back" },
            { text: "BIMData Archive", link: "/on-premises/config/env/archive" },
            { text: "BIMData workers", link: "/on-premises/config/env/workers" },
          ],
        },
      ],
    },
  ];
}

function getUserGuideSidebar() {
  return [
    {
      text: "Créer un compte BIMData",
      link: "/user-guide/creer-un-compte-bimdata",
    },
    {
      text: "BIMData Platform",
      items: [
        { text: "Tableau de bord", link: "/user-guide/bimdata-platform/tableau-de-bord" },
        { text: "Espace", link: "/user-guide/bimdata-platform/espace" },
        { text: "Compte de facturation", link: "/user-guide/bimdata-platform/compte-de-facturation" },
        { text: "Page projet", link: "/user-guide/bimdata-platform/page-projet" },
        {
          text: "GED",
          collapsed: true,
          items: [
            { text: "Introduction", link: "/user-guide/bimdata-platform/ged/introduction" },
            { text: "Navigation", link: "/user-guide/bimdata-platform/ged/navigation" },
            { text: "Arborescence", link: "/user-guide/bimdata-platform/ged/arborescence" },
            { text: "Droits d'accès", link: "/user-guide/bimdata-platform/ged/gestion-des-droits-d-acces" },
            { text: "Visa", link: "/user-guide/bimdata-platform/ged/visa" },
            { text: "Versioning", link: "/user-guide/bimdata-platform/ged/versionning" },
            { text: "Fonctionnalités avancées", link: "/user-guide/bimdata-platform/ged/fonctionnalites-avancees" },
          ],
        },
        { text: "BCF Plateforme", link: "/user-guide/bimdata-platform/bcf-plateforme" },
      ],
    },
  ];
}
