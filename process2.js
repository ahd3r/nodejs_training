setTimeout(() => {
  process.send({ itIsMyKey: 'it is my value' });
}, 2000);

// ---------------------------------------------------------------------

// setTimeout(() => {
//   console.log('Second process ends itself');
// }, 2000);
