import { defineNuxtPlugin } from '#app'
import '#build/dayjs.config.mjs'
import dayjs from 'dayjs/esm/index.js'

declare module '#app' {
  interface NuxtApp {
    $dayjs: typeof dayjs
  }
}
declare module 'vue' {
  interface ComponentCustomProperties {
    $dayjs: typeof dayjs
  }
}
declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $dayjs: typeof dayjs
  }
}

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.provide('dayjs', dayjs);
})
