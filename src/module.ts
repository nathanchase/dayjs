import { resolve } from 'path'
import { fileURLToPath } from 'url'
import { defineNuxtModule, addPlugin } from '@nuxt/kit'

export interface ModuleOptions {
  addPlugin: boolean
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: '@nathanchase/nuxt-dayjs-module',
    configKey: 'dayjs',
    compatibility: {
      nuxt: '^3.0.0'
    }
  },

  defaults: {
    addPlugin: true
  },

  async setup (options, nuxt) {
    if (options.addPlugin) {
      const runtimeDir = fileURLToPath(new URL('./runtime', import.meta.url))
      await nuxt.options.build.transpile.push(runtimeDir)
      await addPlugin(resolve(runtimeDir, 'plugin'))
    }
  }
})
