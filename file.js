const fs = require('fs');

const writeStreamToFileBar = fs.createWriteStream('./bar');
const readStreamFromFileFoo = fs.createReadStream('./foo');
readStreamFromFileFoo.on('data', (data) => {
  console.log(data.toString());
});

readStreamFromFileFoo.pipe(writeStreamToFileBar);

// ----------------------------------------------------------------------------

// const fs = require('fs');

// fs.writeFileSync('./foo', 'adrakadabra adrakadabra adrakadabra');

// console.log(fs.readFileSync('./foo').toString());
