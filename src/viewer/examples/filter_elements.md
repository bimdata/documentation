# Filter elements

Thanks to the `api.onlyLoadUuids` configuration it is possible to filter elements before they are loaded in the viewer.

This can be very useful when you have large IFC files with many elements but you only want to work an a subset of them (e.g. a single storey).

It helps avoid performance issues and focus on specific part of the model.

You can specify a list of element UUIDs to load for each model in the following way:

```js
makeBIMDataViewer({
  api: {
    // ...
    modelIds: [101, 102, 103],
    onlyLoadUuids: {
      101: ["uuid-1", "uuid-2", "uuid-3"],
      102: ["uuid-1", "uuid-00", "abcdef"],
    }
  }
});
```

If no UUIDs are specified for a given model then all elements are loaded (default behavior).

::: warning
Make sure the UUIDs you're providing in `onlyLoadUuids` are correct (i.e. they match existing elements in the model).
Providing wrong UUIDs can result in an empty viewer where all elements have been filtered.
If nothing is displayed when you use `onlyLoadUuids` then check that your UUIDs are correct.
:::

### Demo

<ClientOnly>
  <BIMDataViewer config="filterElements" />
</ClientOnly>

### Code

```js
// file: main.js
import makeBIMDataViewer from "@bimdata/viewer";

const viewer = makeBIMDataViewer({
  api: {
    cloudId: 123,
    projectId: 456,
    modelIds: [123456]
    onlyLoadUuids: {
      123456: ["<storey-uuid>"]
    }
  },
  // ...
});

viewer.mount("#app", {
  ratios: [50, 50],
  children: ["3d", "2d"]
});
```
