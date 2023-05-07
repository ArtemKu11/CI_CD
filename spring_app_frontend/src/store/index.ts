import { createStore } from 'vuex'
import { table } from './table'
import { RootState } from './types'
import { windowFlags } from './windowsFlags'
import { fileOperations } from './fileOperations'
import { filters } from './filters'
import { alerts } from './alerts'

export default createStore<RootState>({
    getters: {
    },
    mutations: {
    },
    actions: {
    },
    modules: {
        table,
        windowFlags,
        fileOperations,
        filters,
        alerts
    }
})
