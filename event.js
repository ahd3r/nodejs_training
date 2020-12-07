const EventEmitter = require('events');

const emitter = new EventEmitter();

emitter.on('createPost', (userId) => {
  setTimeout(() => {
    console.log(`Create a post for user with ${userId} id`);
  }, 1000);
});

emitter.on('createUser', (withPost) => {
  console.log(`Create a user`);
  if (withPost) {
    emitter.emit('createPost', 12);
  }
  console.log('User created!');
});

emitter.emit('createUser', true);

module.exports = { emitter };

// ------------------------------------------------------------

// const EventEmitter = require('events');

// const emitter = new EventEmitter();

// emitter.on('createPost', (userId) => {
//   console.log(`Create a post for user with ${userId} id`);
// });

// emitter.on('createUser', (withPost) => {
//   console.log(`Create a user`);
//   if (withPost) {
//     emitter.emit('createPost', 12);
//   }
// });

// emitter.emit('createUser', true);

// module.exports = { emitter };
