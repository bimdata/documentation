# Offline Mode

In some cases it may be necessary to launch the Viewer without network access.
A typical uage is when the viewer is embed in a mobile app that will be used
in situation where network availability is not guaranteed.
For those cases it is possible to enable **offline mode**.

Offline mode can be configured using the `api.offline` configuration:

```js
const viewer = makeBIMDataViewer({
  api: {
    // ...
    offline: {
      enabled: true,
      dataFile: "my-offline-package.zip"
    }
  },
  // ...
});
```

## How it works

For the viewer to work in offline mode you need to provide an *"offline package"* which is
a zip archive that contains data prefetched from BIMData API and needed by the viewer to work properly.

To generate an offline package you have to use the `/offline-package` route on our archive backend (https://archive.bimdata.io/).

An archive is generated for a given set of models that must be specified as query parameters.

Here is an example using `curl` to create an archive for models `123` and `456` that are in project `2` of space `1`:

```bash
curl "https://archive.bimdata.io/cloud/1/project/2/offline-package?modelId=123&modelId=456" \
  -H "Authorization: Bearer <access_token>" \
  -o my-offline-package.zip
```

Once generated you need to make the archive accessible to your application and set the `api.offline.dataFile`
viewer config to point to the archive location.

## Android example

You can have a look at our [android-example repository](https://github.com/bimdata/android-example)
to get a demo project showing how to integrate the viewer into an android application.
