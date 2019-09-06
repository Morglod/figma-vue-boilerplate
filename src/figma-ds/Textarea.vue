<template>
    <textarea
        class="textarea"
        :disabled="disabled"
    />
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';

export default Vue.extend({
    props: {
        disabled: Boolean as PropType<boolean>
    }
});
</script>

<style lang="scss">
</style>