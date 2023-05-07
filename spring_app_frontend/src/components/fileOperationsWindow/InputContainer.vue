<template>
    <div class="container">
        <span class="header">Введите новый комментарий</span>
        <input v-model="inputModel" type="text">
        <SubmitButton @click="clickHandler" buttonText="Сохранить" />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import SubmitButton from '@/components/Button.vue'
import { ClientDataModel } from '@/api/serverTypes';
import { httpClient } from '@/api/AxiosHttpClient';
import { InfoAlertType } from '@/store/alerts/types';
import { Alerts } from '@/store/alerts/helpers';


export default defineComponent({
    name: 'InputContainer',
    components: {
        SubmitButton
    },
    data() {
        return {
            inputModel: ''
        }
    },
    computed: {
        dataModel(): ClientDataModel {
            return this.$store.getters['fileOperations/getDataModel']
        }
    },
    methods: {
        async clickHandler() {
            const body = {
                comment: this.inputModel
            }
            const response = await httpClient.patch(`files/${this.dataModel.id}`, body)
            if (response && response.status && response.status === 200) {
                const alert: InfoAlertType = {
                    message: 'Изменено',
                    type: 'green',
                    time: 1500
                }
                Alerts.showInfoAlert(alert)
                this.$emit('refreshEverything')
            }
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

    input {
        margin: 20px 0px;
        padding: 5px;
        border-radius: 5px;
        border: 1px solid;
    }
}
</style>