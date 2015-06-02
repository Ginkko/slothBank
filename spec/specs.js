describe('Account', function() {
  it('creates a bank account with the given specifications', function() {
    var testAccount = new Account("Jim", 300);
    expect(testAccount.accountName).to.equal("Jim");
    expect(testAccount.balance).to.equal(300);
  });

});
