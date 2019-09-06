<template>
    <div id="app">
        <Button primary />
        <Checkbox v-model="checkbox1">
            {{ checkbox1 ? 'checked' : 'unchecked' }}
        </Checkbox>
        <FigmaSwitch v-model="checkbox2">
            {{ checkbox2 ? 'checked' : 'unchecked' }}
        </FigmaSwitch>
        <Disclosure>
            <DisclosureItem label="A">
                Hello
            </DisclosureItem>
            <DisclosureItem label="B" section>
                World
            </DisclosureItem>
        </Disclosure>
        <Input label="Hi" placeholder="input" icon="angle" />
    </div>
</template>

<script lang="ts">
import './fig/lib.js';
import Vue from "vue";
import Button from "@/fig/Button.vue";
import Checkbox from "@/fig/Checkbox.vue";
import FigmaSwitch from "@/fig/FigmaSwitch.vue";
import Disclosure from "@/fig/Disclosure.vue";
import DisclosureItem from "@/fig/DisclosureItem.vue";
import Input from "@/fig/Input.vue";

export default Vue.extend({
    name: "app",
    components: {
        Button,
        Checkbox,
        FigmaSwitch,
        Disclosure,
        DisclosureItem,
        Input,
    },
    data: () => ({
        checkbox1: false,
        checkbox2: false,
    })
});
</script>

<style lang="scss">
@import "@/fig/lib.scss";

#app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin-top: 60px;
}
</style>
