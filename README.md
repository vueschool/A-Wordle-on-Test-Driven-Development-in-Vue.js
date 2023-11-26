# A “Wordle” on Test-Driven-Development

In this hands-on course, you will learn how to write applications using Test-Driven Development.

You will make our own clone of the game Wordle completely from scratch! Besides learning Test Driven Development, this
course will also be a great way to sharpen your skills with Vue 3 and its composition API; as well as sharpen your
skills with Vitest and Vue Test Utils.

https://github.com/FRFlor/vue-school-wordle-on-tdd/assets/22578748/8307a81b-6c12-408c-86d0-551d57084446

# Tagging by episodes

Do note that this repository contains a series of Git Tags. Each tag represents the starting state of the code base for
that respective episode.

For example, if you want to skip straight to Episode 6, you can have your codebase synchronized with mine by
doing: `git checkout episode-6`


## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
   1) Run `Extensions: Show Built-in Extensions` from VSCode's command palette
   2) Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).