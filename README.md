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
import { search, album, artistAlbums, comments } from './lib/main';
```
Import in JavaScript.
```javascript
const { search, album, artistAlbums, comments } = require('./dist/main');
```

### Use Search API
e.g. id is 1234
```typescript
// Callback
search('周杰伦', (data) => {
    console.log(data);
});

// Promise
search('周杰伦')
    .then((data) => {
        console.log(data);
    })
    .catch((err) => {
        console.log(err);
    });
```

### Use Album API
e.g. id is 34944913
```typescript
// Callback
album(34944913, (data) => {
    console.log(data);
});

// Promise
album(34944913)
    .then((data) => {
        console.log(data);
    })
    .catch((err) => {
        console.log(err);
    });
```
### Use ArtistAlbums API
e.g. id is 6452
```typescript
// Callback
artistAlbums(6452, (data) => {
    console.log(data);
});

// Promise
artistAlbums(6452)
    .then((data) => {
        console.log(data);
    })
    .catch((err) => {
        console.log(err);
    });
```
### Use Comments API
e.g. id is 1234
```typescript
// Callback
comments(30394891, (data) => {
    console.log(data);
});

// Promise
comments(30394891)
    .then((data) => {
        console.log(data);
    })
    .catch((err) => {
        console.log(err);
    });
```
