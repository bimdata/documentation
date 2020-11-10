# Concepts

## Cloud

A cloud is a set of projects sharing the same configuration. Each projects contains your models, your Document Management System and BCFs. Cloud administrators are also projects admin by default, they can see every user in their cloud and change everyone’s roles. Cloud users can’t see cloud collaborators. This means that a contractor on a project can’t see every collaborators of the company.

![BIMData Connect](/assets/img/api/API-cloud.png)

## Project

A project is a place where IFC files and documents are stored. IFC files and documents can be uploaded and organized, checkplans are defined. A project is attached to a cloud and a cloud can host an infinite number of projects.

A project may contains:

- IFCs
- Document Management System
- BCFs
- ...

::: tip Note
A BCF is linked to a Project, not a Model.
:::

A project member can see all other members, and an admin member can manage the users of the project.

![BIMData Connect](/assets/img/api/API-project.png)

## IFC

BIMData API exposes a lot of tools to extract, update and manipulate information from IFC files.

The tools are compatible with IFC2x3TC1 and IFC4 Add2.

Depending on the options you chose, you can:

- Retrieve the model as a 3D GLTF file?
- Retrieve elements and properties.
- Retrieve the spatial structure.
- Retrieve classifications, systems and zones.
- Retrieve 2D plans in SVG format.

![BIMData Connect](/assets/img/api/API-ifc.png)

### Upload an IFC

To upload an IFC file, you have to [upload a `document`](#upload-a-document). When the BIMData API detects an IFC format (based on the file name ending with `.ifc` or `.ifczip`), it will trigger the IFC process.

IFC files are tied to a `document` which represents the actual uploaded file. We use HTTP Compression to speed up the file transfer. HTTP Compression will start as soon as you upload a file. Files are decompressed at the output of the API.

There is no size limit to the IFC upload.

### Workflow

After being uploaded, the IFC will be processed on our servers.

::: tip Note
The process takes from few minutes to an hour depending on the size of the file and the options activated.
:::

You can follow the progress on the `status` field:

| Status |    Name    | Description                                                                                                                    |
| :----: | :--------: | :----------------------------------------------------------------------------------------------------------------------------- |
|   P    |  Pending   | Your IFC will soon be processed.                                                                                               |
|   I    | In process | The process has started.                                                                                                       |
|   C    | Completed  | The process is complete and you can retrieve data from the API.                                                                 |
|   E    |   Error    | The process has failed. It’s more likely to be a problem on our side. An alert is triggered and our team will fix it promptly. |

## Folders & Documents

The API exposes a complete set of methods to upload and manage documents.

![BIMData Connect](/assets/img/api/API-folder&document.png)

### Folders

Every project is created with a root folder. It is the starting point to create other folders or upload documents.

#### Example

Fetching `https://api.bimdata.io/cloud/1/project/1` returns : (with the correct granted access)

```json
{
    "id": 1,
    "name": "my project",
    "cloud": {...},
    "status": "A",
    "created_at": "2017-12-01T10:09:54Z",
    "updated_at": "2018-02-21T17:07:25Z",
    "root_folder_id": 3,
}
```

::: tip Note

- If a folder is created without `parent_id`, it will be placed under the root folder.
- You can’t create a loop with folders (a parent being itself or a loop including multiple folders).
  :::

### Documents

BIMData API allows you to upload any kind of file (IFC, Office, images, binaries, etc.). Those files are named `documents`. You can define in which folder you want to put the file using a `parent_id`.

#### Upload a document

File upload is one of the few API calls which does not use the `application/json` Content Type. This call uses `x-www-urlencoded` with `form-data`. The name of the file field must be `“file”`, this means that you have to fire multiple calls if you want to upload many files.

<code-group>
<code-block title="cURL">

```bash
curl -X POST \
'https://api.bimdata.io/cloud/1/project/1/document' \
-H 'authorization: Bearer ZeZr9oYxHspA8OdSCo9uftaLaEHX1N' \
-H 'content-type: multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW' \
-F name=my_custom_name \
-F file=@/path/to/XXX.pdf
```

</code-block >
<code-block title="python">

```python
import requests

url = "https://api.bimdata.io/cloud/1/project/1/document"

headers = {
    'authorization': 'Bearer ZeZr9oYxHspA8OdSCo9uftaLaEHX1N',
}

payload = {
    'name': 'my_custom_name',
}

files = {'file': open('/path/to/XXX.pdf', 'rb')}

response = requests.request("POST", url, data=payload, files=files, headers=headers)

print(response.text)
```

</code-block >
<code-block title="javascript">

```javascript
var fs = require("fs");
var request = require("request");

var options = {
  method: "POST",
  url: "https://api.bimdata.io/cloud/1/project/1/document",
  headers: {
    authorization: "Bearer ZeZr9oYxHspA8OdSCo9uftaLaEHX1N",
    "content-type":
      "multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW",
  },
  formData: {
    name: "my_custom_name",
    file: {
      value: 'fs.createReadStream("/path/to/XXX.pdf")',
      options: { filename: "/path/to/XXX.pdf", contentType: null },
    },
  },
};

request(options, function(error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});
```

</code-block >
</code-group>

Response example :

```json
{
  "id": 424,
  "parent": 1,
  "creator": 134,
  "project": "1",
  "name": "my_custom_name",
  "file_name": "XXX.pdf",
  "description": null,
  "file": "https://storage.gra3.cloud.ovh.net/v1/AUTH_b6a1c0b6b7c041d3a71d56f84ce25102/bimdata-staging-dev/cloud_1/project_1/XXX.pdf?temp_url_sig=311d34059bbebc87cd7f37de244bb6b62d114679&temp_url_expires=1527771256",
  "size": 175780,
  "created_at": "2018-05-31T12:24:16Z",
  "updated_at": "2018-05-31T12:24:16Z",
  "ifc_id": null,
  "parent_id": 1
}
```

::: tip Note
The filesize is the compressed size and not the actual size of the initial file due to HTTP Compression.
:::

#### Download a document

You can download files using the URL returned by the API. The URL is valid for 1 hour.

<code-group>
<code-block title="cURL">

```bash
curl -X GET \
'https://storage.gra3.cloud.ovh.net/v1/AUTH_b6a1c0b6b7c041d3a71d56f84ce25102/bimdata-staging-dev/cloud_1/project_1/XXX.pdf?temp_url_sig=311d34059bbebc87cd7f37de244bb6b62d114679&temp_url_expires=1527771256'
```

</code-block>

<code-block title="python">

```python
import requests

url = "https://api.bimdata.io/cloud/1/project/1/ifc"

querystring = {"status":"C"}

headers = {
    'Content-Type': "application/json",
    'Authorization': "Bearer ZeZr9oYxHspA8OdSCo9uftaLaEHX1N",
    }

response = requests.request("GET", url, headers=headers, params=querystring)

print(response.text)
```

</code-block>
<code-block title="javascript">

```javascript
const url =
  "https://storage.gra3.cloud.ovh.net/v1/AUTH_b6a1c0b6b7c041d3a71d56f84ce25102/bimdata-staging-dev/cloud_1/project_1/XXX.pdf?temp_url_sig=311d34059bbebc87cd7f37de244bb6b62d114679&temp_url_expires=1527771256";

const response = await fetch(url);

console.log(await response.text());
```

</code-block>
</code-group>
