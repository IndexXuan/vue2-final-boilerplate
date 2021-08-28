module.exports = {
  preset: '@vue/cli-plugin-unit-jest/presets/typescript-and-babel',
  transform: {
    '.*\\.(vue)$': 'unplugin-vue2-script-setup/jest',
  },
}
