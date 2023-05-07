import { Module } from "vuex";
import { WindowFlagsState } from "./types";
import { RootState } from "../types";
import { state } from "./state";
import { mutations } from "./mutations";
import { getters } from "./getters";

const namespaced = true
export const windowFlags: Module<WindowFlagsState, RootState> = {
    namespaced,
    state,
    getters,
    mutations
}