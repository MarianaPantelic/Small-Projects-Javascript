/*
Project #1  : The Cashier Problem

Create a program that helps a cashier give adequate change to customers. The program should return the amount of notes and coins for the customer's change.
Example: If the price is €3.75 and the paid amount is €50, then the client should receive €46.25 back in change.
The expected output should be:
2 x €20 // 2 twenty euro notes
1 x €5 // 1 five euro note
1 x €1 // 1 euro
1 x €0.2 // 1 twenty cent coin
1 x €0.05 // 1 five cent coin
Example: Price: €4.50, Paid amount: €20, Change: 15.50
Expected output:
1 x €10
1 x €5
1 x €0.5
Notes
Include outputs for exceptions e.g. price: €4, paid amount: €3.
*/

"use strict";

let money = [
  {
    name: "50€",
    value: 50.0,
    counter: 0,
  },
  {
    name: "20€",
    value: 20.0,
    counter: 0,
  },
  {
    name: "10€",
    value: 10.0,
    counter: 0,
  },
  {
    name: "5€",
    value: 5.0,
    counter: 0,
  },
  {
    name: "2€",
    value: 2.0,
    counter: 0,
  },
  {
    name: "1€",
    value: 1.0,
    counter: 0,
  },
  {
    name: "50¢",
    value: 0.5,
    counter: 0,
  },
  {
    name: "20¢",
    value: 0.2,
    counter: 0,
  },
  {
    name: "10¢",
    value: 0.1,
    counter: 0,
  },
  {
    name: "5¢",
    value: 0.05,
    counter: 0,
  },
  {
    name: "2¢",
    value: 0.02,
    counter: 0,
  },
  {
    name: "1¢",
    value: 0.01,
    counter: 0,
  },
];

class Input {
  constructor(price, cash, change) {
    this.price = price;
    this.cash = cash;
    change = cash - price;
    this.change = change;
  }

  determineOutput() {
    if (this.change < 0) {
      throw new Error("The cash is not enough to pay the price!");
    } else {
      for (let i = 0; i < money.length; i++) {
        while (this.change >= money[i].value) {
          this.change -= money[i].value;
          if (this.change < 1) {
            this.change = parseFloat(this.change).toPrecision(2);
          }
          money[i].counter++;
        }
      }
    }
    for (let i = 0; i < money.length; i++) {
      if (money[i].counter > 0) {
        console.log(`${money[i].counter} x ${money[i].name}`);
      }
    }
  }
}

let customer1 = new Input(11.12, 100.0);

console.log(customer1);

customer1.determineOutput();

/* Result:
Input { price: 5.55, cash: 100, change: 94.45 }
1 x 50€
2 x 20€
2 x 2€
2 x 20¢
1 x 5¢ */
