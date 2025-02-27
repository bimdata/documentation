<template>
  <div id="bimdata-doc-swagger-ui"></div>
</template>

<script>
import { SwaggerUIBundle } from "swagger-ui-dist";

const AdvancedFilterPlugin = function (system) {
  return {
    fn: {
      opsFilter: function (taggedOps, phrase) {
        phrase = phrase.toLowerCase()
        const normalTaggedOps = JSON.parse(JSON.stringify(taggedOps));
        for (let tagObj in normalTaggedOps) {
          const operations = normalTaggedOps[tagObj].operations;
          let i = operations.length;
          while (i--) {
            const operation = operations[i].operation;
            if ((operations[i].path.toLowerCase().indexOf(phrase) === -1)
              && (operation.summary.toLowerCase().indexOf(phrase) === -1)
              && ((operation.description || "").toLowerCase().indexOf(phrase) === -1)
            ) {
              operations.splice(i, 1);
            }
          }
          if (operations.length == 0 ) {
            delete normalTaggedOps[tagObj];
          }
          else {
            normalTaggedOps[tagObj].operations = operations;
          }
        }

        return system.Im.fromJS(normalTaggedOps);
      }
    }
  };
};

export default {
  async mounted() {
    SwaggerUIBundle({
      dom_id: "#bimdata-doc-swagger-ui",
      url: "https://api.bimdata.io/doc.json",
      displayOperationId: true,
      docExpansion: "none",
      filter: true,
      plugins: [
        AdvancedFilterPlugin
      ],
    });
  },
};
</script>

<style>
@import "../../../node_modules/swagger-ui/dist/swagger-ui.css";
</style>