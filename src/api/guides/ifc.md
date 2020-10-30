# IFC

BIMData API exposes a lot of tools for extract, update and manipulate information from IFC files.

The tools are compatible with IFC2x3TC1 and IFC4 Add2.

Depending on the options you chose, you can:

- Retrieve the model as a 3D GLTF file
- Retrieve elements and properties
- Retrieve the spatial structure
- Retrieve classifications, systems and zones
- Retrieve 2D plans in SVG format

## Upload an IFC

<div style="display:flex;">
  <div>
    <p>To upload an IFC file, you have to upload a `document`. When the BIMData API detects an IFC format (based on the file name ending with `.ifc` or `.ifczip`), it will trigger the IFC process.</p>
    <p>IFC files are tied to a `document` which represents the actual uploaded file. We use HTTP Compression to speed up the file transfer. HTTP Compression will start as soon as you upload a file. Files are decompressed at the output of the API.</p>
    <p>There is no size limit to the IFC upload.</p>
  </div>
 <img src="/assets/img/api/API-cloud_project_ifc.png" width="400px">
</div>

::: tip Note
The displayed filesize is the compressed size and not the actual size of the initial file.
:::

## Workflow

After being uploaded, the IFC will be processed on our servers.

::: tip Note
The process takes from few minutes to an hour depending on the size of the file and the options activated.
:::

You can follow the progress on the `status` field:

| Status |    Name    |                                                                                                                    Description |
| :------: | :--------: | :----------------------------------------------------------------------------------------------------------------------------- |
| P      |  Pending   |                                                                                                Your IFC will soon be processed |
| I      | In process |                                                                                                        The process has started |
| C      | Completed  |                                                                 The process is complete and you can retrieve data from the API |
| E      |   Error    | The process has failed. It’s more likely to be a problem on our side. An alert is triggered and our team will fix it promptly. |
