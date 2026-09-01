<template>
  <footer class="bimdata-footer">
    <div class="bimdata-footer__container">

      <!-- Main -->
      <div class="bimdata-footer__main">

        <!-- Brand -->
        <div class="bimdata-footer__brand">
          <a href="/" class="bimdata-footer__logo">
            <img
              class="bimdata-footer__logo-light"
              src="/images/bimdata-documentation-logo_light.svg"
              alt="BIMData Documentation"
            />

            <img
              class="bimdata-footer__logo-dark"
              src="/images/bimdata-documentation-logo_dark.svg"
              alt="BIMData Documentation"
            />
          </a>

          <p class="bimdata-footer__description">
            Build BIM features into your applications.
            APIs, SDKs and tools for the AEC industry.
          </p>
        </div>

        <!-- Get started -->
        <nav class="bimdata-footer__column">
          <h2>Get started</h2>

          <a href="/api/guides/application.html">
            Create an application
          </a>

          <a href="/api/introduction/quick_start.html">
            Upload a model
          </a>

          <a href="/viewer/">
            Build a BIM viewer
          </a>

          <a href="/api/reference.html">
            Query BIM data
          </a>
        </nav>

        <!-- Products -->
        <nav class="bimdata-footer__column">
          <h2>Products</h2>

          <a href="/api/introduction/overview.html">
            REST API
          </a>

          <a href="/viewer/viewer_sdk.html">
            Viewer SDK
          </a>

          <a href="/viewer/guide/plugins.html">
            Plugins
          </a>

          <a href="/on-premises/getting_started.html">
            On-premises
          </a>
        </nav>

        <!-- Resources -->
        <nav class="bimdata-footer__column">
          <h2>Resources</h2>

          <a href="/api/reference.html">
            API Reference
          </a>

          <a href="/viewer/examples/">
            Examples
          </a>

          <a href="/viewer/release_notes.html">
            Changelog
          </a>

          <a href="/api/support.html">
            Support
          </a>

          <a
            href="https://github.com/bimdata"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://design.bimdata.io"
            target="_blank"
            rel="noopener noreferrer"
          >
            Design system
          </a>
        </nav>

      </div>

      <!-- Bottom -->
      <div class="bimdata-footer__bottom">

        <span class="bimdata-footer__copyright">
          © {{ new Date().getFullYear() }} BIMData
        </span>

        <nav class="bimdata-footer__legal">
          <!-- <a href="/privacy/">
            Privacy
          </a>

          <a href="/terms/">
            Terms
          </a> -->

          <a href="/contact/">
            Contact
          </a>
        </nav>

      </div>

    </div>
  </footer>
</template>
