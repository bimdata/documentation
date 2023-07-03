# Viewer SDK



We have pre-configured a **VueJS** environment to develop BIMData Viewer plugins. You can develop, test, build, package and share your plugin easily. 

In this section, you get tutorials and references for installing and using the [BIMData Viewer SDK](https://github.com/bimdata/bimdata-viewer-sdk)

<img src="/assets/img/viewer/sdk-landing.jpg" style="border:1px solid #dfe2e5; border-radius: 20px;">

## Setup

First, you have to clone the sdk repo and install SDK dependencies :

```bash
git clone https://github.com/bimdata/bimdata-viewer-sdk.git
cd bimdata-viewer-sdk
npm install
```

> _Note:_
>
> If you want to create you own application you can copy the `.env.example` file :
>
> ```bash
> cp .env.example .env
> ```
>
> Then you can read this guide : [Create your application](https://developers.bimdata.io/api/guides/application.html#which-app-will-you-create)


### Compiles and hot-reloads for development

```bash
npm run dev
```

### Usage

When going on [http://localhost:8080](http://localhost:8080), a simple interface will let you open the project and model you want.
You can directly open one by opening an URL using specific Ids, for example : [http://localhost:8080/viewer?cloudId=391&projectId=634&ifcId=1491](http://localhost:8080/viewer?cloudId=391&projectId=634&ifcId=1491)

## Create your plugin

```bash
npm run init-plugin
```

This tool asks you a couple of questions about the plugin you develop and generate from your answers boilerplate files for your plugin.

Files are created in the directory `src/plugins/{name_of_your_plugin}`.

Then import your newly created plugin in `src/viewer/viewer.vue` and add it to the registerPlugin array.

```javascript
import SnowflakesPlugin from "@/plugins/snowflakes/src/snowflakes.plugin.js";
import SplitPlugin from "@/plugins/split/src/split.plugin.js";

...
mounted() {
  this.$refs.bimdataViewerInstance.registerPlugins([
    SnowflakesPlugin,
    SplitPlugin,
  ]);
}
...
```

## Package your plugin

To load your plugin in a real environment, you want to package and publish your plugin.
The plugin template is pre-configured with a rollup config that let you do this easily:

```bash
cd src/plugins/{your_plugin}
npm install
npm run build
```

This creates a dist/ folder in your plugin directory with a simple js file. This minified file includes the CSS and the assets (encoded in base64). It's not the most performant way, but it's the simplest and the Viewer loads many mega-bytes models anyway.

You can either copy-paste this file in your environment and load it at your convenience, or you can publish it on NPM.
To publish it, update the `package.json` file with the proper information and just run an `npm publish`.

The code is minified to protect your code as much as possible.

### More info about how it works

The SDK itself uses _Webpack_ to build. The packaging uses _Rollup_. If you need a complex JS flow, it may lead to some issues.
To see these issues before deploying, load the packaged version in the SDK:

```bash
cd src/plugins/{your_plugin}
npm run watch
```

And load the dist version of the plugin:

```js
import SplitPlugin from "@/plugins/split/dist/split.plugin.js";

...
mounted() {
  this.$refs.bimdataViewerInstance.registerPlugins([
    SplitPlugin,
  ]);
}
...
```

You can also edit the webpack and rollup config as you want.
