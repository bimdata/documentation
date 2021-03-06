=================================================
Tutorial: How-to create a plugin for the Viewer
=================================================

.. contents:: Table of Contents
   :depth: 2
..
    excerpt
        Create your first Viewer plugin
    endexcerpt

A Viewer's plugin is a Vue.js Component. The plugin adds one, or more, features to the Viewer.

Enrich your Model with external data, trigger events during navigation in the 3D model, and provide to your users an unforgettable experience.

Pre-requisites
=================

* Knowledge about Vue.js components: https://vuejs.org/v2/guide/components.html


The example plugin
================================

.. note::

    A plugin is based on a Vue.js component, so `check the Vue.js documentation <https://vuejs.org/v2/guide/components.html>`_  to learn more about it.

The plugin is enabled as a menu icon. This plugin contains 2 features:

 * Isolate the selected element of the Model
 * Reset by un-isolating everything


.. raw:: html
   :file: ../_static/viewer_examples/viewer_plugin_example.html

Let's take a look at the code for the `myCustomPlugin` plugin.

.. code-block:: javascript
   :linenos:

    name: "myCustomPlugin",
    component: {
      template: `
        <div>
          <button @click="onIsolateClick">Isolate selected element</button>
          <button @click="onUnisolateClick">Unisolate all</button>
        </div>`,
      methods: {
        onIsolateClick() {
          this.$hub.emit("isolate-objects", {
            ids: this.$utils.getSelectedObjectIds()
          });
        },
        onUnisolateClick() {
          this.$hub.emit("unisolate-all-objects");
        }
      }
    },
    display: {
      iconPosition: 'left',
      content: 'simple'
    },
    tooltip: "myCustomPlugin.tooltip",
    i18n: {
      en: {
        myCustomPlugin: {
          tooltip: "My Plugin!",
        }
      },
      fr: {
        myCustomPlugin: {
          tooltip: "Mon Greffon !",
        }
      }
    }

Template
------------

The template is plain HTML: 2 buttons, launching the methods on the click event.

Methods
------------

The 2 methods are the simplest possible.
They use the ``$store`` and the hub to emit events to the Viewer.

.. note::

    Find `the list of all the events <https://github.com/bimdata/documentation-viewer-examples/blob/master/Events.md>`_ in the dedicated page

Display and tooltip
-------------------------------

The ``tooltip`` is a great hint for your users.
The settings of ``display`` is detailed below in the Layout section.

Layout
=======


By default, the plugin is added to the Viewer without any style.
However, you can choose to display your plugin in the left or right menu, connected to a corresponding button activating the plugin.
When activated, the plugin can be styled in three different ways: "free", "simple" or "windowed".

* **free** - the plugin is rendered next to the button without style.
* **simple** - the plugin is rendered next to the button in a sized window.
* **windowed** - the plugin is rendered next to the button in a movable and resizable window.

Exemple :

.. code-block:: javascript

    {
      display: {
        iconPosition: 'left', // other value: 'right'
        content: 'free' // others values: 'simple', 'windowed'
      }
    }


#. Use the <script> tag to embed the Viewer CJS
#. Create a tag in the <body> that will host the Viewer.
#. Fill the ``cfg`` configuration object
#. Set your accessToken
#. Register your plugin. The plugin is a Vue.js element

.. note::

    The complete code of this plugin is at the end of this tutorial. Jump to the end if you want to copy-paste the complete version.

Step 1: Embed the Viewer
==========================

Use the ``<script>`` tag to embed the Viewer, from the package.

.. code-block:: html
   :linenos:

        <!DOCTYPE html>
        <html lang="en" dir="ltr">
            <head>
                <meta charset="utf-8">
                <title>BIMData - CJS Example</title>
                <script src="https://unpkg.com/@bimdata/viewer@^0.8.22/dist/bimdata-viewer.min.js" charset="utf-8"></script>
            </head>
            <body>
            </body>
        </html>

Step 2: Create the <div> for the Viewer
=========================================

The ``<div>`` defined by the "app" id will support the Viewer.
The parent ``<div>`` has its height defined in CSS, to have a big viewer taking the whole web page.

.. code-block:: html
   :linenos:

            <body>
                <div style="height: 100vh">
                    <div id="app"></div>
                </div>
            </body>

