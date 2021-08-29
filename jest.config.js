module.exports = {
  preset: '@vue/cli-plugin-unit-jest/presets/typescript-and-babel',
  transform: {
    '.*\\.(vue)$': 'unplugin-vue2-script-setup/jest',
  },
  setupFilesAfterEnv: ['<rootDir>/tests/unit/setup.ts'],
  collectCoverageFrom: ['src/{lib,services,composables,components}/**', '!**/node_modules/**'],
  coverageReporters: ['text-summary', 'html'],
}
