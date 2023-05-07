<template>
    <tr @click="clickHandler">
        <th class="id_row">{{ dataModel?.id }}</th>
        <td class="name_row">{{ dataModel?.name }}</td>
        <td class="change-date_row">{{ dataModel?.changeDate }}</td>
        <td class="upload-date_row" row>{{ dataModel?.uploadDate }}</td>
        <td class="size_row">{{ dataModel?.size }}</td>
        <td class="comment_row">{{ dataModel?.comment }}</td>
        <!-- <td class="link_row">{{ dataModel?.downloadLink }}</td> -->
    </tr>
</template>

<script lang="ts">
import { ClientDataModel } from '@/api/serverTypes';
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'TableRow',
    props: {
        dataModel: Object
    },

    mounted() {
        // console.log(this.dataModel, 'ALALALALAL')
    },

    computed: {
        getDataModel(): ClientDataModel {
            return this.dataModel as ClientDataModel
        }
    },
    
    methods: {
        clickHandler() {
            this.$store.dispatch('fileOperations/reset')
            this.$store.dispatch('fileOperations/setDataModel', this.getDataModel)
            this.$store.commit('windowFlags/setFileOperationsFlag', true)
        }
    }

});
</script>

<style lang='scss'>

</style>