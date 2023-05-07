import { ClientDataModel, DataModel } from "@/api/serverTypes";

export interface TableState {
    dataModels: ClientDataModel[]
}

export interface FilesFilters {
    from?: string,
    to?: string,
    name?: string,
    type?: string
}