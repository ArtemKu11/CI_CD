import { ActionTree } from "vuex";
import { FilesFilters, TableState } from "./types";
import { RootState } from "../types";
import { httpClient } from "@/api/AxiosHttpClient";
import { DataModel } from "@/api/serverTypes";
import { typesHelper } from '@/helpers/typesHelper'
 
export const actions: ActionTree<TableState, RootState> = {
    async loadFiles({state}, payload?: FilesFilters) {
        let url = 'files'
        if (payload) {
            url += '?'
            if (payload.from) {
                url += 'from=' + payload.from
            }

            if (payload.to) {
                if (!url.endsWith('?')) {
                    url += '&'
                }
                url += 'to=' + payload.to
            }

            if (payload.name) {
                if (!url.endsWith('?')) {
                    url += '&'
                }
                url += 'name=' + payload.name
            }

            if (payload.type) {
                if (!url.endsWith('?')) {
                    url += '&'
                }
                url += 'type=' + payload.type
            }
        }
        const response = await httpClient.get(url)
        if (response?.data) {
            state.dataModels = []
            const dataModels = response.data as DataModel[]
            for (const dataModel of dataModels) {
                state.dataModels.push(typesHelper.mapDataModelToClientDataModel(dataModel))
            }
        }
    }
}