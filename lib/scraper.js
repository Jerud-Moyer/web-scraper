const request = require('./request');
const parse = require('./parser');
const store = require('./store');


request()
  .then(document => parse(document))
  .then(books => store(books));

