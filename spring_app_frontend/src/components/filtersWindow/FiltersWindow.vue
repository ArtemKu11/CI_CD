<template>
    <div class="filters-window">
        <div @click="closeClick" class="closeModal"></div>
        <div class="filters-alert">
            <div class="wrapper">
                <span>От: </span><input v-model="filters.from" type="date">
            </div>
            <div class="wrapper">
                <span>До: </span><input v-model="filters.to" type="date">
            </div>
            <div class="wrapper">
                <span>Имя: </span><input v-model="filters.name" type="text">
            </div>
            <div class="wrapper">
                <span>Тип: </span><input v-model="filters.type" type="text">
            </div>

            <div class="button-wrapper">
                <SubmitButton @click="confirmHandler" :buttonText="'Применить'" />
                <SubmitButton @click="resetClick" :buttonText="'Сбросить'" />
                <SubmitButton @click="activateForm" :buttonText="'Загрузить'" />
                <!-- <label for="fileform"><SubmitButton :buttonText="'Загрузить'" /></label> -->
                <!-- <label for="fileform">Загрузить</label> -->
            </div>
        </div>
        <input ref="input" @change="fileFormChange" id="fileform" type="file">


    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import SubmitButton from '@/components/Button.vue'
import { FilesFilters } from '@/store/table/types';
import { InfoAlertType } from '@/store/alerts/types';
import { Alerts } from '@/store/alerts/helpers';
import { httpClient } from '@/api/AxiosHttpClient';

export default defineComponent({
    name: 'FiltersWindow',

    components: {
        SubmitButton
    },

    computed: {
        filters(): FilesFilters {
            // console.log('here')
            const filters = this.$store.getters['filters/getFilters'] as FilesFilters
            if (filters) {
                let filtersCopy = JSON.parse(JSON.stringify(filters)) as FilesFilters
                if (filtersCopy.from) {
                    const from = filtersCopy.from.split('_')
                    filtersCopy.from = from[0]
                }
                if (filtersCopy.to) {
                    const to = filtersCopy.to.split('_')
                    filtersCopy.to = to[0]
                }
                return filtersCopy
            } else {
                return {
                    from: '',
                    name: '',
                    to: '',
                    type: ''
                }
            }
        },

        filtersInState(): FilesFilters {
            return this.$store.getters['filters/getFilters']
        }
    },

    methods: {
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
            if (this.filtersInState) {
                this.$store.dispatch('table/loadFiles', this.filtersInState)
            } else {
                this.$store.dispatch('table/loadFiles')
            }
        },

        closeClick() {
            this.$store.commit('windowFlags/setFiltersFlag', false)
        },

        resetClick() {
            this.$store.dispatch('filters/reset')
            this.$store.dispatch('table/loadFiles')
            this.closeClick()
            const alert: InfoAlertType = {
                message: 'Фильры сброшены',
                type: 'green',
                time: 1500
            }
            Alerts.showInfoAlert(alert)
        },

        confirmHandler() {
            let filesFiltres: FilesFilters = {}
            if (this.filters.from) {
                const newDateFrom = this.handleDate(this.filters.from)
                this.filters.from = newDateFrom
                filesFiltres.from = newDateFrom + '_00:00'
            }
            if (this.filters.to) {
                const newDateTo = this.handleDate(this.filters.to)
                this.filters.to = newDateTo
                filesFiltres.to = newDateTo + '_00:00'
            }
            if (this.filters.name) {
                filesFiltres.name = this.filters.name
            }
            if (this.filters.type) {
                filesFiltres.type = this.filters.type
            }
            this.$store.dispatch('filters/reset')
            if (Object.keys(filesFiltres).length) { // Если есть какие-либо фильтры
                this.$store.dispatch('filters/setFilters', filesFiltres)
                this.$store.dispatch('table/loadFiles', filesFiltres)
            } else {
                this.$store.dispatch('table/loadFiles')
            }
            this.closeClick()
        },

        handleDate(rowDate: string): string {
            const date = rowDate.split('-')
            const today = new Date()
            const year = today.getFullYear()
            if (+date[0] > year) {
                date[0] = year + ''
            }
            return date.join('-')
        }
    },
});
</script>

<style lang='scss'>
.filters-window {
    position: absolute;
    min-height: 100%;
    // min-height: 500px;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2;
    top: 0;
    background: rgba(255, 255, 255, 0.9);
    overflow-y: auto;

    #fileform {
        display: none;
    }

    label {
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

    .filters-alert {
        width: min-content;
        padding: 50px;
        border: 1px solid orange;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background: rgba(255, 229, 196, 0.9);


        .wrapper {
            // width: 300px;
            display: flex;
            // display: grid;
            // grid-template-columns: 1fr 3fr;

            margin-bottom: 20px;

            span {
                display: block;
                width: 50px;
            }

            input {
                width: 250px;
                background-color: rgba(255, 229, 196);
                border-radius: 3px;
                border: 1px solid black;
                padding: 5px;
            }
        }

        .button-wrapper {
            width: 400px;
            margin-top: 20px;
            display: flex;
            justify-content: space-around;
            // button {
            //     &:first-of-type {
            //         margin-right: 20px;
            //     }
            // }
        }
    }

    @media (max-width: $secondWidth) {
        background: rgba(255, 229, 196, 0.9);

        .filters-alert {
            border: none;
            background: none;
            padding: 0;

            .button-wrapper {
                width: 300px;
            }
        }
    }

    @media (max-width: 305px) {
        .filters-alert {
            .wrapper {
                input {
                    width: 200px;
                }
            }

            .button-wrapper {
                width: 250px;
            }
        }
    }
}
</style>