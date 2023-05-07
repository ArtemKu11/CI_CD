import { Module } from "vuex";
import { FiltersState } from "./types";
import { RootState } from "../types";
import { state } from "./state";
import { actions } from "./actions";
import { getters } from "./getters";

const namespaced = true
export const filters: Module<FiltersState, RootState> = {
    namespaced,
    state,
    actions,
    getters
}