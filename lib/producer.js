const { taskQueue } = require('./queue');

Promise.all([...Array(50)]
  .map((_, i) => taskQueue.add({ page: i + 1 })))
  // eslint-disable-next-line no-console
  .then(() => console.log('Pages added to queue'));
