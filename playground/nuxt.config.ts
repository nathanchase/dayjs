import dayjsModule from '..'

export default defineNuxtConfig({
  modules: [
    dayjsModule
  ],
  dayjs: {
    locales: ['en', 'es', 'pt'],

    defaultLocale: 'en',
    plugins: [
      'advancedFormat',
      'customParseFormat',
      'utc',
      'timezone',
      'relativeTime',
      'localizedFormat',
      'localeData',
      'isToday',
      'updateLocale',
      'weekday',
      'dayOfYear',
      'duration',
      'isBetween',
      'isLeapYear',
      'isSameOrAfter',
      'isSameOrBefore'
    ]
  }
})
