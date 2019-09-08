<template>
    <div
        @click="$emit('click', $event)"
        class="icon"
        :class="{
            ['icon--'+icon]: !!icon,
            'icon--blue': blue,
            'icon--black-3': black3,
            'icon--white': white,
            'icon--button': button,
            'icon--selected': selected,
            'icon--text': !!text,
        }"
    >
        <slot />
        {{ text }}
    </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';

export default Vue.extend({
    props: {
        icon: String as PropType<string>,
        blue: Boolean as PropType<boolean>,
        black3: Boolean as PropType<boolean>,
        white: Boolean as PropType<boolean>,
        button: Boolean as PropType<boolean>,
        selected: Boolean as PropType<boolean>,
        text: String as PropType<string>,
    }
});
</script>

<style lang="scss">
.icon--button {
    cursor: pointer;
}
</style>