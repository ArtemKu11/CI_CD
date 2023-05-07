<template>
    <div class="table-window">
        <div class="header">
        </div>
        <div class="table-container">
            <MainTable v-model="buttonsFlags" :currentPage="tablePage" v-if="filesExistFlag" />
            <NoneFilesDiv v-else />
        </div>
        <div v-if="filesExistFlag" class="footer">
            <div class="navigation-buttons">
                <SubmitButton :activeFlag="buttonsFlags.prevButton" @buttonClick="prevClick" :buttonText="'Назад'" />
                <SubmitButton :activeFlag="buttonsFlags.nextButton" @buttonClick="nextClick" :buttonText="'Вперед'" />
            </div>
            <SubmitButton :activeFlag="true" @buttonClick="filtersClick" :buttonText="'Применить фильтры/загрузить'" />
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import MainTable from '@/components/tableWindow/Table.vue'
import SubmitButton from '@/components/Button.vue'
import NoneFilesDiv from '@/components/tableWindow/NoneFilesDiv.vue';
import { ClientDataModel } from '@/api/serverTypes';

export default defineComponent({
    name: 'TableWindow',
    components: {
        MainTable, SubmitButton, NoneFilesDiv
    },

    data() {
        return {
            tablePage: 1,
            buttonsFlags: {
                prevButton: false,
                nextButton: false
            }
        }
    },
    methods: {
        prevClick() {
            this.tablePage--
        },

        nextClick() {
            this.tablePage++
        },

        filtersClick() {
            this.$store.commit('windowFlags/setFiltersFlag', true)
        }
    },
    computed: {
        files(): ClientDataModel[] {
            let files = this.$store.getters['table/getFiles']() as ClientDataModel[]
            if (files.length > 10) {
                return files.slice(0, 10)
            } else {
                return files
            }
        },
        filesExistFlag(): boolean {
            return Boolean(this.$store.getters['table/getFiles']()?.length)
        }
    },

    watch: {
        files() {
            this.tablePage = 1
        }
    }

});
</script>

<style lang='scss'></style>