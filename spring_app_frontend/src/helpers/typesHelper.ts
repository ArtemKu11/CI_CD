import { ClientDataModel, DataModel } from "@/api/serverTypes";
import { dateConverter } from "./dateHelper";
import { getComputedSize } from "./getComputedSize";

export class TypesHelper {
    // eslint-disable-next-line
    isSatisfiesDataModelType(object: DataModel | any): boolean {
        const dataModelMock: DataModel = {
            changeDate: '',
            comment: '',
            downloadLink: '',
            id: 0,
            name: '',
            size: 0,
            type: '',
            uploadDate: '',
        }
        const keys = Object.keys(dataModelMock)
        for (const key in object) {
            const index = keys.indexOf(key);
            if (index != -1) {
                keys.splice(index, 1)
            }
        }
        return keys.length === 0
    }

    mapDataModelToClientDataModel(dataModel: DataModel): ClientDataModel {
        return {
            id: dataModel.id,
            name: dataModel.name,
            type: dataModel.type,
            size: getComputedSize(dataModel.size),
            uploadDate: dateConverter.jsDateToFullHuman(new Date(dataModel.uploadDate)),
            changeDate: dateConverter.jsDateToFullHuman(new Date(dataModel.changeDate)),
            downloadLink: dataModel.downloadLink,
            comment: dataModel.comment,
        }
    }

    cutWord(word: string, letters: number): string {
        if (word?.length > letters) {
            return word.slice(0, letters) + '...'
        }
        return word
    }
}

export const typesHelper = new TypesHelper()