<template>
  <div>
    <div style="width: 300px;">
      <BIMDataInput v-model="filter" placeholder="Enter a keyword" ref="input"/>
    </div>
    <ul style="list-style: none; padding: 0;">
      <li v-for="item in filteredReference" :key="item.title">
        <a :href="item.link">{{ item.title }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
import { BIMDataInput } from "@bimdata/design-system";

export default {
  components: {
    BIMDataInput,
  },
  data() {
    return {
      filter: "",
      reference: [
        {
          title: "$viewer",
          link: "/viewer/reference/$viewer.html"
        },
        {
          title: "Annotation API",
          link: "/viewer/reference/annotations.html"
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
          title: "Native Plugins",
          link: "/viewer/reference/native_plugins.html"
        },
        {
          title: "Offline Mode",
          link: "/viewer/reference/offline_mode.html"
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
  mounted() {
    this.$refs.input.focus();
  },
  computed: {
    filteredReference() {
      return this.reference.filter((item) => {
        return item.title.toLowerCase().includes(this.filter.toLowerCase());
      });
    }
  }
}
</script>

<style scoped lang="scss">
@import "../../../node_modules/@bimdata/design-system/dist/css/design-system.css";
@import "../../../node_modules/@bimdata/design-system/dist/scss/_BIMDataVariables.scss";
</style>