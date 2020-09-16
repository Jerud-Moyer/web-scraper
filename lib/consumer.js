const { taskQueue } = require('./queue');
const { storageQueue } = require('./storage-queue');

taskQueue.process(5, `${__dirname}/scraper.js`);
taskQueue.on('completed', job => {
  storageQueue.add({ books: job.returnvalue });
});

storageQueue.process(5, `${__dirname}/storage-queue.js`);
