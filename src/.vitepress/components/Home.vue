<template>
  <div class="bimdata-design-system bimdata-documentation__home">
    <section class="hero m-b-48">
      <div class="hero-content">
        <div class="eyebrow">BIMData Documentation</div>
        <h1>Build BIM features into <strong>your application</strong></h1>
        <p>
          Upload, view, annotate and extract data from IFC, DWG/DXF, PDF, point clouds and 360°
          images using the BIMData API and viewer SDK.
        </p>
        <div class="hero-actions flex">
          <a href="/viewer/" class="button button-filled button-filled-primary button-md">
            Open the viewer quickstart
          </a>
          <a href="/api/reference.html" class="button button-filled button-filled-secondary button-md">
            Open the API Reference
          </a>
        </div>
        <HomeSearch />
      </div>
      <div class="hero-terminal">
        <CodeTerminal title="Viewer.js" language="html" :code="viewerCdnCode" />
      </div>
    </section>
    <div class="formats-bar">
      <span>SUPPORTED FORMATS</span>
      <strong>IFC</strong>
      <strong>DWG</strong>
      <strong>DXF</strong>
      <strong>IMAGES</strong>
      <strong>PDF</strong>
      <strong>POINT CLOUDS</strong>
      <strong>360° IMAGES</strong>
    </div>
    <section>
      <div class="container">
        <div class="section-header">
          <div>
            <div class="eyebrow">Start here</div>

            <h2>What are you trying to build?</h2>
          </div>

          <p class="section-description">
            Choose your goal and we'll guide you to the documentation, APIs and SDKs you need.
          </p>
        </div>

        <div class="path-grid">
          <a href="/api/guides/application.html" class="path-card">
            <div class="path-icon">
              <img src="/images/bimdata-api_icon.svg" alt="API" />
            </div>

            <h3>Build an integration</h3>

            <p>
              Connect your application to BIMData, authenticate users and work with BIM projects.
            </p>
          </a>

          <a href="/viewer/" class="path-card">
            <div class="path-icon">
              <img src="/images/bimdata-viewer_icon.svg" alt="3D" />
            </div>

            <h3>Build a BIM viewer</h3>

            <p>Embed the Viewer SDK, display IFC models and build your own BIM experience.</p>
          </a>
        </div>
      </div>
    </section>
    <section>
      <div class="container">
        <div class="section-header">
          <div>
            <div class="eyebrow">Quickstart</div>
            <h2>Build your first BIM application</h2>
          </div>
          <p class="section-description">
            Follow the shortest path from authentication to displaying your first BIM model.
          </p>
        </div>

        <div class="quickstart-grid">
          <article class="step-card featured">
            <div class="step-number">
              <span>01</span>
              <span>START</span>
            </div>
            <h3>Create an application</h3>
            <p>Get your credentials and create your first BIMData application.</p>
            <a href="/api/guides/application.html" class="mini-link button-arrow"> Authentication </a>
          </article>

          <article class="step-card">
            <div class="step-number">
              <span>02</span>
              <span>API</span>
            </div>
            <h3>Upload a model</h3>
            <p>Create a project and upload your first IFC file.</p>
            <a href="/api/introduction/quick_start.html" class="mini-link button-arrow"> Upload guide </a>
          </article>

          <article class="step-card">
            <div class="step-number">
              <span>03</span>
              <span>VIEWER</span>
            </div>
            <h3>Display your model</h3>
            <p>Load your model and display it using the BIMData Viewer.</p>
            <a href="/viewer/" class="mini-link button-arrow"> Viewer guide </a>
          </article>

          <article class="step-card">
            <div class="step-number">
              <span>04</span>
              <span>DATA</span>
            </div>
            <h3>Query your data</h3>
            <p>Retrieve elements, properties and relationships from your BIM models.</p>
            <a href="/api/reference.html" class="mini-link button-arrow"> API reference </a>
          </article>
        </div>
      </div>
    </section>

    <section id="docs">
      <div class="container">
        <div class="section-header">
          <div>
            <div class="eyebrow">Documentation</div>
            <h2>Find what you need</h2>
          </div>

          <p class="section-description">
            Guides, tutorials and references organized around what you want to accomplish.
          </p>
        </div>

        <div class="docs-grid">
          <a href="/viewer/" class="doc-card">
            <span class="doc-type"> Tutorial </span>
            <h3>Build a viewer</h3>
            <p>Embed the BIMData Viewer and display your first IFC model.</p>
            <span class="mini-link button-arrow"> Read tutorial </span>
          </a>

          <a href="/api/introduction/quick_start.html" class="doc-card">
            <span class="doc-type"> Tutorial </span>
            <h3>Make your first API call</h3>
            <p>Authenticate your application and create your first BIMData request.</p>
            <span class="mini-link button-arrow"> Start tutorial </span>
          </a>

          <a href="/api/reference.html" class="doc-card">
            <span class="doc-type"> Guide </span>
            <h3>Query BIM data</h3>
            <p>Retrieve elements, properties and relationships from your IFC models.</p>
            <span class="mini-link button-arrow"> Read guide </span>
          </a>

          <a href="/api/introduction/quick_start.html" class="doc-card">
            <span class="doc-type"> Guide </span>
            <h3>Create a project</h3>
            <p>Create projects, upload models and organize your BIMData workspace.</p>
            <span class="mini-link button-arrow"> Read guide </span>
          </a>

          <a href="/on-premises/getting_started.html" class="doc-card">
            <span class="doc-type"> Advanced </span>
            <h3>Deploy on-premises</h3>
            <p>Understand deployment, infrastructure and configuration options.</p>
            <span class="mini-link button-arrow"> Learn more </span>
          </a>

          <a href="/api/reference.html" class="doc-card">
            <span class="doc-type"> Reference </span>
            <h3>API reference</h3>
            <p>Endpoints, parameters, responses and authentication methods.</p>
            <span class="mini-link button-arrow"> Open reference </span>
          </a>
        </div>
      </div>
    </section>

    <section id="products">
      <div class="container">
        <div class="section-header">
          <div>
            <div class="eyebrow">BIMData products</div>

            <h2>Explore BIMData</h2>
          </div>

          <p class="section-description">
            APIs, SDKs and deployment options to build BIM applications for the AEC industry.
          </p>
        </div>

        <div class="product-grid">
          <a href="/api/introduction/overview.html" class="product-card">
            <div class="product-label">API</div>

            <h3>REST API</h3>

            <p>Upload models, query BIM data and manage projects.</p>

            <span class="mini-link button-arrow"> View API </span>
          </a>

          <a href="/viewer/viewer_sdk.html" class="product-card">
            <div class="product-label">SDK</div>

            <h3>Viewer SDK</h3>

            <p>Embed a customizable BIM viewer directly into your application.</p>

            <span class="mini-link button-arrow"> View SDK </span>
          </a>

          <a href="/on-premises/getting_started.html" class="product-card">
            <div class="product-label">On-premises</div>

            <h3>On-premises</h3>

            <p>Deploy BIMData in your own infrastructure and environment.</p>

            <span class="mini-link button-arrow"> Learn more </span>
          </a>

          <a href="/viewer/guide/plugins.html" class="product-card">
            <div class="product-label">Platform</div>

            <h3>Plugins</h3>

            <p>Extend the BIMData Viewer and build custom workflows.</p>

            <span class="mini-link button-arrow"> Explore plugins </span>
          </a>
        </div>
      </div>
    </section>

    <section id="resources">
      <div class="container">
        <div class="section-header">
          <div>
            <div class="eyebrow">Resources</div>

            <h2>More from BIMData</h2>
          </div>

          <p class="section-description">
            Updates, examples, system status and useful resources for developers.
          </p>
        </div>

        <div class="resource-grid">
          <a href="/viewer/release_notes.html" class="resource-card">
            <div class="resource-icon">
              <img src="/images/bimdata-changelog_icon.svg" alt="BIMData changelog" />
            </div>
            <strong>Changelog</strong>
            <span>Viewer updates & releases</span>
          </a>

          <!-- <a href="#" class="resource-card">
            <div class="resource-icon">
              <img src="/images/bimdata-status_icon.svg" alt="BIMData status" />
            </div>
            <strong>API status</strong>
            <span>Uptime & incidents</span>
          </a> -->

          <a href="https://github.com/bimdata/documentation" target="_blank" class="resource-card">
            <div class="resource-icon">
              <img src="/images/bimdata-github_icon.svg" alt="Github" />
            </div>
            <strong>Github</strong>
            <span>Open source code & SDKs</span>
          </a>

          <a href="https://design.bimdata.io" target="_blank" class="resource-card">
            <div class="resource-icon">
              <img src="/images/bimdata-design-system_icon.svg" alt="Design system" />
            </div>
            <strong>Design system</strong>
            <span>Vue.js UI components</span>
          </a>

          <a href="/api/support.html" class="resource-card">
            <div class="resource-icon">
              <img src="/images/bimdata-support_icon.svg" alt="Support" />
            </div>
            <strong>Support</strong>
            <span>Team help & community</span>
          </a>

          <a href="/viewer/examples/" class="resource-card">
            <div class="resource-icon">
              <img src="/images/bimdata-examples_icon.svg" alt="Examples" />
            </div>
            <strong>Examples</strong>
            <span>Tutorials & demos</span>
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import HomeSearch from "../theme/components/HomeSearch.vue";
import CodeTerminal from "../theme/components/CodeTerminal.vue";
import viewerCdnCode from "../snippets/viewer-cdn.js";

