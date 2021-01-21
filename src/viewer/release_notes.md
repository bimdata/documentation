# Release Notes

## v1.3.0

### Usages
* New Section planes tool
* New pivot marker
* New pivot behavior when clicking outside the model. It's easier than ever to navigate in the model
* Spatial tree is no more opened if model have more than 8 IfcBuildings (to decrease loading time)
* First person projection is now named "Flight mode"
* Elements highlight on mouse hover is now disabled in Flight mode


### Developers
* [BCF users can now be fetched from a custom endpoint](/viewer/reference/native_plugins.html#bcf)
* [Increase render and pick precision for very large models](https://github.com/xeokit/xeokit-sdk/issues/254)
* [Add methods to retrieve objects, children, siblings and parents](/viewer/reference/state.html#object)
* [Add logger level configuration in makeBIMDataViewer](/viewer/reference/makeBIMDataViewer.html#logger)
* [Add viewer instance setLocale method](/viewer/reference/makeBIMDataViewer.html#locale)


### Bugfixes
* Fix BCF interface if loading was slower than the human
* Fix multi model selection if there was too many models in the project
* Fix context menu (right click) after full screen is swifted off
* Fix french typo
