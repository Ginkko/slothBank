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

  it('tracks deposits and withdraws in the ledger', function() {
    var testAccount = new Account("Jim", 300);
    testAccount.modifyBalance(200, true);
    expect(testAccount.ledger).to.eql([200]);
  });

  it('tracks multiple deposits and withdraws in the ledger', function() {
    var testAccount = new Account("Jim", 300);
    testAccount.modifyBalance(200, true);
    testAccount.modifyBalance(300, false);
    testAccount.modifyBalance(100, true);
    expect(testAccount.balance).to.equal(300);
    expect(testAccount.ledger).to.eql([200, -300, 100]);
  });

});