export default {
  components: {
    HomeSearch,
    CodeTerminal,
    viewerCdnCode,
  },

  data() {
    return {
      viewerCdnCode,
    };
  },
};
</script>

<style>
.bimdata-documentation__home {
  .hero {
    padding: 64px 32px 72px;
    margin: auto;
    max-width: var(--vp-layout-max-width);
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(420px, 0.9fr);
    gap: 64px;
    align-items: center;

    .hero-content {
      display: grid;
      gap: 12px;
    }

    .eyebrow {
      font-family: var(--vp-font-family-mono);
      font-size: 10px;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      color: var(--vp-c-brand-1);
    }

    h1 {
      max-width: 680px;
      margin: 0;
      font-size: clamp(40px, 5vw, 64px);
      line-height: 0.98;
      letter-spacing: -0.045em;
      font-weight: 800;

      strong {
        color: var(--vp-c-brand-1);
      }
    }

    p {
      color: var(--vp-c-text-2);
    }

    .hero-actions {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, max-content));
      gap: 16px;
    }
    #local-search {
      width: 100%;
      .DocSearch-Button {
        width: 100%;
      }
    }
  }

  .formats-bar {
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 48px;
    font-size: 14px;
    font-weight: 700;
    text-transform: uppercase;
    color: var(--vp-c-text-2);
    background-color: var(--vp-c-bg-elv);
    border-top: 1px solid var(--vp-c-divider);
    border-bottom: 1px solid var(--vp-c-divider);

    strong {
      font-weight: 400;
    }
  }

  .container {
    max-width: var(--vp-layout-max-width);
    margin-inline: auto;
    padding: 64px 32px 72px;

    .section-header {
      display: grid;
      grid-template-columns: minmax(0, 1fr) minmax(280px, 0.7fr);
      gap: 48px;
      align-items: end;
      margin-bottom: 36px;

      .eyebrow {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        margin-bottom: 12px;
        color: var(--vp-c-brand-1);
        font-family: var(--vp-font-family-mono);
        font-size: 10px;
        font-weight: 700;
        letter-spacing: 0.08em;
        text-transform: uppercase;
      }

      h2 {
        margin: 0;
        padding: 0;
        border: none;
        font-size: clamp(30px, 4vw, 42px);
        line-height: 1.05;
        letter-spacing: -0.035em;
      }

      .section-description {
        max-width: 560px;
        margin: 0;
        color: var(--vp-c-text-2);
        font-size: 14px;
        line-height: 1.7;
        text-align: right;
      }
    }

    /* ========================================
       START
       ======================================== */
    .path-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 16px;

      .path-card {
        position: relative;
        min-height: 190px;
        padding: 28px;
        border: 1px solid var(--bimdata-border-card);
        border-radius: var(--radius-md);
        background: var(--bimdata-surface-card);
        transition: all 180ms ease;

        &:hover {
          transform: translateY(-2px);
          background: var(--bimdata-surface-card-hover);
          transition: all 180ms ease;
        }

        .path-icon {
          display: grid;
          place-items: center;
          width: 50px;
          height: 50px;
          border-radius: 8px;
        }

        h3 {
          margin: 24px 0 8px;
          font-size: 20px;
          line-height: 1.3;
          color: var(--vp-c-text-1);
        }
        p {
          margin: 0;
          color: var(--vp-c-text-2);
        }

        /* API */
        &:nth-child(1) {
          .path-icon {
            background: rgba(78, 160, 232, 0.1);
            color: var(--bimdata-blue);
          }
          &:hover {
            border-color: rgba(78, 160, 232, 0.2);
          }
        }

        /* Viewer */
        &:nth-child(2) {
          .path-icon {
            background: rgba(249, 199, 44, 0.1);
            color: var(--bimdata-yellow);
          }

          &:hover {
            border-color: rgba(249, 199, 44, 0.2);
            background-color: rgba(249, 199, 44, 0.01);
          }
        }
      }
    }

    /* ========================================
       QUICKSTART
       ======================================== */
    .quickstart-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 12px;

      .step-card {
        min-height: 220px;
        padding: 22px;
        border: 1px solid var(--bimdata-border-card);
        border-radius: var(--radius-md);
        background: var(--bimdata-surface-card);
        transition: all 180ms ease;

        &:hover {
          transform: translateY(-2px);
          background: var(--bimdata-surface-card-hover);
          border-color: var(--bimdata-border-card);
        }

        .step-number {
          display: flex;
          justify-content: space-between;
          margin-bottom: 58px;
          color: var(--vp-c-brand-1);
          font-family: var(--vp-font-family-mono);
          font-size: 11px;
          font-weight: 700;
        }

        h3 {
          margin-bottom: 8px;
          font-size: 18px;
          line-height: 1.3;
          letter-spacing: -0.5px;
          color: var(--vp-c-text-1);
        }

        p {
          min-height: 48px;
          margin-bottom: 24px;
          color: var(--vp-c-text-2);
          font-size: 16px;
          line-height: 1.5;
        }

        .mini-link {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          color: var(--vp-c-brand-1);
          font-size: 14px;
          font-weight: 650;
        }

        /* Highlighted first step */
        &.featured {
          background: var(--vp-c-brand-soft);
          border-color: rgba(78, 160, 232, 0.3);
        }
      }
    }

    /* ========================================
       DOCUMENTATION
       ======================================== */
    .docs-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      border-top: 1px solid var(--bimdata-border-card);
      border-left: 1px solid var(--bimdata-border-card);
      border-radius: var(--radius-md);
      overflow: hidden;

      .doc-card {
        min-height: 190px;
        padding: 24px;
        border-right: 1px solid var(--bimdata-border-card);
        border-bottom: 1px solid var(--bimdata-border-card);
        background: var(--bimdata-surface-card);
        transition: all 180ms ease;

        .doc-type {
          display: inline-block;
          margin-bottom: 30px;
          color: var(--vp-c-brand-1);
          font-family: var(--vp-font-family-mono);
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 0.06em;
          text-transform: uppercase;
        }

        h3 {
          margin-bottom: 8px;
          font-size: 18px;
          line-height: 1.3;
          color: var(--vp-c-text-1);
        }

        p {
          margin-bottom: 24px;
          color: var(--vp-c-text-2);
          font-size: 16px;
          font-weight: 400;
          line-height: 1.6;
        }

        .mini-link {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          color: var(--vp-c-brand-1);
          font-size: 14px;
          font-weight: 650;
        }

        &:hover {
          background: var(--bimdata-surface-card-hover);
          .mini-link {
            &::after {
              transform: translateX(3px);
            }
          }
        }
      }
    }

    /* ========================================
       PRODUCTS
       ======================================== */
    .product-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 12px;

      .product-card {
        --product-color: var(--bimdata-api);
        position: relative;
        min-height: 180px;
        padding: 24px;
        overflow: hidden;
        border: 1px solid var(--bimdata-border-card);
        border-radius: var(--radius-md);
        background: var(--bimdata-surface-card);
        transition: all 180ms ease;

        &::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 2px;
          background: var(--product-color);
        }

        .product-label {
          margin-bottom: 24px;
          color: var(--vp-c-text-2);
          font-family: var(--vp-font-family-mono);
          font-size: 13px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        h3 {
          margin-bottom: 8px;
          font-size: 18px;
          line-height: 1.3;
          color: var(--vp-c-text-1);
        }

        p {
          margin-bottom: 22px;
          color: var(--vp-c-text-2);
          font-size: 16px;
          font-weight: 400;
          line-height: 1.6;
        }

        .mini-link {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          color: var(--vp-c-brand-1);
          font-size: 11px;
          font-weight: 650;
        }

        &:nth-child(2) {
          --product-color: var(--bimdata-viewer);
        }

        &:nth-child(3) {
          --product-color: var(--bimdata-on-premise);
        }

        &:nth-child(4) {
          --product-color: var(--bimdata-platform);
        }

        &:hover {
          transform: translateY(-2px);
          background: color-mix(in srgb, var(--product-color) 1%, var(--product-color) 1%);
          border-color: color-mix(in srgb, var(--product-color) 15%, var(--bimdata-border-card));
          .mini-link {
            &::after {
              transform: translateX(3px);
            }
          }
        }
      }
    }

    /* ========================================
       RESOURCES
       ======================================== */
    .resource-grid {
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      gap: 10px;

      .resource-card {
        padding: 20px;
        border: 1px solid var(--bimdata-border-card);
        border-radius: var(--radius-md);
        background: var(--bimdata-surface-card);
        transition: all 180ms ease;

        .resource-icon {
          margin-bottom: 12px;
          color: var(--vp-c-brand-1);
          font-family: var(--vp-font-family-mono);
          font-size: 14px;
        }

        strong {
          display: block;
          margin-bottom: 4px;
          font-size: 12px;
          color: var(--vp-c-text-1);
        }

        span {
          color: var(--vp-c-text-2);
          font-size: 10px;
        }

        &:hover {
          transform: translateY(-2px);
          background: var(--bimdata-surface-card-hover);
          border-color: var(--bimdata-border-card);
        }
      }
    }
  }
}

