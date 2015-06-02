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
    index = accounts.push(newAccount) - 1;
    var account = accounts[index];
    $(".new-account").fadeOut("slow");
    $("#accountInfo").empty();
    $("#accountInfo").append('<h2>Account Name: </h2><br><p>' + account.accountName + '</p><br><h2>Balance: </h2><br><p>$' + account.balance + '</p>' );
    $("#accountHistory").empty();
    $("#accountHistory").append('<h2>Account History: </h2><br><ul id="ledger"></ul>')
     account.ledger.forEach(function(entry) {
          $("ul#ledger").append("<li>" + entry + "</li>");
        });
    $("#accountDetails").delay(1000).fadeIn("slow");
  });

  $("span#modifyBalance").on('click', function() {
    var deposit = parseInt($("input#deposit").val());
    var withdraw = parseInt($("input#withdraw").val());
    var account = accounts[index];
    if(withdraw) {
       account.modifyBalance(withdraw, false);
    }

    if(deposit) {
      account.modifyBalance(deposit, true);
    }

    $("#accountInfo").empty();
    $("#accountHistory").empty();
    $("#accountInfo").append('<h2>Account Name: </h2><br><p>' + account.accountName + '</p><br><h2>Balance: </h2><br><p>$' + account.balance + '</p>' );
    $("#accountHistory").append('<h2>Account History: </h2><br><ul id="ledger"></ul>')
     account.ledger.forEach(function(entry) {
      $("ul#ledger").append("<li>" + entry + "</li>");
    });
  });

  $("span#back").on('click', function() {
  $("ul#accounts").empty();
    for (var i = 0; i < accounts.length; i++ ) {
      $("ul#accounts").append("<li><span class='account' id='" + index + "'>" + accounts[i].accountName + "</span></li>");
    }

  $("#accountDetails").fadeOut("slow");
  $(".new-account").delay(1000).fadeIn("slow");

  });

  $("#accountList").on('click', '.account', function() {
    index = parseInt($(this).attr('id'));

    var account = accounts[index];
    $(".new-account").fadeOut("slow");
    $("#accountInfo").empty();
    $("#accountInfo").append('<h2>Account Name: </h2><br><p>' + account.accountName + '</p><br><h2>Balance: </h2><br><p>$' + account.balance + '</p>' );
    $("#accountHistory").empty();
    $("#accountHistory").append('<h2>Account History: </h2><br><ul id="ledger"></ul>')
     account.ledger.forEach(function(entry) {
          $("ul#ledger").append("<li>" + entry + "</li>");
        });
    $("#accountDetails").delay(1000).fadeIn("slow");
  })
});
