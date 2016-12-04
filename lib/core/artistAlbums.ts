import { request, RequestOptions } from 'http';
import { getRequestOption } from '../util';
interface artistAlbumsOption {
    offset: number;
    limit: number;
}
export const artistAlbums = (
    id: number, // 歌手ID
    callback?: (res) => void, // 回调函数
    otherOptions: artistAlbumsOption = { limit: 10, offset: 0 }
): Promise<any> => {
    let reqOption: RequestOptions = getRequestOption(`/api/artist/albums/${id}?offset=${otherOptions.offset}&limit=${otherOptions.limit}`);
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