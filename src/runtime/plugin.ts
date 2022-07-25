
import dayjs from 'dayjs'
import duration from 'dayjs/plugin/duration'
import relativeTime from 'dayjs/plugin/relativeTime'
import advancedFormat from 'dayjs/plugin/advancedFormat'
import weekday from 'dayjs/plugin/weekday'
import { defineNuxtPlugin } from '#app'

dayjs.extend(duration)
dayjs.extend(relativeTime)
dayjs.extend(advancedFormat)
dayjs.extend(weekday)

declare module '#app' {
  interface NuxtApp {
    $dayjs: dayjs.Dayjs
 }
}

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $dayjs(date?: dayjs.ConfigType): dayjs.Dayjs
  }
}

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.provide('dayjs', dayjs)
})
