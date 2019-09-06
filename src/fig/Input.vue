<template lang="pug">
    mixin INPUT(_class = "")
        input(
            type="input"
            class=_class
            :value="value"
            :disabled="disabled"
            :placeholder="placeholder"
            @change="evt => this.$emit('input', evt.target.value)"
            :id="uniqueId"
            @focusin="hasFocus = true"
            @focusout="hasFocus = false"
        )&attributes(attributes)

    div(v-if="!!this.label")
        label(class="label", :for="uniqueId") {{ label }}

        div(class="input-icon" v-if="!!this.icon")
            div(class="input-icon__icon")
                div(class="icon" :class="(this.hasFocus ? 'icon--blue' : 'icon--black-3') + (' icon--' + icon)")
            +INPUT("input-icon__input")
        
        +INPUT("input")(v-if="!this.icon")
    +INPUT("input")(v-else="!this.label")
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';

export default Vue.extend({
    props: {
        disabled: Boolean as PropType<boolean>,
        value: {
            type: String as PropType<string>,
            default: undefined,
        },
        placeholder: String as PropType<string>,
        label: {
            type: String as PropType<string>,
            default: undefined,
        },
        icon: {
            type: String as PropType<string>,
            default: undefined,
        },
    },
    data: () => ({
        uniqueId: (Math.floor(Math.random() * 9999).toString(16) + '-' + Date.now().toString(16)),
        hasFocus: false,
    })
});
</script>

<style lang="scss">
</style>