export default function (viewerElementId) {
  const bimdataViewer = makeBIMDataViewer({
    // do not display the header, the bimdata logo and the viewer version
    api: {
      accessToken: "fZ5CP4g2QQlj2KBXxqdl2jTNokiESIde",
      cloudId: 11520,
      projectId: 245620,
    },
    ui: {
      header: false,
      bimdataLogo: false,
      version: false,
    },
    // remove all native plugins
    plugins: false,
  });

  bimdataViewer.registerPlugin({
    name: "plugin-1",
    component: {
      template: `
        <div style="position: relative; height: 100%;">
          <BIMDataNoModelWindowPlaceHolder v-if="$viewer.localContext.loadedModels.length === 0" />
          <BIMDataModelLoader />
          <BIMDataStoreySelector style="position: absolute; left: var(--spacing-unit); bottom: var(--spacing-unit);"/>

          <div style="height: 100%; display: flex; flex-direction: column; justify-content: center; align-items: center;" v-if="$viewer.localContext.loadedModels.length > 0">
            <div> LoadedModel name = {{ $viewer.localContext.loadedModels[0].name }}</div>
            <div v-if="!$viewer.localContext.selectedStorey">Please select a storey</div>
            <div v-else> Selected storey name = {{ $viewer.localContext.selectedStorey.name }}</div>
          </div>
        </div>`,
    },
    window: {
      name: "window-1",
      header: false,
      modelTypes: ["IFC"],
      multiModel: false,
    },
  });

  bimdataViewer.mount("#viewer", "window-1");
}