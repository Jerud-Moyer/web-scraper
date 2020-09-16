const store = require('./store');

module.exports = job => {
  console.log('storage commencing');
  return store(job.data.book);
};
