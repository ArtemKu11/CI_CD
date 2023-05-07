import { roundFloat } from "./roundFloat";

export const getComputedSize = (sizeInBytes: number) => {
    if (isNaN(parseInt(sizeInBytes + ''))) {
        return '?'
    }

    const sizeInKb = Math.round(sizeInBytes / 1000);
    if (sizeInKb < 1000) {
        return sizeInKb + 'kb'
    }

    const sizeInMb = roundFloat(sizeInKb / 1000);
    if (sizeInMb < 1000) {
        return sizeInMb + 'MB'
    }

    const sizeInGb = roundFloat(sizeInMb / 1000);
    return sizeInGb + 'GB'
}