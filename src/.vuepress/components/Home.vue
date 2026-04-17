<template>
  <div class="bimdata-documentation__home">
    <Navbar />
    <section class="bimdata-documentation__home__header m-b-48">
      <div class="home_title flex">
        <h1 class="bimdata-h1">Documentation</h1>
        <h3>Go from idea to integration: guides, APIs, and examples.</h3>
      </div>
      <div class="home_links flex justify-center">
        <BIMDataCard borderRadius="8px">
          <template #content>
            <img
              :src="$withBase('/assets/img/bimdata_icon-api.png')"
              alt=""
              height="111px"
              width="144px"
            />
            <div>
              <h3 class="color-primary">API</h3>
              <p>
                BIMData’s API gives you the tools to upload and manage your project models (IFC,
                PDFs, DWGs, point clouds, and 360° photos) and retrieve structured data from them.
              </p>
            </div>
            <RouterLink to="/api/introduction/overview">
              <BIMDataButton color="primary" outline width="45px" height="45px">
                <span class="btn-arrow">
                  <Icon :name="'arrow'" :rotate="180" size="xxs" />
                </span>
                <span class="btn-text m-l-12">Voir plus</span>
              </BIMDataButton>
            </RouterLink>
          </template>
        </BIMDataCard>
        <BIMDataCard borderRadius="8px">
          <template #content>
            <img
              :src="$withBase('/assets/img/bimdata_icon-viewer.png')"
              alt=""
              height="111px"
              width="170px"
            />
            <div>
              <h3 class="color-primary">Viewer</h3>
              <p>
                BIMData offers a customizable 3D viewer that lets you view, inspect, and manipulate
                your models in real time.
              </p>
            </div>
            <RouterLink to="/viewer/">
              <BIMDataButton color="primary" outline width="45px" height="45px">
                <span class="btn-arrow">
                  <Icon :name="'arrow'" :rotate="180" size="xxs" />
                </span>
                <span class="btn-text m-l-12">Voir plus</span>
              </BIMDataButton>
            </RouterLink>
          </template>
        </BIMDataCard>
        <BIMDataCard borderRadius="8px">
          <template #content>
            <img
              :src="$withBase('/assets/img/bimdata_icon-on_premises.png')"
              alt=""
              height="111px"
              width="140px"
            />
            <div>
              <h3 class="color-primary">On-Premises</h3>
              <p>
                BIMData's On-Premises provides you the possibility to host our solutions on your
                servers.
              </p>
            </div>
            <RouterLink to="/on-premises/getting_started.html">
              <BIMDataButton color="primary" outline width="45px" height="45px">
                <span class="btn-arrow">
                  <Icon :name="'arrow'" :rotate="180" size="xxs" />
                </span>
                <span class="btn-text m-l-12">Voir plus</span>
              </BIMDataButton>
            </RouterLink>
          </template>
        </BIMDataCard>
        <BIMDataCard borderRadius="8px">
          <template #content>
            <img
              :src="$withBase('/assets/img/bimdata_icon-user_guide.png')"
              alt=""
              height="104px"
              width="154px"
            />
            <div>
              <h3 class="color-primary">User-Guide</h3>
              <p>
                User guides help you get started with BIMData and walk you through key workflows
                step by step.
              </p>
            </div>
            <RouterLink to="/user-guide/creer-un-compte-bimdata.html">
              <BIMDataButton color="primary" outline width="45px" height="45px">
                <span class="btn-arrow">
                  <Icon :name="'arrow'" :rotate="180" size="xxs" />
                </span>
                <span class="btn-text m-l-12">Voir plus</span>
              </BIMDataButton>
            </RouterLink>
          </template>
        </BIMDataCard>
      </div>
    </section>
    <section class="bimdata-documentation__home__content m-b-48">
      <div class="home_title flex">
        <h2 class="bimdata-h2">How Can We Help?</h2>
        <p class="color-granite">
          Here are a few items we think might help you get started faster with BIMData.io depending
          on your needs.
        </p>
      </div>

      <div class="cards flex justify-center">
        <BIMDataCard borderRadius="6px">
          <template #content>
            <div class="flex m-r-24">
              <img :src="$withBase('/assets/img/bimdata_icon-ifc.svg')" alt="" />
            </div>
            <div class="flex flex-col items-start">
              <h4 class="color-primary">IFC</h4>
              <p>
                Build BIM tools by freeing yourself from technical complexity to focus on your
                business.
              </p>
              <a
                href="https://developers-staging.bimdata.io/api/introduction/overview.html#apis"
                target="_blank"
              >
                <BIMDataButton class="btn-tertiary" width="125px" color="primary" outline
                  >Learn more</BIMDataButton
                >
              </a>
            </div>
          </template>
        </BIMDataCard>
        <BIMDataCard borderRadius="6px">
          <template #content>
            <div class="flex m-r-24">
              <img :src="$withBase('/assets/img/bimdata_icon-bcf.svg')" alt="" />
            </div>
            <div class="flex flex-col items-start">
              <h4 class="color-primary">BCF</h4>
              <p>Access, create, share, export your BCFs with our BCF API.</p>
              <a
                href="https://developers-staging.bimdata.io/api/introduction/overview.html#apis"
                target="_blank"
              >
                <BIMDataButton class="btn-tertiary" width="125px" color="primary" outline
                  >Explore</BIMDataButton
                >
              </a>
            </div>
          </template>
        </BIMDataCard>
        <BIMDataCard borderRadius="6px">
          <template #content>
            <div class="flex m-r-24">
              <img :src="$withBase('/assets/img/bimdata_icon-open_source.svg')" alt="" />
            </div>
            <div class="flex flex-col items-start">
            <h4 class="color-primary">Open source</h4>
            <p>You can install our platform on your own server.</p>
            <a href="https://github.com/bimdata/platform-next" target="_blank">
              <BIMDataButton class="btn-tertiary" width="125px" color="primary" outline
                >Discover</BIMDataButton
              >
            </a>
            </div>
          </template>
        </BIMDataCard>
        <BIMDataCard borderRadius="6px">
          <template #content>
            <div class="flex m-r-24">
              <img :src="$withBase('/assets/img/bimdata_icon-plugins.svg')" alt="" />
            </div>
            <div class="flex flex-col items-start">
              <h4 class="color-primary">Plugin</h4>
              <p>Develop your own plugins to increase the efficiency of your tools.</p>
              <a
                href="https://developers-staging.bimdata.io/viewer/customize_the_ui.html#plugin"
                target="_blank"
              >
                <BIMDataButton class="btn-tertiary" width="125px" color="primary" outline
                  >Try</BIMDataButton
                >
              </a>
            </div>
          </template>
        </BIMDataCard>
        <BIMDataCard borderRadius="6px">
          <template #content>
            <div class="flex m-r-24">
              <img :src="$withBase('/assets/img/bimdata_icon-sdk.svg')" alt="" />
            </div>
            <div class="flex flex-col items-start">
              <h4 class="color-primary">Viewer SDK</h4>
              <p>You can develop, test, build, package and share your plugin easily.</p>
              <RouterLink to="/viewer/viewer_sdk.html">
                <BIMDataButton class="btn-tertiary" width="125px" color="primary" outline
                  >Explore</BIMDataButton
                >
              </RouterLink>
            </div>
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
  .home_title {
    justify-content: center;
    flex-direction: column;
    width: 83vw;
    align-items: flex-start;
    margin: auto;
    h1 {
      font-size: 43px;
      margin-bottom: 0;
    }
    h2 {
      font-size: 25px;
    }
    h3 {
      font-size: 18px;
      color: #205dbd;
      border: none;
    }
  }
  /* custom HEADER HOME */
  &__header {
    margin-top: calc(60px + 34px);
    h1 {
      text-align: center;
    }
    .home_links {
      gap: 12px;
      width: 83vw;
      margin: auto;
      justify-content: space-between;
      .bimdata-card {
        padding: 8px;
        flex: 1;
        box-shadow: none;
        border: 1px solid #d8d8d8;
        :deep(.bimdata-card__content) {
          height: 410px;
          display: flex;
          flex-direction: column;
          justify-content: space-around;
        }
        h3 {
          margin: 0;
          position: relative;
          font-size: 33px;
        }
        p {
          margin: 12px 0 0;
          min-height: 60px;
          display: flex;
          align-items: center;
          font-size: 16px;
          line-height: 24px;
        }
        .bimdata-btn {
          border-radius: 50px;
          transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
          .btn-text {
            display: none;
          }
          &:hover {
            width: 145px;
            background-color: $color-primary;
            color: $color-white;
            transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
            .btn-text {
              display: inline;
              transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
            }
          }
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
    .cards {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      gap: 38px;
      width: 83vw;
      margin: 30px auto;
      justify-content: flex-start;
    }
    .bimdata-card {
      width: 375px;
      border: none;
      box-shadow: none;
      transition: all ease 0.2s;
      :deep(.bimdata-card__content) {
        display: flex;
      }
      .flex {
        img {
          height: 40px;
        }
      }
      h4 {
        margin: 0 0 12px;
      }
      p {
        margin-bottom: 12px;
        text-align: left;
      }
      .btn-tertiary {
        border-radius: 50px;
        border-color: #205dbd;
        color: #205dbd;
        transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
        &:hover {
          background-color: #205dbd;
          color: $color-white;
          transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
        }
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
