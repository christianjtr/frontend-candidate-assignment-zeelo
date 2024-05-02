const books = require('./books.json');
const genres = require('./genres.json');
const purchases = require('./purchases.json');

module.exports = () => ({
  books,
  genres,
  purchases,
});
