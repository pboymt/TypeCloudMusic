import { request, RequestOptions } from 'http';
import { getRequestOption } from '../util';

export const comments = (id: number, callback?: (res) => void): Promise<any> => {
    let reqOption: RequestOptions = getRequestOption(`/api/v1/resource/comments/R_SO_4_${id}/?rid=R_SO_4_${id}&offset=0&total=false&limit=100`);
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
};