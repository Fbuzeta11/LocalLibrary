//1) should return the account object when given a particular ID
function findAccountById(accounts, id) {
  let found = accounts.find((account) => account.id === id);
  return found;
}

//2) should return the list of accounts ordered by last name
function sortAccountsByLastName(accounts) {
accounts.sort((accountA, accountB) => {
accountA.name.last.toLowerCase() > accountB.name.last.toLowerCase() ? 1 : -1
);
return accounts;
}


//3) should return the number of times an account has created a 'borrow' record
function getTotalNumberOfBorrows(account, books) {
  let result = 0;
  for (let i = 0; i < books.length; i++){
    for (let b = 0; b < books[i].borrows.length; b++) {
      if (account.id === books[i].borrows[b].id) {
        result += 1;
      }
    }
  }
  return result;
}


//4) should return all of the books taken out by an account with the author embedde
function getBooksPossessedByAccount(account, books, authors) {
   
   return (
    books
      
      .filter(
        (book) => book.borrows[0].id === account.id && !book.borrows[0].returned
      )
      
      .map((book) => {
        book["author"] = authors.find((author) => author.id === book.authorId);
        return book;
      })
  );
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
