import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import { dirname, resolve } from "path";
import { URL, fileURLToPath } from "url";

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [react()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  build: {
    outDir: resolve(dirname(fileURLToPath(import.meta.url)), '..', 'html'),
    emptyOutDir: true,
    rollupOptions: {
      // external: [...ComponentsService.getComponents()],
    },
  },
})
