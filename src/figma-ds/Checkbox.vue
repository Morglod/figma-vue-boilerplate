<template>
    <div class="checkbox">
        <input
            class="checkbox__box"
            type="checkbox"
            :id="uniqueId"
            :checked="checked"
            :value="value"
            :disabled="disabled"
            @change="evt => $emit('input', evt.target.checked)"
        >
        <label class="checkbox__label" :for="uniqueId">
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
.checkbox,
.checkbox__box,
.checkbox__label {
    cursor: pointer;
}
</style>