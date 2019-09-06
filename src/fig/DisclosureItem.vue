<template>
    <li class="disclosure__item" :class="{ 'disclosure--expanded': isExpanded, 'disclosure--section': section }">
        <div class="disclosure__label disclosure--section" @click="toggle">{{ label }}</div>
        <div class="disclosure__content">
            <slot>
                Panel content here
            </slot>
        </div>
    </li>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';

const Disclosure = Vue.extend({
    props: {
        label: String as PropType<string>,
        value: {
            type: Boolean as PropType<boolean>,
            default: undefined,
        },
        expanded: {
            type: Boolean as PropType<boolean>,
            default: undefined,
        },
        section: Boolean as PropType<boolean>,
    },
    data: () => ({
        expandedState: false,
    }),
    methods: {
        toggle() {
            const newState = !this.isExpanded;
            this.expandedState = newState;
            this.$emit('input', newState);
        }
    },
    computed: {
        isExpanded(): boolean {
            if (this.value !== undefined) return this.value;
            if (this.expanded !== undefined) return this.expanded;
            return this.expandedState;
        }
    },
});

export default Disclosure;
</script>

<style lang="scss">
</style>