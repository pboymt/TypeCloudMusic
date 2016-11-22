//import * as request from 'request';
import { request, RequestOptions } from 'http';
import { deepClone, getRequestOption } from '../util';

export const album = (id: number, callback?: (res) => void): Promise<any> => {
    let reqOption: RequestOptions = getRequestOption(`/api/album/${id}`);
    return new Promise((resolve, reject) => {
        let req = request(reqOption, (res) => {
            if (res.statusCode == 200) {
                let bufs = [];
                res.on('data', (chunk) => {
                    bufs.push(chunk);
                });
                res.on('end', () => {
                    let result = Buffer.concat(bufs);
                    let info = JSON.parse(result.toString());
                    callback && callback(info);
                    resolve(info);
                });
            } else {
                reject(res.statusCode);
            }
        });
        req.on('error', (err) => {
            reject(err);
        });
        req.end();
    });
}