export default `<!DOCTYPE html>

<style>body { margin: 0 }</style>

<div id="viewer" style="height: 100vh"></div>

<script type="module">
  import makeBIMDataViewer from "https://cdn.jsdelivr.net/npm/@bimdata/viewer@latest";

  makeBIMDataViewer({ 
    api: {
      cloudId: 10344, projectId: 237466, modelIds: [15097],
      accessToken: "TAbdyPzoQeYgVSMe4GUKoCEfYctVhcwJ",
    }
  }).mount("#viewer");
<\/script>`;
