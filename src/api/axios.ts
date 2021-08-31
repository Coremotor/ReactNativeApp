import axios from 'axios'
import {getDataFromStorage, STORAGE_TOKEN_KEY} from "./storage";

export const request = axios.create({
    baseURL: 'url',
    responseType: 'json',
})

request.interceptors.request.use(
    (config) => {
        const token = getDataFromStorage(STORAGE_TOKEN_KEY);
        if (token != null) {
            config.headers.authorization = `Bearer ${token}`
        }
        return config
    },
    (error) => Promise.reject(error),
)

request.interceptors.response.use(
    (response) => {
        return response
    },
    function (error) {
        console.log('INTERCEPTOR_ERROR_REQUEST', error.response.data)
        return Promise.reject(error)
    },
)