// apiBaseService.js
import axios, {AxiosInstance, AxiosResponse} from 'axios';

const API_BASE_URL = 'http://localhost:3000/'; // Replace with your API base URL

const apiBaseService = axios.create({
    baseURL: API_BASE_URL,
});

class ApiService {
    private readonly axiosInstance: AxiosInstance;

    get instance() {
        return this.axiosInstance;
    }

    constructor() {
        this.axiosInstance = apiBaseService;
        Object.freeze(this.axiosInstance)
    }
}


export const apiService = new ApiService();

export const getData = <T>(response: AxiosResponse<T>) : T => {
    if (response.data) {
        return response.data;
    } else {
        throw Error('Something went wrong');
    }
};

export const axiosRequest = <T >(response: AxiosResponse<T>): T => {
    return getData(response);
}