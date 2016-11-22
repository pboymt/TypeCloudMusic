import { headers } from './config';
export const deepClone = (obj) => {
    return JSON.parse(JSON.stringify(obj));
}

export const getRequestOption = (path: string, method: string = 'GET') => {
    return {
        port: 80,
        host: 'music.163.com',
        method: 'GET',
        path: path,
        headers: headers
    }
}