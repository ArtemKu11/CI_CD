<template>
    <table class="table">
        <col id="col-1" />
        <col id="col-2" />
        <col id="col-3" />
        <col id="col-4" />
        <col id="col-5" />
        <col id="col-6" />
        <!-- <col id="col-7" /> -->

        <thead>
            <tr class="table-header">
                <th class="id_header" scope="col">#</th>
                <th class="name_header" scope="col">Имя</th>
                <th class="change-date_header" scope="col">Дата изменения</th>
                <th class="upload-date_header" scope="col">Дата загрузки</th>
                <th class="size_header" scope="col">Размер</th>
                <th class="comment_header" scope="col">Комментарий</th>
                <!-- <th class="link_header" scope="col">Ссылка</th> -->

            </tr>
        </thead>
        <tbody>
            <TableRow v-for="(fileData, index) in getCurrentPage" :key="index" :dataModel="fileData" />
        </tbody>
    </table>
</template>

<script lang="ts">
import TableRow from './TableRow.vue'
import { ClientDataModel } from '@/api/serverTypes';
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'MainTable',
    components: {
        TableRow
    },

    props: {
        currentPage: {
            type: Number,
            default: 1
        },
        modelValue: Object
    },

    // data() {
    //     return {
    //         currentPage: 1
    //     }
    // },

    methods: {
        getPage(pageNumber: number) {
            const requiredId = pageNumber * 10
            if (this.files && this.files.length && this.files.length > requiredId) {
                return this.files.slice(requiredId, requiredId + 10)
            } else {
                return []
            }
        },

        refreshModelValue() {
            if (this.modelValue) {
                const flags = {
                    prevButton: !this.isItFirstPage,
                    nextButton: !this.isItLastPage
                }
                this.$emit('update:modelValue', flags)
            }
        }
    },

    computed: {
        files(): ClientDataModel[] {
            return this.$store.getters['table/getFiles']() as ClientDataModel[]
        },

        isItFirstPage(): boolean {
            return this.currentPage === 1
        },

        isItLastPage(): boolean {
            const files = this.files
            if (files && files.length) {
                const totalPages = Math.ceil(files.length / 10)
                return this.currentPage === totalPages
            }
            return true
        },

        getCurrentPage(): ClientDataModel[] {
            return this.getPage(this.currentPage - 1)
        }
    },

    watch: {
        currentPage() {
            this.refreshModelValue()
        },

        files() {
            this.refreshModelValue()
        }

        // isItFirstPage(newValue: boolean, oldValue: boolean) {
        //     if (newValue && this.modelValue) {
        //         const flags = {
        //             prevButton: false,
        //             nextButton: this.modelValue.nextButton
        //         }
        //         this.$emit('update:modelValue', flags)
        //         return
        //     }

        //     if (!newValue && this.modelValue) {
        //         const flags = {
        //             prevButton: true,
        //             nextButton: this.modelValue.nextButton
        //         }
        //         this.$emit('update:modelValue', flags)
        //         return
        //     }

        // },

        // isItLastPage(newValue: boolean, oldValue: boolean) {
        //     if (newValue && this.modelValue) {
        //         const flags = {
        //             prevButton: this.modelValue.prevButton,
        //             nextButton: false
        //         }
        //         this.$emit('update:modelValue', flags)
        //         return
        //     }

        //     if (!newValue && this.modelValue) {
        //         const flags = {
        //             prevButton: this.modelValue.prevButton,
        //             nextButton: true
        //         }
        //         this.$emit('update:modelValue', flags)
        //         return
        //     }

        // },
    },

    created() {
        this.refreshModelValue()
    }

});


</script>

<style lang='scss'></style>