/* ========================================
   RESPONSIVE
   ======================================== */
/* ----------------------------------------
   TABLET / SMALL DESKTOP
   ≤ 1100px
   ---------------------------------------- */

@media (max-width: 1100px) {
  .bimdata-documentation__home {
    .hero {
      grid-template-columns: minmax(0, 1fr) minmax(360px, 0.8fr);
      gap: 40px;
      padding-inline: 28px;
    }

    .formats-bar {
      gap: 28px;
      padding-inline: 24px;
      font-size: 12px;
    }

    .container {
      padding-inline: 28px;
      .section-header {
        gap: 32px;
        .section-description {
          font-size: 13px;
        }
      }

      .quickstart-grid {
        grid-template-columns: repeat(2, 1fr);
      }

      .product-grid {
        grid-template-columns: repeat(2, 1fr);
      }

      .resource-grid {
        grid-template-columns: repeat(3, 1fr);
      }
    }
  }
}

/* ----------------------------------------
   TABLET
   ≤ 900px
   ---------------------------------------- */
@media (max-width: 900px) {
  .bimdata-documentation__home {
    .hero {
      grid-template-columns: 1fr;
      gap: 40px;
      padding: 48px 24px 56px;

      .hero-content {
        max-width: 720px;
      }

      h1 {
        max-width: 700px;
      }

      .hero-terminal {
        width: 100%;
        max-width: 720px;
      }
    }

    .formats-bar {
      justify-content: flex-start;
      overflow-x: auto;
      gap: 28px;
      padding-inline: 24px;
      white-space: nowrap;
      scrollbar-width: none;
      &::-webkit-scrollbar {
        display: none;
      }
    }

    .container {
      padding: 56px 24px 64px;
      .section-header {
        grid-template-columns: 1fr;
        gap: 12px;
        margin-bottom: 28px;
        .section-description {
          max-width: 600px;
          text-align: left;
        }
      }

      .path-grid {
        grid-template-columns: 1fr;
      }

      .quickstart-grid {
        grid-template-columns: repeat(2, 1fr);
      }

      .docs-grid {
        grid-template-columns: repeat(2, 1fr);
      }

      .product-grid {
        grid-template-columns: repeat(2, 1fr);
      }

      .resource-grid {
        grid-template-columns: repeat(3, 1fr);
      }
    }
  }
}

