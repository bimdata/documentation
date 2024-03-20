# Header

The `header` API is available on the `globalContext` and allows to add content on the viewer header. The API is the following:

| Property                                    | Description                                  |
| :------------------------------------------ | :------------------------------------------- |
| `addContent(content: HeaderContent)`        | Add content into the header.                 |
| `removeContent(contentName: string)`        | Remove a content by its name.                |
| `headerContent: Map<string, HeaderContent>` | A map containing the header content objects. |

The `HeaderContent` interface is the following:

| Property                      | Description                                                                                            |
| :---------------------------- | :----------------------------------------------------------------------------------------------------- |
| `name: string`                | **Required** A name to identify the content.                                                           |
| `component: Object`           | A Vue.js 3.x component to be rendered on the viewer header.                                            |
| `position: "left" or "right"` | The position of the content on the viewer header.                                                      |
| `order: number`               | A number for sorting the content along other contents displayed on the same side on the viewer header. |

Here is an example of a plugin using the `startupScript` option to register content into the viewer header:

```js
bimdataViewer.registerPlugin({
  name: "headerPlugin",
  startupScript($viewer) {
    const { globalContext } = $viewer;
    
    globalContext.header.addContent({
      name: "window-manager",
      component: MyComponent,
      position: "right",
      order: 1,
    });
  }
})
```
