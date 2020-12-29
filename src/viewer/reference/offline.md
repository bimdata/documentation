# Offline mode

The offline mode allows the viewer to work without network.

## Configuration

To enable the offline mode, you have to define the offlineOptions:

```javascript
const bimdataViewer = makeBIMDataViewer({
  api: {
    cloudId: 515,
    projectId: 756,
    ifcIds: [2283],
    accessToken: "fc83e49ca9444d3ea41d212599f39040", // Demo token
    apiUrl: "https://api-staging.bimdata.io",
  },
  offlineOptions: {
    allowUnmockedMethodsOnNetwork: false,
    data: [],
  },
});
```

### allowUnmockedMethodsOnNetwork

Allows the viewer to use network for write requests or if the mock fails.

### data

This is where the data will be injected to mock the API.

`data` is an array of Ifc object (as returned by the API) with a few more fields.

| Property                 | Description                                                              |
| ------------------------ | ------------------------------------------------------------------------ |
| `id: number`             | The id of the ifc.                                                       |
| `name: string`           | The name of the ifc.                                                     |
| `structure_file: string` | URI usable with fetch to retrieve the structure_file as send by the API. |
| `xkt_file: string`       | URL usable with fetch to retrive the xkt file as send by the API.        |
| `errors: string[]`       | Array of errors string as returned by the API.                           |
| `warnings: string[]`     | Array of warning string as returned by the API.                          |
| `rawElements: object`    | The response of getRawElements of the API.                               |
| `zones: object`          | The response of getZones of the API.                                     |

Those are the required fields for the viewer. Some plugins may need more field to work offline and plugins may be not compatible with the offline mode.
Basically, it's the IFC response with `xxx_file` updated and `rawElements` and `zones` added.

For `structure_file` and `xkt_file`:

- You can use a local webserver (eg: in an Electron context)
- Use [createObjectURL](https://developer.mozilla.org/fr/docs/Web/API/URL/createObjectURL) to create a readable URL from binary data (eg: on iOS)
- Use any URL and catch the query with an interceptor (eg: on Android you can use [shouldInterceptRequest](<https://developer.android.com/reference/android/webkit/WebViewClient#shouldInterceptRequest(android.webkit.WebView,%20android.webkit.WebResourceRequest)>))

```javascript
const data = [
  {
    id: 2283,
    name: "my_model.ifc",
    status: "C",
    structure_file: "http://localhost:8081/structure.json",
    xkt_file: "http://localhost:8081/model.xkt",
    errors: [],
    warnings: [],
    rawElements: rawElements,
    zones: zones,
  },
  {
    ...anotherIfc,
  },
];
```
