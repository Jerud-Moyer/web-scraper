const request = require('./request');
const parse = require('./parser');
const store = require('./store');

module.exports = job => {
  console.log(job.data.page);
  return request(job.data.page)
    .then(parse)
    .then(store);
};
