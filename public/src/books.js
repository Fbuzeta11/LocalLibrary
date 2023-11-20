//should return the author object when given a particular ID
function findAuthorById(authors, id) {
  return (found = authors.find((author) => author.id === id));
}

//should return the book object when given a particular ID
function findBookById(books, id) {
  return (found = books.find((book) => book.id === id));
}

//should return an array with two arrays: borrowed books and returned books
function partitionBooksByBorrowedStatus(books) {
  let booksReturned = books.filter((book) =>
    book.borrows.every((borrow) => borrow.returned === true)
  );

  let booksBorrowed = books.filter((book) =>
    book.borrows.some((borrow) => borrow.returned === false)
  );

  let finalArray = [[...booksBorrowed], [...booksReturned]];
  return finalArray;
}

//should return an array for a book of all borrowers with their information and return status
//should limit the list to ten borrowers
function getBorrowersForBook(book, accounts) {
  return book.borrows
    .map((borrow) => {
      let account = accounts.find((account) => account.id === borrow.id);

      return { ...borrow, ...account };
    })
    .slice(0, 10);
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
