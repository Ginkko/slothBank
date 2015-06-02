function Account(accountName, balance) {
  this.accountName = accountName;
  this.balance = balance;
  this.ledger = [];
}

Account.prototype.modifyBalance = function(amount, isDeposit) {
  if(isDeposit) {
    this.balance += amount;
    this.ledger.push(amount);
  } else {
    this.balance -= amount;
    this.ledger.push(-amount);
  }
}
