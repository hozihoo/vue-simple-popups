import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import dts from "vite-plugin-dts";
import UnoCSS from "unocss/vite";
import path from "path";
export default defineConfig({
  plugins: [
    vue(),
    dts({
      outDir: "dist",
      include: ["src/**/*"],
      exclude: ["node_modules"],
    }),
    UnoCSS(),
  ],
  build: {
    lib: {
      entry: {
        "vue-simple-popups": path.resolve(__dirname, "src/index.ts"),
        templates: path.resolve(__dirname, "src/templates/index.ts"),
      },
      formats: ["es", "cjs"],
      fileName: (format, entryName) => `${entryName}.${format}.js`,
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        globals: {
          vue: "Vue",
        },
        assetFileNames: 'assets/index.[ext]'
      },
    },
    cssCodeSplit: true,
  },
});
