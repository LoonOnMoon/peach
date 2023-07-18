import vuetify from 'vite-plugin-vuetify'
import { createResolver } from '@nuxt/kit'

const { resolve } = createResolver(import.meta.url)

export default defineNuxtConfig({
  ssr: false,
  css: [
    'vuetify/lib/styles/main.sass',
    '@mdi/font/css/materialdesignicons.min.css',
  ],
  build: {
    transpile: ['vuetify'],
  },
  hooks: {
    'vite:extendConfig': (config) => {
      // @ts-ignore
      config.plugins.push(
        vuetify({
          // autoImport: true,
          styles: { configFile: resolve('./assets/styles/settings.scss') },
        })
      )
    },
  },
  vite: {
    ssr: {
      noExternal: ['vuetify'],
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use './assets/styles/settings.scss' as *;`,
        },
      },
    },
  },
  modules: [
    '@nuxtjs/i18n',
  ],
  // @ts-ignore
  i18n: {
    vueI18n: './i18n.config.ts',
    locales: [
      'en', 
      'sr',
      'mk',
      'hr',
      'sl',
      'he',
      'bg',
      'sq',
      'ro',
      'hu',
    ],  // used in URL path prefix
    defaultLocale: 'en', 
  }
})