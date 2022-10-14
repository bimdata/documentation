# Release Notes

## v1.9.0

#### Usages

* New DWG & DXF viewer windows
* New GED window
* New Building Maker window
* New BCF Manager window
* New Viewer Plan
* It is now possible to open different models on different windows (2D, 3D, ...)
* New 2D Plan synchronisation
* Preview in 3D Model loader
* Improved 2D performance
* Improved 2D drawing capabilities
* 2D Texts
* Improved Properties: search + link documents + PDF preview
* 3D Measures
* Annotations
* Calibration
* 2D & 3D parameters Space visibility toggle
* Rounded 2D lines
* 2D Storey selector can be hidden

#### Developers

* [Exposed Modelsloader](/viewer/reference/global_components.html#modelsloader)
* Upgrade xeokit dependency to 2.2
* Upgrade bimdata 2d-engine dependency to 1.14
* Command Manager removed
* Logger removed
* Warning plugin removed
* Add getLocalContexts(windowName) on [$viewer](/viewer/reference/$viewer.html)
* [Embed BIMData design system](/viewer/customize_the_ui.html#embed-design-system)
* Improve state performances
* Customizable colors
* Use BIMData model API
* Refactor state: change ifc to model

#### Bugfixes

* Display 2D compass correctly while zoomed
* Fix 2D storey navigation (2D state, plan draw order, )
* Fix 2D zoom
* Fix 2D measurement plugin
* improve 3D LOD
* Fix 3D orhtographic projection
* Fix viewer 3D out of sync state
* Fix 2D/3D canvas mouse detection behind Model loader & Storey selector
* 2D/3D parameters clean destroy when the window is closed
* Fix shortcut error while openning the same window twice
* Handle properties long names
* Fix property edition
* Fix window registration
* Fix context menu crash on some conditions
* CSS/SCSS Fixes
* Fix model loader dropdownlist
* Fix autocomplete on search & tags inputs
* Fix crash while openning the viewer twice
* Better viewer bundle packing
* Fix window switching style
* Fix properties showing last selected object
* Hide plugin as button tooltip while the plugin is open

## v1.8.2
#### Developers
* Add [`translateIfcEntities` option](/viewer/reference/native_plugins.html#structure-and-properties)


## v1.8.1
#### Developers
* `getLastEvent` is now referenced in `index.d.ts`. Don't forget to use it (even with .js files) to bring auto-complete in your development tools.


## v1.8.0
#### Usages
* 2D Measurement can now snap to lines. Press CTRL (or cmd) while measuring.
* 3D and 2D camera synchronization is now available in 2D parameters.
* IFC Entities (IfcWall, IfcDoor, etc) are now translated in French (If you want to help us translate them into other languages, please contact us!)
* BCF search now filters on all BCF fields and not only on the title.
* Upgraded Spanish translation

#### Developers
* 2D engine now uses the same coordinates as the 3D engine. You can build even more powerful 2D and 3D interactions.
* Events now have an option `getLastEvent`. If `true`, the last event (if any) is instantly triggered. It is useful for state synchronization on plugin initialization.


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
