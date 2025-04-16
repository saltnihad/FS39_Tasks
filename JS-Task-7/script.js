//#region Task-1

const



const client = {
    fullName: "John Doe",
    creditLimit: 5000,
    balance: -2000,
    percentOfMinPayment: 0.1, 
  
    getBalance: function () {
      if (this.balance >= 0) {
        return `Balansınız ${this.balance}₼`;
      } else {
        return `Borcunuz ${-(this.balance)}₼`;
      }
    },
  
    getMinPayment: function () {
      if (this.balance < 0) {
        const minPayment = -(this.balance) * this.percentOfMinPayment;
        return `Minimum ödənişiniz is ${minPayment}₼`;
      } else {
        return "Sizin borcunuz yoxdur";
      }
    },
  
    withdraw: function (amount) {
      const availableFunds = this.balance + this.creditLimit;
  
      if (amount <= availableFunds) {
        this.balance -= amount;
        console.log(`${amount}₼ məxaric etdiniz.Balansınız ${this.balance}₼`);
      } else {
        console.warn("Balansda kifayət qədər məbləğ yoxdur.");
      }
    },
  
    refill: function (amount) {
      this.balance += amount;
      console.log(`Balansınız ${amount}₼ artırıldı. Yeni balansınız ${this.balance}₼`);
    }
  };

  console.log(client.getBalance());          
  console.log(client.getMinPayment());      
  client.withdraw(550);                    
  client.refill(1000);                      
  console.log(client.getBalance()); 

//#endregion