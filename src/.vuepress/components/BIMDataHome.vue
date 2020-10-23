<template>
  <div>
    <section>
      <div>
        <div class="home_illustration">
          <img :src="$withBase('/assets/img/home_illu.svg')" alt="" />
        </div>
        <div class="home_links">
          <a href="api">API</a>
          <a href="platform">Platform</a>
          <a href="viewer">Viewer</a>
        </div>
      </div>
    </section>
  </div>
</template>

<style>
.home_illustration {
  text-align: center;
}

.home_links {
  display: flex;
  justify-content: space-around;
}
</style>