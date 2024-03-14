# Getting started

## Introduction

The BIMData Viewer is a tool for interacting with models of different formats like :
- <div style="align-items: center; display: flex; gap: 12px; margin-bottom: 6px;"><BIMDataIconFileIfc /> IFC </div>
- <div style="align-items: center; display: flex; gap: 12px; margin-bottom: 6px;"><BIMDataIconFilePlan /> Image (PDF, PNG, JPG) </div>
- <div style="align-items: center; display: flex; gap: 12px; margin-bottom: 6px;"><BIMDataIconFileDwg /> DWG </div>
- <div style="align-items: center; display: flex; gap: 12px; margin-bottom: 6px;"><BIMDataIconFileDxf /> DXF </div>
- <div style="align-items: center; display: flex; gap: 12px; margin-bottom: 6px;"><BIMDataIconFilePointCloud /> Point Cloud (PLY, LAS, LAZ). </div>

Each model format is handled by its own native built-in viewer and interactions include **display**, **navigation**, **measurement** and **annotation**.

The BIMData Viewer is binded to the [BIMData API](/api/introduction/overview.html) and you can directly upload models using it or using the [BIMData platform](https://platform.bimdata.io/).

[The UI can be customized](/viewer/customize_the_ui.html) to organize the workspace as you need and a flexible javascript API using [<svg class="logo" viewBox="0 0 128 128" width="18" height="18" data-v-0495d436=""><path fill="#42b883" d="M78.8,10L64,35.4L49.2,10H0l64,110l64-110C128,10,78.8,10,78.8,10z" data-v-0495d436=""></path><path fill="#35495e" d="M78.8,10L64,35.4L49.2,10H25.6L64,76l38.4-66H78.8z" data-v-0495d436=""></path></svg> Vue.js 3](https://vuejs.org/) allows to create custom plugins to match your business perfectly.
However, you don't need to master Vue.js to develop a plugin and you can still update the DOM with jQuery if you like!

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

    <script type="module">
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
