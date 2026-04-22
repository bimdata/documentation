# Getting started

<script setup>
import BIMDataIconFileDwg from "../.vitepress/components/BIMDataIconFileDwg.vue";
import BIMDataIconFileDxf from "../.vitepress/components/BIMDataIconFileDxf.vue";
import BIMDataIconFileIfc from "../.vitepress/components/BIMDataIconFileIfc.vue";
import BIMDataIconFilePlan from "../.vitepress/components/BIMDataIconFilePlan.vue";
import BIMDataIconFilePointCloud from "../.vitepress/components/BIMDataIconFilePointCloud.vue";
import ViewerMainPage from "../.vitepress/components/ViewerMainPage.vue";
</script>

## Introduction

The BIMData Viewer is a tool for interacting with models of different formats like :
- <div style="align-items: center; display: flex; gap: 12px; margin-bottom: 6px;"><BIMDataIconFileIfc /> IFC </div>
- <div style="align-items: center; display: flex; gap: 12px; margin-bottom: 6px;"><BIMDataIconFilePlan /> Image (PDF, PNG, JPG) </div>
- <div style="align-items: center; display: flex; gap: 12px; margin-bottom: 6px;"><BIMDataIconFileDwg /> DWG </div>
- <div style="align-items: center; display: flex; gap: 12px; margin-bottom: 6px;"><BIMDataIconFileDxf /> DXF </div>
- <div style="align-items: center; display: flex; gap: 12px; margin-bottom: 6px;"><BIMDataIconFilePointCloud /> Point Cloud (PLY, LAS, LAZ). </div>

Each model format is handled by its own native built-in viewer and interactions include **display**, **navigation**, **measurement** and **annotation**.

The BIMData Viewer is binded to the [BIMData API](/api/introduction/overview) and you can directly upload models using it or using the [BIMData platform](https://platform.bimdata.io/).

[The UI can be customized](./guide/index#graphical-user-interface) to organize the workspace as you need and a flexible javascript API using
[Vue 3](https://vuejs.org/) allows to create custom plugins to match your business perfectly.
However, you don't need to master Vue.js to develop a plugin and you can still update the DOM with jQuery if you like!

<ViewerMainPage />

## Installation

You can directly download the BIMDataViewer from a **CDN** or you can install the [`@bimdata/viewer` package](https://www.npmjs.com/package/@bimdata/viewer) using **NPM**.

::: code-group

```html [CDN]
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1.0" />
    <title>BIMDataViewer - Quick start</title>
  </head>

  <body>
    <div style="height: 100vh;">
      <div id="viewer"></div>
    </div>

    <script type="module">
      import makeBIMDataViewer from "https://cdn.jsdelivr.net/npm/@bimdata/viewer@latest";

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

```html [NPM]
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1.0" />
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
:::
