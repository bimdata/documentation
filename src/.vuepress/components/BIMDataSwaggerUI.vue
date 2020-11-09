<template>
  <div id="bimdata-doc-swagger-ui"></div>
</template>

<script>
export default {
  async mounted() {
    try {
      const module = await import(
        "../../../node_modules/swagger-ui/dist/swagger-ui-es-bundle.js"
      );
      const SwaggerUI = module.default;
      SwaggerUI({
        dom_id: "#bimdata-doc-swagger-ui",
        url: "https://api-staging.bimdata.io/doc.json",
      });
    } catch (e) {
      console.error("Impossible to display reference", e);
    }
  },
};
</script>

<style>
@import "../../../node_modules/swagger-ui/dist/swagger-ui.css";
</style>