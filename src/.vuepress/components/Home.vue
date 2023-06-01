<template>
  <div class="bimdata-documentation__home">
    <Navbar />
    <section class="bimdata-documentation__home__header m-b-48">
      <h1 class="bimdata-h1">Documentation</h1>
      <div class="home_illustration flex items-center justify-center m-b-18">
        <img :src="$withBase('/assets/img/home_illu.svg')" alt="" />
      </div>
      <div class="home_links flex justify-center">
        <BIMDataCard>
          <template #content>
            <img :src="$withBase('/assets/img/bimdata_icon-viewer.svg')" alt="" />
            <h3 class="color-primary">Viewer</h3>
            <p>BIMData provides you a customizable 3D Viewer, to see and manipulate your models.</p>
            <RouterLink to="/viewer/">
              <BIMDataButton width="165px" color="primary" fill radius>Viewer</BIMDataButton>
            </RouterLink>
          </template>
        </BIMDataCard>
        <BIMDataCard>
          <template #content>
            <img :src="$withBase('/assets/img/bimdata_icon-api.svg')" alt="" />
            <h3 class="color-primary">API</h3>
            <p>
              BIMData's API provides you tools to upload IFCs, manage your files and retreive your
              model data.
            </p>
            <RouterLink to="/api/introduction/overview">
              <BIMDataButton width="165px" color="primary" fill radius>API</BIMDataButton>
            </RouterLink>
          </template>
        </BIMDataCard>
        <BIMDataCard>
          <template #content>
            <img :src="$withBase('/assets/img/bimdata_icon-on_premises.svg')" alt="" />
            <h3 class="color-primary">On-Premises</h3>
            <p>
              BIMData's On-Premises provides you the possibility to host our solutions on your
              servers.
            </p>
            <RouterLink to="/on-premises/getting_started.html">
              <BIMDataButton width="165px" color="primary" fill radius>On-Premises</BIMDataButton>
            </RouterLink>
          </template>
        </BIMDataCard>
      </div>
    </section>
    <section class="bimdata-documentation__home__content m-b-48">
      <h2 class="bimdata-h2">How Can We Help?</h2>
      <p class="color-granite">
        Here are a few items we think might help you get started faster with BIMData.io depending on
        your needs.
      </p>
      <div class="flex justify-center m-t-30">
        <BIMDataCard class="m-r-12" borderRadius="6px">
          <template #content>
            <div class="flex items-center justify-center m-b-24">
              <img :src="$withBase('/assets/img/bimdata_icon-ifc.svg')" alt="" />
            </div>
            <h4 class="color-primary">IFC</h4>
            <p>
              Build BIM tools by freeing yourself from technical complexity to focus on your
              business.
            </p>
            <a
              href="https://developers-staging.bimdata.io/api/introduction/overview.html#apis"
              target="_blank"
            >
              <BIMDataButton width="125px" color="secondary" fill radius>Learn more</BIMDataButton>
            </a>
          </template>
        </BIMDataCard>
        <BIMDataCard class="m-r-12" borderRadius="6px">
          <template #content>
            <div class="flex items-center justify-center m-b-24">
              <img :src="$withBase('/assets/img/bimdata_icon-bcf.svg')" alt="" />
            </div>
            <h4 class="color-primary">BCF</h4>
            <p>Access, create, share, export your BCFs with our BCF API.</p>
            <a
              href="https://developers-staging.bimdata.io/api/introduction/overview.html#apis"
              target="_blank"
            >
              <BIMDataButton width="125px" color="secondary" fill radius>Explore</BIMDataButton>
            </a>
          </template>
        </BIMDataCard>
        <BIMDataCard class="m-r-12" borderRadius="6px">
          <template #content>
            <div class="flex items-center justify-center m-b-24">
              <img :src="$withBase('/assets/img/bimdata_icon-open_source.svg')" alt="" />
            </div>
            <h4 class="color-primary">Open source</h4>
            <p>You can install our platform on your own server.</p>
            <a href="https://github.com/bimdata/platform-next" target="_blank">
              <BIMDataButton width="125px" color="secondary" fill radius>Discover</BIMDataButton>
            </a>
          </template>
        </BIMDataCard>
        <BIMDataCard class="m-r-12" borderRadius="6px">
          <template #content>
            <div class="flex items-center justify-center m-b-24">
              <img :src="$withBase('/assets/img/bimdata_icon-plugin.svg')" alt="" />
            </div>
            <h4 class="color-primary">Plugin</h4>
            <p>Develop your own plugins to increase the efficiency of your tools.</p>
            <a
              href="https://developers-staging.bimdata.io/viewer/customize_the_ui.html#plugin"
              target="_blank"
            >
              <BIMDataButton width="125px" color="secondary" fill radius>Try</BIMDataButton>
            </a>
          </template>
        </BIMDataCard>
        <BIMDataCard borderRadius="6px">
          <template #content>
            <div class="flex items-center justify-center m-b-24">
              <img :src="$withBase('/assets/img/bimdata_icon-viewer_sdk.svg')" alt="" />
            </div>
            <h4 class="color-primary">Viewer SDK</h4>
            <p>You can develop, test, build, package and share your plugin easily.</p>
            <RouterLink to="/viewer/viewer_sdk.html">
              <BIMDataButton width="125px" color="secondary" fill radius>Explore</BIMDataButton>
            </RouterLink>
          </template>
        </BIMDataCard>
      </div>
    </section>
    <section class="bimdata-documentation__home__ds p-y-24">
      <div class="flex items-center">
        <div class="bimdata-documentation__home__ds__img">
          <img :src="$withBase('/assets/img/bimdata_img-ds.png')" alt="" />
        </div>
        <div class="bimdata-documentation__home__ds__right">
          <div class="bimdata-documentation__home__ds__right--icon">
            <img :src="$withBase('/assets/img/design-system_logo.png')" alt="" />
          </div>
          <h2 class="bimdata-h2 m-b-12">Design System</h2>
          <p class="color-granite m-y-12">
            We have developed a Vue.js library that contains a set of components and demos for
            building interactive user interfaces. It is composed of UI patterns and components,
            typography, colours and associated tools, iconography, functional elements/components.
            All this is made available to developers to create plugins faster with a unified design.
          </p>
          <a href="https://design.bimdata.io/" target="_blank">
            <BIMDataButton width="125px" color="primary" fill radius>Learn more</BIMDataButton>
          </a>
        </div>
      </div>
    </section>
    <section class="bimdata-documentation__home__questions p-y-42">
      <h2 class="bimdata-h2">Do you have a question ?</h2>
      <p class="bimdata-text color-granite">
        We're always here to help. Check out our support, contact our super helpful
        <a href="mailto:support@bimdata.io" class="color-primary">support team</a>.
      </p>
      <p class="bimdata-text color-granite">
        Your data will be treated in accordance with our
        <a href="https://bimdata.io/en/terms-of-services/" class="color-primary" target="_blank"
          >Privacy Policy</a
        >, which sets out the rights you have in respect of your data.
      </p>
    </section>
    <section class="bimdata-documentation__home__footer p-y-42">
      <h2 class="bimdata-h2 m-b-12">Ready to build ?</h2>
      <div class="flex justify-center items-center">
        <a href="https://connect.bimdata.io/" target="_blank">
          <BIMDataButton width="125px" color="secondary" fill radius class="m-r-18"
            >Sign up</BIMDataButton
          >
        </a>
        <a href="https://form.typeform.com/to/cQIOr6zI" target="_blank">
          <BIMDataButton width="125px" color="default" fill radius class="m-l-18"
            >Contact us</BIMDataButton
          >
        </a>
      </div>
    </section>
  </div>
