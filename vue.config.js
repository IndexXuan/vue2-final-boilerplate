/* eslint-disable @typescript-eslint/no-var-requires */

const scriptSetupOptions = {
  refTransform: false,
}

/** * @type {import('@vue/cli-service').ProjectOptions} */
module.exports = {
  configureWebpack: {
    plugins: [require('unplugin-vue2-script-setup/webpack')(scriptSetupOptions)],
  },
  chainWebpack(config) {
    // disable type check and let `vue-tsc` handles it
    config.plugins.delete('fork-ts-checker')
  },
  pluginOptions: {
    vite: {
      plugins: [require('unplugin-vue2-script-setup/vite')(scriptSetupOptions)],
      optimizeDeps: {
        include: [],
      },
      disabledTypeChecker: true,
      disabledLint: true,
    },
  },
}
