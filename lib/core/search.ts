import { RequestOptions, request } from 'http';
import { stringify } from 'querystring';
import { getRequestOption } from '../util';
const typeArr = [1, 10, 100, 1000, 1002, 1004, 1006, 1009];
export const search = (text: string,
    callback?: (result: any) => void,
    limit: number = 3,
    offset: number = 0,
    typeNumber: number = 0): Promise<any> => {
    let type = typeArr[typeNumber];
    let form = {
        s: text,
        limit: limit,
        type: type,
        offset: offset
    };
    let postData = stringify(form);
    let reqOption = getRequestOption('/api/search/pc', 'POST');
    console.log(postData);
    return new Promise((resolve, reject) => {
        let req = request(reqOption, (res) => {
            if (res.statusCode == 200) {
                console.log(res.statusCode);
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
        req.write(postData);
        req.end();
    });
};
