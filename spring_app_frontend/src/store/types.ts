import { AlertState } from "./alerts/types";
import { FileOperationsState } from "./fileOperations/types";
import { FiltersState } from "./filters/types";
import { TableState } from "./table/types";
import { WindowFlagsState } from "./windowsFlags/types";

export interface RootState {
    table: TableState,
    windowFlags: WindowFlagsState,
    fileOperations: FileOperationsState
    filters: FiltersState,
    alerts: AlertState
}