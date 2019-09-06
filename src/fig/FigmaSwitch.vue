<template>
    <div class="switch">
        <input
            class="switch__toggle"
            type="checkbox"
            :id="uniqueId"
            :checked="checked"
            :value="value"
            :disabled="disabled"
            @change="evt => $emit('input', evt.target.checked)"
        >
        <label class="switch__label" :for="uniqueId">
            <slot>
                checkbox
            </slot>
        </label>
    </div>	
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';

export default Vue.extend({
    props: {
        checked: Boolean as PropType<boolean>,
        value: Boolean as PropType<boolean>,
        disabled: Boolean as PropType<boolean>,
    },
    data: () => ({
        uniqueId: (Math.floor(Math.random() * 9999).toString(16) + '-' + Date.now().toString(16))
    })
});
</script>

<style lang="scss">
.switch,
.switch__toggle,
.switch__label {
    cursor: pointer;
}
</style>