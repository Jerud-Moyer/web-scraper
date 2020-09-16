const Queue = require('bull');

const storageQueue = new Queue('books', {
  redis: process.env.REDIS_URL
});

module.exports = { 
  storageQueue 
};
