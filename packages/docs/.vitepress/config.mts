import { defineConfig } from "vitepress";

import { demoPreviewPlugin } from "./plugins/demo-preview";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Vue Simple Popups",
  description: "A VitePress Site",
  srcDir: "src",
  base: '/vue-simple-popups/',
  markdown: {
    preConfig(md) {
      md.use(demoPreviewPlugin);
    },
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Guide", link: "/guide" },
    ],

    sidebar: [
      {
        text: "Usages",
        items: [
          { text: "Modal", link: "/guide/usages/modal-usages" },
          { text: "Dialog", link: "/guide/usages/dialog-usages" },
          { text: "Drawer", link: "/guide/usages/drawer-usages" },
          { text: "Captcha", link: "/guide/usages/captcha-usages" },
          { text: "Loading", link: "/guide/usages/loading-usages" },
          { text: "Feedback", link: "/guide/usages/feedback-usages" },
        ],
      },
      {
        text: "Templates",
        items: [{ text: "Loading", link: "/guide/templates/loading" }],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/hozihoo/vue-simple-popups.git" },
    ],
  },

  vite: {
    configFile: "./vite.config.ts",
  },
});
