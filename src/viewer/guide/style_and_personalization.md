# Style an personalization

## Design System 🧑‍🎨

The [BIMData design system](https://design.bimdata.io/) is globally available on the viewer and can be use to quickly stylize the plugin components.

In the following example, the [`BIMDataButton` ](https://design.bimdata.io/components/buttons) is not imported as it is globally available:

```js
const myPlugin = {
  template: "<BIMDataButton @click='onClick' >Click !</BIMDataButton>",
  methods: {
    onClick() {
      console.log("clicked !");
    }
  }
}
```



## Colors 🎨

You can change the colors of the viewer and the BIMData Design System components.

All customizable colors are defined in the [BIMData Design System documentation](https://design.bimdata.io/guidelines-utilities/colors)

You can overide any color you want to change using a value as a `string` representing any valid CSS value ("red", "#FF0000", "rgb(255, 0, 0)", etc).

```javascript
const bimdataViewer = makeBIMDataViewer({
  /* */
  ui: {
    style: {
      backgroundColor: "",
      colorPrimary: "",
      colorPrimaryLighter: "",
      colorPrimaryLight: "",
      colorPrimaryDark: "",
      colorSecondary: "",
      colorSecondaryLight: "",
      colorSecondaryLighter: "",
      colorSecondaryDark: "",
      colorSilverLight: "",
      colorSilver: "",
      colorSilverDark: "",
      colorGraniteLight: "",
      colorGranite: "",
      colorSuccess: "",
      colorSuccessLight: "",
      colorSuccessLighter: "",
      colorSuccessDark: "",
      colorWarning: "",
      colorWarningLight: "",
      colorWarningLighter: "",
      colorWarningDark: "",
      colorHigh: "",
      colorHighLight: "",
      colorHighLighter: "",
      colorHighDark: "",
      colorText: "",
    },
  },
});
```
