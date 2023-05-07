<template>
    <div class="none-files-div">
        <span>Файлов не найдено</span>
        <DefaultButton v-if="filters" @click="filtersClick" :buttonText="'Применить фильтры/загрузить'" />
        <DefaultButton v-else :buttonText="'Загрузить'" />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import DefaultButton from '@/components/Button.vue'
import { FilesFilters } from '@/store/table/types';


export default defineComponent({
    name: 'NoneFilesDiv',
    components: {
        DefaultButton
    },
    methods: {
        filtersClick() {
            this.$store.commit('windowFlags/setFiltersFlag', true)
        }
    },
    computed: {
        filters(): FilesFilters {
            return this.$store.getters['filters/getFilters'] as FilesFilters
        }
    }
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
}
</style>