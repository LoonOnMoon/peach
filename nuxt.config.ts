import vuetify from 'vite-plugin-vuetify'
import { createResolver } from '@nuxt/kit'

const { resolve } = createResolver(import.meta.url)

export default defineNuxtConfig({
  ssr: true,
  css: [
    'assets/styles/main.scss',
    '@mdi/font/css/materialdesignicons.min.css',
  ],
  build: {
    transpile: ['vuetify'],
  },
  sourcemap: {
    server: false,
    client: false,
  },
  vite: {
    ssr: {
      noExternal: ['vuetify'],
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use './assets/styles/vuetify/settings.scss' as *;`,
        },
      },
    },
  },
  hooks: {
    'vite:extendConfig': (config) => {
      // @ts-ignore
      config.plugins.push(
        vuetify({
          autoImport: true,
          styles: { configFile: 'assets/styles/vuetify/settings.scss' },
        })
      )
    },
  }
})