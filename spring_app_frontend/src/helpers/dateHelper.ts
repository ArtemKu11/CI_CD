export class DateHelper {
    jsDateToFullHuman(date: Date) {
        const firstPart = this.jsDateToHuman(date)
        const secondsPart = this.convertToHumanTime(date)
        return firstPart + ' ' + secondsPart
    }

    convertToHumanTime(jsTime: Date, needSeconds?: boolean): string {
        let hours = jsTime.getHours() + "";
        let minutes = jsTime.getMinutes() + "";
        if (hours.length === 1) {
            hours = "0" + hours;
        }
        if (minutes.length === 1) {
            minutes = "0" + minutes;
        }
        if (needSeconds) {
            let seconds = jsTime.getSeconds() + "";
            if (seconds.length === 1) {
                seconds = "0" + seconds;
            }
            return `${hours}:${minutes}:${seconds}`
        } else {
            return `${hours}:${minutes}`
        }
    }

    jsDateToHuman(date: Date): string {  // dd.mm.yyyy
        let day = date.getDate().toString();
        let month = date.getMonth() + 1 + "";
        if (day.length === 1) {
            day = "0" + day;
        }

        if (month.length === 1) {
            month = "0" + month;
        }
        return `${day}.${month}.${date.getFullYear()}`;
    }
}

export const dateConverter = new DateHelper()