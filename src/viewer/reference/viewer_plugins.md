# Viewer Plugins

Viewer plugins (also referred to as *viewer windows*) are a special kind of plugin that provide a model viewer.
They share some [common configuration options](#viewers-common-config) and a [common API](#viewers-common-api) to perform
some generic operations and can also have some specific methods that depend on the type(s) of model they can handle.

Here is the list of native viewer plugins:

 - [Viewer IFC 3D](#viewer-ifc-3d)
 - [Viewer IFC 2D](#viewer-ifc-2d)
 - [Viewer DWG/DXF](#viewer-dwg-dxf)
 - [Viewer Plan](#viewer-plan)
 - [Viewer Point Cloud](#viewer-point-cloud)

## Viewers common config

Every viewer plugin has the following config properties:

```typescript
interface ModelViewerConfig {
  /**
   * Control the model loader visibility:
   *  - If `hidden`, the component isn't shown but it will load models defined in the viewer parameters.
   *  - If `disabled`, the models won't be loaded and you must load them manually (using the `viewer.loadModels` method).
   */
  modelLoader?: "hidden" | "disabled";
}
```

## Viewers common API

```typescript
interface ModelViewerInstance extends PluginInstance {
  modelTypes?: string[];
  annotationMode: boolean;

  getViewpoint(options?: any): Promise<any>;
  setViewpoint(viewpoint: any, options?: any): Promise<void>;
  startAnnotationMode(callback: Function): void;
  stopAnnotationMode(): void;
  fitView(options?: any): void;
  showUI(options?: any): Promise<void>;
  hideUI(options?: { exceptions: string[] }): Promise<void>;
}
```

**Note:** these APIs are also available [on the `localContext`](./local_context.md#viewer-interface).

## Viewer IFC 3D

 - Window name: `3d`
 - Plugin name: `viewer3d`

```typescript
interface ViewerIfc3D extends ModelViewerInstance {
  xeokit: XktViewer;
  xktModels: Map<Model, XktModel>;

  // Parameters
  edgesDisplayed: boolean;
  highlightOnHover: boolean;
  selectOnClick: boolean;

  // Methods
  getProjection(): string;
  changeProjection(projection: string): void;
  isolateObjects(ids: number[], options?: any): void;          // Objects with ids not included in `ids` are set to `xrayed = true` & `pickable = false`.
  isolateObjectsByUuids(uuids: string[], options?: any): void; // The same as `isolateObjects` but with `uuids` instead of `ids`.
  reintegrateObjects(): void;                                  // Unisolate objects (opposite action of `isolateObjects`).
  setObjectsVisible(ids: number[], visible: boolean);          // Update the `visible` property of the corresponding objects.
  setObjectsPickable(ids: number[], pickable: boolean);        // Update the `pickable` property of the corresponding objects.
  setObjectsSelected(ids: number[], selected: boolean);        // Update the `selected` property of the corresponding objects.
  setObjectsHighlighted(ids: number[], highlighted: boolean);  // Update the `highlighted` property of the corresponding objects.
  setObjectsXrayed(ids: number[], xrayed: boolean);            // Update the `xrayed` property of the corresponding objects.
  setObjectsColorized(ids: number[], color: boolean);          // Update the `colorized` property of the corresponding objects.
  setObjectsOpacity(ids: number[], opacity: boolean);          // Update the `opacity` property of the corresponding objects.
  setObjectsCulled(ids: number[], culled: boolean);            // Update the `culled` property of the corresponding objects.
}
```

## Viewer IFC 2D

 - Window name: `2d`
 - Plugin name: `viewer2d`

```typescript
interface ViewerIfc2D extends ModelViewerInstance {
  viewer: E2D.Viewer;
  model: Model | null;
  selectedStorey: Storey | null;

  // Parameters
  camera3DSynchronization: boolean;
  compassDisplayed: boolean;
  doorsDisplayed: boolean;
  highlightOnHover: boolean,
  selectOnClick: boolean;
  spacesVisible: boolean;
}
```

## Viewer DWG/DXF

 - Window name: `dwg` / `dxf`
 - Plugin name: `dwg` / `dxf`

```typescript
interface ViewerDwg extends ModelViewerInstance {
  viewer: E2D.Viewer;

  // Parameters
  highlightOnHover: boolean;
  selectOnClick: boolean;
}
```

## Viewer Plan

 - Window name: `plan`
 - Plugin name: `plan`

```typescript
interface ViewerPlan extends ModelViewerInstance {
  viewer: E2D.Viewer;
  model: Model | null;
  selectedStorey: Storey | null;
  bitmaps: any[];
  pdfPages: any[];
  pdfPageIndex: number;

  // Methods
  nextPdfPage(): Promise<void>;
  prevPdfPage(): Promise<void>;
  setPdfPage(n: number): Promise<void>;
  exportAsPNG(): Promise<string>; // Get a base64 URL of PNG screenshot of the viewer
  exportAsJPG(): Promise<string>; // Get a base64 URL of JPG screenshot of the viewer

  // Generate a jsPDF document with the viewer content (https://raw.githack.com/MrRio/jsPDF/master/docs/jsPDF.html)
  exportAsPDF({ format?: number[], scale?: number }): Promise<any>;
}
```

## Viewer Point Cloud

 - Window name: `pointCloud`
 - Plugin name: `pointCloud`

```typescript
interface ViewerPointCloud extends ModelViewerInstance {
  xeokit: XktViewer;

  // Parameters
  viewDistance: number;
}
```
