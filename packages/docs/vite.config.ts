import { defineConfig } from "vite";
import UnoCSS from "unocss/vite";

export default defineConfig({
  build: {
    chunkSizeWarningLimit: Infinity,
    minify: "terser",
  },
  plugins: [UnoCSS()],
  json: {
    stringify: true,
  },
  server: {
    host: "0.0.0.0",
    port: 6745,
  },
  ssr: {
    external: ["@vue/repl"],
  },
});
