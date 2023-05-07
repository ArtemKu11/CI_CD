import { WindowFlagsState } from "./types"

export const defautState = (): WindowFlagsState => {
    return {
        filtersFlag: false,
        fileOperationsFlag: false
    }
}

export const state = defautState()