import { Module } from "vuex";
import { FileOperationsState } from "./types";
import { RootState } from "../types";
import { state } from "./state";
import { getters } from "./getters";
import { actions } from "./actions";

const namespaced = true;

export const fileOperations: Module<FileOperationsState, RootState> = {
    namespaced,
    state,
    actions,
    getters
}