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

var accounts = []
var index = 0
$(document).ready(function() {

  $("form#new-account").submit(function(event) {
    event.preventDefault();
    var newAccountName = $("input#new-accountName").val();
    var newBalance = parseInt($("input#new-balance").val());
    var newAccount = new Account(newAccountName, newBalance);
    accounts.push(newAccount);
    $("form#new-account").fadeOut("slow");
    $("#accountInfo").append('<h2>Account Name: </h2><br><p>' + newAccount.accountName + '</p><br><h2>Balance: </h2><br><p>$' + newAccount.balance + '</p>' );
    $("#accountHistory").append('<h2>Account History: </h2><br><ul id="ledger"></ul>')
     newAccount.ledger.forEach(function(entry) {
          $("ul#ledger").append("<li>" + entry + "</li>");
        });
    $("#accountDetails").delay(1000).fadeIn("slow");
  });

  $("span.btn").on('click', function() {
    var deposit = parseInt($("input#deposit").val());
    var withdraw = parseInt($("input#withdraw").val());
    var newAccount = accounts[index];
    if(withdraw) {
       newAccount.modifyBalance(withdraw, false);
    } else {
      newAccount.modifyBalance(deposit, true);
    }

    $("#accountInfo").empty();
    $("#accountHistory").empty();
    $("#accountInfo").append('<h2>Account Name: </h2><br><p>' + newAccount.accountName + '</p><br><h2>Balance: </h2><br><p>$' + newAccount.balance + '</p>' );
    $("#accountHistory").append('<h2>Account History: </h2><br><ul id="ledger"></ul>')
     newAccount.ledger.forEach(function(entry) {
      $("ul#ledger").append("<li>" + entry + "</li>");
    });
  });
});
