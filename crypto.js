const crypto = require('crypto');

const md5Hash = crypto.createHash('md5').update('Hello World!').digest('hex');
const sha1Hash = crypto.createHash('sha1').update('Hello World!').digest('hex');

console.log(md5Hash);
console.log(sha1Hash);
