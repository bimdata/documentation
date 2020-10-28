<template>
  <div class="bimdata-documentation__home">
    <section class="bimdata-documentation__home__header">
      <div class="home_illustration">
        <img :src="$withBase('/assets/img/home_illu.svg')" alt="" />
      </div>
      <div class="home_links">
        <BIMDataCard class="m-r-24">
          <template #content>
            <img :src="$withBase('/assets/img/bimdata_icon-api.svg')" alt="" />
            <p>BIMData provides you a customizable 3D Viewer, to see and manipulate your models.</p>
            <a class="bimdata-btn bimdata-btn__fill bimdata-btn__fill--primary bimdata-btn__radius" href="api">API</a>
          </template>
        </BIMDataCard>
        <BIMDataCard class="m-r-24">
          <template #content>
            <img :src="$withBase('/assets/img/bimdata_icon-guided_tour.svg')" alt="" />
            <p>Make your first steps and begin to work with the BIMData's API.</p>
            <a class="bimdata-btn bimdata-btn__fill bimdata-btn__fill--primary bimdata-btn__radius" href="platform">Platform</a>
          </template>
        </BIMDataCard>
        <BIMDataCard>
          <template #content>
            <img :src="$withBase('/assets/img/bimdata_icon-viewer.svg')" alt="" />
            <p>BIMData's API provides you tools to upload IFCs, manage your files and retreive your model data.</p>
            <a class="bimdata-btn bimdata-btn__fill bimdata-btn__fill--primary bimdata-btn__radius" href="viewer">Viewer</a>
          </template>
        </BIMDataCard>
      </div>
    </section>
    <section class="bimdata-documentation__home__content">
      <h2>How Can We Help?</h2>
      <p>Here are a few items we think might help you get started faster with BIMData.io depending on your needs.</p>
      <div class="flex">
        <BIMDataCard class="m-r-24">
          <template #content>
            <h3>Scopes</h3>
            <p>A scope is an important concept using the API. Using scopes is a way to handle the credentials of your application.</p>
            <BIMDataButton color="primary" fill radius >Try it now</BIMDataButton>
          </template>
        </BIMDataCard>
        <BIMDataCard class="m-r-24">
          <template #content>
            <h3>Authentication</h3>
            <p>The authentication is fully implementing OpenID Connect offering to the users a secure authentication.</p>
            <BIMDataButton color="primary" fill radius >Try it now</BIMDataButton>
          </template>
        </BIMDataCard>
        <BIMDataCard class="m-r-24">
          <template #content>
            <h3>How-to retrieve elements</h3>
            <p>An example showing using the API, how to get the elements of your Model</p>
            <BIMDataButton color="primary" fill radius >Try it now</BIMDataButton>
          </template>
        </BIMDataCard>
        <BIMDataCard>
          <template #content>
            <h3>Create an application</h3>
            <p>How-To create your application on BIMData Connect</p>
            <BIMDataButton color="primary" fill radius >Try it now</BIMDataButton>
          </template>
        </BIMDataCard>
      </div>
    </section>
    <section class="bimdata-documentation__home__footer">
      <h2>Do you have a question ?</h2>
      <p>We are available to help you. Check out how-to contact our support team.</p>
    </section>
  </div>
</template>

<script>
import BIMDataCard from "@bimdata/design-system/dist/js/BIMDataComponents/BIMDataCard.js";
import BIMDataButton from "@bimdata/design-system/dist/js/BIMDataComponents/BIMDataButton.js";

export default {
  components: {
    BIMDataCard,
    BIMDataButton
  }
}
</script>

<style scoped>
@import '../../../node_modules/@bimdata/design-system/dist/css/design-system.css';
h2{
  padding: 0;
  border-bottom: none;
}

.bimdata-documentation__home::before{
  content: "";
  background: linear-gradient(162.76deg,#d1e6ff -9.05%,rgba(248,248,249,0) 108.11%);
  height: 600px;
  position: absolute;
  width: 100%;
}

.bimdata-documentation__home section{
  margin-bottom: 30px;
}
.bimdata-documentation__home section .bimdata-card{
  flex: 1;
  text-align: center;
}
.bimdata-documentation__home section .bimdata-card h3{
  color: #2f374a;
}
.bimdata-documentation__home section .bimdata-card .bimdata-btn{
  margin: auto;
}

.home_links {
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  z-index: 2;
}
.bimdata-documentation__home__header{
  padding-bottom: 35px;
  position: relative;
  height: 565px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
}
.bimdata-documentation__home__header .bimdata-card{
  padding: 16px;
  max-width: 330px;
  z-index: 2;
}
.bimdata-documentation__home__header .bimdata-card img{
  margin: auto;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.bimdata-documentation__home__header .bimdata-card p{
  margin: 18px 0;
  min-height: 60px;
  display: flex;
  align-items: center;
}
.bimdata-documentation__home__header .bimdata-card .bimdata-btn{
  height: 32px;
  width: 150px;
}
.bimdata-documentation__home__header .bimdata-card .bimdata-btn:hover{
  text-decoration: none;
}

.bimdata-documentation__home__content, .bimdata-documentation__home__footer{
  text-align: center;
}

.bimdata-documentation__home__content .bimdata-card{
  padding: 16px;
}
.bimdata-documentation__home__content .bimdata-card h3{
  margin: 0;
}
.bimdata-documentation__home__content .bimdata-card p{
  min-height: 70px;
}

.home_illustration {
  position: absolute;
  right: calc(50% - 569px / 2);
  z-index: 0;
  top: 10%;
}

</style>