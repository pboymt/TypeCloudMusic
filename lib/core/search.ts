import { RequestOptions, request } from 'http';
import { stringify } from 'querystring';
import { getRequestOption } from '../util';
const typeArr = [1, 10, 100, 1000, 1002, 1004, 1006, 1009];
export const search = (text: string,
    callback: (result: any) => void,
    limit: number = 3,
    offset: number = 0,
    typeNumber: number = 0): Promise<any> => {
    let type = typeArr[typeNumber];
    let reqOption = getRequestOption('/api/search/pc', 'POST');
    let form = {
        s: text,
        limit: limit,
        type: type,
        offset: offset
    };
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
// var search1 = function () {
//     var name = arguments.length <= 0 || arguments[0] === undefined ? null : arguments[0];
//     var callback = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];
//     var limit = arguments.length <= 2 || arguments[2] === undefined ? 3 : arguments[2];
//     var offset = arguments.length <= 3 || arguments[3] === undefined ? 0 : arguments[3];
//     var typeArr = [1, 10, 100, 1000, 1002, 1004, 1006, 1009];
//     var type = arguments.length <= 4 || arguments[4] === undefined || typeArr.indexOf(arguments[4]) < 0 ? 1 : arguments[4];

//     var option = (0, deepClone)(config.option);

//     var url = config.origin + '/api/search/pc';
//     var form = {
//         s: name,
//         limit: limit,
//         type: type,
//         offset: offset
//     };
//     var method = 'POST';
//     Object.assign(option, {
//         url: url,
//         form: form,
//         method: method
//     });
//     request(option, function (err, res, body) {
//         if (!err && res.statusCode == 200) {
//             var info = JSON.parse(body);
//             callback && callback(JSON.stringify(info, '', 2));
//         } else {
//             console.error(err);
//         }
//     });
// };

// module.exports = search;