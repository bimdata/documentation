# makeBIMDataViewer

`makeBIMDataViewer` is the function that is available after [importing the viewer](/viewer/getting_started/quick_start).

```javascript
import makeBIMDataViewer from "@bimdata/viewer";

const bimdataViewer = makeBIMDataViewer({/* configuration object */});
```

It takes a configuration `object` that accept the following properties :

### locale: string

A string to determine the locale of the viewer. Available options: `en` or `fr`;

## api

### ifcIds: number[]
An array of IFC ids to load.

### cloudId: number
The cloud id.

### projectId: number
The project id.

### accessToken: string
The access token.

### apiUrl: string
The BIMData api url.

# mount


