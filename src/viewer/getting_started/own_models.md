# Own models

To use your own models on the BIMData Viewer, you first need to upload them using the [BIMData API](/api/introduction/overview.html).

Then, you can display them on the viewer user their identifications :

```javascript
const bimdataViewer = makeBIMDataViewer({
  api: {
    ifcIds: [XXX, XXX], // Your ifc ids
    cloudId: XXX, // Your cloud id
    projectId: XXX, // Your project id
    accessToken: XXX, // Your access token
    apiUrl: XXX, // The BIMData API URL you use
  },
});

bimdataViewer.mount("#viewer");
```