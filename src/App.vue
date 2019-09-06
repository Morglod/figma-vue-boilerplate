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
        <Icon icon="adjust" />
        <Icon icon="adjust" blue />
        <Icon icon="adjust" black3 />
        <Icon icon="adjust" white />
        <Icon icon="adjust" button />
        <Icon icon="adjust" button selected />
        <Icon text="Hello" />
        <Label>Hello</Label>
        <Tip icon="visible">
            Your onboarding tip goes here. This is like the tip shows you how to create local styles.
        </Tip>
        <Select
            :items="[
                { group: 'test' },
                { key: 'a', text: 'hello' },
                { key: 'b', text: 'hello2' }
            ]"
            placeholder="Select me"
        />
        <Textarea rows="2" />
        <Bell>Smth happens</Bell>
        <Bell loading>Tasks</Bell>
        <Bell error loading>Tasks bad</Bell>
    </div>
</template>

<script lang="ts">
import Vue from "vue";
import Button from "@/fig/Button.vue";
import Checkbox from "@/fig/Checkbox.vue";
import FigmaSwitch from "@/fig/FigmaSwitch.vue";
import Disclosure from "@/fig/Disclosure.vue";
import DisclosureItem from "@/fig/DisclosureItem.vue";
import Input from "@/fig/Input.vue";
import Icon from "@/fig/Icon.vue";
import Label from "@/fig/Label.vue";
import SectionTitle from "@/fig/SectionTitle.vue";
import Divider from "@/fig/Divider.vue";
import Tip from "@/fig/Tip.vue";
import Select from "@/fig/Select.vue";
import Textarea from "@/fig/Textarea.vue";
import Bell from "@/fig/Bell.vue";

export default Vue.extend({
    name: "app",
    components: {
        Button,
        Checkbox,
        FigmaSwitch,
        Disclosure,
        DisclosureItem,
        Input,
        Icon,
        Label,
        SectionTitle,
        Divider,
        Tip,
        Select,
        Textarea,
        Bell,
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
    margin-top: 10px;
}
</style>
