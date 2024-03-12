<template>
  <div>
    <SearchBox searchPaths="/viewer/reference/"/>
    <ul style="list-style: none; padding: 0;">
      <li v-for="item in reference" :key="item.title">
        <a :href="item.link">{{ item.title }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
import { BIMDataInput } from "@bimdata/design-system";

import SearchBox from './SearchBox.vue';

export default {
  components: {
    BIMDataInput,
    SearchBox
  },
  data() {
    return {
      reference: [
        {
          title: "$viewer",
          link: "/viewer/reference/$viewer.html"
        },
        {
          title: "Context menu",
          link: "/viewer/reference/context_menu.html"
        },
        {
          title: "Global Components",
          link: "/viewer/reference/global_components.html"
        },
        {
          title: "Global Context",
          link: "/viewer/reference/global_context.html"
        },
        {
          title: "Header",
          link: "/viewer/reference/header.html"
        },
        {
          title: "Hubs",
          link: "/viewer/reference/hubs.html"
        },
        {
          title: "Keyboard Shortcuts",
          link: "/viewer/reference/keyboard_shortcuts.html"
        },
        {
          title: "Local Context",
          link: "/viewer/reference/local_context.html"
        },
        {
          title: "makeBIMDataViewer",
          link: "/viewer/reference/makeBIMDataViewer.html"
        },
        {
          title: "mount",
          link: "/viewer/reference/mount.html"
        },
        {
          title: "Layout",
          link: "/viewer/reference/layout.html"
        },
        {
          title: "Native Plugins",
          link: "/viewer/reference/native_plugins.html"
        },
        {
          title: "Offline Model",
          link: "/viewer/reference/offline_model.html"
        },
        {
          title: "Plugin",
          link: "/viewer/reference/plugin.html"
        },
        {
          title: "State",
          link: "/viewer/reference/state.html"
        },
        {
          title: "Viewer Plugins",
          link: "/viewer/reference/viewer_plugins.html"
        },
        {
          title: "Window",
          link: "/viewer/reference/window.html"
        },
      ]
    }
  },
}
</script>

<style scoped lang="scss">
@import "../../../node_modules/@bimdata/design-system/dist/css/design-system.css";
@import "../../../node_modules/@bimdata/design-system/dist/scss/_BIMDataVariables.scss";
</style>