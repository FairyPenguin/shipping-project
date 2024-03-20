import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

import path from "node:path"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {

      "@components": path.resolve(__dirname, "./src/components"),
      "@uicomponents": path.resolve(__dirname, "./src/components/UiComponents"),
      "@assets": path.resolve(__dirname, "./src/assets"),
      "@images": path.resolve(__dirname, "./src/assets/images"),
      "@pages": path.resolve(__dirname, "./src/pages"),
      "@layouts": path.resolve(__dirname, "./src/Layouts"),
      "@utilites": path.resolve(__dirname, "./utilites"),
      "@types": path.resolve(__dirname, "./types"),

    }

  }
})
