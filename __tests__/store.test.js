const fs = require('fs');
const pool = require('../lib/utils/pool');
const store = require('../lib/store');

describe('store function', () => {
  beforeEach(() => {
    return pool.query(fs.readFileSync('./sql/setup.SQL', 'utf-8'));
  });

  it('takes an array of books and saves them in the db', async() => {
    const books = [
      { title: 'A Light in the Attic', image: 'catalogue/a-light-in-the-attic_1000/index.html', rating: 'Three', price: '$52.00', availability: true },
      { title: 'A Scent Upon the Air', image: 'image: catalogue/a-light-in-the-attic_1000/index.html', rating: 'Two', price: '$47.00', availability: true },
      { title: 'The Foulest Breeze', image: 'catalogue/a-light-in-the-attic_1000/index.html', rating: 'One', price: '$36.00', availability: true }
    ];

    await store(books);

    const { rows } = await pool.query('SELECT * FROM books');

    expect(rows).toHaveLength(3);
  });
});
