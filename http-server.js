const http = require('http');
const { emitter } = require('./event');

const server = http.createServer((req, res) => {
  let body = '';
  req
    .on('data', (chunk) => {
      body = body + chunk.toString();
    })
    .on('end', () => {
      body = JSON.parse(body);
      switch (true) {
        case req.url === '/user' && req.method === 'GET':
          res.end(JSON.stringify({ msg: 'List of users' }));
          break;
        case req.url === '/user' && req.method === 'POST':
          console.log('User created');
          emitter.emit('createPost', 13);
          res.end(JSON.stringify({ msg: `Create user with data ${JSON.stringify(body)}` }));
          break;
        case req.url === '/admin' && req.method === 'GET':
          res.end(JSON.stringify({ msg: 'List of admins' }));
          break;
        default:
          res.end(JSON.stringify({ msg: 'Not Found' }));
          break;
      }
    });
});

server.listen(3000, () => {
  console.log('Server running on port 3000...');
});

// ----------------------------------------------------------------------------------------

// const http = require('http');

// const server = http.createServer((req, res) => {
//   let body = '';
//   req
//     .on('data', (chunk) => {
//       body = body + chunk.toString();
//     })
//     .on('end', () => {
//       body = JSON.parse(body);
//       switch (true) {
//         case req.url === '/user' && req.method === 'GET':
//           res.end(JSON.stringify({ msg: 'List of users' }));
//           break;
//         case req.url === '/user' && req.method === 'POST':
//           res.end(JSON.stringify({ msg: `Create user with data ${JSON.stringify(body)}` }));
//           break;
//         case req.url === '/admin' && req.method === 'GET':
//           res.end(JSON.stringify({ msg: 'List of admins' }));
//           break;
//         default:
//           res.end(JSON.stringify({ msg: 'Not Found' }));
//           break;
//       }
//     });
// });

// server.listen(3000, () => {
//   console.log('Server running on port 3000...');
// });

// ----------------------------------------------------------------------------------------

// const http = require('http');

// const server = http.createServer((req, res) => {
//   switch (true) {
//     case req.url === '/user' && req.method === 'GET':
//       res.end(JSON.stringify({ msg: 'List of users' }));
//       break;
//     case req.url === '/user' && req.method === 'POST':
//       res.end(JSON.stringify({ msg: 'Create user' }));
//       break;
//     case req.url === '/admin' && req.method === 'GET':
//       res.end(JSON.stringify({ msg: 'List of admins' }));
//       break;
//     default:
//       res.end(JSON.stringify({ msg: 'Not Found' }));
//       break;
//   }
// });

// server.listen(3000, () => {
//   console.log('Server running on port 3000...');
// });

// ----------------------------------------------------------------------------------------

// const http = require('http');

// const server = http.createServer((req, res) => {
//   switch (req.url) {
//     case '/user':
//       res.end(JSON.stringify({ msg: 'List of users' }));
//       break;
//     case '/admin':
//       res.end(JSON.stringify({ msg: 'List of admins' }));
//       break;
//     default:
//       res.end(JSON.stringify({ msg: 'Not Found' }));
//       break;
//   }
// });

// server.listen(3000, () => {
//   console.log('Server running on port 3000...');
// });
