import { ActionTree } from "vuex";
import { FiltersState } from "./types";
import { RootState } from "../types";
import { FilesFilters } from "../table/types";
import { defaultState } from "./state";

export const actions: ActionTree<FiltersState, RootState> = {
    setFilters({ state }, payload: FilesFilters) {
        state.currentFilters = payload
    },

    reset({ state }) {
        Object.assign(state, defaultState())
    }
}