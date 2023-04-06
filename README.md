# @nathanchase/nuxt-dayjs-module

This is a Nuxt 3 compatible module built with the official Nuxt 3 [module-builder](https://github.com/nuxt/module-builder) for [dayjs](https://github.com/iamkun/dayjs/). This is meant as a Nuxt 3 version of [dayjs-module](https://github.com/nuxt-community/dayjs-module) to satisfy [Nuxt 3 support](https://github.com/nuxt-community/dayjs-module/issues/376).

Usage:
```js
// ./nuxt.config.ts
export default defineNuxtConfig({
  modules: [
    '@nathanchase/nuxt-dayjs-module'
  ]
  ...
});
```

Add dayjs plugins (ex: [duration](https://day.js.org/docs/en/plugin/duration)) via configuration in nuxt.config like so:
```js
dayjs: {
    plugins: [
      'duration',
      'relativeTime',
      'advancedFormat',
      'weekday'
    ]
}
```

See [/playground/app.vue](https://github.com/nathanchase/dayjs/blob/master/playground/app.vue) for working examples.

On npm: [https://www.npmjs.com/package/@nathanchase/nuxt-dayjs-module](https://www.npmjs.com/package/@nathanchase/nuxt-dayjs-module)

## Development

- Run 'npm install' to install required packages.
- Run `npm run dev:prepare` to generate type stubs.
- Use `npm run dev` to start [playground](./playground) in development mode.
```
