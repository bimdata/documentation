# Graphical User Interface

The main elements of the BIMDataViewer GUI are the **Header**, the **Windows**, the **Plugins**, the **Context Menu** and the **Keyboard Shorcuts**.

## Header & Windows

As the name suggests, the header is located at the top of the BIMDataViewer. Windows share the remaining space.

<img width=500px src="/assets/img/viewer/viewer-gui-header-and-windows.png" alt="Viewer GUI with windows and header.">


Different layouts can be created, with or without header, and with as many windows as required.

<img width=500px src="/assets/img/viewer/viewer-gui-layouts.png" alt="Viewer GUI layouts.">


## Plugins

Plugins are window children and can be displayed in different ways.

### Default representation

The default representation is on the window area.

<img width=250px src="/assets/img/viewer/viewer-gui-plugin-default.png" alt="Viewer GUI plugin default.">

### Plugin as button

Plugins can also be displayed as a side button, on the left or right of the window. By clicking on it, the plugin opens and its content is displayed in 3 different ways:

- **simple** : plugin content displayed close to its corresponding button, on a small window.

<img width=250px src="/assets/img/viewer/viewer-gui-plugin-button-simple.png" alt="Viewer GUI plugin button simple.">

- **panel** : plugin content displayed on the whole window height.

<img width=250px src="/assets/img/viewer/viewer-gui-plugin-button-panel.png" alt="Viewer GUI plugin button panel.">

- **free** : plugin content displayed on the side of the button, without any layout. Its size is determined by its content.

<img width=250px src="/assets/img/viewer/viewer-gui-plugin-button-free.png" alt="Viewer GUI plugin button free.">

## Context Menu & Keyboard Shortcuts

The context menu and the keyboard shortcuts take into account the context of the request. In this way, it is possible to launch a specific action in a particular window when a keyboard key is pressed while the mouse is hovering that window. In the same way, it is possible to add to the context menu only a list of commands specific to the place where the click was made.

The context menu is usually displayed while right clicking on the screen.

<img width=250px src="/assets/img/viewer/viewer-gui-context-menu.png" alt="Viewer GUI context menu.">
