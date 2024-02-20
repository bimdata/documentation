<template>
    <div class="bimdata-viewer-main-page">
        <RouterLink to="/viewer/guide" style="text-decoration: none; color: inherit; flex: 0 32%;">
            <div class="bimdata-viewer-main-page__card">
                <div class="bimdata-viewer-main-page__card__title">Guide</div>
                <div class="bimdata-viewer-main-page__card__emoji">🗺️</div>
                <div class="bimdata-viewer-main-page__card__detail">
                    The guide walks you through every aspect of the BIMDataViewer in full detail.
                </div>
            </div>
        </RouterLink>
        <RouterLink to="/viewer/examples" style="text-decoration: none; color: inherit; flex: 0 32%;">
            <div class="bimdata-viewer-main-page__card">
                <div class="bimdata-viewer-main-page__card__title">Examples</div>
                <div class="bimdata-viewer-main-page__card__emoji">🏗️</div>
                <div class="bimdata-viewer-main-page__card__detail">
                    A series of practical guides to help you learn how to use the BIMDataViewer.
                </div>
            </div>
        </RouterLink>
        <RouterLink to="/viewer/reference" style="text-decoration: none; color: inherit; flex: 0 32%;">
            <div class="bimdata-viewer-main-page__card">
                <div class="bimdata-viewer-main-page__card__title">Reference</div>
                <div class="bimdata-viewer-main-page__card__emoji">📚</div>
                <div class="bimdata-viewer-main-page__card__detail">
                    The detailed API reference of the BIMDataViewer.
                </div>
            </div>
        </RouterLink>
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
        border: 1px solid #eaecef;
        border-radius: 4px;
        padding: 20px;
        margin: 20px;
        text-align: center;
        cursor: pointer;
        transition: all 0.3s;
        height: calc(100% - 40px); // 20px margin * 2

        &:hover {
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }

        &__title {
            font-weight: 500;
            font-size: 24px;
            margin-bottom: 10px;
        }

        &__emoji {
            font-size: 40px;
            margin-bottom: 10px;
            text-align: center;
        }

        &__detail {
            font-size: 16px;
            text-align: left;
        }
    }
}
</style>
