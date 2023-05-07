<template>
    <div class="none-files-div">
        <span>Файлов не найдено</span>
        <DefaultButton v-if="filters" @click="filtersClick" :buttonText="'Применить фильтры/загрузить'" />
        <DefaultButton @click="activateForm" v-else :buttonText="'Загрузить'" />
        <input ref="input" @change="fileFormChange" id="fileform" type="file">
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import DefaultButton from '@/components/Button.vue'
import { FilesFilters } from '@/store/table/types';
import { httpClient } from '@/api/AxiosHttpClient';
import { Alerts } from '@/store/alerts/helpers';
import { InfoAlertType } from '@/store/alerts/types';


export default defineComponent({
    name: 'NoneFilesDiv',
    components: {
        DefaultButton
    },
    methods: {
        filtersClick() {
            this.$store.commit('windowFlags/setFiltersFlag', true)
        },

        activateForm() {
            const input = this.$refs.input as HTMLInputElement
            if (input) {
                input.click()
            }
        }, 

        async fileFormChange(e: Event) {
            const input = e.target as HTMLFormElement
            const filesArr = input.files
            if (filesArr && filesArr.length) {
                const formData = new FormData
                formData.append('file', filesArr[0])
                const response = await httpClient.post('files/new/formdata', formData)
                if (response && response.status && response.status === 200) {
                    const alert: InfoAlertType = {
                        message: 'Загружено успешно',
                        time: 1500,
                        type: 'green'
                    }
                    Alerts.showInfoAlert(alert)
                    this.refresh()
                }
            }
        },

        refresh() {
            this.$store.commit('windowFlags/setFiltersFlag', false)
            if (this.filters) {
                this.$store.dispatch('table/loadFiles', this.filters)
            } else {
                this.$store.dispatch('table/loadFiles')
            }
        },
    },
    computed: {
        filters(): FilesFilters {
            return this.$store.getters['filters/getFilters'] as FilesFilters
        },
    },

});
</script>

<style lang='scss'>
.none-files-div {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    span {
        margin-bottom: 20px;
    }

    @media (max-width: $secondWidth) {
        button {
            font-size: $smallFontSize;
        }
    }

    input {
        display: none;
    }
}
</style>