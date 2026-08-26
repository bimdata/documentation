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
        <div class="flex">
          <a href="" class="button button-filled button-filled-primary button-md"> Open the viewer quickstart </a>
          <a href="" class="button button-filled button-filled-secondary button-md"> Open the API Reference </a>
        </div>
      </div>
      <div class="hero-terminal">
        <CodeTerminal title="Viewer.js" language="html" :code="viewerCdnCode" />
      </div>
    </section>
  </div>
</template>

<script>
import { BIMDataButton } from "@bimdata/design-system";
import CodeTerminal from "../theme/components/CodeTerminal.vue";
import viewerCdnCode from "../snippets/viewer-cdn.js";

export default {
  components: {
    BIMDataButton,
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
    .hero-content {
      display: grid;
      gap: 12px;
    }
    padding: 64px 32px 72px;
    margin: auto;
    max-width: var(--vp-layout-max-width);

    display: grid;

    grid-template-columns:
      minmax(0, 1fr)
      minmax(420px, 0.9fr);

    gap: 64px;

    align-items: center;
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
  }
}
</style>
