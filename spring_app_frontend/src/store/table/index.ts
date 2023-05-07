import { Module } from "vuex";
import { TableState } from "./types";
import { RootState } from "../types";
import { state } from "./state";
import { actions } from "./actions";
import { getters } from "./getters";

const namespaced = true
export const table: Module<TableState, RootState> = {
    namespaced,
    state,
    actions,
    getters
}

