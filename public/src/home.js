//should return the total number of books in the array
function getTotalBooksCount(books) {
  return books.length;
}

//should return the total number of accounts in the array
//should return zero if the array is empty
function getTotalAccountsCount(accounts) {
  return accounts.length;
}

//should return the total number of books that are currently borrowed
function getBooksBorrowedCount(books) {
  let bookborrowed = books.filter(
    (book) => book.borrows.filter((list) => list.returned === false).length > 0
  );
  return bookborrowed.length;
}

//should return an ordered list of most common genres
//should limit the list to the top five
function getMostCommonGenres(books) {
  let map = {};
  books.forEach((num) => {
    if (map[num.genre]) {
      map[num.genre]++;
    } else {
      map[num.genre] = 1;
    }
  });
  return Object.entries(map)
    .map(([name, count]) => {
      return {
        name,
        count,
      };
    })
    .sort((a, b) => b.count - a.count)
    .slice(0, 5);
}

//should return an ordered list of most popular books
//should limit the list to the top five
function getMostPopularBooks(books) {
  return books
    .map((book) => {
      return { name: book.title, count: book.borrows.length };
    })
    .sort((a, b) => (a.count < b.count ? 1 : -1))
    .slice(0, 5);
}

//should return an ordered list of most popular authors
//should limit the list to the top five
function getMostPopularAuthors(books, authors) {
  let result = [];
  authors.forEach((author) => {
    let theAuthor = {
      name: `${author.name.first} ${author.name.last}`,
      count: 0,
    };
    books.forEach((book) => {
      if (book.authorId === author.id) {
        theAuthor.count += book.borrows.length;
      }
    });
    result.push(theAuthor);
  });
  return result.sort((a, b) => b.count - a.count).slice(0, 5);
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
