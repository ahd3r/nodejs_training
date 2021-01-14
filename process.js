const { fork } = require('child_process');

const childProcess = fork('./process2.js');

childProcess.on('message', (msg) => {
  console.log(msg);
});

// ----------------------------------------------------------------------------

// const { fork } = require('child_process');

// const childProcess = fork('./process2.js');

// setTimeout(() => {
//   console.log('First process ends itself');
// }, 1500);
