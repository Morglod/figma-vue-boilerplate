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
import Button from "@/figma-ds/Button.vue";
import Checkbox from "@/figma-ds/Checkbox.vue";
import FigmaSwitch from "@/figma-ds/FigmaSwitch.vue";
import Disclosure from "@/figma-ds/Disclosure.vue";
import DisclosureItem from "@/figma-ds/DisclosureItem.vue";
import Input from "@/figma-ds/Input.vue";
import Icon from "@/figma-ds/Icon.vue";
import Label from "@/figma-ds/Label.vue";
import SectionTitle from "@/figma-ds/SectionTitle.vue";
import Divider from "@/figma-ds/Divider.vue";
import Tip from "@/figma-ds/Tip.vue";
import Select from "@/figma-ds/Select.vue";
import Textarea from "@/figma-ds/Textarea.vue";
import Bell from "@/figma-ds/Bell.vue";

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
@import "@/figma-ds/lib.scss";

#app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin-top: 10px;
}
</style>
