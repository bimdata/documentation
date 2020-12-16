<template>
  <div class="bimdata-documentation__home">
    <Navbar />
    <section class="bimdata-documentation__home__header">
      <h1 class="bimdata-h1">Documentation</h1>
      <div class="home_illustration flex items-center justify-center">
        <img :src="$withBase('/assets/img/home_illu.svg')" alt="" />
      </div>
      <div class="home_links flex justify-center">
        <BIMDataCard>
          <template #content>
            <img :src="$withBase('/assets/img/bimdata_icon-viewer.svg')" alt="" />
            <h5 class="bimdata-h5 color-primary">Viewer</h5>
            <p>
              BIMData provides you a customizable 3D Viewer, to see and manipulate your models.
            </p>
            <RouterLink to="/viewer/">
              <BIMDataButton width="165px" color="primary" fill radius>Viewer</BIMDataButton>
            </RouterLink>
          </template>
        </BIMDataCard>
        <BIMDataCard>
          <template #content>
            <img :src="$withBase('/assets/img/bimdata_icon-api.svg')" alt="" />
            <h5 class="bimdata-h5 color-primary">API</h5>
            <p>
              BIMData's API provides you tools to upload IFCs, manage your files and retreive your
              model data.
            </p>
            <RouterLink to="/api/introduction/overview">
              <BIMDataButton width="165px" color="primary" fill radius>API</BIMDataButton>
            </RouterLink>
          </template>
        </BIMDataCard>
        <!-- <BIMDataCard>
          <template #content>
            <img :src="$withBase('/assets/img/bimdata_icon-platform.svg')" alt="" />
            <h5 class="bimdata-h5 color-primary">Platform</h5>
            <p>BIMData's API provides you tools to upload IFCs, manage your files and retreive your model data.</p>
            <RouterLink to="/platform/">
              <BIMDataButton width="165px" color="primary" fill radius>Platform</BIMDataButton>
            </RouterLink>
          </template>
        </BIMDataCard> -->
      </div>
    </section>
    <section class="bimdata-documentation__home__content">
      <h2 class="bimdata-h2">How Can We Help?</h2>
      <p class="bimdata-text">
        Here are a few items we think might help you get started faster with BIMData.io depending on
        your needs.
      </p>
      <div class="flex justify-center m-t-24">
        <BIMDataCard class="m-r-24">
          <template #content>
            <div class="flex items-center justify-center m-b-24">
              <img :src="$withBase('/assets/img/bimdata_icon-ifc.svg')" alt="" />
            </div>
            <h4 class="bimdata-h4 color-primary">IFC</h4>
            <p>
              A scope is an important concept using the API. Using scopes is a way to handle the
              credentials of your application.
            </p>
            <BIMDataButton width="125px" color="secondary" fill radius>Try it now</BIMDataButton>
          </template>
        </BIMDataCard>
        <BIMDataCard class="m-r-24">
          <template #content>
            <div class="flex items-center justify-center m-b-24">
              <img :src="$withBase('/assets/img/bimdata_icon-bcf.svg')" alt="" />
            </div>
            <h4 class="bimdata-h4 color-primary">BCF</h4>
            <p>
              The authentication is fully implementing OpenID Connect offering to the users a secure
              authentication.
            </p>
            <BIMDataButton width="125px" color="secondary" fill radius>Try it now</BIMDataButton>
          </template>
        </BIMDataCard>
        <BIMDataCard class="m-r-24">
          <template #content>
            <div class="flex items-center justify-center m-b-24">
              <img :src="$withBase('/assets/img/bimdata_icon-open_source.svg')" alt="" />
            </div>
            <h4 class="bimdata-h4 color-primary">Open source</h4>
            <p>An example showing using the API, how to get the elements of your Model</p>
            <BIMDataButton width="125px" color="secondary" fill radius>Try it now</BIMDataButton>
          </template>
        </BIMDataCard>
        <BIMDataCard>
          <template #content>
            <div class="flex items-center justify-center m-b-24">
              <img :src="$withBase('/assets/img/bimdata_icon-plugin.svg')" alt="" />
            </div>
            <h4 class="bimdata-h4 color-primary">Plugin</h4>
            <p>How-To create your application on BIMData Connect</p>
            <BIMDataButton width="125px" color="secondary" fill radius>Try it now</BIMDataButton>
          </template>
        </BIMDataCard>
      </div>
    </section>
    <section class="bimdata-documentation__home__ds p-y-24">
      <div class="flex items-center">
        <div class="bimdata-documentation__home__ds__img">
          <img :src="$withBase('/assets/img/bimdata_img-ds.png')" alt="" />
        </div>
        <div class="bimdata-documentation__home__ds__text">
          <h2 class="bimdata-h2">Design <span class="color-secondary">System</span></h2>
          <p>
            Nous avons développé une bibliothèque VueJs qui contient un ensemble de composants et de
            démos pour la construction d'interfaces utilisateurs interactives. Il est composé de
            patterns et composantes UI, typographie, couleurs et outils associés, iconographie,
            éléments/composants fonctionnels. Tout cela est mis à disposition des développeurs pour
            créer des plugins.
          </p>
          <a href="https://design.bimdata.io/" target="_blank">
            <BIMDataButton width="125px" color="primary" fill radius>Tester</BIMDataButton>
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { BIMDataCard, BIMDataButton } from "@bimdata/design-system/components.js";

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
@import "../../../node_modules/@bimdata/design-system/dist/scss/BIMData.scss";
.bimdata-documentation__home {
  section {
    margin-bottom: 60px;
  }
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
        h5 {
          position: relative;
          &::after{
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
}

.bimdata-documentation__home__content,
.bimdata-documentation__home__footer {
  text-align: center;
}

.bimdata-documentation__home__content .bimdata-card {
  padding: 16px;
}
.bimdata-documentation__home__content .bimdata-card h3 {
  margin: 0;
}
.bimdata-documentation__home__content .bimdata-card p {
  min-height: 70px;
}
  /* custom DESIGN SYSTEM SECTION */
  &__ds {
    background-color: $color-tertiary-lightest;
    .flex {
      margin: auto;
      width: 1200px;
    }
    &__img {
    }
    &__text {
      margin-left: 62px;
      h2 {
        border: none;
        position: relative;
        &::before {
          content: "";
          position: absolute;
          width: 46px;
          height: 5px;
          left: 0;
          top: -32px;
          background-color: $color-secondary;
        }
      }
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
          border-bottom: 2px solid rgba($color-secondary, 0.3);
        }
        &.router-link-active{
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
