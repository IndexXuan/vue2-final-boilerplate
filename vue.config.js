/* eslint-disable @typescript-eslint/no-var-requires */

const scriptSetupOptions = {
  refTransform: false,
}

/** @type {import('@vue/cli-service').ProjectOptions} */
module.exports = {
  publicPath: process.env.PUBLIC_URL,
  transpileDependencies: [],
  productionSourceMap: process.env.GENERATE_SOURCEMAP === 'true',
  lintOnSave: process.env.NODE_ENV !== 'production',
  devServer: {
    overlay: {
      warnings: false,
      errors: true,
    },
  },
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
