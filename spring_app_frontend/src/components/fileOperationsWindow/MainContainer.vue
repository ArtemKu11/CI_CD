<template>
    <div class="container">
        <span class="header">{{ dataModel.name }}</span>
        <div class="buttons-container">
            <SubmitButton @click="downloadClick" :buttonText="'Скачать'" />
            <SubmitButton @click="commentClickHandler" :buttonText="'Изменить'" />
            <SubmitButton @click="deleteClickHandler" :buttonText="'Удалить'" />
        </div>
    </div>
</template>

<script lang="ts">
import { ClientDataModel } from '@/api/serverTypes';
import { defineComponent } from 'vue';
import SubmitButton from '@/components/Button.vue'


export default defineComponent({
    name: 'MainContainer',
    components: {
        SubmitButton
    },
    methods: {
        downloadClick() {
            this.$emit('downloadClick')
        },

        commentClickHandler() {
            this.$emit('commentClick')
        },

        deleteClickHandler() {
            this.$emit('deleteClick')
        }
    },
    computed: {
        dataModel(): ClientDataModel {
            return this.$store.getters['fileOperations/getDataModel']
        }
    }
});
</script>

<style lang='scss' scoped>
.container {
    background: rgba(255, 229, 196, 0.9);
    max-width: 80%;
    width: min-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 50px;
    border-radius: 10px;

    .header {
        max-width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }


    .buttons-container {
        padding: 50px;
        padding-bottom: 0px;
        display: flex;
        flex-direction: column;
        width: min-content;
        justify-content: center;
        align-items: center;

        button:not(:last-of-type) {
            margin-bottom: 20px;
        }

        button {
            width: 120px;
        }
    }
}
</style>