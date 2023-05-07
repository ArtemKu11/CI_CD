<template>
    <div class="file-operations-window">
        <div @click="closeClick" class="closeModal"></div>
        <MainContainer @downloadClick="downloadClickHandler" @deleteClick="deleteClickHandler" @commentClick="commentClickHandler" v-if="!inputContainerFlag" />
        <InputContainer @refreshEverything="refresh" v-else />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import MainContainer from './MainContainer.vue'
import InputContainer from './InputContainer.vue'
import { FilesFilters } from '@/store/table/types';
import { httpClient } from '@/api/AxiosHttpClient';
import { ClientDataModel } from '@/api/serverTypes';
import { Alerts } from '@/store/alerts/helpers';
import { InfoAlertType } from '@/store/alerts/types';



export default defineComponent({
    name: 'FileOperationsWindow',
    data() {
        return {
            inputContainerFlag: false
        }
    },
    components: {
        MainContainer, InputContainer
    },
    methods: {
        async downloadClickHandler() {
            location.href = `files/${this.dataModel.id}`
            this.closeClick()
        },

        async deleteClickHandler() {
            const response = await httpClient.delete(`files/${this.dataModel.id}`)
            if (response && response.status && response.status === 200) {
                const alert: InfoAlertType = {
                    message: 'Удалено',
                    type: 'red',
                    time: 1500
                }
                Alerts.showInfoAlert(alert)
                this.refresh()
            }
        },

        closeClick() {
            if (this.inputContainerFlag) {
                this.inputContainerFlag = false
            } else {
                this.$store.commit('windowFlags/setFileOperationsFlag', false)
            }
        },

        commentClickHandler() {
            this.inputContainerFlag = true
        },

        refresh() {
            this.$store.commit('windowFlags/setFileOperationsFlag', false)
            if (this.filters) {
                this.$store.dispatch('table/loadFiles', this.filters)
            } else {
                this.$store.dispatch('table/loadFiles')
            }
        }

    },
    computed: {
        filters(): FilesFilters | null {
            return this.$store.getters['filters/getFilters'] as FilesFilters
        },

        dataModel(): ClientDataModel {
            return this.$store.getters['fileOperations/getDataModel']
        }
    }

});
</script>

<style lang='scss'>
.file-operations-window {
    position: absolute;
    z-index: 2;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.9);
    display: flex;
    align-items: center;
    justify-content: center;

    .closeModal {
        position: absolute;
        top: 30px;
        right: 20px;
        width: 24px;
        height: 24px;
        opacity: 0.2;
        cursor: pointer;
        transition: opacity ease 0.5s;

        &:hover {
            opacity: 1;
        }
    }

    .closeModal::before,
    .closeModal::after {
        content: '';
        position: absolute;
        top: 10px;
        display: block;
        width: 24px;
        height: 3px;
        background: #000;
    }

    .closeModal::before {
        transform: rotate(45deg);
    }

    .closeModal::after {
        transform: rotate(-45deg);
    }


}
</style>