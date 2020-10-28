<template>
  <div class="documentation-bimdata-viewer-container">
    <div id="documentation-bimdata-viewer"></div>
  </div>
</template>

<script>
export default {
  mounted() {
    localStorage.setItem("BIMDataViewer_helpShown", true);
    const bimdataViewer = makeBIMDataViewer({
      locale: "fr",
      api: {
        ifcIds: [2283],
        cloudId: 515,
        projectId: 756,
        accessToken: "fc83e49ca9444d3ea41d212599f39040",
        apiUrl: "https://api-staging.bimdata.io",
      },
      ui: {
        windowManager: false,
      },
      plugins: {
        header: {
          warnings: false,
        },
        fullscreen: false,
        section: false,
        bcf: false,
      }
    });

    bimdataViewer.mount("#documentation-bimdata-viewer")
  }
}
</script>

<style>
.documentation-bimdata-viewer-container {
  height: 500px;
}
</style>