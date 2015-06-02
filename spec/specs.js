describe('Account', function() {
  it('creates a bank account with the given specifications', function() {
    var testAccount = new Account("Jim", 300);
    expect(testAccount.accountName).to.equal("Jim");
    expect(testAccount.balance).to.equal(300);
    expect(testAccount.ledger).to.eql([]);
  });

  it('allows changing the balance', function() {
    var testAccount = new Account("Jim", 300);
    testAccount.modifyBalance(200, true);
    expect(testAccount.balance).to.equal(500);
  });

});
