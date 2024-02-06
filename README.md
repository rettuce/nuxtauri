# Tauri + Vue3/Nuxt3(Nitro)SSR Minimal Starter

[Tauri documentation](https://tauri.app/v1/guides/getting-started/setup)
[Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction)

This template is based on [tauri-nuxt-template](https://github.com/HuakunShen/tauri-nuxt-template) with personal customizations.

Vue3/Nuxt3(NitroServer)の SSR + Tauri での AppPacking。

### docs

http://blog.rettuce.com/javascript/nuxt3-tauri/

### modules

```bash
"dependencies": {
  "@tauri-apps/api": "^2.0.0-beta.0",
  "@tauri-apps/plugin-shell": "^2.0.0-beta.0",
  "nuxt": "^3.10.1",
  "vue": "^3.4.15",
  "vue-router": "^4.2.5"
},
"devDependencies": {
  "@tauri-apps/cli": "^2.0.0-beta.0",
  "typescript": "^5.0.2"
}
```

### scripts

```bash
# install
$ yarn install

# nuxt dev + tauri
$ yarn tauri dev

# app packing
$ yarn tauri build

```
