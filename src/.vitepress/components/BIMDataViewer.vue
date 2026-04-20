<template>
  <div class="bimdata-viewer-container">
    <div id="viewer"></div>
  </div>
</template>

<script>
import makeViewer from "../viewer/index.js";

export default {
  props: {
    config: {
      type: String,
      required: true,
    },
  },
  mounted() {
    localStorage.setItem("BIMDataViewer_helpShown", true);
    makeViewer(this.config, "#viewer");
  },
};
</script>

<style scoped>
.bimdata-viewer-container {
  height: 500px;
}
</style>
