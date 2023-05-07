<template>
    <button @click="clickHandler">{{ buttonText }}</button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'DefaultButton',
    props: {
        buttonText: String,
        activeFlag: Boolean
    },
    methods: {
        clickHandler() {
            if (this.activeFlag) {
                this.$emit('buttonClick')
            }
        }
    }
});
</script>

<style lang='scss' scoped>
button {
    justify-self: center;
    align-self: center;
    padding: 5px 10px;
    font-size: $smallerFontSize;
    border-radius: 5px;
    background: none;
    border: none;
    user-select: none;
    cursor: pointer;
    border: 2px orange solid;
    // margin-top: 20px;

    &:active {
        color: orange;
    }

    &:focus {
        outline: none;
    }

    @media (max-width: $secondWidth) {
        font-size: $smallFontSize;
    }
}
</style>