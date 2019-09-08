<template>
    <div>
        <label class="label" :for="uniqueId">
            {{ label }}
        </label>
        <textarea
            :id="uniqueId"
            class="textarea"
            :disabled="disabled"
            @change="evt => $emit('input', evt.target.value)"
            :value="value"
        />
    </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';

export default Vue.extend({
    props: {
        disabled: Boolean as PropType<boolean>,
        value: String as PropType<string>,
        label: String as PropType<string>,
    },
    data: () => ({
        uniqueId: (Math.floor(Math.random() * 9999).toString(16) + '-' + Date.now().toString(16)),
    }),
});
</script>

<style lang="scss">
</style>