"use strict";

let money = [
  {
    name: "50€",
    value: 50.0,
    counter: 0,
    img: "img/50euro.png",
  },
  {
    name: "20€",
    value: 20.0,
    counter: 0,
    img: "img/20euro.png",
  },
  {
    name: "10€",
    value: 10.0,
    counter: 0,
    img: "img/10euro.png",
  },
  {
    name: "5€",
    value: 5.0,
    counter: 0,
    img: "img/5euro.png",
  },
  {
    name: "2€",
    value: 2.0,
    counter: 0,
    img: "img/2euro.jpg",
  },
  {
    name: "1€",
    value: 1.0,
    counter: 0,
    img: "img/1euro.png",
  },
  {
    name: "50¢",
    value: 0.5,
    counter: 0,
    img: "img/50cent.png",
  },
  {
    name: "20¢",
    value: 0.2,
    counter: 0,
    img: "img/20cent.png",
  },
  {
    name: "10¢",
    value: 0.1,
    counter: 0,
    img: "img/10cent.png",
  },
  {
    name: "5¢",
    value: 0.05,
    counter: 0,
    img: "img/5cent.png",
  },
  {
    name: "2¢",
    value: 0.02,
    counter: 0,
    img: "img/2cent.png",
  },
  {
    name: "1¢",
    value: 0.01,
    counter: 0,
    img: "img/1cent.png",
  },
];

function countChange() {
  let price = document.getElementById("price").value;
  let cash = document.getElementById("cash").value;

  let grid = document.getElementById("grid");

  document.getElementById("change").value = cash - price;

  let change = cash - price;
  let len = money.length;

  if (change < 0) {
    alert("The cash is not enough to pay the price!");
  } else {
    for (let i = 0; i < len; i++) {
      while (change >= money[i].value) {
        change -= money[i].value;
        if (change < 1) {
          change = parseFloat(change).toPrecision(2);
        }
        money[i].counter++;
      }
    }
  }

  for (let i = 0; i < len; i++) {
    if (money[i].counter > 0) {
      let result = document.createElement("figure");
      grid.appendChild(result);

      let image = document.createElement("img");
      image.setAttribute("src", money[i].img);
      result.appendChild(image);

      let title = document.createElement("figcaption");
      title.innerHTML = money[i].counter + "x";
      result.appendChild(title);
    }
  }
}

function reset() {
  let len = money.length;
  document.getElementById("price").value = "";
  document.getElementById("cash").value = "";
  document.getElementById("change").value = "";
  document.getElementById("grid").innerHTML = "";
  for (let i = 0; i < len; i++) {
    money[i].counter = 0;
  }
}
