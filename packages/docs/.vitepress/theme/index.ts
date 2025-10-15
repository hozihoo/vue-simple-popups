import type { EnhanceAppContext, Theme } from "vitepress";
import DefaultTheme from "vitepress/theme";

import { DemoPreview } from "../components/index";

import "./style";
import "virtual:uno.css";
import "vue-simple-popups/assets/index.css";
import "@nolebase/vitepress-plugin-git-changelog/client/style.css";

export default {
  async enhanceApp(ctx: EnhanceAppContext) {
    const { app } = ctx;
    app.component("DemoPreview", DemoPreview);
  },
  extends: DefaultTheme,
} satisfies Theme;
