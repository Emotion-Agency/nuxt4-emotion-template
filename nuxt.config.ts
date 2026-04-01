import { encodeConfig } from './cli/decodeEnv'
import { pageTransition } from './shared/transitions/base'

export default defineNuxtConfig({
  compatibilityDate: '2025-12-01',
  devtools: { enabled: false },

  css: ['~/assets/styles/index.scss'],

  app: {
    pageTransition: pageTransition as unknown,
  },

  typescript: {
    strict: false,
  },

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/styles/helpers/index.scss" as *;',
        },
      },
    },
    optimizeDeps: {
      include: [
        '@emotionagency/emotion-scroll',
        '@emotionagency/utils',
        'gsap',
        'gsap/Flip',
        'gsap/ScrollTrigger',
        '@vuelidate/core',
        '@vuelidate/validators',
        'reka-ui',
      ],
    },
  },

  eslint: {
    config: {
      typescript: true,
    },
  },

  modules: ['@vueuse/nuxt', '@nuxt/eslint', '@nuxt/icon', '@nuxt/fonts'],

  icon: {
    serverBundle: {
      collections: ['lucide'],
    },
  },

  runtimeConfig: {
    public: {
      value: encodeConfig({
        ENVIROMENT: process.env.NODE_ENV,
      }),
    },
  },
})
