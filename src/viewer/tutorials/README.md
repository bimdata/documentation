# Introduction

Here you will find tutorials that cover the main features of the viewer.
Step by step, you will build a complete viewer example by adding a feature at a time.

## How to start

The code examples on the following tutorials can be used in different way.

The simplest way is to start with the following code (`index.html`):

```html
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8" />
    <title>BIMDataViewer - Tutorials</title>
  </head>

  <body>
    <div style="height: 100vh">
      <div id="viewerId"></div>
    </div>

    <script type="module">
      import makeBIMDataViewer from "https://cdn.jsdelivr.net/npm/@bimdata/viewer@2.1.0-beta.3";

      /******* INSERT COMPLETE CODE EXAMPLES HERE *******/

    </script>
  </body>
</html>
```

You just need to have the viewer installed (via CDN) and add a div with an `id` attribute (e.g. `"viewerId"`).
Then paste the `Complete code example` sections you will find on the tutorials in the `<script>` tag above,
and open that `index.html` in a compatible browser.

## Tutorials list

::: tip
It is a good idea to do this tutorials in order as code is added to the same file step by step.
:::

- [Make your own window layout.](/viewer/tutorials/make_your_own_window_layout.html)
- [Add plugins on windows.](/viewer/tutorials/add_plugins_on_windows.html)
- [Create shortcuts.](/viewer/tutorials/shortcuts.html)
- [Create context menu command](/viewer/tutorials/context_menu.html)
- [Listen and update state](/viewer/tutorials/state.html)
- [Use event Hubs](/viewer/tutorials/hubs.html)

## What do I do next?

Once finished, you will have solid knowledge of the main viewer features.
The next sections [Customize the UI](/viewer/customize_the_ui.html) and [Develop your plugins](/viewer/plugins/overview.html)
covers the respective features in depth and are the logic sequel of these tutorials.
You will find features you already saw here with more detailed informations.
