<template>
  <footer class="bimdata-footer">
    <div class="bimdata-footer__container">
      <div class="bimdata-footer__main">
        <!-- Brand -->
        <div class="bimdata-footer__brand">
          <a href="/" class="bimdata-footer__logo">
            <img
              data-v-262f00eb=""
              class="VPImage dark logo"
              src="/images/bimdata-documentation-logo_dark.svg"
              alt="BIMData"
            /><img
              data-v-262f00eb=""
              class="VPImage light logo"
              src="/images/bimdata-documentation-logo_light.svg"
              alt="BIMData"
            />
          </a>

          <p class="bimdata-footer__description">
            Build BIM features into your applications. APIs, SDKs and tools for the AEC industry.
          </p>
        </div>

        <!-- Documentation -->
        <nav class="bimdata-footer__column">
          <h2>Documentation</h2>

          <a href="/quickstart/">Quickstart</a>
          <a href="/guides/">Guides</a>
          <a href="/tutorials/">Tutorials</a>
          <a href="/api-reference/">API Reference</a>
          <a href="/examples/">Examples</a>
        </nav>

        <!-- Products -->
        <nav class="bimdata-footer__column">
          <h2>Products</h2>

          <a href="/rest-api/">REST API</a>
          <a href="/viewer-sdk/">Viewer SDK</a>
          <a href="/plugins/">Plugins</a>
          <a href="/on-premise/">On-premise</a>
        </nav>

        <!-- Resources -->
        <nav class="bimdata-footer__column">
          <h2>Resources</h2>

          <a href="https://github.com/bimdata" target="_blank" rel="noopener noreferrer">
            Github
          </a>

          <a href="/changelog/">Changelog</a>
          <a href="/status/">API Status</a>
          <a href="/support/">Support</a>
        </nav>
      </div>

      <!-- Bottom -->
      <div class="bimdata-footer__bottom">
        <span class="bimdata-footer__copyright"> © {{ new Date().getFullYear() }} BIMData </span>

        <nav class="bimdata-footer__legal">
          <a href="/privacy/">Privacy</a>
          <a href="/terms/">Terms</a>
          <a href="/contact/">Contact</a>
        </nav>
      </div>
    </div>
  </footer>
</template>
