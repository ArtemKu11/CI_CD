import { GetterTree } from "vuex";
import { TableState } from "./types";
import { RootState } from "../types";

export const getters: GetterTree<TableState, RootState> = {
    getFiles: (state) => () => {
        return state.dataModels
    }
}