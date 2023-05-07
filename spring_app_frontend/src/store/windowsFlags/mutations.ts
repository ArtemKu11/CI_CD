import { MutationTree } from "vuex";
import { WindowFlagsState } from "./types";

export const mutations: MutationTree<WindowFlagsState> = {
    setFiltersFlag(state, payload: boolean) {
        state.filtersFlag = payload
    },

    setFileOperationsFlag(state, payload: boolean) {
        state.fileOperationsFlag = payload
    }
}