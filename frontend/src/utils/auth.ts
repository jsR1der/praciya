import {DefaultUserModel} from "../models/defaultUser.model.ts";


export const parseUser = (data: any): DefaultUserModel | null => {
    return parseJwt(data);
}

function parseJwt(token: string): DefaultUserModel | null {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function (c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
    const rawObject = JSON.parse(jsonPayload);
    if (typeof rawObject === "object") {
        return new DefaultUserModel(rawObject);
    }
    return null
}

export function isUserExist(user: any): boolean {
    return user && typeof user === 'object';

}