/* ----------------------------------------
   MOBILE
   ≤ 640px
   ---------------------------------------- */

@media (max-width: 640px) {
  .bimdata-documentation__home {
    .hero {
      gap: 32px;
      padding: 40px 20px 48px;

      .hero-content {
        gap: 10px;
      }

      .eyebrow {
        font-size: 9px;
      }

      h1 {
        font-size: clamp(36px, 11vw, 48px);
        line-height: 1;
        letter-spacing: -0.04em;
      }

      p {
        margin: 4px 0 8px;
        font-size: 14px;
        line-height: 1.6;
      }

      .hero-actions {
        grid-template-columns: 1fr;
        gap: 10px;
        width: 100%;
        .button {
          width: 100%;
          justify-content: center;
        }
      }

      .hero-terminal {
        width: 100%;
        max-width: none;
        min-width: 0;
        overflow: hidden;
      }
    }

    .formats-bar {
      height: 44px;
      gap: 24px;
      padding-inline: 20px;
      font-size: 10px;
    }

    .container {
      padding: 48px 20px 56px;
      .section-header {
        gap: 10px;
        margin-bottom: 24px;
        .eyebrow {
          margin-bottom: 8px;
          font-size: 9px;
        }

        h2 {
          font-size: clamp(28px, 8vw, 36px);
          line-height: 1.05;
        }

        .section-description {
          font-size: 13px;
          line-height: 1.6;
        }
      }

      /* ----------------------------------------
         START
         ---------------------------------------- */
      .path-grid {
        grid-template-columns: 1fr;
        gap: 12px;
        .path-card {
          min-height: 0;
          padding: 24px;
          .path-icon {
            width: 44px;
            height: 44px;
          }

          h3 {
            margin-top: 20px;
            font-size: 18px;
          }

          p {
            font-size: 14px;
            line-height: 1.5;
          }
        }
      }

      /* ----------------------------------------
         QUICKSTART
         ---------------------------------------- */
      .quickstart-grid {
        grid-template-columns: 1fr;
        gap: 10px;

        .step-card {
          min-height: 0;
          padding: 20px;

          .step-number {
            margin-bottom: 44px;
          }

          h3 {
            font-size: 17px;
          }

          p {
            min-height: 0;
            margin-bottom: 20px;
            font-size: 14px;
          }

          .mini-link {
            font-size: 13px;
          }
        }
      }

      /* ----------------------------------------
         DOCUMENTATION
         ---------------------------------------- */
      .docs-grid {
        grid-template-columns: 1fr;

        .doc-card {
          min-height: 0;
          padding: 22px;

          .doc-type {
            margin-bottom: 22px;
          }

          h3 {
            font-size: 17px;
          }

          p {
            margin-bottom: 20px;
            font-size: 14px;
            line-height: 1.5;
          }

          .mini-link {
            font-size: 13px;
          }
        }
      }

      /* ----------------------------------------
         PRODUCTS
         ---------------------------------------- */
      .product-grid {
        grid-template-columns: 1fr;
        gap: 10px;
        .product-card {
          min-height: 0;
          padding: 22px;
          .product-label {
            margin-bottom: 20px;
            font-size: 11px;
          }

          h3 {
            font-size: 17px;
          }

          p {
            margin-bottom: 20px;
            font-size: 14px;
            line-height: 1.5;
          }
        }
      }

      /* ----------------------------------------
         RESOURCES
         ---------------------------------------- */
      .resource-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 8px;
        .resource-card {
          min-width: 0;
          padding: 18px;
          .resource-icon {
            margin-bottom: 18px;
          }

          strong {
            font-size: 11px;
          }

          span {
            font-size: 9px;
            line-height: 1.4;
          }
        }
      }
    }
  }
}

/* ----------------------------------------
   SMALL MOBILE
   ≤ 480px
   ---------------------------------------- */
@media (max-width: 480px) {
  .bimdata-documentation__home {
    .hero {
      padding: 32px 16px 40px;

      h1 {
        font-size: clamp(34px, 11vw, 42px);
      }

      .hero-actions {
        .button {
          min-height: 44px;
          padding-inline: 16px;
          font-size: 13px;
        }
      }
    }

    .formats-bar {
      padding-inline: 16px;
      gap: 20px;
    }

    .container {
      padding: 40px 16px 48px;
      .section-header {
        h2 {
          font-size: 28px;
        }
      }

      .path-grid {
        .path-card {
          padding: 20px;
        }
      }

      .quickstart-grid {
        .step-card {
          padding: 18px;
        }
      }

      .docs-grid {
        .doc-card {
          padding: 20px;
        }
      }

      .product-grid {
        .product-card {
          padding: 20px;
        }
      }

      .resource-grid {
        grid-template-columns: 1fr 1fr;
        .resource-card {
          padding: 16px;
        }
      }
    }
  }
}
</style>
