import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from "path"
import svgr from 'vite-plugin-svgr';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  server: {
    port: 7666,
  },
  resolve: {
    alias: {
      "@common": path.resolve(__dirname, "src/common"),
      "@enums": path.resolve(__dirname, "src/common/enums.js"),
      "@components": path.resolve(__dirname, "src/components"),
      "@pages": path.resolve(__dirname, "src/pages"),
      "@slices": path.resolve(__dirname, "src/store/slices"),
      "@icons": path.resolve(__dirname, "src/assets/icons"),
      "@images": path.resolve(__dirname, "src/assets/images"),
      "@services": path.resolve(__dirname, "src/services"),
      "@routes": path.resolve(__dirname, "src/routes"),
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@common/_variables" as *;`,
      },
    },
  },

})