Step 3: fill the ``cfg`` object
================================

You want a simple and clear Viewer to put your plugin in highlight.
Using Javascript, fill the ``cfg`` configuration object, setting all the functionalities to false.

The :doc:`details of every functionality disabled </tutorials/using_custom_viewer>` are available in the Customize your Viewer content.

We provide you a demo token, usable for this tutorial. Create your own on BIMData Connect (see :doc:`/tutorials/dev_ifc_access_token`).

.. code-block:: javascript
   :linenos:

    const cfg = {
      cloudId: 88,
      projectId: 100,
      ifcIds: [175],
      bimdataPlugins: {
        default: false
      }
    };
    const accessToken = "DEMO_TOKEN";
    const { viewer, store, eventHub, setAccessToken } = initBIMDataViewer(
      "app",
      accessToken,
      cfg
    );

Step 5: register your plugin
=============================

After initializing the BIMDataViewer with the proper settings, you register the plugin on the JS ``viewer`` object.
The plugin is a Vue.js element, you define a template and the methods. Put the JavaScript code of your Vue.js Component as the plugin code.

In addition to that, you set the ``display`` mode of your plugin to let your user access the features.
You can also define the ``tooltip`` content.

You have made your first plugin.

.. code-block:: javascript
   :linenos:

      viewer.registerPlugins([
        {
          name: "myCustomPlugin",
          component: {
            template: `
              <div>
                <button @click="onIsolateClick">Isolate selected element</button>
                <button @click="onUnisolateClick">Unisolate all</button>
              </div>`,
            methods: {
              onIsolateClick() {
                this.$hub.emit("isolate-objects", {
                  ids: this.$utils.getSelectedObjectIds()
                });
              },
              onUnisolateClick() {
                this.$hub.emit("unisolate-all-objects");
              }
            }
          },
          display: {
            iconPosition: 'left',
            content: 'simple'
          },
          tooltip: "myCustomPlugin.tooltip",
          i18n: {
            en: {
              myCustomPlugin: {
                tooltip: "My Plugin!",
              }
            },
            fr: {
              myCustomPlugin: {
                tooltip: "Mon Greffon !",
              }
            }
          }
        }
      ]);




The complete code
===================

If you copy-paste this code, you have a simple Viewer with the first plugin.s

.. code-block:: html
   :linenos:

        <!DOCTYPE html>
        <html lang="en" dir="ltr">
            <head>
                <meta charset="utf-8">
                <title>BIMData - CJS Example</title>
                <script src="https://unpkg.com/@bimdata/viewer@^0.8.22/dist/bimdata-viewer.min.js" charset="utf-8"></script>
            </head>
            <body>
                <div style="height: 50vh; width:70wh">
                    <div id="app"></div>
                </div>
                <script>
                    const cfg = {
                      cloudId: 88,
                      projectId: 100,
                      ifcIds: [175],
                      bimdataPlugins: {
                        default: false
                      }
                    };
                    const accessToken = "DEMO_TOKEN";
                    const { viewer, store, eventHub, setAccessToken } = initBIMDataViewer(
                        "app",
                        accessToken,
                        cfg
                    );
                    viewer.registerPlugins([
                      {
                        name: "myCustomPlugin",
                        component: {
                          template: `
                            <div>
                              <button @click="onIsolateClick">Isolate selected element</button>
                              <button @click="onUnisolateClick">Unisolate all</button>
                            </div>`,
                          methods: {
                            onIsolateClick() {
                              this.$hub.emit("isolate-objects", {
                                ids: this.$utils.getSelectedObjectIds()
                              });
                            },
                            onUnisolateClick() {
                              this.$hub.emit("unisolate-all-objects");
                            }
                          }
                        },
                        display: {
                          iconPosition: 'left',
                          content: 'simple'
                        },
                        tooltip: "myCustomPlugin.tooltip",
                        i18n: {
                          en: {
                            myCustomPlugin: {
                              tooltip: "My Plugin!",
                            }
                          },
                          fr: {
                            myCustomPlugin: {
                              tooltip: "Mon Greffon !",
                            }
                          }
                        }
                      }
                    ]);
                </script>
            </body>
        </html>
