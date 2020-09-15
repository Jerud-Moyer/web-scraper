const request = require('./request');
const parse = require('./parser');
const store = require('./store');

module.exports = job => {
  return request(job.data.page)
    .then(document => parse(document))
    .then(books => store(books));
};
