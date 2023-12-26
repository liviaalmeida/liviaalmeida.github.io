import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue2'
import eslint from 'vite-plugin-eslint'
import { resolve } from 'path'

export default defineConfig({
  base: '',
  build: {
    chunkSizeWarningLimit: 550,
    outDir: '../',
    emptyOutDir: false,
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "@/assets/scss/variables.scss"; @import "@/assets/scss/fonts.scss";',
      },
    },
  },
  plugins: [
    vue(),
    eslint(),
  ],
  preview: {
    port: '8080',
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  server: {
    base: '/',
    host: 'localhost',
    port: '8080',
  },
})
