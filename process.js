const { fork } = require('child_process');

const childProcess = fork('./process2.js');

childProcess.on('message', (msg) => {
  console.log(msg);
});

setTimeout(() => {
  console.log('First process ends itself');
}, 1500);
