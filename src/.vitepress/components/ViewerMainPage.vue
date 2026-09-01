<template>
  <div class="bimdata-viewer-main-page">
    <a href="/viewer/guide" style="text-decoration: none; color: inherit; flex: 0 32%">
      <div class="bimdata-viewer-main-page__card">
        <div class="bimdata-viewer-main-page__card__title">Guide</div>
        <div class="bimdata-viewer-main-page__card__emoji">🗺️</div>
        <div class="bimdata-viewer-main-page__card__detail">
          The guide walks you through every aspect of the BIMDataViewer in full detail.
        </div>
      </div>
    </a>
    <a href="/viewer/examples" style="text-decoration: none; color: inherit; flex: 0 32%">
      <div class="bimdata-viewer-main-page__card">
        <div class="bimdata-viewer-main-page__card__title">Examples</div>
        <div class="bimdata-viewer-main-page__card__emoji">🏗️</div>
        <div class="bimdata-viewer-main-page__card__detail">
          A series of practical examples to help you learn how to use the BIMDataViewer.
        </div>
      </div>
    </a>
    <a href="/viewer/reference" style="text-decoration: none; color: inherit; flex: 0 32%">
      <div class="bimdata-viewer-main-page__card">
        <div class="bimdata-viewer-main-page__card__title">Reference</div>
        <div class="bimdata-viewer-main-page__card__emoji">📚</div>
        <div class="bimdata-viewer-main-page__card__detail">
          The detailed API reference of the BIMDataViewer.
        </div>
      </div>
    </a>
  </div>
</template>

<style lang="scss" scoped>
.bimdata-viewer-main-page {
  a {
    font-weight: normal;
    text-decoration: none;
    color: inherit;
    flex: 0 32%;
    line-height: 1.4;
  }

  @media screen and (min-width: 1024px) {
    display: flex;
    justify-content: space-between;
    align-items: stretch;
  }

  &__card {
    height: 100%;
    margin: 6px;
    padding: 20px;
    border: 1px solid var(--bimdata-border-card);
    border-radius: var(--radius-md);
    background: var(--bimdata-surface-card);
    text-align: center;

    cursor: pointer;
    transition: all 0.3s;
    &:hover {
      background: var(--bimdata-surface-card-hover);
      border-color: var(--bimdata-border-card);
      transition: all 0.3s;
    }

    &__title {
      font-size: 24px;
      font-weight: 500;
      margin-bottom: 10px;
      color: var(--vp-c-text-1);
    }

    &__emoji {
      font-size: 35px;
      margin-bottom: 10px;
      text-align: center;
    }

    &__detail {
      font-size: 15px;
      color: var(--vp-c-text-2);
      font-weight: 400;
    }
  }
}
</style>
