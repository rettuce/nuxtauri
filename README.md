# Tauri + Vue3/Nuxt3(Nitro)SSR Minimal Starter

[Tauri documentation](https://tauri.app/v1/guides/getting-started/setup)
[Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction)

This template is based on [tauri-nuxt-template](https://github.com/HuakunShen/tauri-nuxt-template) with personal customizations.

Vue3/Nuxt3(NitroServer)の SSR + Tauri での AppPacking。

### docs

http://blog.rettuce.com/javascript/nuxt3-tauri/

### modules

```bash
### dev
"@tauri-apps/cli": "^1.5.9",
"nuxt": "^3.9.3",
"vue": "^3.4.14",
"vue-router": "^4.2.5"
### dependencies
"@tauri-apps/api": "^1.5.3"
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
