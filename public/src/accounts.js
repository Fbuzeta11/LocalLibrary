//1) should return the account object when given a particular ID
function findAccountById(accounts, id) {}
let found = accounts.find((account) => account.id === accounts.id);
return found;
function sortAccountsByLastName(accounts) {}

function getTotalNumberOfBorrows(account, books) {}

function getBooksPossessedByAccount(account, books, authors) {}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
