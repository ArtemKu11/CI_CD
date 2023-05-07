import { TableState } from "./types"

export const defaultState = (): TableState => {
    return {
        dataModels: []
    }
}

export const state = defaultState()
