# figma-vue-boilerplate

Features:
* Vue
* TypeScript
* [figma-plugin-ds](https://thomas-lowry.github.io/figma-plugin-ds/) vue components
* [RPC](https://github.com/Morglod/rpct-js)
* Selection change listener

Vue components implemented on [figma-plugin-ds](https://thomas-lowry.github.io/figma-plugin-ds/) styles.

# RPC

Connect to UI from Plugin side:
```ts
uiApi = await connectToUI<PluginMethods, UIMethods>(figma, {
    createRectangle(width, height) {
        const rect = figma.createRectangle();
        rect.resize(width, height);
        figma.currentPage.appendChild(rect);
        return rect.id;
    },

    // ...
});
```

Connect to Plugin from UI and invoke `createRectangle`:
```ts
api = proxyMapRemote(
    await connectToPlugin<PluginMethods, UIMethods>({})
);

createdNodeId = await api.createRectangle(100, 50);

api.listenSelectionChange((selectedIds: string[]) => {
    console.warn('selection change', selectedIds);
});
```

RPC is fully typed.

# How to use?

1. Clone this repo
2. Save plugin's manifest to `/plugin-public`
3. Set plugin directory in figma to `/dist`
4. Run `npm run build` to rebuild plugin

Write UI code in `/ui-src`  
Write Plugin code in `/plugin-src`

# How to use RPC?

1. Specify your protocol in [`/plugin-src/iapi.d.ts`](./plugin-src/iapi.d.ts) file
2. Implement it in [`/plugin-src/index.ts`](./plugin-src/index.ts) & [`/ui-src/App.vue`](./ui-src/App.vue)

[Learn more about RPC](https://github.com/Morglod/rpct-js) (you can pass callbacks as args!)

# Attention
Do not use libraries depends on pollyfils such as 'core-js' (pug templates too), because [Figma's plugin environment](https://github.com/Agoric/realms-shim) doesnt support global pollyfils used in 'core-js'.