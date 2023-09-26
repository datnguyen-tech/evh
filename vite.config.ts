import vue from '@vitejs/plugin-vue'
import dns from 'dns'
import { URL, fileURLToPath } from 'node:url'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { defineConfig } from 'vite'

dns.setDefaultResultOrder('verbatim')
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: tag => ['swiper-slide', 'swiper-container'].includes(tag)
        }
      }
    }),
    AutoImport({
      imports: ['vue', 'vue-router', 'pinia'],
      eslintrc: {
        enabled: true
      },
      dts: './auto-imports.d.ts'
      // if vueTemplate: true, vscode can not go to definition of component, it conflict with unplugin-vue-components
      // vueTemplate: true
    }),
    Components({
      dts: true
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  // css: {
  //   preprocessorOptions: {
  //     scss: {
  //       additionalData: `@use "@/assets/styles/_variable.scss" as *;`
  //     }
  //   }
  // },
  server: {
    port: 8080,
    open: true
  }
})
