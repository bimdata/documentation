<template>
  <div class="documentation-bimdata-viewer-container">
    <div id="documentation-bimdata-viewer"></div>
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

    const bimdataViewer = makeViewer(
      this.config,
      "documentation-bimdata-viewer"
    );
  },
};
</script>

<style>
.documentation-bimdata-viewer-container {
  height: 500px;
}
</style>
