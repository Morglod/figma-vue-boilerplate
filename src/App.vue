<template>
    <div id="app">
        <SectionTitle>Figma plugin boilerplate</SectionTitle>
        <Input label="Width" v-model.number="width" icon="arrow-left-right" />
        <Input label="Height" v-model.number="height" icon="arrow-up-down" />
        <Button primary @click="create()">Create</Button>
        <Divider />
        <a href="https://github.com/Morglod/figma-vue-boilerplate">
            <Button secondary class="button--margin-right">
                Boilerplate on github
            </Button>
        </a>
        <a href="https://thomas-lowry.github.io/figma-plugin-ds/">
            <Button secondary>
                UI kit
            </Button>
        </a>
    </div>
</template>

<script lang="ts">
import Vue from "vue";
import FigmaDs from '@/figma-ds';
import { connectToPlugin, Api } from 'rpct';
import { UIMethods, PluginMethods } from '../plugin-src/iapi';

export default Vue.extend({
    name: "app",
    components: {
        ...FigmaDs,
    },
    data: () => ({
        width: 0,
        height: 0,
        api: undefined! as Api<PluginMethods, UIMethods>,
    }),
    methods: {
        create() {
            this.api.callMethod('createRectangle', this.width, this.height);
        }
    },
    mounted() {
        this.api = connectToPlugin<PluginMethods, UIMethods>({
            // methods
        });
    }
});
</script>

<style lang="scss">
@import "@/figma-ds/lib.scss";

#app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin-top: 10px;
}
</style>
