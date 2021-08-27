# Vue 2 Final Boilerplate

> Vue 2 can be better, even perfect.

## Tech Stack
- Framework: [Vue 2.6](https://github.com/vuejs/vue/releases/tag/v2.6.14) & [@vue/composition-api](https://github.com/vuejs/composition-api) & [vue2-script-setup](https://github.com/antfu/unplugin-vue2-script-setup)
- Language: [TypeScript](https://www.typescriptlang.org/)
- IDE/LSP: [Volar](https://github.com/johnsoncodehk/volar) or [Vim coc-volar](https://github.com/yaegassy/coc-volar)
- Tools: [vue-cli](https://github.com/vuejs/vue-cli) & [vite](https://vitejs.dev/) by [vue-cli-plugin-vite](https://github.com/IndexXuan/vue-cli-plugin-vite)

## Why
- Vue 2 for legacy browsers and old projects.
- TypeScript play well with Vue 2 if you use `defineComponent` or `script setup` with `composition-api`.
- Volar make perfect IDE support for Vue with full LSP features.
- vite is fast for development and vue-cli for bundling webapp.

## Usage

### Project setup
```
yarn
```

### Compiles and hot-reloads for development
```
yarn serve / yarn dev
yarn vite
```

### Compiles and minifies for production
```
yarn build
(vite build, just for test: BUILD=true MODERN=true yarn vite)
```

### Run your unit tests
```
yarn test:unit
```

### Lints and fixes files
```
yarn lint
```
