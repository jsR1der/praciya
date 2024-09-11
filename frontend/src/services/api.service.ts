// apiService.js
import axios, {AxiosResponse} from 'axios';
import {Positions, UserPagination} from "../utils/types.ts";
import {User} from "../../../shared/models.ts";

const API_BASE_URL = 'http://localhost:3000/'; // Replace with your API base URL

const apiService = axios.create({
    baseURL: API_BASE_URL,
});


// apiService.interceptors.request.use(
//     (config) => {
//         // add token to request here
//         if (config.url !== 'token') {
//             const token = sessionStorage.getItem('token');
//             if (token) {
//                 config.headers['Authorization'] = `Bearer ${token}`
//             } else {
//                 throw Error('Invalid request')
//             }
//         }
//         return config;
//     },
//     (error) => {
//         return Promise.reject(error);
//     }
// );

export const getData = (response: AxiosResponse) => {
    if (response.data) {
        return response.data;
    } else {
        throw Error('Something went wrong');
    }
};


export const getToken = async () => {
    const token = sessionStorage.getItem('token');
    if (token) {
        return true;
    }
    const response = await apiService.get(`token`)
    const tokenPayload: any = getData(response);
    if (tokenPayload.success) {
        sessionStorage.setItem('token', tokenPayload.token)
        return true;
    }
    throw Error('Request failed')
}

export const getUserPagination = async (page: number): Promise<UserPagination> => {
    const response = await apiService.get<UserPagination[]>(`users`, {params: {page, count: 6}})
    return getData(response);
}

export const getPositions = async () => {
    const response = await apiService.get<Positions>(`positions`)
    return getData(response);
}


export const createUser = async (body: User): Promise<User> => {
    const response = await apiService.post<User>('users', body, {headers: {'Content-Type': 'multipart/form-data'}});
    return getData(response);
}