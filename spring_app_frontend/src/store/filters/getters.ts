import { GetterTree } from "vuex";
import { FiltersState } from "./types";
import { RootState } from "../types";

export const getters: GetterTree<FiltersState, RootState> = {
    getFilters(state) {
        return state.currentFilters
    }
}