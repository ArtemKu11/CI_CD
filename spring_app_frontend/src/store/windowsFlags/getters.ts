import { GetterTree } from "vuex";
import { WindowFlagsState } from "./types";
import { RootState } from "../types";

export const getters: GetterTree<WindowFlagsState, RootState> = {
    getFiltersFlag(state) {
        return state.filtersFlag
    },

    getFileOperationsFlag(state) {
        return state.fileOperationsFlag
    },

}