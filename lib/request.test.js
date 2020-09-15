const request = require('./request');

describe('request functon', () => {
  it('makes a request to the scrape books page and returns html', async() => {
    const document = await request();
    expect(document.querySelector('.col-sm-8 > a').textContent)
      .toEqual('Books to Scrape');
  });
});




