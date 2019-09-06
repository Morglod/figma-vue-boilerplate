<template>
    <div class="visual-bell" :class="{ 'visual-bell--error': error, 'visual-bell--loading': loading }">
        <div class="visual-bell__spinner-container" v-if="loading">
            <span class="visual-bell__spinner"></span>
        </div>
        <span class="visual-bell__msg">
            <slot>
                Info
            </slot>
        </span>
    </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';

export default Vue.extend({
    props: {
        loading: Boolean as PropType<boolean>,
        error: Boolean as PropType<boolean>
    }
});
</script>

<style lang="scss">
</style>