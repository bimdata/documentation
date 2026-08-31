<template>
  <div class="code-terminal">
    <!-- Header -->
    <div class="code-terminal__header">
      <div class="code-terminal__dots">
        <span class="code-terminal__dot code-terminal__dot--red"></span>
        <span class="code-terminal__dot code-terminal__dot--yellow"></span>
        <span class="code-terminal__dot code-terminal__dot--green"></span>
      </div>

      <span class="code-terminal__title">
        {{ title }}
      </span>

      <button
        class="code-terminal__copy"
        type="button"
        @click="copyCode"
      >
        {{ copied ? "Copied!" : "Copy" }}
      </button>
    </div>

    <!-- Code -->
    <div
      v-if="highlightedCode"
      class="code-terminal__body"
      v-html="highlightedCode"
    />

    <!-- Fallback avant le highlighting -->
    <pre
      v-else
      class="code-terminal__body code-terminal__fallback"
    ><code>{{ code }}</code></pre>

    <!-- Footer -->
    <div class="code-terminal__footer">
      <span>{{ language }}</span>

      <a class="button-arrow" href="/viewer/">
        Open the full quickstart
      </a>
    </div>
  </div>
</template>

<script>
import { codeToHtml } from "shiki";

export default {
  props: {
    title: {
      type: String,
      default: "Viewer.js",
    },

    language: {
      type: String,
      default: "html",
    },

    code: {
      type: String,
      required: true,
    },
  },

  data() {
    return {
      copied: false,
      highlightedCode: "",
    };
  },

  async mounted() {
    this.highlightedCode = await codeToHtml(this.code, {
      lang: this.language,
      themes: {
        light: "material-theme-ocean",
        dark: "material-theme-ocean",
      },
      defaultColor: false,
    });
  },

  methods: {
    async copyCode() {
      try {
        await navigator.clipboard.writeText(this.code);

        this.copied = true;

        setTimeout(() => {
          this.copied = false;
        }, 1500);
      } catch (error) {
        console.error("Unable to copy code:", error);
      }
    },
  },
};
</script>

<style scoped>
.code-terminal {
  display: block;
  width: 100%;
  max-width: 100%;
  min-width: 0;
  overflow: hidden;
  border: 1px solid var(--bimdata-terminal-border);
  border-radius: 10px;
  background: var(--bimdata-terminal-bg);
  box-shadow: 0 12px 32px rgba(16, 34, 53, 0.08);
  box-sizing: border-box;
}

/* ========================================
   HEADER
   ======================================== */
.code-terminal__header {
  height: 36px;
  display: flex;
  align-items: center;
  min-width: 0;
  padding: 0 12px;
  border-bottom: 1px solid var(--bimdata-terminal-border);
  background: var(--bimdata-terminal-bg);
  box-sizing: border-box;
}

.code-terminal__dots {
  display: flex;
  align-items: center;
  gap: 5px;
  flex-shrink: 0;
}

.code-terminal__dot {
  width: 6px;
  height: 6px;
  flex: 0 0 6px;
  border-radius: 50%;
}

.code-terminal__dot--red {
  background: #f34046;
}

.code-terminal__dot--yellow {
  background: #f2b22b;
}

.code-terminal__dot--green {
  background: #4db7a6;
}

.code-terminal__title {
  min-width: 0;
  margin-left: 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-family: var(--vp-font-family-mono);
  font-size: 10px;
  line-height: 1;
  color: #9fb0c0;
}

.code-terminal__copy {
  flex-shrink: 0;
  margin-left: auto;
  padding: 2px 4px;
  border: 0;
  background: transparent;
  font-family: var(--vp-font-family-mono);
  font-size: 10px;
  color: #9fb0c0;
  cursor: pointer;
  transition: color 0.15s ease;
}

.code-terminal__copy:hover {
  color: var(--vp-c-brand-1);
}

/* ========================================
   CODE
   ======================================== */
.code-terminal__body {
  display: block;
  width: 100%;
  min-width: 0;
  min-height: 280px;
  max-height: 390px;
  margin: 0;
  padding: 18px 20px;
  box-sizing: border-box;
  overflow-x: auto;
  overflow-y: auto;
  font-family: var(--vp-font-family-mono);
  font-size: 11px;
  line-height: 1.65;
  text-align: left;
  white-space: pre;
}

.code-terminal__body :deep(pre) {
  display: block;
  width: max-content;
  min-width: 100%;
  margin: 0;
}

.code-terminal__body :deep(code) {
  font-family: inherit;
  font-size: inherit;
}

.code-terminal__fallback {
  color: var(--vp-c-text-2);
}

/* ========================================
   SHIKI LIGHT / DARK
   ======================================== */

.code-terminal__body :deep(.shiki) {
  margin: 0;
  background: transparent !important;
}

.code-terminal__body :deep(.shiki span) {
  color: var(--shiki-light);
}

.dark .code-terminal__body :deep(.shiki span) {
  color: var(--shiki-dark);
}

/* ========================================
   FOOTER
   ======================================== */
.code-terminal__footer {
  display: flex;
  align-items: center;
  min-width: 0;
  padding: 9px 12px;
  border-top: 1px solid var(--bimdata-terminal-border);
  font-family: var(--vp-font-family-mono);
  font-size: 9px;
  color: #9fb0c0;
  box-sizing: border-box;
}

.code-terminal__footer > span {
  flex-shrink: 0;
}

.code-terminal__footer a {
  min-width: 0;
  margin-left: auto;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: var(--vp-c-brand-2);
  text-decoration: none;
}

/* ========================================
   DARK MODE
   ======================================== */
.dark .code-terminal {
  box-shadow: 0 16px 40px rgba(255, 255, 255, 0.1);
}
</style>