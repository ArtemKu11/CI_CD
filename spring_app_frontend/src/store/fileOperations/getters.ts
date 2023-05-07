import { GetterTree } from "vuex";
import { FileOperationsState } from "./types";
import { RootState } from "../types";

export const getters: GetterTree<FileOperationsState, RootState> = {
    getDataModel(state) {
        return state.dataModel
    }
}