# mount

Once created, the BIMDataViewer must be mounted to a [DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model) element in order to be displayed to the user.

```javascript
bimdataViewer.mount("#viewerId"); // 'viewerId' must be the id of an existing element.
```

The mount method take an optional second argument: the [`layout`](/viewer/customize_the_ui.html#layout). The [`layout`](/viewer/customize_the_ui.html#layout) is the configuration of the windows displayed at startup. The **default** value is "3d", which is the name of a window registered by default. The "3d" window includes many BIMData plugins like "viewer3d", "section", "projection", "structure-properties"...
