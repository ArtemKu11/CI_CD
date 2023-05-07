import { ActionTree } from "vuex";
import { FileOperationsState } from "./types";
import { RootState } from "../types";
import { ClientDataModel } from "@/api/serverTypes";
import { defaultState } from "./state";

export const actions: ActionTree<FileOperationsState, RootState> = {
    setDataModel({ state }, payload: ClientDataModel) {
        state.dataModel = payload
    },

    reset({ state }) {
        Object.assign(state, defaultState())
    }
}