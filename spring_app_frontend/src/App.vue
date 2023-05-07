<template>
    <TableWindow />
    <FiltersWindow v-if="filtersFlag" />
    <FileOperationsWindow v-if="fileOperationsFlag" />
    <InfoAlert v-if="infoAlertFlag" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TableWindow from './components/tableWindow/TableWindow.vue';
import FiltersWindow from './components/filtersWindow/FiltersWindow.vue'
import FileOperationsWindow from './components/fileOperationsWindow/FileOperationsWindow.vue';
import InfoAlert from './components/alerts/InfoAlert.vue';
import { Alerts } from './store/alerts/helpers';

export default defineComponent({
    name: 'App',
    components: {
        TableWindow, FiltersWindow, FileOperationsWindow, InfoAlert
    },
    created() {
        this.$store.dispatch('table/loadFiles')
        Alerts.dispatch = this.$store.dispatch
        window.addEventListener('resize', this.appHeight)
        this.appHeight()
    },

    methods: {
        appHeight() {
            const vh = window.innerHeight * 0.01;
            document.documentElement.style.setProperty('--vh', `${vh}px`);
        }
    },

    computed: {
        filtersFlag() {
            return this.$store.getters['windowFlags/getFiltersFlag']
        },

        fileOperationsFlag() {
            return this.$store.getters['windowFlags/getFileOperationsFlag']
        },

        infoAlertFlag() {
            return this.$store.getters['alerts/getInfoAlertFlag']()
        }
    },


});
</script>

<style lang="scss">
@import '@/style/tableStyles.scss';


html {
    height: 100%;
}

body {
    height: 100%;
}

#app {
    position: relative;
    min-height: 100%;
}


.table-window {
    display: flex;
    flex-direction: column;
    align-items: center;

    .header {
        width: 100%;
        height: 20vh;
        grid-row: 1;
        display: flex;
        align-items: flex-end;
        flex-direction: column;
        padding: 0 5%;

        button {
            padding: 5px 10px;
            font-size: $smallerFontSize;
            border-radius: 3px;
            background: none;
            border: none;
            user-select: none;
            cursor: pointer;
            border: 2px orange solid;
        }
    }

    .footer {
        width: 50%;
        height: 20vh;
        min-height: 130px;
        flex-direction: column;
        display: flex;
        justify-content: space-evenly;

        .navigation-buttons {
            width: 100%;
            display: flex;
            justify-content: space-evenly;
        }

        @media (max-width: $secondWidth) {
            width: 100%;

            button {
                font-size: $smallFontSize;
            }
        }
    }
}
</style>
