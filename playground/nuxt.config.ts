import dayjsModule from '..'

export default defineNuxtConfig({
  modules: [
    dayjsModule
  ],
  dayjs: {
    locales: ['en', 'es', 'pt'],
    defaultLocale: 'en',
    plugins: [
      'customParseFormat',
      'utc',
      'timezone',
      'relativeTime',
      'localizedFormat',
      'localeData',
      'isToday',
      'updateLocale'
    ]
  }
})
