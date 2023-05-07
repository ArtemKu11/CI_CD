import { FileOperationsState } from "./types";

export const defaultState = (): FileOperationsState => {
    return {
        dataModel: null
    }
}

export const state = defaultState()