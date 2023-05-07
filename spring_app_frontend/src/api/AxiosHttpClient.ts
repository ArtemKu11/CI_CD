import Axios, { AxiosError, AxiosResponse } from 'axios';
import { ServerError } from './serverTypes';
import { InfoAlertType } from '@/store/alerts/types';
import { Alerts } from '@/store/alerts/helpers';


const createHttpClient = () => {
    const httpClient = Axios.create({
        // baseURL: 'http://192.168.10.167:8080'
        // baseURL: 'http://localhost:8080'
    })

    httpClient.interceptors.response.use((response: AxiosResponse) => {
        // console.log('ОТВЕТ', response)
        return response
    },
        (error: AxiosError) => {
            if (error.response?.data) {
                const serverError = error.response.data as ServerError
                const alert: InfoAlertType = {
                    message: serverError.message,
                    time: 2000,
                    type: 'red'
                }
                Alerts.showInfoAlert(alert)
            } else {
                const alert: InfoAlertType = {
                    message: "Неизвестная ошибка",
                    time: 2000,
                    type: 'red'
                }
                if (error.code) {
                    switch (error.code) {
                        case 'ERR_NETWORK':
                            alert.message = 'Сервер недоступен. Проверьте правильность URL'
                            break;

                        default:
                            break;
                    }
                } else {
                    Alerts.showInfoAlert(alert)
                }
            }
        })



    return httpClient
}

export const httpClient = createHttpClient();
