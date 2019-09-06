<template>
    <div class="onboarding-tip">
        <div class="onboarding-tip__icon" v-if="!!icon">
            <div class="icon" :class="'icon--'+icon" />
            <slot name="icon" />
        </div>
        <div class="onboarding-tip__msg">
            <slot />
        </div>
    </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';

export default Vue.extend({
    props: {
        icon: String as PropType<string>,
    }
});
</script>

<style lang="scss">
</style>