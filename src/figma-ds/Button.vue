<template>
    <button
        class="button"
        :class="{
            'button--primary': primary,
            'button--primary-destructive': primary && destructive,
            'button--secondary': secondary,
            'button--secondary-destructive': secondary && destructive,
        }"
        :disabled="disabled"
    >
        <slot>
            Button
        </slot>
    </button>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';

export default Vue.extend({
    props: {
        primary: Boolean as PropType<boolean>,
        secondary: Boolean as PropType<boolean>,
        destructive: Boolean as PropType<boolean>,
        disabled: Boolean as PropType<boolean>,
    }
});
</script>

<style lang="scss">
button.button {
    cursor: pointer;
}
</style>