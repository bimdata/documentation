<template>
  <div id="bimdata-doc-swagger-ui"></div>
</template>

<script>
import {SwaggerUIBundle} from "swagger-ui-dist";

export default {
  async mounted() {
      SwaggerUIBundle({
        dom_id: "#bimdata-doc-swagger-ui",
        url: "https://api-staging.bimdata.io/doc.json",
      });
  },
};
</script>

<style>
@import "../../../node_modules/swagger-ui/dist/swagger-ui.css";
</style>