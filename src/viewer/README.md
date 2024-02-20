# Getting started

## Introduction

The BIMData Viewer is a tool for interacting with models of different formats like :
- <div style="align-items: center; display: flex; gap: 12px; margin-bottom: 6px;"><BIMDataIconFileIfc /> IFC </div>
- <div style="align-items: center; display: flex; gap: 12px; margin-bottom: 6px;"><BIMDataIconFilePlan /> Image (PDF, PNG, JPG) </div>
- <div style="align-items: center; display: flex; gap: 12px; margin-bottom: 6px;"><BIMDataIconFileDwg /> DWG </div>
- <div style="align-items: center; display: flex; gap: 12px; margin-bottom: 6px;"><BIMDataIconFileDxf /> DXF </div>
- <div style="align-items: center; display: flex; gap: 12px; margin-bottom: 6px;"><BIMDataIconFilePointCloud /> Point Cloud (PLY, LAS, LAZ). </div>

Each format is handled by its own native built-in viewer and interactions include **display**, **navigation**, **measurement** and **annotation**.

To use your own models on the BIMData Viewer, you can upload them using the [BIMData API](/api/introduction/overview.html) or using the [BIMData platform](https://platform.bimdata.io/).

[The UI can be customized](/viewer/customize_the_ui.html) to organize the workspace as you need and a flexible javascript API allows to create custom plugin to prefectly match your business.

<ViewerMainPage />

## Installation

You can install the [`@bimdata/viewer` package](https://www.npmjs.com/package/@bimdata/viewer) using **NPM** or directly download the BIMDataViewer from a **CDN**.

<code-group>

<code-block title="NPM" active>

```html
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8" />
    <title>BIMDataViewer - Quick start</title>
  </head>

  <body>
    <div style="height: 100vh;">
      <div id="viewer"></div>
    </div>

    <script type="module">
      import makeBIMDataViewer from "@bimdata/viewer"; // bundler needed

      const bimdataViewer = makeBIMDataViewer({
        api: {
          // demo identifications
          modelIds: [15097],
          cloudId: 10344,
          projectId: 237466,
          accessToken: "TAbdyPzoQeYgVSMe4GUKoCEfYctVhcwJ",
        },
      });

      bimdataViewer.mount("#viewer");
    </script>
  </body>
</html>
```
</code-block>

<code-block title="CDN">

```html
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8" />
    <title>BIMDataViewer - Quick start</title>
    <script type="module" src="https://cdn.jsdelivr.net/npm/@bimdata/viewer@2.0.0-beta.14"></script>
  </head>

  <body>
    <div style="height: 100vh;">
      <div id="viewer"></div>
    </div>

    <script>
      const bimdataViewer = makeBIMDataViewer({
        api: {
          // demo identifications
          modelIds: [15097],
          cloudId: 10344,
          projectId: 237466,
          accessToken: "TAbdyPzoQeYgVSMe4GUKoCEfYctVhcwJ",
        },
      });

      bimdataViewer.mount("#viewer");
    </script>
  </body>
</html>
```
</code-block>

</code-group>