</template>

<script>
import { BIMDataButton, BIMDataCard } from "@bimdata/design-system";
//import BIMDataCard from "@bimdata/design-system/dist/js/BIMDataComponents/BIMDataCard.js";

import Navbar from "@vuepress/theme-default/components/Navbar.vue";

export default {
  components: {
    BIMDataCard,
    BIMDataButton,
    Navbar,
  },
};
</script>

<style lang="scss" scoped>
@import "../../../node_modules/@bimdata/design-system/dist/css/design-system.css";
@import "../../../node_modules/@bimdata/design-system/dist/scss/_BIMDataVariables.scss";
.bimdata-documentation__home {
  /* custom HEADER HOME */
  &__header {
    margin-top: calc(60px + 34px);
    h1 {
      text-align: center;
    }
    .home_links {
      width: 100%;
      .bimdata-card {
        margin-right: 53px;
        padding: 16px;
        max-width: 330px;
        text-align: center;
        img {
          margin: auto;
          height: 220px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        h3 {
          position: relative;
          &::after {
            content: "";
            position: absolute;
            width: 16px;
            height: 2px;
            bottom: -7px;
            left: calc(50% - (16px / 2));
            background-color: $color-secondary;
          }
        }
        p {
          margin: 18px 0;
          min-height: 60px;
          display: flex;
          align-items: center;
        }
        .bimdata-btn {
          margin: auto;
        }
        &:last-child {
          margin-right: 0;
        }
      }
    }
  }
  /* custom CONTENT & QUESTIONS & FOOTER HOME */
  &__content,
  &__questions,
  &__footer {
    text-align: center;
    h2 {
      margin: 0 0 12px;
      padding: 0;
      border: none;
    }
    p {
      margin: 0;
      line-height: 1.5;
    }
  }
  /* custom CONTENT HOME */
  &__content {
    .bimdata-card {
      padding: 16px;
      width: 204px;
      border: 1px solid $color-tertiary-lightest;
      box-shadow: none;
      transition: all ease 0.2s;
      .flex {
        height: 47px;
        img {
          height: 40px;
        }
      }
      h4 {
        margin-bottom: 12px;
      }
      p {
        margin-bottom: 12px;
        min-height: 85px;
      }
      .bimdata-btn {
        margin: auto;
      }
      &:hover {
        box-shadow: 0px 2px 10px rgba($color-black, 0.1);
        transition: all ease 0.2s;
      }
    }
  }
  /* custom DESIGN SYSTEM SECTION */
  &__ds {
    background-color: #f0f5ff;
    .flex {
      margin: auto;
      width: 1200px;
    }
    &__img {
      img {
        width: 436px;
      }
    }
    &__right {
      margin-left: 62px;
      h2 {
        padding: 0;
        border: none;
        position: relative;
      }
      &--icon {
        background: white;
        border-radius: 50%;
        width: 60px;
        height: 60px;
        display: flex;
        align-items: center;
        justify-content: center;
        img {
          height: 32px;
        }
      }
    }
  }
  &__questions {
    margin: 0;
    background: #dce7ff;
  }
  /* custom FOOTER HOME */
  &__footer {
    background-color: $color-primary;
    color: $color-white;
  }
}
</style>

<style lang="scss">
@import "../../../node_modules/@bimdata/design-system/dist/scss/BIMDataVariables.scss";
.navbar {
  padding: 0 24px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0px 2px 10px rgba($color-black, 0.1);
  .home-link {
    width: 130px;
    .can-hide {
      display: none;
    }
  }
  .links {
    padding: 0;
    width: calc(50% + (257px / 2));
    height: 100%;
    position: initial;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .search-box {
      margin: 0;
      input {
        width: 217px;
        border: none;
        color: $color-primary;
        border-radius: 3px;
        background-color: $color-tertiary-lightest;
      }
    }
    .nav-links {
      height: 100%;
      align-items: center;
      display: flex;
      .nav-item {
        height: 100%;
      }
      a {
        padding: 0 12px;
        height: 100%;
        display: flex;
        align-items: center;
        color: $color-primary;
        &:hover {
          border-bottom: 2px solid #fdf3d4;
        }
        &.router-link-active {
          border-bottom: 2px solid $color-secondary;
        }
        span {
          display: none;
        }
      }
    }
  }
}
</style>
