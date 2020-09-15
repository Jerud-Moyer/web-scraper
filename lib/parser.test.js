const request = require('./request');
const parse = require('./parser');

describe('parse function', () => {

  it('returns an array of all book names, images, ratings, prices and in-stock', async() => {
    const document = await request();

    const books = parse(document);

    expect(books).toEqual(expect.arrayContaining([
      { title: 'A Light in the Attic', image: 'media/cache/2c/da/2cdad67c44b002e7ead0cc35693c0e8b.jpg', rating: 'Three', price: '£51.77', availability: true }
    ]));
  });
});
