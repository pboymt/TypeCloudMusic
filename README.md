# TypeCloudMusic
NeteaseMusicApi's TypeScript Version

## Install
Install TypeScript in global is recommended.
```bash
[sudo] npm -g install typescript
```
Clone it in your project.
```bash
git clone https://github.com/pboymt/TypeCloudMusic.git
npm install
```
Compile to JavaScript.
```bash
tsc
```

## Usage
Import in TypeScript.
```typescript
import { search, album, artistAlbums } from './lib/main';
```
Import in JavaScript.
```javascript
const { search, album, artistAlbums } = require('./dist/main');
```

### Use Search API
e.g. id is 1234
```typescript
// Callback
search(1234,(data)=>{
    console.log(data);
});

// Promise
search(1234)
    .then((data)=>{
        console.log(data);
    })
    .catch((err)=>{
        console.log(err);
    });
```