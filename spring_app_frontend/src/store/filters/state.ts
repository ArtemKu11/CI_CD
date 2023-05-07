import { FiltersState } from "./types";

export const defaultState = (): FiltersState => {
    return {
        currentFilters: null
    }
}

export const state = defaultState()