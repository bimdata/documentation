# Release Notes

## v1.7.4
#### Usages
* Archived models can now be loaded in multi-model if the first model loaded is archived


## v1.7.3
#### Usages
* Add first iteration of Spanish translations


## v1.7.2
#### Usages
* Add first iteration of German translations


## v1.7.1
#### Developers
* Alerts plugin is now enabled on 2d window by default
#### Bugfixes
* Update api client to fix issues with `getExtensions`, `updateExtensions`, `createClassificationElementRelations` and `listClassificationElementRelations` methods

## v1.7.0
#### Usages
* New menu to select windowed plugins
* New UI to manage viewers and windows
* You can now open properties in a new window
* Add ability to take 2D screenshots with annotations
* 3D lights have been improved
* Viewpoint is no more reset when loading another model in the viewer
* Improved 2D rendering
* 2D plan are now aligned to the screen
* 2D now have a compass
* UX improvements with 2D zoom
* 2D improve path measure validation

#### Developers
* Add `2d-model-loaded` and `2d-model-unloaded` [events](/viewer/reference/native_plugins.html#events-2)
* The new 2D engine is now [documented](https://2d-engine.bimdata.io). You can develop plugin drawing stuff in 2D!
* Windows can now have an [icon](/viewer/customize_the_ui.html#window-configuration-object)
* Add 3D annotations [events](https://developers-staging.bimdata.io/viewer/reference/native_plugins.html#events)

#### Bugfixes
* Fix 2D crash if the page loading the viewer doesn't allow `eval` or `new Function()`
* Fix rare 2D crash
* Improve 2D performances on some models
* Fix some French BCF translations
* Fix many small bugs on some browsers
* Object state is now correctly set when opening a new 3D window


## v1.6.2
#### Bugfixes
* Fix bug with logarithmicDepthBuffer. It could cause glitches if two surfaces were too close to each other


## v1.6.1
#### Usages
* Improve default 2D and 3D parameters (Edges, highlight, spaces and space names are enabled by default)


## v1.6.0
#### Usages
* Brand new 2D viewer
* Faster and more accurate rendering
* New measurment plugin: Measure distances, angle and surfaces easily!
* Space names are shown in 2D
* Door openings are shown in 2D
* You can disable and enable door openings and space names
* 2D objects can be colorized
* 2D objects can be textured
* User's 3D and 2D configurations are saved
* Many performances improvements

#### Developers
* Open and close event are now always triggered on edge-cases

#### Bugfixes
* Section plane plugin now show sections loaded from BCF
* Fix loadIfc method when ifcId is a string instead of an integer


## v1.5.6
#### Bugfixes
* Performance fixes


## v1.5.0
#### Developers
* Add [showAllAnnotations option](/viewer/reference/native_plugins.html#bcf) to BCF plugin
* Add structure window as available window by default. `bimdataViewer.unregisterWindow('structure')` to remove it.
* Add [getRawElements()](/viewer/reference/$viewer.html#getrawelements)

#### Bugfixes
* Fix BCF bucket tip which showed the wrong shortcut
* Fix objects being cut when to close from camera
* Fix xraySetters


## v1.4.1
#### Bugfixes
* Fix [object properties](/viewer/reference/state.html#object) that may not be accessible in some contexts


## v1.4.0
#### Usages
* Improve 3D rendering performances up to 25%

#### Developers
* [BCF current-user can now be fetched from a custom endpoint](/viewer/reference/native_plugins.html#bcf)
* [Add method to reload Structure plugin](/viewer/reference/native_plugins.html#structure-and-properties)
* [Move getRawElements() method to $viewer.state.api](/viewer/reference/$viewer.html#getrawelements)

#### Bugfixes
* Fix picking on big 3D models
* Fix `object.getFirstAncestorWithType()` which may be not defined on some cases
* Fix plugin `$close()` triggered even if the plugin wasn't opened when `keepOpen = false`


## v1.3.0

#### Usages
* New Section planes tool
* New pivot marker
* New pivot behavior when clicking outside the model. It's easier than ever to navigate in the model
* Spatial tree is no more opened if model have more than 8 IfcBuildings (to decrease loading time)
* First person projection is now named "Flight mode"
* Elements highlight on mouse hover is now disabled in Flight mode

#### Developers
* [BCF users can now be fetched from a custom endpoint](/viewer/reference/native_plugins.html#bcf)
* [Increase render and pick precision for very large models](https://github.com/xeokit/xeokit-sdk/issues/254)
* [Add methods to retrieve objects, children, siblings and parents](/viewer/reference/state.html#object)
* [Add logger level configuration in makeBIMDataViewer](/viewer/reference/makeBIMDataViewer.html#logger)
* [Add viewer instance setLocale method](/viewer/reference/makeBIMDataViewer.html#locale)

#### Bugfixes
* Fix BCF interface if loading was slower than the human
* Fix multi model selection if there was too many models in the project
* Fix context menu (right click) after full screen is swifted off
* Fix french typo
