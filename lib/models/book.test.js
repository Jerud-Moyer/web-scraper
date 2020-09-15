const fs = require('fs');
const Book = require('../models/Book');
const pool = require('../utils/pool');

describe('Book class', () => {
  beforeEach(() => {
    return pool.query(fs.readFileSync('./sql/setup.sql', 'utf-8'));
  });
  it('should add books to the db with insert function', async() => {
    const playBook = await Book.insert({ title: 'The Foulest Breeze', image: 'catalogue/a-light-in-the-attic_1000/index.html', rating: 'One', price: '$36.00', availability: true });
    const { rows } = await pool.query('SELECT * FROM books WHERE id =$1', [playBook.id]);
    expect(rows[0]).toEqual({ id: playBook.id, title: 'The Foulest Breeze', image: 'catalogue/a-light-in-the-attic_1000/index.html', rating: 'One', price: '$36.00', availability: true });
  });


});
