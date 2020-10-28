---
tags:
  - clear
  - empty
  - remove
---

# Native plugins

UI elements like plugins, viewer version and BIMData logo can be configured. To do so, use the [makeBIMDataViewer](/viewer/api#makeBIMDataViewer) function configuration object.

Here is an example to get an empty 3d viewer :

```javascript
const viewer = makeBIMDataViewer(
  ui: {
    version: false,
    bimdataLogo: false,
  },
  plugins: {
    header: false,
    "window-split": false,
    "structure-properties": false,
    bcf: false,
    projection: false,
    section: false,
    fullscreen: false,
    search: false,
    viewer3d: {
      navCube: false, // get rid of the navcube
    },
    "structure-properties": false,
  }
);
```
The result :

![Viewer with one window empty](/assets/img/viewer/Viewer-1_window_empty.png)
