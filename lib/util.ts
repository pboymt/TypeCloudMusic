import { headers } from './config';
export const deepClone = (obj) => {
    return JSON.parse(JSON.stringify(obj));
}

export const getRequestOption = (path: string, method: string = 'GET', contentLength?: number) => {
    let headerArr = deepClone(headers);
    if (contentLength) {
        headerArr['Content-Length'] = contentLength;
    }
    return {
        port: 80,
        host: 'music.163.com',
        method: method,
        path: path,
        headers: headerArr
    }
}