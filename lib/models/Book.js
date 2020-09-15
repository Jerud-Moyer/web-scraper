const pool = require('../utils/pool');

class Book {
  id;
  title;
  image;
  rating;
  price;
  availability;

  constructor(row) {
    this.id = row.id;
    this.title = row.title;
    this.image = row.image;
    this.availability = row.availability;
    this.price = row.price;
    this.availability = row.availability;
  }

  static async insert(book) {
    const { rows } = await pool.query(
      'INSERT INTO books (title, image, rating, price, availability) VALUES ($1, $2, $3, $4, $5) RETURNING *',
      [book.title, book.image, book.rating, book.price, book.availability]
    );

    return new Book(rows[0]);
  }
}

module.exports = Book;
