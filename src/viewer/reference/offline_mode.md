# Offline Mode

In some cases it may be necessary to use the Viewer without network access.
A typical usage is when the viewer is embed in a mobile app that will be used
in situation where network availability is not guaranteed.
For those cases it is possible to enable **offline mode**.

Offline mode can be configured on viewer creation using the `api.offline` configuration:

```js
// Offline data are passed as a Blob
const blob = getOfflineData();

const viewer = makeBIMDataViewer({
  api: {
    // ...
    offline: {
      enabled: true,
      data: blob
    }
  },
  // ...
});
```

It is also possible to enable offline mode dynamically after the viewer was instanciated
using the [`enableOfflineMode()`](./reference/$viewer.md#enableofflinemode) method.

```js
// Enable offline mode
await $viewer.api.enableOfflineMode(blob);

// Offline mode can also be disabled later
$viewer.api.disableOfflineMode();
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

Once generated you need to make the archive accessible to your application and load it as a [Blob](https://developer.mozilla.org/en-US/docs/Web/API/Blob)
using javascript before pasing it to the viewer.
The way the archive is made accessible and loaded depends on your environment and is up to you.

## Android example

In the context of an Android app using [WebViews](https://developer.android.com/reference/android/webkit/WebView) it is possible to
package your archive with your application and use a [WebViewAssetLoader](https://developer.android.com/reference/androidx/webkit/WebViewAssetLoader)
to load the archive using an URL of the form `https://appassets.androidplatform.net/*`.

You can have a look at our [android-example repository](https://github.com/bimdata/android-example)
to get a demo project showing how to integrate the viewer into an android application and use it in oflline mode.
