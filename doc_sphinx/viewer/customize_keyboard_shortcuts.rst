=================
Keyboard Shortcut
=================


Register a new shortcut
=======================

To register a keyboard shortcut, get the **keyboardShortcutsManager** object and then
register a new shortcut.

.. warning::

    Only one shortcut must be added to a key.
    An error is raised on the console if the key is already assigned.

.. code-block:: javascript

   this.$plugins.keyboardShortcutsManager.registerKeyboardShortcut(
     "K",                            // The key you want to assign
     () => console.log("K pressed")  // The function that is executed when the assigned key is pressed
   );

Parameters
------------

================  ===================  ====================================================================
parameter         type                  Description
================  ===================  ====================================================================
key               character            The key you want to assign
function          function()           The function that is executed when the assigned key is pressed
================  ===================  ====================================================================


Example
===========

The plugin we add here is not displayed to the end user.
It just add a command to the right click menu and a keyboard shortcut.
The command and the shortcut hide objects of type “space”.
The newly added right click menu command has the label “Hide spaces” (with picto K) and is only displayed when at least one “space” is visible. The shortcut is added on
the key K.

.. code-block:: html

   <!DOCTYPE html>
   <html lang="en" dir="ltr">

   <head>
     <meta charset="utf-8" />
     <title>BIMData - Right Click Command and Keyboard Shortcut</title>
     <script src="https://unpkg.com/@bimdata/viewer@^0.8.22/dist/bimdata-viewer.min.js" charset="utf-8"></script>
   </head>

   <body>
     <div style="height: 100vh">
       <div id="app"></div>
     </div>
     <script>
       const cfg = {
         cloudId: 88,
         projectId: 100,
         ifcIds: [175],
         bimdataPlugins: {
           default: false,
           rightClickMenu: true, // Right click menu should be activated
         }
       };
       const accessToken = "DEMO_TOKEN";
       const { viewer } = initBIMDataViewer(
         "app",
         accessToken,
         cfg
       );

       viewer.registerPlugins([
         {
           name: "HideSpacePlugin",
           component: {
             render() {
               return null;
             },
             created() {
               // Add right click command
               const rightClickMenu = this.$plugins.rightClickMenu;
               const getSpaceIds = () =>
                 this.$utils.getAllObjectsOfType("space").map(
                   object => object.uuid
                 );
               const hideSpaces = () => {
                 this.$hub.emit("hide-objects", {
                   ids: getSpaceIds()
                 });
               };
               const isSpaceVisible = () => {
                 const allObjects = Object.values(
                   this.$plugins.viewer3D.xeokit.scene.objects
                 );
                 const spaceUUIDs = getSpaceIds();
                 const spaceObjects = allObjects.filter(object =>
                   spaceUUIDs.includes(object.id)
                 );
                 return spaceObjects.some(spaceObject => spaceObject.visible);
               };
               rightClickMenu.registerCommand({
                 label: "Hide spaces",
                 picto: "K",
                 execute: hideSpaces,
                 predicate: isSpaceVisible
               });

               // Register keyboard shortcut
               this.$plugins.keyboardShortcutsManager.registerKeyboardShortcut(
                 "K",
                 hideSpaces
               );
             }
           },
         }
       ]);
     </script>
   </body>

   </html>

.. raw:: html
   :file: ../_static/viewer_examples/viewer_custom_kb_shortcuts_example.html
