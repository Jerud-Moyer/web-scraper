const parse = document => {
  const bookElements = [...document.querySelectorAll('.product_pod')];
  const books = bookElements.map(book => {
    return {
      title: book.querySelector('h3 > a').getAttribute('title'),
      image: book.querySelector('img').src,
      rating: book.querySelector('.star-rating').classList.item(1),
      price: book.querySelector('.price_color').textContent,
      availability: book.querySelector('.instock').textContent.includes('In stock')
    };
  });

  return books;
};

module.exports = parse;
