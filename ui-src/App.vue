<template>
    <div id="app">
        <SectionTitle>Create rectangle</SectionTitle>
        <Input label="Width" v-model="width" icon="arrow-left-right" />
        <Input label="Height" v-model="height" icon="arrow-up-down" />
        <Button primary @click="create()">Create</Button>
        <Label v-if="!!createdNodeId">Created new node with id = "{{ createdNodeId }}"</Label>
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
import { connectToPlugin, Api, DefaultConfig } from 'rpct/lib/figma';
import { UIMethods, PluginMethods } from '../plugin-src/iapi';

export default Vue.extend({
    name: "app",
    components: {
        ...FigmaDs,
    },
    data: () => ({
        width: '100',
        height: '20',
        api: undefined! as Api<PluginMethods, UIMethods>,
        createdNodeId: '',
    }),
    methods: {
        async create() {
            this.createdNodeId = await this.api.callMethod('createRectangle', +this.width, +this.height);
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
