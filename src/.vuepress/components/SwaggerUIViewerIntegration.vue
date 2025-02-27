<template>
  <div id="bimdata-doc-swagger-ui"></div>
</template>

<script>
import { SwaggerUIBundle } from "swagger-ui-dist";

export default {
  async mounted() {
    SwaggerUIBundle({
      dom_id: "#bimdata-doc-swagger-ui",
      url: "https://api.bimdata.io/viewer-integration/doc.json",
      displayOperationId: true,
      docExpansion: "list",
      defaultModelsExpandDepth: -1,
    });
  },
};
</script>

<style>
@import "../../../node_modules/swagger-ui/dist/swagger-ui.css";
</style>