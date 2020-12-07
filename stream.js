const { Readable, Writable } = require('stream');
const fs = require('fs');

const r_s = new Readable({ read: () => {} });
const w_s = new Writable({
  write: (chunk, encoding, callback) => {
    fs.appendFileSync('./new_file', `${chunk.toString()}\n`);
    callback();
  }
});

r_s.pipe(w_s);

r_s.push('ping!');
r_s.push('pong!');

fs.createReadStream('./new_file').pipe(process.stdout); // ping!\npong!\n

// --------------------------------------------------------------------------------

// const { Readable, Writable } = require('stream');

// const r_s = new Readable({ read: () => {} });
// const w_s = new Writable({
//   write: (chunk, encoding, callback) => {
//     console.log(chunk.toString());
//     callback();
//   }
// });

// r_s.pipe(w_s);

// r_s.push('ping!'); // ping!
// r_s.push('pong!'); // pong!

// --------------------------------------------------------------------------------

// const { Readable } = require('stream');

// const r_s = new Readable({ read: () => {} });

// r_s.pipe(process.stdout);

// r_s.push('ping!'); // ping!
// r_s.push('pong!'); // pong!
