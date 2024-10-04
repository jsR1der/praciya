// apiBaseService.js
import axios, {AxiosInstance, AxiosResponse} from 'axios';
import {Positions, UserPagination} from "../../utils/types.ts";
import {ObsoleteUser} from "../../models/models.ts";

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

// apiBaseService.interceptors.request.use(
//     (config) => {
        // add token to request here
        // if (config.url !== 'token') {
        //     const token = sessionStorage.getItem('token');
        //     if (token) {
        //         config.headers['Authorization'] = `Bearer ${token}`
        //     } else {
        //         throw Error('Invalid request')
        //     }
        // }
        // return config;
//     },
//     (error) => {
//         return Promise.reject(error);
//     }
// );

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

export const getUserPagination = async (page: number): Promise<UserPagination> => {
    const response = await apiBaseService.get<UserPagination>(`users`, {params: {page, count: 6}})
    return getData(response);
}

export const getPositions = async (): Promise<AxiosResponse<Positions>> => {
    return await apiBaseService.get<Positions>(`positions`);
}


export const createUser = async (body: ObsoleteUser): Promise<AxiosResponse<ObsoleteUser>> => {
    await apiBaseService.post<ObsoleteUser>('users', body, {headers: {'Content-Type': 'multipart/form-data'}});
}