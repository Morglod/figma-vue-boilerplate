<template>
    <div id="app">
        <SectionTitle>Create rectangle</SectionTitle>
        <Input label="Width" v-model="width" icon="arrow-left-right" />
        <Input label="Height" v-model="height" icon="arrow-up-down" />
        <Button primary @click="create()">Create</Button>
        <Label v-if="!!createdNodeId">Created new node with id = "{{ createdNodeId }}"</Label>
        <Label>Selected ids: {{ selectedNodeIds.join(', ') }}</Label>
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
import { api } from './api';

export default Vue.extend({
    name: "app",
    components: {
        ...FigmaDs,
    },
    data: () => ({
        width: '100',
        height: '20',
        createdNodeId: '',
        selectedNodeIds: [] as string[],
    }),
    methods: {
        async create() {
            this.createdNodeId = await api.createRectangle(+this.width, +this.height);
        }
    },
    mounted() {
        api.listenSelectionChange((selectedIds: string[]) => {
            this.selectedNodeIds = selectedIds;
        });
    }
});
</script>

<style lang="scss">
#app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin-top: 10px;
}
</style>
