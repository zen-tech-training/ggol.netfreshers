function BankAccount(initialBalance) {
    var balance = initialBalance || 0;
  
    function isValidAmount(amount) {
      return !isNaN(amount) && amount > 0;
    }
  
    this.deposit = function(amount) {
      if (isValidAmount(amount)) {
        balance += amount;
        console.log(`Deposited ${amount}. New balance is ${balance}.`);
      } else {
        console.log("Invalid amount for deposit.");
      }
    };
  
    this.withdraw = function(amount) {
      if (isValidAmount(amount) && balance >= amount) {
        balance -= amount;
        console.log(`Withdrawn ${amount}. New balance is ${balance}.`);
      } else {
        console.log("Insufficient funds or invalid amount for withdrawal.");
      }
    };
  
    this.getBalance = function() {
      return balance;
    };
  }
  
  var account = new BankAccount(1000);
  account.deposit(500);
  account.withdraw(200);
  console.log("Current balance:", account.getBalance());
  account.withdraw(1400);