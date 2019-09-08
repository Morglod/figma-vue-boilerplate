<template>
    <div class="select-menu">
        <button class="select-menu__button" @click="openSelect()">
            <span class="select-menu__button-label">
                {{ buttonLabel }}
            </span>
            <span class="select-menu__icon"></span>
        </button>
        <ul class="select-menu__list" :class="{'select-menu__list--active': isOpen}">
            <template v-for="(item, itemIndex) in items">
                <div
                    v-if="item.group !== undefined"
                    :key="itemIndex"
                    class="select-menu__divider"
                >
                    <span
                        class="select-menu__divider-label"
                        :class="{'select-menu__divider-label--first': firstGroupItemIndex === itemIndex}"
                    >
                        {{ item.group }}
                    </span>
                </div>

                <li
                    v-else
                    :key="itemIndex"
                    class="select-menu__list-item"
                    :class="{'select-menu__list-item--active': item.key === selectedKey}"
                    @click="selectItem(item.key)"
                >
                    <span class="select-menu__list-item-icon" />
                    <span class="select-menu__list-item-text">
                        {{ item && item.text }}
                    </span>
                </li>
            </template>
        </ul>
    </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';

type Item = {
    key: string,
    text: string,
} | {
    group: string,
};

export default Vue.extend({
    props: {
        items: {
            type: Array as PropType<Item[]>,
            default: []
        },
        placeholder: String as PropType<string>,
        value: {
            type: String as PropType<string>,
            default: undefined
        },
        open: {
            type: Boolean as PropType<boolean>,
            default: undefined,
        }
    },
    data: () => ({
        openState: false,
        selectedKeyState: ''
    }),
    computed: {
        selectedKey(): string {
            return this.value !== undefined ? this.value : this.selectedKeyState;
        },
        isOpen(): boolean {
            return this.open !== undefined ? this.open : this.openState;
        },
        firstGroupItemIndex(): number {
            return this.items.findIndex(x => 'group' in x);
        },
        buttonLabel(): string {
            if (this.selectedKey) {
                const item = this.items.find(x => 'key' in x && x.key === this.selectedKey);
                if (item && 'key' in item) return item.text;
            }
            return this.placeholder;
        }
    },
    methods: {
        selectItem(itemKey: string) {
            this.selectedKeyState = itemKey;
            this.$emit('input', itemKey);
            this.closeSelect();
        },
        closeSelect() {
            this.openState = false;
            this.$emit('open', false);
            document.removeEventListener('click', this.handleDocumentClick);
        },
        openSelect() {
            this.openState = true;
            this.$emit('open', true);
            document.addEventListener('click', this.handleDocumentClick);
        },
        handleDocumentClick(evt: MouseEvent) {
            if (!this.$el.contains(evt.target as any)) {
                this.closeSelect();
            }
        }
    }
});
</script>

<style lang="scss">
</style>